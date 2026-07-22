"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealProps {
  children: ReactNode;
  /** Stagger offset in seconds. */
  delay?: number;
  /** Vertical travel in px (template default: 50). */
  y?: number;
  className?: string;
  /** Animate once when 20% enters the viewport (template IX2 behaviour). */
  once?: boolean;
}

/** Blur-up scroll reveal matching the template's IX2 pattern. */
export const Reveal = ({
  children,
  delay = 0,
  y = 50,
  className,
  once = true,
}: RevealProps) => {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};
