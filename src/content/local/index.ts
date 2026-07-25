import type { ContentSource } from "../source";

import { articles } from "./articles";
import { conversations } from "./conversations";
import { faqs } from "./faqs";
import { ladder } from "./ladder";
import { pillars } from "./pillars";
import { proofQuotes } from "./proof-quotes";
import { speaking } from "./speaking";
import { stats } from "./stats";
import { widerWork } from "./wider-work";

/**
 * Local (static seed) implementation of the ContentSource interface.
 * Swap for a WPGraphQL-backed implementation when the headless CMS lands.
 */
export const localContent: ContentSource = {
  async getPillars() {
    return pillars;
  },
  async getLadder() {
    return [...ladder].sort((a, b) => a.order - b.order);
  },
  async getArticles() {
    return articles;
  },
  async getArticle(slug) {
    return articles.find((article) => article.slug === slug) ?? null;
  },
  async getConversations() {
    return conversations;
  },
  async getProofQuotes() {
    return proofQuotes;
  },
  async getSpeaking() {
    return speaking;
  },
  async getStats() {
    return stats;
  },
  async getFaqs() {
    return faqs;
  },
  async getWiderWork() {
    return widerWork;
  },
};
