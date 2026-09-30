import { ImageWipe } from "@/components/motion/ImageWipe";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import { ScanCta } from "./ScanCta";

/**
 * Compass hero (copy v3 §1, verbatim words): type on ivory ground with
 * the Stodio inline image wipe, a drawn key opening inside the headline.
 * The wipe is decorative, so its alt is empty and never reads as text.
 */
export const ScanHero = () => (
  <section className="pt-44 pb-16 max-lg:pt-36 max-md:pt-28 max-md:pb-10">
    <div className="container-site flex flex-col items-center text-center">
      <Reveal className="flex flex-col items-center gap-7 max-md:gap-5">
        <Tag>The Autonomy Compass</Tag>
        <p className="max-w-[640px] font-heading text-body-l text-smoke">
          For coaches and consultants who have built something real, and
          privately sense it was built for the wrong reasons.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-9 max-w-[1100px] text-h2 max-md:mt-6">
          <span className="block">
            You don&rsquo;t have a discipline problem.
          </span>
          <span className="block">
            You have a{" "}
            <ImageWipe
              src="/images/scan/scan-key-sketch.webp"
              alt=""
              trigger="load"
              preload
              delay={0.5}
              className="mx-1"
            />{" "}
            life you never fully claimed.
          </span>
        </h1>
      </Reveal>
      <Reveal delay={0.2} className="mt-6 flex max-w-[740px] flex-col gap-4">
        <p className="text-body-xl text-smoke">
          Most people are living a life they didn&rsquo;t fully choose. Not
          because they failed. Because it was built in response to pressure,
          expectation and survival, rather than from deliberate design.
        </p>
        <p className="text-body-xl text-ink">
          The Autonomy Compass shows you where that happened, and what to
          claim back first.
        </p>
      </Reveal>
      <Reveal
        delay={0.3}
        className="mt-10 flex flex-col items-center gap-4 max-md:mt-8"
      >
        <ScanCta />
        <p className="text-body-s text-smoke">
          Twenty-five statements. About ten minutes. One clear first move.
        </p>
      </Reveal>
    </div>
  </section>
);
