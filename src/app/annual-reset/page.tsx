import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { DiagonalLink } from "@/components/ui/DiagonalLink";
import { Tag } from "@/components/ui/Tag";
import { SEAT_CONTACT_EMAIL, SEAT_HREF, reset, resetFaqs } from "@/content/reset";

export const metadata: Metadata = {
  title: "The Annual Reset 4.0",
  description:
    "Three live sessions to close this year honestly, find out whose standards you have been living by, and enter the next one holding only the ones you choose. 27 November, 4 and 5 December, 7 pm UK, online.",
};

/** Gold spark bullet, matching the Tag icon. */
const Spark = () => (
  <svg
    className="mt-1.5 size-3.5 shrink-0 text-brand"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden
  >
    <path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z" />
  </svg>
);

/** Qualification marks for the fit lists: circled check, circled cross. */
const CheckMark = () => (
  <svg className="mt-0.5 size-5 shrink-0 text-pass" viewBox="0 0 20 20" fill="none" aria-hidden>
    <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="m6.25 10.25 2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** On the black panel the red lifts to a lighter tint so the mark stays legible. */
const CrossMark = ({ onDark = false }: { onDark?: boolean }) => (
  <svg
    className={`mt-0.5 size-5 shrink-0 ${onDark ? "text-fail-soft" : "text-fail"}`}
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden
  >
    <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="m7.25 7.25 5.5 5.5m0-5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/** Line icons for the numbered cards, in the same stroke family as the marks above. */
const iconProps = {
  className: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Inherited and handed down: a key passed on. */
const KeyIcon = () => (
  <svg {...iconProps}>
    <circle cx="8" cy="12" r="4" />
    <path d="M12 12h9M18 12v3M15 12v2" />
  </svg>
);

/** Absorbed and taken in: the room you wanted to belong to. */
const PeopleIcon = () => (
  <svg {...iconProps}>
    <circle cx="9" cy="8" r="3" />
    <circle cx="16.5" cy="9.5" r="2.25" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0M15.5 18.5a4 4 0 0 1 5-3.5" />
  </svg>
);

/** Agreed to, once: a signature from a season that ended. */
const PenIcon = () => (
  <svg {...iconProps}>
    <path d="m14.5 5.5 4 4L8 20H4v-4L14.5 5.5ZM12.5 7.5l4 4M4 22h16" />
  </svg>
);

const sourceIcons = [<KeyIcon key="key" />, <PeopleIcon key="people" />, <PenIcon key="pen" />];

/** Number on the left, icon in a hairline ring on the right, one row. */
const CardIndex = ({
  number,
  icon,
  size = "text-h3",
}: {
  number: string;
  icon: ReactNode;
  size?: string;
}) => (
  <div className="flex items-center justify-between gap-6">
    <span className={`font-heading ${size} leading-none text-brand-hot`} aria-hidden>
      {number}
    </span>
    <span
      className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line text-brand-hot"
      aria-hidden
    >
      {icon}
    </span>
  </div>
);

/** Small uppercase label used for eyebrows across the page. */
const Eyebrow = ({ children }: { children: string }) => (
  <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">
    {children}
  </p>
);

/** A hand-drawn illustration in a rounded card, with an optional caption. */
const Sketch = ({
  src,
  alt,
  caption,
  preload = false,
  aspect = "aspect-video",
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  preload?: boolean;
  /** Tailwind aspect class; the hero drawing is taller than 16:9. */
  aspect?: string;
  className?: string;
}) => (
  <figure className={className}>
    <div className="overflow-hidden rounded-card">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={893}
        preload={preload}
        sizes="(max-width: 767px) 100vw, 50vw"
        className={`${aspect} w-full object-cover`}
      />
    </div>
    {caption && (
      <figcaption className="mt-3 text-center text-body-s text-slate">
        {caption}
      </figcaption>
    )}
  </figure>
);

const SeatButton = ({
  label = reset.earlyBirdLabel,
  className = "",
}: {
  label?: string;
  className?: string;
}) => (
  <Button href={SEAT_HREF} variant="gold" className={className}>
    {label}
  </Button>
);

/**
 * /annual-reset — the yearly workshop, powered by The Autonomy Code.
 * Landing page copy is client-final (content/reset.ts). Black holds the
 * hero and the close; the page carries its own seat CTA throughout, so the
 * shared Scan CtaSection is deliberately not rendered (as on /ownership-scan).
 */
const AnnualResetPage = () => (
  <>
    <Navbar tone="light" />
    <main className="bg-paper">
      {/* Hero — black inset band on the home-hero shape: the headline owns
          the top, the gold thread divides, and the bottom row carries the
          drawing, the standfirst, the dates and the seat. */}
      <section className="m-2 flex min-h-[92vh] flex-col rounded-card bg-ink pt-40 pb-10 text-paper max-lg:pt-32 max-md:min-h-0 max-md:pt-28 max-md:pb-8">
        <div className="container-site flex flex-1 flex-col">
          <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Tag tone="light">{reset.name}</Tag>
            <p className="font-heading text-body-s tracking-[0.22em] text-mute uppercase">
              {reset.dates}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-8 text-display max-md:mt-6">
              You are not behind.
              <br />
              You are living by{" "}
              <span className="text-brand-soft">standards you never agreed to.</span>
            </h1>
          </Reveal>

          {/* The gold thread, drawn once. */}
          <div
            aria-hidden
            className="mt-14 h-px w-full max-md:mt-10"
            style={{
              background:
                "linear-gradient(90deg, #7A5A22, #B8893A 25%, #F0E2B4 50%, #B8893A 75%, #7A5A22)",
            }}
          />

          <div className="mt-10 grid flex-1 grid-cols-[0.72fr_1.28fr] items-end gap-16 max-lg:grid-cols-1 max-lg:gap-10 max-md:mt-8">
            <Reveal delay={0.2} className="max-lg:order-2">
              <Sketch
                src="/images/reset/reset-hero-poster.webp"
                alt="The Annual Reset 4.0 poster: a graphite sketch of a woman writing in her notebook with a gold pen, her head resting on one hand, beside a mug reading Higher standards, brighter days"
                preload
                aspect="aspect-square"
              />
            </Reveal>

            <div className="flex flex-col gap-10 max-lg:order-1 max-md:gap-8">
              <Reveal delay={0.25}>
                <p className="max-w-[560px] font-heading text-h4 leading-snug text-paper">
                  {reset.hero.sub}
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <ul className="grid grid-cols-3 gap-6 border-t border-paper/15 pt-6 max-md:grid-cols-1 max-md:gap-3">
                  {reset.moves.map((move) => (
                    <li key={move.number} className="flex items-baseline gap-3">
                      <span className="font-heading text-body-s text-brand-soft">
                        {move.number}
                      </span>
                      <span className="text-body-m text-paper/85">{move.date}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.35} className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <SeatButton />
                <p className="text-body-s text-mute">{reset.hero.note}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Where you are — with the distance diagram */}
      <section className="section-pad">
        <div className="container-site grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div className="max-w-[560px]">
            <Reveal>
              <Eyebrow>Where you are</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-body-xl text-slate">
                {reset.whereYouAre.lead}{" "}
                <strong className="font-semibold text-ink">{reset.whereYouAre.leadEmphasis}</strong>
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 font-heading text-h4 text-ink">{reset.whereYouAre.turn}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 text-body-xl text-slate">{reset.whereYouAre.after}</p>
              <p className="mt-4 font-heading text-h5 text-ink">{reset.whereYouAre.afterTurn}</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Sketch
              src="/images/reset/reset-distance.webp"
              alt="Graphite diagram of a sturdy house on the left, a small figure on the right, and the gap between them measured in gold"
            />
            <div className="mt-4 flex items-center justify-between gap-4 font-heading text-body-s tracking-[0.16em] text-slate uppercase max-md:text-[11px]">
              {reset.whereYouAre.diagram.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
            <p className="mt-3 text-center text-body-s text-slate">
              {reset.whereYouAre.diagramNote}
            </p>
          </Reveal>
        </div>
        <div className="container-site">
          <Reveal className="mx-auto mt-20 max-w-[820px] text-center max-md:mt-12">
            <p className="font-heading text-h3 text-ink">{reset.whereYouAre.close}</p>
          </Reveal>
        </div>
      </section>

      {/* What is actually happening — the three sources */}
      <section className="bg-white section-pad">
        <div className="container-site">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <Eyebrow>What is actually happening</Eyebrow>
            <p className="mt-6 text-body-xl text-slate">{reset.standards.lead}</p>
            <p className="mt-6 font-heading text-h4 text-ink">{reset.standards.turn}</p>
          </Reveal>

          <div className="mt-16 grid grid-cols-[0.95fr_1.05fr] items-center gap-14 max-lg:grid-cols-1 max-lg:gap-10 max-md:mt-10">
            <Reveal>
              <Sketch
                src="/images/reset/reset-sources.webp"
                alt="Graphite sketch of a woman holding three cords arriving from three directions: older hands, a crowd, and a knot tied long ago, one cord in gold"
                caption="Three places. None of them asked."
              />
            </Reveal>
            <div className="flex flex-col gap-4">
              {reset.standards.sources.map((source, i) => (
                <Reveal key={source.title} delay={i * 0.1}>
                  <article className="rounded-card bg-paper p-8 max-md:p-6">
                    <CardIndex number={String(i + 1).padStart(2, "0")} icon={sourceIcons[i]} />
                    <h3 className="mt-5 text-h5">{source.title}</h3>
                    <p className="mt-3 text-body-m text-slate">{source.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mx-auto mt-16 max-w-[720px] text-center max-md:mt-10">
            <p className="text-body-xl text-ink">{reset.standards.after}</p>
            <p className="mt-6 text-body-l text-slate">{reset.standards.close}</p>
          </Reveal>
        </div>
      </section>

      {/* The difference this year turns on — value versus standard */}
      <section className="bg-paper-2 section-pad">
        <div className="container-site">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <Eyebrow>The difference this year turns on</Eyebrow>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-5 max-md:mt-8 max-md:grid-cols-1">
            <Reveal>
              <article className="h-full rounded-card border border-line bg-white/60 p-9 max-md:p-6">
                <h3 className="text-h4">{reset.difference.value.title}</h3>
                <p className="mt-4 text-body-l text-slate">{reset.difference.value.body}</p>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="h-full rounded-card bg-ink p-9 text-paper max-md:p-6">
                <h3 className="text-h4">{reset.difference.standard.title}</h3>
                <p className="mt-4 text-body-l text-paper/80">{reset.difference.standard.body}</p>
              </article>
            </Reveal>
          </div>
          <div className="mt-14 grid grid-cols-2 items-center gap-14 max-lg:grid-cols-1 max-lg:gap-10 max-md:mt-10">
            <Reveal>
              <Sketch
                src="/images/reset/reset-standard.webp"
                alt="Graphite sketch of a bare foot stopping exactly at a line drawn on the floor, the line in gold"
                caption="A standard is a line you hold."
              />
            </Reveal>
            <Reveal delay={0.1} className="max-w-[520px]">
              <p className="text-body-xl text-slate">{reset.difference.after}</p>
              <p className="mt-6 font-heading text-h3 text-ink">{reset.difference.close}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Three sessions, three moves */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <Eyebrow>Three sessions, three moves, three things you keep</Eyebrow>
          </Reveal>
          {/* The session name leads; the number is a quiet eyebrow; each card
              carries a full drawing rather than an icon. */}
          <div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-md:mt-8">
            {reset.moves.map((move, i) => (
              <Reveal key={move.number} delay={i * 0.1} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-card bg-white">
                  <Image
                    src={move.image.src}
                    alt={move.image.alt}
                    width={1200}
                    height={1500}
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="aspect-[4/5] w-full object-cover max-lg:aspect-[3/2]"
                  />
                  <div className="flex flex-1 flex-col p-8 max-md:p-6">
                    <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">
                      Session {move.number}
                    </p>
                    <h3 className="mt-3 font-heading text-display leading-none font-bold tracking-[-0.02em] text-ink">
                      {move.title}
                    </h3>
                    <p className="mt-5 text-body-l text-slate">{move.body}</p>
                    <p className="mt-auto pt-6 font-heading text-body-s tracking-[0.16em] text-slate uppercase">
                      {move.date}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          {/* Three outcome sentences, one per line, the noun in bold. Each
              line is kept whole so the noun never wraps on its own. */}
          <Reveal className="mx-auto mt-14 flex max-w-[820px] flex-col items-center gap-2 text-center max-md:mt-10">
            {reset.outcomes.map((line) => (
              <p key={line.noun} className="font-heading text-h3 whitespace-nowrap text-ink max-md:text-h4">
                {line.lead} <strong className="font-bold">{line.noun}</strong>.
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* What happens in the room — one drawing per session */}
      <section className="bg-white section-pad">
        <div className="container-site">
          <Reveal>
            <Eyebrow>What happens in the room</Eyebrow>
          </Reveal>
          <div className="mt-12 flex flex-col gap-20 max-md:mt-8 max-md:gap-14">
            {reset.sessions.map((session, i) => (
              <div
                key={session.name}
                className={`grid grid-cols-2 items-center gap-14 max-lg:grid-cols-1 max-lg:gap-8 ${
                  i % 2 === 1 ? "[&>*:first-child]:lg:order-2" : ""
                }`}
              >
                <Reveal>
                  <Sketch src={session.image.src} alt={session.image.alt} />
                </Reveal>
                <Reveal delay={0.1} className="max-w-[540px]">
                  <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">
                    {session.label}
                  </p>
                  <h3 className="mt-3 font-heading text-display leading-none font-bold tracking-[-0.02em]">
                    {session.name}
                  </h3>
                  <p className="mt-2 text-body-s text-slate italic">{session.when}</p>
                  <p className="mt-6 text-body-l text-slate">{session.body}</p>
                  {session.extra && (
                    <p className="mt-4 text-body-l text-slate">{session.extra}</p>
                  )}
                  <p className="mt-6 border-l-2 border-brand pl-5 font-heading text-h6 text-ink">
                    {session.leave}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <Eyebrow>Who this is for</Eyebrow>
          </Reveal>
          {/* Two panels on two grounds: ivory for the people it is for, black
              for the people it is not, a gold rule on each. */}
          <div className="mt-10 grid grid-cols-2 gap-6 max-md:mt-6 max-md:grid-cols-1 max-md:gap-6">
            <Reveal className="h-full">
              <div className="h-full rounded-card border-t-2 border-brand bg-white p-9 max-md:p-6">
                <h3 className="text-h4 text-ink">This is for you if</h3>
                <ul className="mt-7 flex flex-col gap-4">
                  {reset.forList.map((line) => (
                    <li key={line} className="flex gap-3">
                      <CheckMark />
                      <span className="text-body-l text-slate">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="h-full">
              <div className="h-full rounded-card border-t-2 border-brand-soft bg-ink p-9 text-paper max-md:p-6">
                <h3 className="text-h4 text-paper">This is not for you if</h3>
                <ul className="mt-7 flex flex-col gap-4">
                  {reset.notForList.map((line) => (
                    <li key={line} className="flex gap-3">
                      <CrossMark onDark />
                      <span className="text-body-l text-paper/85">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="bg-white section-pad">
        <div className="container-site grid grid-cols-2 items-center gap-14 max-lg:grid-cols-1 max-lg:gap-10">
          <Reveal>
            <Eyebrow>What is included</Eyebrow>
            <ul className="mt-8 flex flex-col">
              {reset.included.map((item) => (
                <li key={item} className="flex gap-3 border-b border-line py-4 first:border-t">
                  <Spark />
                  <span className="text-body-l text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <Sketch
              src="/images/reset/reset-included.webp"
              alt="Graphite still life of an open workbook, a pencil, and a drawing stencil shaded in gold"
              caption="The Workbook and your LifeSync Stencil."
            />
          </Reveal>
        </div>
      </section>

      {/* Who is running it */}
      <section className="section-pad">
        <div className="container-site grid grid-cols-[320px_1fr] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <Reveal>
            <div className="overflow-hidden rounded-card">
              <Image
                src="/images/dk-jonah-portrait.webp"
                alt="DK Jonah"
                width={640}
                height={800}
                sizes="(max-width: 1023px) 100vw, 320px"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="max-w-[640px]">
            <Reveal>
              <Eyebrow>Who is running it</Eyebrow>
              <h2 className="mt-5 text-h2">{reset.host.name}</h2>
            </Reveal>
            {reset.host.lines.map((line, i) => (
              <Reveal key={line} delay={0.08 + i * 0.06}>
                <p className="mt-6 text-body-l text-slate">{line}</p>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <p className="mt-10 border-l-2 border-brand pl-5 font-heading text-h4 text-ink max-md:mt-8">
                {reset.host.pull}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What people say — quote, then the person: monogram, name, role */}
      <section className="bg-white section-pad">
        <div className="container-site">
          <Reveal className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-3">
            <div>
              <Eyebrow>What people say</Eyebrow>
              <h2 className="mt-4 text-h3">Three voices, in their own words.</h2>
            </div>
            <p className="max-w-[360px] pb-1 text-body-m text-slate">
              From people who have worked with DK, quoted as they said it.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-md:mt-8">
            {reset.quotes.map((item, i) => {
              const initials = item.name
                .split(/[\s-]+/)
                .slice(0, 2)
                .map((part) => part[0])
                .join("")
                .toUpperCase();
              return (
                <Reveal key={item.name} delay={i * 0.1} className="h-full">
                  <figure className="flex h-full flex-col rounded-card bg-paper p-8 max-md:p-6">
                    <span
                      className="font-heading text-[64px] leading-[0.6] text-brand-hot"
                      aria-hidden
                    >
                      &ldquo;
                    </span>
                    <blockquote className="mt-6 flex-1">
                      <p className="text-body-xl text-ink">{item.quote}</p>
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                      <span
                        className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ink font-heading text-body-s tracking-wide text-paper"
                        aria-hidden
                      >
                        {initials}
                      </span>
                      <span className="flex flex-col gap-0.5">
                        <span className="font-heading text-body-l text-ink">{item.name}</span>
                        <span className="text-body-s text-slate">{item.role}</span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Taking your seat — the price, once, plainly */}
      <section id="seat" className="scroll-mt-28 bg-paper-2 section-pad">
        <div className="container-site">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <Eyebrow>Taking your seat</Eyebrow>
            <h2 className="mt-5 text-h2">Three sessions. One seat.</h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-[980px] grid-cols-3 gap-5 max-md:mt-8 max-md:grid-cols-1">
            {reset.pricing.tiers.map((tier, i) => (
              <Reveal key={tier.label} delay={i * 0.08} className="h-full">
                <article
                  className={`flex h-full flex-col items-center rounded-card p-8 text-center max-md:p-6 ${
                    "bg-ink text-paper"
                  }`}
                >
                  <p className="font-heading text-body-s tracking-[0.18em] uppercase">
                    {tier.label}
                  </p>
                  <p className="mt-6 font-heading text-[clamp(1.75rem,3.1vw,2.75rem)] leading-none tracking-tight whitespace-nowrap text-brand">
                    {tier.price}
                  </p>
                  <p className={`mt-4 text-body-s ${"text-paper/75"}`}>
                    {tier.note}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-12 flex max-w-[640px] flex-col items-center gap-6 text-center max-md:mt-8">
            <p className="text-body-l text-ink">{reset.pricing.body}</p>
            <p className="font-heading text-h6">{reset.bookingCloses}</p>
            <SeatButton label="Take your seat" />
            <p className="text-body-s text-slate italic">{reset.pricing.payment}</p>
            <p className="text-body-s text-slate">
              Questions before you book?{" "}
              {SEAT_CONTACT_EMAIL ? (
                <a
                  href={`mailto:${SEAT_CONTACT_EMAIL}`}
                  className="font-medium text-ink underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
                >
                  {SEAT_CONTACT_EMAIL}
                </a>
              ) : (
                <DiagonalLink href="/contact" className="text-body-s">
                  Write to us
                </DiagonalLink>
              )}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Questions */}
      <section className="bg-white">
        <div className="container-site grid grid-cols-[1fr_1.25fr] gap-9 py-24 max-lg:grid-cols-1 max-lg:py-16 max-md:py-12">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-5 text-h3">Asked before, answered plainly.</h2>
          </Reveal>
          <Reveal delay={0.15} className="justify-self-end max-lg:justify-self-start">
            <Accordion items={resetFaqs} />
          </Reveal>
        </div>
      </section>

      {/* The close — black holds the last word */}
      <section className="py-24 max-lg:py-16 max-md:py-10">
        <div className="container-site">
          <div className="rounded-card-lg bg-ink px-10 py-24 text-paper max-lg:py-16 max-md:rounded-card max-md:px-6 max-md:py-12">
            <div className="mx-auto flex max-w-[820px] flex-col items-center gap-8 text-center max-md:gap-6">
              <Reveal>
                <h2 className="text-h2">{reset.close.title}</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-body-xl text-paper/80">{reset.close.body}</p>
              </Reveal>
              <Reveal delay={0.2} className="flex flex-col items-center gap-4">
                <SeatButton />
                <p className="text-body-s text-mute italic">{reset.close.dates}</p>
              </Reveal>
            </div>
          </div>
          <Reveal className="mt-12 flex flex-col items-center gap-1 text-center max-md:mt-8">
            {reset.signature.map((line) => (
              <p key={line} className="font-heading text-body-m text-ink">
                {line}
              </p>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  </>
);

export default AnnualResetPage;
