import { render, fireEvent } from "@testing-library/react";
import { Header } from "./Header";
test("renders the Header component", () => {
  const { getByText } = render(<Header />);

  // Check if the component renders the expected elements
  expect(getByText("Get started for free")).toBeInTheDocument();
  expect(getByText("Skills")).toBeInTheDocument();
  expect(getByText("Projects")).toBeInTheDocument();
  expect(getByText("Contact")).toBeInTheDocument();
  expect(getByText("Download Resume")).toBeInTheDocument();
  // Add more assertions as needed
});

test("toggles the navigation dropdown on mobile", () => {
  const { getByLabelText } = render(<Header />);

  // Open the dropdown
  fireEvent.click(getByLabelText("Open menu"));

  // Check if the dropdown is visible
  expect(getByText("Skills")).toBeInTheDocument();
  expect(getByText("Projects")).toBeInTheDocument();
  expect(getByText("Contact")).toBeInTheDocument();

  // Close the dropdown
  fireEvent.click(getByLabelText("Open menu"));

  // Check if the dropdown is hidden
  expect(queryByText("Skills")).toBeNull();
  expect(queryByText("Projects")).toBeNull();
  expect(queryByText("Contact")).toBeNull();
});
