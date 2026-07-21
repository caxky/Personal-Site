# Personal-Site

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

   The site opens at [http://localhost:3000](http://localhost:3000). Changes in
   `src/` reload automatically.

## Deploy to GitHub Pages

The site deploys automatically when changes are pushed to `main`. The workflow
builds the app, includes the `kylejames.me` CNAME file, and publishes the
production build to GitHub Pages.

### One-time GitHub setup

In the repository, open **Settings → Pages**. Under **Build and deployment**,
set **Source** to **GitHub Actions**. Also verify that `kylejames.me` is set as
the custom domain there.

### Deploying changes

Commit and push to `main`:

```bash
git push origin main
```

GitHub Actions will deploy the site. You can also run the **Deploy GitHub Pages**
workflow manually from the repository's **Actions** tab.

To create a local production build without deploying it, run:

```bash
npm run build
```
