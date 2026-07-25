# The Autonomy Code — Content System & Site Map

Source of truth for building autonomycode.com from the stodio-next template base.
Compiled from: the client briefing form, the Website Build Document (42pp), the
Services Menu (July 2026), and the SABI OS Introduction (June 2026, Google Drive).
Client: DK Jonah (dk@dkjonah.com) · The NoGraGra Practice.

**Design rule for this build: colors change, fonts do not.** The design system keeps
Stack Sans Headline + Inter exactly as built. (The client's brand doc names other fonts;
per project owner's instruction the template typography stands.)

---

## 1. Brand essence & voice

- **The feel:** calm, light, clear, quietly certain. Feminine without being floral.
  Grounds people by breath, not weight. When in doubt: more space, fewer words.
- **The line:** *Soft and clear, washed in light, not washed out. Elegant, spacious,
  understated. Clarity you can breathe in.*
- **The reader ("Ebi"):** credible but under-leveraged. Calm, intelligent, understated.
  Not short on ability; short on clarity, structure, rhythm, and self-trust. The site
  should feel like someone gently organising her thinking for her. Relief and order.
- **The test:** if a page gives a quiet, heavy feeling, it is wrong. If it lets you
  breathe, it is right.

### House style (non-negotiable)
1. **No em dashes.** Set as a comma or a full stop.
2. **No "free" anywhere** near the paid offers. The Scan is £97. Never dressed as free.
3. **No countdowns, no urgency, no hard-sell devices, no pop-ups.** The copy refuses
   pressure; the design must too.
4. **No discovery calls.** No "book a call", no "let's chat first". The Scan qualifies;
   on-site payment replaces the sales conversation.
5. **No live pricing on browse pages.** Prices appear only on offer landing pages at
   the point of booking or application (£97 Scan · £5,000 SABI CORE · £10,000 Legacy).
6. **One idea per screen.** Never crowded.
7. It is **No GraGra**: no rush, no force. Gentle on purpose.

### The one rule
Every page has one job: make the right person ready to take the **Ownership Scan**.
Warm, then route. The persistent button on every page: **Take the Ownership Scan**
(sits apart from the nav, never buried in a menu). The free warming layer is the
writing, the Trust Amplifier video, and the newsletter — the Scan itself is paid.

---

## 2. Color system (replaces Stodio palette; fonts untouched)

| Token (globals.css) | Old (Stodio) | New (Autonomy Code) | Role |
|---|---|---|---|
| `ink` | #0a0a0a | **#000000** True Black | The anchor. Used sparingly: closing CTA band, footer, titles. It holds, it never floods. |
| `brand` | #de322d | **#B8893A** Metallic Gold | The hero. Buttons, highlighted words, tag icons, the gold thread. Gold leads, never mutes. |
| `brand-hot` | #f7413d | **#7A5A22** Gold Shadow | Hover/pressed state for gold; deep end of the metallic ramp. |
| `paper` | #f3f3f3 | **#F3EDE0** Ivory | The ground. A room with the windows open, soft paper, never flat white. |
| `paper-2` | #f1f2f1 | **#ECE4D2** Deep Ivory | Subtle surface contrast on ivory (cards, inactive tabs). Shade of the ground. |
| `coal` | #232323 | **#1A1A1A** Soft Black | Cards and hairlines on black sections. |
| `smoke` | #5d5d5d | **#5d5d5d** (keep) | Secondary text on light. Functional gray; passes 4.5:1 on ivory. |
| `mute` | #a5a5a5 | **#a5a5a5** (keep) | Muted text on black. Functional. |
| `line` | #e6e6e6 | **#DADEE1** Dove | Hairlines, captions, structure. It breathes, it never dulls. |
| *(new)* `breath` | — | **#DDEAF2** Breath Blue | The air. ONE accent per page, used like a single open window (the pull-quote, one highlight band). |
| *(new)* `breath-tint` | — | **#EAF2F8** | Tint of Breath Blue for soft section fills. |
| *(new)* `gold-light` | — | **#F0E2B4** Champagne | Highlight end of the metallic gold ramp. |

### The gold thread (signature motif)
A fine metallic line that runs and loops across headers and dividers. Recurs across
the site; never blends, always catches the light.
Implementation: a 1–2px divider with `linear-gradient(90deg, #F0E2B4, #B8893A, #7A5A22)`
(utility `.gold-thread`), replacing the template's dashed-red border accents
(marquee borders, view-all underlines, "All Cases" strip). Buttons: gold gradient
(champagne top-light into core gold) rather than flat fill where feasible; solid gold
only for small details.

### Imagery
Light, natural, airy, space around the subject. No dark or moody photos, no busy
collages, no corporate stock. The Scan landing page is **image-light and type-led**
on purpose; optional slots for DK's hand-drawn line art. Brand asset sources (Canva
links in the build doc): logos (black/ivory), wordmarks, icons, headers, Five Pillars
graphic, Three States of Imbalance graphic. Video: `The_Autonomy_Code__Reclaiming_Your_Practice.mp4`
(Google Drive) for the Scan page briefing film slot.

