"use client";

import { useState } from "react";
import type { Entry, Stream } from "@/content/entries";
import { Filters } from "@/components/Filters";
import { Timeline } from "@/components/Timeline";

export function TimelineSection({ entries }: { entries: Entry[] }) {
  const [active, setActive] = useState<Stream | null>(null);
  const visible = active ? entries.filter((e) => e.stream === active) : entries;

  return (
    <>
      <div className="wrap">
        <Filters
          active={active}
          onSelect={(key) => setActive((a) => (a === key ? null : key))}
        />
      </div>
      <div className="wrap">
        <Timeline entries={visible} />
      </div>
    </>
  );
}
