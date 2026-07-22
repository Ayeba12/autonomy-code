import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";

interface ProjectCardProps {
  project: Project;
  sizes?: string;
  preload?: boolean;
}

/** Portfolio card: image with hover zoom + name / service row. */
export const ProjectCard = ({
  project,
  sizes = "(max-width: 767px) 100vw, 50vw",
  preload = false,
}: ProjectCardProps) => (
  <Link
    href={`/projects/${project.slug}`}
    className="group block overflow-hidden rounded-card"
  >
    <div className="overflow-hidden rounded-card">
      <Image
        src={project.thumbnail.src}
        alt={project.thumbnail.alt}
        width={project.thumbnail.width ?? 1200}
        height={project.thumbnail.height ?? 900}
        sizes={sizes}
        preload={preload}
        className="h-auto w-full scale-100 object-cover transition-transform duration-600 ease-out group-hover:scale-105"
      />
    </div>
    <div className="flex items-center justify-between gap-4 pt-4">
      <h2 className="text-h4 transition-colors duration-300 group-hover:text-brand">
        {project.name}
      </h2>
      <p className="text-body-s tracking-wide text-smoke uppercase">{project.service}</p>
    </div>
  </Link>
);
