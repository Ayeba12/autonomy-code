"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import type { Article } from "@/content/types";
import { ArticleCard } from "./ArticleCard";

const PAGE_SIZE = 9;

/**
 * Published-article grid: nine at a time, with a calm "Load more"
 * that reveals the earlier pieces.
 */
export const ArticleGrid = ({ articles }: { articles: Article[] }) => {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = articles.slice(0, visible);
  const remaining = articles.length - visible;

  return (
    <>
      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {shown.map((article, i) => (
          <Reveal key={article.slug} delay={(i % PAGE_SIZE) * 0.05}>
            <ArticleCard article={article} />
          </Reveal>
        ))}
      </div>
      {remaining > 0 && (
        <div className="mt-12 flex justify-center max-md:mt-8">
          <button
            type="button"
            onClick={() => setVisible((count) => count + PAGE_SIZE)}
            className="group flex min-h-11 items-center gap-2.5 rounded-pill border border-coal px-6 py-3 text-body-m font-medium whitespace-nowrap text-ink transition-all duration-300 hover:rounded-2xl hover:bg-white"
          >
            Load more
            <svg
              className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden
            >
              <path d="M8 2v11M3.5 9 8 13.5 12.5 9" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};
