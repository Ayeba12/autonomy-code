/**
 * Builds the social share cards (1200×630) into public/images/og/.
 *
 *   node scripts/build-og.mjs
 *
 * One layout in the house style: ivory ground, the site's heading face,
 * a graphite drawing in a rounded card, and the gold thread along the
 * foot. Re-run after changing a headline, a drawing or a service.
 */
import fs from "node:fs";
import path from "node:path";
import og from "next/og.js";
import sharp from "sharp";

const { ImageResponse } = og.default ?? og;
const root = path.resolve(import.meta.dirname, "..");
const font = (file) => fs.readFileSync(path.join(root, "scripts/og-fonts", file));
const fonts = [
  { name: "Stack", data: font("StackSansHeadline-500.ttf"), weight: 500, style: "normal" },
  { name: "Inter", data: font("Inter-400.ttf"), weight: 400, style: "normal" },
  { name: "Inter", data: font("Inter-500.ttf"), weight: 500, style: "normal" },
];

const color = { ink: "#000000", slate: "#454545", paper: "#f3ede0", brand: "#b8893a", hot: "#7a5a22" };
const THREAD = "linear-gradient(90deg, #7A5A22, #B8893A 25%, #F0E2B4 50%, #B8893A 75%, #7A5A22)";

/** The main pages. `at` is the sharp crop position for the drawing. */
const cards = [
  { key: "default", eyebrow: "The NO GraGra Practice", title: "Autonomy is peace, given structure.", sub: "Coaching and strategy with DK Jonah, Knowledge Architect.", img: "home/hero-peace-given-structure.webp", at: "right" },
  { key: "annual-reset", eyebrow: "This year's theme · Standards", title: "The Annual\nReset 4.0", sub: "27 November, 4 and 5 December 2026 · Online", img: "reset/reset-hero.webp", at: "centre" },
  { key: "autonomy-compass", eyebrow: "The door to the practice", title: "The Autonomy\nCompass", sub: "Twenty-five statements. A Claim Intensive. A written Blueprint.", img: "home/tier-scan.webp", at: "left" },
  { key: "method", eyebrow: "The Method", title: "Independence is freedom from. Autonomy is ownership of.", sub: "The five pillars of The Autonomy Code.", img: "method/method-hero.webp", at: "left" },
  { key: "work-together", eyebrow: "Work Together", title: "Find your step.", sub: "The whole menu in one calm view.", img: "scan/scan-ground.webp", at: "centre" },
  { key: "sabi-core", eyebrow: "SABI CORE · The flagship year", title: "A year of building from owned ground.", sub: "Strategy, one to one with DK Jonah.", img: "reset/reset-move-align.webp", at: "centre" },
  { key: "legacy", eyebrow: "Legacy Builder · By invitation", title: "The deepest room.", sub: "One to two people at a time. Done with you.", img: "home/tier-legacy.webp", at: "centre" },
  { key: "about", eyebrow: "About DK Jonah", title: "The story behind The Autonomy Code.", sub: "Hidden captivity, ownership, and building from owned ground.", img: "about/about-porch.webp", at: "centre" },
  { key: "writing", eyebrow: "Writing", title: "Thinking you can lean on.", sub: "Essays on autonomy, ownership, and the quiet structure under a working life.", img: "pillars/pillar-message.webp", at: "top" },
  { key: "speaking", eyebrow: "Speaking", title: "A calm voice for rooms that think.", sub: "Keynotes, workshops and panels with DK Jonah.", img: "home/tier-sabi-core.webp", at: "centre" },
  { key: "in-conversation", eyebrow: "In Conversation", title: "Where the work has been spoken aloud.", sub: "Interviews, podcasts, talks and panels.", img: "pillars/pillar-relationships.webp", at: "top" },
  { key: "wider-work", eyebrow: "The Wider Work", title: "The other rooms of the house.", sub: "The wider practice around The Autonomy Code.", img: "about/about-ripples.webp", at: "centre" },
  { key: "contact", eyebrow: "Contact", title: "Say hello.", sub: "info@theautonomycode.com", img: "about/about-still-life.webp", at: "centre" },
];

