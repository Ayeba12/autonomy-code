import type { Metadata } from "next";
import { BlogsHero } from "@/components/blogs/BlogsHero";
import { BlogCard } from "@/components/cards/BlogCard";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { Tag } from "@/components/ui/Tag";
import { content } from "@/content/source";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogsPage = async () => {
  const posts = await content.getBlogPosts();

  return (
    <>
      <Navbar tone="light" />
      <main>
        <BlogsHero />

        {/* Blog grid — no filters, no featured treatment (spec) */}
        <section className="mt-2 bg-paper py-20 max-lg:py-14 max-md:py-10">
          <div className="container-site">
            <Reveal>
              <Tag>All Blogs</Tag>
            </Reveal>
            <div className="mt-8 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 0.1}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
    </>
  );
};

export default BlogsPage;
