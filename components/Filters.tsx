"use client";

import { useState } from "react";
import { STREAMS, type Stream } from "@/content/entries";

export function Filters() {
  const [pressed, setPressed] = useState<Record<Stream, boolean>>(
    () =>
      Object.fromEntries(
        Object.keys(STREAMS).map((k) => [k, true])
      ) as Record<Stream, boolean>
  );

  function toggle(key: Stream) {
    const nextOn = !pressed[key];
    setPressed((p) => ({ ...p, [key]: nextOn }));
    document
      .querySelectorAll(`.entry[data-stream="${key}"]`)
      .forEach((el) => el.classList.toggle("dimmed", !nextOn));
  }

  return (
    <div className="filters" role="group" aria-label="Filter streams">
      {(Object.keys(STREAMS) as Stream[]).map((key) => (
        <button
          key={key}
          className="chip"
          aria-pressed={pressed[key]}
          onClick={() => toggle(key)}
        >
          <span className="dot" style={{ background: `var(--c-${key})` }} />
          {STREAMS[key]}
        </button>
      ))}
    </div>
  );
}
