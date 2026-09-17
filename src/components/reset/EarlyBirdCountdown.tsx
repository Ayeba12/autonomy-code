"use client";

import { useEffect, useState } from "react";
import { EARLY_BIRD_ENDS, bookingPhase, reset } from "@/content/reset";

const DEADLINE = new Date(EARLY_BIRD_ENDS).getTime();

interface CountdownProps {
  /** "light" for black grounds, "dark" for ivory and white. */
  tone?: "light" | "dark";
  /** One line, for the hero; the default is the four-unit row. */
  compact?: boolean;
  className?: string;
}

const split = (ms: number) => {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
};

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Counts down to the end of early bird (midnight UK, 1 November), then
 * says so and names the standard price instead. The clock starts after
 * mount so the server and the browser never disagree about the time.
 */
export const EarlyBirdCountdown = ({
  tone = "dark",
  compact = false,
  className = "",
}: CountdownProps) => {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const light = tone === "light";
  const label = light ? "text-mute" : "text-slate";
  const strong = light ? "text-paper" : "text-ink";
  const gold = light ? "text-brand-soft" : "text-brand-hot";
  const rule = light ? "border-paper/15" : "border-line";

  const early = reset.pricing.tiers[0].price;
  const standard = reset.pricing.tiers[1].price;
  const phase = now === null ? "early" : bookingPhase(new Date(now));

  if (phase === "closed") {
    return (
      <p className={`text-body-s ${label} ${className}`}>{reset.bookingCloses.replace("closes", "closed")}</p>
    );
  }

  if (phase === "standard") {
    return (
      <p className={`text-body-s ${label} ${className}`}>
        Early bird has ended. The standard seat is{" "}
        <span className={`font-heading ${strong}`}>{standard}</span>. {reset.bookingCloses}
      </p>
    );
  }

  const parts = now === null ? null : split(DEADLINE - now);
  const units: [string, string][] = [
    ["Days", parts ? String(parts.days) : "--"],
    ["Hours", parts ? pad(parts.hours) : "--"],
    ["Min", parts ? pad(parts.minutes) : "--"],
    ["Sec", parts ? pad(parts.seconds) : "--"],
  ];

  if (compact) {
    return (
      <p className={`flex flex-wrap items-baseline gap-x-2 text-body-s ${label} ${className}`} role="timer">
        <span>
          <span className={gold}>{early}</span> until 1 November, then {standard}. Early bird ends in
        </span>
        <span className={`font-heading tabular-nums ${strong}`}>
          {units.map(([unit, value]) => `${value}${unit[0].toLowerCase()}`).join(" ")}
        </span>
      </p>
    );
  }

  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-x-10 gap-y-5 rounded-card border ${rule} px-7 py-5 max-md:px-5 ${className}`}
      role="timer"
    >
      <div className="max-w-[260px]">
        <p className={`font-heading text-body-s tracking-[0.2em] uppercase ${label}`}>
          Early bird ends in
        </p>
        <p className={`mt-1.5 text-body-s ${label}`}>
          <span className={`font-heading text-body-l ${gold}`}>{early}</span> until midnight UK on
          1 November, then <span className={`font-heading ${strong}`}>{standard}</span>.
        </p>
      </div>
      {/* Four units in a row; on phones they share the full width evenly. */}
      <ol className="flex items-start gap-6 max-md:grid max-md:w-full max-md:grid-cols-4 max-md:gap-0">
        {units.map(([unit, value], i) => (
          <li
            key={unit}
            className={`flex flex-col items-center ${i > 0 ? `border-l ${rule} pl-6 max-md:pl-0` : ""}`}
          >
            <span className={`font-heading text-h3 leading-none tabular-nums ${strong}`}>{value}</span>
            <span className={`mt-2 font-heading text-body-xs tracking-[0.18em] uppercase ${label}`}>
              {unit}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};
