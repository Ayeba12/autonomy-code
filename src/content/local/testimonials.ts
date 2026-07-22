import type { ImageRef, Testimonial } from "../types";

/**
 * Seed data from `_analysis/home.md` §10 "Testimonials" (5 slides, some
 * quotes/avatars/logos intentionally repeat in the template demo content).
 */

const LOGO_NESTLE: ImageRef = {
  src: "/images/logo-nestle-1.svg",
  alt: "Testimonial Card Logo",
};
const LOGO_DELIVEROO: ImageRef = {
  src: "/images/logo-deliveroo-1.svg",
  alt: "Testimonial Card Logo",
};
const LOGO_MORNING_SHOW: ImageRef = {
  src: "/images/logo-the-morning-show-1.svg",
  alt: "Testimonial Card Logo",
};

const AVATAR_CASUAL: ImageRef = {
  src: "/images/casual-portrait-of-man-1.svg",
  alt: "Author Image",
};

const REPEATED_QUOTE =
  "They delivered a stunning digital experience. Professional, creative, and highly efficient from start to finish.";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Stripped away the noise and gave our brand a soul. Truly exceptional design thinking.",
    author: "Julian Vance",
    role: "CEO, Vertex Media",
    avatar: { src: "/images/portrait-of-young-man-2-1.svg", alt: "Author Image" },
    logo: LOGO_NESTLE,
  },
  {
    quote: REPEATED_QUOTE,
    author: "Tom Crose",
    role: "CEO, Stodio Agency",
    avatar: { src: "/images/young-man-in-white-shirt-1.svg", alt: "Author Image" },
    logo: LOGO_DELIVEROO,
  },
  {
    quote:
      "A perfect blend of design and performance. They turned our ideas into a premium product that truly stands out.",
    author: "Elena Rossi",
    role: "Product Manager, Lumina Tech",
    avatar: AVATAR_CASUAL,
    logo: LOGO_NESTLE,
  },
  {
    quote: REPEATED_QUOTE,
    author: "Marcus Thorne",
    role: "Founder, Ember & Oak",
    avatar: { src: "/images/elegant-male-portrait-1.svg", alt: "Author Image" },
    logo: LOGO_MORNING_SHOW,
  },
  {
    quote: REPEATED_QUOTE,
    author: "Tom Crose",
    role: "CEO, Stodio Agency",
    avatar: AVATAR_CASUAL,
    logo: LOGO_DELIVEROO,
  },
];
