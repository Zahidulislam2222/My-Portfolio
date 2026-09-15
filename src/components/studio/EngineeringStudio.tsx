import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll } from "framer-motion";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion-preference";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronRight,
  Code2,
  Copy,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Menu,
  Network,
  Plus,
  X,
} from "lucide-react";
import {
  studioConfig as config,
  studioProjects,
  projectResources,
  type StudioProject,
} from "@/config/studio.config";
import "./studio.css";
import HeroShowcase from "./HeroShowcase";

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotionPreference();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: config.motion.revealDistance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: config.motion.revealDuration }}
    >
      {children}
    </motion.div>
  );
}

function StudioNavigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <>
      <a className="studio-skip" href="#main">
        {config.labels.skip}
      </a>
      <header className="studio-header">
        <div className="studio-shell studio-nav">
          <a
            className="studio-brand"
            href="#home"
            aria-label={`${config.identity.name}, ${config.labels.home}`}
          >
            <span className="studio-monogram" aria-hidden="true">
              z<span>.</span>
            </span>
            <span>
              {config.identity.name}
              <small>{config.labels.identityRole}</small>
            </span>
          </a>
          <nav
            className="studio-desktop-nav"
            aria-label={config.labels.mainNavigation}
          >
            {config.navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="studio-nav-actions">
            <a href="#contact" className="studio-contact-link">
              {config.labels.talk} <ArrowUpRight size={17} />
            </a>
            <button
              ref={toggle}
              className="studio-menu-toggle"
              aria-label={open ? config.labels.closeMenu : config.labels.menu}
              aria-expanded={open}
              aria-controls="studio-mobile-nav"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <nav
          id="studio-mobile-nav"
          className="studio-mobile-nav"
          aria-label={config.labels.mobileNavigation}
          hidden={!open}
        >
          {config.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
              <ArrowUpRight size={18} />
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            {config.labels.talk} <ArrowUpRight size={18} />
          </a>
        </nav>
        <motion.div
          className="studio-progress"
          style={{ scaleX: scrollYProgress }}
        />
      </header>
    </>
  );
}

