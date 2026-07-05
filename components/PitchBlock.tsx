import type { Pitch } from "@/lib/pitches.server";

export function PitchBlock({ pitch }: { pitch: Pitch }) {
  return (
    <div className="pitch" role="note" aria-label={`Note for ${pitch.company}`}>
      <div className="pitch-kicker">For {pitch.company}</div>
      <div className="pitch-heading">{pitch.heading}</div>
      <p className="pitch-body">{pitch.body}</p>
    </div>
  );
}
