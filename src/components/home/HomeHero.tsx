"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

/**
 * Dark photographic hero with zoom-out parallax background
 * (Stodio pattern, Autonomy Code copy — content.md §4.1).
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
      className="relative m-2 overflow-hidden rounded-card pt-40 pb-16 max-lg:pt-32 max-md:pt-28"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={reduced ? undefined : { scale }}
      >
        <Image
          src="/images/hero-bg-image-p-2000.webp"
          alt="Low-lit editorial scene, a still figure in a wide dark space"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-ink/40" aria-hidden />

      <div className="container-site text-white">
        <Reveal>
          <Tag tone="light">The Autonomy Code · A NoGraGra Practice</Tag>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 max-w-[850px] text-display">
            Autonomy is peace, given structure.
          </h1>
        </Reveal>
        <div className="flex items-end justify-between gap-10 pt-12 max-lg:flex-col max-lg:items-start">
          <Reveal delay={0.2} className="flex gap-6 text-body-l max-md:flex-col max-md:gap-2">
            {["Clarity", "Structure", "Self-trust"].map((word) => (
              <span key={word} className="flex items-center gap-1.5">
                <span className="text-brand">+</span> {word}
              </span>
            ))}
          </Reveal>
          <Reveal delay={0.3} className="max-w-[440px]">
            <p className="text-body-xl">
              A coaching and strategy practice for accomplished professionals
              whose expertise lives in scattered pieces. We organise your
              thinking so you can lean on it.
            </p>
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
