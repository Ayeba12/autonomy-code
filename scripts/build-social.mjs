/**
 * Builds the social image set into social/ (not served by the site):
 * three messages, each in five formats.
 *
 *   node scripts/build-social.mjs
 *
 * Same house style as the share cards: ivory ground, the site's heading
 * face, a graphite drawing in a rounded card, the gold thread.
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

const messages = [
  {
    key: "practice",
    eyebrow: "The NO GraGra Practice",
    title: ["Autonomy is peace,", "given structure."],
    sub: "Coaching and strategy with DK Jonah, Knowledge Architect.",
    img: "home/hero-peace-given-structure.webp",
    at: "right",
  },
  {
    key: "annual-reset",
    eyebrow: "This year's theme · Standards",
    title: ["The Annual", "Reset 4.0"],
    // Non-breaking spaces keep "7 pm UK" on one line.
    sub: "27 November, 4 and 5 December 2026 · 7\u00a0pm\u00a0UK · Online",
    img: "reset/reset-hero.webp",
    at: "left top",
  },
  {
    key: "autonomy-compass",
    eyebrow: "The door to the practice",
    title: ["The Autonomy", "Compass"],
    sub: "Twenty-five statements. A Claim Intensive. A written Blueprint.",
    img: "home/tier-scan.webp",
    at: "left",
  },
];

const dataUri = (buffer, type) => `data:image/${type};base64,${buffer.toString("base64")}`;
const logo = dataUri(await sharp(path.join(root, "public/images/email/logo.png")).resize({ height: 160 }).png().toBuffer(), "png");
const h = (type, style, children) => ({ type, props: { style, children } });

/** The drawing, cropped to w×h at 2x, edges trimmed so no scan border shows. */
const art = async (m, w, h2) => {
  const W = w * 2, H = h2 * 2;
  const buffer = await sharp(path.join(root, "public/images", m.img))
    .resize(Math.round(W * 1.14), Math.round(H * 1.14), { fit: "cover", position: m.at })
    .extract({ left: Math.round(W * 0.07), top: Math.round(H * 0.07), width: W, height: H })
    .jpeg({ quality: 90 })
    .toBuffer();
  return dataUri(buffer, "jpeg");
};

const picture = (src, w, h2, radius) => ({ type: "img", props: { src, width: w, height: h2, style: { width: w, height: h2, borderRadius: radius } } });
const logoMark = (height) => ({ type: "img", props: { src: logo, height, style: { height, width: Math.round(height * 2.18) } } });

/** Eyebrow, headline, gold line and sentence, sized by `s`. */
const words = (m, s, extra = {}) =>
  h("div", { display: "flex", flexDirection: "column", ...extra }, [
    h("div", { display: "flex", fontSize: 17 * s, fontWeight: 500, letterSpacing: 3.4 * s, textTransform: "uppercase", color: color.hot }, m.eyebrow),
    h(
      "div",
      { display: "flex", flexDirection: "column", marginTop: 18 * s, fontFamily: "Stack", fontSize: 66 * s, fontWeight: 500, lineHeight: 1.08, letterSpacing: -1.8 * s, color: color.ink },
      m.title.map((line) => h("div", { display: "flex" }, line)),
    ),
    h("div", { display: "flex", marginTop: 26 * s, width: 84 * s, height: Math.max(3, 3 * s), backgroundImage: THREAD }, ""),
    h("div", { display: "flex", marginTop: 24 * s, fontSize: 25 * s, lineHeight: 1.4, color: color.slate }, m.sub),
  ]);

const foot = (s) =>
  h("div", { display: "flex", alignItems: "center", fontSize: 19 * s, fontWeight: 500, color: color.ink }, [
    h("div", { display: "flex" }, "theautonomycode.com"),
    h("div", { display: "flex", marginLeft: 14 * s, marginRight: 14 * s, width: 5 * s, height: 5 * s, borderRadius: 5 * s, backgroundColor: color.brand }, ""),
    h("div", { display: "flex", fontWeight: 400, color: color.slate }, "DK Jonah"),
  ]);

