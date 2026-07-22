"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import type { Testimonial } from "@/content/types";

const CARD_WIDTH = 442;
const CARD_GAP = 24;

/** Dark testimonial slider with peeking side cards (home §10). */
export const TestimonialSlider = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const clamp = (i: number) => (i + testimonials.length) % testimonials.length;

  return (
    <section className="section-gap mx-4 overflow-hidden rounded-card bg-ink py-20 text-white max-md:mx-2 max-md:py-12">
      <div className="container-site">
        <div className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
          <Reveal>
            <Tag tone="light">Collaborations</Tag>
            <h2 className="mt-6 text-h2">Why they love working with us</h2>
          </Reveal>
          <Reveal delay={0.15} className="max-w-sm">
            <p className="text-body-l text-mute">
              We don&rsquo;t just finish projects; we build success together. Here is what
              they think of us
            </p>
          </Reveal>
        </div>

        <div className="mt-14 max-md:mt-8">
          <motion.div
            className="flex gap-6"
            animate={{ x: -(index * (CARD_WIDTH + CARD_GAP)) }}
            transition={
              reduced ? { duration: 0 } : { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
            }
          >
            {testimonials.map((testimonial, i) => (
              <article
                key={i}
                className="flex h-[490px] w-[442px] shrink-0 flex-col justify-between rounded-2xl bg-coal p-5 max-md:h-[420px] max-md:w-[85vw]"
              >
                <div className="flex items-start justify-between">
                  <Image
                    src={testimonial.avatar.src}
                    alt={testimonial.avatar.alt}
                    width={56}
                    height={56}
                    className="size-14 rounded-full object-cover"
                  />
                  <Image
                    src={testimonial.logo.src}
                    alt={testimonial.logo.alt}
                    width={100}
                    height={32}
                    className="h-7 w-auto opacity-80 invert"
                  />
                </div>
                <div>
                  <Image
                    src="/images/testimonial-icon.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="size-7"
                  />
                  <p className="mt-5 text-h6">{testimonial.quote}</p>
                  <p className="mt-8 text-h5">{testimonial.author}</p>
                  <p className="mt-1 text-body-m text-mute">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </motion.div>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={index === i}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`size-2.5 rounded-full transition-colors duration-300 ${
                    index === i ? "bg-white" : "bg-coal hover:bg-smoke"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => setIndex((i) => clamp(i - 1))}
                className="flex size-12 items-center justify-center rounded-full bg-coal transition-colors duration-300 hover:bg-brand"
              >
                <svg className="size-5 rotate-180" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path d="M3 10h13M11 4.5 16.5 10 11 15.5" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => setIndex((i) => clamp(i + 1))}
                className="flex size-12 items-center justify-center rounded-full bg-coal transition-colors duration-300 hover:bg-brand"
              >
                <svg className="size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path d="M3 10h13M11 4.5 16.5 10 11 15.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
