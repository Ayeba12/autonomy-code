import type {
  BlogPost,
  FaqItem,
  JobOpening,
  OfficeLocation,
  PricingPlan,
  Project,
  ServiceItem,
  StatItem,
  TeamMember,
  Testimonial,
} from "./types";

/**
 * Every content read in the app goes through this interface.
 * Today it is backed by local seed data (`./local`); when the WordPress
 * headless CMS is ready, add a `wp/` implementation (WPGraphQL) and swap
 * the export below — no page code changes.
 */
export interface ContentSource {
  getProjects(): Promise<Project[]>;
  getProject(slug: string): Promise<Project | null>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | null>;
  getJobOpenings(): Promise<JobOpening[]>;
  getJobOpening(slug: string): Promise<JobOpening | null>;
  getOfficeLocations(): Promise<OfficeLocation[]>;
  getTestimonials(): Promise<Testimonial[]>;
  getPricingPlans(): Promise<PricingPlan[]>;
  getFaqs(): Promise<FaqItem[]>;
  getServices(): Promise<ServiceItem[]>;
  getStats(): Promise<StatItem[]>;
  getTeam(): Promise<TeamMember[]>;
}

export { localContent as content } from "./local";
