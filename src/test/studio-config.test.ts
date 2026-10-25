import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import componentSource from "../components/studio/EngineeringStudio.tsx?raw";
import { portfolioConfig } from "../config/portfolio.config";
import { projectEvidence } from "../config/project-evidence.config";
import {
  studioConfig,
  studioProjects,
  projectResources,
} from "../config/studio.config";

describe("engineering studio content contract", () => {
  it("gives every project a local image and distinguishes client illustrations", () => {
    for (const project of studioProjects) {
      expect(project.image, project.id).toMatch(/^\/studio\/[a-z0-9-]+\.(?:png|webp)$/);
      const file = resolve(__dirname, "../../public", `.${project.image}`);
      expect(existsSync(file), project.id).toBe(true);
      const bytes = readFileSync(file);
      expect(bytes.length, project.id).toBeGreaterThan(1000);
      expect(bytes.subarray(0, 4).toString("hex"), project.id).toMatch(/^(?:52494646|89504e47)$/);
      if (projectEvidence[project.id].engagement.type === "Client project") {
        expect(["illustration", "reference"], project.id).toContain(project.imageKind);
        expect(project.imageAlt, project.id).toMatch(/^Concept mockup of /);
      }
      if (project.imageKind !== "screenshot") expect(project.imageAlt, project.id).toBeTruthy();
    }
  });
  it("points every spotlight id at a real project", () => {
    const ids = new Set(studioProjects.map((project) => project.id));
    for (const id of [...studioConfig.spotlight.order, ...studioConfig.spotlight.glow]) expect(ids.has(id), id).toBe(true);
    for (const id of studioConfig.spotlight.glow) expect(studioConfig.spotlight.order, id).toContain(id);
  });
  it("keeps all six contact methods configured with the correct protocols", () => {
    expect(studioConfig.contactChannels.map(channel => channel.id)).toEqual(["email", "linkedin", "upwork", "phone", "whatsapp", "github"]);
    const byId = Object.fromEntries(studioConfig.contactChannels.map(channel => [channel.id, channel]));
    expect(byId.email.href).toBe(`mailto:${portfolioConfig.personal.email}`);
    expect(byId.phone.href).toBe(`tel:${portfolioConfig.personal.phone}`);
    expect(byId.linkedin.href).toBe(portfolioConfig.socials.linkedin);
    expect(byId.upwork.href).toBe(`${portfolioConfig.upworkProfileUrl}?mp_source=share`);
    expect(new URL(byId.whatsapp.href).pathname.slice(1)).toBe(portfolioConfig.personal.whatsapp.replace(/\D/g, ""));
    expect(studioConfig.contactChannels.every(channel => channel.external ? channel.href.startsWith("https://") : /^(mailto|tel):/.test(channel.href))).toBe(true);
  });
  it("preserves every existing client review and uses verbatim excerpts", () => {
    expect(studioConfig.reviews).toHaveLength(portfolioConfig.testimonials.length);
    for (const [i, review] of studioConfig.reviews.entries()) {
      expect(review.content).toBe(portfolioConfig.testimonials[i].content);
      expect(review.content).toContain(review.excerpt);
      expect(review.excerpt.length).toBeGreaterThan(15);
    }
    expect(studioConfig.reviewUrl).toBe(portfolioConfig.upworkProfileUrl);
    expect(studioConfig.navigation.some(item => item.href === "#testimonials")).toBe(true);
    for (const project of studioProjects.filter(item => item.featured)) {
      expect(studioConfig.projectHighlights[project.id].length).toBeGreaterThan(20);
    }
  });
  it("keeps project identity unique and every project discoverable by a filter", () => {
    expect(new Set(studioProjects.map((project) => project.id)).size).toBe(
      studioProjects.length,
    );
    expect(studioProjects.length).toBe(Object.keys(projectEvidence).length);
    for (const project of studioProjects) {
      expect(studioConfig.labels.filters).toContain(project.category);
      expect(project.status.length).toBeGreaterThan(5);
      expect(project.evidence.length).toBeGreaterThan(10);
      expect(project.detail.length).toBeGreaterThan(80);
    }
  });

  it("uses current document-verified destinations for migrated projects", () => {
    expect(projectResources("mediconnect-v3").liveUrl).toBe(
      "https://mediconnect.zahidul-islam.com/",
    );
    expect(projectResources("chronos").liveUrl).toBe(
      "https://chronos.zahidul-islam.com/",
    );
    expect(projectResources("healthcode-analysis").liveUrl).toBe(
      "https://healthcodeanalysis.zahidul-islam.com/",
    );
    expect(projectResources("equipcert").liveUrl).toBe(
      "https://equipcert.zahidul-islam.com/",
    );
    expect(projectResources("everyday-dental-surgery").liveUrl).toBe(
      "https://dental.zahidul-islam.com/",
    );
    expect(projectResources("regenai-shopify").liveUrl).toBe(
      "https://regenai.zahidul-islam.com/",
    );
    expect(projectResources("fleetwright").liveUrl).toBe(
      "https://fleetwright.zahidul-islam.com/",
    );
    // Kindred's subdomain is a Shopify password page; no live link until it opens.
    expect(projectResources("kindred-grove").liveUrl).toBeUndefined();
    for (const project of studioProjects) {
      const url = projectResources(project.id).liveUrl ?? "";
      expect(url, project.id).not.toMatch(
        /\.pages\.dev|\.vercel\.app|\.web\.app|\.workers\.dev|\.myshopify\.com/,
      );
    }
    for (const project of studioProjects) {
      const resources = projectResources(project.id);
      for (const link of resources.links)
        expect(new URL(link.url).protocol).toBe("https:");
      if (resources.liveUrl)
        expect(new URL(resources.liveUrl).protocol).toBe("https:");
    }
  });

  it("preserves material demonstration and implementation boundaries", () => {
    expect(
      studioProjects.find((project) => project.id === "everyday-dental-surgery")
        ?.status,
    ).toContain("Synthetic");
    expect(
      studioProjects.find((project) => project.id === "chronos")?.status,
    ).toContain("test checkout");
    expect(
      studioProjects.find((project) => project.id === "secure-hybrid-ai-hub")
        ?.status,
    ).toContain("synthetic");
    expect(
      studioProjects.find((project) => project.id === "mediconnect-v3")?.status,
    ).toContain("development");
    const regenai = studioProjects.find((project) => project.id === "regenai-shopify");
    expect(regenai?.status).toContain("ordering closed");
    expect(regenai?.detail).toContain("Ordering, customer sign-in, external refunds and outbound email remain closed");
    expect(regenai?.detail).toContain("Real action receipts and client handoff remain open");
    expect(
      studioProjects.find((project) => project.id === "kindred-grove")?.status,
    ).toContain("password protected");
    const voicebridge = studioProjects.find((project) => project.id === "voicebridge");
    expect(voicebridge?.status).toContain("Vapi path pending");
    expect(voicebridge?.detail).toContain("synthetic test voice");
    expect(voicebridge?.detail).toContain("not a reliability or capacity measurement");
    expect(voicebridge?.detail).toContain("backup replay remain open");
    expect(projectResources("voicebridge").liveUrl).toBe("https://voicebridge.zahidul-islam.com/");
    const fleetwright = studioProjects.find((project) => project.id === "fleetwright");
    expect(fleetwright?.status).toContain("browser supervision and recovery verified");
    expect(fleetwright?.detail).toMatch(/owned destinations/);
    expect(fleetwright?.detail).toContain("289 tests with six accounted skips");
    expect(fleetwright?.detail).toContain("Encrypted off-host restore and installed-model evidence retain their October 13 dates");
    expect(fleetwright?.detail).toMatch(/Arbitrary-site execution.*measured monthly availability remain unproven/);
  });

  it("keeps paid provider configuration and credential material out of the browser component", () => {
    expect(componentSource).not.toMatch(
      /https?:\/\/|(?:openai|bytedance)\/|import\.meta\.env|process\.env/,
    );
    expect(componentSource).not.toMatch(
      /sk-[a-zA-Z0-9_-]{16,}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
    );
  });

  it("keeps the new evidence and agent platforms scoped to their verified operations", () => {
    const commerce = studioProjects.find(project => project.id === "vericommerce-ai");
    const praxis = studioProjects.find(project => project.id === "praxisforge-ai");
    expect(commerce?.featured).toBe(true);
    expect(commerce?.detail).toMatch(/Shopify access is read-products-only/);
    expect(commerce?.detail).toMatch(/release 03 was stopped before promotion/);
    expect(commerce?.detail).toMatch(/Shopify publishing and model training remain roadmap work/);
    expect(commerce?.detail).toMatch(/future targets, not measurements/);
    expect(praxis?.featured).toBe(true);
    expect(praxis?.detail).toMatch(/one successful workflow, not a statistical reliability benchmark/);
    expect(praxis?.detail).toMatch(/email delivery and third-party CRM updates are not enabled/);
    for (const [id, host, repo] of [
      ["vericommerce-ai", "vericommerce", "VeriCommerce-AI"],
      ["praxisforge-ai", "praxisforge", "PraxisForge-AI"],
    ]) {
      expect(projectResources(id).liveUrl).toBe(`https://${host}.zahidul-islam.com/`);
      expect(projectResources(id).links).toContainEqual({label: "Source code", url: `https://github.com/Zahidulislam2222/${repo}`});
      expect(projectEvidence[id].document.file).toBe(`${id}-technical-overview.pdf`);
      expect(projectEvidence[id].engagement.type).toBe("Independent build");
    }
  });

  it("adds the video studio and mail infrastructure with their stated boundaries", () => {
    const video = studioProjects.find(project => project.id === "project-video-studio");
    const mail = studioProjects.find(project => project.id === "self-hosted-email-infrastructure");
    expect(video?.status).toContain("hosted service not built");
    expect(video?.detail).toMatch(/no hosted service/);
    expect(projectResources("project-video-studio").links).toContainEqual({label: "Source code", url: "https://github.com/Zahidulislam2222/project-video-studio"});
    expect(mail?.status).toContain("not high availability");
    expect(mail?.detail).toMatch(/do not guarantee inbox placement/);
    expect(projectResources("self-hosted-email-infrastructure").links).toHaveLength(0);
    for (const id of ["project-video-studio", "self-hosted-email-infrastructure"]) {
      expect(projectEvidence[id].engagement.type).toBe("Independent build");
      expect(existsSync(resolve(__dirname, "../../public/docs", projectEvidence[id].document.file)), id).toBe(true);
    }
  });

  it("links every social profile over HTTPS with a distinct platform", () => {
    const profiles = studioConfig.socialProfiles;
    expect(profiles.map(profile => profile.id)).toEqual(["youtube", "facebook", "instagram", "x", "tiktok", "reddit", "contra", "n8n"]);
    expect(new Set(profiles.map(profile => profile.href)).size).toBe(profiles.length);
    for (const profile of profiles) {
      expect(new URL(profile.href).protocol, profile.id).toBe("https:");
      expect(profile.handle.length, profile.id).toBeGreaterThan(2);
    }
  });

  it("keeps featured-card highlights consistent with the current release counts", () => {
    for (const [id, counts] of [["voicebridge", ["258"]], ["fleetwright", ["289"]]] as const) {
      const detail = studioProjects.find(project => project.id === id)?.detail;
      for (const count of counts) {
        expect(detail).toContain(count);
        expect(studioConfig.projectHighlights[id]).toContain(count);
      }
    }
  });
});
