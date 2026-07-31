import type { Pillar } from "../types";

/** The five pillars of the Autonomy Code (content.md §4.2). */
export const pillars: Pillar[] = [
  {
    slug: "identity",
    name: "Identity",
    index: "01",
    movement: "From Borrowed Identity to Owned Ground.",
    description: "Who you are when the borrowed role no longer fits.",
    image: {
      src: "/images/pillar-identity.webp",
      alt: "A single stone pillar in warm light",
    },
  },
  {
    slug: "message",
    name: "Message",
    index: "02",
    movement: "From private wisdom to public clarity.",
    description:
      "What you know, what you say, and what you can defend. SABI OS lives here.",
    image: {
      src: "/images/pillar-message.webp",
      alt: "A clear form against calm light",
    },
  },
  {
    slug: "strategy",
    name: "Strategy",
    index: "03",
    movement: "From Unsupported Execution to Self-Governance.",
    description:
      "Sequence, decision, structure, and rhythm that fit your actual life.",
    image: {
      src: "/images/pillar-strategy.webp",
      alt: "Ordered structure in golden hour light",
    },
  },
  {
    slug: "resources",
    name: "Resources",
    index: "04",
    movement: "From Scattered Ownership to Owned Capacity.",
    description:
      "What your time, energy, attention, money, and support can truly hold.",
    image: {
      src: "/images/pillar-resources.webp",
      alt: "A wide calm landscape, resources gathered in light",
    },
  },
  {
    slug: "relationships",
    name: "Relationships",
    index: "05",
    movement: "Belonging without performance.",
    description: "Support that does not cost you your centre.",
    image: {
      src: "/images/pillar-relationships.webp",
      alt: "Two forms standing together in warm light",
    },
  },
];
