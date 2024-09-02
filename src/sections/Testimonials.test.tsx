import { render } from "@testing-library/react";
import { Testimonials } from "./Testimonials";
import { expect, test } from "vitest";
test("renders the Testimonials component", () => {
  const { getByText } = render(<Testimonials />);

  // Check if the component renders the expected elements
  expect(getByText("What our users say")).toBeInTheDocument();
  expect(
    getByText("From intuitive design to powerful features")
  ).toBeInTheDocument();
  // Add more assertions as needed
});
