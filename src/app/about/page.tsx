import type { Metadata } from "next";
import { AboutCounters } from "@/components/about/AboutCounters";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { ExperienceHighlight } from "@/components/about/ExperienceHighlight";
import { FoundationTabs } from "@/components/about/FoundationTabs";
import { LogoWall } from "@/components/about/LogoWall";
import { ProcessSection } from "@/components/about/ProcessSection";
import { TeamSection } from "@/components/about/TeamSection";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { content } from "@/content/source";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Since 2019, Stodio has been a global collective turning ambitious ideas into industry-leading brands through the perfect blend of strategy and soul.",
};

/**
 * /about ("Studio" in the nav) — Hero → Our Story → Numbers → Experience
 * highlight → Our Method → Client logos → Our Foundation → Team → CTA
 * (about.md; footer comes from the root layout).
 */
const AboutPage = async () => {
  const team = await content.getTeam();

  return (
    <>
      <Navbar tone="dark" />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutCounters />
        <ExperienceHighlight />
        <ProcessSection />
        <LogoWall />
        <FoundationTabs />
        <TeamSection team={team} />
        <CtaSection />
      </main>
    </>
  );
};

export default AboutPage;
