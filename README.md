# ClickDes — Luxury Interior Design Studio

A fast, fully static website for ClickDes. There's no backend, database or admin panel: all content lives in plain files inside this project.

- **Pages:** Home, Studio, Services, Portfolio, Contact, plus one page per project at `/projects/<slug>/`
- **Output:** `pnpm build` generates a static site (HTML/CSS/JS) in the `out/` folder
- **External services:** contact form (Formspree), WhatsApp, Google Maps embed, social links

---

## 1. Run locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static site written to ./out
```

## 2. Edit site-wide details — `site.config.ts`

Every frequently changed value is in **one file**, `site.config.ts`:

| What                | Key                           |
| ------------------- | ----------------------------- |
| Phone, address, opening hours | `contact` |
| WhatsApp number     | `whatsappNumber` (digits only, international format, e.g. `967771234567`) |
| WhatsApp greeting   | `whatsappMessage`             |
| Social media links  | `social` (add, remove or reorder entries) |
| Contact form        | `formEndpoint`                |
| Google Map          | `mapEmbedUrl`                 |
| Domain (for SEO & sitemap) | `url`                  |

Save the file and every page updates.

## 3. Add or edit a project

Projects are stored in **`data/projects.json`**, and each project is one block:

```json
{
  "slug": "modern-villa",
  "title": "Modern Villa",
  "location": "Mukalla, Yemen",
  "category": "Residential",
  "year": "2026",
  "accent": "terracotta",
  "featured": true,
  "coverImage": { "src": "/images/projects/modern-villa/cover.webp", "width": 1600, "height": 1000, "alt": "Describe the photo" },
  "description": "One or two sentences shown on cards and at the top of the project page.",
  "concept": "A short paragraph about the design idea.",
  "details": [{ "label": "Area", "value": "300 m²" }],
  "images": [
    { "src": "/images/projects/modern-villa/01.webp", "width": 1600, "height": 1000, "alt": "Describe the photo" }
  ]
}
```

- `slug` sets the page address (`/projects/modern-villa/`), so use lowercase letters and dashes only.
- `category` sets the Portfolio filter, and must be `Residential` or `Commercial`.
- `accent` sets the project's colour tag, and can be `saffron`, `forest`, `terracotta` or `blush`.
- `featured: true` shows the project on the home page. Four featured projects looks best.
- The order of projects in the file is the order they appear on the site.

Remember to separate projects with a comma. A JSON validator such as jsonlint.com can check the file for you.

## 4. Add project images

1. Create a folder: `public/images/projects/<slug>/`
2. Export photos as **WebP**, about **1600–2000px** on the long side and under **300 KB** each. [Squoosh](https://squoosh.app) is free and works well for this.
3. Put the files in the folder and reference them as `/images/projects/<slug>/<file>.webp`.
4. Enter each image's real `width` and `height` (in pixels) so the page doesn't jump around while loading. Wide images (landscape) automatically span the full gallery width.
5. Always write a short, descriptive `alt` text for accessibility and SEO.

## 5. Replace the logo

- **Header & footer logo:** edit `components/logo.tsx`. You can replace its contents with `<img src="/images/logo/logo.svg" alt="ClickDes" className={className} />` and put your file in `public/images/logo/`.
- **Browser tab icon:** replace `public/icon.svg`.

## 6. Configure the contact form (Formspree)

1. Create a free account at [formspree.io](https://formspree.io) and add a new form.
2. Copy its endpoint, for example `https://formspree.io/f/abcdwxyz`.
3. Paste it into `formEndpoint` in `site.config.ts`.

The form sends Name, Email, Phone, Project Type and Message, and includes a hidden spam trap. If you prefer Netlify Forms or EmailJS, change the endpoint and the `fetch` call in `components/contact-form.tsx`.

## 7. Change the map

Open Google Maps, search for your studio, then go to **Share → Embed a map** and copy only the URL inside `src="…"`. Paste it into `mapEmbedUrl`.

## 8. Change colours & fonts

The colour palette (cream, ink, terracotta, forest, saffron, blush, sand) is defined in `app/globals.css`, and fonts are set in `app/layout.tsx`.

---

## Deployment

Every host below serves the static output. Use `pnpm build` as the build command and `out` as the output directory.

- **Vercel:** import the Git repository at vercel.com/new. Settings are detected automatically.
- **Netlify:** Add new site → Import from Git. Set the build command to `pnpm build` and the publish directory to `out`.
- **Cloudflare Pages:** Create project → Connect to Git. Set the build command to `pnpm build` and the output directory to `out`.
- **GitHub Pages:** run `pnpm build`, add an empty `out/.nojekyll` file, then publish the `out/` folder (for example with the `actions/deploy-pages` GitHub Action). If the site is served from `username.github.io/repo`, add `basePath: '/repo'` to `next.config.mjs`.

### Custom domain

1. In your host's dashboard, open **Domains** and add `clickdes.com` (and `www.clickdes.com`).
2. At your domain registrar, create the DNS records your host shows you, which is usually an `A` record for the root domain and a `CNAME` for `www`.
3. Wait for DNS to update (from a few minutes up to 48 hours). HTTPS is issued automatically.
4. Update `url` in `site.config.ts` so the sitemap and SEO tags use your domain.
