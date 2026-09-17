"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, type ReactNode, useId, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { EarlyBirdCountdown } from "@/components/reset/EarlyBirdCountdown";
import { DiagonalLink } from "@/components/ui/DiagonalLink";
import {
  type BookingPhase,
  SEAT_CONTACT_EMAIL,
  reset,
  resetCheckout,
  seatOptions,
  seatPriceFor,
} from "@/content/reset";

const contactHref = SEAT_CONTACT_EMAIL ? `mailto:${SEAT_CONTACT_EMAIL}` : "/contact";

/** Step heading: number in gold, title beside it, one row. */
const Step = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) => (
  <Reveal className="flex flex-col gap-6">
    <h2 className="flex items-baseline gap-4">
      <span className="font-heading text-h5 leading-none text-brand-hot" aria-hidden>
        {number}
      </span>
      <span className="font-heading text-h4 text-ink">{title}</span>
    </h2>
    <div className="flex flex-col gap-6">{children}</div>
  </Reveal>
);

/** Heading-and-body rows in a white card, hairlines between them. */
const Clauses = ({ items }: { items: { heading: string; body: string }[] }) => (
  <dl className="rounded-card bg-white px-8 py-2 max-md:px-6">
    {items.map((item) => (
      <div
        key={item.heading}
        className="grid grid-cols-[200px_1fr] gap-8 border-b border-line py-6 last:border-b-0 max-md:grid-cols-1 max-md:gap-2"
      >
        <dt className="font-heading text-body-l text-ink">{item.heading}</dt>
        <dd className="text-body-m text-slate">{item.body}</dd>
      </div>
    ))}
  </dl>
);

const RadioMark = ({ checked }: { checked: boolean }) => (
  <span
    className={`mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
      checked ? "border-ink" : "border-line"
    }`}
    aria-hidden
  >
    <span
      className={`size-2.5 rounded-full bg-ink transition-opacity duration-300 ${
        checked ? "opacity-100" : "opacity-0"
      }`}
    />
  </span>
);

const Spark = () => (
  <svg className="mt-1.5 size-3 shrink-0 text-brand" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z" />
  </svg>
);

const LockIcon = () => (
  <svg
    className="size-4 shrink-0 text-brand-soft"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3M12 14.5v2.5" />
  </svg>
);

const summaryLink =
  "font-medium text-paper underline decoration-brand-soft/50 underline-offset-4 transition-colors duration-300 hover:decoration-brand-soft";

/**
 * The checkout step for the Reset: choose a seat, read how it works and
 * how refunds are handled, agree, then leave for Stripe. The phase comes
 * from the server so the prices shown match the date of the request.
 */
