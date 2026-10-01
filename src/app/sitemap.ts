import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { content } from "@/content/source";
import { VIDEO_SECTIONS } from "@/content/video-sections";

const SITE = "https://www.theautonomycode.com";

/** Refresh with the essays, so newly published writing appears. */
export const revalidate = 300;

/** The fixed pages, in rough order of weight. */
const pages: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/annual-reset", priority: 0.9 },
  { path: "/autonomy-compass", priority: 0.9 },
  { path: "/method", priority: 0.8 },
  { path: "/work-together", priority: 0.8 },
  { path: "/sabi-core", priority: 0.8 },
  { path: "/about", priority: 0.8 },
  { path: "/writing", priority: 0.8 },
  { path: "/legacy", priority: 0.6 },
  { path: "/in-conversation", priority: 0.6 },
  { path: "/speaking", priority: 0.6 },
  { path: "/wider-work", priority: 0.5 },
  { path: "/contact", priority: 0.5 },
  { path: "/privacy-policy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
  { path: "/cookies", priority: 0.2 },
];

/**
 * /sitemap.xml — every public page. The checkout, thank-you and
 * style-guide pages are deliberately left out.
 */
const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const articles = (await content.getArticles()).filter((article) => !article.draft);

  return [
    ...pages.map(({ path, priority }) => ({ url: `${SITE}${path}`, priority })),
    ...services.map((service) => ({
      url: `${SITE}/services/${service.slug}`,
      priority: 0.6,
    })),
    ...VIDEO_SECTIONS.map((section) => ({
      url: `${SITE}/in-conversation/${section.slug}`,
      priority: 0.4,
    })),
    ...articles.map((article) => ({
      url: `${SITE}/writing/${article.slug}`,
      lastModified: new Date(article.date),
      priority: 0.7,
    })),
  ];
};

export default sitemap;
