import { existsSync } from "node:fs";
import path from "node:path";
import { act } from "react";
import { hydrateRoot } from "react-dom/client";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import App from "@/App";
import { render as renderPage } from "@/entry-server";
import { heroShowcase } from "@/config/hero.config";
import { studioProjects } from "@/config/studio.config";
import { homeMeta, prerenderPages, projectMeta, seo } from "@/config/seo.config";

const publicFile = (url: string) => path.join(process.cwd(), "public", url.replace(/^\//, ""));

beforeAll(() => {
  class NoopObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  Object.assign(window, { IntersectionObserver: NoopObserver, ResizeObserver: NoopObserver });
  window.scrollTo = () => {};
  HTMLMediaElement.prototype.play = () => Promise.resolve();
  HTMLMediaElement.prototype.pause = () => {};
});

afterEach(() => {
  document.body.innerHTML = "";
  window.history.pushState({}, "", "/");
});

describe("crawlable pages", () => {
  const pages = prerenderPages();

  it("gives every project its own page with unique, snippet-length head text", () => {
    expect(pages.map((page) => page.path)).toEqual([
      "/",
      seo.work.path,
      ...studioProjects.map((project) => `/work/${project.id}`),
      seo.notFound.path,
    ]);
    const indexable = pages.filter((page) => !page.noindex);
    expect(new Set(indexable.map((page) => page.title)).size).toBe(indexable.length);
    expect(new Set(indexable.map((page) => page.description)).size).toBe(indexable.length);
    for (const page of indexable) {
      expect(page.description.length, page.path).toBeLessThanOrEqual(160);
      expect(page.description.length, page.path).toBeGreaterThan(60);
      expect(page.title.length, page.path).toBeLessThanOrEqual(70);
    }
    expect(pages.find((page) => page.path === seo.notFound.path)?.noindex).toBe(true);
  });

  it("ships the generated preview and phone-size images for every cover", () => {
    for (const project of studioProjects.filter((item) => item.image)) {
      expect(existsSync(publicFile(projectMeta(project).image)), project.id).toBe(true);
      expect(existsSync(publicFile(project.image!.replace(/\.(webp|png)$/, "-720.webp"))), project.id).toBe(true);
    }
    for (const mode of heroShowcase.modes.filter((item) => item.image)) {
      expect(existsSync(publicFile(mode.image!.replace(/\.webp$/, "-720.webp"))), mode.id).toBe(true);
    }
    expect(existsSync(publicFile(seo.defaultImage))).toBe(true);
  });

  it("ties the home page to one person across profiles", () => {
    const [profile] = homeMeta().jsonLd as { "@type": string; mainEntity: { "@type": string; sameAs: string[]; name: string } }[];
    expect(profile["@type"]).toBe("ProfilePage");
    expect(profile.mainEntity["@type"]).toBe("Person");
    expect(profile.mainEntity.name).toBe("Zahidul Islam");
    expect(profile.mainEntity.sameAs).toEqual(
      expect.arrayContaining([expect.stringContaining("linkedin.com"), expect.stringContaining("github.com"), expect.stringContaining("upwork.com")]),
    );
  });

  it("renders the real text into the server HTML for each route", () => {
    const voicebridge = renderPage("/work/voicebridge");
    expect(voicebridge).toMatch(/<h1[^>]*>VoiceBridge<\/h1>/);
    expect(voicebridge).toContain("Retell");
    expect(voicebridge).toContain('href="/#projects"');
    const work = renderPage(seo.work.path);
    for (const project of studioProjects) expect(work).toContain(`href="/work/${project.id}"`);
    expect(renderPage("/")).toContain(heroShowcase.heading);
    expect(renderPage("/work/not-a-project")).toContain("404");
  });

  it.each(["/", "/work", "/work/voicebridge", "/404"])("hydrates %s without a mismatch", async (route) => {
    window.history.pushState({}, "", route);
    const root = document.createElement("div");
    root.innerHTML = renderPage(route);
    document.body.appendChild(root);
    const errors = vi.spyOn(console, "error").mockImplementation(() => {});
    const recoverable = vi.fn();
    await act(async () => {
      hydrateRoot(root, <App />, { onRecoverableError: recoverable });
    });
    expect(recoverable).not.toHaveBeenCalled();
    expect(errors.mock.calls.filter((call) => /hydrat|did not match/i.test(String(call[0])))).toEqual([]);
    errors.mockRestore();
  });
});
