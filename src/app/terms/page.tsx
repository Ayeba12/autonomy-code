import type { Metadata } from "next";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { LegalBlock, LegalList } from "@/components/utility/LegalBlock";
import { UtilityHero, UtilitySection } from "@/components/utility/UtilityHero";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "The terms of working with The Autonomy Code, including how money is handled: plainly, and before any work begins.",
};

/**
 * /terms — calm placeholder structure from the Coaching Services Master
 * Terms template (content.md §7). The money rules a visitor needs are
 * stated plainly; final wording awaits client sign-off.
 */
const TermsPage = () => (
  <>
    <Navbar tone="dark" />
    <main>
      <UtilitySection>
        <UtilityHero
          tag="Terms"
          title="Terms of Service"
          subline="How working together is agreed, paid for, and protected. Plain on purpose."
        />
        <div className="mx-auto flex max-w-[841px] flex-col gap-10">
          <LegalBlock heading="A note before you read">
            <p>
              These terms are the working version. The final wording is being
              settled with our legal review and will be confirmed here before
              launch. What will not change is the spirit of them: everything
              about money and commitment is shown to you plainly, before you
              decide, with no pressure and no surprises.
            </p>
          </LegalBlock>

          <LegalBlock heading="1. The agreement">
            <p>
              These terms govern the services offered by The NoGraGra Practice
              through The Autonomy Code: the Ownership Scan, SABI CORE, Legacy,
              and speaking engagements. Booking or paying for a service means
              you accept these terms as they stand on that date.
            </p>
          </LegalBlock>

          <LegalBlock heading="2. The services">
            <p>
              Each engagement is described on its own page, including exactly
              what is delivered and what it costs. Prices appear at the point
              of booking or application, never hidden, never negotiated on a
              call. Coaching and strategy work is not therapy, and it is not
              medical, legal, or financial advice.
            </p>
          </LegalBlock>

          <LegalBlock heading="3. Payment comes before work">
            <p>
              Every engagement is paid for before it begins. This is not a
              formality; it is how the practice protects both sides:
            </p>
            <LegalList
              items={[
                {
                  lead: "Clarity first:",
                  text: "the full price is shown before you commit, on the page, in writing.",
                },
                {
                  lead: "Payment at booking:",
                  text: "the fee is collected when you book, and the work begins once payment is complete.",
                },
                {
                  lead: "No selling on calls:",
                  text: "there are no discovery calls and no sales conversations. The page tells you everything a call would.",
                },
              ]}
            />
          </LegalBlock>

          <LegalBlock heading="4. Cancellation and rescheduling">
            <p>
              The cancellation and no-show policy for each service is shown at
              the point of booking, before any payment is taken. Your booked
              session time is protected for you; the same policy protects the
              practice&apos;s time in return. Refund wording is being finalised
              and will be confirmed at booking.
            </p>
          </LegalBlock>

          <LegalBlock heading="5. The 24-hour written hold">
            <p>
              No significant financial decision is made in the moment here. Any
              commitment to SABI CORE or Legacy rests for at least 24 hours,
              in writing, before it is confirmed. You will never be asked to
              decide on the spot, and you are always welcome to take longer.
            </p>
          </LegalBlock>

          <LegalBlock heading="6. Your part">
            <p>
              The work asks for honesty, not performance. You agree to answer
              the Scan from your current reality, to attend booked sessions on
              time, and to treat materials you receive, including your Personal
              Autonomy Map, as being for your own use.
            </p>
          </LegalBlock>

          <LegalBlock heading="7. Our part">
            <p>
              We deliver what each page promises, in the timeframes stated,
              with your information handled as described in the{" "}
              <a
                href="/privacy-policy"
                className="font-medium text-ink underline decoration-brand underline-offset-4 transition-colors duration-300 hover:text-brand"
              >
                Privacy Policy
              </a>
              . Every Scan result is reviewed by a human being.
            </p>
          </LegalBlock>

          <LegalBlock heading="8. Questions">
            <p>
              Anything unclear can be asked before you commit. Write to{" "}
              <a
                href="mailto:dk@dkjonah.com"
                className="font-medium text-ink underline decoration-brand underline-offset-4 transition-colors duration-300 hover:text-brand"
              >
                dk@dkjonah.com
              </a>
              , and take whatever time you need. No rush. No force. No gra gra.
            </p>
          </LegalBlock>
        </div>
      </UtilitySection>
      <CtaSection />
    </main>
  </>
);

export default TermsPage;
