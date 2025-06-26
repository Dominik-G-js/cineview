import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths' // <-- Import

export default defineConfig({
  base: '/cineview/',
  plugins: [react(), tsconfigPaths()], // <-- Přidání pluginu
})