"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import {
  CONSENT_EVENT,
  readConsent,
  writeConsent,
  type ConsentChoice,
} from "./cookie-consent-store";

/**
 * Calm cookie banner: equal-weight choices, no pressure, shown once.
 * Reappears only if the /cookies page asks for a fresh choice.
 */
export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (readConsent() === null) {
      const timer = window.setTimeout(() => setVisible(true), 1200);
      return () => window.clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const onChange = () => setVisible(readConsent() === null);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!visible) return null;

  const choose = (choice: ConsentChoice) => {
    writeConsent(choice);
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className={`fixed inset-x-0 bottom-4 z-40 px-4 ${
        reduced ? "" : "animate-[consent-rise_0.6s_cubic-bezier(0.25,0.1,0.25,1)_both]"
      }`}
    >
      <div className="mx-auto flex max-w-[820px] items-center justify-between gap-6 rounded-card border border-line bg-white p-6 shadow-2xl max-md:flex-col max-md:items-start max-md:gap-4 max-md:p-5">
        <div className="max-w-[400px]">
          <p className="font-heading text-h6 text-ink">A quiet note on cookies.</p>
          <p className="mt-1.5 text-body-s text-smoke">
            A few essential cookies make this site work. Anything more runs
            only with your permission, and nothing here tracks you for
            advertising.{" "}
            <Link
              href="/cookies"
              className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brand"
            >
              Read the cookie page
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3 max-md:w-full max-md:flex-col">
          <button
            type="button"
            onClick={() => choose("all")}
            className="min-h-11 rounded-pill bg-brand px-5 py-2.5 text-body-m font-medium whitespace-nowrap text-white transition-all duration-300 hover:rounded-2xl hover:bg-brand-hot max-md:w-full"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={() => choose("essential")}
            className="min-h-11 rounded-pill border border-coal px-5 py-2.5 text-body-m font-medium whitespace-nowrap text-ink transition-all duration-300 hover:rounded-2xl hover:bg-paper max-md:w-full"
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
};
