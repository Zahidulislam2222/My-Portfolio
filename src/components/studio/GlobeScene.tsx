import { useEffect, useRef, type CSSProperties } from "react";
import { Cpu, Database, ScanLine, ShieldCheck, Camera, PanelsTopLeft, FileCheck2, Fingerprint, Route, Cloud } from "lucide-react";
import { heroShowcase as hero, type HeroMode } from "@/config/hero.config";
import { drawGlobe } from "@/lib/globe-renderer";
import "./globe-scene.css";

const icons = {
  neural: [Database, ScanLine, ShieldCheck],
  interface: [Camera, PanelsTopLeft, FileCheck2],
  orbital: [Fingerprint, Route, Cloud],
};

export default function GlobeScene({ mode, paused }: { mode: HeroMode; paused: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const elapsed = useRef(0);
  useEffect(() => {
    const element = canvas.current;
    const ctx = element?.getContext("2d");
    if (!element || !ctx) return;
    let frame = 0;
    let lastTime: number | undefined;
    let lastDraw = 0;
    const draw = () => {
      const { width, height } = element.getBoundingClientRect();
      if (!width || !height) return;
      const ratio = Math.min(window.devicePixelRatio || 1, hero.animation.pixelRatioLimit);
      if (element.width !== Math.round(width * ratio) || element.height !== Math.round(height * ratio)) {
        element.width = Math.round(width * ratio);
        element.height = Math.round(height * ratio);
      }
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      drawGlobe(ctx, width, height, elapsed.current, mode, hero.animation);
    };
    const tick = (time: number) => {
      if (lastTime !== undefined) elapsed.current += (time - lastTime) / 1000;
      lastTime = time;
      if (time - lastDraw >= 1000 / hero.animation.framesPerSecond) {
        draw();
        lastDraw = time;
      }
      frame = requestAnimationFrame(tick);
    };
    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(element);
    if (!paused) frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [mode, paused]);

  return (
    <div className={`globe-scene globe-scene-${mode.visual}`} role="img" aria-label={`${hero.animation.label}: ${mode.label}. ${mode.nodes.join(", ")}.`} style={{ "--float-duration": `${hero.animation.floatSeconds}s` } as CSSProperties}>
      <div className="globe-scene-heading" aria-hidden="true"><span>{mode.caption}</span><span>0{hero.modes.indexOf(mode) + 1}</span></div>
      <canvas ref={canvas} aria-hidden="true" />
      <div className="globe-satellites" aria-hidden="true">
        {mode.nodes.map((node, i) => {
          const Icon = icons[mode.visual][i];
          return <div key={node} className={`globe-satellite globe-satellite-${i}`} style={{ "--satellite-delay": `${-i * hero.animation.satelliteStaggerSeconds}s` } as CSSProperties}>
            <div className="globe-satellite-top"><Icon size={15} strokeWidth={1.4} /><i /><span>0{i + 1}</span></div>
            <strong>{node}</strong><span className="globe-satellite-label">{mode.satelliteLabels[i]}</span>
            <div className="globe-satellite-detail">{mode.visual === "interface" ? <><i /><i /><i /></> : mode.visual === "neural" ? <><b /><b /><b /><b /><b /><b /><b /></> : <><span /><span /><span /></>}</div>
          </div>;
        })}
      </div>
      <div className="globe-core-label" aria-hidden="true"><Cpu size={11} /><span>{mode.core}</span></div>
      <div className="globe-scene-footer" aria-hidden="true"><span><i />{mode.signal}</span><span>{hero.animation.footer}</span></div>
    </div>
  );
}
