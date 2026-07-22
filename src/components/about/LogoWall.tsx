"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

const logoSrc: Record<number, string> = {
  3: "/images/logo-3.svg",
  5: "/images/logo-5.svg",
  6: "/images/logo-6.svg",
  7: "/images/logo-7.svg",
};

/** Track contents per card, top→bottom (about spec §6). */
const tracks: number[][] = [
  [5, 3, 3],
  [3, 5, 3],
  [7, 5, 3],
  [5, 3, 3],
  [3, 5, 3],
  [5, 3, 3],
  [6, 3, 3],
  [3, 3, 3],
];

const LogoItem = ({ id }: { id: number }) => (
  <span className="flex h-10 shrink-0 items-center justify-center">
    <Image src={logoSrc[id]} alt="" width={120} height={28} className="h-7 w-auto" />
  </span>
);

/** Vertical logo marquee inside a masked card (translateY loop). */
const LogoTrack = ({ ids, duration }: { ids: number[]; duration: number }) => {
  const reduced = useReducedMotion();

  if (reduced) return <LogoItem id={ids[0]} />;

  return (
    <div className="h-10 overflow-hidden">
      <motion.div
        className="flex flex-col"
        animate={{ y: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {ids.map((id, i) => (
          <LogoItem key={i} id={id} />
        ))}
        {ids.map((id, i) => (
          <span key={`dup-${i}`} aria-hidden>
            <LogoItem id={id} />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/**
 * "Infamous client wall" (about spec §6): 8 light cards, each masking a
 * vertical logo marquee. Marquees freeze under prefers-reduced-motion.
 */
export const LogoWall = () => (
  <section className="section-pad bg-white">
    <div className="container-site">
      <Reveal>
        <Tag>Infamous client wall</Tag>
      </Reveal>
      <div className="mt-10 grid grid-cols-4 gap-2 max-md:grid-cols-2">
        {tracks.map((ids, i) => (
          <Reveal key={i} delay={(i % 4) * 0.08}>
            <div className="flex items-center justify-center rounded-2xl bg-paper px-4 py-8">
              <LogoTrack ids={ids} duration={6 + (i % 4) * 1.5} />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
