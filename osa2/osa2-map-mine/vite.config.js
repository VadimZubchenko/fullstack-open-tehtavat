import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Create a proxy to avoid CORS issues
// because the browser thinks the request stays on the same origin (5173)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
