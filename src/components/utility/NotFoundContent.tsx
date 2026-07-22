import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

/**
 * Shared 404 content: full-bleed image hero + CTA (404 spec).
 * Rendered by both the root `not-found.tsx` and the browsable `/404-page`.
 */
export const NotFoundContent = () => (
  <>
    <Navbar tone="light" />
    <main>
      <section className="relative flex min-h-svh items-center overflow-hidden bg-ink">
        <Image
          src="/images/404-image.webp"
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-ink/60" />
        <div className="container-site relative z-10 py-40 max-md:py-28">
          <div className="mx-auto flex max-w-[841px] flex-col items-center gap-6 text-center">
            <Reveal>
              <Tag tone="light">404 Error</Tag>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-display text-white">
                Oops! This page is off the grid
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-h4 text-mute">
                It seems we missed a pixel or two. Even with a perfect layout,
                sometimes the creative flow takes us to a blank canvas
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Button href="/" variant="brand" className="mt-2">
                Back to Home
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
      <CtaSection />
    </main>
  </>
);
