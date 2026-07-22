import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { LegalBlock } from "@/components/utility/LegalBlock";
import { UtilityHero, UtilitySection } from "@/components/utility/UtilityHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The rules governing your use of our service.",
};

/** /utility-pages/terms-conditions — five numbered blocks + contact line. */
const TermsConditionsPage = () => (
  <>
    <Navbar tone="dark" />
    <main>
      <UtilitySection>
        <UtilityHero
          tag="Terms"
          title="Terms & conditions"
          subline="The Rules Governing Your Use of Our Service"
        />
        <div className="mx-auto flex max-w-[841px] flex-col gap-10">
          <LegalBlock heading="1. Acceptance of Terms">
            <p>
              By accessing and using this website (The Service), you agree to
              be bound by these Terms and Conditions. These Terms apply to all
              users and visitors. If you disagree with any part of the terms,
              you must not use the Service. &ldquo;The Service Provider&rdquo;
              (or &ldquo;We/Us&rdquo;) refers to the owner of this website
              template.
            </p>
          </LegalBlock>

          <LegalBlock heading="2. Intellectual Property and Content Use">
            <p>
              The Service, its original content, features, and functionality
              (including all design elements, text, and code) are the exclusive
              property of The Service Provider and are protected by copyright
              laws. You are prohibited from reproducing, distributing,
              modifying, or exploiting any content without prior written
              permission.
            </p>
          </LegalBlock>

          <LegalBlock heading='3. Service Disclaimer ("AS IS")'>
            <p>
              The Service is provided to you on an &ldquo;AS IS&rdquo; and
              &ldquo;AS AVAILABLE&rdquo; basis, without warranties of any kind.
              We do not warrant that the Service will be uninterrupted, secure,
              or error-free. You agree not to use the Service for any unlawful
              or prohibited purpose, including unauthorized access or data
              harvesting.
            </p>
          </LegalBlock>

          <LegalBlock heading="4. Limitation of Liability">
            <p>
              In no event shall The Service Provider, nor its directors or
              agents, be liable for any damages (including loss of data or
              profits) arising out of your use or inability to use the
              Service. Our liability is strictly limited to the maximum extent
              permitted by applicable law.
            </p>
          </LegalBlock>

          <LegalBlock heading="5. General Provisions and Contact">
            <p>
              These Terms are governed by the laws. We reserve the right to
              modify these Terms at any time by posting the changes on this
              page. By continuing to use the Service after changes are posted,
              you agree to the new terms.
            </p>
          </LegalBlock>

          <Reveal>
            <p className="text-body-l text-smoke">
              For any questions regarding these Terms, please contact us at:{" "}
              <a
                href="mailto:support@codexzel.com"
                className="font-semibold text-ink underline decoration-brand underline-offset-4 transition-colors duration-300 hover:text-brand"
              >
                support@codexzel.com
              </a>
            </p>
          </Reveal>
        </div>
      </UtilitySection>
      <CtaSection />
    </main>
  </>
);

export default TermsConditionsPage;
