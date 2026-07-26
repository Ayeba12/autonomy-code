import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { RichText } from "@/components/ui/RichText";
import { Tag } from "@/components/ui/Tag";
import { ArticleCard } from "@/components/writing/ArticleCard";
import { formatArticleDate } from "@/components/writing/format-date";
import { content } from "@/content/source";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

/** Only the published essays are prerendered; drafts have no routes. */
export const generateStaticParams = async () => {
  const articles = await content.getArticles();
  return articles
    .filter((article) => !article.draft)
    .map((article) => ({ slug: article.slug }));
};

export const generateMetadata = async ({
  params,
}: ArticlePageProps): Promise<Metadata> => {
  const { slug } = await params;
  const article = await content.getArticle(slug);
  if (!article || article.draft) return {};
  return { title: article.title, description: article.subtitle };
};

/**
 * /writing/[slug] — essay layout (content.md §4.8, Stodio blog-detail
 * pattern): centered pillar tag + title + meta over ivory, full-width
 * hero image, then a single prose column.
 */
const ArticlePage = async ({ params }: ArticlePageProps) => {
  const { slug } = await params;
  const article = await content.getArticle(slug);
  if (!article || article.draft) notFound();

  const articles = await content.getArticles();
  const moreWriting = articles.filter(
    (a) => !a.draft && a.slug !== article.slug,
  );

  return (
    <>
      <Navbar tone="dark" />
      <main>
        {/* Header — ivory, centered */}
        <section className="bg-paper pt-40 pb-14 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
          <div className="container-site flex flex-col items-center text-center">
            <Reveal>
              <Tag>{article.pillar}</Tag>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mx-auto mt-6 max-w-[900px] text-h2">
                {article.title}
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mx-auto mt-4 max-w-[680px] text-body-xl text-smoke">
                {article.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-body-s text-smoke">
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
                <span aria-hidden className="size-1 rounded-full bg-brand" />
                <span>{article.readTime}</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Hero image — full width under the title */}
        {article.heroImage && (
          <section className="bg-paper pb-16 max-md:pb-10">
            <div className="container-site">
              <Reveal>
                <div className="relative aspect-[21/9] overflow-hidden rounded-card max-md:aspect-video">
                  <Image
                    src={article.heroImage.src}
                    alt={article.heroImage.alt}
                    fill
                    preload
                    sizes="(min-width: 1440px) 1360px, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* Body — single prose column */}
        <section className="bg-white section-pad">
          <div className="container-site">
            <Reveal className="mx-auto max-w-[760px]">
              <article>
                <RichText blocks={article.body} />
              </article>
              <hr className="mt-14 border-line max-md:mt-10" />
            </Reveal>
          </div>
        </section>

        {/* More writing */}
        {moreWriting.length > 0 && (
          <section className="bg-paper section-pad">
            <div className="container-site">
              <Reveal>
                <h2 className="text-h4">More writing</h2>
              </Reveal>
              <div className="mt-10 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
                {moreWriting.map((other, i) => (
                  <Reveal key={other.slug} delay={(i % 3) * 0.1} className="h-full">
                    <ArticleCard article={other} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaSection />
      </main>
    </>
  );
};

export default ArticlePage;
