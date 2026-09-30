import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { ResetCta } from "@/components/site/ResetCta";
import { DiagonalArrow, DiagonalLink } from "@/components/ui/DiagonalLink";
import { Tag } from "@/components/ui/Tag";
import { content } from "@/content/source";
import { menuGroups } from "@/content/services";
import type { ImageRef } from "@/content/types";

export const metadata: Metadata = {
  title: "Work Together",
  description:
    "The whole menu in one calm view: the ladder, single sessions, knowledge work, and ongoing implementation. Every engagement begins with the Autonomy Compass.",
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

/** "The door. Twenty-five statements…" → step label + the rest. */
const splitSummary = (summary: string) => {
  const idx = summary.indexOf(".");
  if (idx === -1) return { step: summary, description: "" };
  return {
    step: summary.slice(0, idx),
    description: summary.slice(idx + 1).trim(),
  };
};

/** A drawing for each menu group, from the house set. */
const groupArt: Record<string, ImageRef> = {
  workshop: {
    src: "/images/reset/reset-move-audit.webp",
    alt: "Graphite sketch of a woman with a magnifying glass tracing footprints across a ledger back to the first, in gold",
  },
  sessions: {
    src: "/images/pillars/pillar-message.webp",
    alt: "Graphite sketch of a woman writing one clear line in gold across a large sheet, crumpled drafts pushed aside",
  },
  "knowledge-work": {
    src: "/images/pillars/pillar-resources.webp",
    alt: "Graphite sketch of a woman at an open cabinet of well-ordered tools and ledgers, lifting out one key drawn in gold",
  },
  ongoing: {
    src: "/images/reset/reset-move-anchor.webp",
    alt: "Graphite sketch of a woman driving a stake into the ground to hold a tent in the wind, the stake and rope in gold",
  },
};

/** Small uppercase label used for eyebrows across the page. */
const Eyebrow = ({ children }: { children: string }) => (
  <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">{children}</p>
);

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
    <div className="overflow-hidden rounded-card bg-paper">
      {item.image ? (
        <Image
          src={item.image.src}
          alt={item.image.alt}
          width={item.image.width ?? 1600}
          height={item.image.height ?? 1200}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          preload={preload}
          className="aspect-[4/3] w-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
        />
      ) : (
        <div aria-hidden className="aspect-[4/3] w-full bg-paper-2" />
      )}
    </div>
    <div className="flex items-baseline justify-between gap-4 pt-5 max-md:pt-4">
      <p className="font-heading text-body-s tracking-[0.16em] text-slate uppercase">
        {String(index + 1).padStart(2, "0")} · {item.step}
      </p>
      <DiagonalArrow className="text-ink transition-colors duration-300 group-hover:text-brand" />
    </div>
    <h3 className="mt-2 text-h4 transition-colors duration-300 group-hover:text-brand">
      {item.name}
    </h3>
    <p className="mt-3 text-body-m text-slate">{item.description}</p>
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
    <h3 className="w-[260px] shrink-0 font-heading text-h6 text-ink transition-colors duration-300 group-hover:text-brand max-lg:w-[220px] max-md:w-auto">
      {name}
    </h3>
    <p className="flex-1 text-body-m text-slate">{summary}</p>
    <DiagonalArrow className="self-center text-slate transition-colors duration-300 group-hover:text-brand max-md:hidden" />
  </Link>
);

/**
 * /work-together — the whole menu in one view (Services Menu v4), drawn
 * in the house style: the ladder as three cards with their drawings,
 * each menu group beside a drawing of its own. Named, never priced:
 * prices live on each service's own page (content.md §26 rule 5). The
 * internal menu's retired list, money rules and build status are
 * deliberately not represented here.
 */
