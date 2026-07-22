import type { TeamMember } from "../types";

/**
 * Seed data from `_analysis/about.md` §8 "Team".
 * Photo alt text keeps the source's trailing space verbatim
 * ("Team member Image ").
 *
 */
export const team: TeamMember[] = [
  {
    name: "Mark Otto",
    role: "Co-founder and CEO",
    photo: { src: "/images/portrait-of-a-woman-1-1.webp", alt: "Team member Image " },
  },
  {
    name: "Julian Thorne",
    role: "Creative Director",
    photo: { src: "/images/portrait-of-young-man-5.webp", alt: "Team member Image " },
  },
  {
    name: "Clara Sterling",
    role: "Lead Experience Designer",
    photo: { src: "/images/portrait-of-a-woman-1.webp", alt: "Team member Image " },
  },
  {
    name: "Marcus Halloway",
    role: "Senior Webflow Specialist",
    photo: { src: "/images/portrait-of-young-man-2.webp", alt: "Team member Image " },
  },
  {
    name: "Elena Vance",
    role: "Visual & Motion Designer",
    photo: { src: "/images/portrait-of-young-man-3.webp", alt: "Team member Image " },
  },
  {
    name: "Oliver Bennett",
    role: "Strategist & Copywriter",
    photo: { src: "/images/portrait-of-young-man-1.webp", alt: "Team member Image " },
  },
];
