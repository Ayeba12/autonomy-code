import { BlogCard } from "@/components/cards/BlogCard";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Tag } from "@/components/ui/Tag";
import type { BlogPost } from "@/content/types";

/** "Other Blogs" related-posts band on blog detail pages. */
export const OtherBlogs = ({ posts }: { posts: BlogPost[] }) => (
  <section className="section-gap bg-paper py-20 max-md:py-12">
    <div className="container-site">
      <Reveal className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
        <div>
          <Tag>Blogs</Tag>
          <h2 className="mt-6 text-h2">Other Blogs</h2>
        </div>
        <ArrowLink href="/blogs">View All Blogs</ArrowLink>
      </Reveal>
      <div className="mt-11 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.1}>
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
