/* ========================================
   📝 EDIT THIS SECTION TO UPDATE PORTFOLIO
   ========================================
   
   This is your centralized content configuration.
   Simply change the values below to update your entire portfolio.
   NO code modifications needed anywhere else!
   
   ======================================== */

export const portfolioConfig = {
  /* ========================================
     👤 PERSONAL INFORMATION
     ======================================== */
  personal: {
    name: "Zahidul Islam",
    title: "Full Stack Developer & Cloud Architect",
    // These roles will rotate in the hero typewriter effect
    roles: [
      "Full Stack Developer",
      "Cloud Architect", 
      "AI Automation Specialist",
      "Healthcare Tech Expert"
    ],
    bio: "A passionate developer with a unique journey from Physiotherapy to Technology. I specialize in building hybrid cloud architectures, full-stack applications, and AI-powered solutions, with deep expertise in healthcare technology.",
    shortBio: "Building the future of healthcare technology with hybrid cloud solutions and AI automation.",
    location: "Dhaka, Bangladesh",
    email: "zahidul@example.com", // Replace with your email
    phone: "+880 1XXX-XXXXXX", // Replace with your phone
    availability: "Available for Projects", // or "Currently Busy" / "Open to Opportunities"
    availabilityColor: "success", // "success" | "warning" | "destructive"
    resumeUrl: "/resume.pdf", // Add your resume to public folder
  },

  /* ========================================
     📊 STATISTICS (Animated Counters)
     ======================================== */
  stats: [
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Projects Completed", value: 50, suffix: "+" },
    { label: "Clients Served", value: 30, suffix: "+" },
    { label: "Cloud Services Mastered", value: 50, suffix: "+" },
  ],

  /* ========================================
     🔗 SOCIAL MEDIA LINKS
     ======================================== */
  socials: {
    github: "https://github.com/zahidul", // Replace with your GitHub
    linkedin: "https://linkedin.com/in/zahidul", // Replace with your LinkedIn
    twitter: "https://twitter.com/zahidul", // Replace with your Twitter/X
    youtube: "", // Optional: Add YouTube channel
    email: "mailto:zahidul@example.com",
  },

  /* ========================================
     🧭 NAVIGATION LINKS
     ======================================== */
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],

  /* ========================================
     🚀 FEATURED PROJECTS
     ========================================
     
     Project Template:
     {
       id: "unique-id",
       title: "Project Name",
       category: "hybrid-cloud" | "wordpress" | "mobile" | "ai-ml" | "automation",
       description: "Short description for cards",
       fullDescription: "Detailed description for modal",
       thumbnail: "/project-image.jpg", // Add to public folder or use URL
       technologies: ["React", "AWS", "etc"],
       achievements: ["Achievement 1", "Achievement 2"],
       liveUrl: "https://...", // Optional
       githubUrl: "https://github.com/...", // Optional
       videoId: "youtube-video-id", // Optional: YouTube video ID
       featured: true, // Show in hero section
       isHealthcare: true, // Show healthcare badge
       metrics: { users: "10K+", uptime: "99.9%" }, // Optional metrics
     }
     
     ======================================== */
  projects: [
    {
      id: "mediconnect",
      title: "MediConnect - Hybrid Cloud Telemedicine",
      category: "hybrid-cloud",
      description: "Enterprise-grade telemedicine platform leveraging 50+ AWS and GCP services for seamless healthcare delivery.",
      fullDescription: "MediConnect is a comprehensive telemedicine solution that revolutionizes healthcare delivery through hybrid cloud architecture. Built with React, Node.js, and Terraform, it orchestrates over 50 AWS and GCP services to provide secure video consultations, electronic health records, prescription management, and AI-powered diagnostics. The platform serves thousands of patients and healthcare providers with 99.9% uptime.",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      technologies: ["React", "Node.js", "AWS", "GCP", "Terraform", "Docker", "Kubernetes", "PostgreSQL", "Redis", "WebRTC"],
      achievements: [
        "Integrated 50+ cloud services across AWS and GCP",
        "Achieved 99.9% uptime with multi-region failover",
        "Reduced patient wait times by 60%",
        "HIPAA compliant architecture",
        "Served 10,000+ telemedicine consultations"
      ],
      liveUrl: "https://mediconnect.example.com",
      githubUrl: "https://github.com/zahidul/mediconnect",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      featured: true,
      isHealthcare: true,
      metrics: { users: "10K+", uptime: "99.9%", services: "50+" },
    },
    {
      id: "health-code-analysis",
      title: "Health Code Analysis Platform",
      category: "ai-ml",
      description: "WordPress-based platform with custom Dialogflow ES chatbot for intelligent health code analysis and medical queries.",
      fullDescription: "An innovative healthcare platform combining WordPress's flexibility with advanced AI capabilities. Features a custom-built Dialogflow ES chatbot that provides intelligent health code analysis, symptom checking, and medical information queries. The platform includes custom PHP modules for healthcare-specific functionality and seamless EHR integration.",
      thumbnail: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
      technologies: ["WordPress", "Dialogflow ES", "PHP", "MySQL", "REST API", "JavaScript", "TensorFlow"],
      achievements: [
        "95% accuracy in health code interpretation",
        "Handles 1000+ daily queries",
        "Reduced manual processing by 70%",
        "Multi-language support"
      ],
      liveUrl: "https://healthcode.example.com",
      githubUrl: "https://github.com/zahidul/health-code-analysis",
      featured: true,
      isHealthcare: true,
      metrics: { accuracy: "95%", queries: "1K+/day" },
    },
    {
      id: "chronos",
      title: "Chronos - Headless E-Commerce",
      category: "wordpress",
      description: "Modern headless e-commerce solution combining React frontend with WooCommerce backend via GraphQL.",
      fullDescription: "Chronos is a cutting-edge headless e-commerce platform that decouples the frontend from WooCommerce, enabling lightning-fast performance and unlimited customization. Built with React and GraphQL, it delivers sub-second page loads, real-time inventory updates, and seamless checkout experiences.",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      technologies: ["React", "GraphQL", "WooCommerce", "Node.js", "Redis", "Stripe", "Tailwind CSS"],
      achievements: [
        "3x faster page loads vs traditional WooCommerce",
        "50% increase in conversion rate",
        "Real-time inventory sync",
        "Multi-currency support"
      ],
      liveUrl: "https://chronos.example.com",
      githubUrl: "https://github.com/zahidul/chronos",
      featured: true,
      isHealthcare: false,
      metrics: { speed: "3x faster", conversion: "+50%" },
    },
    {
      id: "equipcert",
      title: "EquipCert - AI Inspection App",
      category: "mobile",
      description: "AI-powered mobile inspection application with computer vision for automated equipment certification.",
      fullDescription: "EquipCert revolutionizes equipment inspection through AI-powered computer vision. Built with Next.js and Capacitor for cross-platform deployment, it uses Supabase for real-time data sync and custom ML models for defect detection. Inspectors can complete certifications 5x faster with automated photo analysis and report generation.",
      thumbnail: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      technologies: ["Next.js", "Capacitor", "Supabase", "TensorFlow", "Computer Vision", "React Native", "Python"],
      achievements: [
        "5x faster inspection completion",
        "98% defect detection accuracy",
        "Offline-first architecture",
        "Automated PDF report generation"
      ],
      liveUrl: "https://equipcert.example.com",
      githubUrl: "https://github.com/zahidul/equipcert",
      videoId: "dQw4w9WgXcQ", // Replace with actual video ID
      featured: true,
      isHealthcare: false,
      metrics: { accuracy: "98%", speed: "5x faster" },
    },
    {
      id: "n8n-automations",
      title: "n8n Automation Workflows",
      category: "automation",
      description: "Collection of powerful automation workflows including price monitoring, AI agents, and intelligent web scraping.",
      fullDescription: "A comprehensive suite of n8n automation workflows designed for business efficiency. Includes intelligent price monitoring systems, AI-powered agents for customer support, automated web scraping pipelines, and cross-platform data synchronization. Each workflow is optimized for reliability and scalability.",
      thumbnail: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80",
      technologies: ["n8n", "Node.js", "Python", "OpenAI API", "Puppeteer", "PostgreSQL", "Docker"],
      achievements: [
        "50+ custom automation workflows",
        "Saved 100+ hours/month for clients",
        "99.5% workflow reliability",
        "Real-time monitoring & alerts"
      ],
      githubUrl: "https://github.com/zahidul/n8n-workflows",
      featured: true,
      isHealthcare: false,
      metrics: { workflows: "50+", reliability: "99.5%" },
    },
    {
      id: "clinic-management",
      title: "Smart Clinic Management System",
      category: "hybrid-cloud",
      description: "Comprehensive clinic management solution with appointment scheduling, billing, and patient portal.",
      fullDescription: "A full-featured clinic management system designed specifically for small to medium healthcare facilities. Features include intelligent appointment scheduling, automated billing and insurance claims, patient portal with secure messaging, and comprehensive analytics dashboard.",
      thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "Twilio", "Stripe"],
      achievements: [
        "Reduced no-shows by 40%",
        "Automated 80% of billing tasks",
        "HIPAA compliant",
        "Multi-location support"
      ],
      liveUrl: "https://smartclinic.example.com",
      featured: false,
      isHealthcare: true,
      metrics: { noShowReduction: "40%", automation: "80%" },
    },
  ],

  /* ========================================
     💼 SKILLS & EXPERTISE
     ========================================
     
     Skill Template:
     {
       category: "Category Name",
       icon: "icon-name", // Lucide icon name
       skills: [
         { name: "Skill Name", level: 90 } // level: 0-100
       ]
     }
     
     ======================================== */
  skillCategories: [
    {
      category: "Hybrid Cloud Architecture",
      icon: "Cloud",
      color: "primary",
      skills: [
        { name: "Amazon Web Services (AWS)", level: 95 },
        { name: "Google Cloud Platform (GCP)", level: 90 },
        { name: "Microsoft Azure", level: 80 },
        { name: "Terraform & IaC", level: 90 },
        { name: "Multi-Cloud Strategy", level: 85 },
      ],
    },
    {
      category: "Full Stack Development",
      icon: "Code",
      color: "primary",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "Node.js / Express", level: 90 },
        { name: "TypeScript", level: 92 },
        { name: "PostgreSQL / MongoDB", level: 88 },
        { name: "GraphQL / REST APIs", level: 90 },
      ],
    },
    {
      category: "DevOps & Automation",
      icon: "Settings",
      color: "primary",
      skills: [
        { name: "Docker & Kubernetes", level: 90 },
        { name: "CI/CD Pipelines", level: 88 },
        { name: "n8n Workflow Automation", level: 95 },
        { name: "GitHub Actions", level: 85 },
        { name: "Infrastructure Monitoring", level: 85 },
      ],
    },
    {
      category: "AI & Machine Learning",
      icon: "Brain",
      color: "primary",
      skills: [
        { name: "Dialogflow ES/CX", level: 92 },
        { name: "OpenAI API Integration", level: 88 },
        { name: "Computer Vision", level: 80 },
        { name: "NLP & Chatbots", level: 90 },
        { name: "TensorFlow / PyTorch", level: 75 },
      ],
    },
    {
      category: "WordPress & CMS",
      icon: "Globe",
      color: "primary",
      skills: [
        { name: "Custom Theme Development", level: 95 },
        { name: "Plugin Development", level: 90 },
        { name: "WooCommerce", level: 88 },
        { name: "Headless WordPress", level: 85 },
        { name: "Performance Optimization", level: 90 },
      ],
    },
    {
      category: "Healthcare Solutions",
      icon: "Heart",
      color: "success",
      skills: [
        { name: "HIPAA Compliance", level: 90 },
        { name: "EHR/EMR Integration", level: 85 },
        { name: "Telemedicine Platforms", level: 92 },
        { name: "HL7/FHIR Standards", level: 80 },
        { name: "Medical Device Integration", level: 78 },
      ],
    },
  ],

  /* ========================================
     💰 SERVICES & PRICING
     ========================================
     
     Service Template:
     {
       name: "Package Name",
       price: "$XXX",
       period: "/month" or "/project" or "custom",
       description: "Brief description",
       features: ["Feature 1", "Feature 2"],
       highlighted: false, // Set true for recommended package
       ctaText: "Get Started"
     }
     
     ======================================== */
  services: [
    {
      name: "Starter",
      price: "$500",
      period: "/project",
      description: "Perfect for small businesses and startups looking to establish their digital presence.",
      features: [
        "Custom WordPress Website",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "1 Month Support",
        "Performance Optimization",
      ],
      highlighted: false,
      ctaText: "Get Started",
    },
    {
      name: "Professional",
      price: "$2,500",
      period: "/project",
      description: "Ideal for growing businesses needing advanced functionality and cloud integration.",
      features: [
        "Full Stack Web Application",
        "Cloud Infrastructure Setup",
        "API Development & Integration",
        "Database Design & Optimization",
        "AI Chatbot Integration",
        "3 Months Support",
        "CI/CD Pipeline Setup",
        "Performance Monitoring",
      ],
      highlighted: true,
      ctaText: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Comprehensive solutions for enterprises requiring hybrid cloud architecture and healthcare compliance.",
      features: [
        "Hybrid Cloud Architecture",
        "Multi-Region Deployment",
        "HIPAA/GDPR Compliance",
        "Custom AI/ML Solutions",
        "24/7 Support & Monitoring",
        "Dedicated DevOps Engineer",
        "SLA Guarantees",
        "Unlimited Revisions",
      ],
      highlighted: false,
      ctaText: "Contact Sales",
    },
  ],

  /* ========================================
     ⭐ TESTIMONIALS
     ========================================
     
     Testimonial Template:
     {
       name: "Client Name",
       role: "Job Title",
       company: "Company Name",
       image: "/client-image.jpg", // Optional
       content: "Testimonial text...",
       rating: 5 // 1-5 stars
     }
     
     ======================================== */
  testimonials: [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      company: "HealthFirst Clinic",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80",
      content: "Zahidul transformed our clinic's digital infrastructure with MediConnect. The hybrid cloud solution exceeded our expectations, and the HIPAA-compliant architecture gave us peace of mind. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Roberts",
      role: "CTO",
      company: "TechVentures Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      content: "The n8n automation workflows Zahidul created saved our team over 100 hours per month. His expertise in cloud architecture and attention to detail is exceptional.",
      rating: 5,
    },
    {
      name: "Lisa Park",
      role: "E-Commerce Director",
      company: "Global Retail Co.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
      content: "Chronos headless e-commerce solution tripled our page speed and increased conversions by 50%. Zahidul's understanding of both technical and business needs is remarkable.",
      rating: 5,
    },
  ],

  /* ========================================
     🏆 CERTIFICATIONS & BADGES
     ======================================== */
  certifications: [
    { name: "AWS Solutions Architect", issuer: "Amazon Web Services" },
    { name: "Google Cloud Professional", issuer: "Google Cloud" },
    { name: "Terraform Associate", issuer: "HashiCorp" },
  ],

  /* ========================================
     🎨 THEME CUSTOMIZATION
     ======================================== */
  theme: {
    // Gradient for hero section background animation
    heroGradient: "from-primary/20 via-blue-500/10 to-transparent",
    // Card hover effects
    cardGlow: true,
    // Enable particle animation in hero
    particles: true,
  },
};

/* ========================================
   📁 PROJECT CATEGORIES (for filtering)
   ======================================== */
export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "hybrid-cloud", label: "Hybrid Cloud" },
  { id: "wordpress", label: "WordPress" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ai-ml", label: "AI/ML" },
  { id: "automation", label: "Automation" },
];

/* ========================================
   ℹ️ HELPER TYPES (for TypeScript)
   ======================================== */
export type Project = typeof portfolioConfig.projects[0];
export type SkillCategory = typeof portfolioConfig.skillCategories[0];
export type Service = typeof portfolioConfig.services[0];
export type Testimonial = typeof portfolioConfig.testimonials[0];
