"use client";

import Image from "next/image";
import { useState } from "react";
import type { VideoItem } from "@/content/types";

/** Calm frame for cards without artwork (seed placeholders, odd links). */
const PlaceholderFrame = ({ note }: { note?: string }) => (
  <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-paper-2">
    <svg
      className="size-6 text-brand"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8L10 1z" />
    </svg>
    {note && (
      <span className="font-heading text-body-s text-smoke italic">{note}</span>
    )}
  </span>
);

/**
 * One In Conversation video (YouTube-feed pattern): 16:9 thumbnail with
 * a gold play circle, title and host · year beneath. Clicking swaps the
 * thumbnail for the player in place; the iframe exists only after that
 * click, so grids stay light. Cards without a link render as quiet
 * "Link coming" frames.
 */
export const VideoCard = ({ video }: { video: VideoItem }) => {
  const [playing, setPlaying] = useState(false);
  const year = video.date.slice(0, 4);
  const playable = Boolean(video.embedSrc);

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-paper-2">
        {playing && video.embedSrc ? (
          <iframe
            className="absolute inset-0 size-full"
            src={video.embedSrc}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : playable ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${video.title}`}
            className="absolute inset-0 cursor-pointer"
          >
            {video.thumbnail ? (
              <Image
                src={video.thumbnail}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-600 group-hover:scale-105"
              />
            ) : (
              <PlaceholderFrame />
            )}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-brand/90 text-white transition-transform duration-300 group-hover:scale-110 max-md:size-12">
                <svg
                  className="ml-1 size-5 max-md:size-4"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M3.5 2.2v11.6L13.5 8 3.5 2.2z" />
                </svg>
              </span>
            </span>
          </button>
        ) : (
          <PlaceholderFrame note="Link coming" />
        )}
      </div>
      <h3
        className={`mt-4 font-heading text-h6 text-ink ${
          playable
            ? "transition-colors duration-300 group-hover:text-brand"
            : ""
        }`}
      >
        {video.title}
      </h3>
      <p className="mt-1 text-body-m text-smoke">
        {video.host} · {year}
      </p>
    </article>
  );
};
