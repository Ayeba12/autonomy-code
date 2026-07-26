"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

/**
 * Writing listing hero (content.md §4.8, Stodio `.hero-section.blogs`
 * pattern): centered tag + H1 over a full-bleed calm photo under an ink
 * wash, zooming out from scale 1.2 on load.
 */
export const WritingHero = () => {
  const reduced = useReducedMotion();

  return (
    <section className="relative m-2 overflow-hidden rounded-card pt-44 pb-36 max-lg:pt-36 max-lg:pb-24 max-md:pt-28 max-md:pb-20">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={reduced ? false : { scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/images/hero-bg-image-live.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-ink/40" aria-hidden />

      <div className="container-site flex flex-col items-center text-center text-white">
        <Reveal>
          <Tag tone="light">Writing</Tag>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-[900px] text-display">
            Thinking you can lean on.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-[620px] text-body-xl text-white/80">
            Essays on autonomy, ownership, and the quiet structure under a
            working life.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
