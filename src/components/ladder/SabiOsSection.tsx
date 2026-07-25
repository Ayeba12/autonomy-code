import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

/** The four rooms of SABI OS (content.md §4.5, verbatim lines). */
const rooms = [
  {
    name: "WAIT",
    line: "Locate yourself before building. The Waiting Room is not a delay, it is protection.",
  },
  {
    name: "SABI",
    line: "See, sort, and value what you know.",
  },
  {
    name: "KÓKÓ",
    line: "Turn wisdom into a defensible message.",
  },
  {
    name: "RÒN",
    line: "Turn message into practice, offer, rhythm, and proof.",
  },
];

const flow = ["Discover", "Sort", "Interpret", "Decide", "Build"];

/**
 * SABI OS band on the SABI CORE page: the operating system inside the
 * year. Four calm room cards and the operating flow. This band carries
 * the page's single breath-blue accent (content.md §2).
 */
export const SabiOsSection = () => (
  <section className="bg-breath-tint py-24 max-lg:py-16 max-md:py-12">
    <div className="container-site">
      <Reveal>
        <Tag>SABI OS</Tag>
        <h2 className="mt-4 max-w-[720px] text-h3">
          The operating system inside
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-[720px] text-body-xl text-smoke">
          SABI is knowing. The wisdom, pattern, instinct, and lived experience
          you already carry. SABI OS is the operating system that helps you
          move from scattered knowing into owned expression. You are not
          starting from nothing. The work is to locate what you carry, sort
          it, name it, and decide what it is here to become.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:mt-10 max-md:grid-cols-1">
        {rooms.map((room, i) => (
          <Reveal key={room.name} delay={i * 0.1} className="h-full">
            <article className="flex h-full flex-col gap-4 rounded-card bg-white p-8 max-md:p-6">
              <h3 className="font-heading text-h5">{room.name}</h3>
              <div className="gold-thread w-10" />
              <p className="text-body-m text-smoke">{room.line}</p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* The operating flow. Arrow glyphs belong to the diagram, not prose. */}
      <Reveal delay={0.2}>
        <p className="mt-14 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center font-heading text-h6 max-md:mt-10">
          {flow.map((step, i) => (
            <span key={step} className="flex items-center gap-x-4">
              <span>{step}</span>
              {i < flow.length - 1 && (
                <span aria-hidden className="text-brand">
                  →
                </span>
              )}
            </span>
          ))}
        </p>
      </Reveal>
    </div>
  </section>
);
