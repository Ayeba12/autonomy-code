import type { ContentSource } from "../source";

import { blogPosts } from "./blog-posts";
import { faqs } from "./faqs";
import { jobOpenings } from "./jobs";
import { officeLocations } from "./offices";
import { pricingPlans } from "./pricing";
import { projects } from "./projects";
import { services } from "./services";
import { stats } from "./stats";
import { team } from "./team";
import { testimonials } from "./testimonials";

/**
 * Local (static seed) implementation of the ContentSource interface.
 * Swap for a WPGraphQL-backed implementation when the headless CMS lands.
 */
export const localContent: ContentSource = {
  async getProjects() {
    return projects;
  },
  async getProject(slug) {
    return projects.find((project) => project.slug === slug) ?? null;
  },
  async getBlogPosts() {
    return blogPosts;
  },
  async getBlogPost(slug) {
    return blogPosts.find((post) => post.slug === slug) ?? null;
  },
  async getJobOpenings() {
    return jobOpenings;
  },
  async getJobOpening(slug) {
    return jobOpenings.find((jobOpening) => jobOpening.slug === slug) ?? null;
  },
  async getOfficeLocations() {
    return officeLocations;
  },
  async getTestimonials() {
    return testimonials;
  },
  async getPricingPlans() {
    return pricingPlans;
  },
  async getFaqs() {
    return faqs;
  },
  async getServices() {
    return services;
  },
  async getStats() {
    return stats;
  },
  async getTeam() {
    return team;
  },
};
