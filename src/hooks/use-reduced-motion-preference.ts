import { useSyncExternalStore } from "react";

// Stable browser protocol query, shared by all studio motion consumers.
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(REDUCED_MOTION_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function snapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export function useReducedMotionPreference() {
  return useSyncExternalStore(subscribe, snapshot, () => true);
}
