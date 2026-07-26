interface LogoProps {
  /** "light" = white wordmark (dark grounds); "dark" = ink wordmark. */
  tone?: "light" | "dark";
  className?: string;
}

/**
 * The Autonomy Code mark: gold bar + wordmark.
 * Placeholder recreation of the brand logo (source: Autonomy-code.ai) —
 * swap for exported SVG/PNG assets in /public/images when provided.
 */
export const Logo = ({ tone = "dark", className = "" }: LogoProps) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <span aria-hidden className="h-6 w-1.5 bg-brand" />
    <span
      className={`font-heading text-xl leading-none font-medium tracking-tight ${
        tone === "light" ? "text-white" : "text-ink"
      }`}
    >
      The Autonomy Code
    </span>
  </span>
);
