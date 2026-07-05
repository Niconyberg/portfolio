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
  construction: "Construction",
  venture: "Ventures",
  work: "Product work",
  marathon: "1st Marathon",
  tools: "Tools & experiments",
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
    date: "2026",
    stream: "construction",
    title: "Back to actual building: 1969 house renovation",
    body: 'Bought a 1969-built house to renovate largely myself. Built <strong>reno-estimator</strong> — a Claude Code agent with a SKILL.md architecture and a Python estimation engine — to plan and cost the work. The two halves of this log finally meet: software agents planning a physical build.',
    media: [{ img: "", cap: "the house — before" }],
  },
  {
    year: 2026,
    date: "2026",
    stream: "work",
    note: true,
    title:
      "Joined a skunkworks team defining an AI-driven real-time AR product at Rightware.",
  },
  {
    year: 2025,
    date: "2025",
    stream: "marathon",
    title: "1st Marathon — shipped to the App Store",
    body: 'AI coaching for first-time marathoners. <strong>Next.js · Supabase · iOS</strong>, built solo. The training method I tested on myself — I ran my first marathon on it.',
    media: [{ video: "" }, { link: "", label: "App Store" }],
    metrics: [
      { num: "1", lbl: "person team" },
      { num: "4", lbl: "modalities" },
      { num: "42.2", lbl: "km, verified" },
    ],
  },
  {
    year: 2025,
    date: "2025",
    stream: "marathon",
    note: true,
    title:
      "A 15-second training Reel hits ~50k views. Authentic beats educational — noted, doubled down.",
  },
  {
    year: 2025,
    date: "2025",
    stream: "tools",
    note: true,
    title:
      "Apple Notes → GitHub blog pipeline. Write on the couch, publish from the repo.",
  },
  {
    year: 2024,
    date: "2024",
    stream: "work",
    title: "Customer platform & product catalog at Rightware",
    body: 'Consolidated a scattered enterprise customer experience into one portal: onboarding, org hierarchies, permissions, licensing, downloads, learning. Defined the company’s <strong>official product catalog</strong> — the shared answer to "what do we actually sell." Built with Claude Code and two contributors.',
    metrics: [
      { num: "3", lbl: "people, total" },
      { num: "1", lbl: "platform shipped" },
    ],
  },
  {
    year: 2024,
    date: "2024",
    stream: "tools",
    note: true,
    title:
      "Went all-in on agentic coding. Internal talks, Slack channels, tooling access for colleagues.",
  },
  {
    year: 2021,
    date: "2021",
    stream: "venture",
    title: '"Most Expensive Product" — interactive essay',
    body: "A conceptual art project about consumer culture. Proof that not everything I build is meant to scale — some things are built to <strong>say something</strong>.",
    media: [{ img: "", cap: "interactive essay" }],
  },
  {
    year: 2020,
    date: "2020",
    stream: "work",
    note: true,
    title:
      "Product roles deepen — owning customer-facing systems end to end.",
  },
  {
    year: 2017,
    date: "2017",
    stream: "tools",
    note: true,
    title: "First websites. No code yet — templates, copy, and stubbornness.",
  },
  {
    year: 2016,
    date: "2016",
    stream: "venture",
    note: true,
    title:
      "Cottage chef project — hospitality-as-product experiment. Short-lived, instructive.",
  },
  {
    year: 2015,
    date: "2015",
    stream: "venture",
    title: "Beard oil business",
    body: "First real crash course in <strong>pricing, distribution, and margins</strong>. Learned that making the product is the easy half. It didn’t become a company — it became judgment I still use.",
    media: [{ img: "", cap: "product / packaging" }],
  },
  {
    year: 2008,
    date: "Summer 2008",
    stream: "construction",
    title: "First job: construction yards",
    body: 'Where "builder" started meaning something literal. Framing, materials, site logistics — and the habit every site runs on: <strong>the site diary</strong>. What was done, what’s blocked, what’s next. This page is that habit, twenty years on.',
    media: [{ img: "", cap: "worksite" }],
  },
];
