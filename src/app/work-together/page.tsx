import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeMarquee } from "@/components/home/HomeMarquee";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { content } from "@/content/source";
import type { ImageRef } from "@/content/types";

export const metadata: Metadata = {
  title: "Work Together",
  description:
    "The whole ladder in one calm view: the Ownership Scan, SABI CORE, Legacy Builder, and the Autonomy Grid. Every engagement begins with the Scan.",
};

/** One entry in the two-column featured grid (Stodio project-card shape). */
interface FeaturedItem {
  slug: string;
  name: string;
  /** Uppercase label on the meta row (Stodio "service" slot). */
  category: string;
  description: string;
  href: string;
  image?: ImageRef;
}

/**
 * The Autonomy Grid — a working tool rather than a ladder tier. It gets
 * its own page later; the card already routes there.
 */
const autonomyGrid: FeaturedItem = {
  slug: "autonomy-grid",
  name: "The Autonomy Grid",
  category: "The tool",
  description:
    "The five pillars laid out as one working grid, built to sit beside your Scan and your Personal Autonomy Map.",
  href: "/autonomy-grid",
  image: {
    src: "/images/about-showcase-02.webp",
    alt: "A closed notebook, a glass of water, and a pebble on an oak table in morning sun",
  },
};

/** "The door. Twenty-five questions…" → category "The door" + the rest. */
const splitSummary = (summary: string) => {
  const idx = summary.indexOf(".");
  if (idx === -1) return { category: summary, description: "" };
  return {
    category: summary.slice(0, idx),
    description: summary.slice(idx + 1).trim(),
  };
};

/** Stodio ProjectCard: rounded image with hover zoom, name / category row. */
const FeaturedCard = ({
  item,
  preload = false,
}: {
  item: FeaturedItem;
  preload?: boolean;
}) => (
  <Link href={item.href} className="group block">
    <div className="overflow-hidden rounded-card">
      {item.image ? (
        <Image
          src={item.image.src}
          alt={item.image.alt}
          width={item.image.width ?? 960}
          height={item.image.height ?? 720}
          sizes="(max-width: 767px) 100vw, 50vw"
          preload={preload}
          className="aspect-[4/3] w-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
        />
      ) : (
        <div aria-hidden className="aspect-[4/3] w-full bg-paper-2" />
      )}
    </div>
    <div className="flex items-baseline justify-between gap-4 pt-5 max-md:flex-col max-md:gap-1 max-md:pt-4">
      <h2 className="text-h4 transition-colors duration-300 group-hover:text-brand">
        {item.name}
      </h2>
      <p className="shrink-0 text-body-s tracking-wide text-smoke uppercase">
        {item.category}
      </p>
    </div>
    <p className="mt-3 max-w-[560px] text-body-m text-smoke">
      {item.description}
    </p>
  </Link>
);

/**
 * /work-together — the Ladder and the Autonomy Grid in one calm view
 * (content.md §4.3), on the Stodio projects-listing pattern: inset light
 * hero band, trust ticker, then a two-column featured grid. Named, not
 * priced (house style §1: prices live only on each tier's own page).
 */
const WorkTogetherPage = async () => {
  const ladder = await content.getLadder();
  const items: FeaturedItem[] = [...ladder]
    .sort((a, b) => a.order - b.order)
    .map((tier) => ({
      slug: tier.slug,
      name: tier.name,
      ...splitSummary(tier.summary),
      href: tier.cta.href,
      image: tier.image,
    }));
  items.push(autonomyGrid);

  const rows: FeaturedItem[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2));
  }

  return (
    <>
      <Navbar tone="dark" />
      <main>
        {/* Hero — Stodio projects hero: inset deep-ivory rounded band */}
        <section className="m-2 rounded-card bg-paper-2 pt-44 pb-14 max-lg:pt-36 max-md:pt-28 max-md:pb-10">
          <div className="container-site">
            <Reveal>
              <Tag>Work together</Tag>
            </Reveal>
            <div className="mt-4 flex items-end justify-between gap-16 max-lg:flex-col max-lg:items-start max-lg:gap-10">
              <Reveal delay={0.1}>
                <h1 className="max-w-[720px] text-display">Find your step.</h1>
              </Reveal>
              <Reveal delay={0.2} className="max-w-[420px] shrink-0 max-lg:max-w-[560px]">
                <p className="text-body-xl text-smoke">
                  Three engagements and one working tool, in order of depth.
                  The whole ladder in one calm view, and every engagement
                  begins with the Scan.
                </p>
                <Button href="/contact" variant="brand" className="mt-8">
                  Reach out
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Trust ticker (Stodio logo-strip slot) */}
        <HomeMarquee />

        {/* Featured grid — two columns: the Ladder plus the Autonomy Grid */}
        <section className="bg-paper py-24 max-lg:py-16 max-md:py-10">
          <div className="container-site flex flex-col gap-14 max-md:gap-10">
            {rows.map((row, rowIndex) => (
              <div
                key={row[0].slug}
                className="grid grid-cols-2 gap-x-5 gap-y-14 max-md:grid-cols-1 max-md:gap-y-10"
              >
                {row.map((item, i) => (
                  <Reveal key={item.slug} delay={i * 0.1}>
                    <FeaturedCard item={item} preload={rowIndex === 0 && i === 0} />
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Footer note (verbatim §4.3) — the page's single breath accent. */}
        <section className="bg-breath-tint py-20 max-md:py-12">
          <div className="container-site">
            <Reveal>
              <p className="mx-auto max-w-[680px] text-center text-body-xl text-ink">
                Prices live on each page, shown plainly before any commitment.
                Money and clarity travel together here: no calls, no
                negotiation, no surprises.
              </p>
            </Reveal>
          </div>
        </section>

        <CtaSection />
      </main>
    </>
  );
};

export default WorkTogetherPage;
