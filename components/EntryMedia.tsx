import Image from "next/image";
import type { Media } from "@/content/entries";
import { embedUrl } from "@/lib/embed";

export function EntryMedia({ media }: { media: Media[] }) {
  return (
    <div className="e-media">
      {media.map((m, i) => {
        if ("img" in m) {
          return (
            <div key={i}>
              {m.img ? (
                <figure className="m-img">
                  <Image
                    src={m.img}
                    alt={m.cap || ""}
                    fill
                    sizes="(max-width: 720px) 100vw, 672px"
                  />
                </figure>
              ) : (
                <div className="m-ph">[ image — {m.cap || "add src"} ]</div>
              )}
              {m.cap && <div className="m-cap">{m.cap}</div>}
            </div>
          );
        }

        if ("video" in m) {
          return m.video ? (
            <div key={i} className="m-video">
              <iframe
                src={embedUrl(m.video)}
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <div key={i} className="m-ph">
              [ video — paste a YouTube/Vimeo url ]
            </div>
          );
        }

        const href = m.link || "#";
        return (
          <a
            key={i}
            className="m-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="arw">↗</span>
            {m.label || href}
          </a>
        );
      })}
    </div>
  );
}