const frame = (W, H, children, thread = 8) =>
  h("div", { width: W, height: H, display: "flex", flexDirection: "column", backgroundColor: color.paper, fontFamily: "Inter" }, [
    h("div", { display: "flex", flex: 1 }, children),
    h("div", { display: "flex", height: thread, width: W, backgroundImage: THREAD }, ""),
  ]);

const formats = [
  {
    // General link preview; also GitHub's social preview size.
    key: "link-1280x640", W: 1280, H: 640,
    build: async (m) =>
      frame(1280, 640, [
        h("div", { display: "flex", flexDirection: "column", justifyContent: "space-between", width: 624, padding: "44px 40px 38px 64px" }, [logoMark(60), words(m, 1), foot(1)]),
        h("div", { display: "flex", padding: "44px 44px 38px 0" }, [picture(await art(m, 612, 550), 612, 550, 30)]),
      ]),
  },
  {
    // Instagram and Facebook feed post.
    key: "square-1080", W: 1080, H: 1080,
    build: async (m) =>
      frame(1080, 1080, [
        h("div", { display: "flex", flexDirection: "column", justifyContent: "space-between", width: 1080, padding: "56px 64px 44px" }, [
          h("div", { display: "flex", justifyContent: "space-between", alignItems: "center" }, [logoMark(64), foot(1.05)]),
          picture(await art(m, 952, 470), 952, 470, 34),
          words(m, 1.12),
        ]),
      ], 10),
  },
  {
    // Instagram story and WhatsApp status. Top and bottom are kept clear,
    // where the apps draw their own controls.
    key: "story-1080x1920", W: 1080, H: 1920,
    build: async (m) =>
      frame(1080, 1920, [
        h("div", { display: "flex", flexDirection: "column", width: 1080, padding: "250px 72px 230px" }, [
          logoMark(84),
          h("div", { display: "flex", marginTop: 56 }, [picture(await art(m, 936, 900), 936, 900, 40)]),
          words(m, 1.32, { marginTop: 72 }),
          h("div", { display: "flex", marginTop: 64 }, [foot(1.5)]),
        ]),
      ], 14),
  },
  {
    // LinkedIn profile banner. The profile photo covers the lower left,
    // so the drawing sits there and the words stay to the right.
    key: "linkedin-banner-1584x396", W: 1584, H: 396,
    build: async (m) =>
      frame(1584, 396, [
        h("div", { display: "flex", padding: "28px 0 24px 36px" }, [picture(await art(m, 560, 336), 560, 336, 26)]),
        h("div", { display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, padding: "30px 56px 26px 64px" }, [
          h("div", { display: "flex", justifyContent: "space-between", alignItems: "center" }, [logoMark(44), foot(0.9)]),
          words(m, 0.74),
        ]),
      ], 6),
  },
  {
    // X (Twitter) header. Same reasoning as the LinkedIn banner.
    key: "x-header-1500x500", W: 1500, H: 500,
    build: async (m) =>
      frame(1500, 500, [
        h("div", { display: "flex", padding: "36px 0 30px 44px" }, [picture(await art(m, 560, 426), 560, 426, 30)]),
        h("div", { display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, padding: "40px 60px 34px 64px" }, [
          h("div", { display: "flex", justifyContent: "space-between", alignItems: "center" }, [logoMark(50), foot(0.95)]),
          words(m, 0.86),
        ]),
      ], 8),
  },
];

const outDir = path.join(root, "social");
fs.mkdirSync(outDir, { recursive: true });
for (const m of messages) {
  for (const f of formats) {
    const tree = await f.build(m);
    const png = Buffer.from(await new ImageResponse(tree, { width: f.W, height: f.H, fonts }).arrayBuffer());
    const file = `${m.key}-${f.key}.jpg`;
    const info = await sharp(png).jpeg({ quality: 90, mozjpeg: true }).toFile(path.join(outDir, file));
    console.log(`${file} ${Math.round(info.size / 1024)}KB`);
  }
}
