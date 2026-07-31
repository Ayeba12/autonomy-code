import type { Metadata } from "next";
import { GalleryLoop } from "@/components/home/GalleryLoop";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeMarquee } from "@/components/home/HomeMarquee";
import { HomeStats } from "@/components/home/HomeStats";
import { JournalSection } from "@/components/home/JournalSection";
import { LadderShowcase } from "@/components/home/LadderShowcase";
import { PillarsSection } from "@/components/home/PillarsSection";
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
  const [pillars, ladder, articles, quotes, stats] = await Promise.all([
    content.getPillars(),
    content.getLadder(),
    content.getArticles(),
    content.getProofQuotes(),
    content.getStats(),
  ]);
  const published = articles.filter((article) => !article.draft);
  const [proof] = quotes;

  return (
    <>
      <Navbar tone="light" />
      <main className="bg-paper">
        <HomeHero />
        <HomeMarquee />
        <QuietAche />
        <GalleryLoop />
        <HomeStats stats={stats} />
        <PillarsSection pillars={pillars} />
        <LadderShowcase tiers={ladder} />
        {proof && <ProofStrip quote={proof} />}
        <JournalSection articles={published} />
        <CtaSection />
      </main>
    </>
  );
};

export default HomePage;
