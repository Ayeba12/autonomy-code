import type { ContentSource } from "../source";
import { localContent } from "../local";
import type { Article, VideoItem, VideoSection } from "../types";
import { VIDEO_SECTIONS } from "../video-sections";
import { fetchSpotifyThumbnail, parseVideoUrl } from "../video-utils";

/**
 * WordPress-backed content source (LocalWP + WPGraphQL).
 *
 * Published articles come from WordPress — title, body, excerpt, category
 * (pillar pill), featured image, and read time all sync from wp-admin.
 * Draft outlines and every other content type stay with the local seed.
 * If WordPress is unreachable (Local not running, build machine offline),
 * articles fall back to the local seed so builds and pages never break.
 */

const WP_URL = process.env.WORDPRESS_API_URL;

interface WpPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  categories: { nodes: { name: string }[] };
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
      mediaDetails: { width: number; height: number } | null;
    };
  } | null;
  tacSubtitle: string | null;
  tacReadTime: string | null;
  tacHeroImage: string | null;
}

const ARTICLES_QUERY = /* GraphQL */ `
  query TacArticles {
    posts(first: 100, where: { status: PUBLISH }) {
      nodes {
        slug
        title
        date
        excerpt
        content(format: RENDERED)
        categories { nodes { name } }
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails { width height }
          }
        }
        tacSubtitle
        tacReadTime
        tacHeroImage
      }
    }
  }
`;

/** Strip tags and decode the entities WP commonly emits in excerpts. */
const toPlainText = (html: string): string =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&hellip;/g, "…")
    .replace(/\s+/g, " ")
    .trim();

/** Words-per-minute estimate when no explicit read time is set in WP. */
const computeReadTime = (html: string): string => {
  const words = html
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
};

/** First real category; WP's "Uncategorized" never reaches the UI. */
const pillarOf = (post: WpPost): string =>
  post.categories.nodes.map((c) => c.name).find((n) => n !== "Uncategorized") ??
  "Writing";

const heroImageOf = (post: WpPost): Article["heroImage"] => {
  const featured = post.featuredImage?.node;
  if (featured?.sourceUrl) {
    return {
      src: featured.sourceUrl,
      alt: featured.altText || post.title,
      width: featured.mediaDetails?.width,
      height: featured.mediaDetails?.height,
    };
  }
  return post.tacHeroImage
    ? { src: post.tacHeroImage, alt: post.title }
    : undefined;
};

const toArticle = (post: WpPost): Article => ({
  slug: post.slug,
  title: post.title,
  subtitle: post.tacSubtitle ?? "",
  pillar: pillarOf(post),
  date: post.date.slice(0, 10),
  readTime: post.tacReadTime || computeReadTime(post.content ?? ""),
  excerpt: toPlainText(post.excerpt ?? ""),
  draft: false,
  body: [],
  bodyHtml: post.content ?? "",
  heroImage: heroImageOf(post),
});

/** POST one GraphQL query; null (with a warning) on any failure. */
const fetchGraphql = async <T>(query: string, label: string): Promise<T | null> => {
  if (!WP_URL) return null;
  try {
    const response = await fetch(WP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      // Dev: always fresh so wp-admin edits show on reload.
      // Prod: cached, revalidated every 5 minutes.
      ...(process.env.NODE_ENV === "development"
        ? { cache: "no-store" as const }
        : { next: { revalidate: 300 } }),
    });
    if (!response.ok) throw new Error(`WPGraphQL responded ${response.status}`);
    return ((await response.json()) as { data?: T }).data ?? null;
  } catch (error) {
    console.warn(
      `[content/wp] falling back to local ${label}: ${error instanceof Error ? error.message : error}`,
    );
    return null;
  }
};

const fetchWpArticles = async (): Promise<Article[] | null> => {
  const data = await fetchGraphql<{ posts?: { nodes?: WpPost[] } }>(
    ARTICLES_QUERY,
    "articles",
  );
  const nodes = data?.posts?.nodes;
  return nodes ? nodes.map(toArticle) : null;
};

/* ------------------------------------------------------------------ */
/* In Conversation videos (tac_video CPT, mu-plugin GraphQL fields)    */
/* ------------------------------------------------------------------ */

interface WpVideo {
  title: string;
  date: string;
  videoUrl: string | null;
  videoSection: string | null;
  videoHost: string | null;
  videoThumb: string | null;
}

const VIDEOS_QUERY = /* GraphQL */ `
  query TacVideos {
    conversationVideos(first: 100) {
      nodes {
        title
        date
        videoUrl
        videoSection
        videoHost
        videoThumb
      }
    }
  }
`;

const KNOWN_SECTIONS = new Set<string>(
  VIDEO_SECTIONS.map((section) => section.slug),
);

/** Unknown sections are skipped quietly; a bad row never breaks the page. */
const toVideo = async (node: WpVideo): Promise<VideoItem | null> => {
  if (!node.videoSection || !KNOWN_SECTIONS.has(node.videoSection)) return null;
  const parsed = node.videoUrl ? parseVideoUrl(node.videoUrl) : null;
  const thumbnail =
    node.videoThumb ??
    parsed?.thumbnail ??
    (parsed?.platform === "spotify" && node.videoUrl
      ? await fetchSpotifyThumbnail(node.videoUrl)
      : null);
  return {
    title: node.title,
    section: node.videoSection as VideoSection,
    host: node.videoHost ?? "",
    date: node.date.slice(0, 10),
    url: node.videoUrl,
    platform: parsed?.platform ?? null,
    embedSrc: parsed?.embedSrc ?? null,
    thumbnail,
  };
};

/** WP videos when reachable, seed placeholders otherwise. Newest first. */
const getVideos = async (): Promise<VideoItem[]> => {
  const data = await fetchGraphql<{
    conversationVideos?: { nodes?: WpVideo[] };
  }>(VIDEOS_QUERY, "videos");
  const nodes = data?.conversationVideos?.nodes;
  if (!nodes) return localContent.getVideos();
  const videos = (await Promise.all(nodes.map(toVideo))).filter(
    (video): video is VideoItem => video !== null,
  );
  return videos.sort((a, b) => b.date.localeCompare(a.date));
};

/** WP published articles + local draft outlines, newest first. */
const getArticles = async (): Promise<Article[]> => {
  const [wpArticles, localArticles] = await Promise.all([
    fetchWpArticles(),
    localContent.getArticles(),
  ]);
  if (!wpArticles) return localArticles;
  // A draft outline disappears from "More on the way" once its slug
  // is published in WordPress.
  const publishedSlugs = new Set(wpArticles.map((article) => article.slug));
  const drafts = localArticles.filter(
    (article) => article.draft && !publishedSlugs.has(article.slug),
  );
  return [...wpArticles, ...drafts].sort((a, b) => b.date.localeCompare(a.date));
};

export const wpContent: ContentSource = {
  ...localContent,
  getArticles,
  getVideos,
  getArticle: async (slug) => {
    const articles = await getArticles();
    return articles.find((article) => article.slug === slug) ?? null;
  },
};
