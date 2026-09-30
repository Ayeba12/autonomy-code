"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";

interface CountUpProps {
  /** Final number, e.g. 30 for "30+". */
  value: number;
  /** Rendered after the number ("+", "%"). */
  suffix?: string;
  className?: string;
}

/**
 * Odometer-style count-up triggered when scrolled into view. The real
 * figure is in the markup from the start, so a page read without the
 * animation (no JavaScript, a crawler, a screenshot) shows the true
 * number rather than 0; the count runs up to it once in view.
 */
export const CountUp = ({ value, suffix = "", className }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const raw = useMotionValue(value);
  const rounded = useTransform(raw, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView || reduced) return;
    raw.set(0);
    const controls = animate(raw, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, reduced, raw, value]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    return rounded.on("change", (v) => {
      node.textContent = v;
    });
  }, [rounded]);

  return (
    <span className={className}>
      <span ref={ref}>{value}</span>
      {suffix}
    </span>
  );
};
