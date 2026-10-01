import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { RESET_CTA_HREF, RESET_CTA_LABEL } from "@/components/site/ResetCta";
import { Button } from "@/components/ui/Button";
import { DiagonalArrow } from "@/components/ui/DiagonalLink";
import { Tag } from "@/components/ui/Tag";
import type { ImageRef } from "@/content/types";

export const metadata: Metadata = {
  title: "Not Found",
  description: "This page is not on the map.",
};

interface Path {
  label: string;
  line: string;
  href: string;
  image: ImageRef;
}

/** Three marked paths back onto the site, each with its drawing. */
const paths: Path[] = [
  {
    label: "Home",
    line: "Autonomy is peace, given structure.",
    href: "/",
    image: {
      src: "/images/home/hero-peace-given-structure.webp",
      alt: "",
    },
  },
  {
    label: RESET_CTA_LABEL,
    line: "Three sessions. One seat.",
    href: RESET_CTA_HREF,
    image: {
      src: "/images/reset/reset-move-anchor.webp",
      alt: "",
    },
  },
  {
    label: "The Autonomy Compass",
    line: "The door. Every engagement begins here.",
    href: "/autonomy-compass",
    image: {
      src: "/images/home/tier-scan.webp",
      alt: "",
    },
  },
];

/**
 * Root 404 (content.md §6): light ivory, the headline beside the drawing
 * of a woman tracing one gold route across a map, then three marked paths
 * back. Thumbnails are decorative; each path's label carries the link.
 */
const NotFound = () => (
  <>
    <Navbar tone="dark" />
    <main className="bg-paper">
      <section className="flex min-h-svh flex-col justify-center pt-40 pb-20 max-lg:pt-32 max-md:pt-28 max-md:pb-14">
        <div className="container-site">
          {/* The headline beside the map */}
          <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
            <div className="flex flex-col items-start gap-6">
              <Reveal>
                <Tag>404</Tag>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="max-w-[560px] text-display text-ink">
                  This page is not on the map.
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="max-w-[460px] text-body-xl text-slate">
                  Even a clear structure has an edge or two. Let us walk back.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <Button href="/" variant="brand" className="mt-2">
                  Back to owned ground
                </Button>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-card">
                <Image
                  src="/images/scan/scan-map.webp"
                  alt="Graphite sketch of a woman leaning over an unrolled map, one finger on the route she has chosen, drawn in gold"
                  width={1800}
                  height={1012}
                  preload
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </div>
            </Reveal>
          </div>

          {/* Three marked paths back */}
          <div className="mt-16 max-md:mt-12">
            <Reveal>
              <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">
                Or take a marked path
              </p>
            </Reveal>
            <div className="mt-6 grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-lg:gap-3">
              {paths.map((path, i) => (
                <Reveal key={path.href} delay={i * 0.08} className="h-full">
                  <Link
                    href={path.href}
                    className="group flex h-full items-center gap-5 rounded-card bg-white p-3 pr-6 transition-colors duration-300 hover:bg-paper-2"
                  >
                    <div className="size-24 shrink-0 overflow-hidden rounded-[14px] bg-paper max-md:size-20">
                      <Image
                        src={path.image.src}
                        alt={path.image.alt}
                        width={240}
                        height={240}
                        sizes="96px"
                        className="size-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-heading text-h6 text-ink transition-colors duration-300 group-hover:text-brand">
                        {path.label}
                      </p>
                      <p className="mt-1 text-body-s text-slate">{path.line}</p>
                    </div>
                    <DiagonalArrow className="text-ink transition-colors duration-300 group-hover:text-brand" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default NotFound;
