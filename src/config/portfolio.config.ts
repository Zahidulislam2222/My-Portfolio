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
    email: "muhammadzahidulislam2222@gmail.com", // Replace with your email
    phone: "+880 1794739339", // Replace with your phone
    availability: "Available for Projects", // or "Currently Busy" / "Open to Opportunities"
    availabilityColor: "success", // "success" | "warning" | "destructive"
    resumeUrl: "/Zahidul_Islam_Resume.pdf", // Add your resume to public folder
  },

  /* ========================================
     📊 STATISTICS (Animated Counters)
     ======================================== */
  stats: [
    { label: "Years Experience", value: "2-3", suffix: "+" },
    { label: "Projects Completed", value: 10, suffix: "+" },
    { label: "Clients Served", value: "Ongoing", suffix: "" },
    { label: "Cloud Services Mastered", value: 35, suffix: "+" },
  ],

  /* ========================================
     🔗 SOCIAL MEDIA LINKS
     ======================================== */
  socials: {
    github: "https://github.com/Zahidulislam2222", // Replace with your GitHub
    linkedin: "https://www.linkedin.com/in/zahidul-islam-developer/", // Replace with your LinkedIn
    twitter: "https://x.com/MdZahid67023693", // Replace with your Twitter/X
    youtube: "https://www.youtube.com/@FromZahidsKnowledgeofficial", // Optional: Add YouTube channel
    email: "mailto:muhammadzahidulislam2222@gmail.com",
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

    // Inside portfolioConfig.projects array:

    {
      id: "mediconnect",
      title: "MediConnect - Hybrid Cloud Telemedicine",
      category: ["hybrid-cloud", "mobile", "ai-ml"],
      description: "Enterprise-grade telemedicine platform leveraging 35+ AWS and GCP services for seamless healthcare delivery.",
      fullDescription: "Mediconnect is a full-scale, cloud-native telehealth platform designed with a serverless-first architecture.The project focuses on real production-grade backend logic, covering authentication, appointments, video consultations, AI diagnostics, billing, analytics, and HIPAA-aligned security — all implemented using AWS and Google Cloud services.",

      // 1. ADD THIS: Array of images for the slider
      images: [
        "https://img.youtube.com/vi/Oo_Lilyasi0/maxresdefault.jpg",
        "https://github.com/user-attachments/assets/bf8cc79b-d429-4cce-9988-8dc490876cc2",
        "https://github.com/user-attachments/assets/4c1a707b-6b39-43bf-8ce1-f9ce7745b47b",
        "https://github.com/user-attachments/assets/dcd440c3-37ac-4fc2-b9a1-02d6d430b171",
        "https://github.com/user-attachments/assets/86004fe6-0a8f-4e47-a52c-ee152f7201d4",
        "https://github.com/user-attachments/assets/2ea14bd5-1310-49d7-9f21-9bea6fd5dba2",
        "https://github.com/user-attachments/assets/62d9365d-d203-4400-8028-80676fce5149",
        "https://github.com/user-attachments/assets/1b0a8b78-1557-4b3e-81d3-b31f0797a356",
        "https://github.com/user-attachments/assets/035b3c5c-64b5-493a-a0ea-d205ad815064",
        "https://github.com/user-attachments/assets/799d1b29-cfa0-47c1-be1f-8df82e94346a",
        "https://github.com/user-attachments/assets/d2d263fb-b196-47f4-93e7-885f68b8f3ee",
        "https://github.com/user-attachments/assets/15ac977e-3068-4d65-bf58-cf4bb767e15f",
        "https://github.com/user-attachments/assets/4cf305c8-55e4-4a7c-b7a2-6bc1c7aaf1c2",
        "https://github.com/user-attachments/assets/1c6bdcaa-191b-41fd-9342-7bd8c45f6e0c",
        "https://github.com/user-attachments/assets/f75bf806-225d-4f0e-89ff-2015295b6b5b",
        "https://github.com/user-attachments/assets/c0154db8-8be5-4d57-b468-c501c02c691f",
        "https://github.com/user-attachments/assets/84ec82d4-19e4-44a4-83bf-4050d25c3907",
        "https://github.com/user-attachments/assets/564e2f77-37c7-49f6-b0bc-54c5a5ff32d7",
        "https://github.com/user-attachments/assets/dc5fcfd1-ef7a-4b40-8931-3678231cb4d9",
        "https://github.com/user-attachments/assets/403e3ef4-7f2f-498f-aab5-e52157459b70",
        "https://github.com/user-attachments/assets/c2b767e5-8376-461f-9d93-836f98a130f8"

      ],
      thumbnail: "https://img.youtube.com/vi/Oo_Lilyasi0/maxresdefault.jpg",

      technologies: ["React", "Node.js", "AWS", "GCP", "Terraform", "Docker", "Kubernetes", "PostgreSQL", "Redis", "WebRTC"],
      achievements: [
        "Integrated 35+ cloud services across AWS and GCP",
        "Can Achievable 99.9% uptime with multi-region failover",
        "Reduced patient wait times by 60%",
        "HIPAA aligned architecture",
        "capable of serving 10,000+ telemedicine consultations"
      ],
      liveUrl: "https://d3ligzc3b5cdix.cloudfront.net/",

      // 2. ADD THIS: Array of objects for multiple repos
      githubLinks: [
        { label: "Frontend", url: "https://github.com/Zahidulislam2222/mediconnect-hub" },
        { label: "Backend", url: "https://github.com/Zahidulislam2222/mediconnect-cms" },
        //{ label: "Infrastructure", url: "" }
      ],

      videoId: "Oo_Lilyasi0",
      featured: true,
      isHealthcare: true,
      isHybridCloud: true,
      isStrapi: true,
      metrics: { users: "10K+", uptime: "99.9%", services: "50+" },
    },
    {
      id: "chronos",
      title: "Chronos - Headless E-Commerce",
      category: ["wordpress"],
      description: "Modern headless e-commerce solution combining React frontend with WooCommerce backend via GraphQL.",
      fullDescription: "Chronos is a cutting-edge headless e-commerce platform that decouples the frontend from WooCommerce, enabling lightning-fast performance and unlimited customization. Built with React and GraphQL, it delivers sub-second page loads, real-time inventory updates, and seamless checkout experiences.",

      // 1. ADD THIS: Array of images for the slider
      images: [
        "https://github.com/user-attachments/assets/0e39a15d-5c5e-4ee4-ae00-2b3142826883",
        "https://github.com/user-attachments/assets/d9d62479-f198-4e0f-8df2-64fc045f5392",
        "https://github.com/user-attachments/assets/37d02e7d-d9a8-4965-a47b-9e47eb6a35b4",
        "https://github.com/user-attachments/assets/5bcea2d0-7e62-47ce-80d6-20096fd6cd36",
        "https://github.com/user-attachments/assets/2ceb6440-cd38-4bd7-845f-d43c8d7f2d3a",
        "https://github.com/user-attachments/assets/6b7c0786-58e2-4403-9264-6334c7c4e54e",
        "https://github.com/user-attachments/assets/aa52d0e0-eeae-405c-8aff-f97db1ae33ed",
        "https://github.com/user-attachments/assets/32429d45-492f-4aae-9aa7-8cb316afd639",
        "https://github.com/user-attachments/assets/e0ec35e0-08bb-43e6-ae2b-3571d1297062",
        "https://github.com/user-attachments/assets/6db323fd-31dd-4f98-a71e-096004027647"


      ],
      thumbnail: "https://github.com/user-attachments/assets/0e39a15d-5c5e-4ee4-ae00-2b3142826883",

      technologies: ["React", "GraphQL", "WooCommerce", "Node.js", "Redis", "Stripe", "Tailwind CSS"],
      achievements: [
        "3x faster page loads vs traditional WooCommerce",
        "50% increase in conversion rate",
        "Real-time inventory sync",
        "Multi-currency support"
      ],
      liveUrl: "https://chronos.healthcodeanalysis.com/",

      // 2. ADD THIS: Array of objects for multiple repos
      githubLinks: [
        { label: "Project", url: "https://github.com/Zahidulislam2222/Chronos" }
        //{ label: "Infrastructure", url: "" }
      ],

      //videoId: "Oo_Lilyasi0",
      featured: true,
      isHeadless: true,
      isWordpress: true,
      metrics: { speed: "3x faster", conversion: "+50%" },
    },
    {
      id: "equipcert",
      title: "EquipCert - AI Inspection App",
      category: ["mobile"],
      description: "AI-powered mobile inspection application with computer vision for automated equipment certification.",
      fullDescription: "EquipCert revolutionizes equipment inspection through AI-powered computer vision. Built with Next.js and Capacitor for cross-platform deployment, it uses Supabase for real-time data sync and custom ML models for defect detection. Inspectors can complete certifications 5x faster with automated photo analysis and report generation.",

      // 1. ADD THIS: Array of images for the slider
      images: [
        "https://github.com/user-attachments/assets/8d305d49-f097-49fd-bd19-f6dbd12b131c",
        "https://github.com/user-attachments/assets/840c5056-8fcc-43ab-a04d-ad6dc14e87f8",
        "https://github.com/user-attachments/assets/59c83cf7-4b42-4b64-8747-33269a3492e8",
        "https://github.com/user-attachments/assets/65c64ba9-7617-4b43-8aa4-421b252409ff",
        "https://github.com/user-attachments/assets/ee679dff-4198-4237-a82c-ba9085b5fa5c",
        "https://github.com/user-attachments/assets/e51500e1-7432-4726-8b7a-b5648d662240",
        "https://github.com/user-attachments/assets/4effeab9-be92-4df2-ab5e-6e5cdfe5eec8",
        "https://github.com/user-attachments/assets/48e681c8-586e-4b8f-8a7a-65d6943aae41",
        "https://github.com/user-attachments/assets/40a505dd-2915-4aac-bda5-49449ab677bb",
        "https://github.com/user-attachments/assets/4ff44b00-a35c-4d07-9d1b-6bfe13a88d08"
      ],
      thumbnail: "https://github.com/user-attachments/assets/8d305d49-f097-49fd-bd19-f6dbd12b131c",

      technologies: ["Next.js", "Capacitor", "Supabase", "TensorFlow", "Computer Vision", "React Native"],
      achievements: [
        "5x faster inspection completion",
        "98% defect detection accuracy",
        "Offline-first architecture",
        "Automated PDF report generation"
      ],
      liveUrl: "https://equip-cert.vercel.app/",

      // 2. ADD THIS: Array of objects for multiple repos
      githubLinks: [
        { label: "Project", url: "https://github.com/Zahidulislam2222/equip-cert" },
      ],

      //videoId: "Oo_Lilyasi0",
      featured: true,
      isHeadless: true,
      isContentful: true,
      metrics: { accuracy: "98%", speed: "5x faster" },
    },

    {
      id: "healthcode-analysis",
      title: "HealthCode Analysis - AI Medical Intelligence",
      category: ["wordpress", "ai-ml"],
      description: "A hybrid medical intelligence platform featuring a custom-coded 'NeuroScan' content engine, serverless AI chat, and app-like AJAX performance.",
      fullDescription: "HealthCode Analysis is a high-performance medical intelligence hub that bypasses standard WordPress limitations. I engineered 'NeuroScan v5.0,' a custom PHP/AJAX content engine that delivers instant search, multi-grid filtering, and zero-latency interactions without page reloads. The platform utilizes a hybrid architecture, combining WordPress for content management with Cloudflare Workers for serverless AI chat functionality and strict ACF data modeling for clinical accuracy.",

      // 1. ADD THIS: Array of images for the slider
      images: [
        "https://github.com/user-attachments/assets/477fc801-f7da-436e-b8a7-574368524761",
        "https://github.com/user-attachments/assets/cc032c66-001f-489c-b268-034cd2f2a0d3",
        "https://github.com/user-attachments/assets/4970ec40-054d-444e-aa21-be5ca70c1c5d",
        "https://github.com/user-attachments/assets/8e83b63e-a7f3-4a9f-8b25-125cc8bf99fd",
        "https://github.com/user-attachments/assets/fe990c5c-2bb5-4b39-8026-38d8d9b6b246",
        "https://github.com/user-attachments/assets/c468b2dc-7b13-4d79-82d8-fd23c1ce34bb",
        "https://github.com/user-attachments/assets/595c9b9f-c638-451e-a3f9-bb8a9a7ccc15",
        "https://github.com/user-attachments/assets/fe85be49-936a-40c9-98c8-cf7edb45fd5c",
        "https://github.com/user-attachments/assets/5bf5b759-4804-4c34-a10e-6f24fac56552",
        "https://github.com/user-attachments/assets/3314894b-1c7d-421b-8805-bce79550bacf",
        "https://github.com/user-attachments/assets/60ade495-282a-461b-b080-a2cd92f1076d",
        "https://github.com/user-attachments/assets/ba672bdf-f5b7-4a2c-ba28-3631aef04230",
        "https://github.com/user-attachments/assets/d5c41b2f-6c6f-4932-9133-e95d328ea144"


      ],
      thumbnail: "https://github.com/user-attachments/assets/477fc801-f7da-436e-b8a7-574368524761",

      technologies: ["Custom PHP", "AJAX", "Cloudflare Workers", "ACF Pro", "JavaScript", "Elementor", "MySQL"],
      achievements: [
        "Engineered 'NeuroScan', a custom PHP content engine",
        "Zero-latency AJAX search & filtering (No reloads)",
        "Serverless AI Chatbot integration (Edge Functions)",
        "Multi-instance grid architecture for complex archives"
      ],
      liveUrl: "https://healthcodeanalysis.com/",

      /* 2. ADD THIS: Array of objects for multiple repos
      githubLinks: [
        { label: "Frontend", url: "https://github.com/Zahidulislam2222/mediconnect-hub" },
        { label: "Backend", url: "https://github.com/Zahidulislam2222/mediconnect-cms" },
        //{ label: "Infrastructure", url: "" }
      ],*/

      //videoId: "Oo_Lilyasi0",
      featured: true,
      isHybrid: true,
      isWordpress: true,
      metrics: { speed: "< 0.5s Interactions", architecture: "Hybrid Serverless" },
    },

    {
      id: "n8n-automations",
      title: "n8n Automation Workflows",
      category: ["automation", "ai-ml"],
      description: "Collection of powerful automation workflows including price monitoring, AI agents, and intelligent web scraping.",
      fullDescription: "A high-performance collection of serverless automation workflows designed to streamline business operations. Includes an AI-powered competitor pricing monitor that parses raw data via Google Gemini, an autonomous research agent for lead qualification using Wikipedia tools, and a critical safety alert system with instant multi-channel routing. Each workflow is optimized for logical precision and reliability.",

      // 1. ADD THIS: Array of images for the slider
      images: [
        "https://github.com/user-attachments/assets/532f7e9f-23fd-4135-9b28-d7c3f0814b74",
        "https://github.com/user-attachments/assets/75756f74-5d72-4e7f-8425-a8a7fc65ef8a",
        "https://github.com/user-attachments/assets/5aa347a2-b07e-4c3d-ad90-8cffd177b56a",
        "https://github.com/user-attachments/assets/f82acfd2-eec3-4075-b29a-a8eb161808e5",
        "https://github.com/user-attachments/assets/f504a8ce-f0ce-4a3b-bb65-7b82e2714b88"

      ],
      thumbnail: "https://github.com/user-attachments/assets/532f7e9f-23fd-4135-9b28-d7c3f0814b74",

      technologies: ["n8n", "Node.js", "Python", "Google Gemini API", "Trello", "Wikipedia Tool", "Docker"],
      achievements: [
        "Automated AI pricing analysis & HTML parsing",
        "Autonomous lead research via Wikipedia agents",
        "Real-time incident routing to Trello & Email",
        "Conditional logic for high-priority alerts"
      ],
      //liveUrl: "https://equip-cert.vercel.app/",

      // 2. ADD THIS: Array of objects for multiple repos
      githubLinks: [
        { label: "Project", url: "https://github.com/Zahidulislam2222/n8n-workflows" },
      ],

      //videoId: "Oo_Lilyasi0",
      featured: false,
      metrics: { workflows: "50+", reliability: "99.5%" },
    },

    {
      id: "digital-agency-automation",
      title: "Agency - Lead Generation & Automation",
      category: ["wordpress"],
      description: "A high-conversion agency platform featuring an immersive dark-mode UX, integrated API scheduling, and serverless booking automation.",
      fullDescription: "This project is a business automation engine built for a premium digital agency. Beyond its high-end 'Dark UI' aesthetic, I engineered a friction-less sales pipeline by integrating the Calendly API for real-time scheduling. The platform's 'killer feature' is a serverless 'Booking & Payment Bot' running on Cloudflare Workers, which automates lead qualification and discovery call bookings at the network edge, ensuring the agency operates 24/7 without manual intervention.",

      // 1. ADD THIS: Array of images for the slider
      images: [
        "https://github.com/user-attachments/assets/496aa811-c40f-447d-b846-8460417500aa",
        "https://github.com/user-attachments/assets/8abf74d0-f7a9-4071-b34e-98e4884ce876",
        "https://github.com/user-attachments/assets/ffbcfe7f-7818-4f6b-b4ba-9d006e3034a7",
        "https://github.com/user-attachments/assets/ad941c42-557a-4875-b655-541136b73af3",
        "https://github.com/user-attachments/assets/95fe75f3-abbd-4dbd-b6ec-976e93cbbbf1",
        "https://github.com/user-attachments/assets/c097b561-c74f-43ba-b896-5786118e4554",
        "https://github.com/user-attachments/assets/5771cf5c-af0a-4af5-9a96-ad860f6016c2",
        "https://github.com/user-attachments/assets/0f0b4429-a086-4dac-a5c6-cc3b0512a6c8",
        "https://github.com/user-attachments/assets/ff9fdb6e-5cc1-4298-86ca-3e5687e2b184"

      ],
      thumbnail: "https://github.com/user-attachments/assets/496aa811-c40f-447d-b846-8460417500aa",

      technologies: ["Cloudflare Workers", "Calendly API", "MetForm", "Elementor Pro", "Jeg Kit", "Custom CSS"],
      achievements: [
        "Automated 100% of discovery call scheduling via API integration",
        "Engineered serverless 'BookingBot' on Cloudflare Edge",
        "Custom grayscale Google Maps API styling for dark-mode consistency",
        "Built interactive, high-performance service filtering system"
      ],
      liveUrl: "https://agency.healthcodeanalysis.com/",

      /* 2. ADD THIS: Array of objects for multiple repos
      githubLinks: [
        { label: "Project", url: "https://github.com/Zahidulislam2222/n8n-workflows" },
      ],*/

      //videoId: "Oo_Lilyasi0",
      featured: false,
      isWordpress: true,
      metrics: { automation: "100% Sales Flow", performance: "A+ Core Web Vitals" },
    },

    {
      id: "medical-clinic-hub",
      title: "Clinic - Healthcare Service & Trust Platform",
      category: ["wordpress", "healthcare"],
      description: "A conversion-optimized medical service platform featuring interactive clinical proofing, transparent pricing tiers, and trust-based storytelling.",
      fullDescription: "Built for high-intent patient acquisition, this platform focuses on psychological trust signals. I engineered an interactive 'Before & After' visualizer to provide clinical proof of results, alongside a historical timeline to establish long-term authority. The system features a dual-tier pricing engine and a comprehensive lead capture pipeline using MetForm, designed to convert casual visitors into scheduled patients through strategic urgency banners and transparent service mapping.",

      images: [
        "https://github.com/user-attachments/assets/79558be8-09f7-4f7e-9a70-10d3ba281264",
        "https://github.com/user-attachments/assets/c80cdf44-f757-467a-a347-4480018b69fa",
        "https://github.com/user-attachments/assets/77245363-5ed0-435f-8dcf-0346e13a1760",
        "https://github.com/user-attachments/assets/61931431-956f-45ae-a5c8-a2f0b3120d9f",
        "https://github.com/user-attachments/assets/f0a7788a-c883-4531-8fe0-4d8a657a0774",
        "https://github.com/user-attachments/assets/ec2a6e62-4ef5-491c-a118-e94839cf4c84",
        "https://github.com/user-attachments/assets/976b9c5e-b84f-482b-b029-97130b05c6e1",
        "https://github.com/user-attachments/assets/09daa3bf-e27a-4266-9354-c46a6604710b",
        "https://github.com/user-attachments/assets/c99ba202-15f5-40c0-9c40-f35e64789605",
        "https://github.com/user-attachments/assets/156dd930-4f8a-4c0a-b407-50deb06c1654"

      ],
      thumbnail: "https://github.com/user-attachments/assets/79558be8-09f7-4f7e-9a70-10d3ba281264",

      technologies: ["WordPress", "Elementor", "Royal Addons", "MetForm", "Jeg Kit", "Google Maps API"],

      achievements: [
        "Implemented interactive visual proofing via Before/After slider",
        "Engineered transparent service pricing tiers to increase booking trust",
        "Designed a multi-decade institutional timeline for authority building",
        "Integrated automated lead capture for new patient discount campaigns"
      ],

      //liveUrl: "https://clinic.healthcodeanalysis.com/",

      featured: false,
      isWordpress: true,

      metrics: { conversion: "High Patient Intent", performance: "Optimized for Local SEO" },
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
        { name: "Terraform", level: 90 },
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
        { name: "Docker", level: 90 },
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
        { name: "Dialogflow ES", level: 92 },
        { name: "API Integration", level: 88 },
        { name: "Computer Vision", level: 80 },
        { name: "Chatbots", level: 90 },
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
      price: "$350+",
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
      price: "$1,500+",
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
        "HIPAA Compliance",
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
     ======================================== //
  certifications: [
    { name: "AWS Solutions Architect", issuer: "Amazon Web Services" },
    { name: "Google Cloud Professional", issuer: "Google Cloud" },
    { name: "Terraform Associate", issuer: "HashiCorp" },
  ],*/

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

export interface Project {
  id: string;
  title: string;
  category: string[];
  description: string;
  fullDescription: string;
  thumbnail: string;
  images?: string[];         // Optional array for slider
  technologies: string[];
  achievements: string[];
  liveUrl?: string;          // Optional
  githubUrl?: string;        // Optional (Single link)
  githubLinks?: {            // Optional (Multiple links)
    label: string;
    url: string;
  }[];
  videoId?: string;          // Optional
  featured?: boolean;        // Optional
  isHealthcare?: boolean;    // Optional
  isHybridCloud?: boolean;
  isHeadless?: boolean;   // Optional
  isWordpress?: boolean;
  isStrapi?: boolean;
  isContentful?: boolean;
  metrics?: Record<string, string>;
}

// Update these to use the new Interface
export type SkillCategory = typeof portfolioConfig.skillCategories[0];
export type Service = typeof portfolioConfig.services[0];
export type Testimonial = typeof portfolioConfig.testimonials[0];
