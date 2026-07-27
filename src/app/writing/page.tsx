import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import { ArticleGrid } from "@/components/writing/ArticleGrid";
import { WritingHero } from "@/components/writing/WritingHero";
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
      <Navbar tone="light" />
      <main>
        {/* Hero — dark calm image band */}
        <WritingHero />

        {/* Newsletter band */}
        <section className="bg-white py-16 max-md:py-10">
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

        {/* Published essays — image cards on ivory */}
        <section className="bg-paper section-pad">
          <div className="container-site">
            <ArticleGrid articles={published} />
          </div>
        </section>

        {/* More on the way — outlined pieces, no links */}
        {drafts.length > 0 && (
          <section className="bg-white section-pad">
            <div className="container-site">
              <Reveal className="flex max-w-[760px] flex-col gap-4">
                <h2 className="text-h4">More on the way</h2>
                <p className="text-body-l text-smoke">
                  More essays, in progress. Published when they are ready,
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
