import type { Metadata } from "next";
import { CareerCta } from "@/components/career/CareerCta";
import { CareerHero } from "@/components/career/CareerHero";
import { JobsSection } from "@/components/career/JobsSection";
import { OfficeLocations } from "@/components/career/OfficeLocations";
import { CtaSection } from "@/components/site/CtaSection";
import { FaqSection } from "@/components/site/FaqSection";
import { Navbar } from "@/components/site/Navbar";
import { content } from "@/content/source";

export const metadata: Metadata = {
  title: "Careers",
  description: "Help us create the web's most iconic digital experiences.",
};

/**
 * /career — Hero → "Interested?" marquee → Office locations →
 * Country-tabbed jobs → FAQ → CTA (career.md).
 */
const CareerPage = async () => {
  const [jobs, offices, faqs] = await Promise.all([
    content.getJobOpenings(),
    content.getOfficeLocations(),
    content.getFaqs(),
  ]);

  return (
    <>
      <Navbar tone="light" />
      <main>
        <CareerHero />
        <CareerCta />
        <OfficeLocations offices={offices} />
        <JobsSection jobs={jobs} />
        <FaqSection faqs={faqs} />
        <CtaSection />
      </main>
    </>
  );
};

export default CareerPage;
