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
import { ResetBanner } from "@/components/reset/ResetBanner";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { content } from "@/content/source";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  description:
    "A coaching and strategy practice for accomplished professionals whose expertise lives in scattered pieces. We organise your thinking so you can lean on it.",
  path: "",
  keywords: ["autonomy", "ownership coaching", "self-trust", "five pillars of autonomy", "coaching and strategy practice", "coaching for consultants", "productivity coaching", "sustainable productivity", "personal autonomy", "clarity coaching", "self-leadership", "productivity coach London", "productivity coaching UK", "online coaching United Kingdom"],
});

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
        {/* Annual Reset strip while booking is open; remove after 24 November. */}
        <ResetBanner />
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
