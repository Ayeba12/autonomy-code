import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const forYou = [
  "You are a coach or consultant who has built something real.",
  "You are respected externally, but privately aware that your practice, identity, or execution does not feel fully yours.",
  "You know your private wisdom is stronger than your public clarity.",
  "You are tired of borrowing other people’s language, frameworks, or structures to explain work that is already deeper than what the market currently sees.",
  "You are not looking for permission. You are looking for a structure that holds the decision once you have made it.",
];

const notForYou = [
  "You want a hype formula.",
  "You run on hustle and urgency, and you want it kept that way. This work is slow first, then precise.",
  "You want someone to shout you into action.",
  "You want a quick fix that ignores your real life.",
  "You want another personality test.",
  "You want a scorecard for your worth.",
  "You want more information without ownership.",
];

/** Gold spark bullet — this is for you. */
const Spark = () => (
  <svg className="mt-1.5 size-4 shrink-0 text-brand" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z" />
  </svg>
);

/** Quiet cross — this is not. */
const Cross = () => (
  <svg
    className="mt-1.5 size-4 shrink-0 text-slate"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden
  >
    <path d="M5 5l10 10M15 5L5 15" />
  </svg>
);

const FitCard = ({
  title,
  items,
  mark,
  image,
  tone,
}: {
  title: string;
  items: string[];
  mark: "spark" | "cross";
  image: { src: string; alt: string; position: string };
  tone: string;
}) => (
  <div className={`flex h-full flex-col overflow-hidden rounded-card-lg max-md:rounded-card ${tone}`}>
    <div className="flex items-center gap-5 p-8 pb-0 max-md:p-6 max-md:pb-0">
      <Image
        src={image.src}
        alt={image.alt}
        width={300}
        height={300}
        sizes="96px"
        className={`size-24 shrink-0 rounded-full object-cover max-md:size-18 ${image.position}`}
      />
      <h2 className="text-h4 max-md:text-h5">{title}</h2>
    </div>
    <ul className="flex flex-col p-8 max-md:p-6">
      {items.map((line) => (
        <li key={line} className="flex gap-4 border-b border-line py-4 last:border-b-0">
          {mark === "spark" ? <Spark /> : <Cross />}
          <span className="text-body-l text-slate">{line}</span>
        </li>
      ))}
    </ul>
  </div>
);

/** Who it is for (copy v3 §8, verbatim words): two cards, no shame. */
export const FitSection = () => (
  <section className="bg-white py-28 max-lg:py-20 max-md:py-14">
    <div className="container-site">
      <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
        <Reveal className="h-full">
          <FitCard
            title="This is for you if"
            items={forYou}
            mark="spark"
            tone="bg-paper"
            image={{
              src: "/images/about/about-fit-for.webp",
              alt: "Graphite sketch of a composed woman seated in a quiet room, the light on the sill drawn in gold",
              position: "object-[50%_30%]",
            }}
          />
        </Reveal>
        <Reveal delay={0.1} className="h-full">
          <FitCard
            title="This is not for you if"
            items={notForYou}
            mark="cross"
            tone="bg-paper-2"
            image={{
              src: "/images/about/about-fit-not-for.webp",
              alt: "Graphite sketch of a teetering stack of self-help books beside one thin open notebook with a single line drawn in gold",
              position: "object-[50%_45%]",
            }}
          />
        </Reveal>
      </div>
      <Reveal className="mx-auto mt-16 flex max-w-[760px] flex-col gap-4 text-center max-md:mt-10">
        <p className="font-heading text-h4 text-ink max-md:text-h5">
          This is not a shame tool. It is a diagnostic.
        </p>
        <p className="text-body-xl text-slate">
          You are not broken or weak. You are unclaimed, and that is a
          structure, not a character failing.
        </p>
      </Reveal>
    </div>
  </section>
);
