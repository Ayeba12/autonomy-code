"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl bg-white px-4 py-3 text-body-m text-ink placeholder:text-mute";

const RequiredMark = () => (
  <span className="text-brand" aria-hidden>
    *
  </span>
);

/**
 * Contact form (contact.md §1): First/Last Name + Email required,
 * optional message. Client-side fake submit until the CMS/API is wired
 * (same pattern as NewsletterForm).
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
        className="mt-8 rounded-2xl bg-white px-6 py-5 text-body-m"
        role="status"
      >
        Thank you! Your submission has been received!
      </p>
    );
  }

  const submitLabel = (
    <span className="flex items-center gap-2">
      <span>{state === "submitting" ? "Please wait..." : "Submit Message"}</span>
      <Image
        src="/images/button-icon-white.svg"
        alt=""
        width={16}
        height={16}
        className="size-4"
      />
    </span>
  );

  return (
    <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit} aria-label="Contact">
      <Reveal delay={0.1} y={30}>
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="flex flex-col gap-2">
            <label htmlFor="First-Name" className="text-body-m font-medium">
              First Name <RequiredMark />
            </label>
            <input
              id="First-Name"
              name="First-Name"
              type="text"
              required
              maxLength={256}
              placeholder="Enter your name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Last-Name" className="text-body-m font-medium">
              Last Name <RequiredMark />
            </label>
            <input
              id="Last-Name"
              name="Last-Name"
              type="text"
              required
              maxLength={256}
              placeholder="Enter your name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.18} y={30}>
        <div className="flex flex-col gap-2">
          <label htmlFor="Email" className="text-body-m font-medium">
            Email <RequiredMark />
          </label>
          <input
            id="Email"
            name="Email"
            type="email"
            required
            maxLength={256}
            placeholder="Enter Your Email"
            autoComplete="email"
            className={inputClasses}
          />
        </div>
      </Reveal>

      <Reveal delay={0.26} y={30}>
        <div className="flex flex-col gap-2">
          <label htmlFor="field" className="text-body-m font-medium">
            Write Message
          </label>
          <textarea
            id="field"
            name="field"
            maxLength={5000}
            rows={5}
            placeholder="How can we help you? Feel free to get in touch!"
            className={`${inputClasses} resize-none`}
          />
        </div>
      </Reveal>

      <Reveal delay={0.34} y={30}>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-pill bg-ink px-5 py-3 text-body-m font-medium text-white transition-all duration-350 hover:rounded-2xl disabled:opacity-60"
        >
          <span className="relative block overflow-hidden">
            <span className="block transition-transform duration-350 ease-out group-hover:-translate-y-full">
              {submitLabel}
            </span>
            <span
              aria-hidden
              className="absolute inset-0 block translate-y-full transition-transform duration-350 ease-out group-hover:translate-y-0"
            >
              {submitLabel}
            </span>
          </span>
        </button>
      </Reveal>

      {state === "error" && (
        <p className="text-body-s text-brand" role="alert">
          Oops! Something went wrong while submitting the form.
        </p>
      )}
    </form>
  );
};
