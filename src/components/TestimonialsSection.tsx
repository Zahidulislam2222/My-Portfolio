import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, MessageSquare } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import { Button } from "@/components/ui/button";

// --- CONTROL SWITCH ---
// Set to FALSE to show "Coming Soon" (Professional NDA message)
// Set to TRUE to show the Real Slider (when you have data)
const SHOW_TESTIMONIALS = false;

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
            }`}
        />
      ))}
    </div>
  );
};

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const testimonials = portfolioConfig.testimonials;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // If showing real testimonials but array is empty, hide section
  if (SHOW_TESTIMONIALS && testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        {/* --- CONDITIONAL CONTENT --- */}
        {!SHOW_TESTIMONIALS ? (

          /* OPTION A: PROFESSIONAL PLACEHOLDER (NDA Style) */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-card p-12 text-center relative overflow-hidden group hover:border-primary/30 transition-colors duration-300">

              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-all duration-500" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-6 border border-white/5">
                  <MessageSquare className="w-8 h-8 text-primary/80" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Success Stories in the Making
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto mb-8">
                  I am currently building my client roster and accepting new
                  projects. My focus is on delivering exceptional quality and
                  reliability to establish long-term relationships. Your project
                  could be the next featured success story here.
                </p>

                <div className="inline-flex items-center gap-2 text-sm text-primary/80 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                  <Star className="w-4 h-4 fill-primary/80" />
                  <span>Collecting feedback from recent projects</span>
                </div>
              </div>
            </div>
          </motion.div>

        ) : (

          /* OPTION B: REAL CAROUSEL (Your Original Code) */
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-8 left-8 md:left-12">
                <Quote className="w-16 h-16 text-primary/20" />
              </div>

              {/* Testimonial Cards */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/20"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <StarRating rating={testimonials[currentIndex].rating} />
                      <p className="text-lg md:text-xl text-foreground mt-4 mb-6 leading-relaxed">
                        "{testimonials[currentIndex].content}"
                      </p>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].role},{" "}
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="rounded-full border-border hover:border-primary/50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${i === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="rounded-full border-border hover:border-primary/50"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};