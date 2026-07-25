/* =============================================================
   Samarsh's Poetry — SPA engine (vanilla JS)
   hash router · view rendering · motion orchestration
   ============================================================= */
(function () {
  const { CATEGORIES, POEMS, FONTS } = window.SITE;
  const app = document.getElementById("app");
  const veil = document.getElementById("veil");
  const nav = document.getElementById("nav");
  const hasGSAP = typeof window.gsap !== "undefined";
  if (hasGSAP && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  const catList = Object.keys(CATEGORIES);
  const poemBySlug = Object.fromEntries(POEMS.map(p => [p.slug, p]));
  const poemsInCat = c => POEMS.filter(p => p.cat === c);
  const esc = s => String(s).replace(/[&<>"]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));

  /* ---------- theme accents ---------- */
  function setAccent(a, a2) {
    document.documentElement.style.setProperty("--accent", a);
    document.documentElement.style.setProperty("--accent-2", a2 || a);
  }

  /* ---------- SVG snippets ---------- */
  const ARROW = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="18" height="18"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const IMG_ICON = `<svg class="ph-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="M4 17l5-5 4 4 3-3 4 4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  /* image placeholder block — shows the real image automatically if the file
     exists, otherwise falls back to the AI-brief card. file = images/<name>.jpg */
  function imgPlaceholder(img, tag, file) {
    const realImg = file
      ? `<img class="real-img" src="${file}" alt="" loading="lazy"
           onload="this.closest('.img-ph').classList.add('has-img')"
           onerror="imgFallback(this)">`
      : "";
    return `
    <figure class="img-ph ${tag === 'hero' ? 'hero-img' : ''}">
      ${realImg}
      <div class="ph-content">
        <span class="ph-tag">Image placeholder — upload later</span>
        ${IMG_ICON}
        <span class="ph-label">AI image brief</span>
        <span class="ph-desc">${esc(img.prompt)}</span>
        <span class="ph-dim">${img.w} × ${img.h}px · landscape</span>
      </div>
    </figure>`;
  }
  // try .jpg, then .png, then give up and keep the placeholder card
  window.imgFallback = function (el) {
    if ((el.dataset.tries || "jpg") === "jpg") {
      el.dataset.tries = "png";
      el.src = el.src.replace(/\.jpg(\?.*)?$/i, ".png");
    } else {
      el.remove();
    }
  };

  /* =============================================================
     VIEWS
     ============================================================= */

  function viewHome() {
    setAccent(CATEGORIES.heart.accent, CATEGORIES.heart.accent2);
    const words = ["love", "hope", "time", "family", "silence", "destiny", "coffee", "farewell", "dawn", "soul"];
    const floaters = words.map((w, i) => {
      const top = (i * 9 + 6) % 88, left = (i * 37 + 5) % 90;
      const dur = 9 + (i % 5) * 2.5, delay = -(i * 1.7);
      return `<span style="top:${top}%;left:${left}%;animation-duration:${dur}s;animation-delay:${delay}s">${w}</span>`;
    }).join("");

    const cards = catList.map((key, i) => {
      const c = CATEGORIES[key], n = poemsInCat(key).length;
      return `
      <a class="col-card reveal" href="#/c/${key}" data-link
         style="--c:${c.accent}" data-glyph="${c.glyph}">
        <div class="col-index">Collection ${String(i + 1).padStart(2, "0")}</div>
        <div>
          <h3>${esc(c.name)}</h3>
          <p class="col-tag">${esc(c.tagline)}</p>
        </div>
        <div class="col-foot">
          <span class="col-count">${n} poem${n > 1 ? "s" : ""}</span>
          <span class="col-go">${ARROW}</span>
        </div>
      </a>`;
    }).join("");

    return `
      <section class="hero">
        <div class="floaters" aria-hidden="true">${floaters}</div>
        <div class="hero-inner">
          <p class="hero-kicker">A Collection by Samarsh Garg</p>
          <h1 class="hero-title"><span class="l1">Samarsh's</span><span class="l2">Poetry</span></h1>
          <p class="hero-sub">Over fifty verses on love and loss, family and solitude, time and the world — where the heart writes faster than the mind can follow.</p>
          <div class="hero-meta">
            <div class="m"><b>${POEMS.length}</b><span>Poems</span></div>
            <div class="m"><b>${catList.length}</b><span>Collections</span></div>
            <div class="m"><b>∞</b><span>Emotions</span></div>
          </div>
          <div class="hero-cta">
            <a class="btn btn-primary" href="#/collections" data-link>Explore the Collections ${ARROW}</a>
            <a class="btn btn-ghost" href="#/all" data-link>Read every poem</a>
          </div>
        </div>
        <div class="scroll-hint"><span>Scroll</span><span class="line"></span></div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head reveal">
            <p class="eyebrow">Six worlds of verse</p>
            <h2>Wander through the collections</h2>
            <p>Every poem here was written in a real moment — a first meeting, a goodbye, a quiet morning. They are gathered into six moods so you can follow whichever one your heart is in tonight.</p>
          </div>
          <div class="collections">${cards}</div>
        </div>
      </section>

      <section class="section" style="padding-top:0">
        <div class="wrap">
          <div class="section-head reveal" style="text-align:center;margin:0 auto;max-width:780px">
            <p class="eyebrow">A word from the poet</p>
            <h2 style="font-style:italic">“These are not words but my emotions, time to time.”</h2>
            <p style="margin:0 auto">Thank you for reading. Take your time — poetry, like people, reveals itself slowly.</p>
          </div>
        </div>
      </section>
    `;
  }

  function viewCollections() {
    setAccent(CATEGORIES.heart.accent, CATEGORIES.heart.accent2);
    const cards = catList.map((key, i) => {
      const c = CATEGORIES[key], n = poemsInCat(key).length;
      return `
      <a class="col-card reveal" href="#/c/${key}" data-link style="--c:${c.accent}" data-glyph="${c.glyph}">
        <div class="col-index">Collection ${String(i + 1).padStart(2, "0")}</div>
        <div>
          <h3>${esc(c.name)}</h3>
          <p class="col-tag">${esc(c.tagline)}</p>
        </div>
        <div class="col-foot"><span class="col-count">${n} poem${n > 1 ? "s" : ""}</span><span class="col-go">${ARROW}</span></div>
      </a>`;
    }).join("");
    return `
      <section class="section" style="padding-top:150px">
        <div class="wrap">
          <div class="section-head reveal">
            <p class="eyebrow">The Collections</p>
            <h2>Choose the mood you're in</h2>
            <p>Six curated worlds gathered from over fifty poems. Each carries its own colour, its own typography, its own weather.</p>
          </div>
          <div class="collections">${cards}</div>
        </div>
      </section>`;
  }

  function viewCategory(key) {
    const c = CATEGORIES[key];
    if (!c) return viewNotFound();
    setAccent(c.accent, c.accent2 || c.accent);
    const poems = poemsInCat(key);
    const cards = poems.map((p, i) => `
      <a class="poem-card reveal" href="#/p/${p.slug}" data-link style="--c:${p.accent || c.accent}">
        <span class="pc-arrow">${ARROW}</span>
        <span class="pc-num">№ ${String(i + 1).padStart(2, "0")}</span>
        <h3>${esc(p.title)}</h3>
        <p class="pc-kick">${esc(p.kicker)}</p>
        <p class="pc-line">${esc(firstLine(p))}</p>
      </a>`).join("");

    return `
      <section class="cat-hero">
        <div class="wrap">
          <p class="eyebrow reveal">${esc(c.glyph)} &nbsp;Collection · ${poems.length} poems</p>
          <h1 class="reveal">${esc(c.name)}</h1>
          <p class="lead reveal">${esc(c.blurb)}</p>
          <div class="reveal imgspec">${imgPlaceholder(c.img, 'hero', `images/cover-${key}.jpg`)}</div>
        </div>
      </section>
      <section class="section" style="padding-top:20px">
        <div class="wrap">
          <div class="poem-grid">${cards}</div>
          <div class="center"><a class="back-to-cat" href="#/collections" data-link>← All collections</a></div>
        </div>
      </section>`;
  }

  function firstLine(p) {
    const l = p.stanzas?.[0]?.[0] || "";
    return l.length > 64 ? l.slice(0, 61) + "…" : l;
  }

  function viewPoem(slug) {
    const p = poemBySlug[slug];
    if (!p) return viewNotFound();
    const c = CATEGORIES[p.cat];
    const accent = p.accent || c.accent;
    setAccent(accent, c.accent2 || accent);
    const fp = FONTS[p.font] || FONTS.elegant;
    document.documentElement.style.setProperty("--p-title", fp.title);
    document.documentElement.style.setProperty("--p-body", fp.body);

    const body = p.stanzas.map((st, si) => {
      const lines = st.map(l => `<span class="vline">${esc(l)}</span>`).join("");
      return `<p class="stanza${si === 0 ? " drop" : ""}">${lines}</p>`;
    }).join("");

    // prev / next within full sequence
    const idx = POEMS.findIndex(x => x.slug === slug);
    const prev = POEMS[(idx - 1 + POEMS.length) % POEMS.length];
    const next = POEMS[(idx + 1) % POEMS.length];

    return `
      <article class="poem-page">
        <div class="wrap">
          <header class="poem-hero">
            <p class="p-cat">${esc(c.glyph)} &nbsp;${esc(c.name)}</p>
            <h1>${esc(p.title)}</h1>
            <p class="p-kick">${esc(p.kicker)}</p>
            <div class="p-rule"></div>
          </header>

          ${imgPlaceholder(p.img, 'hero', `images/poem-${p.slug}.jpg`)}

          <div class="poem-body">${body}</div>

          <div class="center"><a class="back-to-cat" href="#/c/${p.cat}" data-link>← Back to ${esc(c.name)}</a></div>

          <nav class="poem-nav">
            <a class="pnav prev" href="#/p/${prev.slug}" data-link>
              <span class="pn-label">← Previous</span>
              <span class="pn-title">${esc(prev.title)}</span>
            </a>
            <a class="pnav next" href="#/p/${next.slug}" data-link>
              <span class="pn-label">Next →</span>
              <span class="pn-title">${esc(next.title)}</span>
            </a>
          </nav>
        </div>
      </article>`;
  }

  function viewAll() {
    setAccent(CATEGORIES.heart.accent, CATEGORIES.heart.accent2);
    const chips = [`<button class="chip active" data-filter="all">All · ${POEMS.length}</button>`]
      .concat(catList.map(k => `<button class="chip" data-filter="${k}" style="--c:${CATEGORIES[k].accent}">${esc(CATEGORIES[k].name)}</button>`))
      .join("");
    const items = POEMS.map(p => {
      const c = CATEGORIES[p.cat];
      return `
      <a class="all-item reveal" href="#/p/${p.slug}" data-link data-cat="${p.cat}" style="--c:${p.accent || c.accent}">
        <span class="ai-dot"></span>
        <span class="ai-cat">${esc(c.name)}</span>
        <h3>${esc(p.title)}</h3>
        <p class="ai-kick">${esc(p.kicker)}</p>
      </a>`;
    }).join("");
    return `
      <section class="section" style="padding-top:150px">
        <div class="wrap">
          <div class="section-head reveal">
            <p class="eyebrow">The Complete Works</p>
            <h2>Every poem, all in one place</h2>
            <p>All ${POEMS.length} poems in the collection. Filter by collection, or simply follow your curiosity.</p>
          </div>
          <div class="filter-bar reveal">${chips}</div>
          <div class="all-list" id="all-list">${items}</div>
        </div>
      </section>`;
  }

  function viewAbout() {
    setAccent(CATEGORIES.heart.accent, CATEGORIES.heart.accent2);
    return `
      <section class="about-wrap">
        <p class="eyebrow reveal">About</p>
        <h1 class="reveal">The poet behind the pages</h1>
        <p class="reveal">This is <span class="hl">Samarsh's Poetry</span> — a personal collection of more than fifty poems written by <span class="hl">Samarsh Garg</span> over the seasons of a life: the rush of a first meeting, the quiet of a goodbye, a mother's love, a weekend, a cup of coffee, and the endless questions that keep a thoughtful heart awake.</p>
        <p class="reveal">The poems arrived in no particular order, as feelings do. Here they have been gathered into six collections so that whatever you are carrying tonight, there is a page that already understands it.</p>
        <div class="about-stats reveal">
          <div class="m"><b>${POEMS.length}</b><span>Poems</span></div>
          <div class="m"><b>${catList.length}</b><span>Collections</span></div>
          <div class="m"><b>1</b><span>Honest heart</span></div>
        </div>
        <p class="reveal" style="font-style:italic;color:var(--ink)">“I might be weak at expressing my true feelings — pardon me. But these are not words, they are my emotions, time to time.”</p>
        <div class="logo-note reveal">
          <h4>A note on the logo</h4>
          <p style="font-size:1rem;margin:0;color:var(--ink-soft)">The mark pairs a hand-drawn <em>quill</em> with the wordmark “Samarsh's&nbsp;Poetry” — the quill for the act of writing, the ink-drop beneath it for the single honest feeling each poem begins from. The italic gradient wordmark echoes dawn: rose warming into gold, the recurring image across these pages.</p>
        </div>
      </section>`;
  }

  function viewNotFound() {
    return `
      <section class="section" style="padding-top:180px;text-align:center">
        <div class="wrap">
          <p class="eyebrow">Lost in the margins</p>
          <h2 style="font-family:var(--display);font-size:2.6rem">This page drifted away…</h2>
          <p style="color:var(--ink-soft)">Like some feelings, it isn't where we left it.</p>
          <div class="center" style="margin-top:26px"><a class="btn btn-primary" href="#/" data-link>Return home ${ARROW}</a></div>
        </div>
      </section>`;
  }

  /* =============================================================
     ROUTER
     ============================================================= */
  function parseRoute() {
    const h = (location.hash || "#/").replace(/^#/, "");
    const parts = h.split("/").filter(Boolean); // e.g. ['c','heart']
    if (parts.length === 0) return { name: "home" };
    if (parts[0] === "collections") return { name: "collections" };
    if (parts[0] === "all") return { name: "all" };
    if (parts[0] === "about") return { name: "about" };
    if (parts[0] === "c") return { name: "category", key: parts[1] };
    if (parts[0] === "p") return { name: "poem", slug: parts[1] };
    return { name: "notfound" };
  }

  function render(route) {
    let html, title = "Samarsh's Poetry";
    switch (route.name) {
      case "home": html = viewHome(); break;
      case "collections": html = viewCollections(); title = "Collections · Samarsh's Poetry"; break;
      case "category": {
        html = viewCategory(route.key);
        const c = CATEGORIES[route.key]; if (c) title = c.name + " · Samarsh's Poetry";
        break;
      }
      case "poem": {
        html = viewPoem(route.slug);
        const p = poemBySlug[route.slug]; if (p) title = p.title + " · Samarsh's Poetry";
        break;
      }
      case "all": html = viewAll(); title = "All Poems · Samarsh's Poetry"; break;
      case "about": html = viewAbout(); title = "About · Samarsh's Poetry"; break;
      default: html = viewNotFound(); title = "Not found · Samarsh's Poetry";
    }
    app.innerHTML = html;
    document.title = title;
    highlightNav(route);
    afterRender(route);
  }

  function highlightNav(route) {
    document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
    const map = { home: "#/", collections: "#/collections", all: "#/all", about: "#/about" };
    const target = map[route.name];
    if (target) {
      const el = document.querySelector(`.nav-links a[href="${target}"]`);
      if (el) el.classList.add("active");
    }
  }

  /* ---------- post-render motion ---------- */
  function afterRender(route) {
    // reveal on scroll
    const reveals = app.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          e.target.style.transitionDelay = Math.min(i * 60, 300) + "ms";
          e.target.classList.add("show");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(r => io.observe(r));

    if (route.name === "poem") animatePoem();
    if (route.name === "all") bindFilters();

    // move focus / scroll to top handled by navigate()
  }

  // line-by-line illumination of the poem
  function animatePoem() {
    const lines = Array.from(app.querySelectorAll(".vline"));
    if (!lines.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = lines.indexOf(e.target);
          e.target.style.transitionDelay = "0ms";
          // small stagger relative to its stanza neighbours already handled by scroll timing
          e.target.classList.add("lit");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.5, rootMargin: "0px 0px -10% 0px" });
    // stagger within view: give each line a delay based on order
    lines.forEach((l, i) => { l.style.transitionDelay = (i % 6) * 70 + "ms"; io.observe(l); });
    // ensure the very first stanza lights immediately
    lines.slice(0, 6).forEach((l, i) => setTimeout(() => l.classList.add("lit"), 200 + i * 90));
  }

  function bindFilters() {
    const chips = app.querySelectorAll(".chip");
    const items = app.querySelectorAll(".all-item");
    chips.forEach(chip => chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const f = chip.dataset.filter;
      items.forEach(it => {
        const show = f === "all" || it.dataset.cat === f;
        it.style.display = show ? "" : "none";
        if (show) { it.classList.remove("show"); requestAnimationFrame(() => it.classList.add("show")); }
      });
    }));
  }

  /* ---------- navigation with veil transition ---------- */
  let navigating = false;
  function navigate(hash) {
    if (navigating) return;
    if (hash === location.hash) { render(parseRoute()); window.scrollTo({ top: 0 }); return; }
    navigating = true;
    veil.classList.remove("out");
    veil.classList.add("in");
    setTimeout(() => {
      location.hash = hash;          // triggers hashchange -> render
      window.scrollTo({ top: 0 });
      veil.classList.remove("in");
      veil.classList.add("out");
      setTimeout(() => { veil.classList.remove("out"); navigating = false; }, 600);
    }, 380);
  }

  // intercept internal links
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-link]");
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    closeMenu();
    navigate(href);
  });

  window.addEventListener("hashchange", () => {
    if (!navigating) { render(parseRoute()); window.scrollTo({ top: 0 }); }
    else render(parseRoute());
  });

  /* =============================================================
     GLOBAL CHROME: nav scroll, mobile menu, cursor, canvas, progress
     ============================================================= */
  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 40);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const pct = h > 0 ? (y / h) * 100 : 0;
    document.querySelector(".scroll-progress").style.width = pct + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  function closeMenu() { links.classList.remove("open"); toggle.classList.remove("open"); }
  toggle.addEventListener("click", () => { links.classList.toggle("open"); toggle.classList.toggle("open"); });

  // cursor glow
  const glow = document.querySelector(".cursor-glow");
  window.addEventListener("pointermove", (e) => {
    if (window.matchMedia("(hover:hover)").matches) {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    }
  }, { passive: true });

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- ink particle canvas ---------- */
  (function ink() {
    const canvas = document.getElementById("ink-canvas");
    const ctx = canvas.getContext("2d");
    let w, h, parts = [];
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    function resize() {
      w = canvas.width = window.innerWidth * devicePixelRatio;
      h = canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    }
    function seed() {
      const count = Math.min(70, Math.floor(window.innerWidth / 22));
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: (Math.random() * 1.8 + 0.4) * devicePixelRatio,
        vx: (Math.random() - .5) * .18 * devicePixelRatio,
        vy: (Math.random() - .5) * .18 * devicePixelRatio,
        a: Math.random() * .5 + .1
      }));
    }
    function accentRGB() {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
      return v || "#e8577d";
    }
    function frame() {
      ctx.clearRect(0, 0, w, h);
      const col = accentRGB();
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = col;
        ctx.globalAlpha = p.a;
        ctx.fill();
      }
      // faint connecting lines
      ctx.globalAlpha = 1;
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i], b = parts[j];
          const dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
          const max = 130 * devicePixelRatio;
          if (d < max) {
            ctx.strokeStyle = col;
            ctx.globalAlpha = (1 - d / max) * .12;
            ctx.lineWidth = devicePixelRatio * .5;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }
    let raf;
    resize(); seed();
    if (!reduce) frame();
    window.addEventListener("resize", () => { resize(); seed(); });
  })();

  /* ---------- boot ---------- */
  if (!location.hash) location.hash = "#/";
  render(parseRoute());
  onScroll();
})();
