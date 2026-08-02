import { Marquee } from "@/components/motion/Marquee";

/** The five pillar movements as a quiet ticker (Stodio logo-marquee pattern). */
export const ScanMarquee = ({ movements }: { movements: string[] }) => (
  <section className="border-y border-dashed border-line bg-white py-7 max-md:py-5">
    <Marquee duration={40} gapClassName="gap-16" ariaLabel="The five movements">
      {movements.map((line) => (
        <span
          key={line}
          className="flex items-center gap-16 font-heading text-h6 whitespace-nowrap text-ink"
        >
          <svg
            className="size-4 shrink-0 text-brand"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z" />
          </svg>
          {line}
        </span>
      ))}
    </Marquee>
  </section>
);
