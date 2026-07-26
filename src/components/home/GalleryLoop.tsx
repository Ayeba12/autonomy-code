import Image from "next/image";
import { Marquee } from "@/components/motion/Marquee";

const galleryImages = [
  { src: "/images/looping-image4.webp", alt: "" },
  { src: "/images/looping-image2.webp", alt: "" },
  { src: "/images/looping-image3.webp", alt: "" },
  { src: "/images/looping-image1.webp", alt: "" },
];

/** Full-bleed looping image marquee (Stodio gallery pattern). */
export const GalleryLoop = () => (
  <section className="bg-white pt-16 max-md:pt-10">
    <Marquee duration={40} gapClassName="gap-5">
      {galleryImages.map((image, i) => (
        <div
          key={i}
          className="h-[576px] w-[30vw] shrink-0 overflow-hidden rounded-card max-lg:h-[350px] max-lg:w-[250px] max-md:h-[220px] max-md:w-[180px]"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={640}
            height={576}
            className="size-full object-cover"
          />
        </div>
      ))}
    </Marquee>
  </section>
);
