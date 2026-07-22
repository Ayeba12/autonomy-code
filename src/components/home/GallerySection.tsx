import Image from "next/image";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Tag } from "@/components/ui/Tag";

const galleryImages = [
  { src: "/images/looping-image4.webp", alt: "Gallery Showcase Image" },
  { src: "/images/looping-image2.webp", alt: "Gallery showcase Image" },
  { src: "/images/looping-image3.webp", alt: "" },
  { src: "/images/looping-image1.webp", alt: "" },
];

/** "Who we are" intro + full-bleed looping image gallery (home §4). */
export const GallerySection = () => (
  <section className="bg-white pt-32 max-lg:pt-20 max-md:pt-14">
    <div className="container-site">
      <Reveal className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
        <div>
          <Tag>Who we are</Tag>
          <h2 className="mt-6 max-w-[900px] text-h2">
            We build search-first digital systems to help category{" "}
            <span className="text-mute">leaders lead their industries.</span>
          </h2>
        </div>
        <ArrowLink href="/about" className="shrink-0 uppercase">
          About the Studio
        </ArrowLink>
      </Reveal>
    </div>
    <div className="mt-16 max-md:mt-10">
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
    </div>
  </section>
);
