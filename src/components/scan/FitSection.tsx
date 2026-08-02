import { Reveal } from "@/components/motion/Reveal";

const forYou = [
  "You are a coach or consultant who has built something real.",
  "You are respected externally, but privately aware that your practice, identity, or execution does not feel fully yours.",
  "You know your private wisdom is stronger than your public clarity.",
  "You are tired of borrowing other people’s language, frameworks, or structures to explain work that is already deeper than what the market currently sees.",
  "You are ready to stop performing inside borrowed ground and begin reclaiming ownership.",
];

const notForYou = [
  "You want a hype formula.",
  "You want someone to shout you into action.",
  "You want a quick fix that ignores your real life.",
  "You want another personality test.",
  "You want a scorecard for your worth.",
  "You want more information without ownership.",
];

/** Gold spark bullet — this is for you. */
const Spark = () => (
  <svg
    className="mt-1.5 size-4 shrink-0 text-brand"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden
  >
    <path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z" />
  </svg>
);

/** Quiet cross — this is not. */
const Cross = () => (
  <svg
    className="mt-1.5 size-4 shrink-0 text-mute"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden
  >
    <path d="M5 5l10 10M15 5L5 15" />
  </svg>
);

/** For you / not for you — two quiet cards, no shame (content.md §4.4). */
export const FitSection = () => (
  <section className="py-28 max-lg:py-20 max-md:py-14">
    <div className="container-site">
      <div className="mx-auto grid max-w-[1060px] grid-cols-2 gap-6 max-md:grid-cols-1">
        <Reveal className="h-full">
          <div className="h-full rounded-card bg-white p-10 max-md:p-6">
            <h2 className="text-h5">This is for you if</h2>
            <ul className="mt-8 flex flex-col gap-5 max-md:mt-5">
              {forYou.map((line) => (
                <li key={line} className="flex gap-4">
                  <Spark />
                  <span className="text-body-l text-smoke">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="h-full">
          <div className="h-full rounded-card bg-paper-2 p-10 max-md:p-6">
            <h2 className="text-h5">This is not for you if</h2>
            <ul className="mt-8 flex flex-col gap-5 max-md:mt-5">
              {notForYou.map((line) => (
                <li key={line} className="flex gap-4">
                  <Cross />
                  <span className="text-body-l text-smoke">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
      <Reveal className="mx-auto mt-20 max-w-[680px] text-center max-lg:mt-14 max-md:mt-10">
        <p className="font-heading text-h5 text-ink">
          This is not a shame tool. It is a diagnostic.
        </p>
      </Reveal>
    </div>
  </section>
);