---

## 3. Site map

### Primary navigation (six items + persistent CTA)
| Nav item | Route | Template page reused |
|---|---|---|
| Home | `/` | Home |
| The Method | `/method` | About-style narrative + services sections |
| Work Together | `/work-together` | Projects listing → ladder cards |
| About | `/about` | About (story-led) |
| Writing | `/writing` | Blogs listing |
| In Conversation | `/in-conversation` | Career listing shell → three link sections |
| **Take the Ownership Scan** (button, apart from nav) | `/ownership-scan` | — |

### Deeper & footer pages
| Page | Route | Notes |
|---|---|---|
| The Ownership Scan | `/ownership-scan` | Landing page, full copy §5.4. £97 shown. |
| SABI CORE | `/sabi-core` | Landing page. £5,000/yr shown at application point. |
| Legacy | `/legacy` | Landing page. £10,000/yr, invitation only. |
| The Wider Work | `/wider-work` | Link-out cards. |
| Speaking | `/speaking` | Enquiry form. The one page where the Scan steps back. |
| Contact | `/contact` | One contact route + newsletter. |
| Writing article | `/writing/[slug]` | Blog detail template. |
| Privacy Policy | `/privacy-policy` | §7. |
| Terms | `/terms` | §7. |
| 404 | not-found | §6.11. |

Removed from template: Pricing page (violates money rules), Careers + job details,
project details, style-guide dropdown links (style guide stays as internal reference
at `/utility-pages/style-guide`, unlinked from nav), 401, license/changelog/instruction
(unlinked; keep files or delete at build time).

### The Ladder (order of depth; shown on Work Together, named not priced)
1. **The Ownership Scan** — £97 entry door. 25 questions, five pillars. Includes the
   90-minute Autonomy Map-Out Session and the written Personal Autonomy Map.
2. **SABI CORE** — the flagship annual programme, £5,000/year. Quarterly cohorts, one
   pillar per quarter. SABI OS is the operating system taught inside.
3. **Legacy** — the deepest tier, £10,000/year. One to two people. Rare and private.
   By invitation only.

(Knowledge Audit £150 and The Year Programme exist in the Services Menu but are not
phase-one site pages; they can join Work Together later — the build stays modular.)

### The full path (the site must support this journey)
Recognition (writing, podcast, In Conversation) → Trust Amplifier video → Ownership
Scan (£97) → their Result → the 90-minute Map-Out Session → the Personal Autonomy Map
(48–72h) → 15-minute Walkthrough Call → the next route (usually SABI CORE, sometimes
Legacy). The map leads the recommendation, never pressure.

---

## 4. Page content

Copy marked **[verbatim]** is DK's final wording and must not be edited beyond
em-dash conversion. Everything else is written to house style and may be refined.

### 4.1 Home (`/`)
Job: make Ebi curious enough to take the Scan. Nothing else. Not a menu of everything DK does.

- **Hero** (ivory ground, type-led; gold thread under the eyebrow)
  - Eyebrow: `The Autonomy Code · A NoGraGra Practice`
  - H1: `Autonomy is peace, given structure.`
  - Sub: `A coaching and strategy practice for accomplished professionals whose
    expertise lives in scattered pieces. We organise your thinking so you can lean on it.`
  - CTA: `Take the Ownership Scan` (gold) · quiet secondary link: `See the method`
- **The quiet ache** (short recognition beat, generous space)
  - `From the outside, your work looks credible. Privately, it feels scattered.`
  - `You are doing a lot, but you cannot see the shape of it. You second-guess
    decisions you are qualified to make. That is not a discipline problem.
    It is an ownership problem.`
- **The five pillars at a glance** (five simple items, dove hairlines, gold numerals)
  - Identity · Message · Strategy · Resources · Relationships
  - One line each (see §4.2 for the lines).
- **The one invitation** (breath-blue band, the single accent)
  - `Twenty-five questions. Your pattern, your strained pillar, and your first move.`
  - CTA: `Take the Ownership Scan · £97`… *(price allowed here? No — home is a browse
    page. Button reads* `Take the Ownership Scan` *and the price appears on the landing page.)*
- **Proof, quietly** (In Conversation strip: three logos/links + one short quote)
  - Quote [verbatim]: `Nothing new was added to him. What was already his was returned.`
- **Soft close** (single black band, once per page)
  - `When you are ready, the door is one step. No rush. No force. No gra gra.`
  - CTA: `Take the Ownership Scan`

### 4.2 The Method (`/method`)
Job: explain the Autonomy Code so it feels like both relief and rigour.

