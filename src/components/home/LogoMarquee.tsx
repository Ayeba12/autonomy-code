import Image from "next/image";
import { Marquee } from "@/components/motion/Marquee";

const logos = [
  "/images/logo-slack-1.svg",
  "/images/logo-2.svg",
  "/images/logo-3.svg",
  "/images/logo-5.svg",
  "/images/logo-6.svg",
  "/images/logo-7.svg",
];

/** Client-logo ticker with rotating spark intro (home §3). */
export const LogoMarquee = () => (
  <section className="border-y border-dashed border-line bg-white py-6">
    <div className="container-site flex items-center gap-10 max-md:flex-col max-md:items-start max-md:gap-6">
      <div className="flex w-[380px] shrink-0 items-center gap-4 max-md:w-full">
        <svg
          className="size-12 shrink-0 animate-[spin-slow_10s_linear_infinite] text-brand"
          viewBox="0 0 48 48"
          fill="currentColor"
          aria-hidden
        >
          <path d="M24 2l4.3 14.9L43 21.2l-14.7 4.3L24 40.4l-4.3-14.9L5 21.2l14.7-4.3L24 2z" />
        </svg>
        <p className="text-body-m text-smoke">
          We&rsquo;ve done 500+ enterprise and business consulting.
        </p>
      </div>
      <div className="relative min-w-0 flex-1 max-md:w-full">
        <Marquee duration={25} gapClassName="gap-16" ariaLabel="Client logos">
          {logos.map((logo) => (
            <Image
              key={logo}
              src={logo}
              alt=""
              width={120}
              height={40}
              className="h-8 w-auto opacity-70"
            />
          ))}
        </Marquee>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"
        />
      </div>
    </div>
  </section>
);
