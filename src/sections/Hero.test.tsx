import { render } from "@testing-library/react";
import { Hero } from "./Hero";
import { expect, test } from "vitest";
test("renders the Hero component", () => {
  const { getByText } = render(<Hero />);

  // Check if the component renders the expected elements
  expect(getByText("ADEBANJO ADEFAYE")).toBeInTheDocument();
  expect(getByText("BJSOFT")).toBeInTheDocument();
  expect(
    getByText("UX designer in a front-end developer’s body")
  ).toBeInTheDocument();
  expect(
    getByText(
      "I enjoy making things look beautiful and engaging while maintaining functionality."
    )
  ).toBeInTheDocument();
  // Add more assertions as needed
});
