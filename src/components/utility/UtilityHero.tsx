import { type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

/**
 * Shared light band for all `/utility-pages/*` routes
 * (template `utility-section`: 160px top padding under the floating navbar).
 */
export const UtilitySection = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section
    className={`bg-paper pt-40 pb-24 max-lg:pt-32 max-md:pt-28 max-md:pb-14 ${className}`}
  >
    <div className="container-site">{children}</div>
  </section>
);

interface UtilityHeroProps {
  tag: string;
  title: string;
  subline?: string;
}

/** Centered title block (template `utility-title-block`, max-width 841px). */
export const UtilityHero = ({ tag, title, subline }: UtilityHeroProps) => (
  <div className="mx-auto mb-20 flex max-w-[841px] flex-col items-center gap-5 text-center max-md:mb-12">
    <Reveal className="flex flex-col items-center gap-5">
      <Tag>{tag}</Tag>
      <h1 className="text-display">{title}</h1>
    </Reveal>
    {subline && (
      <Reveal delay={0.15}>
        <p className="text-body-l text-smoke">{subline}</p>
      </Reveal>
    )}
  </div>
);