- **Hero**: eyebrow `The Method` · H1 `From hidden captivity to self-governance.`
- **What autonomy means** [drawn from About copy, verbatim lines]:
  `Autonomy is not independence from people. It is independence from captivity.
  Enough clarity to know what you want, enough structure to pursue it, and enough
  self-trust to lead from that place.`
- **The condition it treats**: hidden captivity. `Functioning, but not free. Moving,
  producing, helping, leading, but not fully from your centre.`
- **The five pillars** (the system; card per pillar, gold numerals):
  1. **Identity** — from Borrowed Identity to Owned Ground. Who you are when the
     borrowed role no longer fits.
  2. **Message** — from private wisdom to public clarity. What you know, what you say,
     and what you can defend. (SABI OS lives here.)
  3. **Strategy** — from Unsupported Execution to Self-Governance. Sequence, decision,
     structure, and rhythm that fit your actual life.
  4. **Resources** — from Scattered Ownership to Owned Capacity. What your time,
     energy, attention, money, and support can truly hold.
  5. **Relationships** — belonging without performance. Support that does not cost
     you your centre.
- **The operating flow** (SABI OS, plain language): `Discover → Sort → Interpret →
  Decide → Build.` `Discovery alone can become another hiding place. The work is
  decision-led.`
- **The Year One arc & delivery**: quarterly cohorts, one pillar per quarter,
  diagnostic deepening across all five over the year. `This is not a course.
  It is a structured system.`
- **Close**: `Every case begins the same way. With a diagnosis.` → CTA Scan.

### 4.3 Work Together (`/work-together`)
Job: hold the whole Ladder in one calm view so the reader can find her step.
Named, not priced. Three cards in order of depth (reuse ladder/card components):

1. **The Ownership Scan** — `The door. Twenty-five questions across the five pillars,
   a 90-minute Map-Out Session, and a written Personal Autonomy Map you keep.
   Every engagement begins here, no exceptions.` → `Start with the Scan`
2. **SABI CORE** — `The flagship. A year inside a structured system: quarterly
   cohorts, one pillar per quarter, built on the SABI OS operating system.
   For the reader who is ready to build from owned ground.` → `Explore SABI CORE`
3. **Legacy** — `The deepest tier. One to two people at a time, rare and private,
   by invitation. The Map leads the recommendation.` → `About Legacy`

Footer note on the page: `Prices live on each page, shown plainly before any
commitment. Money and clarity travel together here: no calls, no negotiation,
no surprises.`

### 4.4 The Ownership Scan (`/ownership-scan`) — [verbatim, DK's final copy]
Layout per the designer handoff: hero (eyebrow, large headline, one-line sub, gold
CTA, the line 'A map, not a verdict.') · 16:9 video frame (works without it) ·
recognition beat · three pressure cards · proof (three returns, plain, no photos) ·
the shift pull-quote (the ONE Breath-Blue accent) · five-pillar row · the offer
('three things, one payment', £97) · close on the single black section · footer.
Every CTA reads **`Book Your £97 Ownership Scan`** → checkout/booking link.

Copy, in order (em dashes set as commas/stops per house style):

- Eyebrow: `For coaches and consultants who know their private wisdom is stronger
  than their public clarity.`
- H1: `You don't have a discipline problem. You have an ownership problem.`
- Sub: `Watch this private briefing to see where ownership may have been outsourced
  in your identity, capacity, or strategy, and how to reclaim the first piece without
  forcing yourself into another borrowed system.`
- [Video slot: Build Your Practice on Owned Ground]
- CTA: `Book Your £97 Ownership Scan`
- Line under hero: `A map, not a verdict.`

**Recognition:**
`Something feels off. Not because you are failing.`
`From the outside, your practice may look credible. Your work may be respected.
Your clients may value what you do. Your experience may be real.`
`But privately, you know something is not fully yours.`
`The language. The framework. The positioning. The structure. The way you make
decisions. The way you execute.`
`You may be doing well, but not feeling free. You may know what you want, but still
struggle to choose it. You may have built something that works on the outside, but
feels like wearing the wrong clothes on the inside.`
`That is not a discipline problem. It is an ownership problem.`

**The three pressures** (`The briefing will help you see three places ownership may
have been outsourced.`):
1. **Borrowed Identity** — `You built your practice around a structure that works,
   but does not fully belong to you. The framework may be competent. The language may
   be polished. The positioning may even be profitable. But it still feels rented.
   Your private wisdom is stronger than your public clarity. You are performing the
   role, but not fully inhabiting it.`
2. **Scattered Ownership** — `Your knowledge, offers, ideas, obligations, and
   possibilities are spread across too many places with no clear centre holding them
   together. You are capable, but under-leveraged. You do a lot, but it does not
   compound. You know what you want, but you keep returning to second-guessing
   instead of choice.`
