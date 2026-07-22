import type { BlogPost, ImageRef, RichBlock } from "../types";

/**
 * Seed data from `_analysis/blog-details.md` + `_analysis/blogs.md`.
 * The three captured posts share the same demo body; the only text
 * difference is the first item of the second ordered list. Images differ
 * per post. Dates converted "January 10, 2026" -> ISO "2026-01-10".
 */

const AUTHOR = {
  name: "Jhon Lother",
  avatar: { src: "/images/author-image-06.svg", alt: "" },
};

const EXCERPT =
  "Explore innovative trends influencing design across industries worldwide today.";

/**
 * Shared body builder. The source's empty spacer paragraph (zero-width char)
 * is skipped per the spec's rebuild note. The pull-quote uses curly quotes
 * per the captured source ("quote in curly quotes").
 */
function buildBody(options: {
  mainFigure: ImageRef;
  imagePair: [ImageRef, ImageRef];
  secondListFirstItem: string;
}): RichBlock[] {
  return [
    {
      type: "h4",
      text: "The Intersection of Creative Vision and Strategic Execution",
    },
    {
      type: "p",
      text: "In a rapidly evolving digital landscape, the success of a project lies in the balance between aesthetic appeal and functional clarity. Every great idea starts with a simple concept, but it is the meticulous attention to detail and a deep understanding of the audience that transforms it into a meaningful experience. Whether we are building a brand identity or a digital product, our goal remains the same: to create lasting impact through thoughtful design.",
    },
    {
      type: "p",
      text: "By focusing on user-centered principles, we ensure that every interaction feels intuitive and purposeful. This approach doesn't just solve immediate problems; it builds a foundation for long-term growth and sustainable brand loyalty.",
    },
    { type: "image", image: options.mainFigure },
    { type: "h4", text: "Key Principles of Modern Design" },
    {
      type: "p",
      text: "To deliver results that truly resonate, we follow a set of core principles that guide our creative process from start to finish. These elements are essential for any project looking to stand out in a crowded market:",
    },
    {
      type: "ol",
      items: [
        "Intentional Simplicity: Removing the noise to focus on what truly matters to the user.",
        "Visual Consistency: Creating a unified language that speaks clearly across all platforms.",
        "Adaptive Innovation: Staying ahead of trends while maintaining a timeless appeal.",
      ],
    },
    { type: "image", image: options.imagePair[0] },
    { type: "image", image: options.imagePair[1] },
    {
      type: "quote",
      text: "“The best solutions are often the ones that feel the most natural. We don't just design for the eye; we design for the experience, ensuring every touchpoint tells a story that matters.”",
      cite: "— Creative Lead",
    },
    { type: "divider" },
    { type: "h4", text: "Refining the Digital Experience" },
    {
      type: "p",
      text: "Optimization is a continuous journey. Once a project is live, the focus shifts to understanding how it performs in the real world. By analyzing feedback and behavior, we can make informed decisions that refine the user journey and maximize performance over time.",
    },
    {
      type: "ol",
      items: [
        options.secondListFirstItem,
        "Visual Consistency: Creating a unified language that speaks clearly across all platforms.",
        "Adaptive Innovation: Staying ahead of trends while maintaining a timeless appeal.",
      ],
    },
    { type: "divider" },
    { type: "h4", text: "A Commitment to Quality" },
    {
      type: "p",
      text: "Our philosophy is built on the belief that quality should never be compromised. By staying true to our craft and prioritizing the needs of the end-user, we create digital solutions that are not only beautiful but also effective and enduring.",
    },
  ];
}

const INTENTIONAL_SIMPLICITY =
  "Intentional Simplicity: Removing the noise to focus on what truly matters to the user.";

