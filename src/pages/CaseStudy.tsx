import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { studioConfig as config, studioProjects } from "@/config/studio.config";
import { projectEvidence } from "@/config/project-evidence.config";
import { projectMeta, projectPath, seo } from "@/config/seo.config";
import {
  ContactSection,
  ProjectCaseBody,
  StudioNavigation,
} from "@/components/studio/EngineeringStudio";
import "@/components/studio/studio.css";
import NotFound from "./NotFound";

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav className="studio-breadcrumbs" aria-label={config.labels.breadcrumbLabel}>
      <ol>
        {items.map((item) => (
          <li key={item.name}>
            {item.href ? <a href={item.href}>{item.name}</a> : <span aria-current="page">{item.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

const CaseStudy = () => {
  const { id } = useParams();
  const index = studioProjects.findIndex((project) => project.id === id);
  const project = studioProjects[index];
  useEffect(() => {
    if (project) document.title = projectMeta(project).title;
  }, [project]);
  if (!project) return <NotFound />;
  const previous = studioProjects[(index - 1 + studioProjects.length) % studioProjects.length];
  const next = studioProjects[(index + 1) % studioProjects.length];
  const client = projectEvidence[project.id]?.engagement.client;
  return (
    <div className="engineering-studio" id="top">
      <StudioNavigation base="/" />
      <main id="main" tabIndex={-1} className="studio-shell studio-case-main">
        <Breadcrumbs
          items={[
            { name: config.labels.breadcrumbHome, href: "/" },
            { name: config.labels.breadcrumbWork, href: seo.work.path },
            { name: project.name },
          ]}
        />
        <article
          className={`studio-case${config.spotlight.glow.includes(project.id) ? " is-spotlight" : ""}`}
          aria-labelledby="case-title"
        >
          <span className="studio-eyebrow">
            {project.domain}
            {client && <> · {config.labels.clientLabel} {client}</>}
          </span>
          <h1 id="case-title">{project.name}</h1>
          <ProjectCaseBody project={project} section="h2" />
        </article>
        <nav className="studio-case-pager" aria-label={config.labels.allWork}>
          <a href={projectPath(previous)}>
            <ArrowLeft size={18} aria-hidden="true" />
            <span>
              <small>{config.labels.previousProject}</small>
              {previous.name}
            </span>
          </a>
          <a href={seo.work.path} className="studio-case-pager-all">
            {config.labels.allWork}
          </a>
          <a href={projectPath(next)}>
            <span>
              <small>{config.labels.nextProject}</small>
              {next.name}
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </nav>
      </main>
      <ContactSection base="/" />
    </div>
  );
};

export default CaseStudy;
