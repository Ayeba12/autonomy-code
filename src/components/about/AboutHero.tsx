"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

/**
 * About hero: light paper band, centered title with an inline image that
 * wipes open (width 0 → auto) on load (about spec §1).
 */
export const AboutHero = () => {
  const reduced = useReducedMotion();

  const titleImage = (
    <Image
      src="/images/hero-yext-image.webp"
      alt="Hero title Image "
      width={240}
      height={96}
      preload
      className="h-[0.72em] w-auto max-w-none rounded-full object-cover"
    />
  );

  return (
    <section className="m-2 rounded-card bg-paper pt-44 pb-10 max-lg:pt-36 max-md:pt-28 max-md:pb-6">
      <div className="container-site">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Tag>Who we are</Tag>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 text-display">
              We Exist to Build Lasting
              <br />
              Digital{" "}
              {reduced ? (
                <span className="inline-flex align-middle">{titleImage}</span>
              ) : (
                <motion.span
                  className="inline-flex overflow-hidden align-middle"
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {titleImage}
                </motion.span>
              )}{" "}
              Legacies.
            </h1>
          </Reveal>
          <Reveal delay={0.2} className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/projects" variant="dark">
              View Projects
            </Button>
            <Button href="/contact" variant="light">
              Reach out
            </Button>
          </Reveal>
        </div>

        <Reveal
          delay={0.3}
          className="mt-24 flex items-end justify-between gap-6 text-body-m text-smoke max-lg:mt-16 max-md:mt-10"
        >
          <p>Creative Design Agency</p>
          <p>Since 2019</p>
        </Reveal>
      </div>
    </section>
  );
};
