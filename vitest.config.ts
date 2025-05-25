/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    // The reason for using "happy-dom" instead of "jsdom" because I got lot of different errors
    // about ethers.js and generating walllets.
    environment: 'happy-dom',
    setupFiles: './src/test/setup.ts',
  },
});
