"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

/**
 * Dark photographic career hero (career.md §2) — background zooms out
 * from scale 1.2 → 1 on load, copy blur-reveals in.
 */
export const CareerHero = () => {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-ink pt-48 pb-28 max-lg:pt-36 max-lg:pb-20 max-md:pt-28 max-md:pb-14">
      <motion.div
        className="absolute inset-0"
        initial={reduced ? false : { scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        aria-hidden
      >
        <Image
          src="/images/career-hero-bg.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/40" aria-hidden />

      <div className="container-site relative flex flex-col items-center gap-5 text-center text-white">
        <Reveal>
          <Tag tone="light">Career</Tag>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-display">
            Shape the future
            <br />
            of digital experiences.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-heading text-h4">
            Help us create the web&rsquo;s most iconic digital experiences.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
