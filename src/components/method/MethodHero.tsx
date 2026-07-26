import { ImageWipe } from "@/components/motion/ImageWipe";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

/**
 * Centered hero for The Method on the Stodio about-hero pattern:
 * display headline with an inline image wipe, two buttons, and a
 * quiet meta row along the bottom. Copy: content.md §4.2.
 */
export const MethodHero = () => (
  <section className="pt-44 pb-12 max-lg:pt-36 max-md:pt-28 max-md:pb-8">
    <div className="container-site">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <h1 className="max-w-[1000px] text-display">
            From hidden captivity{" "}
            <ImageWipe
              src="/images/looping-image2.webp"
              alt="Blurred portrait of a man in a yellow shirt, his face in motion"
              trigger="load"
              delay={0.5}
              preload
            />{" "}
            to self-governance.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/ownership-scan" variant="brand">
              Take the Ownership Scan
            </Button>
            <Button href="/work-together" variant="outline-dark">
              Work Together
            </Button>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.25}>
        <div className="mt-16 flex items-center justify-between border-t border-line pt-5 text-body-s text-smoke max-md:mt-10">
          <span>The Method</span>
          <span>Five pillars · One system</span>
        </div>
      </Reveal>
    </div>
  </section>
);
