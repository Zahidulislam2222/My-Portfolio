import { beforeAll, describe, expect, it } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import EngineeringStudio from "@/components/studio/EngineeringStudio";
import { studioConfig, studioProjects } from "@/config/studio.config";
import { documentBasePath, projectEvidence } from "@/config/project-evidence.config";

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
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
  HTMLMediaElement.prototype.play = () => Promise.resolve();
  HTMLMediaElement.prototype.pause = () => {};
});

const openProject = (name: string) => {
  fireEvent.click(screen.getByRole("button", { name: `${studioConfig.labels.readProject}: ${name}` }));
  return screen.getByRole("dialog", { hidden: true });
};

describe("project dialog", () => {
  it("identifies client artwork honestly and preserves details when an image fails", () => {
    render(<EngineeringStudio />);
    const dialog = openProject("Campaign operations");
    const image = within(dialog).getByRole("img", { name: "AI-generated concept illustration for Campaign operations", hidden: true });
    expect(image.closest(".studio-project-artwork")).toBeTruthy();
    expect(dialog.querySelector(".studio-browser-bar")).toBeNull();
    expect(within(dialog).getByText(studioConfig.labels.imageLabels.illustration)).toBeInTheDocument();
    fireEvent.error(image);
    expect(within(dialog).getByText(studioConfig.labels.imageUnavailable)).toBeInTheDocument();
    expect(within(dialog).getByText(/Fine Touch Marketing/)).toBeInTheDocument();
  });

  it("shows a real website capture in its browser frame", () => {
    render(<EngineeringStudio />);
    const dialog = openProject("VoiceBridge");
    const image = within(dialog).getByRole("img", { name: "VoiceBridge public voice-agent website", hidden: true });
    expect(image.closest(".studio-project-capture")).toBeTruthy();
    expect(dialog.querySelector(".studio-browser-bar")).toBeTruthy();
    expect(within(dialog).queryByText(studioConfig.labels.imageLabels.illustration)).toBeNull();
  });

  it("makes non-featured tooling images accessible from the complete index", () => {
    render(<EngineeringStudio />);
    fireEvent.click(screen.getByRole("button", { name: `${studioConfig.labels.allProjects} (${studioProjects.length})` }));
    fireEvent.click(screen.getByRole("button", { name: /EmailFinder.*Local CLI/ }));
    const dialog = screen.getByRole("dialog", { hidden: true });
    expect(within(dialog).getByRole("img", { name: "EmailFinder actual command-line help", hidden: true })).toBeInTheDocument();
    expect(within(dialog).getByText(studioConfig.labels.imageLabels.reference)).toBeInTheDocument();
  });
  it("shows AdRevora's private GitHub link and the actual live subdomain", () => {
    render(<EngineeringStudio />);
    fireEvent.click(screen.getByRole("button", { name: `${studioConfig.labels.allProjects} (${studioProjects.length})` }));
    fireEvent.click(screen.getByRole("button", { name: /AdRevora AI.*Deployed revenue workspace/ }));
    const dialog = screen.getByRole("dialog", { hidden: true });
    expect(within(dialog).getByRole("link", { name: /GitHub.*Private repository/, hidden: true }))
      .toHaveAttribute("href", "https://github.com/Zahidulislam2222/AdRevora-AI");
    expect(within(dialog).getByRole("link", { name: /Live website.*adrevora.zahidul-islam.com/, hidden: true }))
      .toHaveAttribute("href", "https://adrevora.zahidul-islam.com/");
  });

  it("shows client, problems solved and the PDF link", () => {
    render(<EngineeringStudio />);
    const dialog = openProject("Campaign operations");
    const evidence = projectEvidence["ftm-social-media"];
    expect(within(dialog).getByText(studioConfig.labels.engagement)).toBeInTheDocument();
    expect(within(dialog).getByText(/Fine Touch Marketing/)).toBeInTheDocument();
    expect(within(dialog).getByText(studioConfig.labels.problemsFixed)).toBeInTheDocument();
    expect(dialog.querySelectorAll(".studio-dialog-challenges li")).toHaveLength(evidence.challenges.length);
    const pdf = within(dialog).getByRole("link", { name: new RegExp(evidence.document.label.replace(/[()]/g, "\\$&")), hidden: true });
    expect(pdf).toHaveAttribute("href", `${documentBasePath}${evidence.document.file}`);
  });

  it("Client work filter shows only client projects", () => {
    render(<EngineeringStudio />);
    fireEvent.click(screen.getByRole("button", { name: studioConfig.labels.clientFilter }));
    const cards = screen.getAllByRole("button", { name: new RegExp(`^${studioConfig.labels.readProject}: `) });
    const clientCount = Object.values(projectEvidence).filter((e) => e.engagement.type === "Client project").length;
    expect(cards).toHaveLength(clientCount);
    expect(screen.getByRole("button", { name: `${studioConfig.labels.readProject}: Incident Response & Recovery` })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: `${studioConfig.labels.readProject}: Chronos` })).toBeNull();
  });
});
