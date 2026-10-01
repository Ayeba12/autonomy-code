"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef } from "react";

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

/**
 * Blur-up reveal matching the template's IX2 pattern, driven by CSS (see
 * `.reveal` in globals.css) so nothing waits on JavaScript to be seen.
 *
 * The server sends the block visible, with a CSS entrance that plays on
 * first paint. Once the page hydrates, blocks still below the fold are
 * held back and play the same entrance as they scroll into view. If the
 * scripts are slow or never arrive, every block is simply visible.
 */
export const Reveal = ({
  children,
  delay = 0,
  y = 50,
  className,
  once = true,
  amount = 0.2,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Already on screen (or above it): the CSS entrance has it covered.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add("reveal-wait");
    const threshold = amount === "some" ? 0 : amount === "all" ? 1 : amount;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("reveal-wait");
          if (once) observer.disconnect();
        } else if (!once) {
          el.classList.add("reveal-wait");
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [amount, once]);

  return (
    <div
      ref={ref}
      className={className ? `reveal ${className}` : "reveal"}
      style={{ "--reveal-delay": `${delay}s`, "--reveal-y": `${y}px` } as CSSProperties}
    >
      {children}
    </div>
  );
};
