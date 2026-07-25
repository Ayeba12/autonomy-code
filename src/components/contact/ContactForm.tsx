"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-body-m text-ink placeholder:text-mute";

const RequiredMark = () => (
  <span className="text-brand" aria-hidden>
    *
  </span>
);

/**
 * Simplified contact form (content.md §4.12): first name, last name,
 * email, optional message. Client-side fake submit until the endpoint is
 * wired (same pattern as NewsletterForm).
 */
export const ContactForm = () => {
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("submitting");
    // Placeholder: swap for a real endpoint (e.g. WP form plugin / Resend).
    window.setTimeout(() => setState("success"), 600);
  };

  if (state === "success") {
    return (
      <p
        className="rounded-2xl border border-line bg-white px-6 py-5 text-body-m"
        role="status"
      >
        Thank you! Your message has been received.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
      aria-label="Contact"
    >
      <Reveal y={30}>
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-first-name"
              className="text-body-m font-medium"
            >
              First name <RequiredMark />
            </label>
            <input
              id="contact-first-name"
              name="first-name"
              type="text"
              required
              maxLength={256}
              placeholder="Your first name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-last-name"
              className="text-body-m font-medium"
            >
              Last name <RequiredMark />
            </label>
            <input
              id="contact-last-name"
              name="last-name"
              type="text"
              required
              maxLength={256}
              placeholder="Your last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08} y={30}>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="text-body-m font-medium">
            Email <RequiredMark />
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={256}
            placeholder="Your email"
            autoComplete="email"
            className={inputClasses}
          />
        </div>
      </Reveal>

      <Reveal delay={0.16} y={30}>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className="text-body-m font-medium">
            Message <span className="text-body-s text-smoke">(optional)</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            maxLength={5000}
            rows={5}
            placeholder="What would you like to ask?"
            className={`${inputClasses} resize-none`}
          />
        </div>
      </Reveal>

      <Reveal delay={0.24} y={30}>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex min-h-11 items-center justify-center rounded-pill bg-brand px-6 py-3 text-body-m font-medium text-white transition-all duration-350 hover:rounded-2xl hover:bg-brand-hot disabled:opacity-60"
        >
          {state === "submitting" ? "Please wait..." : "Send message"}
        </button>
      </Reveal>

      {state === "error" && (
        <p className="text-body-s text-brand-hot" role="alert">
          Something went wrong while sending your message. Please try again, or
          write to dk@dkjonah.com.
        </p>
      )}
    </form>
  );
};
