import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { Button } from "@/components/ui/Button";
import { DiagonalArrow, DiagonalLink } from "@/components/ui/DiagonalLink";
import { Tag } from "@/components/ui/Tag";
import { content } from "@/content/source";
import { menuGroups, serviceBySlug } from "@/content/services";
import type { ImageRef } from "@/content/types";

export const metadata: Metadata = {
  title: "Work Together",
  description:
    "The whole menu in one calm view: the ladder, single sessions, knowledge work, and ongoing implementation. Every engagement begins with the Scan.",
};

/** One card in the ladder row. */
interface LadderCardItem {
  slug: string;
  name: string;
  step: string;
  description: string;
  href: string;
  image?: ImageRef;
}

/** "The door. Twenty-five questions…" → step label + the rest. */
const splitSummary = (summary: string) => {
  const idx = summary.indexOf(".");
  if (idx === -1) return { step: summary, description: "" };
  return {
    step: summary.slice(0, idx),
    description: summary.slice(idx + 1).trim(),
  };
};

const LadderCard = ({
  item,
  index,
  preload = false,
}: {
  item: LadderCardItem;
  index: number;
  preload?: boolean;
}) => (
  <Link href={item.href} className="group block h-full">
    <div className="overflow-hidden rounded-card">
      {item.image ? (
        <Image
          src={item.image.src}
          alt={item.image.alt}
          width={item.image.width ?? 960}
          height={item.image.height ?? 720}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          preload={preload}
          className="aspect-[4/3] w-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
        />
      ) : (
        <div aria-hidden className="aspect-[4/3] w-full bg-paper-2" />
      )}
    </div>
    <div className="flex items-baseline justify-between gap-4 pt-5 max-md:pt-4">
      <p className="font-heading text-body-s tracking-[0.16em] text-mute uppercase">
        {String(index + 1).padStart(2, "0")} · {item.step}
      </p>
      <DiagonalArrow className="text-ink transition-colors duration-300 group-hover:text-brand" />
    </div>
    <h3 className="mt-2 text-h4 transition-colors duration-300 group-hover:text-brand">
      {item.name}
    </h3>
    <p className="mt-3 text-body-m text-smoke">{item.description}</p>
  </Link>
);

/** A hairline row on the menu: name, one line, diagonal arrow. */
const MenuRowLink = ({
  name,
  summary,
  href,
}: {
  name: string;
  summary: string;
  href: string;
}) => (
  <Link
    href={href}
    className="group flex items-baseline gap-8 border-b border-line py-6 transition-colors duration-300 first:border-t hover:border-brand/40 max-md:flex-col max-md:items-start max-md:gap-2 max-md:py-5"
  >
    <h3 className="w-[300px] shrink-0 font-heading text-h6 text-ink transition-colors duration-300 group-hover:text-brand max-lg:w-[240px] max-md:w-auto">
      {name}
    </h3>
    <p className="flex-1 text-body-m text-smoke">{summary}</p>
    <DiagonalArrow className="self-center text-mute transition-colors duration-300 group-hover:text-brand max-md:hidden" />
  </Link>
);

/**
 * /work-together — the whole menu in one view (Services Menu v4).
 * The ladder runs as cards, everything else as hairline rows. Named,
 * never priced: prices live on each service's own page (content.md §26
 * rule 5). The internal menu's retired list, money rules and build
 * status are deliberately not represented here.
 */
