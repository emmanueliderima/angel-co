import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // @/  => src/
      '@': path.resolve(__dirname, 'src'),
      // @/components => src/components
      '@components': path.resolve(__dirname, 'src/components'),
      // @/pages => src/pages
      '@pages': path.resolve(__dirname, 'src/pages'),
      
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      //
      '@lib': path.resolve(__dirname, 'src/lib')
    },
  }
})
