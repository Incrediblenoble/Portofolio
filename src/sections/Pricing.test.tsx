import { render } from "@testing-library/react";
import { Pricing } from "./Pricing";
import { expect, test } from "vitest";

test("renders the Pricing component", () => {
  const { getByText } = render(<Pricing />);

  // Check if the component renders the expected elements
  expect(getByText("Pricing")).toBeInTheDocument();
  expect(
    getByText(
      "Free forever, Upgrade for unlimited tasks, better security, and exclusive features"
    )
  ).toBeInTheDocument();
  // Add more assertions as needed
});
