# StaySpot — Next.js optimisation & deploy (starter)

A small **boutique-stays** app built with **Next.js 15 (App Router) + TypeScript**. It already
**works**, but it is **not optimised** and some routes are broken. Your job is to make it
production-ready and deploy it live.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build — must finish with 0 errors
```

> Heads up: as shipped, the stay photos come from `https://picsum.photos`. Once you switch to
> `next/image` you must allow that host in `next.config.mjs` (Task 5), or the images will error.

## What to do

Follow the `// TODO` comments in the code. Each maps to a task in the assignment brief:

- **Task 1** — `app/page.tsx`: split Server vs Client Components (extract the search into its own
  `"use client"` component; make the page a Server Component).
- **Task 2** — `app/stay/[id]/page.tsx`: `await` the `params` Promise and call `notFound()` for a bad id.
- **Task 3** — add `app/loading.tsx`, `app/not-found.tsx`, and `app/error.tsx` (`"use client"`).
- **Task 4** — `components/StayCard.tsx` and the detail page: use `next/image` (dimensions,
  `priority`, `sizes`).
- **Task 5** — `next.config.mjs`: add `images.remotePatterns` for `picsum.photos`.
- **Task 6** — `app/layout.tsx` + `app/globals.css`: load a font with `next/font` and use the logo in `/public`.
- **Task 7** — add root `metadata` (a `title` and a `description`) in `app/layout.tsx`.
- **Task 8** — run a **Lighthouse** audit and save a screenshot in `/lighthouse`.
- **Task 9** — `npm run build` must pass, then **deploy** and paste your link below.

## My deployed link

<!-- Task 9: paste your live URL here before you zip and submit -->
**Live URL:** _add your deployed link here_

## Files you will touch / create

```
app/layout.tsx            (edit)
app/page.tsx              (edit)
app/stay/[id]/page.tsx    (edit)
app/loading.tsx           (create)
app/not-found.tsx         (create)
app/error.tsx             (create)
components/StayCard.tsx    (edit)
components/SearchBar.tsx   (create)
next.config.mjs           (edit)
app/globals.css           (edit)
lighthouse/report.png     (create — your audit screenshot)
```
