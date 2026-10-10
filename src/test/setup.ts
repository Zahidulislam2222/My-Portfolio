import "@testing-library/jest-dom";

// jsdom has no canvas renderer. Geometry is tested separately; pixels run in Chrome.
Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
  configurable: true,
  writable: true,
  value: () => null,
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
