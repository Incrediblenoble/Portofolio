import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
// import tsconfigPaths from "vite-tsconfig-paths";
import viteTsconfigPaths from "vite-plugin-tsconfig-paths"; // Import the plugin
import commonjs from "@rollup/plugin-commonjs";

// export default defineConfig({
//   plugins: [react()],
//   test: { environment: "jsdom" },
// });
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), commonjs()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
