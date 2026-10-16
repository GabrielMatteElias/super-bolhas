import { defineConfig } from 'astro/config';
import { siteContent } from './src/data/siteContent.ts';

export default defineConfig({
  output: 'static',
  site: siteContent.siteUrl || undefined,
});
