/**
 * Video link parsing and thumbnail derivation for In Conversation.
 * Server-side only (the oEmbed lookup uses fetch caching); VideoCard
 * receives finished embedSrc/thumbnail values and stays dumb.
 */

interface ParsedVideo {
  platform: "youtube" | "spotify";
  embedSrc: string;
  /** Set for YouTube (CDN thumbnail); Spotify art needs the oEmbed call. */
  thumbnail: string | null;
}

/** youtu.be/<id>, watch?v=<id>, /shorts/<id>, /embed/<id>, /live/<id> */
const YOUTUBE_ID_PATTERNS = [
  /youtu\.be\/([\w-]{11})/,
  /[?&]v=([\w-]{11})/,
  /youtube(?:-nocookie)?\.com\/(?:shorts|embed|live)\/([\w-]{11})/,
];

const SPOTIFY_PATTERN =
  /open\.spotify\.com\/(?:intl-[a-z-]+\/)?(episode|show|track)\/([\w]+)/;

export const parseVideoUrl = (url: string): ParsedVideo | null => {
  for (const pattern of YOUTUBE_ID_PATTERNS) {
    const id = url.match(pattern)?.[1];
    if (id) {
      return {
        platform: "youtube",
        // Privacy-enhanced host keeps the cookie-page promise; autoplay
        // is right here because the iframe only exists after a click.
        embedSrc: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      };
    }
  }

  const spotify = url.match(SPOTIFY_PATTERN);
  if (spotify) {
    const [, kind, id] = spotify;
    return {
      platform: "spotify",
      embedSrc: `https://open.spotify.com/embed/${kind}/${id}`,
      thumbnail: null,
    };
  }

  return null;
};

/**
 * Episode cover art via Spotify's public oEmbed endpoint. Cached a day;
 * any failure returns null and the card falls back to its calm
 * placeholder frame rather than breaking the page.
 */
export const fetchSpotifyThumbnail = async (
  url: string,
): Promise<string | null> => {
  try {
    const response = await fetch(
      `https://open.spotify.com/oembed?url=${encodeURIComponent(url)}`,
      { next: { revalidate: 86400 } },
    );
    if (!response.ok) return null;
    const json = (await response.json()) as { thumbnail_url?: string };
    return json.thumbnail_url ?? null;
  } catch {
    return null;
  }
};
