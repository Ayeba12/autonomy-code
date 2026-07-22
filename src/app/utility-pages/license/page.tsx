import type { Metadata } from "next";
import Image from "next/image";
import { type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { UtilityHero, UtilitySection } from "@/components/utility/UtilityHero";

export const metadata: Metadata = {
  title: "License",
  description:
    "All graphical assets in this template are licensed for personal and commercial use.",
};

const LicenseLink = ({ href, children }: { href: string; children: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-ink underline decoration-brand underline-offset-4 transition-colors duration-300 hover:text-brand"
  >
    {children}
  </a>
);

interface LicenseWidget {
  title: string;
  body: ReactNode;
  footer: ReactNode;
  image: { src: string; alt: string };
  /** Image on the right instead of the left (card 2). */
  flip?: boolean;
}

const widgets: LicenseWidget[] = [
  {
    title: "Font License",
    body: (
      <>
        All fonts in this template are sourced from Google Fonts and are free
        for personal and commercial use. The primary fonts used are{" "}
        <LicenseLink href="https://fonts.google.com/specimen/Stack+Sans+Headline">
          Stack Sans Headline
        </LicenseLink>{" "}
        and{" "}
        <LicenseLink href="https://fonts.google.com/specimen/Inter">
          Inter
        </LicenseLink>
      </>
    ),
    footer: (
      <>
        Check out the license on{" "}
        <LicenseLink href="https://fonts.google.com/knowledge/glossary/licensing">
          Google Fonts.
        </LicenseLink>
      </>
    ),
    image: { src: "/images/license-image.svg", alt: "" },
  },
  {
    title: "Image & Video",
    body: (
      <>
        All visuals and imagery in this template are sourced from{" "}
        <LicenseLink href="https://www.freepik.com/">Freepik</LicenseLink>.
        These assets are free to use for personal and commercial projects under{" "}
        <LicenseLink href="https://www.freepik.com/">
          Freepik&rsquo;s
        </LicenseLink>{" "}
        standard license.
      </>
    ),
    footer: (
      <>
        Check out the license on{" "}
        <LicenseLink href="https://www.freepik.com/license">
          Freepik.
        </LicenseLink>
      </>
    ),
    image: { src: "/images/license-widget.svg", alt: "" },
    flip: true,
  },
  {
    title: "Icon License",
    body: (
      <>
        All icons in this template are sourced from Phosphor Icons and are free
        with proper attribution.
      </>
    ),
    footer: (
      <>
        Check out the license on{" "}
        <LicenseLink href="https://phosphoricons.com/">
          Phosphor Icons
        </LicenseLink>
      </>
    ),
    image: { src: "/images/license-widget-1.webp", alt: "" },
  },
];

const LicenseCard = ({ widget }: { widget: LicenseWidget }) => (
  <Reveal>
    <article className="grid grid-cols-2 items-stretch overflow-hidden rounded-card bg-white max-md:grid-cols-1">
      <div
        className={`relative min-h-[320px] bg-paper-2 max-md:order-first ${
          widget.flip ? "md:order-last" : ""
        }`}
      >
        <Image
          src={widget.image.src}
          alt={widget.image.alt}
          width={628}
          height={586}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 p-12 max-lg:p-8 max-md:p-6">
        <svg
          className="size-10 text-brand"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z" />
        </svg>
        <h2 className="text-h2">{widget.title}</h2>
        <p className="text-h6 text-smoke">{widget.body}</p>
        <p className="mt-auto border-t border-line pt-6 text-body-l text-smoke">
          {widget.footer}
        </p>
      </div>
    </article>
  </Reveal>
);

/** /utility-pages/license — three alternating license widget cards. */
const LicensePage = () => (
  <>
    <Navbar tone="dark" />
    <main>
      <UtilitySection>
        <UtilityHero
          tag="License"
          title="Asset License"
          subline="All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below."
        />
        <div className="flex flex-col gap-8">
          {widgets.map((widget) => (
            <LicenseCard key={widget.title} widget={widget} />
          ))}
        </div>
      </UtilitySection>
      <CtaSection />
    </main>
  </>
);

export default LicensePage;
