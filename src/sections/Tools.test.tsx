import { render } from "@testing-library/react";
import { Tools } from "./Tools";
import { expect, test } from "vitest";
test("renders the Tools component", () => {
  const { getByText } = render(<Tools />);

  // Check if the component renders the expected elements
  expect(
    getByText("What tools and technology do you use?")
  ).toBeInTheDocument();
  expect(getByText("HTML")).toBeInTheDocument();
  // Add more assertions as needed
});
