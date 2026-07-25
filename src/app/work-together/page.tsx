import type { Metadata } from "next";
import { LadderCard } from "@/components/ladder/LadderCard";
import { LadderHero } from "@/components/ladder/LadderHero";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { content } from "@/content/source";

export const metadata: Metadata = {
  title: "Work Together",
  description:
    "The whole ladder in one calm view: the Ownership Scan, SABI CORE, and Legacy, in order of depth. Every engagement begins with the Scan.",
};

/**
 * /work-together — the Ladder in one calm view (content.md §4.3).
 * Three rungs in order of depth, named, not priced (house style §1:
 * prices live only on each tier's own landing page).
 */
const WorkTogetherPage = async () => {
  const ladder = await content.getLadder();
  const tiers = [...ladder].sort((a, b) => a.order - b.order);

  return (
    <>
      <Navbar tone="dark" />
      <main>
        <LadderHero
          eyebrow="Work Together"
          title="Find your step."
          sub="Three engagements, one order of depth. The whole ladder in one calm view."
        />

        <section className="bg-paper pb-24 max-lg:pb-16 max-md:pb-10">
          <div className="container-site">
            {tiers.map((tier, i) => (
              <Reveal key={tier.slug} delay={i * 0.1}>
                <LadderCard tier={tier} index={i} />
              </Reveal>
            ))}
            <div className="gold-thread" />
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
