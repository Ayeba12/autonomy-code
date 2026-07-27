import type { Metadata } from "next";
import { CookiePreferences } from "@/components/site/CookiePreferences";
import { Navbar } from "@/components/site/Navbar";
import { LegalBlock, LegalList } from "@/components/utility/LegalBlock";
import { UtilityHero, UtilitySection } from "@/components/utility/UtilityHero";

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "What cookies this site uses, what it never uses, and how to change your choice.",
};

/** /cookies — the cookie policy, in plain calm language. */
const CookiesPage = () => (
  <>
    <Navbar tone="dark" />
    <main>
      <UtilitySection>
        <UtilityHero
          tag="Cookies"
          title="Cookies, plainly."
          subline="What this site stores, why, and the choice that stays yours."
        />
        <div className="mx-auto flex max-w-[841px] flex-col gap-12 max-md:gap-8">
          <LegalBlock heading="1 · What a cookie is">
            <p>
              A cookie is a small file a website stores on your device so it
              can remember something between visits: a preference, a session,
              a choice you made. Some are necessary. Many are not.
            </p>
          </LegalBlock>

          <LegalBlock heading="2 · What this site uses">
            <LegalList
              items={[
                {
                  lead: "Essential.",
                  text: "A small number of cookies and similar storage that make the site work, such as remembering the cookie choice you make here. These are always on, because the site cannot function without them.",
                },
                {
                  lead: "Analytics, only with your permission.",
                  text: "If you choose Accept all, we may use privacy-respecting analytics to understand what is read and what is useful. Nothing runs today; when it does, it runs only under that choice.",
                },
                {
                  lead: "Booking and payment.",
                  text: "When you book a session or pay for the Ownership Scan, the scheduling and payment providers (for example Stripe) set their own cookies to run the checkout securely. They apply at that moment, under their own policies.",
                },
              ]}
            />
          </LegalBlock>

          <LegalBlock heading="3 · What this site never does">
            <LegalList
              items={[
                {
                  lead: "No advertising trackers.",
                  text: "This site does not follow you around the internet, and never will.",
                },
                {
                  lead: "No selling of data.",
                  text: "Your information is not a product here.",
                },
                {
                  lead: "No pressure.",
                  text: "Essential only is a complete, respected answer. The site works fully either way.",
                },
              ]}
            />
          </LegalBlock>

          <LegalBlock heading="4 · Your choice">
            <p>
              Your current setting is below. Change it whenever you like, as
              many times as you like.
            </p>
            <CookiePreferences />
          </LegalBlock>

          <LegalBlock heading="5 · Questions">
            <p>
              Anything unclear, write to{" "}
              <a
                href="mailto:dk@dkjonah.com"
                className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brand"
              >
                dk@dkjonah.com
              </a>
              . For the wider picture of how your information is handled, see
              the Privacy Policy.
            </p>
          </LegalBlock>
        </div>
      </UtilitySection>
    </main>
  </>
);

export default CookiesPage;
