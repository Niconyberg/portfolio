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
            I can&apos;t stop
            <br />
            <span className="accent">building.</span>
          </h1>
          <p className="intro">
            It started with a shovel on a construction site in Finland. Now
            it&apos;s software — apps, servers, databases, AI agents —
            shipped mostly <strong>solo, with agentic coding tools</strong>.
            The whole log, newest first: work, side projects, education, dead
            ends included.
          </p>
          <div className="hero-clip">
            [ drop meme clip here — self-shot loop, caption &quot;i can&apos;t
            stop building&quot; ]
          </div>
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