const WorkTogetherPage = async () => {
  const ladder = await content.getLadder();

  const pillarIntensive = serviceBySlug("pillar-intensive");
  const ladderCards: LadderCardItem[] = [...ladder]
    .sort((a, b) => a.order - b.order)
    .map((tier) => ({
      slug: tier.slug,
      name: tier.name,
      ...splitSummary(tier.summary),
      href: tier.cta.href,
      image: tier.image,
    }));

  // The Pillar Intensive sits directly after the Scan.
  if (pillarIntensive) {
    ladderCards.splice(1, 0, {
      slug: pillarIntensive.slug,
      name: pillarIntensive.name,
      step: pillarIntensive.category,
      description: pillarIntensive.summary,
      href: `/services/${pillarIntensive.slug}`,
      image: {
        src: "/images/about-showcase-02.webp",
        alt: "A closed notebook, a glass of water, and a pebble on an oak table in morning sun",
      },
    });
  }

  return (
    <>
      <Navbar tone="dark" />
      <main>
        {/* Hero */}
        <section className="m-2 rounded-card bg-paper-2 pt-44 pb-14 max-lg:pt-36 max-md:pt-28 max-md:pb-10">
          <div className="container-site">
            <Reveal>
              <Tag>Work together</Tag>
            </Reveal>
            <div className="mt-4 flex items-end justify-between gap-16 max-lg:flex-col max-lg:items-start max-lg:gap-10">
              <Reveal delay={0.1}>
                <h1 className="max-w-[720px] text-display">Find your step.</h1>
              </Reveal>
              <Reveal
                delay={0.2}
                className="max-w-[420px] shrink-0 max-lg:max-w-[560px]"
              >
                <p className="text-body-xl text-smoke">
                  The whole menu in one calm view. Nothing is offered that is
                  not on this page, and every engagement begins at the Scan.
                </p>
                <Button href="/ownership-scan" variant="brand" className="mt-8">
                  Start with the Scan
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        {/* The ladder — the one path, as cards */}
        <section className="bg-paper pt-24 pb-20 max-lg:pt-16 max-md:pt-12 max-md:pb-14">
          <div className="container-site">
            <Reveal className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-3">
              <div>
                <p className="font-heading text-body-s tracking-[0.2em] text-mute uppercase">
                  The ladder
                </p>
                <h2 className="mt-4 text-h2">The one path.</h2>
              </div>
              <p className="max-w-[380px] pb-2 text-body-m text-smoke">
                The spine of the practice, in order of depth. It does not
                change based on who is in front of me.
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-4 gap-x-5 gap-y-12 max-lg:grid-cols-2 max-md:mt-9 max-md:grid-cols-1 max-md:gap-y-9">
              {ladderCards.map((item, i) => (
                <Reveal key={item.slug} delay={(i % 4) * 0.08} className="h-full">
                  <LadderCard item={item} index={i} preload={i === 0} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Everything else — grouped hairline rows */}
        <section className="bg-white section-pad">
          <div className="container-site flex flex-col gap-20 max-md:gap-14">
            {menuGroups.map((group) => (
              <div key={group.key}>
                <Reveal className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-2">
                  <div>
                    <p className="font-heading text-body-s tracking-[0.2em] text-mute uppercase">
                      {group.label}
                    </p>
                    <h2 className="mt-3 text-h3">{group.note}</h2>
                  </div>
                </Reveal>
                <div className="mt-8 max-md:mt-6">
                  {group.rows.map((row) => (
                    <MenuRowLink key={row.href} {...row} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The open room */}
        <section className="bg-paper-2 py-20 max-md:py-14">
          <div className="container-site">
            <Reveal className="mx-auto flex max-w-[720px] flex-col items-center gap-5 text-center">
              <p className="font-heading text-body-s tracking-[0.2em] text-mute uppercase">
                Open
              </p>
              <h2 className="text-h3">The room that costs nothing.</h2>
              <p className="text-body-xl text-smoke">
                Public teaching and the Creative Recovery group are open to
                anyone, and they stay open. The writing, the Sunday letter and
                the live rooms sit outside the menu on purpose.
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                <DiagonalLink href="/writing">Read the writing</DiagonalLink>
                <DiagonalLink href="/in-conversation">
                  Watch a conversation
                </DiagonalLink>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Money note (verbatim §4.3) — the page's single breath accent. */}
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
