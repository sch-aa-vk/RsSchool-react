/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/RsSchool-react/',
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
      '/': {
        target: 'https://sch-aa-vk.github.io/RsSchool-react/',
        changeOrigin: true,
      },
    },
  },
});
