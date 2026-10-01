import type { Metadata } from "next";
import { AboutDk } from "@/components/compass/AboutDk";
import { CompassClose } from "@/components/compass/CompassClose";
import { CompassFaq } from "@/components/compass/CompassFaq";
import { CompassHero } from "@/components/compass/CompassHero";
import { FitSection } from "@/components/compass/FitSection";
import { FivePillars } from "@/components/compass/FivePillars";
import { MovementMarquee } from "@/components/compass/MovementMarquee";
import { OwnedGround } from "@/components/compass/OwnedGround";
import { Recognition } from "@/components/compass/Recognition";
import { ThreePlaces } from "@/components/compass/ThreePlaces";
import { WhatYouGet } from "@/components/compass/WhatYouGet";
import { Navbar } from "@/components/site/Navbar";
import { content } from "@/content/source";
import { seo } from "@/lib/seo";
import { JsonLd } from "@/components/site/JsonLd";
import { compassSchema, faqSchema } from "@/lib/schema";

const DESCRIPTION =
  "A £97 door for coaches and consultants who have built something real and privately sense it was built for the wrong reasons: twenty-five statements, a 90-minute Claim Intensive, and a written Autonomy Blueprint.";

export const metadata: Metadata = seo({
  title: "The Autonomy Compass",
  description: DESCRIPTION,
  path: "/autonomy-compass",
  image: "/images/og/autonomy-compass.jpg",
});

/**
 * /autonomy-compass — the £97 paid front door, formerly the Ownership
 * Scan (which redirects here). Copy v3 (29 Sept 2026, the "(1)" revision),
 * verbatim, in its ten sections; every button goes to the Stripe Payment
 * Link. Drawn in the house style, with DK's three product covers in the
 * offer. The briefing film is being reshot and is added once edited. The
 * page carries its own black close; the shared CtaSection is not used.
 */
const AutonomyCompassPage = async () => {
  const [faqs, pillars] = await Promise.all([content.getFaqs(), content.getPillars()]);

  return (
    <>
      <JsonLd data={compassSchema(DESCRIPTION)} />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}
      <Navbar tone="dark" />
      <main className="bg-paper">
        <CompassHero />
        <MovementMarquee />
        <Recognition />
        <ThreePlaces />
        <OwnedGround />
        <FivePillars pillars={pillars} />
        <AboutDk />
        <WhatYouGet />
        <FitSection />
        {faqs.length > 0 && <CompassFaq faqs={faqs} />}
        <CompassClose />
      </main>
    </>
  );
};

export default AutonomyCompassPage;
