import Link from "next/link";
import { type ReactNode } from "react";

interface DiagonalLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

/** Diagonal arrow that lifts up and to the right on hover. */
export const DiagonalArrow = ({ className = "" }: { className?: string }) => (
  <svg
    className={`size-4 shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${className}`}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
  </svg>
);

/**
 * Inline text link with the diagonal arrow (used for outbound-feeling
 * moves: into a service page, off to Speaking, and so on).
 */
export const DiagonalLink = ({
  children,
  href,
  className = "",
}: DiagonalLinkProps) => (
  <Link
    href={href}
    className={`group inline-flex items-center gap-2 border-b border-dashed border-brand pb-1 text-body-l font-medium transition-colors duration-300 hover:border-solid hover:text-brand ${className}`}
  >
    <span>{children}</span>
    <DiagonalArrow />
  </Link>
);
