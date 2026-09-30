import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import type { ImageRef } from "@/content/types";

/** The four rooms of SABI OS (content.md §4.5, verbatim lines), each with a drawing. */
const rooms: { name: string; line: string; image: ImageRef }[] = [
  {
    name: "WAIT",
    line: "Locate yourself before building. The Waiting Room is not a delay, it is protection.",
    image: {
      src: "/images/about/about-window.webp",
      alt: "Graphite sketch of a woman seated by a tall window, looking out over a misty lake, the dawn line drawn in gold",
    },
  },
  {
    name: "SABI",
    line: "See, sort, and value what you know.",
    image: {
      src: "/images/pillars/pillar-resources.webp",
      alt: "Graphite sketch of a woman at an open cabinet of well-ordered tools and ledgers, lifting out one key drawn in gold",
    },
  },
  {
    name: "KÓKÓ",
    line: "Turn wisdom into a defensible message.",
    image: {
      src: "/images/pillars/pillar-message.webp",
      alt: "Graphite sketch of a woman writing one clear line in gold across a large sheet, crumpled drafts pushed aside",
    },
  },
  {
    name: "RÒN",
    line: "Turn message into practice, offer, rhythm, and proof.",
    image: {
      src: "/images/reset/reset-move-anchor.webp",
      alt: "Graphite sketch of a woman driving a stake into the ground to hold a tent in the wind, the stake and rope in gold",
    },
  },
];

/**
 * SABI OS band on the SABI CORE page: the operating system inside the
 * year. Four room cards, each with its drawing, and the operating flow
 * as the hand-drawn diagram. This band carries the page's single
 * breath-blue accent (content.md §2).
 */
export const SabiOsSection = () => (
  <section className="bg-breath-tint py-24 max-lg:py-16 max-md:py-12">
    <div className="container-site">
      <Reveal>
        <Tag>SABI OS</Tag>
        <h2 className="mt-4 max-w-[720px] text-h3">The operating system inside</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-[720px] text-body-xl text-slate">
          SABI is knowing. The wisdom, pattern, instinct, and lived experience
          you already carry. SABI OS is the operating system that helps you
          move from scattered knowing into owned expression. You are not
          starting from nothing. The work is to locate what you carry, sort
          it, name it, and decide what it is here to become.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:mt-10 max-md:grid-cols-1">
        {rooms.map((room, i) => (
          <Reveal key={room.name} delay={i * 0.1} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-card bg-white">
              <Image
                src={room.image.src}
                alt={room.image.alt}
                width={1000}
                height={1250}
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col gap-4 p-7 max-md:p-6">
                <p className="font-heading text-body-s tracking-[0.2em] text-brand-hot uppercase">
                  Room {i + 1}
                </p>
                <h3 className="font-heading text-h5">{room.name}</h3>
                <div className="w-10 border-t border-line" />
                <p className="text-body-m text-slate">{room.line}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* The operating flow, drawn: five stations along one gold line. */}
      <Reveal delay={0.2} className="mt-14 max-md:mt-10">
        <figure>
          <div className="overflow-hidden rounded-card bg-white">
            <Image
              src="/images/method/method-flow.webp"
              alt="Hand-drawn diagram of five small sketches along one gold line: a magnifying glass, sorted piles, reading glasses over a page, a tick in a box, and a house frame being built"
              width={2400}
              height={900}
              sizes="100vw"
              className="aspect-[8/3] w-full object-cover max-md:aspect-[2/1]"
            />
          </div>
          <figcaption className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center font-heading text-h6 text-ink">
            {["Discover", "Sort", "Interpret", "Decide", "Build"].map((step, i) => (
              <span key={step} className="flex items-center gap-x-4">
                <span>{step}</span>
                {i < 4 && (
                  <span aria-hidden className="text-brand">
                    →
                  </span>
                )}
              </span>
            ))}
          </figcaption>
        </figure>
      </Reveal>
    </div>
  </section>
);
