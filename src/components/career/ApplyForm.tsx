"use client";

import Image from "next/image";
import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-body-m text-white placeholder:text-mute";

const labelClasses = "text-body-m font-medium text-white";

const RequiredMark = () => (
  <span className="text-brand-hot" aria-hidden>
    *
  </span>
);

/**
 * Job application card (career-detail.md §3b). Fields follow the template
 * verbatim except two knowing fixes: the captured duplicate `Name` field is
 * split into First-Name / Last-Name, and the leftover "Reserve a table"
 * submit value is replaced with the visible "Apply Now" label. Email keeps
 * the template's type="text" quirk, softened with inputMode/autocomplete.
 * Client-side fake submit until the CMS/API is wired (NewsletterForm pattern).
 */
export const ApplyForm = () => {
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("submitting");
    // Placeholder: swap for a real endpoint (e.g. WP form plugin / Resend).
    window.setTimeout(() => setState("success"), 600);
  };

  if (state === "success") {
    return (
      <div className="rounded-card bg-coal p-8 max-md:p-5">
        <p className="text-body-l text-white" role="status">
          Thank you! Your submission has been received!
        </p>
      </div>
    );
  }

  const submitLabel = (
    <span className="flex items-center gap-2">
      <span>{state === "submitting" ? "Please wait..." : "Apply Now"}</span>
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
    <div className="rounded-card bg-coal p-8 max-md:p-5">
      <h2 className="text-h3 text-white">Apply Now</h2>
      {/* Template demo subline — static across all openings (career-detail.md §3b). */}
      <p className="mt-2 text-body-xl text-mute">
        Senior UI/UX Designer, London / Manchester (Hybrid), Full-time
      </p>

      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={handleSubmit}
        aria-label="Job application"
      >
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="flex flex-col gap-2">
            <label htmlFor="First-Name" className={labelClasses}>
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
            <label htmlFor="Last-Name" className={labelClasses}>
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

        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="flex flex-col gap-2">
            <label htmlFor="Email" className={labelClasses}>
              Email <RequiredMark />
            </label>
            <input
              id="Email"
              name="Email"
              type="text"
              inputMode="email"
              required
              maxLength={256}
              placeholder="Enter Your Email"
              autoComplete="email"
              className={inputClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Phone-Number" className={labelClasses}>
              Phone Number <RequiredMark />
            </label>
            <input
              id="Phone-Number"
              name="Phone-Number"
              type="tel"
              required
              maxLength={256}
              placeholder="Phone Number"
              autoComplete="tel"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="Subject" className={labelClasses}>
            Subject
            <RequiredMark />
          </label>
          <input
            id="Subject"
            name="Subject"
            type="text"
            required
            maxLength={256}
            placeholder="Enter your subject"
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          {/* Template quirk kept: asterisk shown, but the field is not required. */}
          <label htmlFor="field" className={labelClasses}>
            Message
            <RequiredMark />
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

        <button
          type="submit"
          disabled={state === "submitting"}
          className="group relative mt-2 inline-flex min-h-11 items-center justify-center overflow-hidden rounded-pill bg-brand px-5 py-3 text-body-m font-medium text-white transition-all duration-350 hover:rounded-2xl disabled:opacity-60"
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

        {state === "error" && (
          <p className="text-body-s text-brand-hot" role="alert">
            Oops! Something went wrong while submitting the form.
          </p>
        )}
      </form>
    </div>
  );
};
