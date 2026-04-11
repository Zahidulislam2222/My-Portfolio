import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Code, Shield, Rocket } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const iconMap: Record<string, React.ElementType> = {
  Search,
  Code,
  Shield,
  Rocket,
};

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { process } = portfolioConfig;

  return (
    <section id="process" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            How I Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            From <span className="gradient-text">Problem</span> to{" "}
            <span className="gradient-text">Production</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every project follows a battle-tested process that prioritizes
            compliance, security, and working software over documentation theater.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((item, index) => {
            const Icon = iconMap[item.icon] || Code;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative glass-card p-6 card-hover group"
              >
                {/* Step number */}
                <div className="absolute -top-3 -left-2 w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">
                    {item.step}
                  </span>
                </div>

                {/* Connector line (hidden on last item and mobile) */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-primary/30" />
                )}

                <div className="mt-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