3. **Unsupported Execution** — `You keep trying to execute through plans that were
   not built from your actual life, capacity, patterns, or constraints. So the plan
   works in theory, but not in your hands. When energy is high, you move. When
   capacity drops, everything stalls. You are not undisciplined. You are trying to
   sustain ownership inside a structure that was never designed around how you
   actually operate.`

**The ground:**
`You are not the problem. The ground you are standing on is.`
`Most capable people are not failing. They are performing well inside structures that
were never built for them. Borrowed frameworks. Inherited identities. Outsourced
decisions. Strategies that technically work, but do not truly belong to them.`
`The mechanism is ownership. Not ownership as a mindset. Ownership as an operating
condition.`

**The shift** (pull-quote, Breath Blue accent, used once):
`When ownership is missing, everything restarts. When ownership is installed,
everything compounds.`
`When you build from owned ground, you stop second-guessing and start deciding.
You stop performing and start inhabiting. You stop restarting and start building.`

**The work behind it** (three pillars as movements):
`The Autonomy Code moves you from hidden captivity to self-governance through three
pillars:`
- `Identity. From Borrowed Identity to Owned Ground.`
- `Resources. From Scattered Ownership to Owned Capacity.`
- `Strategy. From Unsupported Execution to Self-Governance.`
`The goal is not to force yourself into another borrowed system. The goal is to see
where ownership went, and reclaim the first piece.`

**About DK Jonah (landing version):**
`I did not come to this work from the outside. This work comes from lived necessity.
Chronic illness. Interrupted ambition. A PhD I walked away from. A life rebuilt from
the inside out.`
`Over the past 15+ years, I have built and refined ownership-based systems across
real life, real constraints, and real responsibility.`
`My body of work includes: The Autonomy Code. NoGraGra. SABI. SyncCHECK. PACE. MAP.`
`I have trained more than 300 people. Mentored more than 150. Coached more than 30.
Coaches. Consultants. Creatives. Knowledge workers. People who already had the
expertise, but could not yet see the shape of it.`

**Client proof:**
`Chinedu, a Pan-African tech operator, came in hidden behind years of serious work,
credible, capable, but invisible to the people who needed to find him. He left with a
named framework, a market-facing voice, and a clear path forward.`
`Nothing new was added to him. What was already his was returned.`
`That is what this work does. It does not manufacture identity. It returns ownership.`

**The offer — three things, one payment (£97):**
1. `The Ownership Scan. A 25-question pre-assessment completed conversationally
   before the call. You answer from your current reality, not from who you wish you were.`
2. `The 90-minute Autonomy Map-Out Session. A live 1:1 session focused on the one
   priority pillar the scan surfaces. Identity. Resources. Strategy. We do not try to
   fix everything. We find the first place ownership needs to be reclaimed.`
3. `The Personal Autonomy Map. A written, personalised map delivered 48 to 72 hours
   after the session. You also receive a 15-minute walkthrough call so you can
   understand the map clearly and know what to do first.`
`You leave with one clear reclaim move. Not a list. Not a performance plan. One next
act of ownership.`

**This is for you if:** `You are a coach or consultant who has built something real.
You are respected externally, but privately aware that your practice, identity, or
execution does not feel fully yours. You know your private wisdom is stronger than
your public clarity. You are tired of borrowing other people's language, frameworks,
or structures to explain work that is already deeper than what the market currently
sees. You are ready to stop performing inside borrowed ground and begin reclaiming
ownership.`

**This is not for you if:** `You want a hype formula. You want someone to shout you
into action. You want a quick fix that ignores your real life. You want another
personality test. You want a scorecard for your worth. You want more information
without ownership.`
`This is not a shame tool. It is a diagnostic.`

**Close (the single black section):**
`If your practice works on the outside but does not feel fully yours on the inside,
do not add another borrowed system.`
`Find where ownership has been outsourced. Reclaim the first piece. Build from owned
ground.`
CTA: `Book Your £97 Ownership Scan`
`Walk away knowing exactly where it went, and what to reclaim first.`

Interim links (until on-site checkout is wired): Stripe payment link → ChatGPT scan
GPT → Google form → booking. Phase two: embedded scheduler + Stripe on-site
(TidyCal is removed per Section 9; cancellation policy shown before payment).

### 4.5 SABI CORE (`/sabi-core`)
Job: present the flagship year so the right Scan-taker recognises her next season.
Price appears once, plainly, at the application block (£5,000/year).

- Hero: eyebrow `SABI CORE · The flagship year` · H1 `A year of building from owned
  ground.` · sub `Quarterly cohorts. One pillar per quarter. A structured system,
  not a course.`
- **What it is:** `SABI CORE is the annual premium programme of The Autonomy Code.
  Over four quarters you move through the pillars one at a time, with diagnostic
  deepening across all five over the year. Small cohorts, held gently and held to
  account. No gra gra.`
