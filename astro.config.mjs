import { defineConfig } from 'astro/config';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://squareonerenovations.co.uk',
  sitemap: true,
  integrations: [sitemap(), robotsTxt(), mdx()],
  output: 'static',
  trailingSlash: 'ignore'
});