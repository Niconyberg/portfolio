/**
 * CONTENT LIVES HERE. To add an entry, paste one object into ENTRIES below.
 *
 * Fields:
 *   year     number            drives the tape-measure ruler
 *   date     string            display label, e.g. "Summer 2008"
 *   stream   Stream            one of the keys in STREAMS below
 *   note     true              (optional) renders as a compact one-line entry
 *   title    string
 *   body     string            (optional) inline <a href> and <strong> allowed —
 *                               rendered as raw HTML, so only paste your own copy
 *   media    Media[]           (optional) any mix of:
 *     { img: 'url', cap?: 'caption' }     image via next/image; img: '' -> placeholder box
 *     { video: 'youtube-or-vimeo-url' }   auto-converted to an embed; video: '' -> placeholder box
 *     { link: 'url', label?: 'text' }     plain link button
 *   metrics  { num: string; lbl: string }[]   (optional) e.g. { num: '42.2', lbl: 'km' }
 *
 * Order top-to-bottom = newest to oldest. Entries sharing a `year` are grouped
 * under one year heading in the order given.
 */

export const STREAMS = {
  side: "Side projects",
  education: "Education",
  work: "Work history",
  other: "Other",
} as const;

export type Stream = keyof typeof STREAMS;

export type Media =
  | { img: string; cap?: string }
  | { video: string }
  | { link: string; label?: string };

export type Entry = {
  year: number;
  date: string;
  stream: Stream;
  note?: boolean;
  title: string;
  body?: string;
  media?: Media[];
  metrics?: { num: string; lbl: string }[];
};

export const entries: Entry[] = [
  {
    year: 2026,
    date: "May 29, 2026",
    stream: "other",
    title: "1st Marathon rebrands to MONS",
    body: "The realization: standard marathon training templates weren't the right fit. Rebranded the app to <strong>MONS</strong>.",
    media: [
      {
        link: "https://monsathletics.com/blog/i-have-been-lazy",
        label: "Read the story",
      },
    ],
  },
  {
    year: 2026,
    date: "May 16, 2026",
    stream: "other",
    title: "1st Marathon — Helsinki City Marathon",
    body: 'Coached by a self-built AI marathon coaching app (iPhone + Apple Watch), developed with <strong>Claude Code</strong>. <strong>Next.js · Supabase · iOS</strong>, built solo, shipped to the App Store. Sedentary to a 4:22 marathon in 8 months — the training method I tested on myself.',
    media: [{ video: "" }, { link: "", label: "App Store" }],
    metrics: [
      { num: "1", lbl: "person team" },
      { num: "4", lbl: "modalities" },
      { num: "42.2", lbl: "km, verified" },
    ],
  },
  {
    year: 2026,
    date: "February 2026",
    stream: "side",
    title: '"Most Expensive Product" — interactive essay',
    body: "A conceptual art project about consumer culture. Proof that not everything I build is meant to scale — some things are built to <strong>say something</strong>.",
    media: [{ img: "", cap: "interactive essay" }],
  },
  {
    year: 2025,
    date: "February 2025",
    stream: "side",
    title: "Founded Kotichef",
    body: 'A learning platform to help people become the chefs of their own homes — and live healthier, more enjoyable lives through it. Built with <strong>Claude</strong>. <a href="https://www.kotichefhub.com">kotichefhub.com</a>.',
  },
  {
    year: 2025,
    date: "January 2025",
    stream: "side",
    title: "Shipped my first AI-developed product — a Chrome extension",
    body: 'Right-click a link on a news site, send the article to an AI, and get a summary in a modal — no need to open the page. Built with ChatGPT, the OpenAI API, and a Render.com backend; Google OAuth login, Stripe payments. Started building December 2024, published January 5, 2025.',
  },
  {
    year: 2024,
    date: "2024",
    stream: "work",
    title: "Promoted to Agile Manager at Rightware",
    body: "Leading two product squads in agile software development. Line management of roughly 20 developers across Finland, Germany, Poland and the USA. Own R&D project management practices; passed ISO and ASPICE audits.",
  },
  {
    year: 2023,
    date: "2023",
    stream: "work",
    note: true,
    title: "Promoted to Product Owner at Rightware.",
  },
  {
    year: 2023,
    date: "2023",
    stream: "side",
    title: "Co-founded a beard oil brand — Perusmiehen Partaöljy",
    body: 'Built the online store at <a href="https://partaoljy.fi">partaoljy.fi</a>. A crash course in <strong>pricing, distribution, and margins</strong>.',
    media: [{ img: "", cap: "product / packaging" }],
  },
  {
    year: 2023,
    date: "2023",
    stream: "side",
    note: true,
    title:
      "Designed and built a salon booking site (parturikampaamosibe.fi) as a side web-dev gig.",
  },
  {
    year: 2020,
    date: "2020",
    stream: "work",
    note: true,
    title: "Promoted to Software Delivery Manager at Rightware.",
  },
  {
    year: 2020,
    date: "2020",
    stream: "side",
    title: "Founded Sicsty — a platform for independent journalists",
    body: "A no-code platform with a pay-per-read model and 90% payouts to writers. Integrated third-party services via APIs and webhooks. Attracted ~70 pilot journalists but never found the traction needed for a user-generated-content business. Shut down in 2024.",
  },
  {
    year: 2018,
    date: "2018",
    stream: "work",
    note: true,
    title:
      "Joined Rightware as Software Delivery Coordinator, coordinating delivery and licensing of software packages.",
  },
  {
    year: 2018,
    date: "2018",
    stream: "side",
    note: true,
    title:
      "First website ever built — an early, rough version of what became Kotichef. No code, just templates and stubbornness.",
  },
  {
    year: 2017,
    date: "2017",
    stream: "work",
    note: true,
    title:
      "Cash Management Adviser at OP Corporate Bank — point of contact for cash management services to the Finnish state and large enterprises.",
  },
  {
    year: 2016,
    date: "2011–2016",
    stream: "education",
    note: true,
    title:
      "Double degree in International Business — BBA at Helsinki Metropolia UAS, BA at IMC FH Krems, Austria. Thesis on solar panel leasing feasibility.",
  },
  {
    year: 2014,
    date: "2014",
    stream: "work",
    note: true,
    title:
      "Sourcing Analyst internship at Credit Suisse AG, Switzerland — vendor management framework and sourcing handbook.",
  },
  {
    year: 2001,
    date: "2001",
    stream: "other",
    title: "First time on a job site — age 11, shovel in hand",
    body: "Long before this page existed as a habit — digging ground on a construction site at eleven years old.",
    media: [{ img: "", cap: "shovel in hand, age 11" }],
  },
];
