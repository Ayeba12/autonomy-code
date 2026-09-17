import type { FaqItem } from "./types";

/**
 * The Annual Reset 4.0 (landing page copy, client-final, September 2026).
 * A yearly workshop, powered by The Autonomy Code. The copy here is DK's
 * and is reproduced in page order; only a typo ("7 pmm") was corrected.
 *
 * Prices are allowed on this page: it is the offer's own landing page,
 * at the point of booking (content.md §26 rule 5).
 */

/**
 * Where every "Take your seat" button goes: the checkout step, where the
 * seat is chosen and the terms and refund policy are read before Stripe.
 */
export const SEAT_HREF = "/annual-reset/checkout";

/** Contact address for the pricing block. Null until the client confirms one. */
export const SEAT_CONTACT_EMAIL: string | null = null;

/**
 * Booking phases, from the client's dates: early bird runs until
 * 1 November, standard pricing from 1 November, and booking closes at the
 * end of 13 November. Instants are UTC; the workshop runs on UK time.
 */
export const EARLY_BIRD_ENDS = "2026-11-01T00:00:00Z";
export const BOOKING_CLOSES = "2026-11-14T00:00:00Z";

export type BookingPhase = "early" | "standard" | "closed";

export const bookingPhase = (now: Date): BookingPhase => {
  if (now >= new Date(BOOKING_CLOSES)) return "closed";
  if (now >= new Date(EARLY_BIRD_ENDS)) return "standard";
  return "early";
};

export interface SeatPrice {
  price: string;
  /** The Stripe Payment Link for this seat. Null until the client supplies it. */
  stripeUrl: string | null;
}

export interface SeatOption {
  id: string;
  label: string;
  note: string;
  /** Early-bird price, where the seat has one. */
  early: SeatPrice | null;
  standard: SeatPrice;
}

/**
 * The seats a visitor can choose at checkout. One Payment Link per price:
 * the client pastes them in here as Stripe issues them.
 */
export const seatOptions: SeatOption[] = [
  {
    id: "international",
    label: "UK and international",
    note: "Paid in pounds sterling",
    early: { price: "£99", stripeUrl: null },
    standard: { price: "£199", stripeUrl: null },
  },
  {
    id: "nigeria",
    label: "Nigeria",
    note: "Priced regionally, paid in naira",
    early: null,
    standard: { price: "₦40,000", stripeUrl: null },
  },
];

/** The price that applies to a seat in the current phase. */
export const seatPriceFor = (seat: SeatOption, phase: BookingPhase): SeatPrice =>
  phase === "early" && seat.early ? seat.early : seat.standard;

/**
 * The checkout step. Terms and refund policy are DRAFT wording in the
 * house voice, written for DK's review before booking opens; they follow
 * the money rules on /terms (price shown first, paid at booking, plainly).
 */
