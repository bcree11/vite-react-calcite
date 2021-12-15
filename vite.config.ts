import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    rollupOptions: {
      input: "src/main.tsx",
      output: [{ dir: path.resolve('public'), format: 'es' }]
    }
  }
});
