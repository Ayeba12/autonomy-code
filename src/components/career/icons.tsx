interface IconProps {
  className?: string;
}

/** Four-point spark (template plus-square marquee/tag icon family). */
export const SparkIcon = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z" />
  </svg>
);

/** Location pin (career tabs + job-detail meta row). */
export const PinIcon = ({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden
  >
    <path d="M8 14.5S3.5 10.4 3.5 7.2a4.5 4.5 0 0 1 9 0c0 3.2-4.5 7.3-4.5 7.3Z" />
    <circle cx="8" cy="7.2" r="1.6" />
  </svg>
);

/** Clock (job-detail employment-type meta). */
export const ClockIcon = ({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden
  >
    <circle cx="8" cy="8" r="6" />
    <path d="M8 4.8V8l2.2 1.6" />
  </svg>
);
