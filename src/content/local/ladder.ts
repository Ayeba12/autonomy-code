import type { LadderTier } from "../types";

/**
 * The Ladder (content.md §3, §4.3). Summaries are the Work Together card copy.
 * Prices appear ONLY on each tier's own landing page, never on browse pages.
 */
export const ladder: LadderTier[] = [
  {
    slug: "ownership-scan",
    name: "The Ownership Scan",
    summary:
      "The door. Twenty-five questions across the five pillars, a 90-minute Map-Out Session, and a written Personal Autonomy Map you keep. Every engagement begins here, no exceptions.",
    cta: { label: "Start with the Scan", href: "/ownership-scan" },
    price: "£97",
    order: 1,
    image: {
      src: "/images/five-pillars.webp",
      alt: "Five stone pillars at golden hour, sea and sky behind them",
    },
  },
  {
    slug: "sabi-core",
    name: "SABI CORE",
    summary:
      "The flagship. A year inside a structured system: quarterly cohorts, one pillar per quarter, built on the SABI OS operating system. For the reader who is ready to build from owned ground.",
    cta: { label: "Explore SABI CORE", href: "/sabi-core" },
    price: "£5,000 for the year",
    order: 2,
    image: {
      src: "/images/tier-sabi-core.webp",
      alt: "Warm structured interior in golden light",
    },
  },
  {
    slug: "legacy",
    name: "Legacy",
    summary:
      "The deepest tier. One to two people at a time, rare and private, by invitation. The Map leads the recommendation.",
    cta: { label: "About Legacy", href: "/legacy" },
    price: "£10,000 for the year",
    order: 3,
    image: {
      src: "/images/tier-legacy.webp",
      alt: "A single quiet form in warm, still light",
    },
  },
];
