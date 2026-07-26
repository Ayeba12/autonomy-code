import { ImageWipe } from "@/components/motion/ImageWipe";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Image-rich hero for The Method (content.md 4.2): display headline with an
 * inline rounded image that wipes open on load (Stodio hero pattern).
 */
export const MethodHero = () => (
  <section className="pt-44 pb-16 max-lg:pt-36 max-md:pt-28 max-md:pb-10">
    <div className="container-site">
      <Reveal>
        <p className="font-heading text-body-l text-ink">The Method</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-8 max-w-[1000px] text-display">
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
    </div>
  </section>
);
