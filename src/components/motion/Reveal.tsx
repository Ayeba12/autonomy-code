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
  /**
   * Viewport fraction that must be visible before animating. Keep the
   * 0.2 default for normal blocks; pass "some" for very tall content
   * (a full article body), where 20% can never fit on screen and the
   * reveal would otherwise never fire, leaving the block invisible.
   */
  amount?: number | "some" | "all";
}

/** Blur-up scroll reveal matching the template's IX2 pattern. */
export const Reveal = ({
  children,
  delay = 0,
  y = 50,
  className,
  once = true,
  amount = 0.2,
}: RevealProps) => {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};
