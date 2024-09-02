import { render, screen } from "@testing-library/react";
import { CallToAction } from "./CallToAction";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

describe("CallToAction component", () => {
  test("renders the component", () => {
    const { getByText } = render(
      <CallToAction starImageSrc="/star.jpg" springImageSrc="/spring.jpg" />
    );
    const title = getByText(
      /Ready to take your digital presence to the next level/i
    );
    expect(title).toBeInTheDocument();

    //Test the star image
    const starImage = screen.getByAltText("Star Image");
    console.log("Star Image scr:", starImage.src);
    expect(starImage).toBeInTheDocument();
    expect(starImage).toHaveAttribute("src", "/star.jpg");

    // Test the spring image
    const springImage = screen.getByAltText("Spring Image");
    console.log("Spring Image scr:", springImage.src);
    expect(springImage).toBeInTheDocument();
    expect(springImage).toHaveAttribute("src", "/spring.jpg");
  });
});
