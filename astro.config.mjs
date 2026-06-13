import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'ethical-ai-downunder';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'EthicalAIDownUnder';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserOrOrgPage = repo === `${owner}.github.io`;

const site = process.env.SITE_URL ?? (isGithubActions ? `https://${owner}.github.io` : 'http://localhost:4321');

export default defineConfig({
  site,
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()]
});
