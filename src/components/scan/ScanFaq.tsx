import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import type { FaqItem } from "@/content/types";

/**
 * Optional Scan FAQ — rendered only when content.getFaqs() returns items.
 * Deep-ivory band so the paper accordion chips read against it.
 */
export const ScanFaq = ({ faqs }: { faqs: FaqItem[] }) => (
  <section className="bg-paper-2">
    <div className="container-site grid grid-cols-[1fr_1.25fr] gap-9 py-24 max-lg:grid-cols-1 max-lg:py-16 max-md:py-12">
      <Reveal>
        <h2 className="text-h3">Questions</h2>
      </Reveal>
      <Reveal delay={0.15} className="justify-self-end max-lg:justify-self-start">
        <Accordion items={faqs} />
      </Reveal>
    </div>
  </section>
);
