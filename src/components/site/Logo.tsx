import Image from "next/image";

interface LogoProps {
  /** "light" = white lockup (dark grounds); "dark" = black lockup. */
  tone?: "light" | "dark";
  className?: string;
}

/** The Autonomy Code brand lockup (bars mark + wordmark, 4x exports). */
export const Logo = ({ tone = "dark", className = "" }: LogoProps) => (
  <Image
    src={tone === "light" ? "/images/logo-light.webp" : "/images/logo-dark.webp"}
    alt="The Autonomy Code"
    width={323}
    height={148}
    preload
    className={`h-16 w-auto max-md:h-12 ${className}`}
  />
);
