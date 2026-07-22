import type { Metadata } from "next";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { LegalBlock, LegalList } from "@/components/utility/LegalBlock";
import { UtilityHero, UtilitySection } from "@/components/utility/UtilityHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Your data security and confidentiality.",
};

/** /utility-pages/privacy-policy — eight numbered long-form blocks. */
const PrivacyPolicyPage = () => (
  <>
    <Navbar tone="dark" />
    <main>
      <UtilitySection>
        <UtilityHero
          tag="Privacy Policy"
          title="Privacy Policy"
          subline="Your Data Security and Confidentiality"
        />
        <div className="mx-auto flex max-w-[841px] flex-col gap-10">
          <LegalBlock heading="1. Introduction and Scope">
            <p>
              This Privacy Policy describes how we collect, use, and protect
              your information when you visit and interact with this website.
              By using this website, you agree to the collection and use of
              information in accordance with this policy.
            </p>
            <p>
              This policy applies to all users viewing the template
              demonstration, regardless of how they access the site. If you do
              not agree with the practices described here, please discontinue
              use of the website.
            </p>
          </LegalBlock>

          <LegalBlock heading="2. Information We Collect">
            <p>
              We collect two main types of information to provide and improve
              our service:
            </p>
            <LegalList
              items={[
                {
                  lead: "Personally Identifiable Information (PII):",
                  text: "Information you voluntarily provide to us, such as your name, email address, and contact details, when you fill out a form, subscribe to the newsletter, or send an inquiry.",
                },
                {
                  lead: "Usage Data:",
                  text: "Information collected automatically when you access the website, which may include your IP address, browser type and version, the pages you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.",
                },
              ]}
            />
          </LegalBlock>

          <LegalBlock heading="3. How We Use Your Information">
            <p>The collected data is used for various purposes:</p>
            <LegalList
              items={[
                {
                  lead: "To provide and maintain the Service,",
                  text: "including monitoring the usage of the website so that it remains fast, reliable, and secure.",
                },
                {
                  lead: "To manage your account or inquiry,",
                  text: "responding to the messages and requests you send us through the forms on this site.",
                },
                {
                  lead: "To improve our Service,",
                  text: "analyzing how users behave on the site so we can improve its layout, content, and overall experience.",
                },
                {
                  lead: "To communicate with you,",
                  text: "sharing news, special offers, and general information about goods and services similar to those you have already engaged with — unless you have opted not to receive such information.",
                },
              ]}
            />
          </LegalBlock>

          <LegalBlock heading="4. Sharing and Disclosure of Your Information">
            <p>
              We do not sell your personal data. Your information is shared
              only in the following limited circumstances:
            </p>
            <LegalList
              items={[
                {
                  lead: "With Service Providers:",
                  text: "Trusted third parties that perform services on our behalf, such as website hosting and analytics. These providers only have access to the information necessary to perform their tasks.",
                },
                {
                  lead: "For Legal Compliance:",
                  text: "Where disclosure is required by law or in response to valid requests by public authorities.",
                },
              ]}
            />
          </LegalBlock>

          <LegalBlock heading="5. Data Security">
            <p>
              The security of your data is important to us. Please remember,
              however, that no method of transmission over the Internet or
              method of electronic storage is 100% secure. While we strive to
              use commercially acceptable means to protect your personal
              information, we cannot guarantee its absolute security.
            </p>
          </LegalBlock>

          <LegalBlock heading="6. Your Data Protection Rights">
            <p>
              Depending on your location — for example, under the GDPR if you
              are in the European Economic Area — you may have the following
              rights regarding your personal data:
            </p>
            <LegalList
              items={[
                {
                  lead: "The right to access:",
                  text: "You may request copies of the personal data we hold about you.",
                },
                {
                  lead: "The right to rectification:",
                  text: "You may request that we correct any information you believe is inaccurate or incomplete.",
                },
                {
                  lead: "The right to erasure:",
                  text: "You may request that we delete your personal data, under certain conditions.",
                },
              ]}
            />
            <p>
              To exercise any of these rights, please contact us using the
              details below.
            </p>
          </LegalBlock>

          <LegalBlock heading="7. Changes to This Privacy Policy">
            <p>
              We may update our Privacy Policy from time to time. Any changes
              will be posted on this page, so we advise you to review it
              periodically. Changes are effective when they are posted on this
              page.
            </p>
          </LegalBlock>

          <LegalBlock heading="8. Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className="flex list-disc flex-col gap-2.5 pl-5 marker:text-brand">
              <li>
                <strong className="font-semibold text-ink">By email: </strong>
                <a
                  href="mailto:support.stodio@gmail.com"
                  className="font-medium text-ink underline decoration-brand underline-offset-4 transition-colors duration-300 hover:text-brand"
                >
                  support.stodio@gmail.com
                </a>
              </li>
            </ul>
          </LegalBlock>
        </div>
      </UtilitySection>
      <CtaSection />
    </main>
  </>
);

export default PrivacyPolicyPage;
