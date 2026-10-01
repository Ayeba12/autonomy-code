import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import { ArticleGrid } from "@/components/writing/ArticleGrid";
import { WritingHero } from "@/components/writing/WritingHero";
import { content } from "@/content/source";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Writing",
  description:
    "Essays on autonomy, ownership, and the quiet structure under a working life.",
  path: "/writing",
});

/** Small uppercase label used for eyebrows across the page. */
const Eyebrow = ({ children, className = "text-slate" }: { children: string; className?: string }) => (
  <p className={`font-heading text-body-s tracking-[0.2em] uppercase ${className}`}>{children}</p>
);

/**
 * /writing — the thinking, the newsletter, and the essays (content.md
 * §4.8), drawn in the house style. The article cards themselves are
 * deliberately unchanged.
 */
const WritingPage = async () => {
  const articles = await content.getArticles();
  const published = articles.filter((article) => !article.draft);
  const drafts = articles.filter((article) => article.draft);

  return (
    <>
      <Navbar tone="dark" />
      <main>
        {/* Hero — the headline beside a woman writing one clear line */}
        <WritingHero />

        {/* Newsletter band — the black card, with the notebook at rest */}
        <section className="bg-white py-16 max-md:py-10">
          <div className="container-site">
            <Reveal>
              <div className="grid items-center gap-10 rounded-card-lg bg-ink p-5 pr-12 max-lg:grid-cols-1 max-lg:pr-5 max-md:gap-7 lg:grid-cols-[300px_1fr_1fr]">
                <div className="overflow-hidden rounded-card max-lg:hidden">
                  <Image
                    src="/images/about/about-still-life.webp"
                    alt=""
                    width={900}
                    height={1200}
                    sizes="300px"
                    className="aspect-[4/3] w-full object-cover object-[50%_45%]"
                  />
                </div>
                <div className="flex flex-col gap-3 max-lg:px-4 max-lg:pt-4 max-md:px-2 max-md:pt-2">
                  <Eyebrow className="text-brand-soft">QuietFOCUS</Eyebrow>
                  <h2 className="text-h5 text-white">
                    One calm letter, when it is worth your time. No noise.
                  </h2>
                </div>
                <div className="max-lg:px-4 max-lg:pb-4 max-md:px-2 max-md:pb-2">
                  <NewsletterForm />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Published essays — image cards on ivory */}
        <section className="bg-paper section-pad">
          <div className="container-site">
            <Reveal className="mb-12 flex items-end justify-between gap-8 max-md:mb-8 max-md:flex-col max-md:items-start max-md:gap-3">
              <div>
                <Eyebrow>The essays</Eyebrow>
                <h2 className="mt-4 text-h2">Read in your own time.</h2>
              </div>
              <p className="pb-2 text-body-m text-slate">
                {published.length} essays, newest first.
              </p>
            </Reveal>
            <ArticleGrid articles={published} />
          </div>
        </section>

        {/* More on the way — outlined pieces beside an open sketchbook */}
        {drafts.length > 0 && (
          <section className="bg-white section-pad">
            <div className="container-site grid grid-cols-[1fr_380px] items-start gap-20 max-lg:grid-cols-1 max-lg:gap-10">
              <div>
                <Reveal className="flex max-w-[760px] flex-col gap-4">
                  <Eyebrow>In progress</Eyebrow>
                  <h2 className="text-h4">More on the way</h2>
                  <p className="text-body-l text-slate">
                    More essays, in progress. Published when they are ready,
                    not before.
                  </p>
                </Reveal>
                <ul className="mt-10">
                  {drafts.map((article, i) => (
                    <li
                      key={article.slug}
                      className="border-b border-line first:border-t"
                    >
                      <Reveal
                        delay={Math.min(i * 0.05, 0.3)}
                        className="flex gap-5 py-5"
                      >
                        <span className="w-8 shrink-0 pt-1 font-heading text-body-s tracking-[0.16em] text-brand-hot">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex flex-col gap-1">
                          <span className="font-heading text-h6 text-ink">
                            {article.title}
                          </span>
                          <span className="text-body-m text-slate">
                            {article.subtitle}
                          </span>
                        </span>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
              <Reveal delay={0.1} className="lg:sticky lg:top-32 max-lg:order-first">
                <div className="overflow-hidden rounded-card">
                  <Image
                    src="/images/reset/reset-included.webp"
                    alt="Graphite sketch of an open spiral sketchbook with a pencil resting across its blank pages, a drawing stencil beside it"
                    width={1600}
                    height={968}
                    sizes="(max-width: 1023px) 100vw, 380px"
                    className="aspect-[4/5] w-full object-cover max-lg:aspect-[3/2]"
                  />
                </div>
              </Reveal>
            </div>
          </section>
        )}

        <CtaSection />
      </main>
    </>
  );
};

export default WritingPage;
