"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

type FormState = "idle" | "submitting" | "success" | "error";

interface SpeakingEnquiryFormProps {
  /** Format names from content.getSpeaking().formats. */
  formats: string[];
}

const inputClasses =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-body-m text-ink placeholder:text-mute";

const RequiredMark = () => (
  <span className="text-brand" aria-hidden>
    *
  </span>
);

/**
 * Speaking enquiry form (content.md §4.11): name, email, organisation,
 * event date, format, and a few lines about the room. Posts to
 * /api/speaking, which emails the practice inbox and sends the host a
 * confirmation.
 */
export const SpeakingEnquiryForm = ({ formats }: SpeakingEnquiryFormProps) => {
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setState("submitting");
    try {
      const response = await fetch("/api/speaking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          organisation: data.get("organisation"),
          eventDate: data.get("event-date"),
          format: data.get("format"),
          aboutTheRoom: data.get("about-the-room"),
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
      <p
        className="rounded-2xl border border-line bg-white px-6 py-5 text-body-m"
        role="status"
      >
        Thank you. We will reply in writing, and a copy of your enquiry is on its way to your inbox.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
      aria-label="Speaking enquiry"
    >
      {/* Honeypot: hidden from people, tempting to scripts. */}
      <div className="hidden" aria-hidden>
        <label htmlFor="enquiry-website">Website</label>
        <input id="enquiry-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Reveal y={30}>
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="flex flex-col gap-2">
            <label htmlFor="enquiry-name" className="text-body-m font-medium">
              Name <RequiredMark />
            </label>
            <input
              id="enquiry-name"
              name="name"
              type="text"
              required
              maxLength={256}
              placeholder="Your name"
              autoComplete="name"
              className={inputClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="enquiry-email" className="text-body-m font-medium">
              Email <RequiredMark />
            </label>
            <input
              id="enquiry-email"
              name="email"
              type="email"
              required
              maxLength={256}
              placeholder="Your email"
              autoComplete="email"
              className={inputClasses}
            />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08} y={30}>
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="enquiry-organisation"
              className="text-body-m font-medium"
            >
              Organisation
            </label>
            <input
              id="enquiry-organisation"
              name="organisation"
              type="text"
              maxLength={256}
              placeholder="Company, community, or event"
              autoComplete="organization"
              className={inputClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="enquiry-date" className="text-body-m font-medium">
              Event date
            </label>
            <input
              id="enquiry-date"
              name="event-date"
              type="date"
              className={inputClasses}
            />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.16} y={30}>
        <div className="flex flex-col gap-2">
          <label htmlFor="enquiry-format" className="text-body-m font-medium">
            Format
          </label>
          <div className="relative">
            <select
              id="enquiry-format"
              name="format"
              defaultValue=""
              className={`${inputClasses} appearance-none pr-10`}
            >
              <option value="" disabled>
                Select a format
              </option>
              {formats.map((format) => (
                <option key={format} value={format}>
                  {format}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute top-1/2 right-4 size-3 -translate-y-1/2 text-smoke"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden
            >
              <path d="m2 4 4 4 4-4" />
            </svg>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.24} y={30}>
        <div className="flex flex-col gap-2">
          <label htmlFor="enquiry-room" className="text-body-m font-medium">
            About the room <RequiredMark />
          </label>
          <textarea
            id="enquiry-room"
            name="about-the-room"
            required
            maxLength={5000}
            rows={5}
            placeholder="A few lines about the audience, the occasion, and what you hope the room leaves with."
            className={`${inputClasses} resize-none`}
          />
        </div>
      </Reveal>

      <Reveal delay={0.32} y={30}>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex min-h-11 items-center justify-center rounded-pill bg-brand px-6 py-3 text-body-m font-medium text-white transition-all duration-350 hover:rounded-2xl hover:bg-brand-hot disabled:opacity-60"
        >
          {state === "submitting" ? "Please wait..." : "Enquire to book"}
        </button>
      </Reveal>

      {state === "error" && (
        <p className="text-body-s text-brand-hot" role="alert">
          Something went wrong while sending your enquiry. Please try again, or
          write to info@theautonomycode.com.
        </p>
      )}
    </form>
  );
};
