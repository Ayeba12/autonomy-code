import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Tag } from "@/components/ui/Tag";
import { ArticleCard } from "@/components/writing/ArticleCard";
import type { Article } from "@/content/types";

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
          <Reveal key={article.slug} delay={i * 0.1} className="h-full">
            <ArticleCard article={article} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
