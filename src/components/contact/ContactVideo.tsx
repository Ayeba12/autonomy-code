"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

const VIDEO_SRC =
  "/images/6964d4f3b5db71495b89316b-2f6994ced48b6b382b6ccf7a5f-0-shadow-sky-720x1280-mp4.mp4";
const POSTER_SRC =
  "/images/6964d4f3b5db71495b89316b-2f6994ced48b6b382b6ccf7a5f-0-shadow-sky-720x1280-poster-0000000.jpg";

/**
 * Contact-page background video (contact.md §1 right column): autoplaying,
 * looping, muted "Shadow Sky" clip with a play/pause pill control
 * (template `.play-pause-button`, white 20% bg). Autoplay is skipped under
 * `prefers-reduced-motion`.
 */
export const ContactVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const reduced = useReducedMotion();

  // State follows the element's own play/pause events (see <video> below),
  // so pausing here needs no setState.
  useEffect(() => {
    if (reduced) videoRef.current?.pause();
  }, [reduced]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="relative h-full min-h-[520px] overflow-hidden rounded-card max-md:min-h-[420px]">
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute bottom-5 left-5 flex size-11 items-center justify-center rounded-pill bg-white/20 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/35"
      >
        {playing ? (
          <svg className="size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
            <rect x="3" y="2" width="3.5" height="12" rx="1" />
            <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
          </svg>
        ) : (
          <svg className="size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
            <path d="M4.5 2.8a1 1 0 0 1 1.52-.86l8 5.2a1 1 0 0 1 0 1.72l-8 5.2a1 1 0 0 1-1.52-.86V2.8Z" />
          </svg>
        )}
      </button>
    </div>
  );
};
