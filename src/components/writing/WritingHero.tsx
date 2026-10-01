import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

/**
 * Writing listing hero (content.md §4.8), drawn in the house style: the
 * headline on soft ivory beside the drawing of a woman writing one clear
 * line in gold, crumpled drafts pushed aside.
 */
export const WritingHero = () => (
  <section className="m-2 rounded-card bg-paper-2 pt-40 pb-14 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
    <div className="container-site grid grid-cols-[1.1fr_0.9fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
      <div>
        <Reveal>
          <Tag>Writing</Tag>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-[720px] text-display">Thinking you can lean on.</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[520px] text-body-xl text-slate">
            Essays on autonomy, ownership, and the quiet structure under a
            working life.
          </p>
        </Reveal>
      </div>
      <Reveal delay={0.2}>
        <div className="overflow-hidden rounded-card">
          <Image
            src="/images/pillars/pillar-message.webp"
            alt="Graphite sketch of a woman writing one clear line in gold across a large sheet, crumpled drafts pushed aside"
            width={1000}
            height={1250}
            preload
            sizes="(max-width: 1023px) 100vw, 40vw"
            className="aspect-[4/5] w-full object-cover max-lg:aspect-[3/2] max-lg:object-[50%_35%]"
          />
        </div>
      </Reveal>
    </div>
  </section>
);
