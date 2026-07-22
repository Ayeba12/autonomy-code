import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import type { TeamMember } from "@/content/types";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    path: "M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H5.4V14h2.7v8h5.4z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    path: "M6.5 8.5H3.6V21h2.9V8.5zM5 7.2a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4zM21 13.9c0-3.2-1.7-4.7-4-4.7-1.8 0-2.6 1-3.1 1.7V8.5H11V21h2.9v-6.9c0-1.3.6-2.1 1.9-2.1 1.2 0 1.8.8 1.8 2.1V21H21v-7.1z",
  },
  {
    label: "WhatsApp",
    href: "https://web.whatsapp.com/",
    path: "M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.1 13.9c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3.1.2.1.7-.1 1.3z",
  },
];

/** Photo card with blurred dark hover/focus overlay (about spec §8). */
const TeamPhotoCard = ({ member }: { member: TeamMember }) => (
  <article className="group relative aspect-[3/4] h-full overflow-hidden rounded-2xl">
    <Image
      src={member.photo.src}
      alt={member.photo.alt}
      fill
      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
      className="object-cover"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/60 p-4 text-center text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
      <h3 className="text-h6">{member.name}</h3>
      <p className="text-body-s text-white/70">{member.role}</p>
      <hr className="my-3 w-16 border-white/30" />
      <div className="flex gap-2">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on ${social.label}`}
            className="flex size-11 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-brand"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d={social.path} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  </article>
);

/**
 * Team grid (about spec §8): title row, then two 4-col rows — a stat card
 * + 3 photo cards, and 3 photo cards + an info card with "Join Us Now".
 * The ",&impossible" spacing quirk is verbatim from the source.
 */
export const TeamSection = ({ team }: { team: TeamMember[] }) => {
  const rowOne = team.slice(0, 3);
  const rowTwo = team.slice(3, 6);

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
          <Reveal>
            <Tag>Team</Tag>
            <h2 className="mt-6 text-h2">
              The people
              <br />
              behind New Stodio
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="max-w-xs">
            <p className="text-body-m text-smoke">
              A small, senior team embedded directly into your product.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-4 max-md:mt-8">
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            <Reveal className="h-full">
              <article className="flex h-full min-h-56 flex-col justify-between gap-6 rounded-2xl bg-paper p-6">
                <p className="font-heading text-h2">37+</p>
                <p className="text-body-l text-mute">Team Members...</p>
              </article>
            </Reveal>
            {rowOne.map((member, i) => (
              <Reveal key={member.name} delay={(i + 1) * 0.1} className="h-full">
                <TeamPhotoCard member={member} />
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {rowTwo.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1} className="h-full">
                <TeamPhotoCard member={member} />
              </Reveal>
            ))}
            <Reveal delay={0.3} className="h-full">
              <article className="flex h-full min-h-56 flex-col justify-between gap-6 rounded-2xl bg-paper p-6">
                <p className="text-body-l">
                  {"We're all about hard work, smart solutions,&impossible deadlines. No fluff, just brilliance."}
                </p>
                <Button href="/career" variant="dark" className="self-start">
                  Join Us Now
                </Button>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
