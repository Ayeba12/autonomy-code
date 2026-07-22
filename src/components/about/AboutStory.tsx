import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

/**
 * "Our Story" — tag + overlapping author avatars left, large statement +
 * secondary paragraph right (about spec §2). Alt text keeps the source's
 * "Abou Us Author image" typo verbatim.
 */
export const AboutStory = () => (
  <section className="section-pad bg-white">
    <div className="container-site flex justify-between gap-12 max-lg:flex-col">
      <div className="flex shrink-0 flex-col justify-between gap-14">
        <Reveal>
          <Tag>Our Story</Tag>
        </Reveal>
        <Reveal delay={0.1} className="flex items-center gap-3">
          <div className="flex">
            <Image
              src="/images/portrait-of-young-man-2.svg"
              alt="Abou Us Author image"
              width={48}
              height={48}
              className="size-12 rounded-full border-2 border-white object-cover"
            />
            <Image
              src="/images/portrait-of-young-man-1.svg"
              alt="Abou Us Author image"
              width={48}
              height={48}
              className="-ml-4 size-12 rounded-full border-2 border-white object-cover"
            />
          </div>
          <p className="text-body-xl">
            <span className="text-mute">By</span> Lucas &amp; Sophia
          </p>
        </Reveal>
      </div>

      <div className="max-w-[760px]">
        <Reveal>
          <p className="font-heading text-h5">
            Since 2019, we have been a global collective dedicated to one mission:
            turning ambitious ideas into industry-leading brands through the perfect
            blend of strategy and soul.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 text-body-xl text-smoke">
            For over half a decade, we have engineered search-first systems that
            empower category leaders to own their space and stay ahead of the curve
            in an ever-evolving digital landscape.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
