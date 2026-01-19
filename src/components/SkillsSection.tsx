import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Cloud,
  Code,
  Settings,
  Brain,
  Globe,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const iconMap: Record<string, LucideIcon> = {
  Cloud,
  Code,
  Settings,
  Brain,
  Globe,
  Heart,
};

// Skill Bar Component
const SkillBar = ({
  name,
  level,
  delay,
  inView,
}: {
  name: string;
  level: number;
  delay: number;
  inView: boolean;
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

// Skill Category Card
const SkillCategoryCard = ({
  category,
  index,
  inView,
}: {
  category: (typeof portfolioConfig.skillCategories)[0];
  index: number;
  inView: boolean;
}) => {
  const Icon = iconMap[category.icon] || Code;
  const isHealthcare = category.icon === "Heart";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`glass-card p-6 card-hover ${
        isHealthcare ? "border-success/30" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`p-3 rounded-xl ${
            isHealthcare
              ? "bg-success/10 text-success"
              : "bg-primary/10 text-primary"
          }`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-semibold text-lg">{category.category}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={0.3 + index * 0.1 + skillIndex * 0.05}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Docker & n8n Badges
const SpecialBadges = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-4 mt-12"
    >
      {/* Docker Badge */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="glass-card px-6 py-4 flex items-center gap-4"
      >
        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 text-blue-400"
            fill="currentColor"
          >
            <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400">Docker Expert</h4>
          <p className="text-sm text-muted-foreground">
            Containerization & Orchestration
          </p>
        </div>
      </motion.div>

      {/* n8n Badge */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="glass-card px-6 py-4 flex items-center gap-4"
      >
        <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 text-orange-400"
            fill="currentColor"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 5v4H7v2h4v4h2v-4h4v-2h-4V7h-2z" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-orange-400">n8n Specialist</h4>
          <p className="text-sm text-muted-foreground">
            50+ Automation Workflows
          </p>
        </div>
      </motion.div>

      {/* Terraform Badge */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="glass-card px-6 py-4 flex items-center gap-4"
      >
        <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
          <Settings className="w-8 h-8 text-purple-400" />
        </div>
        <div>
          <h4 className="font-semibold text-purple-400">Terraform Pro</h4>
          <p className="text-sm text-muted-foreground">
            Infrastructure as Code
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-success/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack, from cloud
            infrastructure to frontend development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioConfig.skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.category}
              category={category}
              index={index}
              inView={isInView}
            />
          ))}
        </div>

        {/* Special Badges */}
        <SpecialBadges />
      </div>
    </section>
  );
};
