import type { ServiceItem } from "../types";

/**
 * Seed data from `_analysis/home.md` §6 "Services" — the template shows the
 * same hover description on all four rows.
 */

const DESCRIPTION =
  "Crafting intuitive interfaces and seamless user journeys that turn visitors into loyal customers.";

export const services: ServiceItem[] = [
  {
    name: "UI/UX Design",
    index: "[01]",
    image: { src: "/images/service-image.webp", alt: "Service Item Image" },
    description: DESCRIPTION,
  },
  {
    name: "Mobile Design",
    index: "[02]",
    image: { src: "/images/sevice-image-02.webp", alt: "Service Item Image" },
    description: DESCRIPTION,
  },
  {
    name: "Development",
    index: "[03]",
    image: { src: "/images/service-imnage-03.webp", alt: "Service Item Image" },
    description: DESCRIPTION,
  },
  {
    name: "Branding Design",
    index: "[04]",
    image: { src: "/images/sevice-image-04.webp", alt: "Service Item Image" },
    description: DESCRIPTION,
  },
];
