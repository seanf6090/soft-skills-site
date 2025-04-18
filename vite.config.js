import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/soft-skills-site/', // 👈 this must match the repo name exactly
  plugins: [react()],
})