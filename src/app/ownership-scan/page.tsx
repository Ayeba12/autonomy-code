import type { Metadata } from "next";
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
import { VideoSlot } from "@/components/scan/VideoSlot";
import { WorkBehind } from "@/components/scan/WorkBehind";
import { Navbar } from "@/components/site/Navbar";
import { content } from "@/content/source";

export const metadata: Metadata = {
  title: "The Ownership Scan",
  description:
    "A £97 diagnostic for coaches and consultants. Twenty-five questions, a 90-minute Map-Out Session, and a written Personal Autonomy Map.",
};

/**
 * The Ownership Scan — the £97 paid front door (content.md §4.4, verbatim
 * words; the pillar section shows all five per client direction). The
 * bands alternate ivory, white, breath blue, and ink for rhythm: inline
 * image wipe in the hero, movement ticker, icon cards, ink pillar band,
 * counted numbers, sticky booking card, and this page's own black close
 * (ScanClose) — the shared CtaSection is NOT rendered here.
 */
const OwnershipScanPage = async () => {
  const [faqs, pillars] = await Promise.all([
    content.getFaqs(),
    content.getPillars(),
  ]);

  return (
    <>
      <Navbar tone="dark" />
      <main className="bg-paper">
        <ScanHero />
        <VideoSlot
          src="https://cms.theautonomycode.com/wp-content/uploads/tac/reclaiming-your-practice.mp4"
          poster="/images/scan-close-book.webp"
        />
        <ScanMarquee movements={pillars.map((pillar) => pillar.movement)} />
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

export default OwnershipScanPage;
