import type { Project } from "../types";

/**
 * Seed data from `_analysis/project-details.md` + `_analysis/projects.md`.
 * All five projects share the template's demo body copy (Challenges /
 * Solutions / Results are placeholder lorem — flagged for real copy later).
 *
 * Asset-map note: the detail image "Dynamic Motion Portrait (1) 1.webp"
 * (69909c406bf2c96bf1cb046e) is missing from _analysis/asset-map.json —
 * mapped to the closest key "Dynamic Portrait Motion 1.webp"
 * (/images/dynamic-portrait-motion-1.webp).
 */

const CHALLENGES_P1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const CHALLENGES_P2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Maecenas accumsan lacus vel facilisis volutpat est.";

function sharedSections(): Project["sections"] {
  return [
    {
      tag: "Challenges",
      heading: "Challenges",
      body: [CHALLENGES_P1, CHALLENGES_P2],
    },
    {
      tag: "Solutions",
      heading: "Solutions",
      body: [CHALLENGES_P1],
    },
    {
      // Trailing period on the tag is verbatim from the source markup.
      tag: "Results.",
      heading: "Results",
      body: [CHALLENGES_P1],
    },
  ];
}

const THUMB_XENITHO = {
  src: "/images/dynamic-motion-scene-1-2.webp",
  alt: "Gallery Image",
};
const THUMB_AETHELGARD = {
  src: "/images/dynamic-portrait-motion-1.webp",
  alt: "Gallery Image",
};
const THUMB_KRYONIX = {
  src: "/images/projects-thumbnail-image-03.webp",
  alt: "Gallery Image",
};
const THUMB_LUMINAURA = {
  src: "/images/projects-thumbnail-image-021.webp",
  alt: "Gallery Image",
};
const THUMB_VYNTAGE = {
  src: "/images/projects-thumbnail-image-01.webp",
  alt: "Gallery Image",
};

// Alt texts below keep the source's trailing spaces verbatim.
const ALT_MAIN = "Projects Main Image ";
const ALT_DETAIL = "Project details Image ";

// "Dynamic Motion Portrait (1) 1.webp" — asset-map miss, closest key used.
const DET_PORTRAIT = { src: "/images/dynamic-portrait-motion-1.webp", alt: ALT_DETAIL };
const DET_SILHOUETTE = { src: "/images/surreal-silhouette-art-1.webp", alt: ALT_DETAIL };

export const projects: Project[] = [
  {
    slug: "xenitho",
    name: "Xenitho",
    service: "Visual Storytelling",
    year: "2026",
    timeline: "2 Month",
    services: ["Visual Storytelling"],
    thumbnail: THUMB_XENITHO,
    mainImage: { src: "/images/rojects-main-image-01.webp", alt: ALT_MAIN },
    detailImages: [
      DET_SILHOUETTE,
      { src: THUMB_AETHELGARD.src, alt: ALT_DETAIL },
    ],
    sections: sharedSections(),
    otherProjects: ["aethelgard", "kryonix"],
  },
  {
    slug: "aethelgard",
    name: "Aethelgard",
    service: "Web Design",
    year: "2026",
    timeline: "1 Month",
    services: ["Web Design"],
    thumbnail: THUMB_AETHELGARD,
    // Decoded source filename "Projects Main Im,age 02.webp".
    mainImage: { src: "/images/projects-main-im-age-02.webp", alt: ALT_MAIN },
    detailImages: [
      DET_PORTRAIT,
      { src: THUMB_XENITHO.src, alt: ALT_DETAIL },
    ],
    sections: sharedSections(),
    otherProjects: ["xenitho", "kryonix"],
  },
  {
    slug: "kryonix",
    name: "Kryonix",
    service: "Product Interface (UI)",
    year: "2026",
    timeline: "2 Month",
    services: ["Product Interface (UI)"],
    thumbnail: THUMB_KRYONIX,
    mainImage: { src: "/images/projects-main-image-03.webp", alt: ALT_MAIN },
    detailImages: [DET_PORTRAIT, DET_SILHOUETTE],
    sections: sharedSections(),
    otherProjects: ["xenitho", "aethelgard"],
  },
  {
    slug: "luminaura",
    name: "Luminaura",
    service: "Visual Storytelling",
    year: "2026",
    timeline: "1.5 Month",
    services: ["Visual Storytelling"],
    thumbnail: THUMB_LUMINAURA,
    mainImage: { src: "/images/projects-main-image-04.webp", alt: ALT_MAIN },
    detailImages: [
      { src: THUMB_AETHELGARD.src, alt: ALT_DETAIL },
      { src: THUMB_XENITHO.src, alt: ALT_DETAIL },
    ],
    sections: sharedSections(),
    otherProjects: ["xenitho", "aethelgard"],
  },
  {
    slug: "vyntage",
    name: "Vyntage",
    service: "Creative Campaign",
    year: "2026",
    timeline: "2 Month",
    services: ["Creative Campaign"],
    thumbnail: THUMB_VYNTAGE,
    mainImage: { src: "/images/projects-main-image-05.webp", alt: ALT_MAIN },
    detailImages: [DET_SILHOUETTE, DET_PORTRAIT],
    sections: sharedSections(),
    otherProjects: ["xenitho", "aethelgard"],
  },
];
