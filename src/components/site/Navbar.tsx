"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { dropdownColumns, primaryLinks } from "./nav-links";

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
            className={`font-heading text-2xl font-medium ${linkColor}`}
            aria-label="Stodio — home"
          >
            Stodio<sup className="text-brand">®</sup>
          </Link>

          <ul className={`flex items-center gap-8 max-lg:hidden ${linkColor}`}>
            {primaryLinks.slice(0, 3).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 text-body-m font-medium transition-opacity duration-300 hover:opacity-70"
                >
                  {link.label}
                  {"badge" in link && link.badge && (
                    <span className="rounded-full bg-brand px-1.5 py-0.5 text-body-xs text-white">
                      {link.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
            <li className="group relative">
              <button
                type="button"
                className="flex items-center gap-1.5 text-body-m font-medium transition-opacity duration-300 hover:opacity-70"
                aria-haspopup="true"
              >
                Pages
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
                <div className="flex gap-8 rounded-2xl bg-white p-8 shadow-xl">
                  {dropdownColumns.map((column, i) => (
                    <ul key={i} className="flex w-44 flex-col gap-1">
                      {column.map((page) => (
                        <li key={page.label}>
                          <Link
                            href={page.href}
                            className="group/item flex items-center gap-2.5 rounded-xl p-1.5 text-body-m text-ink transition-colors duration-200 hover:bg-paper"
                          >
                            <Image
                              src={page.thumb}
                              alt=""
                              width={36}
                              height={28}
                              className="h-7 w-9 rounded-md object-cover"
                            />
                            <span className="size-1.5 rounded-full bg-brand opacity-0 transition-opacity duration-200 group-hover/item:opacity-100" />
                            {page.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                  <div className="flex w-48 flex-col justify-center gap-3">
                    <Button
                      href="https://webflow.com/templates/designers/codexzel"
                      variant="brand"
                      external
                      arrow={false}
                    >
                      More Templates
                    </Button>
                    <Button
                      href="https://webflow.com/templates/html/stodio-website-template"
                      variant="dark"
                      external
                      arrow={false}
                    >
                      Get This Template
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            {primaryLinks.slice(3).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-body-m font-medium transition-opacity duration-300 hover:opacity-70"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Button
              href="https://meet.google.com/"
              variant="light"
              external
              avatarSrc="/images/button-image.webp"
              className="max-lg:hidden border border-line"
            >
              Book A Intro
            </Button>
            <button
              type="button"
              className={`hidden size-11 flex-col items-center justify-center gap-1.5 max-lg:flex ${linkColor}`}
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
        <div className="fixed inset-0 top-0 z-40 hidden overflow-y-auto bg-paper px-5 pt-24 pb-10 max-lg:block">
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
              <p className="px-4 pb-2 text-body-s text-smoke">Pages</p>
              <ul className="grid grid-cols-2 gap-1">
                {dropdownColumns.flat().map((page) => (
                  <li key={page.label}>
                    <Link
                      href={page.href}
                      className="block rounded-xl px-4 py-2 text-body-m text-ink transition-colors hover:bg-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-6 px-4">
              <Button href="https://meet.google.com/" variant="dark" external>
                Book A Intro
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
