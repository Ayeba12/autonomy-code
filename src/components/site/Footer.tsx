import Link from "next/link";
import { footerColumns, socialLinks } from "./nav-links";
import { NewsletterForm } from "./NewsletterForm";

export const Footer = () => (
  <footer className="p-4 max-md:p-2">
    <div className="relative overflow-hidden rounded-card bg-ink px-16 pt-20 pb-8 text-white max-lg:px-8 max-md:px-5 max-md:pt-12">
      <div
        aria-hidden
        className="absolute top-10 left-1/3 size-40 rounded-full bg-brand opacity-40 blur-[70px]"
      />
      <div className="relative flex justify-between gap-16 max-lg:flex-col">
        <div className="max-w-md">
          <h2 className="text-h3">One calm letter, when it is worth your time.</h2>
          <div className="mt-8 border-t border-coal">
            <NewsletterForm />
          </div>
          <ul className="mt-10 flex flex-col gap-1">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-coal py-3 text-body-m text-mute transition-colors duration-300 hover:text-white"
                >
                  {social.label}
                  <svg
                    className="size-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
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
          </div>
        </div>
      </div>
    </div>
  </footer>
);
