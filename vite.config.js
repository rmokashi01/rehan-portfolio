import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/rehan-portfolio/', // 👈 Must match your repo name
  plugins: [react()],
})
