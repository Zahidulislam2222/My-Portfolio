import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Stethoscope, Code, Cloud, Sparkles } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

// Animated counter component
const AnimatedCounter = ({
  value,
  suffix = "",
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="text-4xl md:text-5xl font-bold gradient-text">
      {count}
      {suffix}
    </span>
  );
};

export const AboutSection = () => {
  const { personal, stats } = portfolioConfig;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const highlights = [
    {
      icon: Stethoscope,
      title: "Healthcare Background",
      description: "Unique perspective from Physiotherapy",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "50+ AWS/GCP services expertise",
    },
    {
      icon: Code,
      title: "Full Stack",
      description: "End-to-end development",
    },
    {
      icon: Sparkles,
      title: "AI & Automation",
      description: "Intelligent solutions",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              From <span className="gradient-text">Physiotherapy</span> to{" "}
              <span className="gradient-text">Technology</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {personal.bio}
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card p-6 text-center card-hover"
                whileHover={{ scale: 1.02 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Healthcare Focus Badge */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full healthcare-badge">
              <Heart className="w-5 h-5" />
              <span className="font-medium">
                Specialized in Healthcare Technology Solutions
              </span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
                <p className="text-muted-foreground mt-2 text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