- **SABI OS, the operating system inside:** `SABI is knowing. The wisdom, pattern,
  instinct, and lived experience you already carry. SABI OS is the operating system
  that helps you move from scattered knowing into owned expression. You are not
  starting from nothing. The work is to locate what you carry, sort it, name it, and
  decide what it is here to become.`
  - The four rooms (calm table/cards):
    `WAIT — locate yourself before building. The Waiting Room is not a delay, it is protection.`
    `SABI — see, sort, and value what you know.`
    `KÓKÓ — turn wisdom into a defensible message.`
    `RÒN — turn message into practice, offer, rhythm, and proof.`
  - The flow: `Discover → Sort → Interpret → Decide → Build.`
- **Who it is for / not for** (mirrors Scan lists, softened to cohort context).
- **How you enter:** `SABI CORE follows the Ownership Scan and the Map-Out Session.
  The Map leads the recommendation. If the year is your honest route, you will know
  why, in writing, before you commit.`
- **The application block:** `SABI CORE · £5,000 for the year · quarterly cohorts.`
  CTA `Apply for SABI CORE` (form/application; payment per Money Rules, money before
  work, 24-hour written hold before any financial decision).
- Soft close → for those not ready: `Begin with the Scan.`

### 4.6 Legacy (`/legacy`)
Job: name the deepest tier without selling it. Quiet, short page. Type-led.

- Hero: eyebrow `Legacy` · H1 `The deepest room.` · sub `One to two people at a time.
  Rare and private, by invitation.`
- Body: `Legacy is the highest-depth engagement of the practice: a year beside DK
  across all five pillars, for a person whose work carries weight beyond themselves.
  It is not applied for so much as arrived at. Most Legacy conversations begin inside
  SABI CORE, when the Map makes the route plain.`
- `Legacy · £10,000 for the year · by invitation only.`
- CTA (quiet): `Enquire in writing` → contact. Secondary: `Begin with the Scan.`

### 4.7 About (`/about`) — [verbatim, DK's final copy]
Job: build trust through story, not a CV. The template About page's story sections
carry this; counters/team sections are dropped or repurposed (see §6).

- H1: `You are not stuck because you lack skill.`
- Sub: `You are stuck because you are living a life you did not fully claim. I know.
  I lived there too.`
- `You look capable. Credentialed. Successful, at least on paper. You are everyone's
  safety net, there for everyone while no one is quite there for you. And still,
  quietly, something is off that you cannot name.`
- `You are not lazy and you are not lost. You are doing everything right and you
  still feel captive in a life you are no longer sure you chose.`
- `There is a name for that. Hidden captivity. Handing the key parts of your life to
  other people, to the world's definitions, to fear, without ever noticing you have
  done it. It is not that you lack skill. It is that you are living a life you have
  not fully claimed. I spent most of my own life there. So when I tell you I can see
  it, I am not guessing.`
- **I am DK Jonah.** `I have been called a fixer, a strategist, a knowledge
  architect. But underneath all of it, I have always been one thing: a detective.
  Since I was ten years old, I have looked for the clue everyone else walked past,
  and named the thing a person is feeling before they have found the words for it.
  People tell me the same thing, again and again: you make me feel seen. That is the
  whole of my work. I do not just see clues. I see people.`
- **The Autonomy Code was not built from a theory. It was built from my own captivity.**
  `For years I chased the wrong thing. I chased getting better through two decades of
  chronic illness, hoping for a return to independence. I chased the dream of the
  independent woman who needs no one and fixes everyone. I chased peace, and
  financial freedom, and every answer the books and the gurus promised. I had become
  an expert at helping other people see and solve their problems, and I still could
  not do it for my own life.`
  `It took my health to force me to stop. To sit quietly with myself and finally hear
  myself out. And what I found was not that I needed more independence. I needed
  ownership. I had outsourced so much of my life, to other people's approval, other
  people's timelines, definitions I never chose. The way out was never to climb
  alone. It was to choose my own climb.`
- **That is autonomy.** `Not independence from people. Independence from captivity.
  Enough clarity to know what you want, enough structure to pursue it, and enough
  self-trust to lead from that place, without losing yourself to pressure, confusion,
  or fear.`
  `The work changed its name as I changed, from Decisions That Work, to NoGraGra, to
  The Autonomy Code. Each name was simply me seeing a little more clearly.`
  `Life forced me into my own life. I do not force anyone else. That is why this work
  is gentle on purpose. No rush. No force. No gra gra. Because I know what it is to
  be shoved into your own life by pain, and I would rather walk you there with calm.`
- **So here is what I actually do.** `I help capable people who feel quietly captive
  find exactly where they lost ownership of their life, and build the structure to
  reclaim it. Not more information. You already have enough information. Ownership.`
- **Who this is for:** `The woman who looks perfect on the outside while the inside
  is a turmoil she cannot name, and who is finally ready to stop hiding behind being
  busy.`
