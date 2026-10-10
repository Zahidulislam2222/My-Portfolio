import { describe, expect, it } from "vitest";
import { rotateGlobe } from "@/lib/globe-renderer";
import land from "@/config/globe-land.json";

describe("globe geometry", () => {
  it("preserves distance under rotation and completes a full turn", () => {
    const point = { x: 0.3, y: 0.4, z: Math.sqrt(0.75) };
    const initial = rotateGlobe(point, 0);
    for (const angle of [0, Math.PI / 2, Math.PI, Math.PI * 2]) {
      const rotated = rotateGlobe(point, angle);
      expect(Math.hypot(rotated.x, rotated.y, rotated.z)).toBeCloseTo(1);
    }
    const complete = rotateGlobe(point, Math.PI * 2);
    expect(complete.x).toBeCloseTo(initial.x);
    expect(complete.y).toBeCloseTo(initial.y);
    expect(complete.z).toBeCloseTo(initial.z);
  });
  it("bundles valid finite public-domain land coordinates without a runtime data service", () => {
    expect(land.license).toMatch(/Public domain/);
    expect(land.points.length).toBeGreaterThan(1000);
    for (const [lon, lat] of land.points) {
      expect(Number.isFinite(lon) && lon >= -180 && lon <= 180).toBe(true);
      expect(Number.isFinite(lat) && lat >= -90 && lat <= 90).toBe(true);
    }
  });
});
