import { z } from "zod";

export const heroShowcase = {
  identity: "Zahidul Islam · Full Stack & AI Engineer",
  headline: ["I build software", "that puts", "AI to work."],
  description:
    "From a grounded answer to a complete application. I connect interfaces, intelligence and infrastructure into systems people can use.",
  workspace: "EXPLORE THE ENGINEERING",
  tabLabel: "Explore engineering disciplines",
  visualLabel: "PROJECT VIEW",
  architectureLabel: "INTELLIGENCE IN MOTION",
  detailLabel: "ENGINEERING DECISION",
  open: "Explore this project",
  hint: "Three sides of the work. Hover to hold a card. Select a tab to explore.",
  animation: {
    pause: "Pause card rotation and automatic cycling",
    resume: "Resume card rotation and automatic cycling",
    label: "Interactive retrieval architecture",
    automatic: "AUTO EXPLORING",
    held: "SCENE ON HOLD",
    still: "MOTION REDUCED",
    cycleSeconds: 2,
    spinSeconds: 32,
    orbitSeconds: 24,
    floatSeconds: 6,
    core: "GROUNDED AI",
    signal: "CONTEXT → CLARITY",
    particles: 12,
    faceLabel: "AI",
    orbitDelays: [0, -8, -15],
    nodeDelays: [0, -2, -4],
    particleStaggerSeconds: 0.6,
    faces: ["front", "back", "right", "left", "top", "bottom"],
  },
  fallback: "Project screenshot unavailable. Explore the project details below.",
  motion: { turnSeconds: 1.2, turnEase: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  modes: z
    .array(
      z.object({
        id: z.string(),
        label: z.string(),
        projectId: z.string(),
        title: z.string(),
        caption: z.string(),
        nodes: z.array(z.string()).length(3),
        decision: z.string(),
        accent: z.string(),
        image: z.string().optional(),
      }),
    )
    .parse([
      {
        id: "ai",
        label: "AI",
        projectId: "yuktha-wellness",
        title: "Answers with a foundation.",
        caption: "Yuktha Wellness / retrieval architecture",
        nodes: ["Retrieve", "Rerank", "Ground"],
        accent: "181, 246, 201",
        decision:
          "Hybrid retrieval and reranking bring relevant context to the answer. Emergency checks run before generation.",
      },
      {
        id: "applications",
        label: "Applications",
        projectId: "equipcert",
        title: "From the field to the record.",
        caption: "EquipCert AI / application preview",
        nodes: ["Capture", "Review", "Audit"],
        accent: "144, 222, 245",
        image: "/studio/equipcert.webp",
        decision:
          "Inspection photos, signatures and corrective actions connect to tenant-aware records and audit history.",
      },
      {
        id: "cloud",
        label: "Cloud",
        projectId: "mediconnect-v3",
        title: "Connected by architecture.",
        caption: "MediConnect / website preview",
        nodes: ["Identity", "Route", "Services"],
        accent: "202, 185, 255",
        image: "/studio/mediconnect.webp",
        decision:
          "Regional routing and explicit service boundaries support connected care. The website is deployed; the wider platform remains in development.",
      },
    ]),
};

export type HeroMode = (typeof heroShowcase.modes)[number];
