import type { Metadata } from "next";
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
 * /writing/[slug] — essay layout (content.md §4.8).
 * The route line ships as the body's final quote block; a gold thread
 * closes the prose column.
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
        {/* Header — ivory, type-led */}
        <section className="bg-paper pt-40 pb-16 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
          <div className="container-site">
            <Reveal className="mx-auto flex max-w-[760px] flex-col items-start gap-5">
              <Tag>{article.pillar}</Tag>
              <h1 className="text-h2">{article.title}</h1>
              <p className="text-body-xl text-smoke">{article.subtitle}</p>
              <div className="flex items-center gap-3 text-body-s text-smoke">
                <span>{formatArticleDate(article.date)}</span>
                <span aria-hidden className="size-1 rounded-full bg-brand" />
                <span>{article.readTime}</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Body — single prose column */}
        <section className="bg-white section-pad">
          <div className="container-site">
            <Reveal className="mx-auto max-w-[760px]">
              <article>
                <RichText blocks={article.body} />
              </article>
              <div className="gold-thread mt-14 max-md:mt-10" aria-hidden />
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
