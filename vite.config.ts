import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// GitHub Pages serves 404.html for unknown paths; a copy of index.html lets
// React Router handle deep links and refreshes on subpages.
const spaFallback = (): Plugin => ({
  name: "spa-fallback-404",
  apply: "build",
  closeBundle() {
    const outDir = path.resolve(__dirname, "dist");
    fs.copyFileSync(path.join(outDir, "index.html"), path.join(outDir, "404.html"));
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), spaFallback()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
