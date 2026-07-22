import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/types";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

/** Journal card: category pill + thumbnail, date row, title, excerpt. */
export const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link
    href={`/blogs/${post.slug}`}
    className="group flex h-full flex-col rounded-card bg-white p-6 transition-shadow duration-300 hover:shadow-lg max-md:p-5"
  >
    <div className="flex items-start justify-between gap-4">
      <span className="rounded-full bg-paper px-3.5 py-1.5 text-body-s font-medium">
        {post.category}
      </span>
      <div className="overflow-hidden rounded-xl">
        <Image
          src={post.heroImage.src}
          alt={post.heroImage.alt}
          width={180}
          height={144}
          className="h-[112px] w-[144px] object-cover transition-transform duration-600 group-hover:scale-105"
        />
      </div>
    </div>
    <div className="mt-auto pt-24 max-md:pt-12">
      <div className="flex items-center gap-2 text-body-s text-smoke">
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
        <span>{formatDate(post.date)}</span>
        <span aria-hidden className="size-1 rounded-full bg-mute" />
        <span>{post.readTime}</span>
      </div>
      <h2 className="mt-3 text-h4 transition-colors duration-300 group-hover:text-brand">
        {post.title}
      </h2>
      <p className="mt-3 text-body-m text-smoke">{post.excerpt}</p>
    </div>
  </Link>
);
