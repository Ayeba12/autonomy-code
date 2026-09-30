import type { LadderTier } from "../types";

/**
 * The Ladder (content.md §3, §4.3). Summaries are the Work Together card copy.
 * Prices appear ONLY on each tier's own landing page, never on browse pages.
 */
export const ladder: LadderTier[] = [
  {
    slug: "autonomy-compass",
    name: "The Autonomy Compass",
    summary:
      "The door. Twenty-five statements across the five pillars, a 90-minute Claim Intensive, and a written Autonomy Blueprint you keep. Every engagement begins here, no exceptions.",
    cta: { label: "Start with the Compass", href: "/autonomy-compass" },
    price: "£97",
    order: 1,
    image: {
      src: "/images/home/tier-scan.webp",
      alt: "Graphite sketch of a woman at an open doorway, map in hand, the door frame drawn in gold",
    },
  },
  {
    slug: "sabi-core",
    name: "SABI CORE",
    summary:
      "The flagship. A year inside a structured system, built on the SABI OS operating system. For the reader who is ready to build from owned ground.",
    cta: { label: "Explore SABI CORE", href: "/sabi-core" },
    price: "£5,000 for the year",
    order: 2,
    image: {
      src: "/images/pillars/pillar-relationships.webp",
      alt: "Graphite sketch of two women leaning in across a small table, a single gold thread running between their hands",
    },
  },
  {
    slug: "legacy",
    name: "Legacy Builder",
    summary:
      "The deepest tier. One to two people at a time, rare and private, by invitation. The Map leads the recommendation.",
    cta: { label: "About Legacy Builder", href: "/legacy" },
    price: "From £10,000 for the year",
    order: 3,
    image: {
      src: "/images/home/tier-legacy.webp",
      alt: "Graphite sketch of two women in quiet conversation at a desk by a tall window, a bound book open between them, its page edges in gold",
    },
  },
];
