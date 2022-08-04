import {defineNuxtConfig} from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig(
  {
    modules: [
      '@nuxt/content',
    ],
    autoImports: {
      dirs: [
        // Scan composables from nested directories
        'composables/**',
      ],
    },
    components: {
      dirs: [
        {
          // Make auto-import of components from /common folder without 'common' prefix
          path: '~/components/common',
        },
        '~/components',
      ],
    },
    meta: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js',
        },
      ],
    },
    css: [
      'assets/styles/main.scss',
    ],
    typescript: {
      shim: false,
    },
    srcDir: './src',
  },
);
