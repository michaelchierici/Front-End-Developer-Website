import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' 
import { defineConfig } from 'vite'
import { VitePluginFonts } from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  VitePluginFonts({
    google: {
      families: ['Lato'],
    },
  }),
  svgr({ 
    svgrOptions: {
      // svgr options
    },
  }),
],
})
