import type { Metadata } from "next";
import { LadderHero } from "@/components/ladder/LadderHero";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Legacy",
  description:
    "The deepest room of the practice. One to two people at a time, rare and private, by invitation.",
};

/**
 * /legacy — the deepest tier, named without being sold (content.md §4.6).
 * Short, quiet, type-led. No CtaSection: the page stays quiet on ivory,
 * and the one price line appears here, on its own landing page.
 */
const LegacyPage = () => (
  <>
    <Navbar tone="dark" />
    <main className="bg-paper">
      <LadderHero
        eyebrow="Legacy"
        title="The deepest room."
        sub="One to two people at a time. Rare and private, by invitation."
      />

      <section className="pb-32 max-lg:pb-24 max-md:pb-16">
        <div className="container-site">
          <div className="max-w-[680px]">
            <Reveal>
              <p className="text-body-xl text-smoke">
                Legacy is the highest-depth engagement of the practice: a year
                beside DK across all five pillars, for a person whose work
                carries weight beyond themselves. It is not applied for so
                much as arrived at. Most Legacy conversations begin inside
                SABI CORE, when the Map makes the route plain.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-12 w-16 border-t border-line max-md:mt-8" />
              <p className="mt-12 font-heading text-h5 max-md:mt-8">
                Legacy · £10,000 for the year · by invitation only.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-12 flex flex-wrap items-center gap-8 max-md:mt-8 max-md:gap-6">
                <Button href="/contact" variant="outline-dark">
                  Enquire in writing
                </Button>
                <ArrowLink href="/ownership-scan">
                  Begin with the Scan
                </ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default LegacyPage;
