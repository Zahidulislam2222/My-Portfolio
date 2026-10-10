import type { CSSProperties } from "react";
import { Cpu, Database, ScanLine, ShieldCheck } from "lucide-react";
import { heroShowcase as hero } from "@/config/hero.config";

export default function IntelligenceScene({
  nodes,
  caption,
}: {
  nodes: string[];
  caption: string;
}) {
  const style = {
    "--orbit-duration": `${hero.animation.orbitSeconds}s`,
    "--float-duration": `${hero.animation.floatSeconds}s`,
    "--spin-duration": `${hero.animation.spinSeconds}s`,
    "--orbit-delay-two": `${hero.animation.orbitDelays[1]}s`,
    "--orbit-delay-three": `${hero.animation.orbitDelays[2]}s`,
    "--node-delay-two": `${hero.animation.nodeDelays[1]}s`,
    "--node-delay-three": `${hero.animation.nodeDelays[2]}s`,
    "--particle-stagger": `${-hero.animation.particleStaggerSeconds}s`,
  } as CSSProperties;
  return (
    <div className="intelligence-scene" style={style} role="img" aria-label={`${hero.animation.label}: ${nodes.join(", ")}`}>
      <span className="intelligence-caption">{caption}</span>
      <div className="intelligence-universe" aria-hidden="true">
        <div className="intelligence-halo" />
        <div className="intelligence-orbit intelligence-orbit-one"><i /></div>
        <div className="intelligence-orbit intelligence-orbit-two"><i /></div>
        <div className="intelligence-orbit intelligence-orbit-three"><i /></div>
        <div className="intelligence-float">
          <div className="intelligence-cube">
            {hero.animation.faces.map((face) => <div key={face} className={`intelligence-face intelligence-face-${face}`}><Cpu size={30} strokeWidth={1} /><span>{hero.animation.faceLabel}</span></div>)}
          </div>
        </div>
        <div className="intelligence-particles">
          {Array.from({ length: hero.animation.particles }, (_, i) => <i key={i} style={{ "--particle": i } as CSSProperties} />)}
        </div>
        <div className="intelligence-node intelligence-node-retrieve"><Database size={15} /><span>{nodes[0]}</span><i /></div>
        <div className="intelligence-node intelligence-node-rerank"><ScanLine size={15} /><span>{nodes[1]}</span><i /></div>
        <div className="intelligence-node intelligence-node-ground"><ShieldCheck size={15} /><span>{nodes[2]}</span><i /></div>
        <span className="intelligence-core-label">{hero.animation.core}</span>
      </div>
      <div className="intelligence-footer"><span><i />{hero.animation.signal}</span><span>01 — 02 — 03</span></div>
    </div>
  );
}