export const ResetCheckout = ({ phase }: { phase: BookingPhase }) => {
  const [seatId, setSeatId] = useState(seatOptions[0].id);
  const [agreed, setAgreed] = useState(false);
  const [showError, setShowError] = useState(false);
  const agreeRef = useRef<HTMLInputElement>(null);
  const errorId = useId();

  const seat = seatOptions.find((option) => option.id === seatId) ?? seatOptions[0];
  const price = seatPriceFor(seat, phase);
  const tierLabel = phase === "early" && seat.early ? "Early bird" : "Standard";

  if (phase === "closed") {
    return (
      <Reveal className="mx-auto max-w-[720px] rounded-card bg-ink px-10 py-16 text-center text-paper max-md:px-6 max-md:py-12">
        <h2 className="text-h3">{resetCheckout.closed.title}</h2>
        <p className="mt-5 text-body-l text-paper/85">{resetCheckout.closed.body}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <DiagonalLink href={contactHref} className="text-paper hover:text-brand-soft">
            Write to us
          </DiagonalLink>
          <DiagonalLink href="/annual-reset" className="text-paper hover:text-brand-soft">
            Back to the Reset
          </DiagonalLink>
        </div>
      </Reveal>
    );
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!agreed) {
      setShowError(true);
      agreeRef.current?.focus();
      return;
    }
    if (price.stripeUrl) window.location.assign(price.stripeUrl);
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Take your seat"
      className="grid grid-cols-[1.3fr_1fr] items-start gap-12 max-lg:grid-cols-1 max-lg:gap-10"
    >
      {/* The three steps */}
      <div className="flex flex-col gap-14 max-md:gap-10">
        <Step number={resetCheckout.steps.seat.number} title={resetCheckout.steps.seat.title}>
          <EarlyBirdCountdown className="bg-white" />
          <fieldset>
            <legend className="sr-only">Choose your seat</legend>
            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              {seatOptions.map((option) => {
                const optionPrice = seatPriceFor(option, phase);
                const checked = option.id === seatId;
                return (
                  <label key={option.id} className="group relative flex cursor-pointer">
                    <input
                      type="radio"
                      name="seat"
                      value={option.id}
                      checked={checked}
                      onChange={() => setSeatId(option.id)}
                      className="peer sr-only"
                    />
                    <span
                      className={`flex w-full flex-col justify-between gap-8 rounded-card border bg-white p-6 transition-colors duration-300 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand ${
                        checked ? "border-ink" : "border-line group-hover:border-slate"
                      }`}
                    >
                      <span className="flex items-start justify-between gap-4">
                        <span className="flex flex-col gap-1">
                          <span className="font-heading text-h6 text-ink">{option.label}</span>
                          <span className="text-body-s text-slate">{option.note}</span>
                        </span>
                        <RadioMark checked={checked} />
                      </span>
                      <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-heading text-h4 leading-none text-brand-hot">
                          {optionPrice.price}
                        </span>
                        {phase === "early" && option.early && (
                          <span className="text-body-s text-slate">
                            {resetCheckout.earlyBirdNote.replace("{standard}", option.standard.price)}
                          </span>
                        )}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        </Step>

        <Step number={resetCheckout.steps.terms.number} title={resetCheckout.steps.terms.title}>
          <Clauses items={resetCheckout.terms} />
        </Step>

        <Step number={resetCheckout.steps.refunds.number} title={resetCheckout.steps.refunds.title}>
          <Clauses items={resetCheckout.refunds} />
          <p className="flex flex-wrap items-center gap-x-8 gap-y-3 text-body-s text-slate">
            <span>These sit alongside the site&rsquo;s</span>
            <DiagonalLink href="/terms" className="text-body-s">
              Terms
            </DiagonalLink>
            <DiagonalLink href="/privacy-policy" className="text-body-s">
              Privacy Policy
            </DiagonalLink>
          </p>
        </Step>
      </div>

      {/* Summary, agreement and the way to Stripe */}
      <Reveal delay={0.1} className="sticky top-28 max-lg:static">
        <aside className="rounded-card bg-ink p-8 text-paper max-md:p-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="font-heading text-body-s tracking-[0.2em] text-mute uppercase">
                Your seat
              </p>
              <h2 className="mt-4 font-heading text-h5 text-paper">{reset.name}</h2>
              <ul className="mt-4 flex flex-col gap-1 text-body-m text-paper/85">
                <li>{reset.dates}</li>
                <li>
                  {reset.time}, {reset.format.toLowerCase()}
                </li>
              </ul>
            </div>
            {/* The Reset's figure from the cover art, cropped to the drawing. */}
            <Image
              src="/images/reset/reset-seat-figure.webp"
              alt=""
              width={640}
              height={800}
              sizes="140px"
              className="aspect-[4/5] w-[140px] shrink-0 rounded-2xl object-cover ring-1 ring-brand-soft/40 max-md:w-[104px]"
            />
          </div>

          <div className="mt-6 border-t border-paper/15 pt-6">
            <p className="text-body-s text-mute">Included</p>
            <ul className="mt-3 flex flex-col gap-2">
              {reset.included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-body-s text-paper/85">
                  <Spark />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-body-xs text-mute">{reset.includedNote}</p>
          </div>

          <div className="mt-6 flex items-end justify-between gap-4 border-t border-paper/15 pt-6">
            <div>
              <p className="font-heading text-body-l text-paper">{seat.label}</p>
              <p className="mt-1 text-body-s text-mute">{tierLabel}</p>
            </div>
            <p
              className="font-heading text-h3 leading-none whitespace-nowrap text-brand"
              aria-live="polite"
            >
              {price.price}
            </p>
          </div>

          <div className="mt-8 border-t border-paper/15 pt-6">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                ref={agreeRef}
                type="checkbox"
                name="agree"
                checked={agreed}
                onChange={(event) => {
                  setAgreed(event.target.checked);
                  if (event.target.checked) setShowError(false);
                }}
                aria-invalid={showError || undefined}
                aria-describedby={showError ? errorId : undefined}
                className="peer sr-only"
              />
              <span
                className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors duration-300 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand-soft ${
                  agreed ? "border-brand-soft bg-brand-soft" : "border-paper/50 bg-transparent"
                }`}
                aria-hidden
              >
                <svg
                  className={`size-3.5 text-ink transition-opacity duration-200 ${agreed ? "opacity-100" : "opacity-0"}`}
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3.5 8.5 3 3 6-6" />
                </svg>
              </span>
              <span className="text-body-m text-paper">{resetCheckout.agreement}</span>
            </label>
            {showError && (
              <p id={errorId} role="alert" className="mt-3 text-body-s text-gold-light">
                {resetCheckout.agreementError}
              </p>
            )}
          </div>

          <div className="mt-8">
            {price.stripeUrl ? (
              <button
                type="submit"
                className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-pill bg-brand-soft px-5 py-3 text-body-m font-medium whitespace-nowrap text-ink transition-all duration-350 hover:rounded-2xl hover:bg-gold-light"
              >
                {resetCheckout.continueLabel}
                <Image src="/images/button-iconm-01.svg" alt="" width={16} height={16} className="size-4" />
              </button>
            ) : (
              <p className="rounded-2xl border border-paper/20 px-5 py-4 text-body-s text-paper/85">
                {resetCheckout.awaitingLink}{" "}
                <Link href={contactHref} className={summaryLink}>
                  Write to us
                </Link>
              </p>
            )}
            <p className="mt-4 flex items-start gap-2 text-body-s text-mute">
              <LockIcon />
              <span>{resetCheckout.stripeNote.replaceAll("{provider}", seat.provider)}</span>
            </p>
          </div>

          <p className="mt-6 border-t border-paper/15 pt-5 text-body-s text-mute">
            Questions before you book?{" "}
            <Link href={contactHref} className={summaryLink}>
              {SEAT_CONTACT_EMAIL ?? "Write to us"}
            </Link>
          </p>
        </aside>
      </Reveal>
    </form>
  );
};
