import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import { Button } from "@/components/ui/button";

const ServiceCard = ({
  service,
  index,
  inView,
}: {
  service: (typeof portfolioConfig.services)[0];
  index: number;
  inView: boolean;
}) => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative glass-card p-8 flex flex-col ${
        service.highlighted
          ? "border-primary/50 glow"
          : "card-hover"
      }`}
    >
      {/* Popular Badge */}
      {service.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
            <Sparkles className="w-3 h-3" />
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold gradient-text">{service.price}</span>
          <span className="text-muted-foreground">{service.period}</span>
        </div>
        <p className="text-muted-foreground text-sm mt-3">{service.description}</p>
      </div>

      {/* Features */}
      <ul className="space-y-3 flex-1 mb-8">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-0.5 p-1 rounded-full bg-primary/10">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        onClick={scrollToContact}
        className={`w-full ${
          service.highlighted
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-secondary text-foreground hover:bg-secondary/80"
        }`}
      >
        {service.ctaText}
      </Button>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="py-20 md:py-32 relative overflow-hidden bg-secondary/20"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Services & <span className="gradient-text">Packages</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible packages designed to meet your needs, from simple websites
            to enterprise cloud architectures.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {portfolioConfig.services.map((service, index) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={index}
              inView={isInView}
            />
          ))}
        </div>

        {/* Custom Quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need something custom? Let's discuss your specific requirements.
          </p>
          <Button
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Request Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
