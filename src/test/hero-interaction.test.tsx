import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import HeroShowcase from "@/components/studio/HeroShowcase";
import { heroShowcase } from "@/config/hero.config";

describe("interactive hero", () => {
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
});
