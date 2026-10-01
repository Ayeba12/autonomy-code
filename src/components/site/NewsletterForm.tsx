"use client";

import { useId, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

/** Newsletter sign-up (footer and Writing page). Posts to /api/newsletter, which adds the address to SendFox. */
export const NewsletterForm = () => {
  const [state, setState] = useState<FormState>("idle");
  // The form appears twice on the Writing page, so ids are per instance.
  const id = useId();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setState("submitting");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("newsletter-email"),
          website: data.get("website"),
        }),
      });
      setState(response.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <p className="rounded-2xl border border-coal px-6 py-4 text-body-m text-white">
        Welcome. You are on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Newsletter">
      {/* Honeypot: hidden from people, tempting to scripts. */}
      <div className="hidden" aria-hidden>
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex h-14 items-center justify-between rounded-full border border-line/40 pl-5 pr-2 transition-all duration-300 hover:rounded-2xl focus-within:border-line">
        <label htmlFor={`${id}-email`} className="sr-only">
          Email address
        </label>
        <input
          id={`${id}-email`}
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
          className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-brand px-5 font-heading text-body-s text-white transition-colors duration-300 hover:bg-brand-hot disabled:opacity-60"
        >
          {state === "submitting" ? "Please wait..." : "Subscribe"}
        </button>
      </div>
      {state === "error" && (
        <p className="mt-3 text-body-s text-gold-light" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};
