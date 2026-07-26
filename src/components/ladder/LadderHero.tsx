import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

interface LadderHeroProps {
  eyebrow: string;
  title: string;
  sub?: string;
  /** Optional hero CTA (Stodio projects-hero pattern). */
  cta?: { label: string; href: string };
}

/**
 * Ivory hero for the ladder pages (Work Together, SABI CORE, Legacy),
 * on the Stodio projects-listing pattern: eyebrow tag, large headline,
 * intro line, and an optional gold CTA.
 */
export const LadderHero = ({ eyebrow, title, sub, cta }: LadderHeroProps) => (
  <section className="bg-paper pt-40 pb-16 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
    <div className="container-site">
      <Reveal>
        <Tag>{eyebrow}</Tag>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-6 max-w-[900px] text-display">{title}</h1>
      </Reveal>
      {(sub || cta) && (
        <Reveal delay={0.2}>
          <div className="mt-8 flex items-end justify-between gap-8 max-md:mt-6 max-md:flex-col max-md:items-start">
            {sub && (
              <p className="max-w-[560px] text-body-xl text-smoke">{sub}</p>
            )}
            {cta && (
              <Button href={cta.href} variant="brand" className="shrink-0">
                {cta.label}
              </Button>
            )}
          </div>
        </Reveal>
      )}
    </div>
  </section>
);
