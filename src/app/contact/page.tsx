import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/site/Navbar";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions about the work? Write to dk@dkjonah.com or use the form. For stages, see Speaking. For everything else, the Scan is the door.",
};

const textLinkClasses =
  "font-medium text-ink underline decoration-brand/40 underline-offset-4 transition-colors duration-300 hover:decoration-brand";

/**
 * /contact — one contact route (content.md §4.12, Stodio contact
 * pattern): "Say hello." form card beside a calm full-height image
 * column. Newsletter capture lives in the footer only.
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
                src="/images/contact-phone.webp"
                alt="A vintage black telephone handset hanging by its cord against a plain wall"
                fill
                preload
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  </>
);

export default ContactPage;
