import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";

/** Type-led ivory hero: eyebrow over the gold thread, one statement, one door (content.md 4.1). */
export const HomeHero = () => (
  <section className="pt-44 pb-20 max-lg:pt-36 max-md:pt-28 max-md:pb-12">
    <div className="container-site">
      <Reveal>
        <p className="font-heading text-body-l text-ink">
          The Autonomy Code &middot; A NoGraGra Practice
        </p>
        <div className="gold-thread mt-5 w-full max-w-xs" aria-hidden />
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-8 max-w-[900px] text-display">
          Autonomy is peace, given structure.
        </h1>
      </Reveal>
      <Reveal delay={0.2} className="mt-8 max-w-[620px]">
        <p className="text-body-xl text-smoke">
          A coaching and strategy practice for accomplished professionals whose
          expertise lives in scattered pieces. We organise your thinking so you
          can lean on it.
        </p>
      </Reveal>
      <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
        <Button href="/ownership-scan" variant="brand">
          Take the Ownership Scan
        </Button>
        <ArrowLink href="/method">See the method</ArrowLink>
      </Reveal>
    </div>
  </section>
);
