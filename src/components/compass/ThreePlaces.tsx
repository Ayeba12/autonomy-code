import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import type { ImageRef } from "@/content/types";
import { Eyebrow } from "./CompassCta";

const places: { title: string; body: string; image: ImageRef; position?: string }[] = [
  {
    title: "Borrowed Identity",
    body: "You built your practice around a structure that works but doesn't fully belong to you. The framework may be competent. The language may be polished. The positioning may even be profitable. But it still feels rented. Your private wisdom is stronger than your public clarity. You are performing the role, but not fully inhabiting it.",
    image: {
      src: "/images/pillars/pillar-identity.webp",
      alt: "Graphite sketch of a woman standing barefoot on her own square of ground, drawn in gold, borrowed coats left on a rack behind her",
    },
  },
  {
    title: "Scattered Ownership",
    body: "Your knowledge, offers, ideas, obligations, and possibilities are spread across too many places with no clear centre holding them together. You are capable, but under-leveraged. You do a lot, but it does not compound. You know what you want, but you keep returning to second-guessing instead of choice.",
    image: {
      src: "/images/compass/compass-scattered.webp",
      alt: "Graphite sketch of a woman holding cords arriving from many directions, one cord in gold",
    },
  },
  {
    title: "Unsupported Execution",
    body: "You keep trying to execute plans that weren't built from your actual life, capacity, patterns, or constraints. So the plan works in theory, but not in your hands. When energy is high, you move. When capacity drops, everything stalls. You are not undisciplined. You are trying to sustain a life that doesn't fit inside a structure never designed around how you actually operate.",
    image: {
      src: "/images/method/method-captivity.webp",
      alt: "Graphite drawing of a capable woman working at a tidy desk, a faint birdcage drawn around it with its door ajar, the desk lamp in gold",
    },
  },
];

/** Sticky offsets so the cards settle one over the other as you scroll. */
const stickyTop = ["lg:top-28", "lg:top-34", "lg:top-40"];

/**
 * The three places it goes (copy v3 §3, verbatim words): three wide
 * cards that stack as you scroll on desktop, each with its drawing.
 */
export const ThreePlaces = () => (
  <section className="py-28 max-lg:py-20 max-md:py-14">
    <div className="container-site">
      <Reveal className="mx-auto max-w-[820px] text-center">
        <Eyebrow>Three places</Eyebrow>
        <h2 className="mt-4 text-h3">
          The briefing will help you see three places your life stopped being
          fully yours.
        </h2>
      </Reveal>
      <div className="mx-auto mt-14 flex max-w-[1100px] flex-col gap-8 max-md:mt-8 max-md:gap-5">
        {places.map((place, i) => (
          <article
            key={place.title}
            className={`grid grid-cols-[0.9fr_1fr] overflow-hidden rounded-card-lg bg-white shadow-[0_-12px_40px_-24px_rgba(0,0,0,0.18)] lg:sticky ${stickyTop[i]} max-lg:grid-cols-1 max-md:rounded-card`}
          >
            <Image
              src={place.image.src}
              alt={place.image.alt}
              width={1000}
              height={1250}
              sizes="(max-width: 1023px) 100vw, 45vw"
              className={`h-full max-h-[420px] w-full object-cover ${place.position ?? ""} max-lg:aspect-[3/2] max-lg:max-h-none`}
            />
            <div className="flex flex-col justify-center p-12 max-lg:p-8 max-md:p-6">
              <span className="font-heading text-h3 text-brand max-md:text-h4">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-h4">{place.title}</h3>
              <p className="mt-5 text-body-l text-slate">{place.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
