import { render } from "@testing-library/react";
import { LogoTicker } from "./LogoTicker";
import { expect, test } from "vitest";
test("renders the LogoTicker component", () => {
  const { getByAltText } = render(<LogoTicker />);

  // Check if the component renders the expected logos
  expect(getByAltText("Acme Logo")).toBeInTheDocument();
  expect(getByAltText("Quantum Logo")).toBeInTheDocument();
  expect(getByAltText("Celestial Logo")).toBeInTheDocument();
  expect(getByAltText("Echo Logo")).toBeInTheDocument();
  expect(getByAltText("Pulse Logo")).toBeInTheDocument();
  expect(getByAltText("Apex Logo")).toBeInTheDocument();
  // Add more assertions as needed
});
