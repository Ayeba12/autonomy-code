import { Reveal } from "@/components/motion/Reveal";
import type { VideoItem } from "@/content/types";
import { VideoCard } from "./VideoCard";

/**
 * Shared In Conversation grid (hub sections and archive pages):
 * 4 columns on desktop, 2 on tablet, 1 on mobile.
 */
export const VideoGrid = ({ videos }: { videos: VideoItem[] }) => (
  <div className="grid grid-cols-4 gap-x-5 gap-y-12 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-y-9">
    {videos.map((video, i) => (
      <Reveal key={`${video.section}-${video.title}`} delay={(i % 4) * 0.08}>
        <VideoCard video={video} />
      </Reveal>
    ))}
  </div>
);
