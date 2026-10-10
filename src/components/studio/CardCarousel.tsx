import { useEffect, useRef, useState, type CSSProperties } from "react";
import { animate, motion, useMotionValue, type AnimationPlaybackControls } from "framer-motion";
import { ArrowRight, Layers3 } from "lucide-react";
import { heroShowcase as hero } from "@/config/hero.config";
import { cardRotationDepth, cardRotationTarget } from "@/lib/card-rotation";
import IntelligenceScene from "./IntelligenceScene";
import "./intelligence-scene.css";
import "./card-carousel.css";

export default function CardCarousel({ active, selectionVersion = 0, paused, reduced }: { active: number; selectionVersion?: number; paused: boolean; reduced: boolean }) {
  const rotor = useRef<HTMLDivElement>(null);
  const controls = useRef<AnimationPlaybackControls | null>(null);
  const pausedNow = useRef(paused);
  pausedNow.current = paused;
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
    controls.current?.stop();
    const target = cardRotationTarget(rotation.get(), active, hero.modes.length);
    if (reduced || pausedNow.current) {
      rotation.set(target);
      controls.current = null;
      return;
    }
    const turn = animate(rotation, target, { duration: hero.motion.turnSeconds, ease: hero.motion.turnEase });
    controls.current = turn;
    return () => turn.stop();
  }, [active, selectionVersion, reduced, rotation]);

  useEffect(() => {
    if (paused) controls.current?.pause();
    else controls.current?.play();
  }, [paused]);

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
