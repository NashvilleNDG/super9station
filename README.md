# Super 9 Station – Site Clone

A static clone of [Super 9 Station](https://www.super9tn.com/) (Murfreesboro gas & convenience store). Same structure, alignment, and text; you supply the images.

## Header and footer (all pages)

**All pages must use the same header and footer as the home page.** This keeps navigation and branding consistent across desktop and mobile.

- **Markup:** Copy the `<header class="header">…</header>` and `<footer class="footer">…</footer>` blocks from `index.html` into every other page (e.g. `about.html` and any future pages).
- **Styling:** All header and footer styles live in `styles.css` only. Every page must include `<link rel="stylesheet" href="styles.css" />` so the header and footer look identical. Do not duplicate or override header/footer styles in page-specific CSS (e.g. `about.css`).
- **Links:** On non-home pages, set the logo link to `index.html`, and point nav items to `index.html` or `index.html#section` (e.g. `index.html#food-menu`, `index.html#contact`) as needed.

## What’s included

- **index.html** – All sections from the original: hero, intro, Coffee/Hot Food/Cold Drinks/Snacks, Inside Super 9, Food Menu, Contact Us, Instagram, Popular Categories, Get Connected, Now Delivering, footer.
- **styles.css** – Layout and styling to match the original (responsive).
- **script.js** – “Top of page” link and mobile menu toggle.
- **assets/images/** – Folder for your images. See **assets/images/IMAGES.md** for the exact file names to use.

## How to run

1. Add your images to `assets/images/` using the names in `assets/images/IMAGES.md`.
2. Open `index.html` in a browser, or serve the folder with any static server (e.g. `npx serve .`).

## Text and structure

All visible text and section order match the live site. Links (Instagram, Facebook, TikTok, YouTube, DoorDash) point to the same URLs as the original.

Once your images are in place, the clone should match the original in structure, alignment, and content.
