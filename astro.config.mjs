// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Served at the root of the custom domain. If the custom domain is ever
  // removed, the GitHub Pages project URL is https://julienderay.github.io/julien-deray-fr/
  // and you must set `base: '/julien-deray-fr'` here and rebuild.
  site: 'https://julien.deray.fr',
  integrations: [sitemap()],
});
