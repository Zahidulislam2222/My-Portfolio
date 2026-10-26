import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { portfolioConfig } from "@/config/portfolio.config";
import { studioProjects, projectResources } from "@/config/studio.config";
import { projectEvidence } from "@/config/project-evidence.config";

const root = resolve(__dirname, "../..");
const read = (name: string) => readFileSync(resolve(root, name), "utf8");

describe("project synchronization contract", () => {
  it("keeps project IDs and the selected-project counter consistent", () => {
    expect(new Set(studioProjects.map(p => p.id)).size).toBe(studioProjects.length);
    expect(portfolioConfig.projects.some(p => p.id === "adrevora-ai")).toBe(true);
    expect(portfolioConfig.stats.find(item => item.label === "Selected Projects")?.value).toBe(studioProjects.length);
  });

  it("publishes AdRevora's actual operating boundaries and stable resources", () => {
    const project = studioProjects.find(item => item.id === "adrevora-ai");
    expect(project?.status).toMatch(/Deployed revenue workspace/);
    expect(project?.detail).toMatch(/Company-account activation.*remain open/);
    expect(project?.detail).toMatch(/revenue figures shown are reference data, not client results/);
    expect(projectResources("adrevora-ai").liveUrl).toBe("https://adrevora.zahidul-islam.com/");
    expect(projectResources("adrevora-ai").links).toEqual([{
      label: "Private repository", url: "https://github.com/Zahidulislam2222/AdRevora-AI",
    }]);
    expect(projectEvidence["adrevora-ai"].engagement.type).toBe("Independent build");
    expect(projectEvidence["adrevora-ai"].document.file).toBe("adrevora-ai-technical-overview.pdf");
  });

  it("retains the verified links found by the complete resource audit", () => {
    expect(projectResources("yuktha-wellness").liveUrl).toBe("https://yuktha.com/");
    expect(projectResources("vitalprobe").liveUrl).toBe("https://vitalprobe.zahidul-islam.com/");
    expect(projectResources("vitalprobe").links).toContainEqual({label: "Source code", url: "https://github.com/Zahidulislam2222/vitalprobe"});
    expect(projectResources("secure-hybrid-ai-hub").links).toContainEqual({label: "Source code", url: "https://github.com/Zahidulislam2222/secure-hybrid-hub"});
    expect(projectResources("mediconnect-v3").links).toContainEqual({label: "RAG knowledge service", url: "https://github.com/Zahidulislam2222/mediconnect-rag"});
    expect(projectResources("kindred-grove").liveUrl).toBeUndefined();
  });

  it("keeps private configuration outside public runtime modules", () => {
    const sources = ["scripts/project_sync.py", "scripts/project_sync_settings.py", "scripts/project_sync_google.py"].map(read);
    const implementation = sources.join("\n");
    expect(implementation).not.toMatch(/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|[A-Z]:\\Users\\|sk-[a-zA-Z0-9_-]{24,}/);
    expect(sources[0]).not.toMatch(/https?:\/\/|process\.env|os\.environ|\btimeout\s*=\s*\d+/);
    const variables = [...sources[1].matchAll(/os\.environ\.get\("([A-Z_]+)"/g)].map(match => match[1]);
    expect(variables.length).toBeGreaterThan(0);
    for (const variable of variables) expect(read(".env.example")).toContain(`${variable}=`);
    for (const name of ["src/config/studio.config.ts", "src/config/portfolio.config.ts", "src/config/project-evidence.config.ts"])
      expect(read(name)).not.toMatch(/PROJECT_SYNC_|python_token|service_account\.json/);
    const config = JSON.parse(read("scripts/project-sync.settings.json"));
    for (const field of ["registry", "state", "backups"]) expect(config[field]).toMatch(/^memory\//);
  });
});
