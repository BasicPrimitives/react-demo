import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window', // Necessary for some libraries that expect global to be defined
    'process.env': {}, // If you encounter any process-related issues
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3030',
        changeOrigin: true,
        // Additional options can be specified here
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})


