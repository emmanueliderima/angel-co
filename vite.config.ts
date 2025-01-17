import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

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
      // @/types => src/types
      '@types': path.resolve(__dirname, 'src/types'),
      // @/assets => src/assets
      '@assets': path.resolve(__dirname, 'src/assets'),
      //
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      //
      '@lib': path.resolve(__dirname, 'src/lib')
    },
  }
})
