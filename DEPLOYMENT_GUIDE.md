# Deployment guide

This guide takes the site from local preview to GitHub Pages, then to a future custom domain.

## 1. Preview locally

1. Install Node.js 24 or newer if possible.
2. Unzip this package.
3. Open a terminal inside the project folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local preview URL shown in the terminal.
6. Edit pages and content until you are happy with the first public version.

## 2. Create a GitHub repository

1. Go to GitHub and create a new repository.
2. Recommended repository name: `ethical-ai-downunder`.
3. Keep it public for GitHub Pages unless you have a paid plan that supports your desired private repository workflow.
4. Do not add a README from GitHub if you are uploading this full package.

## 3. Update the CMS placeholder

Open `public/admin/config.yml` and replace:

```yml
repo: YOUR_GITHUB_USERNAME/ethical-ai-downunder
```

with your actual GitHub username or organization and repository name.

If you choose a different repository name, update this line too:

```yml
public_folder: "/ethical-ai-downunder/uploads"
```

For example, if your repository is `eaid-site`, use:

```yml
public_folder: "/eaid-site/uploads"
```

## 4. Upload the site to GitHub

From the project folder:

```bash
git init
git add .
git commit -m "Initial Ethical AI Down Under website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ethical-ai-downunder.git
git push -u origin main
```

Replace the remote URL with your real repository URL.

## 5. Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to Settings.
3. Go to Pages.
4. Under Build and deployment, set Source to GitHub Actions.
5. Go to the Actions tab and watch the deploy workflow run.
6. When it completes, your site should be available at:

```text
https://YOUR_GITHUB_USERNAME.github.io/ethical-ai-downunder/
```

## 6. Edit and redeploy content

Every push to `main` triggers the deployment workflow.

For technical editing:

```bash
git pull
# edit files
git add .
git commit -m "Update website content"
git push
```

For simple GitHub editing:

1. Open a Markdown file in GitHub.
2. Click Edit.
3. Commit changes to `main`.
4. GitHub Actions will rebuild the website.

## 7. Enable browser-based CMS later

The `/admin/` page is included, but live CMS login needs authentication.

Suggested staged approach:

- Phase 1: Edit Markdown locally or through GitHub.
- Phase 2: Configure Decap CMS authentication for GitHub.
- Phase 3: Give approved editors push access or editorial workflow permissions.

Because GitHub authentication for Decap requires OAuth support, decide whether to use Netlify Identity, a small external OAuth service, or a future paid host before inviting non-technical editors.

## 8. Add the custom domain later

When `ethicalaidownunder.org` is purchased:

1. Create `public/CNAME` with this single line:

```text
ethicalaidownunder.org
```

2. In GitHub repository Settings > Pages, add the custom domain.
3. Update DNS records at your domain registrar using GitHub's instructions.
4. Update `.github/workflows/deploy.yml` if needed by adding build environment overrides:

```yml
env:
  SITE_URL: https://ethicalaidownunder.org
  BASE_PATH: /
```

5. After deployment, check internal links, uploaded image paths, sitemap, and the `/admin/` path.

## 9. Suggested launch checklist

- Replace LinkedIn placeholder in `src/data/site.ts`.
- Decide whether Join and Subscribe buttons use mailto, Google Forms, HubSpot, CiviCRM, Buttondown, Brevo, or Mailchimp.
- Replace example events with real events or mark them as coming soon.
- Replace example blog posts and resources with approved content.
- Review privacy page before connecting analytics, forms, or CRM.
- Add social profile URLs when available.
- Test on mobile.
- Run `npm run build` before pushing final changes.

## 10. Link or retire the temporary Google Site

For the current Google Sites placeholder, use one of these options:

- Best option for launch: add a clear button on the Google Site that says "Visit our new website" and points to the GitHub Pages URL.
- After confidence testing: replace most Google Site content with a short redirect-style message and the new website link.
- Long-term option: retire the Google Site once the custom domain is connected to this website.

Keep GitHub/Astro as the source of truth. Maintaining the same content in GitHub Pages and Google Sites at the same time will create duplication and version-control issues.
