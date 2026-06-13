import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ethicalaidownunder.github.io',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
});
