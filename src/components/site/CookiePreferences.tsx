"use client";

import { useSyncExternalStore } from "react";
import {
  CONSENT_EVENT,
  readConsent,
  writeConsent,
  type ConsentChoice,
} from "./cookie-consent-store";

const LABELS: Record<ConsentChoice, string> = {
  all: "Accept all",
  essential: "Essential only",
};

const subscribe = (onChange: () => void) => {
  window.addEventListener(CONSENT_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_EVENT, onChange);
};

/** Server snapshot: undefined = "still hydrating", renders an ellipsis. */
const serverSnapshot = () => undefined;

/** Current-choice card for the /cookies page, always changeable. */
export const CookiePreferences = () => {
  const choice = useSyncExternalStore<ConsentChoice | null | undefined>(
    subscribe,
    readConsent,
    serverSnapshot,
  );

  return (
    <div className="rounded-card border border-line bg-white p-7 max-md:p-5">
      <p className="text-body-m text-smoke" aria-live="polite">
        Your current choice:{" "}
        <strong className="font-semibold text-ink">
          {choice === undefined ? "…" : choice ? LABELS[choice] : "not made yet"}
        </strong>
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        {(Object.keys(LABELS) as ConsentChoice[]).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => writeConsent(option)}
            aria-pressed={choice === option}
            className={`min-h-11 rounded-pill px-5 py-2.5 text-body-m font-medium whitespace-nowrap transition-all duration-300 hover:rounded-2xl ${
              choice === option
                ? "bg-ink text-white"
                : "border border-coal text-ink hover:bg-paper"
            }`}
          >
            {LABELS[option]}
          </button>
        ))}
      </div>
      <p className="mt-4 text-body-s text-smoke">
        You can change this whenever you like. The choice is stored on your
        device, not on our servers.
      </p>
    </div>
  );
};
