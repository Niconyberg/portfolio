"use client";

import { useEffect, useRef } from "react";

const PAD = 40;

export function Ruler({ years }: { years: number[] }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const needleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    const needle = needleRef.current;
    if (!inner || !needle) return;

    const yearsPresent = [...new Set(years)];
    const minY = Math.min(...yearsPresent);
    const maxY = Math.max(...yearsPresent);
    const allTicks: number[] = [];
    for (let y = maxY; y >= minY; y--) allTicks.push(y);

    const yToPos = (y: number) =>
      PAD + ((maxY - y) / (maxY - minY)) * (inner.clientHeight - 2 * PAD);

    function buildRuler() {
      if (!inner) return;
      inner.querySelectorAll("a").forEach((a) => a.remove());
      allTicks.forEach((y) => {
        const a = document.createElement("a");
        const major = yearsPresent.includes(y);
        a.className = major ? "major" : "";
        a.textContent = major ? String(y) : "";
        a.href = major ? `#y${y}` : "#timeline";
        a.style.top = yToPos(y) + "px";
        a.setAttribute("aria-label", "Jump to " + y);
        inner.appendChild(a);
      });
    }

    function breaks() {
      return [...document.querySelectorAll<HTMLElement>(".year")].map(
        (el) => ({
          year: parseInt(el.textContent || "0", 10),
          top: el.offsetTop,
        })
      );
    }

    function onScroll() {
      if (!needle) return;
      const bs = breaks().sort((a, b) => a.top - b.top);
      if (bs.length === 0) return;
      const mid = window.scrollY + window.innerHeight * 0.35;
      let cur = bs[0];
      for (const b of bs) {
        if (b.top <= mid) cur = b;
      }
      const idx = bs.indexOf(cur);
      const next = bs[idx + 1];
      let yr = cur.year;
      if (next) {
        const frac = Math.min(
          Math.max((mid - cur.top) / (next.top - cur.top), 0),
          1
        );
        yr = cur.year + frac * (next.year - cur.year);
      }
      needle.style.top = yToPos(yr) + "px";
      needle.dataset.year = String(Math.round(yr));
    }

    function onResize() {
      buildRuler();
      onScroll();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    buildRuler();
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [years]);

  return (
    <nav className="ruler" aria-label="Timeline years">
      <div className="ruler-inner" ref={innerRef}>
        <div className="needle" ref={needleRef} data-year="" />
      </div>
    </nav>
  );
}
