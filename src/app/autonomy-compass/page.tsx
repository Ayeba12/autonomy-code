import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { AboutDk } from "@/components/scan/AboutDk";
import { FitSection } from "@/components/scan/FitSection";
import { GroundSection } from "@/components/scan/GroundSection";
import { OfferSection } from "@/components/scan/OfferSection";
import { PressureCards } from "@/components/scan/PressureCards";
import { Recognition } from "@/components/scan/Recognition";
import { ScanClose } from "@/components/scan/ScanClose";
import { ScanFaq } from "@/components/scan/ScanFaq";
import { ScanHero } from "@/components/scan/ScanHero";
import { ScanMarquee } from "@/components/scan/ScanMarquee";
import { ShiftQuote } from "@/components/scan/ShiftQuote";
import { WorkBehind, compassMovements } from "@/components/scan/WorkBehind";
import { Navbar } from "@/components/site/Navbar";
import { content } from "@/content/source";

export const metadata: Metadata = {
  title: "The Autonomy Compass",
  description:
    "A £97 door for coaches and consultants who have built something real and privately sense it was built for the wrong reasons. Twenty-five statements, a 90-minute Claim Intensive, and a written Autonomy Blueprint.",
};

/**
 * /autonomy-compass — the £97 paid front door, formerly the Ownership
 * Scan (which redirects here). Copy v3, 29 Sept 2026, verbatim: ten
 * sections, every button to the Stripe Payment Link. The briefing film
 * is being reshot and returns once edited, so no video slot for now.
 * The page carries its own black close; the shared CtaSection is not
 * rendered here.
 */
const AutonomyCompassPage = async () => {
  const [faqs, pillars] = await Promise.all([
    content.getFaqs(),
    content.getPillars(),
  ]);

  return (
    <>
      <Navbar tone="dark" />
      <main className="bg-paper">
        <ScanHero />
        {/* Where the briefing film will sit once reshot: for now, the
            drawing of a woman at the end of the day, drawing one line. */}
        <section className="pb-20 max-lg:pb-14 max-md:pb-10">
          <div className="container-site">
            <Reveal>
              <figure className="mx-auto max-w-[960px]">
                <div className="overflow-hidden rounded-card-lg max-md:rounded-card">
                  <Image
                    src="/images/reset/reset-hero.webp"
                    alt="Graphite sketch of a woman at a table at the end of the day, drawing one line in gold on the page in front of her"
                    width={1600}
                    height={1293}
                    sizes="(max-width: 1023px) 100vw, 960px"
                    className="aspect-video w-full object-cover object-[50%_40%]"
                  />
                </div>
                <figcaption className="mt-3 text-center text-body-s text-slate">
                  Where it happened, and what to claim back first.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
        <ScanMarquee
          movements={pillars.map(
            (pillar) => compassMovements[pillar.slug] ?? pillar.movement,
          )}
        />
        <Recognition />
        <PressureCards />
        <GroundSection />
        <ShiftQuote />
        <WorkBehind pillars={pillars} />
        <AboutDk />
        <OfferSection />
        <FitSection />
        {faqs.length > 0 && <ScanFaq faqs={faqs} />}
        <ScanClose />
      </main>
    </>
  );
};

export default AutonomyCompassPage;
