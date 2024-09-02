import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock the fs module
vi.mock("fs", () => ({
  readFileSync: () => "Mocked file content",
  // Add more mock functions or properties as needed
}));
