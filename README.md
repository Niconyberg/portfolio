# Site Diary

Nico's personal portfolio — a reverse-chronological "site diary" timeline,
built with Next.js (App Router) and deployed on Vercel. No database, no CMS —
content lives in typed data files in this repo.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a timeline entry

Open [`content/entries.ts`](content/entries.ts) and paste a new object into
the `entries` array (newest entries go first — order in the array is the
order on the page). The file's top comment documents every field; the short
version:

```ts
{
  year: 2026,
  date: "2026",                 // display label, e.g. "Summer 2008"
  stream: "work",               // construction | venture | work | marathon | tools
  title: "What happened",
  body: "Optional longer description. <strong>Bold</strong> and <a href=\"...\">links</a> allowed.",
  media: [
    { img: "", cap: "caption" },        // "" -> placeholder box until you have a real image
    { video: "https://youtu.be/..." },  // auto-converted to an embed
    { link: "https://...", label: "App Store" },
  ],
  metrics: [{ num: "42.2", lbl: "km" }],
}
```

Set `note: true` instead of `body`/`media`/`metrics` for a one-line entry.

Images can be a remote `https://` URL or a local path under `/public`.

## Adding a pitch token

When you send this site to a specific company, the URL can carry a token
that renders a short "what I'd build here" note above the timeline. A bare
URL (no token, or an unrecognized one) renders nothing extra — this is the
default, safe state.

1. Open [`lib/pitches.server.ts`](lib/pitches.server.ts).
2. Add an entry to `PITCHES` keyed by a random token (not the company name —
   tokens shouldn't be guessable):

   ```ts
   x9q2m7: { company: "Acme", heading: "What I'd build at Acme", body: "…" },
   ```
3. Send the link as `https://<your-domain>/?to=x9q2m7`.

This file has `import "server-only"` at the top, so it can never be bundled
into client-side JavaScript — other companies' pitches never ship in
anyone's HTML, no matter which link they open.

## Deploying to Vercel

This repo is already connected to Vercel — pushing to `main` triggers a
production deployment automatically. To deploy manually:

```bash
vercel --prod
```

No environment variables or database are required.
