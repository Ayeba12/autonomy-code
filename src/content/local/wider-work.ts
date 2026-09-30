import type { WiderWorkLink } from "../types";

/**
 * The Wider Work (content.md §4.10). Rooms without a live address still
 * render, marked "Coming soon", until the client supplies the URL
 * (content.md §8). DK Jonah and The Curious Creative were confirmed
 * 30 Sept 2026 from dkjonah.com.
 */
export const widerWork: WiderWorkLink[] = [
  {
    name: "NO GraGra",
    description: "The house and the philosophy. No rush, no force, gentle on purpose.",
    href: "#",
    image: {
      src: "/images/about/about-porch.webp",
      alt: "Graphite sketch of two wooden chairs and a small table on a porch, one cup drawn in gold",
    },
  },
  {
    name: "DK Jonah",
    description: "The person behind the practice, and the fuller story.",
    href: "https://www.dkjonah.com/",
    image: {
      src: "/images/pillars/pillar-identity.webp",
      alt: "Graphite sketch of a woman standing barefoot on her own square of ground, drawn in gold, borrowed coats left on a rack behind her",
    },
  },
  {
    name: "Amplify the Gospel",
    description: "DK's faith work, standing in its own room.",
    href: "#",
    image: {
      src: "/images/about/about-ripples.webp",
      alt: "Graphite sketch of ripples widening across still water from one dropped stone, the innermost ring in gold",
    },
  },
  {
    name: "The Curious Creative with DK Jonah",
    description: "Curiosity and creativity, explored in DK's own voice. Live sessions on TikTok.",
    href: "https://tiktok.com/@dkjonah",
    image: {
      src: "/images/reset/reset-hero.webp",
      alt: "Graphite sketch of a woman at a table at the end of the day, drawing one line in gold on the page in front of her",
    },
  },
  {
    name: "The Podcast",
    description: "The work spoken aloud, in longer form.",
    href: "#",
    image: {
      src: "/images/pillars/pillar-relationships.webp",
      alt: "Graphite sketch of two women leaning in across a small table, a single gold thread running between their hands",
    },
  },
];
