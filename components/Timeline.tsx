import { STREAMS, type Entry } from "@/content/entries";
import { EntryMedia } from "@/components/EntryMedia";

export function Timeline({ entries }: { entries: Entry[] }) {
  const showYear = entries.map(
    (e, i) => i === 0 || e.year !== entries[i - 1].year
  );

  return (
    <div className="timeline" id="timeline">
      {entries.map((e, i) => {
        return (
          <div key={i}>
            {showYear[i] && (
              <div className="year" id={`y${e.year}`}>
                {e.year}
              </div>
            )}
            <article
              className={`entry${e.note ? " note" : ""}`}
              data-stream={e.stream}
              style={{ ["--stream" as string]: `var(--c-${e.stream})` }}
            >
              <div className="e-date">
                <span className="e-stream">{STREAMS[e.stream]}</span>
                {e.date}
              </div>
              <div className="e-title">{e.title}</div>
              {e.body && (
                <div
                  className="e-body"
                  dangerouslySetInnerHTML={{ __html: e.body }}
                />
              )}
              {e.media && e.media.length > 0 && (
                <EntryMedia media={e.media} />
              )}
              {e.metrics && e.metrics.length > 0 && (
                <div className="metrics">
                  {e.metrics.map((m, j) => (
                    <div className="metric" key={j}>
                      <div className="num">{m.num}</div>
                      <div className="lbl">{m.lbl}</div>
                    </div>
                  ))}
                </div>
              )}
            </article>
          </div>
        );
      })}
    </div>
  );
}
