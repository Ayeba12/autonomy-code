"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import type { OfficeLocation } from "@/content/types";

interface OfficeLocationsProps {
  locations: OfficeLocation[];
}

/**
 * Office locations (contact.md §2): dark #0a0a0a wrapper inset from the
 * viewport edges, eyebrow tag + rows of city name (left, with an inline
 * image that expands from 0x0 on scroll — template `data-w-id` reveal)
 * and address (right).
 */
export const OfficeLocations = ({ locations }: OfficeLocationsProps) => {
  const reduced = useReducedMotion();

  return (
    <section className="bg-white py-10 max-md:py-6">
      <div className="px-6 max-md:px-3">
        <div className="rounded-card bg-ink py-24 max-lg:py-16 max-md:py-10">
          <div className="container-site">
            <Reveal>
              <Tag tone="light">Our Office Locations</Tag>
            </Reveal>
            <ul className="mt-12 flex flex-col gap-8 max-md:mt-8 max-md:gap-6">
              {locations.map((location, i) => (
                <li key={location.name}>
                  <Reveal delay={i * 0.08}>
                    <div className="flex items-center justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-3">
                      <div className="flex items-center gap-5 max-md:gap-3">
                        <motion.div
                          className="shrink-0 overflow-hidden rounded-2xl"
                          initial={
                            reduced ? { width: 112, height: 76 } : { width: 0, height: 0 }
                          }
                          whileInView={{ width: 112, height: 76 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{
                            duration: 0.6,
                            delay: i * 0.08 + 0.2,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                        >
                          <Image
                            src={location.image.src}
                            alt={location.image.alt}
                            width={224}
                            height={152}
                            className="size-full object-cover"
                          />
                        </motion.div>
                        <h2 className="text-h2 text-white">{location.name}</h2>
                      </div>
                      <p className="text-body-l text-mute max-md:text-left md:max-w-[360px] md:text-right">
                        {location.address.join(", ")}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
