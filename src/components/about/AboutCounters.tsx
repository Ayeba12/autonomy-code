import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import type { ImageRef } from "@/content/types";

interface Counter {
  value: string;
  title: string;
  description: string;
  /** Hidden background image revealed on hover (about spec §3). */
  bg: ImageRef;
}

/** Seed copy from about spec §3 — values/titles verbatim (incl. "8.9"). */
const counters: Counter[] = [
  {
    value: "04",
    title: "Global Offices",
    description:
      "Strategically located to serve industry leaders across four continents.",
    bg: { src: "/images/portrait-of-young-man-3.webp", alt: "Counter BG Image " },
  },
  {
    value: "21",
    title: "Awards Won",
    description:
      "Recognition for pushing the boundaries of search and digital design.",
    bg: { src: "/images/showcase-image-03.webp", alt: "Counter BG Image " },
  },
  {
    value: "8.9",
    title: "NPS score",
    description:
      "A near-perfect NPS score built on radical transparency and results.",
    bg: { src: "/images/showcase-image-02.webp", alt: "Counter BG Image " },
  },
  {
    value: "37+",
    title: "Talented Team Members",
    description:
      "A global collective of experts dedicated to your brand’s organic growth.",
    bg: { src: "/images/young-man-in-white-shirt-1.svg", alt: "Counter BG Image " },
  },
];

/**
 * "NUMBERS" counter grid (about spec §3): big digit, divider, title +
 * description; hovering a card fades in its background image (CSS-only
 * port of the template's IX2 hover interaction).
 */
export const AboutCounters = () => (
  <section className="section-pad bg-white">
    <div className="container-site">
      <Reveal>
        <Tag>NUMBERS</Tag>
      </Reveal>
      <div className="mt-10 grid grid-cols-4 gap-12 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-6">
        {counters.map((counter, i) => (
          <Reveal key={counter.title} delay={i * 0.1} className="h-full">
            <article className="group relative h-full overflow-hidden rounded-2xl p-6">
              <Image
                src={counter.bg.src}
                alt={counter.bg.alt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div
                className="absolute inset-0 bg-black/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div className="relative">
                <h3 className="font-heading text-h2 transition-colors duration-500 group-hover:text-white">
                  {counter.value}
                </h3>
                <hr className="mt-4 border-line transition-colors duration-500 group-hover:border-white/30" />
                <h4 className="mt-4 font-body text-body-xl font-semibold transition-colors duration-500 group-hover:text-white">
                  {counter.title}
                </h4>
                <p className="mt-2 text-body-s text-smoke transition-colors duration-500 group-hover:text-white/80">
                  {counter.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
