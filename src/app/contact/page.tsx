import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { NewsletterForm } from "@/components/site/NewsletterForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions about the work? Write to dk@dkjonah.com or use the form. For stages, see Speaking. For everything else, the Scan is the door.",
};

const textLinkClasses =
  "font-medium text-ink underline decoration-brand/40 underline-offset-4 transition-colors duration-300 hover:decoration-brand";

/**
 * /contact — one contact route + newsletter capture (content.md §4.12,
 * Stodio contact pattern): "Say hello." form card beside a calm
 * full-height image column.
 */
const ContactPage = () => (
  <>
    <Navbar tone="dark" />
    <main className="bg-paper">
      {/* Form card beside a calm image column */}
      <section className="pt-40 pb-20 max-lg:pt-32 max-md:pt-28 max-md:pb-12">
        <div className="container-site">
          <div className="grid grid-cols-2 items-stretch gap-16 max-lg:gap-8 max-md:grid-cols-1">
            <div className="rounded-card bg-white p-10 max-lg:p-8 max-md:p-6">
              <Reveal>
                <h1 className="text-h2">Say hello.</h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-body-l text-smoke">
                  For questions about the work, write to{" "}
                  <a href="mailto:dk@dkjonah.com" className={textLinkClasses}>
                    dk@dkjonah.com
                  </a>{" "}
                  or use the form. For stages, see{" "}
                  <Link href="/speaking" className={textLinkClasses}>
                    Speaking
                  </Link>
                  . For everything else, the{" "}
                  <Link href="/ownership-scan" className={textLinkClasses}>
                    Scan
                  </Link>{" "}
                  is the door.
                </p>
              </Reveal>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <Reveal
              delay={0.1}
              className="relative min-h-[560px] overflow-hidden rounded-card max-md:aspect-[3/2] max-md:min-h-0"
            >
              <Image
                src="/images/looping-image1.webp"
                alt=""
                fill
                preload
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Newsletter — the page's one dark moment */}
      <section className="pb-24 max-md:pb-14">
        <div className="container-site">
          <Reveal>
            <div className="rounded-card bg-ink p-12 max-lg:p-8 max-md:p-6">
              <div className="flex items-center justify-between gap-10 max-lg:flex-col max-lg:items-start">
                <div className="max-w-md">
                  <h2 className="text-h4 text-white">
                    One calm letter, when it is worth your time.
                  </h2>
                  <p className="mt-3 text-body-m text-mute">No noise.</p>
                </div>
                <div className="w-full max-w-md">
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  </>
);

export default ContactPage;
