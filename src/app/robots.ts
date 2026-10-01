import type { MetadataRoute } from "next";

/** /robots.txt — everything public is open; the working pages are not. */
const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
    disallow: ["/api/", "/annual-reset/checkout", "/annual-reset/thank-you", "/utility-pages/"],
  },
  sitemap: "https://www.theautonomycode.com/sitemap.xml",
});

export default robots;
