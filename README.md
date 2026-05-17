# The Tribe Lodge — Official Website

A premium, modern, fast website for **The Tribe Lodge** in Hillside, Bulawayo, Zimbabwe.
Built with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**.

> Stay With Us, Create Memories.

## Features

- Cinematic hero with background video and tribal-suite poster fallback
- Single-page premium layout: Hero, Highlights, About, Rooms & Rates (3 signature suites), Services (6), Tours & Transfers, Experience (video walk-throughs), Photo Gallery (with lightbox), Location (Google Map), Contact (WhatsApp booking)
- Three uniquely styled presidential suites — **Tribal**, **Navy Velvet**, **Onyx** — each with image collage, $60/$70 pricing, features and CTA
- Sticky header with mobile drawer menu
- **Floating WhatsApp button → routed to UK number** (+44 7911 717 861)
- Per-number click-to-call for all 5 contact lines (Reception landline, Reservations, Mobile, UK/WhatsApp, Zambia)
- Tours section featuring Matobo Hills, Khami Ruins, Hwange National Park, Victoria Falls
- Optimised images via `next/image`, AVIF/WebP, smart `sizes`
- SEO: metadata, Open Graph, Twitter, `robots.ts`, `sitemap.ts`
- Custom design tokens (sand, ochre, clay, bark) matching the logo's African earth-tone aesthetic
- Mobile-first, accessible, animated reveals on scroll

## Tech Stack

- Next.js 14 + React 18 + TypeScript
- Tailwind CSS 3
- Lucide icons
- Google Fonts: Cormorant Garamond (display) + Inter (sans)

## Project structure

```
.
├─ public/
│  ├─ logo.jpg
│  ├─ images/             # img-01.jpg … img-24.jpg
│  └─ videos/             # video-1.mp4 … video-3.mp4
├─ src/
│  ├─ app/                # layout, page, globals.css, robots, sitemap
│  ├─ components/         # Header, Hero, Rooms, Tours, Gallery, …
│  └─ lib/site.ts         # All editable site content
├─ tailwind.config.ts
├─ next.config.mjs
└─ package.json
```

All editable content (phones, prices, address, services, room features, tours)
lives in `src/lib/site.ts`.

---

## 1. Install dependencies

Requires **Node.js 18.17+** (or 20+ recommended).

```bash
npm install
```

## 2. Prepare assets (one-time)

The source assets are in the project root: `Logo.jpg` and `images/`.
Run this PowerShell snippet once to copy them into `public/` with clean filenames:

```powershell
$root  = $PSScriptRoot; if (-not $root) { $root = (Get-Location).Path }
$src   = Join-Path $root "images"
$dstI  = Join-Path $root "public\images"
$dstV  = Join-Path $root "public\videos"
New-Item -ItemType Directory -Force -Path $dstI, $dstV | Out-Null
$i = 1
Get-ChildItem -Path $src -Filter "*.jpeg" | Sort-Object Name | ForEach-Object {
  Copy-Item $_.FullName (Join-Path $dstI ("img-{0:D2}.jpg" -f $i)) -Force; $i++
}
$j = 1
Get-ChildItem -Path $src -Filter "*.mp4" | Sort-Object Name | ForEach-Object {
  Copy-Item $_.FullName (Join-Path $dstV ("video-{0}.mp4" -f $j)) -Force; $j++
}
Copy-Item (Join-Path $root "Logo.jpg") (Join-Path $root "public\logo.jpg") -Force
```

## 3. Run locally

```bash
npm run dev
```

Open <http://localhost:3000>

## 4. Build for production

```bash
npm run build
npm start
```

---

## Push to GitHub

This project ships ready to push to <https://github.com/Kuda-ux/tribe-lodge>:

```bash
git init
git add .
git commit -m "Initial commit — The Tribe Lodge website"
git branch -M main
git remote add origin https://github.com/Kuda-ux/tribe-lodge.git
git push -u origin main
```

## Deploy on Vercel

1. Visit <https://vercel.com/new> and import the GitHub repository.
2. Framework preset: **Next.js** (auto-detected).
3. Build command: `npm run build`. Output: `.next` (defaults).
4. Click **Deploy**. Vercel will give you a free `*.vercel.app` URL.
5. (Optional) Add your custom domain under **Settings → Domains**.

> ⚠️ `public/images/` and `public/videos/` ship with the repo at deploy time —
> do not add them to `.gitignore`.

---

## Editing content

- **Phones, address, email, prices, room features, services, tours**: `src/lib/site.ts`
- **Hero copy & background video**: `src/components/Hero.tsx`
- **Brand colours**: `tailwind.config.ts` (`sand`, `ochre`, `clay`, `bark`)
- **SEO meta**: `src/app/layout.tsx`

---

## Contact (lodge)

- **Address**: 3 Knotts Way, Hillside, Bulawayo, Zimbabwe
- **Reception (Landline)**: +263 292 240 074
- **Reservations (Mobile)**: +263 77 876 1925
- **Mobile**: +263 78 423 6202
- **WhatsApp / UK Office**: +44 7911 717 861
- **Zambia Office**: +260 97 676 3687

© The Tribe Lodge. All rights reserved.
