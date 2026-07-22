import Image from "next/image";
import type { RichBlock } from "@/content/types";

/** Renders portable RichBlock content (blog posts, job posts, projects). */
export const RichText = ({ blocks }: { blocks: RichBlock[] }) => (
  <div className="flex flex-col gap-5">
    {blocks.map((block, i) => {
      switch (block.type) {
        case "h2":
          return (
            <h2 key={i} className="mt-6 text-h3 first:mt-0">
              {block.text}
            </h2>
          );
        case "h3":
          return (
            <h3 key={i} className="mt-4 text-h4 first:mt-0">
              {block.text}
            </h3>
          );
        case "h4":
          return (
            <h4 key={i} className="mt-3 text-h5 first:mt-0">
              {block.text}
            </h4>
          );
        case "p":
          return (
            <p key={i} className="text-body-l text-smoke">
              {block.text}
            </p>
          );
        case "ul":
          return (
            <ul key={i} className="flex list-disc flex-col gap-2 pl-6 text-body-l text-smoke">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        case "ol":
          return (
            <ol key={i} className="flex list-decimal flex-col gap-2 pl-6 text-body-l text-smoke">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          );
        case "quote":
          return (
            <blockquote
              key={i}
              className="border-l-2 border-brand pl-5 text-body-xl text-ink italic"
            >
              {block.text}
              {block.cite && (
                <cite className="mt-2 block text-body-s not-italic text-smoke">
                  {block.cite}
                </cite>
              )}
            </blockquote>
          );
        case "image":
          return (
            <Image
              key={i}
              src={block.image.src}
              alt={block.image.alt}
              width={block.image.width ?? 1200}
              height={block.image.height ?? 800}
              className="h-auto w-full rounded-card"
            />
          );
        case "divider":
          return <hr key={i} className="border-line" />;
      }
    })}
  </div>
);