- **Who this is not for:** `Anyone looking for motivation, a quick fix, or one more
  framework to collect. This is quiet, honest, structural work, and it begins with
  the truth.`
- Close: `Every case begins the same way. With a diagnosis.`
  CTA: `Take the Ownership Scan` · quiet link `Read my full story →` (DK Jonah site)
- Footer line: `DK JONAH · NOGRAGRA · THE AUTONOMY CODE`

### 4.8 Writing (`/writing` + `/writing/[slug]`)
Job: the thinking, and the book. Latest articles, Decisions That Work, newsletter +
Substack signup. Primary action here: subscribe to the newsletter.

Hero: eyebrow `Writing` · H1 `Thinking you can lean on.` · sub `Essays on autonomy,
ownership, and the quiet structure under a working life.` Newsletter block: `One
calm letter, when it is worth your time. No noise.` → `Subscribe`.

**Three launch articles (full drafts, §5) + nine outlined (§5.4).**

### 4.9 In Conversation (`/in-conversation`)
Job: proof and presence, quietly. Three tidy sections, each item linking out.
Curated, not exhaustive. A quiet line points hosts to Speaking.

- Hero: eyebrow `In Conversation` · H1 `Where the work has been spoken aloud.`
- Sections: **Interviews** · **Talks & Panels** · **Podcast** (placeholder items at
  build: title, host/venue, year, outbound link; client supplies the curated list).
- Quiet line: `Hosting a stage of your own? See Speaking.` → `/speaking`
- Close CTA: Scan.

### 4.10 The Wider Work (`/wider-work`)
Job: point to DK's other worlds without pulling focus. Short intro + link-out cards:
1. **NoGraGra** — the house and the philosophy. (link when live)
2. **DK Jonah** — the person behind the practice. (link when live)
3. **Amplify the Gospel** — (link)
4. **The Curious Creative with DK Jonah** — (link)
5. **The Podcast** — (link)
Intro: `The Autonomy Code is the storefront of a wider practice. These are the other
rooms of the house. Each stands on its own ground; this site stays focused on the
Code.`

### 4.11 Speaking (`/speaking`)
Job: let event hosts book DK. The one page where the Scan steps back.

- Hero: eyebrow `Speaking` · H1 `A calm voice for rooms that think.`
- **Themes:** autonomy and hidden captivity · self-trust and decisions · knowledge
  architecture (turning expertise into owned systems) · the NoGraGra philosophy
  (building without force). Faith-aware context available.
- **Who she speaks to:** professional communities, women's leadership rooms, creator
  and consultant audiences, teams navigating change.
- **Formats:** keynote / conference talk · half-day workshop or facilitation
  (frameworks used live) · panels and interviews. Rates by enquiry, in writing.
  (NHS / lived-experience work runs on a separate pathway.)
- Light proof: one clip slot + one quote.
- **Enquiry form:** name*, email*, organisation, event date, format (select), a few
  lines about the room*. Submit: `Enquire to book`.

### 4.12 Contact (`/contact`)
One contact route + newsletter capture. Calm, short.
- H1 `Say hello.` · `For questions about the work, write to dk@dkjonah.com or use
  the form. For stages, see Speaking. For everything else, the Scan is the door.`
- Form: First name*, Last name*, Email*, Message (optional). Submit `Send message`.
- Newsletter block (shared component).

---

## 5. Writing: launch articles

### 5.1 Busy is not the same as owned (full draft)
*The quiet difference that changes everything. · ~5 min read · Pillar: Strategy*

Busy has a good reputation. It looks like progress, it photographs well, and it
keeps the questions away. If your calendar is full, surely the work is working.

But you already suspect the truth. Busy is a speed. Owned is a direction.

A busy week can be assembled entirely from other people's priorities. Requests,
deadlines, obligations, the small daily taxes of being reliable. You can run a
whole year that way and end it with nothing that compounds, because none of it was
anchored to a centre you chose.

An owned week can look slower from the outside. Fewer commitments, fewer launches,
fewer yeses. What makes it different is that each piece belongs to a structure you
decided on purpose. The client work feeds the body of work. The writing feeds the
message. The rest protects the capacity that makes the rest possible.

Here is the quiet test. Look at the last month and ask of each significant block of
time: could I say, in one sentence, what this was building? Not what it was for.
What it was building. Busy answers the first question easily. Only ownership can
answer the second.

The difference is not effort. You are not under-working; most capable people are
over-working. The difference is that busyness borrows its shape from outside, and
ownership builds its shape from inside. One drains, the other compounds.

You do not fix this with a better planner. You fix it by finding the places where
the shape of your work was outsourced, and taking the first one back. That is a
diagnostic task, not a discipline task.

Start smaller than feels impressive. One block of time this week that answers to
your own structure. Protect it gently. Watch what it tells you.

*The Ownership Scan finds where the shape of your work went. Twenty-five questions,
your pattern, and your first move.*

