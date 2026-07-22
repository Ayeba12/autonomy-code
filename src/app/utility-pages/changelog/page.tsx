import type { Metadata } from "next";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { LegalBlock } from "@/components/utility/LegalBlock";
import { UtilityHero, UtilitySection } from "@/components/utility/UtilityHero";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Tracking every development and change for this template.",
};

/** /utility-pages/changelog — single "Version 1.0" entry. */
const ChangelogPage = () => (
  <>
    <Navbar tone="dark" />
    <main>
      <UtilitySection>
        <UtilityHero
          tag="Changelog"
          title="Template Changelog"
          subline="Tracking Every Development and Change"
        />
        <div className="mx-auto flex max-w-[841px] flex-col gap-10">
          <LegalBlock heading="Version 1.0 – Initial Launch">
            <p>
              Stay up to date with the latest updates, improvements, and
              releases for this project.
            </p>
          </LegalBlock>
        </div>
      </UtilitySection>
      <CtaSection />
    </main>
  </>
);

export default ChangelogPage;
