import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { studioConfig as config, studioProjects } from "@/config/studio.config";
import { projectEvidence } from "@/config/project-evidence.config";
import { projectPath, workMeta } from "@/config/seo.config";
import {
  ContactSection,
  ProjectVisual,
  StudioNavigation,
} from "@/components/studio/EngineeringStudio";
import "@/components/studio/studio.css";
import { Breadcrumbs } from "./CaseStudy";

const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const WorkIndex = () => {
  useEffect(() => {
    document.title = workMeta().title;
  }, []);
  const groups = [
    {
      label: config.labels.clientFilter,
      projects: studioProjects.filter((project) => projectEvidence[project.id]?.engagement.type === "Client project"),
    },
    ...(["AI & Agents", "Cloud & Systems", "Web & Commerce"] as const).map((category) => ({
      label: category,
      projects: studioProjects.filter(
        (project) =>
          project.category === category &&
          projectEvidence[project.id]?.engagement.type !== "Client project",
      ),
    })),
  ].filter((group) => group.projects.length > 0);
  return (
    <div className="engineering-studio" id="top">
      <StudioNavigation base="/" />
      <main id="main" tabIndex={-1} className="studio-shell studio-case-main">
        <Breadcrumbs
          items={[
            { name: config.labels.breadcrumbHome, href: "/" },
            { name: config.labels.breadcrumbWork },
          ]}
        />
        <header className="studio-section-heading studio-work-heading">
          <div>
            <span className="studio-eyebrow">{config.labels.workPageEyebrow}</span>
            <h1>{config.labels.workPageTitle}</h1>
          </div>
          <p>{config.labels.workPageIntro}</p>
        </header>
        {groups.map((group) => (
          <section className="studio-work-group" key={group.label} aria-labelledby={`group-${slug(group.label)}`}>
            <h2 id={`group-${slug(group.label)}`}>
              {group.label}
              <span>{String(group.projects.length).padStart(2, "0")}</span>
            </h2>
            <ul className="studio-work-list">
              {group.projects.map((project) => (
                <li key={project.id}>
                  <a href={projectPath(project)} className="studio-work-item">
                    <div className="studio-work-thumb">
                      <ProjectVisual project={project} sizes="(max-width: 640px) 96px, 180px" decorative />
                      {project.image && project.imageKind !== "screenshot" && (
                        <span className="studio-image-kind-label">{config.labels.imageLabels[project.imageKind]}</span>
                      )}
                    </div>
                    <div className="studio-work-copy">
                      <small>{project.domain}</small>
                      <strong>{project.name}</strong>
                      <span>{project.summary}</span>
                      {projectEvidence[project.id]?.engagement.client && (
                        <span className="studio-project-client">
                          <span>{config.labels.clientLabel}</span>
                          {projectEvidence[project.id].engagement.client}
                        </span>
                      )}
                    </div>
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
      <ContactSection base="/" />
    </div>
  );
};

export default WorkIndex;
