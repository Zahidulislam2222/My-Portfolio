import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Play,
  Cloud,
  X,
  Heart,
  ChevronDown,
  Star,
  Database,
  FileText,
  Rocket,
  Blocks,
  ChevronLeft,
  ChevronRight,
  Code,
  ListVideo,
} from "lucide-react";
import { portfolioConfig, projectCategories, type Project } from "@/config/portfolio.config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Video Modal — z-[60] so it appears above ProjectDetailModal
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
        className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
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

// Image Modal — z-[60] so it appears above ProjectDetailModal
const ImageModal = ({
  imageUrl,
  isOpen,
  onClose,
}: {
  imageUrl: string | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen || !imageUrl) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          src={imageUrl}
          alt="Full view"
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors bg-background/50 rounded-full"
        >
          <X className="w-8 h-8" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

// Full-screen Project Detail Modal
const ProjectDetailModal = ({
  project,
  isOpen,
  onClose,
  onVideoClick,
  onImageClick,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onVideoClick: (id: string) => void;
  onImageClick: (url: string) => void;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCodeMenuOpen, setIsCodeMenuOpen] = useState(false);
  const [isPdfMenuOpen, setIsPdfMenuOpen] = useState(false);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    setCurrentImageIndex(0);
    setIsCodeMenuOpen(false);
    setIsPdfMenuOpen(false);
    setOpenChallenge(null);
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center bg-background/90 backdrop-blur-sm p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-card rounded-2xl overflow-hidden my-8 shadow-2xl border border-border"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/70 text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Carousel */}
          <div className="relative aspect-video bg-secondary group/image overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={projectImages[currentImageIndex]}
                alt={project.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover cursor-zoom-in"
                onClick={() => onImageClick(projectImages[currentImageIndex])}
                loading="lazy"
              />
            </AnimatePresence>

            {projectImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-black/70 z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-black/70 z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {projectImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all ${idx === currentImageIndex ? "bg-white w-3" : "bg-white/50 w-1.5"}`}
                    />
                  ))}
                </div>
              </>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
              {project.featured && (
                <Badge className="bg-primary/90 text-primary-foreground flex items-center gap-1">
                  <Star className="w-3 h-3" />Featured
                </Badge>
              )}
              {project.isHealthcare && (
                <Badge className="healthcare-badge flex items-center gap-1">
                  <Heart className="w-3 h-3" />Healthcare
                </Badge>
              )}
              {project.isHybridCloud && (
                <Badge className="hybridcloud-badge flex items-center gap-1">
                  <Cloud className="w-3 h-3" />Hybrid Cloud
                </Badge>
              )}
              {project.isHeadless && (
                <Badge className="headless-badge flex items-center gap-1">
                  <Database className="w-3 h-3" />Headless
                </Badge>
              )}
              {project.isWordpress && (
                <Badge className="wordpress-badge flex items-center gap-1">
                  <FileText className="w-3 h-3" />WordPress
                </Badge>
              )}
              {project.isStrapi && (
                <Badge className="strapi-badge flex items-center gap-1">
                  <Rocket className="w-3 h-3" />Strapi
                </Badge>
              )}
              {project.isContentful && (
                <Badge className="contentful-badge flex items-center gap-1">
                  <Blocks className="w-3 h-3" />Contentful
                </Badge>
              )}
            </div>

            {project.videoId && (
              <button
                onClick={() => onVideoClick(project.videoId!)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-full bg-primary/90 text-primary-foreground hover:bg-primary transition-all hover:scale-110 z-10"
              >
                <Play className="w-8 h-8" />
              </button>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Category + Title */}
            <div className="mb-5">
              <span className="text-xs text-primary font-medium uppercase tracking-wider">
                {project.category.map((catId) =>
                  projectCategories.find((c) => c.id === catId)?.label
                ).join(", ")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-1">{project.title}</h2>
            </div>

            {/* Full Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 whitespace-pre-line">
              {project.fullDescription}
            </p>

            {/* Before → After */}
            {project.beforeAfter && project.beforeAfter.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-foreground flex items-center gap-2">
                  Before <span className="text-primary">→</span> After
                </h4>
                <div className="space-y-3">
                  {project.beforeAfter.map((row, i) => (
                    <div key={i} className="rounded-lg border border-border/60 bg-secondary/30 p-3">
                      {row.label && (
                        <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                          {row.label}
                        </div>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="rounded-md border border-destructive/25 bg-destructive/5 p-2.5">
                          <span className="text-[10px] uppercase tracking-wider text-destructive/80 block mb-1">Before</span>
                          <span className="text-sm text-muted-foreground">{row.before}</span>
                        </div>
                        <div className="rounded-md border border-success/30 bg-success/5 p-2.5">
                          <span className="text-[10px] uppercase tracking-wider text-success/90 block mb-1">After</span>
                          <span className="text-sm text-foreground">{row.after}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-2 text-foreground">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && Object.keys(project.metrics).length > 0 && (
              <div className="mb-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="bg-secondary/50 rounded-lg p-3 text-center border border-border/50">
                    <div className="text-primary font-bold text-lg">{value}</div>
                    <div className="text-muted-foreground text-xs mt-0.5">{key}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Achievements */}
            {project.achievements && project.achievements.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2">Key Achievements</h4>
                <ul className="space-y-1.5">
                  {project.achievements.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Problems I solved */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-foreground">Problems I solved</h4>
                <div className="space-y-2">
                  {project.challenges.map((c, i) => {
                    const open = openChallenge === i;
                    return (
                      <div key={i} className="rounded-lg border border-border/60 bg-secondary/30 overflow-hidden">
                        <button
                          onClick={() => setOpenChallenge(open ? null : i)}
                          className="w-full flex items-center justify-between gap-3 p-3 text-left hover:bg-secondary/50 transition-colors"
                        >
                          <span className="text-sm font-medium text-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                            {c.problem}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 flex-shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="px-3 pb-3 text-sm space-y-2">
                                <p className="text-muted-foreground">
                                  <span className="text-foreground font-medium">How I solved it: </span>
                                  {c.solution}
                                </p>
                                {c.outcome && (
                                  <p className="text-success/90">
                                    <span className="font-medium">Outcome: </span>
                                    {c.outcome}
                                  </p>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
              {project.liveUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />Live Demo
                  </a>
                </Button>
              )}

              {project.githubLinks && project.githubLinks.length > 0 ? (
                <div className="relative">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setIsCodeMenuOpen(!isCodeMenuOpen)}
                    className={isCodeMenuOpen ? "bg-accent" : ""}
                  >
                    <Code className="w-4 h-4 mr-2" />Code
                    <ChevronDown className={`w-3 h-3 ml-2 transition-transform ${isCodeMenuOpen ? "rotate-180" : ""}`} />
                  </Button>
                  <AnimatePresence>
                    {isCodeMenuOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsCodeMenuOpen(false)} />
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
                              <Github className="w-3 h-3" />{link.label}
                            </a>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              ) : project.githubUrl ? (
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />Code
                  </a>
                </Button>
              ) : null}

              {project.pdfLinks && project.pdfLinks.length > 0 ? (
                <div className="relative">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setIsPdfMenuOpen(!isPdfMenuOpen)}
                    className={isPdfMenuOpen ? "bg-accent" : ""}
                  >
                    <FileText className="w-4 h-4 mr-2" />PDFs
                    <ChevronDown className={`w-3 h-3 ml-2 transition-transform ${isPdfMenuOpen ? "rotate-180" : ""}`} />
                  </Button>
                  <AnimatePresence>
                    {isPdfMenuOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsPdfMenuOpen(false)} />
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute bottom-full left-0 mb-2 w-52 bg-popover border border-border rounded-lg shadow-xl z-50 overflow-hidden flex flex-col p-1"
                        >
                          {project.pdfLinks.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                            >
                              <FileText className="w-3 h-3" />{link.label}
                            </a>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              ) : project.pdfUrl ? (
                <Button size="sm" variant="outline" asChild>
                  <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4 mr-2" />View PDF
                  </a>
                </Button>
              ) : null}

              {project.videoId && (
                <Button size="sm" variant="outline" onClick={() => onVideoClick(project.videoId!)}>
                  <Play className="w-4 h-4 mr-2" />Watch Demo
                </Button>
              )}
              {project.playlistId && (
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={`https://www.youtube.com/playlist?list=${project.playlistId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ListVideo className="w-4 h-4 mr-2" />Playlist
                  </a>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Project List Item — horizontal row layout
const ProjectListItem = ({
  project,
  index,
  onShowDetails,
}: {
  project: Project;
  index: number;
  onShowDetails: (p: Project) => void;
}) => {
  const [imgError, setImgError] = useState(false);
  const showPlaceholder = !project.thumbnail || imgError;

  const initials = project.title
    .split(/[\s\-—]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.35) }}
      className="glass-card p-4 sm:p-5 flex gap-4 items-start card-hover group"
    >
      {/* Thumbnail */}
      <div className="flex-shrink-0 w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-border">
        {showPlaceholder ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-secondary border border-primary/20 rounded-lg">
            <span className="text-primary font-bold text-xl tracking-tight select-none">
              {initials}
            </span>
          </div>
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1 mb-1">
          <div className="min-w-0 flex-1">
            <span className="text-xs text-primary font-medium uppercase tracking-wider block">
              {project.category
                .map((catId) => projectCategories.find((c) => c.id === catId)?.label)
                .join(", ")}
            </span>
            <h3 className="text-base sm:text-lg font-bold mt-0.5 leading-snug">{project.title}</h3>
          </div>

          {/* Button — right side on sm+ */}
          <button
            onClick={() => onShowDetails(project)}
            className="hidden sm:block flex-shrink-0 self-center bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium
              shadow-[0_0_14px_rgba(6,182,212,0.45)] hover:shadow-[0_0_26px_rgba(6,182,212,0.85)]
              transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            Full Details
          </button>
        </div>

        <p className="text-muted-foreground text-sm mb-3 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags — capped to keep cards short; full list is in the modal */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-badge text-xs">{tech}</span>
          ))}
          {project.technologies.length > 5 && (
            <span className="tech-badge text-xs opacity-70">+{project.technologies.length - 5} more</span>
          )}
        </div>

        {/* Button — below tags on mobile */}
        <button
          onClick={() => onShowDetails(project)}
          className="mt-3 sm:hidden bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium
            shadow-[0_0_14px_rgba(6,182,212,0.45)] hover:shadow-[0_0_26px_rgba(6,182,212,0.85)]
            transition-all duration-300 hover:scale-105"
        >
          Full Details
        </button>
      </div>
    </motion.div>
  );
};

