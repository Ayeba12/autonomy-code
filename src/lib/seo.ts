import type { Metadata } from "next";

/** The one canonical origin for the live site. */
export const SITE_URL = "https://www.theautonomycode.com";
export const SITE_NAME = "The Autonomy Code";

/** DK's public profiles, used wherever search engines ask "same as". */
export const SAME_AS = [
  "https://www.dkjonah.com/",
  "https://www.linkedin.com/in/dk-jonah-8527112b/",
  "https://dkjonah.substack.com/",
  "https://www.youtube.com/@dkjonah",
  "https://www.tiktok.com/@dkjonah",
];

/**
 * The terms the practice should be found for, carried on every page.
 * Page-specific terms are added in each page's own `seo()` call.
 *
 * DK's keyword plan (October 2026) has a DO NOT CHASE list, which also
 * guards her positioning. Never add: productivity coach, life coach,
 * executive coach, motivational speaker, time management tips, how to
 * be more disciplined, or the bare word "autonomy".
 */
export const BRAND_KEYWORDS = [
  "The Autonomy Code",
  "DK Jonah",
  "The NO GraGra Practice",
  "NO GraGra",
  "Knowledge Architect",
  "autonomy coaching",
  "personal autonomy",
  "self-leadership",
  "sustainable productivity",
  "ownership and self-governance",
  "coaching for coaches and consultants",
];

/** Share card used when a page has no image of its own (1200×630). */
export const DEFAULT_OG_IMAGE = "/images/og/default.jpg";

interface SeoInput {
  /** Page title, without the site name. Omit on the home page. */
  title?: string;
  description: string;
  /** Path from the site root, e.g. "/about". "" is the home page. */
  path: string;
  /** Share image: a site path or a full URL. */
  image?: string;
  type?: "website" | "article";
  /** ISO date, for articles. */
  publishedTime?: string;
  /** Keep the page out of search results. */
  noindex?: boolean;
  /** Search terms specific to this page; the brand terms are added. */
  keywords?: string[];
}

/** Absolute URL for a site path (full URLs pass through). */
export const absoluteUrl = (path: string) =>
  /^https?:\/\//.test(path) ? path : `${SITE_URL}${path}`;

/**
 * One page's metadata: title and description, the canonical address, and
 * the Open Graph and Twitter share cards. Every page builds its metadata
 * through this so none of them drift apart.
 */
export const seo = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  noindex = false,
  keywords = [],
}: SeoInput): Metadata => {
  const shareTitle = title
    ? `${title} · ${SITE_NAME}`
    : `${SITE_NAME} · Coaching for Ownership and Self-Governance`;
  const url = absoluteUrl(path || "/");
  const images = [{ url: absoluteUrl(image) }];
  return {
    ...(title ? { title } : {}),
    description,
    keywords: [...keywords, ...BRAND_KEYWORDS],
    alternates: { canonical: url },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title: shareTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type,
      images,
      ...(type === "article" && publishedTime
        ? { publishedTime, authors: ["DK Jonah"] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: images.map((item) => item.url),
    },
  };
};
