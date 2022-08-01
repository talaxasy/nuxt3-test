import {defineNuxtConfig} from 'nuxt';
import {resolve} from 'node:path';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig(
  {
    typescript: {
      shim: false,
    },
    srcDir: './src',
  },
);
