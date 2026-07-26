import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Tag } from "@/components/ui/Tag";

/**
 * The quiet ache: recognition beat in the Stodio "Who we are" layout
 * (content.md §4.1 copy, verbatim).
 */
export const QuietAche = () => (
  <section className="bg-white pt-32 max-lg:pt-20 max-md:pt-14">
    <div className="container-site">
      <Reveal className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
        <div>
          <Tag>The quiet ache</Tag>
          <h2 className="mt-6 max-w-[900px] text-h2">
            From the outside, your work looks credible.{" "}
            <span className="text-mute">Privately, it feels scattered.</span>
          </h2>
        </div>
        <ArrowLink href="/about" className="shrink-0 uppercase">
          About the Studio
        </ArrowLink>
      </Reveal>
      <Reveal delay={0.15} className="mt-8 max-w-[620px]">
        <p className="text-body-xl text-smoke">
          You are doing a lot, but you cannot see the shape of it. You
          second-guess decisions you are qualified to make. That is not a
          discipline problem. It is an ownership problem.
        </p>
      </Reveal>
    </div>
  </section>
);
