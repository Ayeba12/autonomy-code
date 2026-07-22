import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/content/types";

/**
 * Project detail hero (project-details.md §1a): title block + Year/Timeline/
 * Services meta on the left, Preview button + project thumbnail on the right.
 */
export const ProjectDetailHero = ({ project }: { project: Project }) => {
  const meta: [string, string][] = [
    ["Year:", project.year],
    ["Timeline:", project.timeline],
    ["Services:", project.services.join(", ")],
  ];

  return (
    <section className="bg-paper pt-40 pb-16 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
      <div className="container-site grid grid-cols-2 items-end gap-x-10 gap-y-12 max-lg:grid-cols-1">
        <Reveal>
          <Tag>Our Portfolio</Tag>
          <h1 className="mt-6 text-display">{project.name}</h1>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
            {meta.map(([label, value]) => (
              <div key={label} className="flex items-baseline gap-2">
                <dt className="text-body-l text-smoke">{label}</dt>
                <dd className="text-body-l text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <div className="flex flex-col items-end gap-6 max-lg:items-start">
          <Reveal delay={0.1} y={0}>
            <Button
              href="https://webflow.com/templates/designers/codexzel"
              variant="dark"
              external
            >
              Preview
            </Button>
          </Reveal>
          <Reveal delay={0.15} className="w-full">
            <div className="overflow-hidden rounded-card">
              <Image
                src={project.thumbnail.src}
                alt={project.thumbnail.alt}
                width={project.thumbnail.width ?? 1320}
                height={project.thumbnail.height ?? 741}
                sizes="(max-width: 1023px) 100vw, 50vw"
                preload
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
