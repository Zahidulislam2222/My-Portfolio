import { describe, expect, it } from "vitest";
import { cardRotationDepth, cardRotationIndex, cardRotationTarget } from "@/lib/card-rotation";
import source from "@/components/studio/CardCarousel.tsx?raw";
import heroSource from "@/components/studio/HeroShowcase.tsx?raw";

describe("regression: rotate cards rather than add globes inside them", () => {
  it("turns through all three faces and completes a revolution without reversing at the wrap", () => {
    let angle = 0;
    for (const [active, expected] of [[1, -120], [2, -240], [0, -360], [1, -480]]) {
      angle = cardRotationTarget(angle, active, 3);
      expect(angle).toBeCloseTo(expected);
    }
    expect(cardRotationTarget(0, 2, 3)).toBeCloseTo(120);
    expect(cardRotationTarget(-190, 2, 3)).toBeCloseTo(-240);
  });
  it("keeps adjacent card edges on the same regular polygon as the viewport resizes", () => {
    for (const width of [280, 500, 640]) {
      expect(cardRotationDepth(width, 3) * Math.tan(Math.PI / 3) * 2).toBeCloseTo(width);
    }
  });
  it("selects the card nearest the viewer across both sides and the full-circle wrap", () => {
    for (const [angle, expected] of [[0, 0], [-59, 0], [-61, 1], [-179, 1], [-181, 2], [-299, 2], [-301, 0], [-360, 0], [-421, 1], [120, 2]]) {
      expect(cardRotationIndex(angle, 3)).toBe(expected);
    }
  });
  it("rotates the complete card frame and pipeline without rendering a geographic globe", () => {
    expect(source).toContain("showcase-card-rotor");
    expect(source).toContain("showcase-card-face");
    expect(source).toContain("showcase-flow");
    expect(source).toContain("IntelligenceScene");
    expect(source + heroSource).not.toMatch(/GlobeScene|drawGlobe|<canvas/);
  });
});
