import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: process.env.VITE_HOST,
  },
});
