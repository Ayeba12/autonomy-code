import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

interface LadderHeroProps {
  eyebrow: string;
  title: string;
  sub?: string;
}

/**
 * Type-led ivory hero for the ladder pages (Work Together, SABI CORE,
 * Legacy): eyebrow, gold thread, large headline, optional one-line sub.
 * Image-light on purpose (content.md §2 Imagery).
 */
export const LadderHero = ({ eyebrow, title, sub }: LadderHeroProps) => (
  <section className="bg-paper pt-40 pb-16 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
    <div className="container-site">
      <Reveal>
        <Tag>{eyebrow}</Tag>
        <div className="gold-thread mt-4 w-16" />
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-6 max-w-[900px] text-display">{title}</h1>
      </Reveal>
      {sub && (
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[560px] text-body-xl text-smoke max-md:mt-6">
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  </section>
);
