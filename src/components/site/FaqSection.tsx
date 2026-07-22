import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Tag } from "@/components/ui/Tag";
import type { FaqItem } from "@/content/types";

/** Two-column FAQ block (home §9, reused on career page). */
export const FaqSection = ({ faqs }: { faqs: FaqItem[] }) => (
  <section className="bg-white pt-32 max-lg:pt-20 max-md:pt-14">
    <div className="container-site grid grid-cols-[1fr_1.25fr] gap-9 max-lg:grid-cols-1">
      <Reveal>
        <Tag>Got questions</Tag>
        <h2 className="mt-6 text-h2">
          Got questions? <span className="text-mute">We&rsquo;ve got answers</span>
        </h2>
        <p className="mt-4 text-body-l text-smoke">
          Everything you need to know about our process, pricing,
          <br className="max-md:hidden" />
          and how we work together
        </p>
      </Reveal>
      <Reveal delay={0.15} className="justify-self-end max-lg:justify-self-start">
        <Accordion items={faqs} />
      </Reveal>
    </div>
  </section>
);
