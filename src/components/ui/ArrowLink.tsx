import Link from "next/link";
import { type ReactNode } from "react";

interface ArrowLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

/**
 * "View all" style link: arrow + label over a dashed brand underline
 * that turns solid on hover (template `.view-all-blogs`).
 */
export const ArrowLink = ({ children, href, className = "" }: ArrowLinkProps) => (
  <Link
    href={href}
    className={`group inline-flex items-center gap-2 border-b border-dashed border-brand pb-1 text-body-l font-medium transition-colors duration-300 hover:border-solid hover:text-brand ${className}`}
  >
    <svg
      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
    <span>{children}</span>
  </Link>
);
