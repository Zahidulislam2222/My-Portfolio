import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { ArrowRight, Layers3 } from "lucide-react";
import { heroShowcase as hero } from "@/config/hero.config";
import { cardRotationDepth, cardRotationIndex, cardRotationTarget } from "@/lib/card-rotation";
import IntelligenceScene from "./IntelligenceScene";
import "./intelligence-scene.css";
import "./card-carousel.css";

export default function CardCarousel({ active, selectionVersion = 0, paused, reduced, onActiveChange }: { active: number; selectionVersion?: number; paused: boolean; reduced: boolean; onActiveChange?: (index: number) => void }) {
  const rotor = useRef<HTMLDivElement>(null);
  const lastSelection = useRef(selectionVersion);
  const previousTime = useRef<number | null>(null);
  const rotation = useMotionValue(0);
  const [depth, setDepth] = useState(0);
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const element = rotor.current;
    if (!element) return;
    const resize = () => setDepth(cardRotationDepth(element.clientWidth, hero.modes.length));
    resize();
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(resize);
    observer?.observe(element);
    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    // Automatic active-face changes must never restart or snap the rotation.
    if (reduced || lastSelection.current !== selectionVersion) {
      rotation.set(cardRotationTarget(rotation.get(), active, hero.modes.length));
    }
    lastSelection.current = selectionVersion;
  }, [active, selectionVersion, reduced, rotation]);

  useEffect(() => {
    previousTime.current = null;
  }, [paused, reduced]);

  useAnimationFrame((time) => {
    if (paused || reduced) {
      previousTime.current = null;
      return;
    }
    const previous = previousTime.current;
    previousTime.current = time;
    if (previous === null) return;
    const angle = (rotation.get() - (time - previous) * 360 / (hero.motion.revolutionSeconds * 1000)) % 360;
    rotation.set(angle);
    const front = cardRotationIndex(angle, hero.modes.length);
    if (front !== active) onActiveChange?.(front);
  });

  return (
    <div className="showcase-stage showcase-card-stage">
      <motion.div ref={rotor} className="showcase-scene showcase-card-rotor" data-motion={paused || reduced ? "paused" : "running"} style={{ rotateY: rotation, z: -depth }}>
        {hero.modes.map((mode, index) => (
          <div key={mode.id} className="showcase-card-face" data-card={mode.id} aria-hidden={index !== active}
            style={{ "--card-angle": `${index * 360 / hero.modes.length}deg`, "--card-depth": `${depth}px`, "--card-accent": mode.accent } as CSSProperties}>
            <div className="showcase-backplate" aria-hidden="true" />
            <div className="showcase-surface">
              <div className="showcase-windowbar"><span aria-hidden="true">● ● ●</span><span>{mode.image ? hero.visualLabel : hero.architectureLabel}</span><span aria-hidden="true">{mode.label.toUpperCase()}</span></div>
              {mode.image ? failed[mode.id] ? (
                <div className="showcase-image-fallback"><Layers3 /><p>{hero.fallback}</p></div>
              ) : (
                <img src={mode.image} width="1440" height="1000" alt={mode.caption} onError={() => setFailed((current) => ({ ...current, [mode.id]: true }))} />
              ) : <IntelligenceScene nodes={mode.nodes} caption={mode.caption} />}
            </div>
            <div className="showcase-flow">
              <span className="studio-eyebrow">{hero.architectureLabel}</span>
              <div>{mode.nodes.map((node, i) => <span key={node}><b>0{i + 1}</b>{node}{i < mode.nodes.length - 1 && <ArrowRight size={14} />}</span>)}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
