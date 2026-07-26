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

/** Plain dove hairline between major sections. */
const Hairline = () => (
  <div className="container-site" aria-hidden>
    <div className="border-t border-line" />
  </div>
);

/**
 * The Ownership Scan — the £97 paid front door (content.md §4.4, verbatim).
 * Image-light and type-led on purpose: ivory ground, dove hairlines, one
 * Breath Blue accent (ShiftQuote), and this page's own black close
 * (ScanClose) — the shared CtaSection is intentionally NOT rendered here.
 */
const OwnershipScanPage = async () => {
  const faqs = await content.getFaqs();

  return (
    <>
      <Navbar tone="dark" />
      <main className="bg-paper">
        <ScanHero />
        <VideoSlot />
        <Hairline />
        <Recognition />
        <Hairline />
        <PressureCards />
        <GroundSection />
        <ShiftQuote />
        <WorkBehind />
        <Hairline />
        <AboutDk />
        <Hairline />
        <OfferSection />
        <Hairline />
        <FitSection />
        {faqs.length > 0 && <ScanFaq faqs={faqs} />}
        <ScanClose />
      </main>
    </>
  );
};

export default OwnershipScanPage;
