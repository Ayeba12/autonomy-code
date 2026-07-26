import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

interface LadderHeroProps {
  eyebrow: string;
  title: string;
  sub?: string;
}

/**
 * Ivory hero for the ladder pages (Work Together, SABI CORE, Legacy),
 * on the Stodio projects-listing pattern: eyebrow tag, large headline,
 * optional one-line sub. No dividers; the type carries it.
 */
export const LadderHero = ({ eyebrow, title, sub }: LadderHeroProps) => (
  <section className="bg-paper pt-40 pb-16 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
    <div className="container-site">
      <Reveal>
        <Tag>{eyebrow}</Tag>
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
