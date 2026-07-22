import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";
import { OfficeLocations } from "@/components/contact/OfficeLocations";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { content } from "@/content/source";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a 30-minute call and discover a new way to recruit top talent.",
};

/** /contact — Form + video → Office locations → CTA (contact.md). */
const ContactPage = async () => {
  const locations = await content.getOfficeLocations();

  return (
    <>
      <Navbar tone="dark" />
      <main>
        <ContactSection />
        <OfficeLocations locations={locations} />
        <CtaSection />
      </main>
    </>
  );
};

export default ContactPage;
