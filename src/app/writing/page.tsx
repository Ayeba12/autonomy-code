import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import { Tag } from "@/components/ui/Tag";
import { ArticleCard } from "@/components/writing/ArticleCard";
import { content } from "@/content/source";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on autonomy, ownership, and the quiet structure under a working life.",
};

/** /writing — the thinking, the newsletter, and the essays (content.md §4.8). */
const WritingPage = async () => {
  const articles = await content.getArticles();
  const published = articles.filter((article) => !article.draft);
  const drafts = articles.filter((article) => article.draft);

  return (
    <>
      <Navbar tone="dark" />
      <main>
        {/* Hero — ivory, type-led */}
        <section className="bg-paper pt-40 pb-16 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
          <div className="container-site">
            <Reveal className="flex max-w-[760px] flex-col items-start gap-5">
              <Tag>Writing</Tag>
              <div className="gold-thread w-16" aria-hidden />
              <h1 className="text-display">Thinking you can lean on.</h1>
              <p className="text-body-xl text-smoke">
                Essays on autonomy, ownership, and the quiet structure under a
                working life.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Newsletter band */}
        <section className="bg-paper pb-16 max-md:pb-10">
          <div className="container-site">
            <Reveal>
              <div className="grid items-center gap-10 rounded-card-lg bg-ink p-12 max-lg:grid-cols-1 max-md:p-7 lg:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <h2 className="text-h5 text-white">
                    One calm letter, when it is worth your time. No noise.
                  </h2>
                </div>
                <NewsletterForm />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Published essays — white cards on ivory, no thumbnails */}
        <section className="bg-paper pb-20 max-lg:pb-14 max-md:pb-10">
          <div className="container-site">
            <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
              {published.map((article, i) => (
                <Reveal key={article.slug} delay={(i % 3) * 0.1} className="h-full">
                  <ArticleCard article={article} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* More on the way — outlined pieces, no links */}
        {drafts.length > 0 && (
          <section className="bg-white section-pad">
            <div className="container-site">
              <Reveal className="flex max-w-[760px] flex-col gap-4">
                <h2 className="text-h4">More on the way</h2>
                <p className="text-body-l text-smoke">
                  Nine more essays, in progress. Published when they are ready,
                  not before.
                </p>
              </Reveal>
              <ul className="mt-10 max-w-[888px]">
                {drafts.map((article, i) => (
                  <li
                    key={article.slug}
                    className="border-b border-line first:border-t"
                  >
                    <Reveal
                      delay={Math.min(i * 0.05, 0.3)}
                      className="flex flex-col gap-1 py-5"
                    >
                      <span className="font-heading text-h6 text-ink">
                        {article.title}
                      </span>
                      <span className="text-body-m text-smoke">
                        {article.subtitle}
                      </span>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <CtaSection />
      </main>
    </>
  );
};

export default WritingPage;
