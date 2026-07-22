"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

const submitLabel = (
  <span className="flex items-center gap-2">
    <span>Enter Now</span>
    <Image
      src="/images/button-icon-white.svg"
      alt=""
      width={16}
      height={16}
      className="size-4"
    />
  </span>
);

/**
 * Centered password-protected card (401 spec). Presentational only —
 * submitting always shows the template's fail message; no real auth.
 */
export const PasswordForm = () => {
  const [failed, setFailed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFailed(true);
  };

  return (
    <div className="flex w-full max-w-[560px] flex-col items-center gap-6 rounded-card bg-white p-12 text-center max-md:p-6">
      <Image
        src="/images/password-pagfe-icon.svg"
        alt=""
        width={80}
        height={80}
        className="size-20"
      />
      <h1 className="text-h2">Password protected</h1>
      <label htmlFor="pass" className="text-body-m text-smoke">
        Lorem ipsum dolor sit amet consectetur vel pharetra nulla a varius
        accras et est nec elementum ut facilisi tortor mi.
      </label>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4" noValidate>
        <input
          id="pass"
          name="pass"
          type="password"
          maxLength={256}
          autoFocus
          placeholder="Enter your password"
          className="w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-body-m text-ink placeholder:text-mute"
        />
        <button
          type="submit"
          className="group relative inline-flex min-h-11 w-full items-center justify-center overflow-hidden rounded-pill bg-brand px-5 py-3 text-body-m font-medium text-white transition-all duration-350 hover:rounded-2xl"
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
        {failed && (
          <p role="alert" className="text-body-s font-medium text-brand">
            Incorrect password. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};
