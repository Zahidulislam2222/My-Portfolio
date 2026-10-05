import { describe, expect, it } from "vitest";
import componentSource from "../components/studio/EngineeringStudio.tsx?raw";
import { portfolioConfig } from "../config/portfolio.config";
import {
  studioConfig,
  studioProjects,
  projectResources,
} from "../config/studio.config";

describe("engineering studio content contract", () => {
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
    expect(studioProjects.length).toBe(18);
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
    expect(regenai?.status).toContain("in progress");
    expect(regenai?.detail).toMatch(/test checkout.*remain due/);
    expect(
      studioProjects.find((project) => project.id === "kindred-grove")?.status,
    ).toContain("development theme");
  });

  it("keeps paid provider configuration and credential material out of the browser component", () => {
    expect(componentSource).not.toMatch(
      /https?:\/\/|(?:openai|bytedance)\/|import\.meta\.env|process\.env/,
    );
    expect(componentSource).not.toMatch(
      /sk-[a-zA-Z0-9_-]{16,}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
    );
  });
});
