import { useEffect, useRef, useState, type CSSProperties } from "react";
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
import CardCarousel from "./CardCarousel";
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
  const [selectionVersion, setSelectionVersion] = useState(0);
  const [paused, setPaused] = useState(false);
  const [autoStopped, setAutoStopped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  const reduced = useReducedMotionPreference();
  const workspace = useRef<HTMLDivElement>(null);
  const rotationControl = useRef<HTMLButtonElement>(null);
  const pointerWasStopped = useRef<boolean | null>(null);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const mode = hero.modes[active];
  const project = studioProjects.find((item) => item.id === mode.projectId)!;
  const motionPaused = reduced || paused || !inView || !pageVisible;
  const turnPaused = motionPaused || hovered || autoStopped;
  const cycling = !motionPaused && !hovered && !autoStopped;
  const stopped = paused || autoStopped;
  useEffect(() => {
    const visible = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", visible);
    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    if (workspace.current) observer?.observe(workspace.current);
    return () => { document.removeEventListener("visibilitychange", visible); observer?.disconnect(); };
  }, []);
  useEffect(() => {
    if (!cycling) return;
    const timer = window.setTimeout(() => setActive((index) => (index + 1) % hero.modes.length), hero.animation.cycleSeconds * 1000);
    return () => window.clearTimeout(timer);
  }, [active, cycling]);
  const select = (index: number) => {
    setActive(index);
    setSelectionVersion((version) => version + 1);
    setAutoStopped(true);
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
        <div className="showcase-workspace" ref={workspace} role="group" aria-roledescription="carousel" aria-label={hero.tabLabel}
          style={{ "--card-accent": mode.accent, "--cycle-duration": `${hero.animation.cycleSeconds}s` } as CSSProperties}
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setAutoStopped(true)}>
          <div className="showcase-workspace-top">
            <span>{hero.workspace}</span>
            <button ref={rotationControl} className="showcase-cycle-control" disabled={reduced}
              aria-label={stopped ? hero.animation.resume : hero.animation.pause}
              onPointerDown={() => { pointerWasStopped.current = stopped; }}
              onPointerCancel={() => { pointerWasStopped.current = null; }}
              onClick={(event) => {
                // Pointer focus pauses cycling before click; retain the intended action.
                const wasStopped = event.detail === 0 ? stopped : pointerWasStopped.current ?? stopped;
                pointerWasStopped.current = null;
                setPaused(!wasStopped);
                setAutoStopped(false);
              }}>
              {stopped || reduced ? <Play size={11} /> : <Pause size={11} />}
              <span>{reduced ? hero.animation.still : cycling ? hero.animation.automatic : hero.animation.held}</span>
            </button>
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
            <div key={`${active}-${cycling}`} className="showcase-cycle-progress" data-running={cycling} aria-hidden="true"><i /></div>
          </div>
          <div
            id="hero-panel"
            role="tabpanel"
            aria-labelledby={`hero-tab-${mode.id}`}
            aria-live={cycling ? "off" : "polite"}
            tabIndex={0}
          >
            <CardCarousel active={active} selectionVersion={selectionVersion} paused={turnPaused} reduced={reduced} />
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
