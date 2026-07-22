import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

/**
 * Projects listing hero (projects.md §1a): light band with tag, H1 and a
 * meta row (intro paragraph + "Start A Project" CTA).
 */
export const ProjectsHero = () => (
  <section className="bg-paper pt-40 pb-16 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
    <div className="container-site">
      <Reveal>
        <Tag>Proven Impact</Tag>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-4 max-w-[900px] text-display">
          Turning vision into visibility
        </h1>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-10 flex items-end justify-between gap-10 max-md:mt-8 max-md:flex-col max-md:items-start">
          <p className="max-w-[560px] text-body-xl text-smoke">
            Explore our portfolio of search-first digital systems and premium
            designs that have helped global category leaders dominate their
            industries.
          </p>
          <Button href="/contact" variant="dark">
            Start A Project
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);
