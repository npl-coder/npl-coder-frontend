import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/npl-coder-frontend/",
  plugins: [react()],
  assetsInclude: [
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg, **/*.PNG, **/*.JPG, **/*.JPEG",
  ],
  server: {
    port: 3000,
  },
});