/** One card per service, read from the content file so they stay in step. */
const services = fs.readFileSync(path.join(root, "src/content/services.ts"), "utf8");
for (const m of services.matchAll(/slug: "([^"]+)",\s*image: \{\s*src: "\/images\/([^"]+)",[\s\S]*?name: "([^"]+)",[\s\S]*?category: "([^"]+)",\s*summary:\s*"([^"]+)"/g)) {
  cards.push({ key: `service-${m[1]}`, eyebrow: m[4], title: m[3], sub: m[5], img: m[2], at: "top" });
}

const dataUri = (buffer, type) => `data:image/${type};base64,${buffer.toString("base64")}`;
const logo = dataUri(await sharp(path.join(root, "public/images/email/logo.png")).resize({ height: 120 }).png().toBuffer(), "png");

const h = (type, style, children) => ({ type, props: { style, children } });

const titleSize = (title) => (title.includes("\n") ? 72 : title.length > 44 ? 44 : title.length > 30 ? 50 : title.length > 22 ? 58 : title.length > 16 ? 66 : 78);

const card = (c, art) =>
  h("div", { width: 1200, height: 630, display: "flex", flexDirection: "column", backgroundColor: color.paper, fontFamily: "Inter" }, [
    h("div", { display: "flex", flex: 1, padding: "44px 44px 38px 64px" }, [
      // Words
      h("div", { display: "flex", flexDirection: "column", justifyContent: "space-between", width: 560, paddingRight: 40 }, [
        { type: "img", props: { src: logo, height: 60, style: { height: 60, width: 131 } } },
        h("div", { display: "flex", flexDirection: "column" }, [
          h("div", { display: "flex", fontSize: 17, fontWeight: 500, letterSpacing: 3.4, textTransform: "uppercase", color: color.hot }, c.eyebrow),
          h(
            "div",
            { display: "flex", flexDirection: "column", marginTop: 18, fontFamily: "Stack", fontSize: titleSize(c.title), fontWeight: 500, lineHeight: 1.08, letterSpacing: -1.8, color: color.ink },
            // A line feed in a title sets the line break by hand.
            c.title.split("\n").map((line) => h("div", { display: "flex" }, line)),
          ),
          h("div", { display: "flex", marginTop: 26, width: 84, height: 3, backgroundImage: THREAD }, ""),
          h("div", { display: "flex", marginTop: 24, fontSize: 25, lineHeight: 1.4, color: color.slate }, c.sub),
        ]),
        h("div", { display: "flex", alignItems: "center", fontSize: 19, fontWeight: 500, color: color.ink }, [
          h("div", { display: "flex" }, "theautonomycode.com"),
          h("div", { display: "flex", marginLeft: 14, marginRight: 14, width: 5, height: 5, borderRadius: 5, backgroundColor: color.brand }, ""),
          h("div", { display: "flex", fontWeight: 400, color: color.slate }, "DK Jonah"),
        ]),
      ]),
      // The drawing
      h("div", { display: "flex", flex: 1, borderRadius: 30, overflow: "hidden" }, [
        { type: "img", props: { src: art, width: 532, height: 548, style: { width: 532, height: 548, borderRadius: 30 } } },
      ]),
    ]),
    // The gold thread
    h("div", { display: "flex", height: 8, width: 1200, backgroundImage: THREAD }, ""),
  ]);

const outDir = path.join(root, "public/images/og");
fs.mkdirSync(outDir, { recursive: true });
for (const c of cards) {
  const art = dataUri(
    // Cover a little larger than the frame, then take the middle, so the
    // darker paper edges some scans carry stay out of the card.
    await sharp(path.join(root, "public/images", c.img))
      .resize(1224, 1260, { fit: "cover", position: c.at })
      .extract({ left: 80, top: c.at === "top" ? 40 : 82, width: 1064, height: 1096 })
      .jpeg({ quality: 88 })
      .toBuffer(),
    "jpeg",
  );
  const png = Buffer.from(await new ImageResponse(card(c, art), { width: 1200, height: 630, fonts }).arrayBuffer());
  const info = await sharp(png).jpeg({ quality: 88, mozjpeg: true }).toFile(path.join(outDir, `${c.key}.jpg`));
  console.log(`${c.key}.jpg ${Math.round(info.size / 1024)}KB`);
}
