import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import type { Pillar } from "@/content/types";

/** The five movements as written for the Compass page (copy v3 §5). */
export const compassMovements: Record<string, string> = {
  identity: "From borrowed identity to owned ground.",
  message: "From private wisdom to public clarity.",
  strategy: "From unsupported execution to self-governance.",
  resources: "From scattered ownership to owned capacity.",
  relationships: "From performed belonging to chosen support.",
};

/**
 * An example shape for the five pillars: four held, one lower. Purely
 * illustrative; it is labelled as an example on the page.
 */
const EXAMPLE = [0.82, 0.7, 0.78, 0.38, 0.74];
const LOW = 3;
const SIZE = 420;
const C = SIZE / 2;
const R = 120;

const point = (i: number, r: number) => {
  const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
  return [C + r * Math.cos(angle), C + r * Math.sin(angle)] as const;
};

const ring = (scale: number) =>
  Array.from({ length: 5 }, (_, i) => point(i, R * scale).join(",")).join(" ");

/** Pentagon chart of the example shape, the low pillar marked in gold. */
const PillarShape = ({ names }: { names: string[] }) => (
  <svg
    viewBox={`0 36 ${SIZE} 316`}
    className="w-full max-w-[380px]"
    role="img"
    aria-label={`An example shape across the five pillars, with ${names[LOW]} sitting lower than the rest`}
  >
    {[1, 0.66, 0.33].map((scale) => (
      <polygon key={scale} points={ring(scale)} fill="none" stroke="#d9d4ca" strokeWidth="1" />
    ))}
    {Array.from({ length: 5 }, (_, i) => {
      const [x, y] = point(i, R);
      return <line key={i} x1={C} y1={C} x2={x} y2={y} stroke="#e6e1d8" strokeWidth="1" />;
    })}
    <polygon
      points={EXAMPLE.map((v, i) => point(i, R * v).join(",")).join(" ")}
      fill="rgba(184,137,58,0.12)"
      stroke="#111111"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {EXAMPLE.map((v, i) => {
      const [x, y] = point(i, R * v);
      return i === LOW ? (
        <g key={i}>
          <circle cx={x} cy={y} r="10" fill="rgba(184,137,58,0.25)" />
          <circle cx={x} cy={y} r="5" fill="#b8893a" />
        </g>
      ) : (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#111111" />
      );
    })}
    {names.map((name, i) => {
      const [x, y] = point(i, R + 28);
      return (
        <text
          key={name}
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="16"
          fill={i === LOW ? "#7a5a22" : "#454545"}
          fontWeight={i === LOW ? 600 : 400}
        >
          {name}
        </text>
      );
    })}
  </svg>
);

/**
 * The five pillars (copy v3 §5, verbatim words): the example shape on
 * the left, the five movements with their drawings on the right.
 */
export const FivePillars = ({ pillars }: { pillars: Pillar[] }) => (
  <section className="py-28 max-lg:py-20 max-md:py-14">
    <div className="container-site">
      <Reveal className="max-w-[860px]">
        <h2 className="text-h2">
          Ownership is held in five places. One of them is where yours went.
        </h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-[0.85fr_1fr] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-10 max-md:mt-8">
        <Reveal className="lg:sticky lg:top-32">
          <figure className="flex flex-col items-center rounded-card-lg bg-white px-8 py-10 max-md:rounded-card max-md:px-4 max-md:py-6">
            <PillarShape names={pillars.map((pillar) => pillar.name)} />
            <figcaption className="mt-4 text-center text-body-s text-slate">
              Example shape
            </figcaption>
          </figure>
          <div className="mt-8 flex flex-col gap-4">
            <p className="text-body-xl text-ink">
              The pillars are not equal. One will be lower than the rest. That
              is the one to claim first.
            </p>
            <p className="text-body-l text-slate">
              The goal is not to force yourself into another borrowed system.
              The goal is to see where ownership went, and claim the first
              piece back.
            </p>
          </div>
        </Reveal>
        <div className="flex flex-col gap-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.slug} delay={i * 0.06}>
              <article className="flex items-center gap-6 rounded-card bg-white p-3 pr-8 max-md:gap-4 max-md:pr-4">
                {pillar.image && (
                  <Image
                    src={pillar.image.src}
                    alt=""
                    width={240}
                    height={240}
                    sizes="112px"
                    className="size-28 shrink-0 rounded-[14px] object-cover max-md:size-20"
                  />
                )}
                <div className="min-w-0">
                  <span className="font-heading text-body-s tracking-[0.2em] text-brand-hot">
                    {pillar.index}
                  </span>
                  <h3 className="mt-1 font-heading text-h5 text-ink max-md:text-h6">
                    {pillar.name}
                  </h3>
                  <p className="mt-1 text-body-m text-slate">
                    {compassMovements[pillar.slug] ?? pillar.movement}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