const WorkTogetherPage = async () => {
  const ladder = await content.getLadder();

  const ladderCards: LadderCardItem[] = [...ladder]
    .sort((a, b) => a.order - b.order)
    .map((tier) => ({
      slug: tier.slug,
      name: tier.name,
      ...splitSummary(tier.summary),
      href: tier.cta.href,
      image: tier.image,
    }));

  return (
    <>
      <Navbar tone="dark" />
      <main>
        {/* Hero — headline and the seat beside the drawing of a woman
            standing on the one plank that holds. */}
        <section className="m-2 rounded-card bg-paper-2 pt-40 pb-14 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
          <div className="container-site grid grid-cols-[1.15fr_0.85fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
            <div>
              <Reveal>
                <Tag>Work together</Tag>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 max-w-[720px] text-display">Find your step.</h1>
              </Reveal>
              <Reveal delay={0.2} className="mt-8 max-w-[520px]">
                <p className="text-body-xl text-slate">
                  The whole menu in one calm view. Nothing is offered that is
                  not on this page, and every engagement begins at the Compass.
                </p>
                <ResetCta className="mt-8 items-start" lineClassName="text-slate" />
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-card">
                <Image
                  src="/images/scan/scan-ground.webp"
                  alt="Graphite sketch of a woman standing steady on a floor of mismatched planks, the one solid plank under her feet drawn in gold"
                  width={1000}
                  height={1250}
                  preload
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="aspect-[4/5] w-full object-cover max-lg:aspect-[3/2]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* The ladder — the one path, as three cards */}
        <section className="bg-paper pt-24 pb-20 max-lg:pt-16 max-md:pt-12 max-md:pb-14">
          <div className="container-site">
            <Reveal className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-3">
              <div>
                <Eyebrow>The ladder</Eyebrow>
                <h2 className="mt-4 text-h2">The one path.</h2>
              </div>
              <p className="max-w-[380px] pb-2 text-body-m text-slate">
                The spine of the practice, in order of depth. It does not
                change based on who is in front of me.
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-3 gap-x-5 gap-y-12 max-lg:grid-cols-2 max-md:mt-9 max-md:grid-cols-1 max-md:gap-y-9">
              {ladderCards.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.08} className="h-full">
                  <LadderCard item={item} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Everything else — each group beside its drawing */}
        <section className="bg-white section-pad">
          <div className="container-site flex flex-col gap-24 max-md:gap-14">
            {menuGroups.map((group) => {
              const art = groupArt[group.key];
              return (
                <div
                  key={group.key}
                  className="grid grid-cols-[320px_1fr] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-8"
                >
                  <Reveal>
                    {art && (
                      <div className="mb-6 overflow-hidden rounded-card max-lg:hidden">
                        <Image
                          src={art.src}
                          alt={art.alt}
                          width={1000}
                          height={1250}
                          sizes="320px"
                          className="aspect-[4/3] w-full object-cover"
                        />
                      </div>
                    )}
                    <Eyebrow>{group.label}</Eyebrow>
                    <h2 className="mt-3 text-h4">{group.note}</h2>
                  </Reveal>
                  <Reveal delay={0.1}>
                    {group.rows.map((row) => (
                      <MenuRowLink key={row.href} {...row} />
                    ))}
                  </Reveal>
                </div>
              );
            })}
          </div>
        </section>

        {/* The open room — beside the ripples */}
        <section className="bg-paper-2 py-24 max-lg:py-16 max-md:py-12">
          <div className="container-site grid grid-cols-[0.8fr_1fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
            <Reveal>
              <div className="overflow-hidden rounded-card">
                <Image
                  src="/images/about/about-ripples.webp"
                  alt="Graphite sketch of ripples widening across still water from one dropped stone, the innermost ring in gold"
                  width={900}
                  height={1200}
                  sizes="(max-width: 1023px) 100vw, 35vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col gap-5">
              <Eyebrow>Open</Eyebrow>
              <h2 className="text-h3">The room that costs nothing.</h2>
              <p className="max-w-[560px] text-body-xl text-slate">
                Public teaching and the Creative Recovery group are open to
                anyone, and they stay open. The writing, the Sunday letter and
                the live rooms sit outside the menu on purpose.
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-4">
                <DiagonalLink href="/writing">Read the writing</DiagonalLink>
                <DiagonalLink href="/in-conversation">Watch a conversation</DiagonalLink>
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
