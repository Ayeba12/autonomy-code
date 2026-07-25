import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Not Found",
  description: "This page is not on the map.",
};

/** Root 404: light ivory, type-led (content.md §6). */
const NotFound = () => (
  <>
    <Navbar tone="dark" />
    <main>
      <section className="flex min-h-svh items-center bg-paper">
        <div className="container-site py-40 max-md:py-28">
          <div className="mx-auto flex max-w-[841px] flex-col items-center gap-6 text-center">
            <Reveal>
              <Tag>404</Tag>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-display text-ink">This page is not on the map.</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-body-xl text-smoke">
                Even a clear structure has an edge or two. Let us walk back.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Button href="/" variant="brand" className="mt-2">
                Back to owned ground
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default NotFound;
