import land from "@/config/globe-land.json";
import type { HeroMode } from "@/config/hero.config";

type Vector = { x: number; y: number; z: number };
const TAU = Math.PI * 2;
const radians = (degrees: number) => (degrees * Math.PI) / 180;
const sphere = (longitude: number, latitude: number): Vector => ({
  x: Math.cos(radians(latitude)) * Math.sin(radians(longitude)),
  y: Math.sin(radians(latitude)),
  z: Math.cos(radians(latitude)) * Math.cos(radians(longitude)),
});
const landVectors = land.points.map(([longitude, latitude]) => sphere(longitude, latitude));
// Decorative connections describe geometry, never real infrastructure locations.
const anchors = [[-74, 41], [2, 49], [90, 24], [139, 36], [151, -34], [-47, -23]].map(([lon, lat]) => sphere(lon, lat));

export function rotateGlobe(point: Vector, angle: number): Vector {
  const x = point.x * Math.cos(angle) + point.z * Math.sin(angle);
  const depth = point.z * Math.cos(angle) - point.x * Math.sin(angle);
  const y = point.y * Math.cos(-0.16) - depth * Math.sin(-0.16);
  const z = point.y * Math.sin(-0.16) + depth * Math.cos(-0.16);
  return { x: x * Math.cos(0.2) - y * Math.sin(0.2), y: x * Math.sin(0.2) + y * Math.cos(0.2), z };
}

function connection(from: Vector, to: Vector, fraction: number): Vector {
  const angle = Math.acos(Math.max(-1, Math.min(1, from.x * to.x + from.y * to.y + from.z * to.z)));
  const denominator = Math.sin(angle);
  const a = Math.sin((1 - fraction) * angle) / denominator;
  const b = Math.sin(fraction * angle) / denominator;
  const lift = 1 + Math.sin(fraction * Math.PI) * 0.22;
  return { x: (a * from.x + b * to.x) * lift, y: (a * from.y + b * to.y) * lift, z: (a * from.z + b * to.z) * lift };
}

