import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/wfrp4e-character-creator/',
  resolve: {
    alias: {
      '@data': path.resolve(__dirname, 'data'),
    },
  },
})
