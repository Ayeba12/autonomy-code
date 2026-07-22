import { type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop. */
  duration?: number;
  className?: string;
  /** Gap between the duplicated tracks, must match the inner gap. */
  gapClassName?: string;
  ariaLabel?: string;
}

/**
 * Infinite horizontal ticker: renders children twice inside a
 * `marquee-track` (see globals.css). Duplicate is aria-hidden.
 */
export const Marquee = ({
  children,
  duration = 30,
  className = "",
  gapClassName = "gap-12",
  ariaLabel,
}: MarqueeProps) => (
  <div className={`overflow-hidden ${className}`} aria-label={ariaLabel}>
    <div
      className={`marquee-track ${gapClassName}`}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      <div className={`flex shrink-0 items-center ${gapClassName}`}>{children}</div>
      <div className={`flex shrink-0 items-center ${gapClassName}`} aria-hidden>
        {children}
      </div>
    </div>
  </div>
);
