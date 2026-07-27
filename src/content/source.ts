import type {
  Article,
  ConversationItem,
  FaqItem,
  LadderTier,
  Pillar,
  ProofQuote,
  SpeakingInfo,
  StatItem,
  WiderWorkLink,
} from "./types";

/**
 * Every content read goes through this interface. Local seed data today
 * (`./local`); a WordPress/WPGraphQL implementation can replace the export
 * below without touching page code.
 */
export interface ContentSource {
  getPillars(): Promise<Pillar[]>;
  getLadder(): Promise<LadderTier[]>;
  getArticles(): Promise<Article[]>;
  getArticle(slug: string): Promise<Article | null>;
  getConversations(): Promise<ConversationItem[]>;
  getProofQuotes(): Promise<ProofQuote[]>;
  getSpeaking(): Promise<SpeakingInfo>;
  getStats(): Promise<StatItem[]>;
  getFaqs(): Promise<FaqItem[]>;
  getWiderWork(): Promise<WiderWorkLink[]>;
}

export { wpContent as content } from "./wp";
