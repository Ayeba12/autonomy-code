import { BlogCard } from "@/components/cards/BlogCard";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Tag } from "@/components/ui/Tag";
import type { BlogPost } from "@/content/types";

/** "The Journal" — latest blog cards on gray band (home §11). */
export const JournalSection = ({ posts }: { posts: BlogPost[] }) => (
  <section className="section-gap bg-paper py-20 max-md:py-12">
    <div className="container-site">
      <Reveal className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
        <div>
          <Tag>The Journal</Tag>
          <h2 className="mt-6 text-h2">
            Stories, strategies, <span className="text-mute">and digital thinking.</span>
          </h2>
        </div>
        <ArrowLink href="/blogs">View All Blogs</ArrowLink>
      </Reveal>
      <div className="mt-11 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {posts.slice(0, 3).map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.1}>
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
