import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Shared detail-page testimonial band (project-details.md §3). Template
 * constant on all five projects. The source quote's missing spaces
 * ("thedesign" / "everythinghad") are template typos — fixed here.
 */
export const ProjectTestimonial = () => (
  <section className="bg-paper pb-24 max-lg:pb-16 max-md:pb-10">
    <div className="container-site">
      <Reveal>
        <figure className="mx-auto flex max-w-[960px] flex-col items-center gap-8 text-center max-md:gap-6">
          <blockquote className="font-heading text-h3">
            Working with Stodio felt personal. The process was smooth, the
            design was stunning, and everything had meaning.
          </blockquote>
          <hr className="w-full border-line" />
          <figcaption className="flex items-center gap-4">
            <Image
              src="/images/testimonial-author-image-01.webp"
              alt="Client Image"
              width={204}
              height={164}
              className="size-12 rounded-full object-cover"
            />
            <span className="flex flex-col items-start gap-0.5 text-left">
              <span className="font-heading text-h5">Tom Crose</span>
              <span className="text-body-m text-smoke">CEO, Stodio Agency</span>
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </div>
  </section>
);
