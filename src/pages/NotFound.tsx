import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { studioConfig as config } from "@/config/studio.config";
import { notFoundMeta, seo } from "@/config/seo.config";
import { StudioNavigation } from "@/components/studio/EngineeringStudio";
import "@/components/studio/studio.css";

const NotFound = () => {
  useEffect(() => {
    document.title = notFoundMeta().title;
  }, []);
  return (
    <div className="engineering-studio" id="top">
      <StudioNavigation base="/" />
      <main id="main" tabIndex={-1} className="studio-shell studio-case-main studio-not-found">
        <span className="studio-eyebrow">404</span>
        <h1>{config.labels.notFoundTitle}</h1>
        <p>{config.labels.notFoundBody}</p>
        <div className="studio-hero-actions">
          <a className="studio-button primary" href={seo.work.path}>
            {config.labels.allWork}
            <ArrowUpRight size={18} />
          </a>
          <a className="studio-text-link" href="/">
            {config.labels.notFoundHome}
          </a>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
