import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/content/types";

/** One tagged row: eyebrow tag left, rich-text paragraphs right. */
const SectionRow = ({ tag, body }: { tag: string; body: string[] }) => (
  <Reveal>
    <div className="grid grid-cols-[280px_1fr] gap-10 max-md:grid-cols-1 max-md:gap-4">
      <Tag className="self-start">{tag}</Tag>
      <div className="flex max-w-[960px] flex-col gap-5">
        {body.map((paragraph, i) => (
          <p key={i} className="text-body-xl text-smoke">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  </Reveal>
);

/**
 * Project detail content (project-details.md §2, items 1–5): full-width main
 * image, then tagged rows — Challenges, Solutions, the detail image pair, and
 * Results (the image pair sits before the final section, as in the template).
 */
export const ProjectDetailBody = ({ project }: { project: Project }) => {
  const leading = project.sections.slice(0, -1);
  const last = project.sections.at(-1);

  return (
    <section className="bg-paper pb-24 max-lg:pb-16 max-md:pb-10">
      <div className="container-site flex flex-col gap-16 max-md:gap-10">
        <div className="overflow-hidden rounded-card">
          <Image
            src={project.mainImage.src}
            alt={project.mainImage.alt}
            width={project.mainImage.width ?? 2816}
            height={project.mainImage.height ?? 1606}
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </div>

        {leading.map((section) => (
          <SectionRow key={section.tag} tag={section.tag} body={section.body} />
        ))}

        {project.detailImages.length > 0 && (
          <Reveal>
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
              {project.detailImages.map((image, i) => (
                <div key={i} className="overflow-hidden rounded-card">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width ?? 660}
                    height={image.height ?? 371}
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {last && <SectionRow tag={last.tag} body={last.body} />}
      </div>
    </section>
  );
};
