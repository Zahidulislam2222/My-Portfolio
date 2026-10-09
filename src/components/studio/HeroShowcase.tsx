import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Layers3,
  Network,
  Pause,
  Play,
} from "lucide-react";
import IntelligenceScene from "./IntelligenceScene";
import { heroShowcase as hero } from "@/config/hero.config";
import {
  studioConfig as config,
  studioProjects,
  type StudioProject,
} from "@/config/studio.config";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion-preference";
import "./hero-showcase.css";

export default function HeroShowcase({
  onProject,
}: {
  onProject: (project: StudioProject) => void;
}) {
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState(false);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotionPreference();
  const scene = useRef<HTMLDivElement>(null);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const mode = hero.modes[active];
  const project = studioProjects.find((item) => item.id === mode.projectId)!;
  useEffect(() => {
    if (scene.current) scene.current.style.transform = "";
  }, [reduced, active]);
  const select = (index: number) => {
    setActive(index);
    setFailed(false);
  };
  return (
    <section id="home" className="showcase-hero studio-shell">
      <div className="showcase-introline">
        <span>{hero.identity}</span>
        <span className="studio-availability">
          <i />
          {config.hero.availability}
        </span>
      </div>
      <div className="showcase-layout">
        <div className="showcase-copy">
          <h1>
            {hero.headline.map((line, i) => (
              <span className={i === 2 ? "showcase-accent" : ""} key={line}>
                {line}
              </span>
            ))}
          </h1>
          <p>{hero.description}</p>
          <div className="studio-hero-actions">
            <a className="studio-button primary" href={config.socials.email}>
              {config.hero.primary}
              <ArrowUpRight size={18} />
            </a>
            <a className="studio-text-link" href="#projects">
              {config.hero.secondary}
              <ArrowDown size={15} />
            </a>
          </div>
          <a className="showcase-proof" href="#testimonials">
            <span className="studio-eyebrow">{config.labels.heroProof}</span>
            <q>{config.reviews[2].excerpt}</q>
            <span>
              {config.labels.reviewMore}
              <ArrowRight size={14} />
            </span>
          </a>
        </div>
        <div className="showcase-workspace">
          <div className="showcase-workspace-top">
            <span>{hero.workspace}</span>
            <span aria-hidden="true">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(hero.modes.length).padStart(2, "0")}
            </span>
          </div>
          <div
            className="showcase-tabs"
            role="tablist"
            aria-label={hero.tabLabel}
          >
            {hero.modes.map((item, i) => (
              <button
                key={item.id}
                ref={(element) => {
                  tabs.current[i] = element;
                }}
                id={`hero-tab-${item.id}`}
                role="tab"
                aria-selected={active === i}
                aria-controls="hero-panel"
                tabIndex={active === i ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={(event) => {
                  let next = i;
                  if (event.key === "ArrowRight")
                    next = (i + 1) % hero.modes.length;
                  else if (event.key === "ArrowLeft")
                    next = (i - 1 + hero.modes.length) % hero.modes.length;
                  else if (event.key === "Home") next = 0;
                  else if (event.key === "End") next = hero.modes.length - 1;
                  else return;
                  event.preventDefault();
                  select(next);
                  tabs.current[next]?.focus();
                }}
              >
                {i === 0 ? (
                  <Cpu size={16} />
                ) : i === 1 ? (
                  <Layers3 size={16} />
                ) : (
                  <Network size={16} />
                )}{" "}
                {item.label}
              </button>
            ))}
          </div>
          <div
            id="hero-panel"
            role="tabpanel"
            aria-labelledby={`hero-tab-${mode.id}`}
            tabIndex={0}
          >
            <div
              className="showcase-stage"
              onPointerMove={(event) => {
                if (reduced || paused || event.pointerType !== "mouse" || !scene.current)
                  return;
                const box = event.currentTarget.getBoundingClientRect();
                scene.current.style.transform = `rotateY(${((event.clientX - box.left) / box.width - 0.5) * hero.motion.tiltDegrees}deg) rotateX(${-((event.clientY - box.top) / box.height - 0.5) * hero.motion.tiltDegrees}deg)`;
              }}
              onPointerLeave={() => {
                if (scene.current) scene.current.style.transform = "";
              }}
            >
              <div className="showcase-scene" ref={scene} data-motion={reduced || paused ? "paused" : "running"}>
                <div className="showcase-backplate" aria-hidden="true" />
                <motion.div
                  key={mode.id}
                  className="showcase-surface"
                  initial={
                    reduced
                      ? false
                      : { opacity: 0, y: hero.motion.entranceDistance }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduced ? 0 : hero.motion.entranceSeconds,
                  }}
                >
                  <div className="showcase-windowbar">
                    <span aria-hidden="true">● ● ●</span>
                    <span>
                      {mode.image ? hero.visualLabel : hero.architectureLabel}
                    </span>
                    <button
                      className="showcase-motion-toggle"
                      aria-label={paused ? hero.animation.resume : hero.animation.pause}
                      aria-pressed={paused}
                      disabled={reduced}
                      onClick={() => {
                        setPaused(!paused);
                        if (scene.current) scene.current.style.transform = "";
                      }}
                    >
                      {paused || reduced ? <Play size={13} /> : <Pause size={13} />}
                    </button>
                  </div>
                  {mode.image ? (
                    failed ? (
                      <div className="showcase-image-fallback">
                        <Layers3 />
                        <p>{hero.fallback}</p>
                      </div>
                    ) : (
                      <img
                        key={mode.image}
                        src={mode.image}
                        width="1440"
                        height="1000"
                        alt={mode.caption}
                        onError={() => setFailed(true)}
                      />
                    )
                  ) : (
                    <IntelligenceScene nodes={mode.nodes} caption={mode.caption} />
                  )}
                </motion.div>
                <div className="showcase-flow">
                  <span className="studio-eyebrow">
                    {hero.architectureLabel}
                  </span>
                  <div>
                    {mode.nodes.map((node, i) => (
                      <span key={node}>
                        <b>0{i + 1}</b>
                        {node}
                        {i < mode.nodes.length - 1 && <ArrowRight size={14} />}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="showcase-project-copy">
              <span className="studio-eyebrow">{project.name}</span>
              <h2>{mode.title}</h2>
              <p>{mode.decision}</p>
              <button
                className="studio-text-link"
                onClick={() => onProject(project)}
              >
                {hero.open}
                <ArrowUpRight size={17} />
              </button>
            </div>
          </div>
          <span className="showcase-hint">{hero.hint}</span>
        </div>
      </div>
    </section>
  );
}
