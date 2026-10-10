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
  afterEach(() => { cleanup(); vi.useRealTimers(); vi.restoreAllMocks(); });
  const advance = (faces = 1) => {
    act(() => frames.callback?.(frames.time, 0));
    const delta = heroShowcase.motion.revolutionSeconds * 1000 / heroShowcase.modes.length / 20;
    for (let frame = 0; frame < faces * 20; frame++) {
      frames.time += delta;
      act(() => frames.callback?.(frames.time, delta));
    }
  };
  it("pauses the scene, changes tabs by keyboard and opens the selected project", () => {
    const onProject = vi.fn();
    const { container } = render(<HeroShowcase onProject={onProject} />);
    expect(screen.getByRole("img", { name: /Interactive retrieval architecture/ })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: heroShowcase.animation.pause }));
    expect(container.querySelector(".showcase-scene")).toHaveAttribute("data-motion", "paused");
    fireEvent.click(screen.getByRole("button", { name: heroShowcase.animation.resume }));
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
      expect(document.querySelector(`.showcase-card-face[data-card="${name === "Applications" ? "applications" : name.toLowerCase()}"]`)).toHaveAttribute("aria-hidden", "false");
      expect(document.activeElement).toBe(focus);
    }
  });
  it("holds cycling on hover and stops motion and cycling when explicitly paused", () => {
    render(<HeroShowcase onProject={vi.fn()} />);
    const carousel = screen.getByRole("group", { name: heroShowcase.tabLabel });
    fireEvent.mouseEnter(carousel);
    advance(2);
    expect(screen.getByRole("tab", { name: "AI" })).toHaveAttribute("aria-selected", "true");
    fireEvent.mouseLeave(carousel);
    advance();
    expect(screen.getByRole("tab", { name: "Applications" })).toHaveAttribute("aria-selected", "true");
    fireEvent.click(screen.getByRole("button", { name: heroShowcase.animation.pause }));
    advance(2);
    expect(screen.getByRole("tab", { name: "Applications" })).toHaveAttribute("aria-selected", "true");
    fireEvent.click(screen.getByRole("button", { name: heroShowcase.animation.resume }));
    advance();
    expect(screen.getByRole("tab", { name: "Cloud" })).toHaveAttribute("aria-selected", "true");
  });
  it("requires explicit resume after keyboard focus or manual selection", () => {
    render(<HeroShowcase onProject={vi.fn()} />);
    fireEvent.focus(screen.getByRole("tab", { name: "AI" }));
    fireEvent.blur(screen.getByRole("tab", { name: "AI" }));
    advance(2);
    expect(screen.getByRole("tab", { name: "AI" })).toHaveAttribute("aria-selected", "true");
    fireEvent.click(screen.getByRole("tab", { name: "Cloud" }));
    advance(2);
    expect(screen.getByRole("tab", { name: "Cloud" })).toHaveAttribute("aria-selected", "true");
    fireEvent.click(screen.getByRole("button", { name: heroShowcase.animation.resume }));
    advance();
    expect(screen.getByRole("tab", { name: "AI" })).toHaveAttribute("aria-selected", "true");
  });
  it("stops on rotation-control focus, remains stopped after exit, and explicitly resumes", () => {
    render(<HeroShowcase onProject={vi.fn()} />);
    const control = screen.getByRole("button", { name: heroShowcase.animation.pause });
    fireEvent.focus(control);
    advance(2);
    expect(screen.getByRole("tab", { name: "AI" })).toHaveAttribute("aria-selected", "true");
    fireEvent.blur(control);
    advance(2);
    expect(screen.getByRole("tab", { name: "AI" })).toHaveAttribute("aria-selected", "true");
    fireEvent.focus(control);
    fireEvent.click(screen.getByRole("button", { name: heroShowcase.animation.resume }));
    advance();
    expect(screen.getByRole("tab", { name: "Applications" })).toHaveAttribute("aria-selected", "true");
  });
  it("preserves a pointer pause click when focus first stops automatic cycling", () => {
    const { container } = render(<HeroShowcase onProject={vi.fn()} />);
    const control = screen.getByRole("button", { name: heroShowcase.animation.pause });
    fireEvent.pointerDown(control);
    fireEvent.focus(control);
    fireEvent.click(control, { detail: 1 });
    expect(container.querySelector(".showcase-scene")).toHaveAttribute("data-motion", "paused");
    fireEvent.pointerDown(control);
    fireEvent.click(control, { detail: 1 });
    expect(container.querySelector(".showcase-scene")).toHaveAttribute("data-motion", "running");
    advance();
    expect(screen.getByRole("tab", { name: "Applications" })).toHaveAttribute("aria-selected", "true");
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
  it("keeps static cards and manual navigation with reduced motion", () => {
    vi.spyOn(window, "matchMedia").mockImplementation((query) => ({ matches: true, media: query, onchange: null, addListener: vi.fn(), removeListener: vi.fn(), addEventListener: vi.fn(), removeEventListener: vi.fn(), dispatchEvent: vi.fn() }));
    const { container } = render(<HeroShowcase onProject={vi.fn()} />);
    expect(screen.getByRole("button", { name: heroShowcase.animation.pause })).toBeDisabled();
    expect(container.querySelector(".showcase-scene")).toHaveAttribute("data-motion", "paused");
    advance(3);
    expect(screen.getByRole("tab", { name: "AI" })).toHaveAttribute("aria-selected", "true");
    fireEvent.click(screen.getByRole("tab", { name: "Cloud" }));
    expect(screen.getByRole("tab", { name: "Cloud" })).toHaveAttribute("aria-selected", "true");
  });
});
