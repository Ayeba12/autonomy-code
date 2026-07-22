interface TagProps {
  children: string;
  /** "light" = white text (dark sections); "dark" = ink text (light sections). */
  tone?: "light" | "dark";
  className?: string;
}

/** Section eyebrow: red spark icon + Stack Sans label (design.md §6). */
export const Tag = ({ children, tone = "dark", className = "" }: TagProps) => (
  <div
    className={`flex items-center gap-1 font-heading text-body-l ${
      tone === "light" ? "text-white" : "text-ink"
    } ${className}`}
  >
    <svg
      className="size-5 text-brand"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z" />
    </svg>
    <span>{children}</span>
  </div>
);
