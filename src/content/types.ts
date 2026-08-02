/**
 * Domain content models for The Autonomy Code site (see content.md).
 *
 * CMS-agnostic: pages consume these types only, never a CMS SDK.
 * The WordPress swap path from the template base is unchanged.
 */

export interface ImageRef {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/** Portable rich text, maps onto WP blocks later. */
export type RichBlock =
  | { type: "h2" | "h3" | "h4"; text: string }
  | { type: "p"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "image"; image: ImageRef }
  | { type: "divider" };

/** One of the five pillars of the Autonomy Code. */
export interface Pillar {
  slug: string;
  name: string;
  index: string;
  /** The movement, e.g. "From Borrowed Identity to Owned Ground." */
  movement: string;
  description: string;
  /** Editorial image used in image-rich pillar layouts. */
  image?: ImageRef;
}

/** A rung of the Ladder (Scan, SABI CORE, Legacy). */
export interface LadderTier {
  slug: string;
  name: string;
  /** Card copy on Work Together — named, not priced. */
  summary: string;
  cta: { label: string; href: string };
  /** Price shown ONLY on the tier's own landing page. */
  price: string;
  order: number;
  /** Large editorial image for the tier card / landing hero. */
  image?: ImageRef;
}

/** Writing article. Category is a pillar name. */
export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  pillar: string;
  date: string;
  readTime: string;
  excerpt: string;
  /** Full drafts have body; outlined articles ship as `draft: true`. */
  draft: boolean;
  body: RichBlock[];
  /** Rendered HTML body (WordPress-backed articles). Wins over `body`. */
  bodyHtml?: string;
  /** Thumbnail / header image for listing cards and the article page. */
  heroImage?: ImageRef;
}

/** In Conversation item (interview, talk, podcast episode). */
/** Archive slugs are the single source of truth for section identity. */
export type VideoSection =
  | "interviews"
  | "podcasts"
  | "talks-and-panels"
  | "others";

/** One In Conversation video (YouTube or Spotify), CMS-managed. */
export interface VideoItem {
  title: string;
  section: VideoSection;
  /** Host or show name, shown under the title. */
  host: string;
  /** ISO date; drives "latest" ordering and the displayed year. */
  date: string;
  /** Original pasted link; null while a placeholder stands in. */
  url: string | null;
  platform: "youtube" | "spotify" | null;
  /** Derived iframe src; null when the url is missing or unparseable. */
  embedSrc: string | null;
  /** Thumbnail URL (YouTube CDN, Spotify art, or WP upload). */
  thumbnail: string | null;
}

/** Quiet client-proof quote. */
export interface ProofQuote {
  quote: string;
  attribution: string;
  /** Small portrait shown beside the attribution. */
  avatar?: ImageRef;
}

export interface SpeakingInfo {
  themes: string[];
  audiences: string[];
  formats: { name: string; note: string }[];
}

/** Quiet numbers (About / Method). */
export interface StatItem {
  value: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** Link-out card on The Wider Work. */
export interface WiderWorkLink {
  name: string;
  description: string;
  href: string;
}
