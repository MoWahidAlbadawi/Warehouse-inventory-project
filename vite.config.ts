import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
// For Using vite enviroment keys in html 
import { createHtmlPlugin } from 'vite-plugin-html'

declare const process: {
  env: Record<string, string | undefined>
  cwd(): string
}

export default defineConfig({
  plugins: [
    react(), 
    tsconfigPaths(),
    createHtmlPlugin({
      inject: {
        data: {
          googleSiteVerification: process.env.VITE_GOOGLE_SITE_VERIFICATION
        }
      }
    })
  ],
})


