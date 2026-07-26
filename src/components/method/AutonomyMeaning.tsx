import { Reveal } from "@/components/motion/Reveal";

/** What autonomy means: the page's single breath-blue accent (content.md 4.2). */
export const AutonomyMeaning = () => (
  <section className="section-gap bg-breath-tint py-24 max-lg:py-16 max-md:py-12">
    <div className="container-site">
      <Reveal className="mx-auto max-w-[820px] text-center">
        <p className="font-heading text-body-l text-ink">What autonomy means</p>
        <p className="mt-10 font-heading text-h4 max-md:mt-6">
          Autonomy is not independence from people. It is independence from
          captivity. Enough clarity to know what you want, enough structure to
          pursue it, and enough self-trust to lead from that place.
        </p>
      </Reveal>
    </div>
  </section>
);
