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
  fireEvent.click(screen.getByRole("link", { name: `${studioConfig.labels.readProject}: ${name}` }));
  return screen.getByRole("dialog", { hidden: true });
};

describe("project dialog", () => {
  it("pins FTM follow-up first and keeps every glowing spotlight in the top ten", () => {
    render(<EngineeringStudio />);
    const cards = [...document.querySelectorAll("#projects .studio-project-grid .studio-project-card")];
    const names = cards.map((card) => card.querySelector("h3")?.textContent);
    expect(names[0]).toBe("Multi-Site Follow-up");
    for (const id of studioConfig.spotlight.glow) {
      const name = studioProjects.find((project) => project.id === id)!.name;
      const index = names.indexOf(name);
      expect(index, id).toBeGreaterThanOrEqual(0);
      expect(index, id).toBeLessThan(10);
      expect(cards[index].classList.contains("is-spotlight"), id).toBe(true);
      expect(within(cards[index] as HTMLElement).getByText(studioConfig.labels.spotlightLabel)).toBeInTheDocument();
    }
    expect(document.querySelectorAll("#projects .studio-project-grid .is-spotlight")).toHaveLength(studioConfig.spotlight.glow.length);
  });

  it("keeps the glow on a spotlight project's dialog only", () => {
    render(<EngineeringStudio />);
    expect(openProject("Multi-Site Follow-up")).toHaveClass("is-spotlight");
    fireEvent.click(screen.getByRole("button", { name: studioConfig.labels.closeProject, hidden: true }));
    expect(openProject("VoiceBridge")).not.toHaveClass("is-spotlight");
  });

  it("identifies client artwork honestly and preserves details when an image fails", () => {
    render(<EngineeringStudio />);
    const dialog = openProject("Campaign operations");
    const image = within(dialog).getByRole("img", { name: /^Illustration of Campaign operations/, hidden: true });
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
    fireEvent.click(screen.getByRole("link", { name: /EmailFinder.*Local CLI/ }));
    const dialog = screen.getByRole("dialog", { hidden: true });
    expect(within(dialog).getByRole("img", { name: "EmailFinder actual command-line help", hidden: true })).toBeInTheDocument();
    expect(within(dialog).getByText(studioConfig.labels.imageLabels.reference)).toBeInTheDocument();
  });
  it("shows AdRevora's private GitHub link and the actual live subdomain", () => {
    render(<EngineeringStudio />);
    fireEvent.click(screen.getByRole("button", { name: `${studioConfig.labels.allProjects} (${studioProjects.length})` }));
    fireEvent.click(screen.getByRole("link", { name: /AdRevora AI.*Deployed revenue workspace/ }));
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
    const first = dialog.querySelector(".studio-ba-case");
    expect(first?.querySelector(".studio-ba-panel.before")?.textContent).toContain(evidence.challenges[0].problem);
    expect(first?.querySelector(".studio-ba-panel.after")?.textContent).toContain(evidence.challenges[0].result);
    expect(first?.querySelector(".studio-ba-fix")?.textContent).toContain(evidence.challenges[0].fix);
    expect(first?.querySelector(".studio-ba-panel.before")?.textContent).toContain(studioConfig.labels.problem);
    expect(first?.querySelector(".studio-ba-panel.after")?.textContent).toContain(studioConfig.labels.result);
    const pdf = within(dialog).getByRole("link", { name: new RegExp(evidence.document.label.replace(/[()]/g, "\\$&")), hidden: true });
    expect(pdf).toHaveAttribute("href", `${documentBasePath}${evidence.document.file}`);
  });

  it("renders every social profile as a new-tab link in the footer", () => {
    render(<EngineeringStudio />);
    const list = screen.getByRole("list", { name: studioConfig.labels.socialLabel });
    const links = within(list).getAllByRole("link");
    expect(links).toHaveLength(studioConfig.socialProfiles.length);
    for (const [i, link] of links.entries()) {
      expect(link).toHaveAttribute("href", studioConfig.socialProfiles[i].href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link.getAttribute("rel")).toContain("noopener");
    }
  });

  it("Client work filter shows only client projects", () => {
    render(<EngineeringStudio />);
    fireEvent.click(screen.getByRole("button", { name: studioConfig.labels.clientFilter }));
    const cards = screen.getAllByRole("link", { name: new RegExp(`^${studioConfig.labels.readProject}: `) });
    const clientCount = Object.values(projectEvidence).filter((e) => e.engagement.type === "Client project").length;
    expect(cards).toHaveLength(clientCount);
    expect(screen.getByRole("link", { name: `${studioConfig.labels.readProject}: Incident Response & Recovery` })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: `${studioConfig.labels.readProject}: Chronos` })).toBeNull();
  });

  it("links every card and index row to its crawlable case-study page", () => {
    render(<EngineeringStudio />);
    for (const card of screen.getAllByRole("link", { name: new RegExp(`^${studioConfig.labels.readProject}: `) })) {
      const project = studioProjects.find((item) => card.getAttribute("aria-label")?.endsWith(`: ${item.name}`))!;
      expect(card).toHaveAttribute("href", `/work/${project.id}`);
    }
    const index = document.getElementById("studio-project-index")!;
    expect([...index.querySelectorAll("a")].map((row) => row.getAttribute("href")).sort())
      .toEqual(studioProjects.map((project) => `/work/${project.id}`).sort());
  });

  it("opens the dialog on a plain click but leaves modified clicks to the browser", () => {
    render(<EngineeringStudio />);
    const card = screen.getByRole("link", { name: `${studioConfig.labels.readProject}: VoiceBridge` });
    const modified = new MouseEvent("click", { bubbles: true, cancelable: true, ctrlKey: true });
    let leftToBrowser = false;
    // Record the app's decision, then stop jsdom, which cannot open a new tab.
    const record = (event: Event) => {
      leftToBrowser = !event.defaultPrevented;
      event.preventDefault();
    };
    window.addEventListener("click", record);
    card.dispatchEvent(modified);
    window.removeEventListener("click", record);
    expect(leftToBrowser).toBe(true);
    expect(screen.getByRole("dialog", { hidden: true })).not.toHaveAttribute("open");
    const dialog = openProject("VoiceBridge");
    expect(dialog).toHaveAttribute("open");
    expect(within(dialog).getByRole("link", { name: studioConfig.labels.fullCaseStudy, hidden: true }))
      .toHaveAttribute("href", "/work/voicebridge");
  });
});
