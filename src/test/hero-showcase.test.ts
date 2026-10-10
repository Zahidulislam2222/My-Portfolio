import { describe, expect, it } from "vitest";
import { heroShowcase } from "../config/hero.config";
import { studioProjects } from "../config/studio.config";
import source from "../components/studio/HeroShowcase.tsx?raw";
import sceneSource from "../components/studio/GlobeScene.tsx?raw";

describe("hero showcase content boundary", () => {
  it("connects every mode to a real indexed project", () => {
    expect(new Set(heroShowcase.modes.map((mode) => mode.id)).size).toBe(3);
    for (const mode of heroShowcase.modes) {
      expect(
        studioProjects.some((project) => project.id === mode.projectId),
      ).toBe(true);
      expect(mode.nodes).toHaveLength(3);
      expect(mode.decision.length).toBeGreaterThan(30);
    }
  });
  it("uses three distinct visual treatments and a readable configurable cycle", () => {
    expect(new Set(heroShowcase.modes.map((mode) => mode.visual)).size).toBe(3);
    expect(new Set(heroShowcase.modes.map((mode) => mode.accent)).size).toBe(3);
    expect(heroShowcase.animation.cycleSeconds).toBeGreaterThanOrEqual(5);
  });
  it("keeps provider secrets and environment details out of the visual component", () => {
    expect(source + sceneSource).not.toMatch(
      /https?:\/\/|import\.meta\.env|process\.env|sk-[a-zA-Z0-9_-]{16,}|-----BEGIN .*PRIVATE KEY-----/,
    );
  });
});
