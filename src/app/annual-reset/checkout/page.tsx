import type { Metadata } from "next";
import { connection } from "next/server";
import { Reveal } from "@/components/motion/Reveal";
import { ResetCheckout } from "@/components/reset/ResetCheckout";
import { Navbar } from "@/components/site/Navbar";
import { DiagonalLink } from "@/components/ui/DiagonalLink";
import { bookingPhase, reset, resetCheckout } from "@/content/reset";

export const metadata: Metadata = {
  title: "Take your seat",
  description:
    "Choose your seat at The Annual Reset 4.0, read how it works and how refunds are handled, then continue to secure payment.",
  robots: { index: false, follow: false },
};

/**
 * /annual-reset/checkout — the step between "Take your seat" and Stripe.
 * Rendered per request so the price shown follows the booking phase on
 * the day (early bird, standard, closed) rather than the day of the build.
 */
const ResetCheckoutPage = async () => {
  await connection();
  const phase = bookingPhase(new Date());

  return (
    <>
      <Navbar tone="dark" />
      <main className="bg-paper">
        <section className="pt-40 pb-24 max-lg:pt-32 max-lg:pb-16 max-md:pt-28 max-md:pb-12">
          <div className="container-site">
            <Reveal className="flex flex-col items-start gap-6">
              <DiagonalLink href="/annual-reset" className="text-body-m">
                {reset.name}
              </DiagonalLink>
              <div>
                <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">
                  Taking your seat
                </p>
                <h1 className="mt-4 text-h2">{resetCheckout.title}</h1>
                <p className="mt-5 max-w-[640px] text-body-xl text-slate">{resetCheckout.lead}</p>
              </div>
            </Reveal>

            <div className="mt-14 max-md:mt-10">
              <ResetCheckout phase={phase} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ResetCheckoutPage;
