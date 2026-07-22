import type { Metadata } from "next";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { PasswordForm } from "@/components/utility/PasswordForm";

export const metadata: Metadata = {
  title: "Protected page",
  description: "This page is password protected.",
};

/** /401 — password-protected page demo (non-functional form, 401 spec). */
const ProtectedPage = () => (
  <>
    <Navbar tone="dark" />
    <main>
      <section className="bg-paper pt-40 pb-24 max-lg:pt-32 max-md:pt-28 max-md:pb-14">
        <div className="container-site flex min-h-[55svh] items-center justify-center">
          <PasswordForm />
        </div>
      </section>
      <CtaSection />
    </main>
  </>
);

export default ProtectedPage;
