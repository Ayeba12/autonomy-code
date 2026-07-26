import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Tag } from "@/components/ui/Tag";
import { formatArticleDate } from "@/components/writing/format-date";
import type { Article } from "@/content/types";

/** Journal card (Stodio blog-card pattern): pillar pill + thumbnail, meta, title, excerpt. */
const JournalCard = ({ article }: { article: Article }) => (
  <Link
    href={`/writing/${article.slug}`}
    className="group flex h-full flex-col rounded-card bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5 max-md:p-5"
  >
    <div className="flex items-start justify-between gap-4">
      <span className="rounded-full bg-paper px-3.5 py-1.5 text-body-s font-medium">
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
      <div className="flex items-center gap-2 text-body-s text-smoke">
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
        <span>{formatArticleDate(article.date)}</span>
        <span aria-hidden className="size-1 rounded-full bg-brand" />
        <span>{article.readTime}</span>
      </div>
      <h3 className="mt-3 text-h4 transition-colors duration-300 group-hover:text-brand">
        {article.title}
      </h3>
      <p className="mt-3 text-body-m text-smoke">{article.excerpt}</p>
    </div>
  </Link>
);

/** Writing: latest three published articles (Stodio journal pattern). */
export const JournalSection = ({ articles }: { articles: Article[] }) => (
  <section className="section-gap">
    <div className="container-site">
      <Reveal className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
        <div>
          <Tag>Writing</Tag>
          <h2 className="mt-6 text-h2">
            Thinking you can <span className="text-mute">lean on.</span>
          </h2>
        </div>
        <ArrowLink href="/writing">All Writing</ArrowLink>
      </Reveal>
      <div className="mt-11 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {articles.slice(0, 3).map((article, i) => (
          <Reveal key={article.slug} delay={i * 0.1}>
            <JournalCard article={article} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
