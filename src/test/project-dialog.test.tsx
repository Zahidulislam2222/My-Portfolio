import { beforeAll, describe, expect, it } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import EngineeringStudio from "@/components/studio/EngineeringStudio";
import { studioConfig } from "@/config/studio.config";
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
