"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

/** Dark photographic hero with zoom-out parallax background. */
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
          alt="Hero BG Image"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-ink/20" aria-hidden />

      <div className="container-site text-white">
        <Reveal>
          <Tag tone="light">Next-Gen Design Agency</Tag>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 max-w-[850px] text-display">
            Next-Gen
            <br />
            Design Agency for Growing Brands.
          </h1>
        </Reveal>
        <div className="flex items-end justify-between gap-10 pt-12 max-lg:flex-col max-lg:items-start">
          <Reveal delay={0.2} className="flex gap-6 text-body-l">
            {["Define", "Design", "Development"].map((word) => (
              <span key={word} className="flex items-center gap-1.5">
                <span className="text-brand-hot">+</span> {word}
              </span>
            ))}
          </Reveal>
          <Reveal delay={0.3} className="max-w-[400px]">
            <h2 className="font-body text-h3">
              Branding
              <br />
              Mobile & Web App Design for Startups and Giants
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/projects" variant="brand">
                View Projects
              </Button>
              <Button href="/contact" variant="light">
                Reach Out
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