export const blogPosts: BlogPost[] = [
  {
    slug: "the-power-of-minimalist-design",
    title: "The Power of Minimalist Design",
    category: "Design",
    date: "2026-01-10",
    readTime: "3 min read",
    excerpt: EXCERPT,
    author: AUTHOR,
    heroImage: {
      src: "/images/blogs-thumbnail-image-01.png",
      alt: "Blogs Thumbnail Image",
    },
    body: buildBody({
      mainFigure: { src: "/images/blogs-main-image.png", alt: "" },
      imagePair: [
        {
          src: "/images/blogs-sub-image-01.png",
          alt: "The Power of Minimalist Design",
        },
        {
          src: "/images/blogs-sub-image-02.png",
          alt: "The Power of Minimalist Design",
        },
      ],
      secondListFirstItem:
        "Continuous Improvement: Always looking for ways to enhance the user flow.",
    }),
  },
  {
    slug: "digital-trends-to-watch-in-2026",
    title: "Digital Trends to Watch in 2026",
    category: "Trends",
    date: "2026-01-10",
    readTime: "3 min read",
    excerpt: EXCERPT,
    author: AUTHOR,
    heroImage: {
      src: "/images/blogs-thumbnail-image-02.png",
      alt: "Blogs Thumbnail Image",
    },
    body: buildBody({
      // Figure asset 6991d35f (distinct from the OG-image asset of the same name).
      mainFigure: { src: "/images/blog-main-image-01-2.png", alt: "" },
      imagePair: [
        {
          src: "/images/blog-main-image2.png",
          alt: "Digital Trends to Watch in 2026",
        },
        {
          src: "/images/blog-main-image3.png",
          alt: "Digital Trends to Watch in 2026",
        },
      ],
      secondListFirstItem: INTENTIONAL_SIMPLICITY,
    }),
  },
  {
    slug: "our-creative-workflow-defined",
    title: "Our Creative Workflow Defined",
    category: "Process",
    date: "2026-01-10",
    readTime: "3 min read",
    excerpt: EXCERPT,
    author: AUTHOR,
    heroImage: {
      src: "/images/blogs-thumbnail-image.png",
      alt: "Blogs Thumbnail Image",
    },
    body: buildBody({
      // Figure asset 6991d4b6 (same asset as this post's OG image).
      mainFigure: { src: "/images/blog-main-image-01-3.png", alt: "" },
      imagePair: [
        {
          src: "/images/blog-mian-image-02.png",
          alt: "Our Creative Workflow Defined",
        },
        {
          src: "/images/blog-main-image-03.png",
          alt: "Our Creative Workflow Defined",
        },
      ],
      secondListFirstItem: INTENTIONAL_SIMPLICITY,
    }),
  },
  // Posts 4-6 were not captured as detail pages; card data comes from
  // `_analysis/blogs.md` (grid rows 4-6). Their bodies reuse the shared demo
  // body (identical across all captured posts) with the card thumbnail as the
  // main figure and the generic sub-image pair.
  {
    slug: "the-roi-of-great-user-experience",
    title: "The ROI of Great User Experience",
    category: "UX/UI",
    date: "2026-01-10",
    readTime: "3 min read",
    excerpt: EXCERPT,
    author: AUTHOR,
    heroImage: {
      src: "/images/blog-thumbnail-image-03.png",
      alt: "Blogs Thumbnail Image",
    },
    body: buildBody({
      mainFigure: { src: "/images/blog-thumbnail-image-03.png", alt: "" },
      imagePair: [
        {
          src: "/images/blogs-sub-image-01.png",
          alt: "The ROI of Great User Experience",
        },
        {
          src: "/images/blogs-sub-image-02.png",
          alt: "The ROI of Great User Experience",
        },
      ],
      secondListFirstItem: INTENTIONAL_SIMPLICITY,
    }),
  },
  {
    slug: "building-brands-that-last",
    title: "Building Brands That Last",
    category: "Branding",
    date: "2026-01-10",
    readTime: "3 min read",
    excerpt: EXCERPT,
    author: AUTHOR,
    heroImage: {
      src: "/images/blog-thumbnail-image-05.png",
      alt: "Blogs Thumbnail Image",
    },
    body: buildBody({
      mainFigure: { src: "/images/blog-thumbnail-image-05.png", alt: "" },
      imagePair: [
        {
          src: "/images/blogs-sub-image-01.png",
          alt: "Building Brands That Last",
        },
        {
          src: "/images/blogs-sub-image-02.png",
          alt: "Building Brands That Last",
        },
      ],
      secondListFirstItem: INTENTIONAL_SIMPLICITY,
    }),
  },
  {
    slug: "design-trends-shaping-future",
    title: "Design Trends Shaping Future",
    category: "Webflow",
    date: "2026-01-10",
    readTime: "3 min read",
    excerpt: EXCERPT,
    author: AUTHOR,
    heroImage: {
      src: "/images/blog-thumbnail-image-06.png",
      alt: "Blogs Thumbnail Image",
    },
    body: buildBody({
      mainFigure: { src: "/images/blog-thumbnail-image-06.png", alt: "" },
      imagePair: [
        {
          src: "/images/blogs-sub-image-01.png",
          alt: "Design Trends Shaping Future",
        },
        {
          src: "/images/blogs-sub-image-02.png",
          alt: "Design Trends Shaping Future",
        },
      ],
      secondListFirstItem: INTENTIONAL_SIMPLICITY,
    }),
  },
];
