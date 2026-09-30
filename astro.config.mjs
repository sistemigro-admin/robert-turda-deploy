// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sistemigro.github.io/robert-turda',
  base: '/robert-turda/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
