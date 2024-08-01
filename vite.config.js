import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://medium.com/@rubybellekim/react-tailwind-css-is-not-working-in-vite-react-solution-2024-updated-bba56dcae003
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
