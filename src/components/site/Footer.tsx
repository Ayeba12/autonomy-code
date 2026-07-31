import Link from "next/link";
import { footerColumns, socialLinks } from "./nav-links";
import { NewsletterForm } from "./NewsletterForm";

/** Brand glyphs (24×24, fill) keyed by the labels in nav-links socialLinks. */
const socialIcons: Record<string, string> = {
  Substack:
    "M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z",
  LinkedIn:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565v11.452z",
  TikTok:
    "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  YouTube:
    "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
};

export const Footer = () => (
  <footer className="p-4 max-md:p-2">
    <div className="relative overflow-hidden rounded-card bg-ink px-16 pt-20 pb-8 text-white max-lg:px-8 max-md:px-5 max-md:pt-12">
      <div
        aria-hidden
        className="absolute top-10 left-1/3 size-40 rounded-full bg-brand opacity-40 blur-[70px]"
      />
      <div className="relative flex justify-between gap-16 max-lg:flex-col">
        <div className="max-w-md">
          <h2 className="text-h3">One calm letter that is worth your time.</h2>
          <div className="mt-8 border-t border-coal">
            <NewsletterForm />
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex items-center gap-2 rounded-xl bg-coal px-4 py-3 text-mute transition-colors duration-300 hover:bg-brand hover:text-white"
                >
                  <svg
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d={socialIcons[social.label]} />
                  </svg>
                  <svg
                    className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden
                  >
                    <path d="M3 13 13 3M5 3h8v8" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid max-w-[650px] flex-1 grid-cols-3 gap-8 max-md:grid-cols-2">
          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <p className="font-heading text-body-l text-white">{column.title}</p>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-l text-mute transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Link
        href="/"
        aria-label="The Autonomy Code — home"
        className="mt-20 block max-md:mt-12"
      >
        {/* textLength stretches the wordmark edge-to-edge at every width */}
        <svg
          viewBox="0 0 1000 92"
          className="w-full"
          role="img"
          aria-label="THE AUTONOMY CODE"
        >
          <text
            x="0"
            y="76"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fontSize="88"
            fontWeight="500"
            className="fill-white font-heading"
          >
            THE AUTONOMY CODE
          </text>
        </svg>
        <span className="mt-3 block text-body-s text-mute">
          A NoGraGra Practice · DK Jonah
        </span>
      </Link>
      <div className="pt-6">
        <div className="flex items-center justify-between gap-4 max-md:flex-col max-md:items-start">
          <p className="text-body-l text-mute">Copyright © The Autonomy Code</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-body-l text-mute transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <span aria-hidden className="h-4 w-px bg-coal" />
            <Link
              href="/terms"
              className="text-body-l text-mute transition-colors hover:text-white"
            >
              Terms
            </Link>
            <span aria-hidden className="h-4 w-px bg-coal" />
            <Link
              href="/cookies"
              className="text-body-l text-mute transition-colors hover:text-white"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