export const resetCheckout = {
  title: "Take your seat.",
  lead: "Choose your seat, read how the Reset works and how refunds are handled, then continue to secure payment.",
  steps: {
    seat: { number: "01", title: "Your seat" },
    terms: { number: "02", title: "How it works" },
    refunds: { number: "03", title: "Refunds" },
  },
  earlyBirdNote: "Early bird until 1 November, then £199.",
  terms: [
    {
      heading: "What you are booking",
      body: "A seat at The Annual Reset 4.0: three live online sessions on 27 November, 4 December and 5 December 2026 at 7 pm UK time, the Reset Workbook, your LifeSync Stencil, the GROWTH Goals framework and the recordings. It is run by DK Jonah through The NO GraGra Practice.",
    },
    {
      heading: "Joining the sessions",
      body: "The joining link and the workbook are sent to the email address you give at payment, before the first session. Sessions are held at 7 pm UK time, so please check the hour in your own time zone.",
    },
    {
      heading: "The recordings",
      body: "Every session is recorded and shared with everyone who booked, so a missed session does not cost you the Reset. Recordings are for your personal use and are not to be shared or published.",
    },
    {
      heading: "The materials",
      body: "The workbook, the Stencil and the framework are yours to use for your own life and work. Please do not copy, sell or distribute them. The thinking behind them remains DK Jonah's.",
    },
    {
      heading: "The room",
      body: "The sessions are live and honest. What other people share in the room stays in the room.",
    },
    {
      heading: "What this is not",
      body: "The Reset is a workshop about standards, structure and decisions. It is not therapy or counselling, and it is not medical, legal or financial advice.",
    },
    {
      heading: "If a session has to move",
      body: "If DK has to move a session, you will hear by email with the new date. If the new date does not work for you, you can ask for a full refund of your seat.",
    },
    {
      heading: "Payment",
      body: "The price is the one shown at booking, in pounds sterling or Nigerian naira. Payment is taken by Stripe on Stripe's own pages. Your card details never reach us.",
    },
  ],
  refunds: [
    {
      heading: "Changing your mind",
      body: "You can cancel within 14 days of booking for a full refund, as long as the first session has not yet taken place. Write to us and the refund goes back to the card you paid with. Stripe usually returns it within ten working days.",
    },
    {
      heading: "After the 14 days",
      body: "Once the 14 days have passed, or the first session has been held, the seat is not refundable: it has been held for you and the materials have been sent. You can pass your seat to someone else up to 26 November by sending us their name and email address.",
    },
    {
      heading: "If we cancel",
      body: "If the Reset itself is cancelled, you receive a full refund or a seat at the next Reset, whichever you prefer.",
    },
  ],
  agreement: "I have read how the Reset works and the refund policy, and I agree to them.",
  agreementError: "Please tick the box to confirm you have read the terms and the refund policy.",
  continueLabel: "Continue to secure payment",
  stripeNote: "You will be taken to Stripe to pay. Your card details never reach us.",
  awaitingLink: "The payment link for this seat is being set up. Write to us and we will hold your seat for you.",
  closed: {
    title: "Booking for this year's Reset has closed.",
    body: "The seats are taken and the room is set. If you would like to hear when the next Reset opens, write to us and we will let you know first.",
  },
  thanks: {
    title: "Your seat is taken.",
    body: "Thank you. A receipt from Stripe is on its way to you, and the joining link and the Reset Workbook will follow by email before the first session.",
    next: [
      "Friday 27 November, 7 pm UK: Audit",
      "Friday 4 December, 7 pm UK: Align",
      "Saturday 5 December, 7 pm UK: Anchor",
    ],
    note: "If the receipt has not arrived within an hour, check your spam folder, then write to us.",
  },
};