function ProjectVisual({ project }: { project: StudioProject }) {
  const [imageFailed, setImageFailed] = useState(false);
  if (project.image && imageFailed) {
    return (
      <div className="studio-capture-fallback">
        <Layers3 size={34} />
        <strong>{project.name}</strong>
        <span>{config.labels.screenshotUnavailable}</span>
      </div>
    );
  }
  if (project.image && !imageFailed)
    return (
      <div className={`studio-project-capture capture-${project.id}`}>
        <div className="studio-browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <i>{project.name}</i>
        </div>
        <img
          src={project.image}
          onError={() => setImageFailed(true)}
          loading="lazy"
          alt={`${project.name} public website screenshot`}
          width="1440"
          height="960"
        />
      </div>
    );
  if (project.visual === "terminal")
    return (
      <div className="studio-art-terminal" aria-hidden="true">
        <div className="art-window-title">
          <Code2 size={16} />
          {config.visual.terminal.title}
          <span>↗</span>
        </div>
        <div className="art-terminal-body">
          <span className="art-terminal-command">$ vitalprobe</span>
          {config.visual.terminal.lines.map((line, i) => (
            <p key={line}>
              <span>0{i + 1}</span>
              <ChevronRight size={13} />
              {line}
            </p>
          ))}
          <span className="art-terminal-cursor">▍</span>
        </div>
        <small>{config.visual.terminal.footer}</small>
      </div>
    );
  if (project.visual === "pipeline")
    return (
      <div className="studio-art-pipeline" aria-hidden="true">
        <span className="art-mini-label">{config.visual.pipeline.title}</span>
        <div className="art-pipeline-path">
          {config.visual.pipeline.stages.map((stage, i) => (
            <div key={stage}>
              <span>
                {i === 0 ? (
                  <Layers3 />
                ) : i === 1 ? (
                  <BrainCircuit />
                ) : i === 2 ? (
                  <Check />
                ) : (
                  <ArrowUpRight />
                )}
              </span>
              <small>{stage}</small>
            </div>
          ))}
        </div>
        <span className="art-pipeline-note">
          {config.visual.pipeline.footer}
        </span>
      </div>
    );
  return (
    <div className="studio-art-network" aria-hidden="true">
      <div className="art-network-grid" />
      <span className="art-mini-label">{config.visual.network.title}</span>
      <div className="art-network-orbit orbit-one" />
      <div className="art-network-orbit orbit-two" />
      <div className="art-network-center">
        <BrainCircuit size={36} />
        <small>{config.visual.network.center}</small>
      </div>
      {config.visual.network.nodes.map((node, i) => (
        <span className={`art-network-node node-${i}`} key={node}>
          <i />
          {node}
        </span>
      ))}
      <small className="art-network-footer">
        {config.visual.network.footer}
      </small>
    </div>
  );
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: StudioProject | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    if (!project || !element) return;
    element.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previous;
    };
  }, [project]);
  const resources = project
    ? projectResources(project.id)
    : { links: [], liveUrl: undefined };
  return (
    <dialog
      ref={dialog}
      className="studio-dialog"
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="studio-dialog-content">
          <button
            className="studio-dialog-close studio-icon-button"
            onClick={onClose}
            aria-label={config.labels.closeProject}
            autoFocus
          >
            <X />
          </button>
          <span className="studio-eyebrow">{project.domain}</span>
          <h2 id="project-dialog-title">{project.name}</h2>
          <p className="studio-dialog-summary">{project.summary}</p>
          <div className="studio-dialog-status">
            <span>{config.labels.projectStatus}</span>
            <p>{project.status}</p>
          </div>
          <h3>{config.labels.projectScope}</h3>
          <p className="studio-dialog-detail">{project.detail}</p>
          <div className="studio-tags">
            {project.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="studio-dialog-links">
            {resources.links.map((link) => (
              <a
                className="studio-button secondary"
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                {link.label}
                <ArrowUpRight size={15} />
              </a>
            ))}
            {resources.liveUrl && (
              <a
                className="studio-button primary"
                href={resources.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                {config.labels.demoLabel}
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>
          <p className="studio-dialog-evidence">
            {config.labels.referenceLabel}: {project.evidence}
          </p>
        </div>
      )}
    </dialog>
  );
}

function WorkSection({
  onProject,
}: {
  onProject: (project: StudioProject) => void;
}) {
  const [filter, setFilter] = useState<(typeof config.labels.filters)[number]>(
    config.labels.filters[0],
  );
  const [indexOpen, setIndexOpen] = useState(false);
  const matches = studioProjects.filter(
    (project) =>
      filter === config.labels.filters[0] || project.category === filter,
  );
  const featured = matches.filter((project) => project.featured);
  return (
    <section id="projects" className="studio-section studio-shell">
      <Reveal className="studio-section-heading">
        <div>
          <span className="studio-eyebrow">{config.labels.workEyebrow}</span>
          <h2>{config.labels.workTitle}</h2>
        </div>
        <p>{config.labels.workIntro}</p>
      </Reveal>
      <div className="studio-work-toolbar">
        <div
          className="studio-filters"
          role="group"
          aria-label={config.labels.filterProjects}
        >
          {config.labels.filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={filter === item ? "active" : ""}
            >
              {item}
            </button>
          ))}
        </div>
        <span className="studio-result-count" aria-live="polite">
          {String(matches.length).padStart(2, "0")}{" "}
          {config.labels.projectsCount}
        </span>
      </div>
      <div className="studio-project-grid">
        {featured.map((project, i) => (
          <Reveal key={project.id} className="studio-project-card">
            <button
              className="studio-project-open"
              onClick={() => onProject(project)}
              aria-label={`${config.labels.readProject}: ${project.name}`}
            >
              <div className="studio-project-media">
                <ProjectVisual project={project} />
                <span className="studio-project-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="studio-project-arrow">
                  <ArrowUpRight size={24} />
                </span>
                {!project.image && (
                  <span className="studio-illustration-label">
                    {config.labels.illustration}
                  </span>
                )}
              </div>
              <div className="studio-project-meta">
                <span>{project.domain}</span>
                <span>{project.category}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <div className="studio-project-evidence">
                <span className="studio-eyebrow">
                  {config.labels.buildLabel}
                </span>
                <p>{config.projectHighlights[project.id]}</p>
                <span className="studio-eyebrow">
                  {config.labels.deliveryLabel}
                </span>
                <strong>{project.status}</strong>
              </div>
              <div className="studio-tags">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </button>
          </Reveal>
        ))}
      </div>
      <div className="studio-index-toggle">
        <button
          className="studio-text-link"
          onClick={() => setIndexOpen(!indexOpen)}
          aria-expanded={indexOpen}
          aria-controls="studio-project-index"
        >
          {indexOpen ? config.labels.lessProjects : config.labels.allProjects}
          <span>({matches.length})</span>
          {indexOpen ? <X size={18} /> : <Plus size={18} />}
        </button>
      </div>
      <div
        id="studio-project-index"
        className="studio-project-index"
        hidden={!indexOpen}
      >
        <div className="studio-index-heading">
          <span>{config.labels.index}</span>
          <span>
            {matches.length} {config.labels.allCount}
          </span>
        </div>
        {matches.map((project, i) => (
          <button key={project.id} onClick={() => onProject(project)}>
            <span className="studio-index-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>
              <strong>{project.name}</strong>
              <small>{project.status}</small>
            </span>
            <span className="studio-index-category">{project.category}</span>
            <ArrowUpRight size={21} />
          </button>
        ))}
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const icons = { brain: BrainCircuit, layers: Layers3, network: Network };
  return (
    <section id="skills" className="studio-section studio-expertise">
      <div className="studio-shell">
        <Reveal className="studio-section-heading">
          <div>
            <span className="studio-eyebrow">
              {config.labels.expertiseEyebrow}
            </span>
            <h2>{config.labels.expertiseTitle}</h2>
          </div>
          <span className="studio-section-glyph" aria-hidden="true">
            ✳
          </span>
        </Reveal>
        <div className="studio-expertise-grid">
          {config.expertise.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal className="studio-expertise-item" key={item.title}>
                <div className="studio-expertise-icon">
                  <Icon size={28} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.tags.map((tag) => (
                    <li key={tag}>
                      <Plus size={12} />
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const [active, setActive] = useState(0);
  const step = config.process[active];
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  return (
    <section id="process" className="studio-section studio-shell">
      <Reveal className="studio-section-heading">
        <div>
          <span className="studio-eyebrow">{config.labels.processEyebrow}</span>
          <h2>{config.labels.processTitle}</h2>
        </div>
        <p>{config.labels.processIntro}</p>
      </Reveal>
      <Reveal className="studio-process">
        <div
          className="studio-process-tabs"
          role="tablist"
          aria-label={config.labels.processAria}
        >
          {config.process.map((item, i) => (
            <button
              key={item.title}
              ref={(element) => {
                tabs.current[i] = element;
              }}
              id={`process-tab-${i}`}
              role="tab"
              aria-controls="process-panel"
              aria-selected={active === i}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(event) => {
                let next = i;
                if (event.key === "ArrowRight" || event.key === "ArrowDown")
                  next = (i + 1) % config.process.length;
                else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
                  next =
                    (i - 1 + config.process.length) % config.process.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = config.process.length - 1;
                else return;
                event.preventDefault();
                setActive(next);
                tabs.current[next]?.focus();
              }}
            >
              <span>0{i + 1}</span>
              {item.title}
              <ArrowRight size={18} />
            </button>
          ))}
        </div>
        <div
          id="process-panel"
          className="studio-process-panel"
          role="tabpanel"
          aria-labelledby={`process-tab-${active}`}
        >
          <div className="studio-process-description">
            <span className="studio-eyebrow">
              0{active + 1} / {step.title.toUpperCase()}
            </span>
            <h3>{step.subtitle}</h3>
            <p>{step.description}</p>
            <div className="studio-process-output">
              <Check size={17} />
              {step.output}
            </div>
          </div>
          <div
            className="studio-process-code"
            aria-label={config.labels.workflowAria}
          >
            <div>
              <Code2 size={16} />
              <span>{config.labels.workflowFile}</span>
              <span>{config.labels.shortIllustration}</span>
            </div>
            <pre>
              {step.lines.map((line, i) => (
                <span key={line}>
                  <i>{String(i + 1).padStart(2, "0")}</i>
                  <code>{line}</code>
                  {"\n"}
                </span>
              ))}
            </pre>
            <span className="studio-code-comment">// {step.output}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ClientReviews() {
  return (
    <section id="testimonials" className="studio-section studio-reviews">
      <div className="studio-shell">
        <Reveal className="studio-reviews-heading">
          <div>
            <span className="studio-eyebrow">
              {config.labels.reviewEyebrow}
            </span>
            <h2>{config.labels.reviewTitle}</h2>
          </div>
          <div>
            <p>{config.labels.reviewIntro}</p>
            <a
              className="studio-text-link"
              href={config.reviewUrl}
              target="_blank"
              rel="noreferrer"
            >
              {config.labels.reviewProfile}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
        <div className="studio-review-grid">
          {config.reviews.map((review, i) => (
            <Reveal className="studio-review-card" key={review.role}>
              <div className="studio-review-top">
                <span aria-hidden="true">“</span>
                <span>{review.date}</span>
              </div>
              <blockquote>{review.excerpt}</blockquote>
              <div className="studio-review-author">
                <span>{config.labels.reviewAuthor}</span>
                <h3>{review.role}</h3>
              </div>
              <details>
                <summary>
                  {config.labels.reviewFull}
                  <Plus size={15} aria-hidden="true" />
                </summary>
                <p>{review.content}</p>
              </details>
              <span className="studio-review-index" aria-hidden="true">
                0{i + 1}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="studio-section studio-about">
      <div className="studio-shell studio-about-grid">
        <Reveal className="studio-about-art">
          <div className="studio-about-gridlines" />
          <div className="studio-background-story">
            <span className="studio-eyebrow">
              {config.labels.backgroundLabel}
            </span>
            <Network size={54} strokeWidth={1} aria-hidden="true" />
            <h3>{config.labels.backgroundTitle}</h3>
            <p>{config.labels.backgroundText}</p>
          </div>
          <span className="studio-about-signature">{config.identity.name}</span>
          <span className="studio-about-coordinate" aria-hidden="true">
            {config.labels.aboutCoordinate}
          </span>
        </Reveal>
        <Reveal className="studio-about-copy">
          <span className="studio-eyebrow">{config.labels.aboutEyebrow}</span>
          <h2>{config.labels.aboutTitle}</h2>
          <p>{config.labels.aboutBody}</p>
          <p>{config.labels.aboutSecond}</p>
          <details className="studio-commitments">
            <summary>
              {config.labels.principlesLabel}
              <Plus size={16} aria-hidden="true" />
            </summary>
            <dl>
              {config.commitments.map((item) => (
                <div key={item.key}>
                  <dt>{item.key}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </details>
          <div className="studio-about-links">
            <a
              className="studio-text-link"
              href={config.identity.resumeUrl}
              download
            >
              {config.labels.resume}
              <ArrowDown size={17} />
            </a>
            <a
              className="studio-text-link"
              href={config.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {config.labels.linkedin}
              <ArrowUpRight size={17} />
            </a>
            <a
              className="studio-text-link"
              href={config.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              {config.labels.github}
              <ArrowUpRight size={17} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactSection() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const channelIcons = {
    email: Mail,
    linkedin: Linkedin,
    upwork: ArrowUpRight,
    phone: Phone,
    whatsapp: MessageCircle,
    github: Github,
  };
  return (
    <footer id="contact" className="studio-contact">
      <div className="studio-shell">
        <Reveal>
          <div className="studio-contact-top">
            <span className="studio-eyebrow">
              {config.labels.contactEyebrow}
            </span>
            <span className="studio-availability">
              <i />
              {config.hero.availability}
            </span>
          </div>
          <div className="studio-contact-grid">
            <h2>{config.labels.contactTitle}</h2>
            <div>
              <p>{config.labels.contactBody}</p>
              <a href={config.socials.email} className="studio-button primary">
                {config.labels.contactAction}
                <ArrowUpRight size={19} />
              </a>
            </div>
          </div>
          <nav
            className="studio-contact-channels"
            aria-label={config.labels.contactChannelsLabel}
          >
            {config.contactChannels.map((channel) => {
              const Icon = channelIcons[channel.id];
              return (
                <a
                  key={channel.id}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                >
                  <span className="studio-channel-icon">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <span className="studio-channel-copy">
                    <strong>{channel.label}</strong>
                    <span>{channel.value}</span>
                  </span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              );
            })}
          </nav>
          <div className="studio-email-row studio-contact-copy-row">
            <button
              className="studio-text-link"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(config.identity.email);
                  setCopyStatus("copied");
                } catch {
                  setCopyStatus("failed");
                }
              }}
            >
              {copyStatus === "copied" ? (
                <Check size={16} />
              ) : (
                <Copy size={16} />
              )}
              <span aria-live="polite">
                {copyStatus === "copied"
                  ? config.labels.copied
                  : copyStatus === "failed"
                    ? config.labels.copyFailed
                    : config.labels.copy}
              </span>
            </button>
          </div>
        </Reveal>
        <div className="studio-footer-bottom">
          <a className="studio-footer-brand" href="#home">
            {config.identity.name}
            <span>© {new Date().getFullYear()}</span>
          </a>
          <span>{config.labels.footerNote}</span>
          <a href="#home">
            {config.labels.backTop}
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function EngineeringStudio() {
  const [selected, setSelected] = useState<StudioProject | null>(null);
  return (
    <div className="engineering-studio">
      <StudioNavigation />
      <main id="main" tabIndex={-1}>
        <HeroShowcase onProject={setSelected} />
        <WorkSection onProject={setSelected} />
        <ClientReviews />
        <ExpertiseSection />
        <ProcessSection />
        <AboutSection />
      </main>
      <ContactSection />
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
