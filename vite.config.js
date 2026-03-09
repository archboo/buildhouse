import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'public/assets/*',
          dest: 'assets'
        }
      ]
    })
  ],
  base: '/buildhouse/',
  build: {
    outDir: 'dist/spa',
    assetsDir: 'assets',
        emptyOutDir: true,
  }
});