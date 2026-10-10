import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import HeroShowcase from "@/components/studio/HeroShowcase";
import { heroShowcase } from "@/config/hero.config";

const frames = vi.hoisted(() => ({ callback: null as null | ((time: number, delta: number) => void), time: 0 }));
vi.mock("framer-motion", async (importOriginal) => {
  const actual = await importOriginal<typeof import("framer-motion")>();
  const React = await import("react");
  return { ...actual, useAnimationFrame: (callback: (time: number, delta: number) => void) => {
    frames.callback = callback;
    React.useEffect(() => () => { frames.callback = null; }, []);
  } };
});

describe("interactive hero", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    frames.time = 0;
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(null);
  });
  afterEach(() => { cleanup(); vi.useRealTimers(); vi.restoreAllMocks(); vi.unstubAllGlobals(); });
  const advance = (faces = 1) => {
    act(() => frames.callback?.(frames.time, 0));
    const delta = heroShowcase.motion.revolutionSeconds * 1000 / heroShowcase.modes.length / 20;
    for (let frame = 0; frame < faces * 20; frame++) {
      frames.time += delta;
      act(() => frames.callback?.(frames.time, delta));
    }
  };
  it("omits rotation controls and status, changes tabs by keyboard and opens the selected project", () => {
    const onProject = vi.fn();
    const { container } = render(<HeroShowcase onProject={onProject} />);
    expect(screen.getByRole("img", { name: /Interactive retrieval architecture/ })).toBeInTheDocument();
    expect(container.querySelector(".showcase-workspace-top button")).toBeNull();
    expect(container.textContent).not.toMatch(/SCENE ON HOLD|AUTO EXPLORING|MOTION REDUCED/);
    expect(container.querySelector(".showcase-scene")).toHaveAttribute("data-motion", "running");
    fireEvent.keyDown(screen.getByRole("tab", { name: "AI" }), { key: "ArrowRight" });
    expect(screen.getByRole("tab", { name: "Applications" })).toHaveAttribute("aria-selected", "true");
    fireEvent.click(screen.getByRole("button", { name: heroShowcase.open }));
    expect(onProject.mock.calls[0][0].id).toBe("equipcert");
  });
  it("automatically visits all three scenes and loops back without moving focus", () => {
    render(<HeroShowcase onProject={vi.fn()} />);
    const focus = document.activeElement;
    for (const name of ["Applications", "Cloud", "AI"]) {
      advance();
      expect(screen.getByRole("tab", { name })).toHaveAttribute("aria-selected", "true");
      const mode = heroShowcase.modes.find((item) => item.label === name)!;
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(mode.headline.join(" "));
      expect(document.querySelector(".showcase-copy-stage")).toHaveAttribute("data-copy", mode.id);
      expect(document.querySelector(".showcase-copy-stage > p")).toHaveTextContent(mode.description);
      expect(document.querySelector(`.showcase-card-face[data-card="${name === "Applications" ? "applications" : name.toLowerCase()}"]`)).toHaveAttribute("aria-hidden", "false");
      expect(document.activeElement).toBe(focus);
    }
  });
  it("keeps rotating through all cards while hovered and after the pointer leaves", () => {
    render(<HeroShowcase onProject={vi.fn()} />);
    const carousel = screen.getByRole("group", { name: heroShowcase.tabLabel });
    fireEvent.mouseEnter(carousel);
    advance();
    expect(screen.getByRole("tab", { name: "Applications" })).toHaveAttribute("aria-selected", "true");
    advance();
    expect(screen.getByRole("tab", { name: "Cloud" })).toHaveAttribute("aria-selected", "true");
    advance();
    expect(screen.getByRole("tab", { name: "AI" })).toHaveAttribute("aria-selected", "true");
    fireEvent.mouseLeave(carousel);
    advance();
    expect(screen.getByRole("tab", { name: "Applications" })).toHaveAttribute("aria-selected", "true");
  });
  it("holds during keyboard focus and resumes when focus leaves the workspace", () => {
    render(<HeroShowcase onProject={vi.fn()} />);
    fireEvent.focus(screen.getByRole("tab", { name: "AI" }));
    advance(2);
    expect(screen.getByRole("tab", { name: "AI" })).toHaveAttribute("aria-selected", "true");
    fireEvent.blur(screen.getByRole("tab", { name: "AI" }), { relatedTarget: document.body });
    advance();
    expect(screen.getByRole("tab", { name: "Applications" })).toHaveAttribute("aria-selected", "true");
  });
  it("keeps rotation held while focus transfers between elements inside the workspace", () => {
    const { container } = render(<HeroShowcase onProject={vi.fn()} />);
    const ai = screen.getByRole("tab", { name: "AI" });
    const cloud = screen.getByRole("tab", { name: "Cloud" });
    fireEvent.focus(ai);
    fireEvent.blur(ai, { relatedTarget: cloud });
    expect(container.querySelector(".showcase-scene")).toHaveAttribute("data-motion", "paused");
    fireEvent.focus(cloud);
    advance(2);
    expect(screen.getByRole("tab", { name: "AI" })).toHaveAttribute("aria-selected", "true");
    fireEvent.blur(cloud, { relatedTarget: document.body });
    advance();
    expect(screen.getByRole("tab", { name: "Applications" })).toHaveAttribute("aria-selected", "true");
  });
  it("holds a manually selected card until focus leaves, then continues from that card", () => {
    const { container } = render(<HeroShowcase onProject={vi.fn()} />);
    const cloud = screen.getByRole("tab", { name: "Cloud" });
    fireEvent.focus(cloud);
    fireEvent.click(cloud);
    advance(2);
    expect(cloud).toHaveAttribute("aria-selected", "true");
    expect(document.querySelector(".showcase-copy-stage")).toHaveAttribute("data-copy", "cloud");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(heroShowcase.modes[2].headline.join(" "));
    expect(container.querySelector(".showcase-scene")).toHaveAttribute("data-motion", "paused");
    fireEvent.blur(cloud, { relatedTarget: document.body });
    expect(container.querySelector(".showcase-scene")).toHaveAttribute("data-motion", "running");
    advance();
    expect(screen.getByRole("tab", { name: "AI" })).toHaveAttribute("aria-selected", "true");
  });
  it("suspends in a hidden page and releases the frame callback on unmount", () => {
    const hidden = vi.spyOn(document, "hidden", "get");
    hidden.mockReturnValue(false);
    const { container, unmount } = render(<HeroShowcase onProject={vi.fn()} />);
    hidden.mockReturnValue(true);
    fireEvent(document, new Event("visibilitychange"));
    advance(2);
    expect(container.querySelector(".showcase-scene")).toHaveAttribute("data-motion", "paused");
    expect(screen.getByRole("tab", { name: "AI" })).toHaveAttribute("aria-selected", "true");
    hidden.mockReturnValue(false);
    fireEvent(document, new Event("visibilitychange"));
    advance();
    expect(screen.getByRole("tab", { name: "Applications" })).toHaveAttribute("aria-selected", "true");
    unmount();
    expect(frames.callback).toBeNull();
    advance(2);
    expect(vi.getTimerCount()).toBe(0);
  });
  it("observes both columns as one region, suspends when both leave and resumes in sync", () => {
    let visibility: (entries: Array<{ isIntersecting: boolean }>) => void;
    const observe = vi.fn();
    const disconnect = vi.fn();
    vi.stubGlobal("IntersectionObserver", class {
      constructor(callback: typeof visibility) { visibility = callback; }
      observe = observe;
      disconnect = disconnect;
    });
    const { container, unmount } = render(<HeroShowcase onProject={vi.fn()} />);
    expect(observe).toHaveBeenCalledWith(container.querySelector(".showcase-layout"));
    act(() => visibility([{ isIntersecting: false }]));
    advance(2);
    expect(container.querySelector(".showcase-copy-stage")).toHaveAttribute("data-copy", "ai");
    expect(container.querySelector(".showcase-scene")).toHaveAttribute("data-motion", "paused");
    act(() => visibility([{ isIntersecting: true }]));
    advance();
    expect(container.querySelector(".showcase-copy-stage")).toHaveAttribute("data-copy", "applications");
    expect(screen.getByRole("tab", { name: "Applications" })).toHaveAttribute("aria-selected", "true");
    unmount();
    expect(disconnect).toHaveBeenCalledOnce();
  });
  it("keeps static cards and manual navigation with reduced motion", () => {
    vi.spyOn(window, "matchMedia").mockImplementation((query) => ({ matches: true, media: query, onchange: null, addListener: vi.fn(), removeListener: vi.fn(), addEventListener: vi.fn(), removeEventListener: vi.fn(), dispatchEvent: vi.fn() }));
    const { container } = render(<HeroShowcase onProject={vi.fn()} />);
    expect(container.querySelector(".showcase-workspace-top button")).toBeNull();
    expect(container.querySelector(".showcase-scene")).toHaveAttribute("data-motion", "paused");
    advance(3);
    expect(screen.getByRole("tab", { name: "AI" })).toHaveAttribute("aria-selected", "true");
    fireEvent.click(screen.getByRole("tab", { name: "Cloud" }));
    expect(screen.getByRole("tab", { name: "Cloud" })).toHaveAttribute("aria-selected", "true");
    expect(document.querySelector(".showcase-copy-stage")).toHaveAttribute("data-copy", "cloud");
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });
});
