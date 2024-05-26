import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
   },
   server: {
    fs: {
      cachedChecks: false
    },
    port: 8080,
    strictPort: true,
    host: true,
   },
})
