import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3020,
    open: true,
  },
  build: {
    outDir: "./dist",
    assetsDir: "assets",
  },
  base: '/ts-react-vite-template/',
})
