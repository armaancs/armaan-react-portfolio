import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig(({ command, isPreview }) => ({
  plugins: [react(), tailwindcss(),],
  // The dev URL is named after this folder so it is obvious which design is on screen.
  // Builds, and `vite preview` of a build, keep the GitHub Pages path.
  base: command === "serve" && !isPreview ? "/redesign1/" : "/armaan-react-portfolio/",
  // Fixed port so this design never collides with the main portfolio's dev server on 5173.
  server: { port: 5181, strictPort: true },
}))