export const reset = {
  name: "The Annual Reset 4.0",
  dates: "27 November, 4 and 5 December 2026",
  time: "7 pm UK",
  format: "Online",
  poweredBy: "Powered by The Autonomy Code",
  earlyBirdLabel: "Take your seat, £99 until 1 November",
  bookingCloses: "Booking closes 13 November.",
  hero: {
    title: "You are not behind. You are living by standards you never agreed to.",
    sub: "Three sessions to close this year honestly, find out whose rules you have been following, and enter the next one holding only the ones you choose.",
    note: "Online, 7 pm UK time, three live sessions across two weeks.",
  },
  whereYouAre: {
    lead: "You have built something real. The work is good. People come to you for advice, and they are right to.",
    /** Same paragraph, set in bold at DK's request (revised instructions, 16 Sept). */
    leadEmphasis:
      "From the outside, there is nothing anyone would tell you to fix, and that is part of the problem, because there is nothing obviously wrong to point at.",
    turn: "But you know something is off.",
    diagram: ["What you built", "The distance", "How it feels"],
    diagramNote: "No amount of achievement seems to close it.",
    after:
      "So you do what capable people do. You assume the answer is more discipline, better systems, a harder push in January.",
    afterTurn: "It is not.",
    close: "The most dangerous place to be is capable, credible, and not quite yours.",
  },
  standards: {
    lead: "Every one of us is running on a set of standards. Not goals, not values, not intentions. The lines we hold about how we live, what we accept, what we will and will not build a life around.",
    turn: "Almost nobody chose theirs. They arrive from three places, and none of them asked your permission.",
    sources: [
      {
        title: "Inherited and handed down",
        body: "Before you were old enough to decline. Some arrived when you were seven and have never once been questioned since.",
      },
      {
        title: "Absorbed and taken in",
        body: "From a culture, an industry, a room you wanted to belong to. Nobody stated it. Everybody obeyed it.",
      },
      {
        title: "Agreed to, once",
        body: "Chosen honestly, in a season that has long since ended, and never brought back up for review.",
      },
    ],
    after:
      "Some are still right. Some are the exact reason you are tired. You cannot tell which is which until you look.",
    close: "This is why resolutions fail. You are setting new goals on top of old standards.",
  },
  difference: {
    value: {
      title: "A value describes what you care about.",
      body: "Costs nothing to name. Rules nothing out. Disqualifies no behaviour. You can hold every value you have ever named and change absolutely nothing about how you live.",
    },
    standard: {
      title: "A standard is a line you hold.",
      body: "It has a cost. You can break it, and you know when you have. It names behaviour you refuse to build a life around, so answering it changes the year.",
    },
    after:
      "Most year-end work asks what you want. That question is easy to answer and changes nothing. Wanting has never been your problem.",
    close: "You do not need more information. You need ownership.",
  },
  /**
   * Public-facing session names are the bare Audit / Align / Anchor; the
   * "to Source / to Standard / to Structure" language is taught inside the
   * sessions (revised instructions, 16 Sept).
   */
  moves: [
    {
      number: "01",
      title: "Audit",
      body: "Where your patterns came from, and who set them.",
      date: "Friday 27 November",
      image: { src: "/images/reset/reset-move-audit.webp", alt: "Graphite sketch of a woman with a magnifying glass tracing footprints across a ledger back to the first, in gold" },
    },
    {
      number: "02",
      title: "Align",
      body: "The lines you choose to hold, and the goals built on them.",
      date: "Friday 4 December",
      image: { src: "/images/reset/reset-move-align.webp", alt: "Graphite sketch of two hands drawing one straight line along a ruler, the new line in gold" },
    },
    {
      number: "03",
      title: "Anchor",
      body: "What keeps those standards standing when the year gets hard.",
      date: "Saturday 5 December",
      image: { src: "/images/reset/reset-move-anchor.webp", alt: "Graphite sketch of a woman driving a stake into the ground to hold a tent in the wind, the stake and rope in gold" },
    },
  ],
  /** Three outcome sentences, one per line; the noun carries the weight. */
  outcomes: [
    { lead: "Identify the", noun: "Source" },
    { lead: "Define the", noun: "Standard" },
    { lead: "Build the", noun: "Structure" },
  ],
  sessions: [
    {
      label: "Session one",
      name: "Audit",
      when: "Friday 27 November, 7 pm UK, online",
      body: "You walk the year as it actually was. Where the time went, what kept repeating, what you kept tolerating and what that tolerance cost you. Then you trace the patterns backwards to find where they started.",
      extra: "You then have a week with that question. It is not one anyone answers well in a room.",
      leave: "You leave having identified the Source, the origin of the patterns that shaped your year.",
      image: { src: "/images/reset/reset-audit.webp", alt: "Graphite sketch of a woman walking her own footprints back to where they began, the first one in gold" },
    },
    {
      label: "Session two",
      name: "Align",
      when: "Friday 4 December, 7 pm UK, online",
      body: "You take what the Audit surfaced and decide. What stays, what goes, what gets rewritten. Then you set next year's direction using GROWTH Goals, the framework behind four years of Resets, grounded in the lines you have chosen rather than the ones you inherited.",
      extra: "One of those is testable. The other is a wish with better handwriting.",
      leave: "You leave having defined the Standard, the lines you are choosing to hold.",
      image: { src: "/images/reset/reset-align.webp", alt: "Graphite sketch of two hands drawing one straight line along a ruler, the line in gold" },
    },
    {
      label: "Session three",
      name: "Anchor",
      when: "Saturday 5 December, 7 pm UK, online",
      body: "This is the session nobody else runs. Not another plan. You build the mechanisms: rhythm, switches, the practical things that hold a standard when you are tired, busy or tempted. Your LifeSync Stencil is built here.",
      leave: "You leave having built the structure that keeps those standards standing when the year gets hard.",
      image: { src: "/images/reset/reset-anchor.webp", alt: "Graphite sketch of a tent holding in the wind, one guy rope and stake in gold" },
    },
  ],
  forList: [
    "You are credible and under-leveraged, and you have been for a while",
    "You keep hitting goals that do not land the way you expected",
    "You have done vision boards and word-of-the-year, and something in you knows it is not enough",
    "You are the capable one, the one others rely on, and nobody has asked how you are actually doing",
    "You want structure that fits how your mind genuinely works",
  ],
  notForList: [
    "You want motivation. This is not a motivational workshop",
    "You want someone to tell you what your life should look like",
    "You are not willing to look honestly at the year behind you",
  ],
  included: [
    "Three live sessions across two weeks, held online at 7 pm UK time",
    "The Reset Workbook, structured to the three sessions",
    "LifeSync Stencil",
    "The GROWTH Goals framework, in full",
    "The recordings, so a missed session does not cost you the Reset",
  ],
  host: {
    name: "DK Jonah",
    lines: [
      "A Knowledge Architect. She builds the systems that let capable people own their work and their lives rather than perform them.",
      "She created The Autonomy Code, a five-pillar framework for ownership and self-governance, and founded The NO GraGra Practice. NO GraGra is Yoruba in origin and means no frantic energy, no unnecessary struggle. Slow first, then precise. It is the deliberate opposite of hustle.",
      "She is the author of NO GraGra and DIY Branding, and the creator of the Decisions That Work framework.",
      "She has spent over fifteen years building frameworks for people whose minds do not run on standard productivity advice, because hers does not either.",
    ],
    pull: "People do not fail their goals. They succeed at standards they never chose.",
  },
  quotes: [
    {
      quote: "She knows how to stretch you and draw the best out of you through her unique, hands-on delivery. Her service heart alongside her desire for uncompromised excellence means I go away with tangible action and application plans.",
      name: "Omosola",
      role: "Transition coach and consultant",
    },
    {
      quote: "DK's coaching is client-centred and framed to meet you where you are. With her coaching, I can literally quantify my productivity level.",
      name: "Amina Omar-Ikaige",
      role: "Medical doctor",
    },
    {
      quote: "I learnt a lot from her just through the first consultation. I really appreciate her patience and professionalism. She didn't push me into anything, which made her easy to trust.",
      name: "Ope",
      role: "Client",
    },
  ],
  pricing: {
    tiers: [
      { label: "Early bird", note: "Until 1 November", price: "£99" },
      { label: "Standard", note: "From 1 November", price: "£199" },
      { label: "Nigeria", note: "Priced regionally", price: "₦40,000" },
    ],
    body: "Everything is included at every level: all three sessions, the workbook, the Stencil and the recordings.",
    payment: "Secure payment through Stripe.",
  },
  close: {
    title: "Whose standards have you been living by?",
    body: "You can answer that in November, with three sessions and a week of thinking. Or you can carry the question into another year and answer it the way you did last time.",
    dates: "27 November, 4 and 5 December, 7 pm UK.",
  },
  signature: ["The Annual Reset 4.0. Powered by The Autonomy Code.", "DK Jonah, The NO GraGra Practice."],
};

export const resetFaqs: FaqItem[] = [
  { question: "What if I cannot make a session live?", answer: "Every session is recorded and yours to keep. The work still gets done, just on your own clock." },
  { question: "Is this only for business owners?", answer: "No. Standards are about how you live your life. The people who get the most from it are often not running anything." },
  { question: "I have done goal-setting workshops before and nothing changed.", answer: "That's exactly why this one is built the way it is. Goal-setting fails when it sits on standards nobody examined. This year we start underneath." },
  { question: "How much work is there between sessions?", answer: "One question after the first session, carried for a week. That is deliberate. It needs time, not effort." },
  { question: "Why is the first session a week before the other two?", answer: "Because the most useful question in the Reset is one you cannot answer on the spot. The gap is part of the design." },
  { question: "Do I need to know The Autonomy Code already?", answer: "No. The Reset is powered by it, and it teaches itself as you go." },
  { question: "What actually happens to my December?", answer: "You give three sessions across two weeks, and you get January back." },
];
