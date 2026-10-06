import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { studioConfig, studioProjects } from "@/config/studio.config";
import { documentBasePath, projectEvidence } from "@/config/project-evidence.config";

const publicDir = resolve(__dirname, "../../public");

describe("project evidence", () => {
  it("covers every studio project and nothing else", () => {
    const studioIds = studioProjects.map((p) => p.id).sort();
    expect(Object.keys(projectEvidence).sort()).toEqual(studioIds);
  });

  it("links every project to a real PDF in public/", () => {
    for (const [id, evidence] of Object.entries(projectEvidence)) {
      const file = resolve(publicDir, `.${documentBasePath}${evidence.document.file}`);
      expect(existsSync(file), `${id}: ${file}`).toBe(true);
      expect(readFileSync(file).subarray(0, 5).toString(), id).toBe("%PDF-");
    }
  });

  it("names the client on every client project", () => {
    for (const [id, evidence] of Object.entries(projectEvidence)) {
      if (evidence.engagement.type === "Client project") {
        expect(evidence.engagement.client, id).toBeTruthy();
      }
    }
  });

  it("keeps the incident-response client anonymous", () => {
    const incident = projectEvidence["wordpress-incident-response"];
    expect(incident.engagement.client).toBe("Name withheld");
    expect(JSON.stringify(incident)).not.toMatch(/fine touch|ftm/i);
    const incidentIds = studioProjects
      .filter((p) => projectEvidence[p.id].engagement.client === "Name withheld")
      .map((p) => p.id);
    for (const id of incidentIds) expect(id).not.toMatch(/fine|touch|ftm/i);
  });

  it("keeps fictional and demonstration projects labelled as such", () => {
    for (const id of ["everyday-dental-surgery", "chronos", "regenai-shopify", "healthcode-analysis", "kindred-grove"]) {
      expect(projectEvidence[id].engagement.type, id).toBe("Portfolio demonstration");
      expect(projectEvidence[id].engagement.client, id).toBeUndefined();
    }
  });

  it("keeps Fleetwright scoped to its own mock board", () => {
    expect(projectEvidence.fleetwright.engagement.type).toBe("Independent build");
    expect(projectEvidence.fleetwright.engagement.detail).toMatch(/never pointed at a real third-party site/);
  });

  it("offers a Client work filter listing exactly the paid client projects", () => {
    expect(studioConfig.labels.filters).toContain(studioConfig.labels.clientFilter);
    const clients = studioProjects
      .filter((p) => projectEvidence[p.id].engagement.type === "Client project")
      .map((p) => p.id)
      .sort();
    expect(clients).toEqual([
      "ftm-seo-automation",
      "ftm-sms-followup",
      "ftm-social-media",
      "jwalker-knowledge-assistant",
      "wordpress-incident-response",
      "yuktha-wellness",
    ]);
  });
});
