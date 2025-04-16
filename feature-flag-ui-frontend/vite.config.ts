import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        './', // Allow the project root
        'node_modules/@fortawesome/fontawesome-free' // Allow Font Awesome
      ]
    }
  }
});
