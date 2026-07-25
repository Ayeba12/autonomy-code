import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { InvitationBand } from "@/components/home/InvitationBand";
import { PillarsGlance } from "@/components/home/PillarsGlance";
import { ProofStrip } from "@/components/home/ProofStrip";
import { QuietAche } from "@/components/home/QuietAche";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { content } from "@/content/source";

export const metadata: Metadata = {
  description:
    "A coaching and strategy practice for accomplished professionals whose expertise lives in scattered pieces. We organise your thinking so you can lean on it.",
};

const HomePage = async () => {
  const [pillars, quotes] = await Promise.all([
    content.getPillars(),
    content.getProofQuotes(),
  ]);
  const [proof] = quotes;

  return (
    <>
      <Navbar tone="dark" />
      <main className="bg-paper">
        <HomeHero />
        <QuietAche />
        <PillarsGlance pillars={pillars} />
        <InvitationBand />
        {proof && <ProofStrip quote={proof} />}
        <CtaSection />
      </main>
    </>
  );
};

export default HomePage;
