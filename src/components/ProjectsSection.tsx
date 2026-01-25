import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Play,
  X,
  Heart,
  ChevronDown,
  ChevronUp,
  Star,
  Zap,
  ChevronLeft,  // <-- Add this
  ChevronRight, // <-- Add this
  Code,
} from "lucide-react";
import { portfolioConfig, projectCategories, type Project } from "@/config/portfolio.config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Video Modal Component
const VideoModal = ({
  videoId,
  isOpen,
  onClose,
}: {
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-4xl aspect-video bg-card rounded-xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Video Demo"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Project Card Component
const ProjectCard = ({
  project,
  index,
  onVideoClick,
}: {
  project: Project;
  index: number;
  onVideoClick: (videoId: string) => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // --- ADD THESE NEW STATES ---
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCodeMenuOpen, setIsCodeMenuOpen] = useState(false);

  // Normalize images: use project.images array, or fallback to single thumbnail
  const projectImages = project.images || [project.thumbnail];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card overflow-hidden card-hover ${project.featured ? "md:col-span-2" : ""
        }`}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-secondary group/image">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-secondary" />
        )}

        {/* Image Slider */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={projectImages[currentImageIndex]}
            alt={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </AnimatePresence>

        {/* Slider Controls (Only show if > 1 image) */}
        {projectImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-black/70 z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-black/70 z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {projectImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImageIndex ? "bg-white w-3" : "bg-white/50"
                    }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Overlay with badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />

        {/* Featured & Healthcare Badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-20">
          {project.featured && (
            <Badge className="bg-primary/90 text-primary-foreground flex items-center gap-1">
              <Star className="w-3 h-3" />
              Featured
            </Badge>
          )}
          {project.isHealthcare && (
            <Badge className="healthcare-badge flex items-center gap-1">
              <Heart className="w-3 h-3" />
              Healthcare
            </Badge>
          )}
        </div>

        {/* Video Play Button */}
        {project.videoId && (
          <button
            onClick={() => onVideoClick(project.videoId!)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-full bg-primary/90 text-primary-foreground hover:bg-primary transition-all hover:scale-110 z-20"
          >
            <Play className="w-8 h-8" />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Title */}
        <div className="mb-3">
          <span className="text-xs text-primary font-medium uppercase tracking-wider">
            {projectCategories.find((c) => c.id === project.category)?.label}
          </span>
          <h3 className="text-xl font-bold mt-1">{project.title}</h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4">
          {isExpanded ? project.fullDescription : project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, isExpanded ? undefined : 5).map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
          {!isExpanded && project.technologies.length > 5 && (
            <span className="tech-badge">+{project.technologies.length - 5}</span>
          )}
        </div>

        {/* Achievements (when expanded) */}
        <AnimatePresence>
          {isExpanded && project.achievements && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4"
            >
              <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
              <ul className="space-y-1">
                {project.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
          {project.liveUrl && (
            <Button
              size="sm"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}

          {/* --- NEW MULTI-GITHUB BUTTON LOGIC --- */}
          {/* Case A: Multiple Links -> Dropdown */}
          {project.githubLinks && project.githubLinks.length > 0 ? (
            <div className="relative">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsCodeMenuOpen(!isCodeMenuOpen)}
                className={isCodeMenuOpen ? "bg-accent" : ""}
              >
                <Code className="w-4 h-4 mr-2" />
                Code
                <ChevronDown className={`w-3 h-3 ml-2 transition-transform ${isCodeMenuOpen ? 'rotate-180' : ''}`} />
              </Button>

              <AnimatePresence>
                {isCodeMenuOpen && (
                  <>
                    {/* Backdrop to close menu when clicking outside */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsCodeMenuOpen(false)}
                    />

                    {/* Dropdown Menu */}
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute bottom-full left-0 mb-2 w-48 bg-popover border border-border rounded-lg shadow-xl z-50 overflow-hidden flex flex-col p-1"
                    >
                      {project.githubLinks.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                        >
                          <Github className="w-3 h-3" />
                          {link.label}
                        </a>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* Case B: Single Link (Fallback) */
            project.githubUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )
          )}
          {project.videoId && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => onVideoClick(project.videoId!)}
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          )}
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-auto"
          >
            {isExpanded ? (
              <>
                Less <ChevronUp className="w-4 h-4 ml-1" />
              </>
            ) : (
              <>
                More <ChevronDown className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [videoModalId, setVideoModalId] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = portfolioConfig.projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section
      id="projects"
      className="py-20 md:py-32 relative overflow-hidden bg-secondary/20"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my best work in hybrid cloud architecture, full-stack
              development, and AI automation.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "border-border hover:border-primary/50"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onVideoClick={setVideoModalId}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        videoId={videoModalId || ""}
        isOpen={!!videoModalId}
        onClose={() => setVideoModalId(null)}
      />
    </section>
  );
};
