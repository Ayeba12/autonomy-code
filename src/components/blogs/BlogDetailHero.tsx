import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";
import type { BlogPost } from "@/content/types";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

/**
 * Blog detail hero: light rounded band with static "Blog" tag, centered
 * post title and author / date / read-time meta row
 * (template `.header-block.blogs-details`).
 */
export const BlogDetailHero = ({ post }: { post: BlogPost }) => (
  <section className="m-2 rounded-card bg-paper pt-40 pb-20 max-lg:pt-32 max-md:pt-28 max-md:pb-12">
    <div className="container-site flex flex-col items-center text-center">
      <Reveal>
        <Tag>Blog</Tag>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mx-auto mt-6 max-w-[1000px] text-display">{post.title}</h1>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-body-l max-md:gap-4">
          <span className="flex items-center gap-3">
            <Image
              src={post.author.avatar.src}
              alt={post.author.avatar.alt}
              width={36}
              height={36}
              className="size-9 rounded-full object-cover"
            />
            By {post.author.name}
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="size-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              aria-hidden
            >
              <rect x="2" y="3" width="12" height="11" rx="2" />
              <path d="M2 6.5h12M5.5 1.5v3M10.5 1.5v3" />
            </svg>
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-2">
            <span aria-hidden className="size-2 rounded-full bg-brand" />
            {post.readTime}
          </span>
        </div>
      </Reveal>
    </div>
  </section>
);
