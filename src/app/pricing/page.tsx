import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/PricingHero";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { PricingPlans } from "@/components/site/PricingPlans";
import { content } from "@/content/source";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flexible plans designed to deliver premium results at every stage.",
};

/** /pricing — Hero → Pricing tabs → CTA (pricing.md; no FAQ on this page). */
const PricingPage = async () => {
  const plans = await content.getPricingPlans();

  return (
    <>
      <Navbar tone="dark" />
      <main>
        <PricingHero />
        <PricingPlans plans={plans} variant="bare" />
        <CtaSection />
      </main>
    </>
  );
};

export default PricingPage;
