"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";

const showcase = [
  "/images/showcase-inage-01.webp",
  "/images/showcase-image-02.webp",
  "/images/showcase-image-03.webp",
  "/images/showcase-image-04.webp",
];

/**
 * Experience highlight (about spec §4): big statement with an inline
 * portrait that wipes open (width 0 → auto) on scroll into view, above a
 * four-up showcase grid with staggered reveals.
 */
export const ExperienceHighlight = () => {
  const reduced = useReducedMotion();

  const inlineImage = (
    <Image
      src="/images/portrait-of-young-man-1-2.webp"
      alt="Portrait of a young man with medium-length wavy hair against a neutral background."
      width={240}
      height={96}
      className="h-[0.72em] w-auto max-w-none rounded-full object-cover"
    />
  );

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <Reveal className="text-center">
          <h2 className="text-h2">
            07 years of shipping tech
            <br />
            products from{" "}
            {reduced ? (
              <span className="inline-flex align-middle">{inlineImage}</span>
            ) : (
              <motion.span
                className="inline-flex overflow-hidden align-middle"
                initial={{ width: 0 }}
                whileInView={{ width: "auto" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {inlineImage}
              </motion.span>
            )}{" "}
            scratch. Direct
            <br />
            expertise, no fluff.
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-[922px] grid-cols-4 gap-4 max-md:mt-10 max-md:grid-cols-2">
          {showcase.map((src, i) => (
            <Reveal key={src} delay={i * 0.12} y={30 + (i % 2) * 30}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt="Showcase Image"
                  fill
                  sizes="(max-width: 767px) 50vw, 230px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
