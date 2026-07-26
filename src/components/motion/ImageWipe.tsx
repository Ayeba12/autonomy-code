"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

interface ImageWipeProps {
  src: string;
  alt: string;
  /** "load" wipes on mount (heroes); "view" wipes on scroll into view. */
  trigger?: "load" | "view";
  /** Animation delay in seconds. */
  delay?: number;
  /** Preload the image (hero/LCP only). */
  preload?: boolean;
  className?: string;
}

/**
 * Inline headline image that wipes open (width 0 → auto), ported from the
 * template's hero / experience-highlight pattern. Drop inside an h1/h2.
 */
export const ImageWipe = ({
  src,
  alt,
  trigger = "view",
  delay = 0.3,
  preload = false,
  className = "",
}: ImageWipeProps) => {
  const reduced = useReducedMotion();

  const image = (
    <Image
      src={src}
      alt={alt}
      width={240}
      height={96}
      preload={preload}
      className={`h-[0.72em] w-auto max-w-none rounded-full object-cover ${className}`}
    />
  );

  if (reduced) {
    return <span className="inline-flex align-middle">{image}</span>;
  }

  if (trigger === "load") {
    return (
      <motion.span
        className="inline-flex overflow-hidden align-middle"
        initial={{ width: 0 }}
        animate={{ width: "auto" }}
        transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {image}
      </motion.span>
    );
  }

  return (
    <motion.span
      className="inline-flex overflow-hidden align-middle"
      initial={{ width: 0 }}
      whileInView={{ width: "auto" }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {image}
    </motion.span>
  );
};
