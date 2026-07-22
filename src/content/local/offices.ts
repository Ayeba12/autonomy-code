import type { OfficeLocation } from "../types";

/**
 * Seed data from `_analysis/career.md` §4 "Office Locations".
 * Image alt text keeps the source's trailing space verbatim
 * ("Location List Image ").
 */
export const officeLocations: OfficeLocation[] = [
  {
    name: "Brooklyn Navy Yard",
    address: ["Industry City, 220 36th St, Brooklyn, NY 11232, USA"],
    image: {
      src: "/images/location-list-image.webp",
      alt: "Location List Image ",
    },
  },
  {
    name: "Kreuzberg District",
    address: ["Factory Görlitzer Park, Lohmühlenstraße 65, 12435 Berlin, Germany"],
    image: {
      src: "/images/pexels-ian-panelo-8669635-2.webp",
      alt: "Location List Image ",
    },
  },
  {
    name: "Shibuya Crossing Area",
    address: ["The Foundry Shibuya, 2-1 Udagawacho, Shibuya City, Tokyo 150-0042, Japan"],
    image: {
      src: "/images/pexels-diva-31899135-2.webp",
      alt: "Location List Image ",
    },
  },
  {
    name: "Surry Hills",
    address: ["The Commons, 388 George St, Sydney NSW 2000, Australia"],
    image: {
      src: "/images/pexels-julia-fuchs-19936537-10024700-2.webp",
      alt: "Location List Image ",
    },
  },
];
