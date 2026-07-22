import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BlogDetailHero } from "@/components/blogs/BlogDetailHero";
import { BlogSidebar } from "@/components/blogs/BlogSidebar";
import { OtherBlogs } from "@/components/blogs/OtherBlogs";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { Navbar } from "@/components/site/Navbar";
import { RichText } from "@/components/ui/RichText";
import { content } from "@/content/source";
import type { RichBlock } from "@/content/types";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () => {
  const posts = await content.getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({
  params,
}: BlogDetailPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = await content.getBlogPost(slug);
  if (!post) return {};
  // Template pattern: meta description = post title (blog-details.md).
  return { title: post.title, description: post.title };
};

type ImageBlock = Extract<RichBlock, { type: "image" }>;

type BodySegment =
  | { kind: "blocks"; blocks: RichBlock[] }
  | { kind: "image-pair"; images: ImageBlock[] };

/**
 * Groups runs of 2+ consecutive image blocks into side-by-side pairs
 * (template `.view-details-image-wrapper`); everything else renders
 * through the shared RichText component. Single images stay inline.
 */
const segmentBody = (body: RichBlock[]): BodySegment[] => {
  const segments: BodySegment[] = [];
  let i = 0;

  while (i < body.length) {
    const block = body[i];
    if (block.type === "image" && body[i + 1]?.type === "image") {
      const images: ImageBlock[] = [];
      while (i < body.length && body[i].type === "image") {
        images.push(body[i] as ImageBlock);
        i += 1;
      }
      segments.push({ kind: "image-pair", images });
      continue;
    }

    const last = segments[segments.length - 1];
    if (last?.kind === "blocks") {
      last.blocks.push(block);
    } else {
      segments.push({ kind: "blocks", blocks: [block] });
    }
    i += 1;
  }

  return segments;
};

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { slug } = await params;
  const post = await content.getBlogPost(slug);
  if (!post) notFound();

  const posts = await content.getBlogPosts();
  // Related = first 3 posts excluding the current one (blog-details.md §4).
  const otherPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const segments = segmentBody(post.body);

  return (
    <>
      <Navbar tone="dark" />
      <main>
        <BlogDetailHero post={post} />

        {/* Two-column article: rich text left, sticky sidebar right.
            No share buttons, no category chip (spec: blog-details.md). */}
        <section className="bg-white py-20 max-lg:py-14 max-md:py-10">
          <div className="container-site flex items-start gap-16 max-lg:flex-col max-lg:gap-10">
            <article className="flex min-w-0 flex-1 flex-col gap-5">
              {segments.map((segment, i) =>
                segment.kind === "image-pair" ? (
                  <Reveal key={i}>
                    <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
                      {segment.images.map((image, j) => (
                        <Image
                          key={j}
                          src={image.image.src}
                          alt={image.image.alt}
                          width={image.image.width ?? 876}
                          height={image.image.height ?? 660}
                          className="h-auto w-full rounded-card object-cover"
                        />
                      ))}
                    </div>
                  </Reveal>
                ) : (
                  <Reveal key={i}>
                    <RichText blocks={segment.blocks} />
                  </Reveal>
                ),
              )}
            </article>

            <BlogSidebar />
          </div>
        </section>

        <OtherBlogs posts={otherPosts} />
        <CtaSection />
      </main>
    </>
  );
};

export default BlogDetailPage;
