import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { animate, type MotionValue } from "framer-motion";
import CardCarousel from "@/components/studio/CardCarousel";

vi.mock("framer-motion", async (importOriginal) => {
  const actual = await importOriginal<typeof import("framer-motion")>();
  return { ...actual, animate: vi.fn(() => ({ pause: vi.fn(), play: vi.fn(), stop: vi.fn() })) };
});

afterEach(() => { cleanup(); vi.clearAllMocks(); vi.unstubAllGlobals(); });

describe("whole-card turn lifecycle", () => {
  it("pauses and resumes the current turn and stops it on unmount", () => {
    const { rerender, unmount } = render(<CardCarousel active={0} paused={false} reduced={false} />);
    rerender(<CardCarousel active={1} paused={false} reduced={false} />);
    const controller = vi.mocked(animate).mock.results.at(-1)?.value;
    expect(vi.mocked(animate).mock.lastCall?.[1]).toBe(-120);
    rerender(<CardCarousel active={1} paused reduced={false} />);
    expect(controller.pause).toHaveBeenCalled();
    rerender(<CardCarousel active={1} paused={false} reduced={false} />);
    expect(controller.play).toHaveBeenCalled();
    unmount();
    expect(controller.stop).toHaveBeenCalled();
  });
  it("snaps manual selection to its face while paused and avoids motion when reduced", () => {
    const { rerender } = render(<CardCarousel active={0} paused={false} reduced={false} />);
    const value = vi.mocked(animate).mock.lastCall?.[0] as MotionValue<number>;
    rerender(<CardCarousel active={2} paused reduced={false} />);
    expect(value.get()).toBeCloseTo(120);
    expect(animate).toHaveBeenCalledTimes(1);
    rerender(<CardCarousel active={1} paused reduced />);
    expect(value.get()).toBeCloseTo(240);
    expect(animate).toHaveBeenCalledTimes(1);
  });
  it("disconnects its sizing observer on unmount", () => {
    const disconnect = vi.fn();
    vi.stubGlobal("ResizeObserver", class { observe() {} disconnect = disconnect; });
    const { unmount } = render(<CardCarousel active={0} paused reduced />);
    unmount();
    expect(disconnect).toHaveBeenCalledOnce();
  });
  it("preserves a paused angle but snaps when the same tab is explicitly reselected", () => {
    const { rerender } = render(<CardCarousel active={0} paused={false} reduced={false} />);
    rerender(<CardCarousel active={1} paused={false} reduced={false} />);
    const value = vi.mocked(animate).mock.lastCall?.[0] as MotionValue<number>;
    value.set(-65);
    rerender(<CardCarousel active={1} paused reduced={false} />);
    expect(value.get()).toBe(-65);
    rerender(<CardCarousel active={1} selectionVersion={1} paused reduced={false} />);
    expect(value.get()).toBeCloseTo(-120);
    expect(animate).toHaveBeenCalledTimes(2);
  });
});
