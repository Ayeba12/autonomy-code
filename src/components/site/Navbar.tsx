"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { moreLinks, primaryLinks } from "./nav-links";

interface NavbarProps {
  /** "light" = white links (over dark heroes); "dark" = ink links (light pages). */
  tone?: "light" | "dark";
}

export const Navbar = ({ tone = "light" }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const linkColor = tone === "light" ? "text-white" : "text-ink";

  return (
    <header className="absolute inset-x-0 top-0 z-50 pt-11 max-lg:pt-6">
      <div className="container-site">
        <nav className="flex items-center justify-between gap-6" aria-label="Main">
          <Link
            href="/"
            className={`font-heading text-xl font-medium tracking-wide ${linkColor}`}
            aria-label="The Autonomy Code — home"
          >
            The Autonomy Code
          </Link>

          <ul className={`flex items-center gap-6 max-xl:hidden ${linkColor}`}>
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-body-m font-medium transition-opacity duration-300 hover:opacity-70"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="group relative">
              <button
                type="button"
                className="flex items-center gap-1.5 text-body-m font-medium transition-opacity duration-300 hover:opacity-70"
                aria-haspopup="true"
              >
                More
                <svg
                  className="size-3 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d="m2 4 4 4 4-4" />
                </svg>
              </button>
              <div className="invisible absolute left-1/2 z-50 -translate-x-1/2 pt-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <ul className="w-56 rounded-2xl border border-line bg-white p-2 shadow-xl">
                  {moreLinks.map((page) => (
                    <li key={page.href} className="border-b border-line last:border-b-0">
                      <Link
                        href={page.href}
                        className="block rounded-lg px-4 py-2.5 text-body-m text-ink transition-colors duration-200 hover:text-brand"
                      >
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Button
              href="/ownership-scan"
              variant="brand"
              arrow={false}
              className="max-xl:hidden"
            >
              Take the Ownership Scan
            </Button>
            <button
              type="button"
              className={`hidden size-11 flex-col items-center justify-center gap-1.5 max-xl:flex ${linkColor}`}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span
                className={`h-0.5 w-6 bg-current transition-transform duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-6 bg-current transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-6 bg-current transition-transform duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-40 hidden overflow-y-auto bg-paper px-5 pt-24 pb-10 max-xl:block">
          <ul className="flex flex-col gap-2">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-h5 text-ink transition-colors hover:bg-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4 border-t border-line pt-4">
              <p className="px-4 pb-2 text-body-s text-smoke">More</p>
              <ul className="flex flex-col gap-1">
                {moreLinks.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="block rounded-xl px-4 py-2 text-body-l text-ink transition-colors hover:bg-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-6 px-4">
              <Button href="/ownership-scan" variant="brand" arrow={false}>
                Take the Ownership Scan
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
