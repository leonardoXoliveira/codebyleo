import react from '@vitejs/plugin-react'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.mts',
    include: ['src/**/*.spec.{js,ts,jsx,tsx}'],
    exclude: [...configDefaults.exclude, 'src/e2e/**'],
    coverage: {
      reporter: ['text', 'html'],
      include: ['src/**/*.{js,ts,jsx,tsx}']
    },
    reporters: ['verbose']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
