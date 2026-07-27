import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "light" | "dark" | "brand" | "outline-dark" | "outline-light";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  /** Show the template arrow icon after the label. */
  arrow?: boolean;
  /** Optional avatar image on the left (navbar "Book A Intro"). */
  avatarSrc?: string;
  className?: string;
  external?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  light: "bg-white text-ink",
  dark: "bg-coal text-white",
  brand: "bg-brand text-white",
  "outline-dark": "border border-coal text-ink bg-transparent",
  "outline-light": "border border-line text-white bg-transparent",
};

const arrowIcon: Record<ButtonVariant, string> = {
  light: "/images/button-iconm-01.svg",
  dark: "/images/button-icon-white.svg",
  brand: "/images/button-icon-white.svg",
  "outline-dark": "/images/button-iconm-01.svg",
  "outline-light": "/images/button-icon-white.svg",
};

/**
 * Template pill button: dual-layer rolling label on hover and a
 * 44px → 16px radius morph (design.md §6).
 */
export const Button = ({
  children,
  href,
  variant = "light",
  arrow = true,
  avatarSrc,
  className = "",
  external = false,
}: ButtonProps) => {
  const inner = (
    <span className="flex items-center gap-2">
      {avatarSrc && (
        <Image
          src={avatarSrc}
          alt=""
          width={28}
          height={28}
          className="size-7 rounded-full object-cover"
        />
      )}
      <span>{children}</span>
      {arrow && (
        <Image src={arrowIcon[variant]} alt="" width={16} height={16} className="size-4" />
      )}
    </span>
  );

  const classes = `group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-pill px-5 py-3 text-body-m font-medium whitespace-nowrap transition-all duration-350 hover:rounded-2xl ${variantClasses[variant]} ${className}`;

  const rolling = (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-350 ease-out group-hover:-translate-y-full">
        {inner}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 block translate-y-full transition-transform duration-350 ease-out group-hover:translate-y-0"
      >
        {inner}
      </span>
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {rolling}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {rolling}
    </Link>
  );
};
