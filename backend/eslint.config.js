import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "dist/**",
      "generated/**",
      "node_modules/**",
    ],
  },
]);