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

/** For you / not for you — two quiet columns, no shame (content.md §4.4). */
export const FitSection = () => (
  <section className="pb-28 max-lg:pb-20 max-md:pb-14">
    <div className="container-site">
      <div className="mx-auto grid max-w-[1000px] grid-cols-2 gap-16 max-lg:gap-10 max-md:grid-cols-1">
        <Reveal>
          <h2 className="text-h5">This is for you if</h2>
          <ul className="mt-8 flex flex-col gap-5 max-md:mt-5">
            {forYou.map((line) => (
              <li key={line} className="flex gap-4">
                <span className="mt-3 h-0.5 w-5 shrink-0 bg-line" aria-hidden />
                <span className="text-body-l text-smoke">{line}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="text-h5">This is not for you if</h2>
          <ul className="mt-8 flex flex-col gap-5 max-md:mt-5">
            {notForYou.map((line) => (
              <li key={line} className="flex gap-4">
                <span className="mt-3 h-0.5 w-5 shrink-0 bg-line" aria-hidden />
                <span className="text-body-l text-smoke">{line}</span>
              </li>
            ))}
          </ul>
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
