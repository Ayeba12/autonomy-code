"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { megaColumns, moreLinks, primaryLinks } from "./nav-links";

interface NavbarProps {
  /** "light" = white links (over dark heroes); "dark" = ink links (light pages). */
  tone?: "light" | "dark";
}

const NAV_SPLIT = 3;

export const Navbar = ({ tone = "light" }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const linkColor = tone === "light" ? "text-white" : "text-ink";
  const leftLinks = primaryLinks.slice(0, NAV_SPLIT);
  const rightLinks = primaryLinks.slice(NAV_SPLIT);

  const navLink = (link: { label: string; href: string }) => (
    <li key={link.href}>
      <Link
        href={link.href}
        className="text-body-m font-medium transition-opacity duration-300 hover:opacity-70"
      >
        {link.label}
      </Link>
    </li>
  );

  return (
    <header className="absolute inset-x-0 top-0 z-50 pt-8 max-lg:pt-6">
      <div className="container-site">
        <nav className="flex items-center justify-between gap-6" aria-label="Main">
          <Link href="/" aria-label="The Autonomy Code — home">
            <Logo tone={tone} />
          </Link>

          <ul className={`flex items-center gap-6 max-xl:hidden ${linkColor}`}>
            {leftLinks.map(navLink)}

            {/* "More" sits mid-list; hover opens the Stodio-style mega panel */}
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
              <div className="invisible absolute left-1/2 z-50 -translate-x-1/2 pt-6 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="flex gap-10 rounded-card border border-line bg-white p-8 shadow-2xl">
                  {megaColumns.map((column) => (
                    <div key={column.title} className="w-64">
                      <p className="pb-3 text-body-s tracking-wide text-smoke uppercase">
                        {column.title}
                      </p>
                      <ul className="flex flex-col gap-1">
                        {column.links.map((page) => (
                          <li key={`${column.title}-${page.href}`}>
                            <Link
                              href={page.href}
                              className="group/item flex items-center gap-3 rounded-xl p-2 text-body-m text-ink transition-colors duration-200 hover:bg-paper"
                            >
                              <Image
                                src={page.thumb}
                                alt=""
                                width={44}
                                height={34}
                                className="h-9 w-11 shrink-0 rounded-lg object-cover"
                              />
                              <span className="size-1.5 shrink-0 rounded-full bg-brand opacity-0 transition-opacity duration-200 group-hover/item:opacity-100" />
                              {page.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="flex w-80 flex-col justify-between rounded-2xl bg-paper p-5">
                    <div>
                      <p className="font-heading text-h6 text-ink">
                        One clear next step
                      </p>
                      <p className="mt-2 text-body-s text-smoke">
                        Twenty-five questions. Your pattern, your strained
                        pillar, and your first move.
                      </p>
                    </div>
                    <Button
                      href="/ownership-scan"
                      variant="brand"
                      arrow={false}
                      className="mt-5 w-full"
                    >
                      Take the Ownership Scan
                    </Button>
                  </div>
                </div>
              </div>
            </li>

            {rightLinks.map(navLink)}
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
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <span className="h-0.5 w-6 bg-current" />
              <span className="h-0.5 w-6 bg-current" />
              <span className="h-0.5 w-6 bg-current" />
            </button>
          </div>
        </nav>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 hidden flex-col bg-paper max-xl:flex">
          {/* Menu header: logo + close */}
          <div className="container-site flex items-center justify-between pt-6 pb-4">
            <Link
              href="/"
              aria-label="The Autonomy Code — home"
              onClick={() => setMobileOpen(false)}
            >
              <Logo tone="dark" />
            </Link>
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-paper-2"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <svg
                className="size-5"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <path d="m5 5 10 10M15 5 5 15" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <ul className="container-site flex flex-col pt-4 pb-10">
              {primaryLinks.map((link, i) => (
                <li key={link.href} className={i === 0 ? "" : "border-t border-line"}>
                  <Link
                    href={link.href}
                    className="block py-4 font-heading text-h5 text-ink transition-colors hover:text-brand"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-6">
                <p className="pb-2 text-body-s tracking-wide text-smoke uppercase">
                  More
                </p>
                <ul className="flex flex-col">
                  {moreLinks.map((page, i) => (
                    <li key={page.href} className={i === 0 ? "" : "border-t border-line"}>
                      <Link
                        href={page.href}
                        className="block py-3 text-body-l text-ink transition-colors hover:text-brand"
                        onClick={() => setMobileOpen(false)}
                      >
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/* Pinned action */}
          <div className="container-site border-t border-line py-5">
            <Button
              href="/ownership-scan"
              variant="brand"
              arrow={false}
              className="w-full"
            >
              Take the Ownership Scan
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
