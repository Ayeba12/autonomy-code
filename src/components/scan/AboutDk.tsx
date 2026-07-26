import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

/**
 * About DK Jonah (landing version) + client proof — verbatim, plain,
 * no photos (content.md §4.4).
 */
export const AboutDk = () => (
  <section className="py-28 max-lg:py-20 max-md:py-14">
    <div className="container-site">
      <div className="mx-auto grid max-w-[1060px] grid-cols-[260px_1fr] gap-16 max-lg:grid-cols-1 max-lg:gap-10">
        <Reveal>
          <Tag>About DK Jonah</Tag>
        </Reveal>
        <div className="flex flex-col gap-8 max-md:gap-6">
          <Reveal>
            <p className="font-heading text-h5 text-ink">
              I did not come to this work from the outside. This work comes from
              lived necessity. Chronic illness. Interrupted ambition. A PhD I
              walked away from. A life rebuilt from the inside out.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-body-l text-smoke">
              Over the past 15+ years, I have built and refined ownership-based
              systems across real life, real constraints, and real
              responsibility.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-body-l text-smoke">
              My body of work includes: The Autonomy Code. NoGraGra. SABI.
              SyncCHECK. PACE. MAP.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-body-l text-smoke">
              I have trained more than 300 people. Mentored more than 150.
              Coached more than 30. Coaches. Consultants. Creatives. Knowledge
              workers. People who already had the expertise, but could not yet
              see the shape of it.
            </p>
          </Reveal>

          {/* Client proof — plain, one voice at a time. */}
          <div className="mt-8 border-t border-line pt-10 max-md:mt-4 max-md:pt-7">
            <Reveal>
              <p className="text-body-l text-smoke">
                Chinedu, a Pan-African tech operator, came in hidden behind
                years of serious work, credible, capable, but invisible to the
                people who needed to find him. He left with a named framework, a
                market-facing voice, and a clear path forward.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="mt-8 max-md:mt-6">
                <div className="mb-6 w-12 border-t border-line" aria-hidden />
                <p className="font-heading text-h4">
                  Nothing new was added to him. What was already his was
                  returned.
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-body-l text-ink max-md:mt-6">
                That is what this work does. It does not manufacture identity.
                It returns ownership.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  </section>
);
