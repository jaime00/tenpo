import { defineConfig } from 'vite';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [react(), eslintPlugin(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
});
