import { z } from "zod";

export const heroShowcase = {
  identity: "Zahidul Islam · Full Stack & AI Engineer",
  headline: ["I build software", "that puts", "AI to work."],
  description:
    "From a grounded answer to a complete application. I connect interfaces, intelligence and infrastructure into systems people can use.",
  workspace: "EXPLORE THE ENGINEERING",
  tabLabel: "Explore engineering disciplines",
  visualLabel: "PROJECT VIEW",
  architectureLabel: "ARCHITECTURE SKETCH",
  detailLabel: "ENGINEERING DECISION",
  open: "Explore this project",
  hint: "Explore the systems behind the work.",
  fallback:
    "Project screenshot unavailable. Explore the project details below.",
  motion: { tiltDegrees: 4, entranceSeconds: 0.55, entranceDistance: 14 },
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
        decision:
          "Inspection photos, signatures and corrective actions connect to tenant-aware records and audit history.",
        image: "/studio/equipcert.webp",
      },
      {
        id: "cloud",
        label: "Cloud",
        projectId: "mediconnect-v3",
        title: "Connected by architecture.",
        caption: "MediConnect / website preview",
        nodes: ["Identity", "Route", "Services"],
        decision:
          "Regional routing and explicit service boundaries support connected care. The website is deployed; the wider platform remains in development.",
        image: "/studio/mediconnect.webp",
      },
    ]),
};
