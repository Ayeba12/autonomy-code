"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

/**
 * Blog listing hero: centered tag + H1 over a full-bleed photo that
 * zooms out from scale 1.2 on load (template `.hero-section.blogs`).
 */
export const BlogsHero = () => {
  const reduced = useReducedMotion();

  return (
    <section className="relative m-2 overflow-hidden rounded-card pt-[174px] pb-[190px] max-lg:pt-36 max-lg:pb-24 max-md:pt-28 max-md:pb-20">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={reduced ? false : { scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/images/hero-bg-image-p-1600-2.webp"
          alt="Blogs hero BG"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-ink/20" aria-hidden />

      <div className="container-site flex flex-col items-center text-center text-white">
        <Reveal>
          <Tag tone="light">Blog</Tag>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-[1000px] text-display">
            Latest Insights From Our Projects
          </h1>
        </Reveal>
      </div>
    </section>
  );
};
