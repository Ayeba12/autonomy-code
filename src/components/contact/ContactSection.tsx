import { ContactForm } from "@/components/contact/ContactForm";
import { ContactVideo } from "@/components/contact/ContactVideo";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Contact hero (contact.md §1): two equal columns — light form card with
 * the "Let's Talk" title + form on the left, background video on the
 * right. Collapses to a single column on mobile.
 */
export const ContactSection = () => (
  <section className="bg-white pt-40 pb-20 max-lg:pt-32 max-md:pt-28 max-md:pb-12">
    <div className="container-site">
      <div className="grid grid-cols-2 items-stretch gap-20 max-lg:gap-10 max-md:grid-cols-1">
        <div className="rounded-card bg-paper p-8 max-md:p-5">
          <Reveal>
            <h1 className="text-h2">Let&rsquo;s Talk</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-body-xl text-smoke">
              Book a 30-minute call and discover a new way to recruit top
              talent.
            </p>
          </Reveal>
          <ContactForm />
        </div>
        <div className="ml-auto w-full max-w-[684px] max-md:max-w-none">
          <ContactVideo />
        </div>
      </div>
    </div>
  </section>
);
