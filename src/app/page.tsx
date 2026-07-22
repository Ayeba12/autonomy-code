import { GallerySection } from "@/components/home/GallerySection";
import { HomeHero } from "@/components/home/HomeHero";
import { JournalSection } from "@/components/home/JournalSection";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WorkShowcase } from "@/components/home/WorkShowcase";
import { CtaSection } from "@/components/site/CtaSection";
import { FaqSection } from "@/components/site/FaqSection";
import { Navbar } from "@/components/site/Navbar";
import { PricingPlans } from "@/components/site/PricingPlans";
import { TestimonialSlider } from "@/components/site/TestimonialSlider";
import { content } from "@/content/source";

const HomePage = async () => {
  const [stats, services, projects, plans, faqs, testimonials, posts] =
    await Promise.all([
      content.getStats(),
      content.getServices(),
      content.getProjects(),
      content.getPricingPlans(),
      content.getFaqs(),
      content.getTestimonials(),
      content.getBlogPosts(),
    ]);

  return (
    <>
      <Navbar tone="light" />
      <main>
        <HomeHero />
        <LogoMarquee />
        <GallerySection />
        <StatsSection stats={stats} />
        <ServicesSection services={services} />
        <WorkShowcase projects={projects} />
        <PricingPlans plans={plans} />
        <FaqSection faqs={faqs} />
        <TestimonialSlider testimonials={testimonials} />
        <JournalSection posts={posts} />
        <CtaSection />
      </main>
    </>
  );
};

export default HomePage;
