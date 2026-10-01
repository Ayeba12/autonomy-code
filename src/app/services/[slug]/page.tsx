import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { Button } from "@/components/ui/Button";
import { DiagonalArrow, DiagonalLink } from "@/components/ui/DiagonalLink";
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

const Cross = () => (
  <svg
    className="mt-1.5 size-4 shrink-0 text-mute"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden
  >
    <path d="M5 5l10 10M15 5L5 15" />
  </svg>
);

/** Small uppercase label used for eyebrows across the page. */
const Eyebrow = ({ children }: { children: string }) => (
  <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">{children}</p>
);

/**
 * /services/[slug] — one shared template for every service on the menu,
 * drawn in the house style: the headline beside the service's drawing,
 * numbered sections, price cards, fit cards, and the rest of the menu.
 * The price appears here, once, plainly (house style §26 rule 5: never
 * on the browse pages that link in).
 */
const ServicePage = async ({ params }: ServicePageProps) => {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  // Three more from the menu: the same group first, then the rest.
  const others = services.filter((item) => item.slug !== service.slug);
  const related = [
    ...others.filter((item) => item.group === service.group),
    ...others.filter((item) => item.group !== service.group),
  ].slice(0, 3);

  return (
    <>
      <Navbar tone="dark" />
      <main className="bg-paper">
        {/* Hero — headline and price beside the service's drawing */}
        <section className="m-2 rounded-card bg-paper-2 pt-40 pb-14 max-lg:pt-32 max-md:pt-28 max-md:pb-10">
          <div className="container-site grid grid-cols-[1.15fr_0.85fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
            <div>
              <Reveal>
                <Tag>{service.category}</Tag>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 max-w-[720px] text-h2">{service.title}</h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-[580px] text-body-xl text-slate">
                  {service.intro}
                </p>
              </Reveal>

              {/* Price and format, stated plainly and once */}
              <Reveal delay={0.3}>
                <div className="mt-10 inline-flex max-w-full flex-col gap-2 rounded-card bg-white px-8 py-6 max-md:mt-8 max-md:px-6">
                  <p className="font-heading text-body-s tracking-[0.2em] text-slate uppercase">
                    {service.name}
                  </p>
                  <p className="font-heading text-h2 leading-none text-brand-hot max-md:text-h3">
                    {service.price}
                  </p>
                  <p className="text-body-m text-slate">{service.format}</p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-card">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  width={1000}
                  height={1250}
                  preload
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="aspect-[4/5] w-full object-cover max-lg:aspect-[3/2]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Body sections — a number and heading beside each block */}
        <section className="bg-white section-pad">
          <div className="container-site flex flex-col">
            {service.sections.map((section, i) => (
              <Reveal key={section.heading}>
                <div className="grid grid-cols-[0.8fr_1.2fr] gap-16 border-t border-line py-14 max-lg:grid-cols-1 max-lg:gap-5 max-md:py-10">
                  <div>
                    <span className="font-heading text-body-s tracking-[0.2em] text-brand-hot">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 max-w-[420px] text-h4">{section.heading}</h2>
                  </div>
                  <div>
                    {section.body && (
                      <p className="text-body-xl text-slate">{section.body}</p>
                    )}
                    {section.items && (
                      <ul className={`flex flex-col ${section.body ? "mt-6" : ""}`}>
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 border-b border-line py-4 first:border-t"
                          >
                            <Spark />
                            <span className="text-body-l text-slate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Tiers, where the engagement has them — one card each */}
        {service.tiers && (
          <section className="py-24 max-lg:py-16 max-md:py-12">
            <div className="container-site">
              <Reveal className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-3">
                <div>
                  <Eyebrow>Prices</Eyebrow>
                  <h2 className="mt-4 text-h3">{service.tiers.heading}</h2>
                </div>
                {service.tiers.note && (
                  <p className="max-w-[420px] pb-2 text-body-m text-slate">
                    {service.tiers.note}
                  </p>
                )}
              </Reveal>
              <div className="mt-10 grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-md:mt-8">
                {service.tiers.rows.map((row, i) => (
                  <Reveal key={row.label} delay={i * 0.08} className="h-full">
                    <div className="flex h-full flex-col rounded-card bg-white p-8 max-md:p-6">
                      <p className="font-heading text-h6 text-ink">{row.label}</p>
                      <p className="mt-6 font-heading text-h3 text-brand-hot">
                        {row.price}
                      </p>
                      {row.note && (
                        <p className="mt-4 border-t border-line pt-4 text-body-m text-slate">
                          {row.note}
                        </p>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Fit — two cards, as on the Compass */}
        {(service.forList || service.notForList) && (
          <section className="bg-white py-24 max-lg:py-16 max-md:py-12">
            <div className="container-site grid grid-cols-2 gap-6 max-md:grid-cols-1">
              {service.forList && (
                <Reveal className="h-full">
                  <div className="h-full rounded-card border-t-2 border-brand bg-paper p-10 max-md:p-6">
                    <h2 className="text-h5">This is for you if</h2>
                    <ul className="mt-8 flex flex-col gap-5 max-md:mt-5">
                      {service.forList.map((line) => (
                        <li key={line} className="flex gap-4">
                          <Spark />
                          <span className="text-body-l text-slate">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
              {service.notForList && (
                <Reveal delay={0.1} className="h-full">
                  <div className="h-full rounded-card border-t-2 border-brand-soft bg-ink p-10 max-md:p-6">
                    <h2 className="text-h5 text-paper">And not if</h2>
                    <ul className="mt-8 flex flex-col gap-5 max-md:mt-5">
                      {service.notForList.map((line) => (
                        <li key={line} className="flex gap-4">
                          <Cross />
                          <span className="text-body-l text-paper/85">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
            </div>
          </section>
        )}

        {/* Next step — the page's single breath accent */}
        <section className="bg-breath-tint py-24 max-lg:py-16 max-md:py-12">
          <div className="container-site">
            <Reveal className="mx-auto flex max-w-[680px] flex-col items-center gap-6 text-center">
              <Eyebrow>The next step</Eyebrow>
              <h2 className="text-h3">{service.name}</h2>
              <Button href={service.cta.href} variant="brand">
                {service.cta.label}
              </Button>
              {service.ctaNote && (
                <p className="text-body-s text-slate">{service.ctaNote}</p>
              )}
            </Reveal>
          </div>
        </section>

        {/* More on the menu — three others, each with its drawing */}
        <section className="py-24 max-lg:py-16 max-md:py-12">
          <div className="container-site">
            <Reveal className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-4">
              <div>
                <Eyebrow>More on the menu</Eyebrow>
                <h2 className="mt-4 text-h3">Other ways to work together.</h2>
              </div>
              <DiagonalLink href="/work-together" className="mb-2">
                See everything on the menu
              </DiagonalLink>
            </Reveal>
            <div className="mt-10 grid grid-cols-3 gap-x-5 gap-y-10 max-lg:grid-cols-1 max-md:mt-8">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.08} className="h-full">
                  <Link href={`/services/${item.slug}`} className="group block h-full">
                    <div className="overflow-hidden rounded-card bg-white">
                      <Image
                        src={item.image.src}
                        alt=""
                        width={1000}
                        height={1250}
                        sizes="(max-width: 1023px) 100vw, 33vw"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-baseline justify-between gap-4 pt-5">
                      <p className="font-heading text-body-s tracking-[0.16em] text-slate uppercase">
                        {item.category}
                      </p>
                      <DiagonalArrow className="text-ink transition-colors duration-300 group-hover:text-brand" />
                    </div>
                    <h3 className="mt-2 text-h5 transition-colors duration-300 group-hover:text-brand">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-body-m text-slate">{item.summary}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
    </>
  );
};

export default ServicePage;
