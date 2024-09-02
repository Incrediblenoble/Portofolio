import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

describe("Footer component", () => {
  test("renders the component", () => {
    // Render the component
    render(<Footer />);

    // Test the logo image
    const logoImage = screen.getByAltText("Saas logo");
    expect(logoImage).toBeInTheDocument();

    // Test the navigation links
    const skillsLink = screen.getByText(/Skills/i);
    expect(skillsLink).toBeInTheDocument();
    const projectsLink = screen.getByText(/Projects/i);
    expect(projectsLink).toBeInTheDocument();
    const contactLink = screen.getByText(/Contact/i);
    expect(contactLink).toBeInTheDocument();
    const careersLink = screen.getByText(/Careers/i);
    expect(careersLink).toBeInTheDocument();

    // Test the social media icons
    const socialXIcon = screen.getByTitle("Social X");
    expect(socialXIcon).toBeInTheDocument();
    const socialInstaIcon = screen.getByTitle("Social Instagram");
    expect(socialInstaIcon).toBeInTheDocument();
    const socialLinkedInIcon = screen.getByTitle("Social LinkedIn");
    expect(socialLinkedInIcon).toBeInTheDocument();
    const socialPinIcon = screen.getByTitle("Social Pinterest");
    expect(socialPinIcon).toBeInTheDocument();
    const socialYoutubeIcon = screen.getByTitle("Social YouTube");
    expect(socialYoutubeIcon).toBeInTheDocument();

    // Test the copyright text
    const copyrightText = screen.getByText(
      /© 2024 Software Developer, Inc. All right reserved./i
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
