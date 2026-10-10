import { act, cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { motionValue, type MotionValue } from "framer-motion";
import CardCarousel from "@/components/studio/CardCarousel";
import HeroCopyCarousel from "@/components/studio/HeroCopyCarousel";
import { heroShowcase as hero } from "@/config/hero.config";

const frames = vi.hoisted(() => ({ callback: null as null | ((time: number, delta: number) => void), value: null as MotionValue<number> | null }));
vi.mock("framer-motion", async (importOriginal) => {
  const actual = await importOriginal<typeof import("framer-motion")>();
  const React = await import("react");
  return { ...actual,
    useMotionValue: (initial: number) => { const value = actual.useMotionValue(initial); frames.value = value; return value; },
    useAnimationFrame: (callback: (time: number, delta: number) => void) => {
      frames.callback = callback;
      React.useEffect(() => () => { frames.callback = null; }, []);
    },
  };
});

afterEach(() => { cleanup(); vi.clearAllMocks(); vi.unstubAllGlobals(); });

const frame = (time: number) => act(() => frames.callback?.(time, 0));
const revolutionMs = hero.motion.revolutionSeconds * 1000;
const degreesPerSecond = 360 / hero.motion.revolutionSeconds;

describe("continuous whole-card rotation lifecycle", () => {
  it("drives horizontal cards and vertical copy from one shared value through selection and suspension", () => {
    const shared = motionValue(0);
    const view = (active: number, paused: boolean, reduced: boolean, selectionVersion = 0) => <>
      <HeroCopyCarousel active={active} rotation={shared} />
      <CardCarousel active={active} paused={paused} reduced={reduced} selectionVersion={selectionVersion} rotation={shared} />
    </>;
    const { rerender } = render(view(0, false, false));
    frame(0); frame(1000);
    expect(shared.get()).toBeCloseTo(-degreesPerSecond);
    rerender(view(0, true, false));
    frame(9000);
    expect(shared.get()).toBeCloseTo(-degreesPerSecond);
    rerender(view(2, true, false, 1));
    expect(shared.get()).toBeCloseTo(120);
    rerender(view(1, true, true, 2));
    expect(shared.get()).toBeCloseTo(240);
    frame(12000);
    expect(shared.get()).toBeCloseTo(240);
  });
  it("starts immediately and keeps equal angular speed across automatic face changes", () => {
    const onActiveChange = vi.fn();
    const { rerender } = render(<CardCarousel active={0} paused={false} reduced={false} onActiveChange={onActiveChange} />);
    frame(0); frame(1000);
    expect(frames.value?.get()).toBeCloseTo(-degreesPerSecond);
    frame(revolutionMs / 6);
    expect(frames.value?.get()).toBeCloseTo(-60);
    expect(onActiveChange).toHaveBeenLastCalledWith(1);
    rerender(<CardCarousel active={1} paused={false} reduced={false} onActiveChange={onActiveChange} />);
    expect(frames.value?.get()).toBeCloseTo(-60);
    frame(revolutionMs / 6 + 1000);
    expect(frames.value?.get()).toBeCloseTo(-60 - degreesPerSecond);
    frame(revolutionMs);
    expect(frames.value?.get()).toBeCloseTo(0);
    expect(onActiveChange).toHaveBeenLastCalledWith(0);
  });
  it("freezes the angle, resumes without catching up and releases frames on unmount", () => {
    const { rerender, unmount } = render(<CardCarousel active={0} paused={false} reduced={false} />);
    frame(0); frame(1000);
    rerender(<CardCarousel active={0} paused reduced={false} />);
    frame(9000);
    expect(frames.value?.get()).toBeCloseTo(-degreesPerSecond);
    rerender(<CardCarousel active={0} paused={false} reduced={false} />);
    frame(20000);
    expect(frames.value?.get()).toBeCloseTo(-degreesPerSecond);
    frame(21000);
    expect(frames.value?.get()).toBeCloseTo(-2 * degreesPerSecond);
    unmount();
    expect(frames.callback).toBeNull();
  });
  it("snaps manual selection to its face while paused and avoids motion when reduced", () => {
    const { rerender } = render(<CardCarousel active={0} paused={false} reduced={false} />);
    rerender(<CardCarousel active={2} selectionVersion={1} paused reduced={false} />);
    expect(frames.value?.get()).toBeCloseTo(120);
    rerender(<CardCarousel active={1} selectionVersion={2} paused reduced />);
    expect(frames.value?.get()).toBeCloseTo(240);
    frame(0); frame(12000);
    expect(frames.value?.get()).toBeCloseTo(240);
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
    const value = frames.value!;
    value.set(-65);
    rerender(<CardCarousel active={1} paused reduced={false} />);
    expect(value.get()).toBe(-65);
    rerender(<CardCarousel active={1} selectionVersion={1} paused reduced={false} />);
    expect(value.get()).toBeCloseTo(-120);
  });
});
