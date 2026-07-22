import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import type { OfficeLocation } from "@/content/types";

/**
 * Office location list (career.md §4): four hairline rows, each with a
 * hover-reveal image that expands next to the office name (hidden on
 * touch/small screens where there is no hover).
 */
export const OfficeLocations = ({ offices }: { offices: OfficeLocation[] }) => (
  <section className="bg-ink pb-24 text-white max-lg:pb-16 max-md:pb-12">
    <div className="container-site">
      <Reveal>
        <Tag tone="light">Our Office Locations</Tag>
      </Reveal>

      <div className="mt-10 border-b border-coal max-md:mt-6">
        {offices.map((office, i) => (
          <Reveal key={office.name} delay={i * 0.08}>
            <div className="group flex items-center justify-between gap-8 border-t border-coal py-9 max-md:flex-col max-md:items-start max-md:gap-3 max-md:py-6">
              <div className="flex min-w-0 items-center">
                <div className="w-0 overflow-hidden opacity-0 transition-[width,opacity] duration-500 ease-out group-hover:w-52 group-hover:opacity-100 max-lg:hidden">
                  <Image
                    src={office.image.src}
                    alt={office.image.alt}
                    width={192}
                    height={128}
                    className="h-32 w-48 max-w-none rounded-2xl object-cover"
                  />
                </div>
                <h2 className="text-h2">{office.name}</h2>
              </div>
              <p className="max-w-[340px] text-right text-body-l text-mute max-md:max-w-none max-md:text-left">
                {office.address.join(", ")}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