// Featured Project Card — larger, glowing, animated gradient border
const FeaturedProjectCard = ({
  project,
  index,
  onShowDetails,
}: {
  project: Project;
  index: number;
  onShowDetails: (p: Project) => void;
}) => {
  const [imgError, setImgError] = useState(false);
  const showPlaceholder = !project.thumbnail || imgError;

  const initials = project.title
    .split(/[\s\-—]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  const categoryLabel = project.category
    .map((catId) => projectCategories.find((c) => c.id === catId)?.label)
    .filter(Boolean)
    .join(", ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
      whileHover={{ y: -6 }}
      className="animated-border pulse-glow group flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-video bg-secondary overflow-hidden">
        {showPlaceholder ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/25 via-primary/10 to-secondary">
            <span className="text-primary font-bold text-4xl tracking-tight select-none">{initials}</span>
          </div>
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
          <Badge className="bg-primary/90 text-primary-foreground flex items-center gap-1">
            <Star className="w-3 h-3" />Featured
          </Badge>
          {project.isHealthcare && (
            <Badge className="healthcare-badge flex items-center gap-1">
              <Heart className="w-3 h-3" />Healthcare
            </Badge>
          )}
          {project.isHybridCloud && (
            <Badge className="hybridcloud-badge flex items-center gap-1">
              <Cloud className="w-3 h-3" />Hybrid Cloud
            </Badge>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <span className="text-xs text-primary font-medium uppercase tracking-wider">{categoryLabel}</span>
        <h3 className="text-lg md:text-xl font-bold mt-1 mb-2 leading-snug">{project.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-badge text-xs">{tech}</span>
          ))}
          {project.technologies.length > 5 && (
            <span className="tech-badge text-xs opacity-70">+{project.technologies.length - 5} more</span>
          )}
        </div>
        <button
          onClick={() => onShowDetails(project)}
          className="mt-auto bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold
            shadow-[0_0_16px_rgba(6,182,212,0.5)] hover:shadow-[0_0_28px_rgba(6,182,212,0.9)]
            transition-all duration-300 hover:scale-[1.02]"
        >
          Full Details
        </button>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const NORMAL_LIMIT = 6;
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [videoModalId, setVideoModalId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Reset "show more" whenever the category filter changes
  useEffect(() => {
    setShowAll(false);
  }, [activeCategory]);

  const filteredProjects = portfolioConfig.projects.filter(
    (p) => activeCategory === "all" || p.category.includes(activeCategory)
  );
  // Pin these to the front of the featured grid; everything else keeps its order
  const FEATURED_ORDER = ["yuktha-wellness", "ftm-automation-suite"];
  const featuredProjects = filteredProjects
    .filter((p) => p.featured)
    .sort((a, b) => {
      const ai = FEATURED_ORDER.indexOf(a.id);
      const bi = FEATURED_ORDER.indexOf(b.id);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });
  const normalProjects = filteredProjects.filter((p) => !p.featured);
  const visibleNormal = showAll ? normalProjects : normalProjects.slice(0, NORMAL_LIMIT);
  const hiddenCount = normalProjects.length - visibleNormal.length;

  return (
    <section
      id="projects"
      className="py-20 md:py-32 relative overflow-hidden bg-secondary/20"
    >
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

          {/* Featured Projects — glowing cards */}
          {featuredProjects.length > 0 && (
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-4 h-4 text-primary flex-shrink-0" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                  Featured Work
                </h3>
                <div className="h-px flex-1 bg-border/60" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                {featuredProjects.map((project, index) => (
                  <FeaturedProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onShowDetails={setSelectedProject}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Other Projects — compact list */}
          {normalProjects.length > 0 && (
            <div>
              {featuredProjects.length > 0 && (
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                    More Projects
                  </h3>
                  <div className="h-px flex-1 bg-border/60" />
                </div>
              )}
              <motion.div layout className="flex flex-col gap-4">
                <AnimatePresence mode="popLayout">
                  {visibleNormal.map((project, index) => (
                    <ProjectListItem
                      key={project.id}
                      project={project}
                      index={index}
                      onShowDetails={setSelectedProject}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>

              {hiddenCount > 0 && (
                <div className="flex justify-center mt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setShowAll(true)}
                    className="border-primary/40 text-primary hover:bg-primary/10"
                  >
                    Show more projects ({hiddenCount})
                  </Button>
                </div>
              )}
              {showAll && normalProjects.length > NORMAL_LIMIT && (
                <div className="flex justify-center mt-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAll(false)}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Show less
                  </Button>
                </div>
              )}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No projects in this category yet.
            </p>
          )}
        </motion.div>
      </div>

      <VideoModal
        videoId={videoModalId || ""}
        isOpen={!!videoModalId}
        onClose={() => setVideoModalId(null)}
      />
      <ImageModal
        imageUrl={selectedImage}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onVideoClick={setVideoModalId}
        onImageClick={setSelectedImage}
      />
    </section>
  );
};
