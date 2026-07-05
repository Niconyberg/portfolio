"use client";

import { STREAMS, type Stream } from "@/content/entries";

export function Filters({
  active,
  onSelect,
}: {
  active: Stream | null;
  onSelect: (key: Stream) => void;
}) {
  return (
    <div className="filters" role="group" aria-label="Filter categories">
      {(Object.keys(STREAMS) as Stream[]).map((key) => (
        <button
          key={key}
          className={`chip${active && active !== key ? " dimmed" : ""}`}
          aria-pressed={active === key}
          onClick={() => onSelect(key)}
        >
          <span className="dot" style={{ background: `var(--c-${key})` }} />
          {STREAMS[key]}
        </button>
      ))}
    </div>
  );
}
