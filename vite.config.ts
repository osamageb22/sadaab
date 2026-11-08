import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// A relative base keeps assets working on both GitHub user sites and
// repository sites (username.github.io/repository-name/).
export default defineConfig({
  plugins: [react()],
  base: './',
});
