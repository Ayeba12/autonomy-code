import type { VideoSection } from "./types";

interface VideoSectionDef {
  slug: VideoSection;
  name: string;
  /** One calm line for the archive hero. */
  blurb: string;
}

/**
 * The four In Conversation sections, in hub display order. Hub headings,
 * "View all" links, archive routes, and the WordPress section field all
 * key off these slugs, so they can never drift apart.
 */
export const VIDEO_SECTIONS: VideoSectionDef[] = [
  {
    slug: "interviews",
    name: "Interviews",
    blurb: "Longer conversations about the work, hosted by others.",
  },
  {
    slug: "podcasts",
    name: "Podcasts",
    blurb: "Guest episodes, recorded in other people's rooms.",
  },
  {
    slug: "talks-and-panels",
    name: "Talks & Panels",
    blurb: "Stages, rooms, and shared tables.",
  },
  {
    slug: "others",
    name: "Others",
    blurb: "Conversations that fit no single shelf, kept anyway.",
  },
];

export const videoSectionBySlug = (slug: string): VideoSectionDef | null =>
  VIDEO_SECTIONS.find((section) => section.slug === slug) ?? null;
