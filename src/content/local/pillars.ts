import type { Pillar } from "../types";

/**
 * The five pillars of the Autonomy Code (content.md §4.2). Each carries a
 * graphite drawing in the house style: one figure, one gold accent.
 */
export const pillars: Pillar[] = [
  {
    slug: "identity",
    name: "Identity",
    index: "01",
    movement: "From Borrowed Identity to Owned Ground.",
    description: "Who you are when the borrowed role no longer fits.",
    image: {
      src: "/images/pillars/pillar-identity.webp",
      alt: "Graphite sketch of a woman standing barefoot on her own square of ground, drawn in gold, borrowed coats left on a rack behind her",
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
      src: "/images/pillars/pillar-message.webp",
      alt: "Graphite sketch of a woman writing one clear line in gold across a large sheet, crumpled drafts pushed aside",
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
      src: "/images/pillars/pillar-strategy.webp",
      alt: "Graphite sketch of a woman leaning over a map, one finger on the route she has chosen, drawn in gold",
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
      src: "/images/pillars/pillar-resources.webp",
      alt: "Graphite sketch of a woman at an open cabinet of well-ordered tools and ledgers, lifting out one key drawn in gold",
    },
  },
  {
    slug: "relationships",
    name: "Relationships",
    index: "05",
    movement: "Belonging without performance.",
    description: "Support that does not cost you your centre.",
    image: {
      src: "/images/pillars/pillar-relationships.webp",
      alt: "Graphite sketch of two women leaning in across a small table, a single gold thread running between their hands",
    },
  },
];
