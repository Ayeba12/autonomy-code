import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

/** Static mock table-of-contents list — identical on every post (template `.blogs-list`). */
const tocItems = [
  "First of all, what does no-code mean?",
  "Things to have sorted before starting",
  "Calculate the manage your tasks.",
  "Opportunities for learning and growth",
  "Calculate the manage your tasks.",
  "Opportunities for learning and growth",
];

/**
 * Blog detail sticky sidebar: dark table-of-contents-style card +
 * "Actionable tips" contact card (template `.blogs-details-right`).
 */
export const BlogSidebar = () => (
  <aside className="w-full max-w-[400px] shrink-0 max-lg:max-w-none lg:sticky lg:top-8 lg:self-start">
    <Reveal y={0} className="flex flex-col gap-8">
      <div className="rounded-card bg-ink p-7 text-white max-md:p-5">
        <ul className="flex list-disc flex-col gap-3 pl-7 text-body-l">
          {tocItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-start gap-4 rounded-card bg-paper p-7 max-md:p-5">
        <span
          className="flex size-12 items-center justify-center rounded-2xl bg-white"
          aria-hidden
        >
          <svg className="size-6 text-brand" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.7 2.5 21.5 5l-2 4.3-2-.8V21h-11V8.5l-2 .8-2-4.3 4.8-2.5a4.2 4.2 0 0 0 3.7 2.2 4.2 4.2 0 0 0 3.7-2.2Z" />
          </svg>
        </span>
        <h2 className="text-h6">Actionable tips from top designers &amp; developer</h2>
        <p className="text-body-m text-smoke">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Button href="/contact" variant="dark">
          Get Started
        </Button>
      </div>
    </Reveal>
  </aside>
);
