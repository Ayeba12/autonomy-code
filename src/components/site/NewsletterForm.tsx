"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

/** Footer newsletter form (client-side only until the CMS/API is wired). */
export const NewsletterForm = () => {
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("submitting");
    // Placeholder: swap for a real endpoint (e.g. WP newsletter plugin / Resend).
    window.setTimeout(() => setState("success"), 600);
  };

  if (state === "success") {
    return (
      <p className="rounded-2xl border border-coal px-6 py-4 text-body-m text-white">
        Thank you! Your submission has been received!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Newsletter">
      <div className="flex h-14 items-center justify-between rounded-full border border-line/40 pl-5 pr-2 transition-all duration-300 hover:rounded-2xl focus-within:border-line">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="newsletter-email"
          required
          maxLength={256}
          placeholder="Enter your email"
          className="w-full bg-transparent text-body-m text-white outline-none placeholder:text-mute"
        />
        <button
          type="submit"
          disabled={state === "submitting"}
          className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-brand-hot px-5 font-heading text-body-s text-white transition-colors duration-300 hover:bg-brand disabled:opacity-60"
        >
          {state === "submitting" ? "Please wait..." : "SUBSCRIBE"}
        </button>
      </div>
      {state === "error" && (
        <p className="mt-3 text-body-s text-brand-hot" role="alert">
          Oops! Something went wrong while submitting the form.
        </p>
      )}
    </form>
  );
};
