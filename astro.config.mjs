import { defineConfig } from 'astro/config';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://squareonerenovations.co.uk',
  sitemap: true,
  integrations: [sitemap(), robotsTxt()],
  output: 'static',
  trailingSlash: 'ignore',
});
