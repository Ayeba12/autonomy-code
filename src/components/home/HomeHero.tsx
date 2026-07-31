"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

/**
 * Full-viewport dark photographic hero on the Stodio home pattern:
 * eyebrow + huge headline up top, then a bottom row with the three
 * plus-items left and the intro block with buttons right.
 * Copy: content.md §4.1.
 */
export const HomeHero = () => {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);

  return (
    <section
      ref={ref}
      className="relative isolate m-2 flex min-h-[94vh] flex-col overflow-hidden rounded-card pt-40 pb-10 max-lg:pt-32 max-md:min-h-[88vh] max-md:pt-28"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={reduced ? undefined : { scale }}
      >
        <Image
          src="/images/five-pillars.webp"
          alt="Five stone pillars at golden hour, sea and sky behind them"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-ink/50" aria-hidden />

      <div className="container-site flex flex-1 flex-col justify-between text-white">
        <div>
          <Reveal>
            <Tag tone="light">The Autonomy Code · A NoGraGra Practice</Tag>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-[900px] text-display">
              Autonomy is peace,
              <br />
              given structure.
            </h1>
          </Reveal>
        </div>

        <div className="flex items-end justify-between gap-10 pt-16 max-lg:flex-col max-lg:items-start">
          <Reveal
            delay={0.2}
            className="flex gap-14 text-body-l max-lg:gap-8 max-md:flex-col max-md:gap-2"
          >
            {["Clarity", "Structure", "Self-trust"].map((word) => (
              <span key={word} className="flex items-center gap-1.5">
                <span className="text-brand">+</span> {word}
              </span>
            ))}
          </Reveal>
          <Reveal delay={0.3} className="max-w-[430px]">
            <h2 className="font-body text-h5">
              A coaching and strategy practice for accomplished professionals
              whose expertise lives in scattered pieces.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/ownership-scan" variant="brand">
                Take the Ownership Scan
              </Button>
              <Button href="/method" variant="light">
                See the Method
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
