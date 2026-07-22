/**
 * Domain content models for the Stodio site.
 *
 * These mirror the WordPress headless structure we will adopt later
 * (posts, custom post types, ACF-style fields) while staying CMS-agnostic:
 * pages consume these types only — never a CMS SDK directly.
 */

export interface ImageRef {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/** Portable rich text: what WP's block editor / WPGraphQL will map onto. */
export type RichBlock =
  | { type: "h2" | "h3" | "h4"; text: string }
  | { type: "p"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "image"; image: ImageRef }
  | { type: "divider" };

export interface Project {
  slug: string;
  name: string;
  /** Service label shown on cards, e.g. "Visual Storytelling". */
  service: string;
  year: string;
  timeline: string;
  services: string[];
  thumbnail: ImageRef;
  mainImage: ImageRef;
  detailImages: ImageRef[];
  /** Tagged content sections (Challenges / Solutions / Results). */
  sections: { tag: string; heading: string; body: string[] }[];
  otherProjects: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  /** ISO date, formatted at render time. */
  date: string;
  readTime: string;
  excerpt: string;
  author: { name: string; avatar: ImageRef };
  heroImage: ImageRef;
  body: RichBlock[];
}

export interface JobOpening {
  slug: string;
  title: string;
  country: string;
  city: string;
  employmentType: string;
  body: RichBlock[];
}

export interface OfficeLocation {
  name: string;
  address: string[];
  image: ImageRef;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: ImageRef;
  logo: ImageRef;
}

export interface PricingPlan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  blurb: string;
  features: string[];
  cta: { label: string; href: string; variant: "dark" | "brand" };
  highlighted: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  name: string;
  index: string;
  image: ImageRef;
  description: string;
}

export interface StatItem {
  value: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: ImageRef;
}
