import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/content/types";
import { formatArticleDate } from "./format-date";

/**
 * Article card (Stodio BlogCard pattern): pillar pill top-left,
 * thumbnail top-right, generous whitespace, then a full-width meta row
 * (calendar + date left, clock + read time right), title, excerpt.
 */
export const ArticleCard = ({ article }: { article: Article }) => (
  <Link
    href={`/writing/${article.slug}`}
    className="group flex h-full flex-col rounded-card bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5 max-md:p-5"
  >
    <div className="flex items-start justify-between gap-4">
      <span className="rounded-pill bg-paper px-3.5 py-1.5 font-heading text-body-s text-ink">
        {article.pillar}
      </span>
      {article.heroImage && (
        <div className="overflow-hidden rounded-xl">
          <Image
            src={article.heroImage.src}
            alt={article.heroImage.alt}
            width={180}
            height={144}
            className="h-[112px] w-[144px] object-cover transition-transform duration-600 group-hover:scale-105"
          />
        </div>
      )}
    </div>
    <div className="mt-auto pt-24 max-md:pt-12">
      <div className="flex items-center justify-between gap-4 text-body-s text-smoke">
        <span className="flex items-center gap-2">
          <svg
            className="size-4"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            aria-hidden
          >
            <rect x="2" y="3" width="12" height="11" rx="2" />
            <path d="M2 6.5h12M5.5 1.5v3M10.5 1.5v3" />
          </svg>
          {formatArticleDate(article.date)}
        </span>
        <span className="flex items-center gap-2">
          <svg
            className="size-4"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            aria-hidden
          >
            <circle cx="8" cy="8" r="6.25" />
            <path d="M8 4.75V8l2.25 1.5" />
          </svg>
          {article.readTime}
        </span>
      </div>
      <h3 className="mt-3 text-h4 text-ink transition-colors duration-300 group-hover:text-brand">
        {article.title}
      </h3>
      <p className="mt-3 text-body-m text-smoke">{article.excerpt}</p>
    </div>
  </Link>
);
