import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import type { FaqItem } from "@/content/types";

/**
 * Questions (copy v3 §9): the heading and a quiet drawing held on the
 * left, the accordion on the right, on deep ivory so the paper chips read.
 */
export const CompassFaq = ({ faqs }: { faqs: FaqItem[] }) => (
  <section className="bg-paper-2 py-28 max-lg:py-20 max-md:py-14">
    <div className="container-site grid grid-cols-[0.8fr_1.2fr] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-8">
      <Reveal className="lg:sticky lg:top-32">
        <h2 className="text-h2">Questions</h2>
        <div className="mt-10 overflow-hidden rounded-card max-lg:hidden">
          <Image
            src="/images/about/about-window.webp"
            alt="Graphite sketch of a woman seated by a tall window, looking out over a misty lake, the dawn line drawn in gold"
            width={900}
            height={1200}
            sizes="34vw"
            className="aspect-[4/3] w-full object-cover object-[50%_40%]"
          />
        </div>
      </Reveal>
      <Reveal delay={0.1} className="justify-self-end max-lg:justify-self-stretch">
        <Accordion items={faqs} />
      </Reveal>
    </div>
  </section>
);
