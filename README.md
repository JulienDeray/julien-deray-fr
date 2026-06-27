# julien.deray.fr

Personal site for Julien Deray — built with [Astro](https://astro.build), deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to dist/
npm run preview  # serve the production build locally
```

Requires Node 20+.

## Editing content

Content lives separately from layout — you rarely need to touch `.astro` files.

| What | Where |
| --- | --- |
| Name, headline, hero copy, résumé link | `src/data/site.ts` |
| Career timeline | `src/content/journey/*.md` (one file per role) |
| "How I Operate" principles & mantras | `src/data/values.ts` |
| Leader's Tools — books | `src/content/books/*.md` |
| Leader's Tools — methods | `src/content/methods/*.md` |
| Book | `src/data/book.ts` |
| Podcast topics | `src/content/podcast-topics/*.md` |
| Social / contact links | `src/data/socials.ts` |

Each Markdown item has an `order:` number controlling its position (lower = first).
To add a book, method, role, or topic, copy an existing file in that folder and
edit the frontmatter. Schemas are enforced at build time (`src/content.config.ts`) —
a missing or misnamed field will fail the build with a clear error.

### Résumé

The "Download résumé" button links to `public/resume/julien-deray-resume.pdf`.
That PDF is generated from `~/Documents/Works/CV/Julien_Deray_CV.yaml` with
[rendercv](https://github.com/rendercv/rendercv) (`rendercv render …`). The journey
timeline mirrors this CV — update both when a role changes.

## Deploy

Push to `main` → the GitHub Action (`.github/workflows/deploy.yml`) builds and
deploys to GitHub Pages.

**One-time GitHub setup:** Settings → Pages → Build and deployment → Source =
**GitHub Actions**. The custom domain `julien.deray.fr` ships via `public/CNAME`;
DNS must have a `CNAME` record for `julien` → `julienderay.github.io`.

> If the custom domain is ever removed, set `base: '/julien-deray-fr'` in
> `astro.config.mjs` (the project's github.io path) and rebuild.

## Structure

```
public/            # static assets copied as-is (images, CNAME, og-image, résumé)
src/
  content/         # Markdown collections (journey, books, methods, podcast-topics)
  data/            # typed site data (site, socials, values, book)
  styles/          # tokens.css (theme) + global.css
  layouts/         # BaseLayout.astro (head/SEO, fonts, scroll script)
  components/      # section components
  pages/index.astro
  content.config.ts
astro.config.mjs
```
