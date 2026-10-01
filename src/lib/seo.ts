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
}: SeoInput): Metadata => {
  const shareTitle = title
    ? `${title} · ${SITE_NAME}`
    : `${SITE_NAME} · The NO GraGra Practice`;
  const url = absoluteUrl(path || "/");
  const images = [{ url: absoluteUrl(image) }];
  return {
    ...(title ? { title } : {}),
    description,
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
