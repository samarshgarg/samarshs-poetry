# Publishing Samarsh's Poetry

The site is complete and committed to git in this folder. Here are the two
publish paths. Both take under a minute.

Your Vercel project already exists (I scaffolded it): **samarshs-poetry**
→ https://samarshs-poetry.vercel.app  *(currently shows a placeholder until you push the real files below)*

---

## ▶ Option A — Vercel (fastest, one command)

From this folder:

```bash
cd ~/samarsh-poetry
npx vercel --prod
```

- When prompted, log in (browser opens once).
- "Link to existing project?" → **Yes** → choose **samarshs-poetry**.
- It uploads the real `index.html`, `css/`, `js/`, etc. and gives you the live URL.

That's it — the full animated site goes live at
`https://samarshs-poetry.vercel.app`.

---

## ▶ Option B — GitHub, then Vercel auto-deploy

**1. Create the GitHub repo and push** (the repo is already committed locally):

If you have the GitHub CLI:
```bash
cd ~/samarsh-poetry
gh repo create samarshs-poetry --public --source=. --remote=origin --push
```

Or manually — create an empty repo named `samarshs-poetry` on github.com, then:
```bash
cd ~/samarsh-poetry
git branch -M main
git remote add origin https://github.com/<your-username>/samarshs-poetry.git
git push -u origin main
```

**2. Connect it to Vercel:**
- Go to https://vercel.com/new
- Import the `samarshs-poetry` GitHub repo.
- Framework preset: **Other** (it's a static site — no build step).
- Deploy. Every future `git push` will auto-redeploy.

---

## After publishing — add your images

See **IMAGE-BRIEF.md** for the 6 collection covers + 54 poem images
(each with an AI prompt and exact pixel size). Generate them, drop them in
`/images`, and ask to have them wired in (or follow `images/README.md`).

---

## Custom domain (optional)

In the Vercel project → **Settings → Domains**, add e.g. `samarshpoetry.com`
and follow the DNS instructions.
