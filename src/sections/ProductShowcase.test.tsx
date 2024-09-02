import { render } from "@testing-library/react";
import { ProductShowcase } from "./ProductShowcase";
import { expect, test } from "vitest";
test("renders the ProductShowcase component", () => {
  const { getByText } = render(<ProductShowcase />);

  // Check if the component renders the expected elements
  expect(
    getByText("A more effective way to track progress")
  ).toBeInTheDocument();
  expect(
    getByText(
      "Effortlessly turn your ideas into a fully functional, responsive, Saas website in just minutes with this template."
    )
  ).toBeInTheDocument();
  // Add more assertions as needed
});
