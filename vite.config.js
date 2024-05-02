import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VueImages from 'vite-plugin-vue-images';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VueImages(),
    legacy({
      targets: ['defaults', 'not IE 11'] // Configura i target per cui desideri supporto legacy
    })
  ]
});
