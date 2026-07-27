import type { ContentSource } from "../source";
import { localContent } from "../local";
import type { Article } from "../types";

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

const fetchWpArticles = async (): Promise<Article[] | null> => {
  if (!WP_URL) return null;
  try {
    const response = await fetch(WP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: ARTICLES_QUERY }),
      next: { revalidate: 300 },
    });
    if (!response.ok) throw new Error(`WPGraphQL responded ${response.status}`);
    const json = (await response.json()) as {
      data?: { posts?: { nodes?: WpPost[] } };
    };
    const nodes = json.data?.posts?.nodes;
    if (!nodes) throw new Error("WPGraphQL returned no posts field");
    return nodes.map(toArticle);
  } catch (error) {
    console.warn(
      `[content/wp] falling back to local articles: ${error instanceof Error ? error.message : error}`,
    );
    return null;
  }
};

/** WP published articles + local draft outlines, newest first. */
const getArticles = async (): Promise<Article[]> => {
  const [wpArticles, localArticles] = await Promise.all([
    fetchWpArticles(),
    localContent.getArticles(),
  ]);
  if (!wpArticles) return localArticles;
  const drafts = localArticles.filter((article) => article.draft);
  return [...wpArticles, ...drafts].sort((a, b) => b.date.localeCompare(a.date));
};

export const wpContent: ContentSource = {
  ...localContent,
  getArticles,
  getArticle: async (slug) => {
    const articles = await getArticles();
    return articles.find((article) => article.slug === slug) ?? null;
  },
};
