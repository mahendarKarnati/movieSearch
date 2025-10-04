import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      babel: {
        plugins: mode === 'production'
          ? [['babel-plugin-react-compiler']]
          : [],
      },
    }),
  ],
  base: './', // important for Vercel/Netlify
}))
