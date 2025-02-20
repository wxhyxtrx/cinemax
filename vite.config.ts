import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  assetsInclude: ["**/*.{jpg,jpeg,png,webp,gif,svg}"],
  resolve: {
    alias: {
      "@": "/src", // Menambahkan alias untuk path lebih rapi
    },
  },
});
