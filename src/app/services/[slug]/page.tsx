import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { Button } from "@/components/ui/Button";
import { DiagonalLink } from "@/components/ui/DiagonalLink";
import { Tag } from "@/components/ui/Tag";
import { serviceBySlug, services } from "@/content/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () =>
  services.map((service) => ({ slug: service.slug }));

export const generateMetadata = async ({
  params,
}: ServicePageProps): Promise<Metadata> => {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
};

/** Gold spark bullet, matching the Tag icon. */
const Spark = () => (
  <svg
    className="mt-1.5 size-3.5 shrink-0 text-brand"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden
  >
    <path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z" />
  </svg>
);

/**
 * /services/[slug] — one shared template for every service on the menu.
 * The price appears here, once, plainly (house style §26 rule 5: never
 * on the browse pages that link in).
 */
const ServicePage = async ({ params }: ServicePageProps) => {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Navbar tone="dark" />
      <main className="bg-paper">
        {/* Hero */}
        <section className="pt-40 pb-14 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
          <div className="container-site">
            <Reveal>
              <Tag>{service.category}</Tag>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 max-w-[900px] text-display">
                {service.title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-[640px] text-body-xl text-smoke">
                {service.intro}
              </p>
            </Reveal>

            {/* Price and format, stated plainly and once */}
            <Reveal delay={0.3}>
              <div className="mt-12 flex items-end gap-8 border-t border-line pt-8 max-md:mt-8 max-md:flex-col max-md:items-start max-md:gap-3 max-md:pt-6">
                <p className="font-heading text-stat leading-none text-brand">
                  {service.price}
                </p>
                <p className="pb-1 text-body-l text-smoke">{service.format}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Body sections */}
        <section className="bg-white section-pad">
          <div className="container-site">
            <div className="mx-auto flex max-w-[820px] flex-col gap-14 max-md:gap-10">
              {service.sections.map((section, i) => (
                <Reveal key={section.heading} delay={i * 0.05}>
                  <h2 className="text-h4">{section.heading}</h2>
                  <div className="mt-4 h-px w-12 bg-line" aria-hidden />
                  {section.body && (
                    <p className="mt-6 text-body-xl text-smoke">
                      {section.body}
                    </p>
                  )}
                  {section.items && (
                    <ul className="mt-6 flex flex-col">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 border-b border-line py-4 first:border-t"
                        >
                          <Spark />
                          <span className="text-body-l text-smoke">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tiers, where the engagement has them */}
        {service.tiers && (
          <section className="bg-paper-2 section-pad">
            <div className="container-site">
              <Reveal className="mx-auto max-w-[820px]">
                <h2 className="text-h4">{service.tiers.heading}</h2>
                {service.tiers.note && (
                  <p className="mt-3 text-body-m text-smoke">
                    {service.tiers.note}
                  </p>
                )}
                <div className="mt-8">
                  {service.tiers.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-6 border-b border-line py-5 first:border-t max-md:flex-col max-md:items-start max-md:gap-1"
                    >
                      <div>
                        <p className="font-heading text-h6">{row.label}</p>
                        {row.note && (
                          <p className="mt-1 text-body-s text-smoke">
                            {row.note}
                          </p>
                        )}
                      </div>
                      <p className="shrink-0 font-heading text-h5 text-brand">
                        {row.price}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* Fit */}
        {(service.forList || service.notForList) && (
          <section className="bg-white section-pad">
            <div className="container-site">
              <div className="mx-auto grid max-w-[980px] grid-cols-2 gap-14 max-md:grid-cols-1 max-md:gap-10">
                {service.forList && (
                  <Reveal>
                    <h2 className="text-h5">This is for you if</h2>
                    <ul className="mt-6 flex flex-col gap-4">
                      {service.forList.map((line) => (
                        <li key={line} className="flex gap-3">
                          <Spark />
                          <span className="text-body-l text-smoke">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}
                {service.notForList && (
                  <Reveal delay={0.1}>
                    <h2 className="text-h5">And not if</h2>
                    <ul className="mt-6 flex flex-col gap-4">
                      {service.notForList.map((line) => (
                        <li key={line} className="flex gap-3">
                          <span
                            className="mt-3 h-px w-4 shrink-0 bg-line"
                            aria-hidden
                          />
                          <span className="text-body-l text-smoke">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Next step */}
        <section className="bg-breath-tint py-20 max-md:py-14">
          <div className="container-site">
            <Reveal className="mx-auto flex max-w-[680px] flex-col items-center gap-6 text-center">
              <h2 className="text-h4">The next step</h2>
              <Button href={service.cta.href} variant="brand">
                {service.cta.label}
              </Button>
              {service.ctaNote && (
                <p className="text-body-s text-smoke">{service.ctaNote}</p>
              )}
            </Reveal>
            <Reveal delay={0.1} className="mt-14 flex justify-center max-md:mt-10">
              <DiagonalLink href="/work-together">
                See everything on the menu
              </DiagonalLink>
            </Reveal>
          </div>
        </section>

        <CtaSection />
      </main>
    </>
  );
};

export default ServicePage;
