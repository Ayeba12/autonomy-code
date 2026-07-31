import type { Metadata } from "next";
import { AutonomyMeaning } from "@/components/method/AutonomyMeaning";
import { HiddenCaptivity } from "@/components/method/HiddenCaptivity";
import { MethodClose } from "@/components/method/MethodClose";
import { MethodHero } from "@/components/method/MethodHero";
import { OperatingFlow } from "@/components/method/OperatingFlow";
import { PillarCards } from "@/components/method/PillarCards";
import { YearOneSection } from "@/components/method/YearOneSection";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { content } from "@/content/source";

export const metadata: Metadata = {
  title: "The Method",
  description:
    "Autonomy is not independence from people. It is independence from captivity. The five pillars and the operating flow of The Autonomy Code.",
};

const MethodPage = async () => {
  const [pillars, stats] = await Promise.all([
    content.getPillars(),
    content.getStats(),
  ]);

  return (
    <>
      <Navbar tone="light" />
      <main className="bg-paper">
        <MethodHero />
        <AutonomyMeaning />
        <HiddenCaptivity />
        <PillarCards pillars={pillars} />
        <OperatingFlow />
        <YearOneSection stats={stats} />
        <MethodClose />
        <CtaSection />
      </main>
    </>
  );
};

export default MethodPage;
