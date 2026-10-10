import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, type MotionValue } from "framer-motion";
import { heroShowcase as hero } from "@/config/hero.config";
import { cardRotationDepth } from "@/lib/card-rotation";

/** Vertical copy faces use the card's exact angle, without a second clock. */
export default function HeroCopyCarousel({ active, rotation }: { active: number; rotation: MotionValue<number> }) {
  const rotor = useRef<HTMLDivElement>(null);
  const [depth, setDepth] = useState(0);
  const current = hero.modes[active];

  useEffect(() => {
    const element = rotor.current;
    if (!element) return;
    const resize = () => setDepth(cardRotationDepth(element.clientHeight, hero.modes.length));
    resize();
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(resize);
    observer?.observe(element);
    return () => observer?.disconnect();
  }, []);

  return (
    <div className="showcase-copy-stage" data-copy={current.id}>
      <h1 className="sr-only">{current.headline.join(" ")}</h1>
      <p className="sr-only">{current.description}</p>
      <motion.div ref={rotor} className="showcase-copy-rotor" aria-hidden="true" style={{ rotateX: rotation, z: -depth }}>
        {hero.modes.map((mode, index) => (
          <div key={mode.id} className="showcase-copy-face" data-copy-face={mode.id}
            style={{ "--copy-angle": `${index * 360 / hero.modes.length}deg`, "--copy-depth": `${depth}px`, "--copy-accent": mode.accent } as CSSProperties}>
            <div className="showcase-headline">
              {mode.headline.map((line, i) => <span className={i === 2 ? "showcase-accent" : ""} key={line}>{line}</span>)}
            </div>
            <p>{mode.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
