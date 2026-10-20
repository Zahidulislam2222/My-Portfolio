import { useState, type CSSProperties } from "react";
import { Pause, Play } from "lucide-react";
import { studioConfig as config } from "@/config/studio.config";
import "./expertise-marquee.css";

const rows = [config.hero.tags, config.expertise.flatMap((item) => item.tags)];

export default function ExpertiseMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="studio-marquee"
      aria-label={config.marquee.label}
      data-paused={paused}
      style={{ "--marquee-duration": `${config.marquee.durationSeconds}s` } as CSSProperties}
    >
      <div className="studio-shell studio-marquee-heading">
        <span className="studio-eyebrow">{config.marquee.eyebrow}</span>
        <button
          type="button"
          className="studio-marquee-toggle"
          aria-controls="expertise-marquee-rows"
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
          <span>{paused ? config.marquee.resume : config.marquee.pause}</span>
        </button>
      </div>
      <div id="expertise-marquee-rows">
        {rows.map((items, row) => (
          <div className="studio-marquee-row" key={row}>
            <div className="studio-marquee-track">
              {[false, true].map((duplicate) => (
                <ul className="studio-marquee-group" aria-hidden={duplicate || undefined} key={String(duplicate)}>
                  {items.map((item) => (
                    <li key={item}>
                      <span className="studio-marquee-star" aria-hidden="true">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
