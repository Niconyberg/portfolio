import Image from "next/image";
import { PITCHES } from "@/lib/pitches.server";
import { entries } from "@/content/entries";
import { TimelineSection } from "@/components/TimelineSection";
import { Ruler } from "@/components/Ruler";
import { PitchBlock } from "@/components/PitchBlock";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ to?: string }>;
}) {
  const { to } = await searchParams;
  const pitch = to ? PITCHES[to] ?? null : null;
  const years = entries.map((e) => e.year);

  return (
    <>
      <div className="wrap">
        <header>
          <div className="kicker">
            Työmaapäiväkirja · site diary · 2001 → today
          </div>
          <h1>
            Nico
            <br />
            Nyberg
          </h1>
          <p className="tagline">
            I can&apos;t stop <span className="accent">building.</span>
          </p>
          <p className="intro">
            It started with a shovel when I was 11 years old. Now it&apos;s
            all types of projects: apps, renovations, websites, boat rebuilds
            — anything where I can let my{" "}
            <strong>creativity and need to build</strong> run free. This is a
            timeline of it.
          </p>
          <figure className="hero-photo">
            <Image
              src="/shovel.jpg"
              alt="Digging on a construction site, age 11"
              fill
              sizes="440px"
              priority
            />
          </figure>
        </header>

        {pitch && <PitchBlock pitch={pitch} />}
      </div>

      <TimelineSection entries={entries} />

      <footer>
        START OF LOG · shovel in hand, 2001 ·{" "}
        <span style={{ color: "var(--orange)" }}>■</span> prototype — more to
        come
      </footer>

      <Ruler years={years} />
    </>
  );
}
