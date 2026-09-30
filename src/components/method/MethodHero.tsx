"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

/**
 * The Method hero on the home-hero shape: a graphite drawing of a woman
 * walking out of a lattice-walled room onto open ground, the path in
 * gold, under an ink wash; headline up top, the three words and the
 * standfirst along the bottom. Copy: content.md §4.2.
 */
export const MethodHero = () => {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  return (
    <section
      ref={ref}
      className="relative isolate m-2 flex min-h-[88vh] flex-col overflow-hidden rounded-card pt-40 pb-10 max-lg:pt-32 max-md:min-h-[80vh] max-md:pt-28"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={reduced ? undefined : { scale }}
      >
        <Image
          src="/images/method/method-hero.webp"
          alt="Graphite drawing of a woman walking out of a room drawn as a lattice of thin bars, onto open ground, the path ahead in gold"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[38%_50%]"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-ink/55" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink/70 to-transparent"
        aria-hidden
      />

      <div className="container-site flex flex-1 flex-col justify-between text-white">
        <div>
          <Reveal>
            <Tag tone="light">The Method</Tag>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-[900px] text-display">
              From hidden captivity
              <br />
              to self-governance.
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
          <Reveal delay={0.3} className="max-w-[460px]">
            <h2 className="font-body text-h5">
              Five pillars, one operating flow, and a year built around how
              you actually work.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/work-together" variant="brand">
                Work Together
              </Button>
              <Button href="/autonomy-compass" variant="light">
                Start with the Compass
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
