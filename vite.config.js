import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    open: true,
    historyApiFallback: true,
    middleware: (app) => {
      app.use((req, res, next) => {
        if (req.url.includes('.')) {
          next();
        } else {
          req.url = '/';
          next();
        }
      });
    }
  }
})