### 5.2 Why capable people feel scattered (full draft)
*And the one thing that is actually missing. · ~5 min read · Pillar: Resources*

Scattered is the feeling most of my clients arrive with. Not failing. Not lost.
Scattered. The expertise is real, the body of work exists, and yet none of it seems
to sit in one place where they can lean on it.

The instinct is to blame focus. If I could just concentrate, choose a niche, stop
starting things. But scattered is rarely a focus problem. Focus is what capable
people have in abundance; it is how the work got built in the first place.

Scattered is a structure problem. Knowledge, offers, ideas, and obligations spread
across too many places with no clear centre holding them together. Each piece was a
reasonable decision at the time. Nobody decided the whole.

And when there is no centre, everything competes. Every new idea is a threat to
every existing commitment. Every request has to be judged from scratch, because
there is no structure to judge it against. That constant re-deciding is the real
exhaustion. It is why you can work a full week and feel like you moved nothing.

What is missing is not information, and it is not effort. It is a held shape: a
simple, owned structure that says what the work is, what it is becoming, and what
therefore matters this season. With that in place, decisions stop being verdicts on
your worth and become questions of fit. Does this belong to the shape or not?

You cannot see your own shape from inside the scatter; that is not a personal
failing, it is geometry. It takes a mirror. A colleague, a page, a diagnostic,
anything that stands outside the pile and reflects the pattern back.

The order of operations matters: locate before you build. Name what you actually
carry, sort what is load-bearing from what is noise, and only then decide what the
centre is. Most scattered people try to build their way out. Building without a
centre is how the scatter grew.

*If you want the mirror, the Ownership Scan is twenty-five questions and returns
your pattern, your strained pillar, and one first move.*

### 5.3 A short tour of the five pillars (full draft)
*Identity, Message, Strategy, Resources, Relationships. · ~6 min read · Pillar: all five*

The Autonomy Code works across five pillars. Not five topics. Five load-bearing
walls; when one is strained, the whole structure leans on the others and everything
feels heavier than it should.

**Identity** is who the work is coming from. The strain shows up as a role that
fits like borrowed clothes: competent, polished, even profitable, and somehow still
rented. The move is from Borrowed Identity to Owned Ground: doing the work from who
you actually are, not from the template you adopted to be taken seriously.

**Message** is what you know, made sayable. Most capable people have private wisdom
that is years ahead of their public clarity. The strain is speaking in other
people's language about work that is deeper than the market can currently see. The
move is a message you can own and defend: your words, carrying your knowledge, to
the people who need it.

**Strategy** is how decisions get made and carried out. The strain is executing
through plans that were never built from your actual life, so they work in theory
and stall in your hands. The move is from Unsupported Execution to Self-Governance:
sequence, structure, and rhythm designed around how you actually operate.

**Resources** is what holds the work up: time, energy, attention, money, support.
The strain is Scattered Ownership, running on capacity you have not honestly
counted. The move is to Owned Capacity: building at a pace your real life can keep,
which is the only pace that compounds.

**Relationships** is who the work is held with. The strain is belonging through
performance: being everyone's safety net, approval doing the job structure should
be doing. The move is support without self-abandonment; relationships that hold you
without holding the pen.

Five pillars, one honest admission: you cannot strengthen all five at once, and you
do not need to. There is always one pillar carrying the strain for the others.
Find it, and the work stops being everywhere and becomes one clear move.

That is why every engagement here begins with a diagnostic rather than a plan.
Twenty-five questions, one pattern, one strained pillar, one first move.

*When you are ready to find yours, take the Ownership Scan.*

### 5.4 Nine outlined articles
4. **Your knowledge is an asset the moment you name it** — turning what you know
   into something others can learn from. *(Naming as the first act of ownership; the
   undercounting of natural ability; ease as evidence of mastery; a naming exercise;
   route to Scan.)* Pillar: Message.
5. **Decisions that work** — a calm method for the choices that matter. *(The
   original name of the practice; decision captivity; the 24-hour written hold; how
   structure removes drama from choosing; route to Scan.)* Pillar: Strategy.
6. **Peace needs structure** — how steadiness becomes autonomy. *(Peace as the goal
   people name, autonomy as what they mean; peace given structure; why calm without
   structure decays into drift; route to Scan.)* Pillar: Identity.
7. **The cost of running your work on borrowed terms** — and how to take the terms
   back. *(Borrowed frameworks and inherited definitions; rent vs own; a terms audit;
   route to Scan.)* Pillar: Identity.
8. **Capacity over hustle** — building at a pace you can actually keep. *(Capacity
   as a money rule and a life rule; flare and low seasons; the honest week; route to
   Scan.)* Pillar: Resources.
9. **How to find your First Reclaim** — the one place to start, and why. *(Against
   fixing everything; the strained pillar; one next act of ownership; route to Scan.)*
