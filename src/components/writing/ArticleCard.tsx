import Link from "next/link";
import type { Article } from "@/content/types";
import { formatArticleDate } from "./format-date";

/**
 * Type-led article card for Writing (content.md §4.8).
 * White card on ivory, no thumbnails: pillar label, title, subtitle,
 * then a quiet meta row (date · read time).
 */
export const ArticleCard = ({ article }: { article: Article }) => (
  <Link
    href={`/writing/${article.slug}`}
    className="group flex h-full flex-col rounded-card bg-white p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5 max-md:p-6"
  >
    <p className="font-heading text-body-s tracking-wide text-brand uppercase">
      {article.pillar}
    </p>
    <h3 className="mt-4 text-h5 text-ink transition-colors duration-300 group-hover:text-brand">
      {article.title}
    </h3>
    <p className="mt-2 text-body-l text-smoke">{article.subtitle}</p>
    <div className="mt-auto flex items-center gap-3 pt-8 text-body-s text-smoke">
      <span>{formatArticleDate(article.date)}</span>
      <span aria-hidden className="size-1 rounded-full bg-brand" />
      <span>{article.readTime}</span>
    </div>
  </Link>
);
