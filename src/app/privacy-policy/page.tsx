import type { Metadata } from "next";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { LegalBlock, LegalList } from "@/components/utility/LegalBlock";
import { UtilityHero, UtilitySection } from "@/components/utility/UtilityHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How The Autonomy Code collects, uses, and protects your information. UK GDPR.",
};

/**
 * /privacy-policy — adapted from the UK GDPR template in the build doc
 * (content.md §7). Lawyer review before launch.
 */
const PrivacyPolicyPage = () => (
  <>
    <Navbar tone="dark" />
    <main>
      <UtilitySection>
        <UtilityHero
          tag="Privacy Policy"
          title="Privacy Policy"
          subline="How this practice collects, uses, and protects your information. Effective July 2026."
        />
        <div className="mx-auto flex max-w-[841px] flex-col gap-10">
          <LegalBlock heading="1. Who we are">
            <p>
              The Autonomy Code is operated by The NoGraGra Practice (the
              &quot;controller&quot; of your personal data under UK data
              protection law, including the UK GDPR and the Data Protection Act
              2018). Questions about this policy, or about your data, can be
              sent at any time to{" "}
              <a
                href="mailto:dk@dkjonah.com"
                className="font-medium text-ink underline decoration-brand underline-offset-4 transition-colors duration-300 hover:text-brand"
              >
                dk@dkjonah.com
              </a>
              .
            </p>
            <p>
              This policy is written the way the practice works: plainly, and
              without pressure. It applies to this website and to the services
              offered through it, including the Ownership Scan, SABI CORE, and
              Legacy.
            </p>
          </LegalBlock>

          <LegalBlock heading="2. What we collect">
            <LegalList
              items={[
                {
                  lead: "Contact details:",
                  text: "your name and email address when you write to us, use a form, subscribe to the newsletter, or make a speaking enquiry.",
                },
                {
                  lead: "Scan responses:",
                  text: "your answers to the Ownership Scan pre-assessment, and the notes and written map produced from your session. This is the most personal information we hold, and it is treated with corresponding care.",
                },
                {
                  lead: "Booking and payment information:",
                  text: "the details needed to schedule sessions and take payment. Card details are handled by Stripe; we never see or store your full card number.",
                },
                {
                  lead: "Basic usage data:",
                  text: "limited technical information about visits to the site, used only to keep it fast, reliable, and secure.",
                },
              ]}
            />
          </LegalBlock>

          <LegalBlock heading="3. How we use it">
            <LegalList
              items={[
                {
                  lead: "To deliver the work:",
                  text: "running your Scan, preparing your session, writing your Personal Autonomy Map, and delivering the programmes you have paid for.",
                },
                {
                  lead: "To respond to you:",
                  text: "answering messages, enquiries, and speaking requests.",
                },
                {
                  lead: "To send the newsletter:",
                  text: "only if you have subscribed, and you can unsubscribe at any time. One calm letter, when it is worth your time.",
                },
                {
                  lead: "To administer the practice:",
                  text: "invoicing, scheduling, record keeping, and meeting legal obligations.",
                },
              ]}
            />
            <p>
              A human being reviews every Scan result. No decision about you is
              made by automated means alone.
            </p>
          </LegalBlock>

          <LegalBlock heading="4. Who processes it for us">
            <p>
              We use a small number of trusted service providers to run the
              practice. Each processes your data only on our instructions and
              under its own data processing agreement:
            </p>
            <LegalList
              items={[
                {
                  lead: "OpenAI:",
                  text: "powers the conversational Scan pre-assessment.",
                },
                {
                  lead: "Google:",
                  text: "Forms, Sheets, Gmail, and Calendar, used for collecting responses, correspondence, and scheduling.",
                },
                {
                  lead: "Our scheduling provider:",
                  text: "handles session bookings.",
                },
                {
                  lead: "Stripe:",
                  text: "processes payments.",
                },
              ]}
            />
            <p>We do not sell your personal data. To anyone, ever.</p>
          </LegalBlock>

          <LegalBlock heading="5. International transfers">
            <p>
              Some of the providers above store data outside the United
              Kingdom. Where that happens, transfers are protected by UK
              approved safeguards: UK adequacy regulations where they apply,
              or the UK International Data Transfer Agreement or Addendum
              alongside the providers&apos; standard contractual clauses.
            </p>
          </LegalBlock>

          <LegalBlock heading="6. How long we keep it">
            <p>
              We keep personal data for around 12 months after your last
              engagement with the practice, then delete or anonymise it.
              Records we are legally required to keep, such as invoices and
              accounting records, are kept for the period the law requires.
            </p>
          </LegalBlock>

          <LegalBlock heading="7. Your rights">
            <p>Under the UK GDPR you have the right to:</p>
            <LegalList
              items={[
                { text: "access a copy of the personal data we hold about you;" },
                { text: "have inaccurate data corrected;" },
                { text: "have your data erased, in certain circumstances;" },
                {
                  text: "restrict or object to how your data is used, in certain circumstances;",
                },
                {
                  text: "receive your data in a portable format;",
                },
                {
                  text: "withdraw consent at any time, where consent is the basis on which we hold it.",
                },
              ]}
            />
            <p>
              To exercise any of these rights, email{" "}
              <a
                href="mailto:dk@dkjonah.com"
                className="font-medium text-ink underline decoration-brand underline-offset-4 transition-colors duration-300 hover:text-brand"
              >
                dk@dkjonah.com
              </a>
              . We respond within one month.
            </p>
          </LegalBlock>

          <LegalBlock heading="8. Who this site is for">
            <p>
              The services on this site are for adults. We do not knowingly
              collect personal data from anyone under 18.
            </p>
          </LegalBlock>

          <LegalBlock heading="9. Complaints">
            <p>
              If you are unhappy with how your data has been handled, please
              write to us first so we can put it right. You also have the right
              to complain to the Information Commissioner&apos;s Office (ICO)
              at{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline decoration-brand underline-offset-4 transition-colors duration-300 hover:text-brand"
              >
                ico.org.uk
              </a>
              .
            </p>
          </LegalBlock>

          <LegalBlock heading="10. Changes to this policy">
            <p>
              If this policy changes, the new version will be posted on this
              page with a new effective date. This version is effective from
              July 2026.
            </p>
          </LegalBlock>
        </div>
      </UtilitySection>
      <CtaSection />
    </main>
  </>
);

export default PrivacyPolicyPage;
