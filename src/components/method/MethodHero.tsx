import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

/**
 * Centered hero for The Method on the in-conversation image-band
 * pattern: rounded dark photo band with an ink scrim, display headline
 * with an inline image wipe, two buttons, and a quiet meta row along
 * the bottom. Copy: content.md §4.2.
 */
export const MethodHero = () => (
  <section className="relative isolate m-2 overflow-hidden rounded-card pt-44 pb-12 max-lg:pt-36 max-md:pt-28 max-md:pb-8">
    <Image
      src="/images/method-hero-gradient.webp"
      alt=""
      fill
      preload
      sizes="100vw"
      className="-z-10 object-cover"
    />
    <div className="absolute inset-0 -z-10 bg-ink/50" aria-hidden />
    <div className="container-site text-white">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <h1 className="max-w-[1000px] text-display">
            From hidden captivity to self-governance.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/work-together" variant="outline-light">
              Work Together
            </Button>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.25}>
        <div className="mt-16 flex items-center justify-between border-t border-white/25 pt-5 text-body-s text-mute max-md:mt-10">
          <span>The Method</span>
          <span>Five pillars · One system</span>
        </div>
      </Reveal>
    </div>
  </section>
);
