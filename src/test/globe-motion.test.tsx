import { act, cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import GlobeScene from "@/components/studio/GlobeScene";
import { heroShowcase } from "@/config/hero.config";
import { drawGlobe } from "@/lib/globe-renderer";

vi.mock("@/lib/globe-renderer", () => ({ drawGlobe: vi.fn() }));

afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); });

describe("globe animation lifecycle", () => {
  it("cancels frames while paused and releases frames and observers on unmount", () => {
    const frames = new Map<number, FrameRequestCallback>();
    let sequence = 0;
    const disconnect = vi.fn();
    vi.stubGlobal("requestAnimationFrame", vi.fn((callback: FrameRequestCallback) => { frames.set(++sequence, callback); return sequence; }));
    vi.stubGlobal("cancelAnimationFrame", vi.fn((id: number) => frames.delete(id)));
    vi.stubGlobal("ResizeObserver", class { observe() {} disconnect = disconnect; });
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue({ setTransform: vi.fn() } as unknown as CanvasRenderingContext2D);
    vi.spyOn(HTMLCanvasElement.prototype, "getBoundingClientRect").mockReturnValue({ width: 500, height: 360 } as DOMRect);
    const { rerender, unmount } = render(<GlobeScene mode={heroShowcase.modes[0]} paused={false} />);
    expect(frames.size).toBe(1);
    const advanceFrame = (time: number) => act(() => {
      const [id, callback] = [...frames][0];
      frames.delete(id);
      callback(time);
    });
    advanceFrame(1000);
    advanceFrame(2000);
    expect(vi.mocked(drawGlobe).mock.lastCall?.[3]).toBe(1);
    rerender(<GlobeScene mode={heroShowcase.modes[0]} paused />);
    expect(frames.size).toBe(0);
    expect(vi.mocked(drawGlobe).mock.lastCall?.[3]).toBe(1);
    rerender(<GlobeScene mode={heroShowcase.modes[0]} paused={false} />);
    advanceFrame(9000);
    expect(vi.mocked(drawGlobe).mock.lastCall?.[3]).toBe(1);
    unmount();
    expect(frames.size).toBe(0);
    expect(disconnect).toHaveBeenCalledTimes(3);
  });
});
