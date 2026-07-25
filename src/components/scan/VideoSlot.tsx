import { Reveal } from "@/components/motion/Reveal";

interface VideoSlotProps {
  /**
   * Path to the briefing film once supplied
   * (`The_Autonomy_Code__Reclaiming_Your_Practice.mp4`, content.md §2).
   * Omitted at build: the calm placeholder frame renders instead, so the
   * page works fully without the video. No broken embeds, ever.
   */
  src?: string;
  /** Optional poster image shown before playback when `src` is set. */
  poster?: string;
}

/** 16:9 briefing-film slot near the top of the Scan page (content.md §4.4). */
export const VideoSlot = ({ src, poster }: VideoSlotProps) => (
  <section className="pb-20 max-lg:pb-14 max-md:pb-10">
    <div className="container-site">
      <Reveal>
        <div className="mx-auto max-w-[960px]">
          <div className="relative aspect-video overflow-hidden rounded-card-lg border border-line bg-paper-2 max-md:rounded-card">
            {src ? (
              <video
                className="size-full object-cover"
                controls
                preload="metadata"
                src={src}
                poster={poster}
              />
            ) : (
              <div className="flex size-full flex-col items-center justify-center gap-6 max-md:gap-4">
                <span
                  className="flex size-16 items-center justify-center rounded-full border border-brand/40 bg-paper max-md:size-12"
                  aria-hidden
                >
                  <svg
                    className="ml-1 size-5 text-brand max-md:size-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M3.5 2.2v11.6L13.5 8 3.5 2.2z" />
                  </svg>
                </span>
                <p className="px-6 text-center font-heading text-body-l text-smoke max-md:text-body-s">
                  Build Your Own(ed) Ground · briefing film
                </p>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
