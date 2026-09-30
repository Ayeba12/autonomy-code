import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import type { ImageRef } from "@/content/types";

const pressures: { title: string; body: string; image: ImageRef }[] = [
  {
    title: "Borrowed Identity",
    body: "You built your practice around a structure that works, but does not fully belong to you. The framework may be competent. The language may be polished. The positioning may even be profitable. But it still feels rented. Your private wisdom is stronger than your public clarity. You are performing the role, but not fully inhabiting it.",
    image: {
      src: "/images/pillars/pillar-identity.webp",
      alt: "Graphite sketch of a woman standing barefoot on her own square of ground, drawn in gold, borrowed coats left on a rack behind her",
    },
  },
  {
    title: "Scattered Ownership",
    body: "Your knowledge, offers, ideas, obligations, and possibilities are spread across too many places with no clear centre holding them together. You are capable, but under-leveraged. You do a lot, but it does not compound. You know what you want, but you keep returning to second-guessing instead of choice.",
    image: {
      src: "/images/reset/reset-sources.webp",
      alt: "Graphite sketch of a woman holding three cords arriving from three directions, one cord in gold",
    },
  },
  {
    title: "Unsupported Execution",
    body: "You keep trying to execute through plans that were not built from your actual life, capacity, patterns, or constraints. So the plan works in theory, but not in your hands. When energy is high, you move. When capacity drops, everything stalls. You are not undisciplined. You are trying to sustain a life that does not fit inside a structure that was never designed around how you actually operate.",
    image: {
      src: "/images/method/method-captivity.webp",
      alt: "Graphite drawing of a capable woman working at a tidy desk, a faint birdcage drawn around it with its door ajar, the desk lamp in gold",
    },
  },
];

/** The three places it goes — white cards, each with its drawing (copy v3 §3). */
export const PressureCards = () => (
  <section className="py-28 max-lg:py-20 max-md:py-14">
    <div className="container-site">
      <Reveal className="mx-auto max-w-[780px] text-center">
        <h2 className="text-h4">
          The briefing will help you see three places your life stopped being
          fully yours.
        </h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-3 gap-6 max-lg:grid-cols-1 max-md:mt-8">
        {pressures.map((pressure, i) => (
          <Reveal key={pressure.title} delay={i * 0.12} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-card bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5">
              <Image
                src={pressure.image.src}
                alt={pressure.image.alt}
                width={1000}
                height={1250}
                sizes="(max-width: 1023px) 100vw, 33vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-8 max-md:p-6">
                <span className="font-heading text-body-s tracking-[0.2em] text-brand-hot uppercase">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-h5">{pressure.title}</h3>
                <p className="mt-4 text-body-m text-smoke">{pressure.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
