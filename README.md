# Samarsh's Poetry

A graphically rich, motion-driven website for the poetry collection of **Samarsh Garg** —
54 poems curated into six themed collections, each with its own colour palette and typography.

**Live experience:** a dark "ink & aurora" aesthetic with an animated particle field,
aurora gradient background, custom cursor glow, smooth page-transition veils,
line-by-line poem illumination, and per-poem colour + font pairing.

## Structure

```
index.html          → shell: fonts, nav, background layers, footer
css/styles.css      → the entire visual system
js/poems.js         → all poems + collections as data (single source of truth)
js/app.js           → hash-router SPA engine + all motion
images/             → drop generated images here (see IMAGE-BRIEF.md)
IMAGE-BRIEF.md      → AI prompt + exact size for every image slot
vercel.json         → static hosting config
```

It's a **static site** — no build step, no dependencies to install. Google Fonts and
GSAP load from CDN; the site fully works even if GSAP fails.

## Run locally

```bash
cd samarsh-poetry
python3 -m http.server 8080   # then open http://localhost:8080
```
(or any static server; opening index.html via `file://` also mostly works).

## Routes (hash-based, so they work on any static host)

- `#/` — home / hero
- `#/collections` — the six collections
- `#/c/<key>` — a collection (heart, wounds, kindred, reflections, self, world)
- `#/p/<slug>` — a single poem page
- `#/all` — every poem, filterable
- `#/about` — about the poet

## Adding / editing poems

Everything lives in `js/poems.js`. Each poem is an object with `title`, `kicker`
(the catchy sub-line), `cat`, `accent` colour, `font` pairing, an `img` brief, and
`stanzas` (array of stanzas, each an array of lines). Add an object to `POEMS` and it
appears everywhere automatically.

## Images

Currently every image is a styled placeholder showing its AI prompt + size.
See **IMAGE-BRIEF.md** for the full shot list (6 collection covers + 54 poem images).
Generate them, drop them in `/images`, then wire them in (see `images/README.md`).

## Deploy

Static — deploy the folder as-is to Vercel, Netlify, GitHub Pages, etc.
`vercel.json` is included for Vercel.

---

*"These are not words but my emotions, time to time."* — Samarsh Garg
