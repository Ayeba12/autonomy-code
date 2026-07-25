import type { Metadata } from "next";
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

/** /contact — one contact route + newsletter capture (content.md §4.12). */
const ContactPage = () => (
  <>
    <Navbar tone="dark" />
    <main className="bg-paper">
      {/* Hero */}
      <section className="pt-48 pb-12 max-lg:pt-40 max-md:pt-32 max-md:pb-8">
        <div className="container-site">
          <Reveal className="max-w-[720px]">
            <div className="gold-thread w-16" />
            <h1 className="mt-8 text-display">Say hello.</h1>
            <p className="mt-6 max-w-[600px] text-body-xl text-smoke">
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
        </div>
      </section>

      {/* Form */}
      <section className="pb-20 max-md:pb-12">
        <div className="container-site">
          <div className="max-w-[640px]">
            <ContactForm />
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
