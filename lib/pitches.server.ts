import "server-only";

/**
 * Token -> pitch lookup. This module is server-only (see the import above),
 * so it can never be bundled into client-side JavaScript — the pitches for
 * other companies never ship in anyone's HTML.
 *
 * To add a pitch: pick a random token (not the company name, so the set
 * can't be enumerated by guessing), add an entry below, then send the URL
 * as `https://<your-domain>/?to=<token>`.
 */

export type Pitch = {
  company: string;
  heading: string;
  body: string;
};

export const PITCHES: Record<string, Pitch> = {
  x7f3k2: {
    company: "Shopify",
    heading: "What I'd build here",
    body: "Replace this with a short, specific pitch for the recipient before sending the link.",
  },
};
