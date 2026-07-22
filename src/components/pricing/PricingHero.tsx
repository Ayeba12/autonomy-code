import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

/**
 * Pricing hero (pricing.md §1): light band, title left, subtext
 * bottom-right — flows seamlessly into the pricing plans section below.
 */
export const PricingHero = () => (
  <section className="bg-paper pt-40 pb-14 max-lg:pt-32 max-md:pt-28 max-md:pb-8">
    <div className="container-site">
      <div className="flex items-end justify-between gap-10 max-md:flex-col max-md:items-start">
        <div>
          <Reveal>
            <Tag>Next-Gen Design Agency</Tag>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-display">Ready to scale your brand?</h1>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="max-w-[380px]">
          <p className="text-body-m text-smoke">
            Flexible plans designed to deliver premium results at every stage.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
