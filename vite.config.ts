/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/RsSchool-react/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.ts'],
    coverage: {
      provider: 'c8',
      all: true,
      skipFull: true,
      reporter: 'text',
      include: ['src'],
      exclude: ['src/main.tsx', 'src/vite-env.d.ts', 'src/assets', 'src/utils'],
    },
  },
  server: {
    proxy: {
      '/v4': {
        target: 'https://api.jikan.moe',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