10. **Clarity is a form of self-trust** — why seeing the shape of your work steadies
    you. *(Second-guessing as a structure gap, not a character flaw; the mirror
    principle; route to Scan.)* Pillar: Identity/Strategy.
11. **The quiet authority of doing less, better** — restraint as a strategy. *(What
    you should not build yet; restraint as part of autonomy; curation as proof of
    centre; route to Scan.)* Pillar: Strategy.
12. **From expert to architect** — turning what you know into a system others cannot
    copy. *(Expertise vs architecture; the Knowledge Architect's move; naming,
    structuring, and owning IP; route to SABI CORE via Scan.)* Pillar: Message.

---

## 6. Template → Autonomy Code build mapping

| Template piece | Fate | Notes |
|---|---|---|
| Navbar (mega dropdown) | Simplify | Six items + persistent gold Scan button. Dropdown becomes small "More" panel (Wider Work, Speaking, Contact, SABI CORE, Legacy) or plain links; no thumbnails needed. |
| Footer | Rework | Black band (the allowed black), gold thread divider, newsletter, columns: Explore / The Ladder / Elsewhere, wordmark `THE AUTONOMY CODE`, line `A NoGraGra Practice · DK Jonah`. |
| Hero (photo bg) | Replace | Type-led ivory hero with gold thread; no dark photo. Image-light. |
| Logo marquee | Repurpose | Becomes the In Conversation strip on Home (venue/podcast names), or remove if hype-adjacent. Gold thread top/bottom instead of dashed red. |
| Gallery loop | Drop or slow | Only if calm airy imagery exists; else remove. Never busy. |
| Counters | Repurpose | Quiet numbers on About/Method: 15+ years · 300+ trained · 150+ mentored · 30+ coached. No odometer theatrics on About (static, reveal only). |
| Services hover list | Repurpose | The five pillars list (Method + Home glance). |
| Sticky work showcase | Repurpose | Work Together ladder (3 cards) or Method pillars. |
| Pricing cards + tabs | Drop | Money rules: no browse pricing. Ladder cards are named, not priced. |
| FAQ accordion | Keep | Scan page optional FAQ + Method. Calm questions. |
| Testimonial slider | Repurpose | Single quiet quote blocks (Chinedu; later more). No slider theatrics needed; one voice at a time. |
| Blog cards/detail | Keep | Writing. Categories become pillars. |
| Career pages | Drop | No hiring content phase one. |
| Contact form | Keep | Simplified per §4.12. |
| Newsletter form | Keep | Copy: `One calm letter, when it is worth your time.` Success: `Welcome. You are on the list.` |
| CTA section | Rework | The single black close band: `When you are ready.` + Scan button. |
| 404 | Rework | `This page is not on the map.` + `Back to owned ground` → Home. Light ivory, not dark. |
| Marquee (careers hiring) | Drop | Hype-adjacent. |
| Style guide page | Keep internal | Update swatches to new palette; unlink from public nav. |

### Content-layer data model (src/content)
- `pillars.ts` (5), `ladder.ts` (3 offers + routes), `articles.ts` (3 full + 9
  outlines as drafts), `conversations.ts` (3 sections, placeholder items),
  `quotes.ts` (client proof), `speaking.ts` (themes/formats), `stats.ts`
  (15+/300+/150+/30+), `faqs.ts` (Scan page set).
- Types extend the existing ContentSource pattern; WordPress swap path unchanged.

---

## 7. Legal & policies (from build doc templates; lawyer review before launch)
- **Privacy Policy** (`/privacy-policy`): UK GDPR template provided; controller: The
  NoGraGra Practice / The Autonomy Code; contact dk@dkjonah.com; processors: OpenAI
  (ChatGPT scan), Google (Forms/Sheets/Gmail/Calendar), scheduler, Stripe; human
  review of scan results; UK international transfer safeguards; retention ~12
  months; 18+; ICO complaint route. Effective July 2026.
- **Terms** (`/terms`): from Coaching Services Master Terms template (Drive) +
  Money Rules relevant to the visitor: payment before work, cancellation policy
  shown at booking, 24-hour written hold, no refunds language TBC by client.
- **Booking policies** shown at point of payment (Money Rules): fee collected at
  booking; cancellation/no-show policy; 90 minutes protected.

## 8. Open items for the client (do not block build)
1. Curated list for In Conversation (items + links) and one Speaking clip/quote.
2. Live URLs for NoGraGra site, DK Jonah site, Amplify the Gospel, Curious Creative,
   podcast (Wider Work cards ship with placeholders).
3. Final cancellation/refund wording for the booking step.
4. Scan checkout: keep interim Stripe link + GPT + form chain, or wire embedded
   scheduler now (Cal.com + Stripe suggested).
5. Newsletter/Substack destination for the subscribe forms.
6. Hand-drawn line art assets, if wanted for the Scan hero and section breaks.
