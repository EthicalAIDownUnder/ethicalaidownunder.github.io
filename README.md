# Ethical AI Down Under website

A modern static website for Ethical AI Down Under, built with Astro, Markdown content collections, Decap CMS scaffolding, and GitHub Pages deployment.

## What is included

- Mobile-first Astro website
- Enhanced nonprofit copy and UX structure
- Home, About, What We Do, Events, Resources, Blog, Get Involved, Contact, Gallery, Webinars and Podcast pages
- Markdown-powered content for blog posts, events, and resources
- Decap CMS admin scaffolding at `/admin/`
- GitHub Actions deployment workflow for GitHub Pages
- SEO meta tags, sitemap integration, robots endpoint, custom 404 page
- Brand styling based on the supplied logo

## Local preview

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal, usually `http://localhost:4321`.

## Edit core settings

Edit `src/data/site.ts` before launch:

- Email address
- LinkedIn URL
- Future social media URLs
- Join and subscribe destination links
- Domain once purchased

## Edit content

Main pages are in `src/pages/`.

Content collections are in:

- `src/content/blog/`
- `src/content/events/`
- `src/content/resources/`

Each item is a Markdown file with frontmatter at the top.

## Browser CMS

The site includes Decap CMS configuration in `public/admin/config.yml` and an admin page in `public/admin/index.html`.

Before using the live CMS, update these placeholders:

```yml
backend:
  name: github
  repo: YOUR_GITHUB_USERNAME/ethical-ai-downunder
  branch: main
```

For GitHub Pages project hosting, also update `public_folder` if your repository name is not `ethical-ai-downunder`.

Live CMS editing through GitHub requires an OAuth/authentication setup. For a first launch, you can safely deploy the site and edit content directly in GitHub or locally. Enable CMS login after the repository and domain decisions are final.

## Build

```bash
npm run build
npm run preview
```

## Deploy

See `DEPLOYMENT_GUIDE.md`.
