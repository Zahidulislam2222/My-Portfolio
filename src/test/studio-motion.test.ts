import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useReducedMotionPreference } from "../hooks/use-reduced-motion-preference";

afterEach(() => vi.unstubAllGlobals());

describe("live motion preference", () => {
  it("reacts to preference changes and releases its listener on unmount", () => {
    let reduced = false;
    const listeners = new Set<() => void>();
    const media = {
      get matches() {
        return reduced;
      },
      addEventListener: (_: string, listener: () => void) =>
        listeners.add(listener),
      removeEventListener: (_: string, listener: () => void) =>
        listeners.delete(listener),
    };
    vi.stubGlobal(
      "matchMedia",
      vi.fn(() => media),
    );
    const { result, unmount } = renderHook(() => useReducedMotionPreference());
    expect(result.current).toBe(false);
    act(() => {
      reduced = true;
      listeners.forEach((listener) => listener());
    });
    expect(result.current).toBe(true);
    act(() => {
      reduced = false;
      listeners.forEach((listener) => listener());
    });
    expect(result.current).toBe(false);
    unmount();
    expect(listeners.size).toBe(0);
  });
});
