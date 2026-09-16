import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { DiagonalLink } from "@/components/ui/DiagonalLink";
import { reset, resetCheckout } from "@/content/reset";

export const metadata: Metadata = {
  title: "Your seat is taken",
  description: "Thank you for booking The Annual Reset 4.0. The joining link and the workbook follow by email.",
  robots: { index: false, follow: false },
};

/**
 * /annual-reset/thank-you — where Stripe sends people after payment.
 * Set it as the Payment Link's confirmation page in the Stripe dashboard.
 */
const ResetThankYouPage = () => (
  <>
    <Navbar tone="light" />
    <main className="bg-paper">
      <section className="pt-40 pb-24 max-lg:pt-32 max-lg:pb-16 max-md:pt-28 max-md:pb-12">
        <div className="container-site">
          <div className="rounded-card-lg bg-ink px-10 py-24 text-paper max-lg:py-16 max-md:rounded-card max-md:px-6 max-md:py-12">
            <div className="mx-auto flex max-w-[720px] flex-col items-center gap-8 text-center max-md:gap-6">
              <Reveal>
                <p className="font-heading text-body-s tracking-[0.2em] text-mute uppercase">
                  {reset.name}
                </p>
                <h1 className="mt-5 text-h2">{resetCheckout.thanks.title}</h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-body-xl text-paper/85">{resetCheckout.thanks.body}</p>
              </Reveal>
              <Reveal delay={0.2} className="w-full">
                <ul className="grid grid-cols-3 gap-6 border-t border-paper/15 pt-6 max-md:grid-cols-1 max-md:gap-3">
                  {resetCheckout.thanks.next.map((line, i) => (
                    <li key={line} className="flex items-baseline justify-center gap-3 max-md:justify-start">
                      <span className="font-heading text-body-s text-brand-soft">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-body-m text-paper/85">{line}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-body-s text-mute">{resetCheckout.thanks.note}</p>
              </Reveal>
            </div>
          </div>
          <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 max-md:mt-8">
            <DiagonalLink href="/">Back to the site</DiagonalLink>
            <DiagonalLink href="/writing">Read the writing</DiagonalLink>
          </Reveal>
        </div>
      </section>
    </main>
  </>
);

export default ResetThankYouPage;