export function drawGlobe(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  seconds: number,
  mode: HeroMode,
  timing: { spinSeconds: number; orbitSeconds: number; pulseSeconds: number },
) {
  const cx = width / 2;
  const cy = height * 0.51;
  const radius = Math.min(width * 0.235, height * 0.31);
  const angle = -0.8 + (seconds / timing.spinSeconds) * TAU;
  const color = (alpha: number) => `rgba(${mode.accent}, ${alpha})`;
  const project = (point: Vector) => ({ x: cx + point.x * radius, y: cy - point.y * radius, z: point.z });
  ctx.clearRect(0, 0, width, height);

  // Deterministic star field: no random flicker or frame-to-frame allocations of particles.
  ctx.fillStyle = color(0.24);
  for (let i = 0; i < 54; i++) {
    ctx.beginPath();
    ctx.arc(((i * 137.508) % 100) / 100 * width, ((i * 73.13) % 100) / 100 * height, i % 5 === 0 ? 1 : 0.5, 0, TAU);
    ctx.fill();
  }
  const halo = ctx.createRadialGradient(cx, cy, radius * 0.65, cx, cy, radius * 1.55);
  halo.addColorStop(0, color(0.13));
  halo.addColorStop(1, color(0));
  ctx.fillStyle = halo;
  ctx.fillRect(0, 0, width, height);

  const body = ctx.createRadialGradient(cx - radius * 0.4, cy - radius * 0.5, 0, cx, cy, radius);
  body.addColorStop(0, color(0.12));
  body.addColorStop(0.8, color(0.035));
  body.addColorStop(1, color(0.09));
  ctx.fillStyle = body;
  ctx.beginPath(); ctx.arc(cx, cy, radius, 0, TAU); ctx.fill();
  ctx.strokeStyle = color(0.35); ctx.lineWidth = 0.8; ctx.stroke();

  // Latitude/longitude curves include a dim back hemisphere to retain depth.
  const curve = (points: Vector[], opacity: number) => {
    let previous: ReturnType<typeof project> | undefined;
    for (const point of points) {
      const current = project(rotateGlobe(point, angle));
      if (previous) {
        ctx.beginPath(); ctx.moveTo(previous.x, previous.y); ctx.lineTo(current.x, current.y);
        ctx.strokeStyle = color(current.z > 0 ? opacity : opacity * 0.2); ctx.stroke();
      }
      previous = current;
    }
  };
  ctx.lineWidth = 0.55;
  for (let latitude = -60; latitude <= 60; latitude += 30) {
    curve(Array.from({ length: 73 }, (_, i) => sphere(i * 5, latitude)), 0.17);
  }
  for (let longitude = 0; longitude < 360; longitude += 30) {
    curve(Array.from({ length: 37 }, (_, i) => sphere(longitude, i * 5 - 90)), 0.13);
  }
  for (const point of landVectors) {
    const rotated = rotateGlobe(point, angle);
    const screen = project(rotated);
    ctx.fillStyle = color(rotated.z > 0 ? 0.35 + rotated.z * 0.6 : 0.06);
    ctx.beginPath(); ctx.arc(screen.x, screen.y, Math.max(0.55, radius / 90) * (rotated.z > 0 ? 1 : 0.65), 0, TAU); ctx.fill();
  }

  for (let i = 0; i < mode.routes; i++) {
    const from = anchors[i];
    const to = anchors[(i + 2) % anchors.length];
    let previous: ReturnType<typeof project> | undefined;
    for (let step = 0; step <= 48; step++) {
      const screen = project(rotateGlobe(connection(from, to, step / 48), angle));
      if (previous && screen.z > 0 && previous.z > 0) {
        ctx.beginPath(); ctx.moveTo(previous.x, previous.y); ctx.lineTo(screen.x, screen.y);
        ctx.strokeStyle = color(0.38); ctx.lineWidth = 0.8; ctx.stroke();
      }
      previous = screen;
    }
    const pulse = project(rotateGlobe(connection(from, to, (seconds / timing.pulseSeconds + i * 0.23) % 1), angle));
    if (pulse.z > 0) {
      ctx.fillStyle = color(0.95); ctx.shadowColor = color(0.9); ctx.shadowBlur = 10;
      ctx.beginPath(); ctx.arc(pulse.x, pulse.y, 2, 0, TAU); ctx.fill(); ctx.shadowBlur = 0;
    }
  }
  for (const anchor of anchors) {
    const point = project(rotateGlobe(anchor, angle));
    if (point.z <= 0) continue;
    ctx.strokeStyle = color(0.55); ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(point.x, point.y, 4, 0, TAU); ctx.stroke();
    ctx.fillStyle = color(1); ctx.beginPath(); ctx.arc(point.x, point.y, 1.7, 0, TAU); ctx.fill();
  }

  // Tilted satellite rings pass around the globe, with independent moving lights.
  for (let ring = 0; ring < 2; ring++) {
    const tilt = ring === 0 ? -0.35 : 0.55;
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(tilt);
    ctx.beginPath(); ctx.ellipse(0, 0, radius * 1.4, radius * 0.52, 0, 0, TAU);
    ctx.strokeStyle = color(ring === 0 ? 0.3 : 0.14); ctx.lineWidth = 0.7; ctx.stroke();
    const orbit = (seconds / timing.orbitSeconds) * TAU * (ring === 0 ? 1 : -1) + ring * 2;
    const x = Math.cos(orbit) * radius * 1.4;
    const y = Math.sin(orbit) * radius * 0.52;
    ctx.fillStyle = color(0.95); ctx.shadowBlur = 12; ctx.shadowColor = color(0.8);
    if (mode.visual === "interface") ctx.fillRect(x - 2.5, y - 2.5, 5, 5);
    else { ctx.beginPath(); ctx.arc(x, y, 2.7, 0, TAU); ctx.fill(); }
    ctx.restore();
  }
}
