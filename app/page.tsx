import { PITCHES } from "@/lib/pitches.server";
import { entries } from "@/content/entries";
import { Timeline } from "@/components/Timeline";
import { Filters } from "@/components/Filters";
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
            Työmaapäiväkirja · site diary · 2008 → today
          </div>
          <h1>
            I can&apos;t stop
            <br />
            <span className="accent">building.</span>
          </h1>
          <p className="intro">
            It started on construction yards in Finland. Now it&apos;s
            software — apps, servers, databases, AI agents — shipped mostly{" "}
            <strong>solo, with agentic coding tools</strong>. The whole log,
            newest first: work, side ventures, marathon training, dead ends
            included.
          </p>
          <div className="hero-clip">
            [ drop meme clip here — self-shot loop, caption &quot;i can&apos;t
            stop building&quot; ]
          </div>
        </header>

        {pitch && <PitchBlock pitch={pitch} />}

        <Filters />
      </div>

      <div className="wrap">
        <Timeline entries={entries} />
      </div>

      <footer>
        START OF LOG · construction yards, 2008 ·{" "}
        <span style={{ color: "var(--orange)" }}>■</span> prototype — more to
        come
      </footer>

      <Ruler years={years} />
    </>
  );
}
