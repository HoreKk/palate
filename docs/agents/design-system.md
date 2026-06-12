# Palate Design System — "Signal"

The visual language for Palate's marketing + product surfaces. **Signal** is a
Swiss/structural direction: cool near-black canvas, a single blue accent,
hairline rules, sharp corners, and a clear two-typeface split — a grotesk
*display* face for headings and a monospace face demoted to *micro-labels*.

> Principle: **structure over decoration.** Let grid, rules, and type scale carry
> the design. One accent, used sparingly. No gradients-as-decoration, no emoji,
> no rounded "card with left-border-accent" tropes.

Everything below is self-contained — the full token set and component CSS are
inline. Use the tokens/classes; don't hand-pick hex values.

---

## 1. Typography

Two families, strict roles. Load both from Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

| Role | Family | Token | Weights | Used for |
|------|--------|-------|---------|----------|
| **Display** | Space Grotesk | `--display` | 400 / 500 / 600 / 700 | h1–h3, brand wordmark, big numbers, section titles |
| **Body / UI** | JetBrains Mono | `--mono` | 400 / 500 / 700 | paragraphs, buttons, labels, code, tables, micro-labels |

Rules:
- **Mono is an accent, not the headline voice.** Headlines, hero copy, and stat
  numbers are Space Grotesk. Mono carries body text, eyebrows, kickers, badges,
  metadata, and anything terminal/code-flavored.
- Set **tight tracking on display** (`letter-spacing: -.02em` to `-.025em`) at
  large sizes; positive tracking (`.12em–.2em`, uppercase) only on mono micro-labels.
- Brand wordmark: Space Grotesk 700, `letter-spacing: .2em`, uppercase `PALATE`.

### Type scale (display)

| Use | Size | Line-height | Tracking | Weight |
|-----|------|-------------|----------|--------|
| Hero h1 | `clamp(34px, 4.8vw, 62px)` | 1.04 | -.025em | 600 |
| Section h2 | `clamp(24px, 2.8vw, 36px)` | 1.1 | -.02em | 600 |
| Card / h3 | 16–21px | 1.2 | -.01em | 600 |
| Stat number | 40–52px | 1.0 | normal | 700 |

### Micro-labels (mono)

```
font: 10.5px JetBrains Mono;
letter-spacing: .16em–.2em;
text-transform: uppercase;
```
Kicker = accent color. Eyebrow / section-number = `--ink-3`.

---

## 2. Color

Cool near-black canvas, near-white ink, **one** blue accent. Paste this token
block as your `:root`:

```css
:root{
  /* surfaces — dark → light */
  --bg:#0c0d0f;        /* page background */
  --bg-2:#131519;      /* cards, panels */
  --bg-3:#181b21;      /* insets, avatars, hovered nav */
  --bg-tool:#0f1115;   /* terminal / code panels */

  /* lines */
  --line:#23262c;      /* default borders, dividers */
  --line-2:#333842;    /* stronger borders, controls */
  --hair:#1b1e23;      /* hairline rules between sections */

  /* ink — high → low emphasis */
  --ink:#eef0f3;       /* headings, primary text */
  --ink-2:#9aa1ad;     /* body, secondary */
  --ink-3:#5f6671;     /* captions, metadata, muted */

  /* accent — the only brand color */
  --accent:#5b9dff;        /* primary blue */
  --accent-dim:#5b9dff1c;  /* ~11% tint: fills, hover beds */
  --accent-2:#4cc4d6;      /* rare cyan secondary */
  --accent-ink:#0a0d12;    /* text/icons ON an accent fill */

  /* semantic */
  --good:#56c08a; --good-dim:#56c08a1f;  /* pass / correct call */
  --bad:#f0654a;  --bad-dim:#f0654a1f;   /* fail / missed call */
  --user:#c4d2ec;                         /* the player's own voice/turns */
}
```

Usage rules:
- **Accent is rationed.** Primary CTA, active nav item, links, focus rings,
  kickers, the "current" progress segment, and one highlighted state per view.
  If two things on a screen fight for accent, one of them is wrong.
- Body and UI text live in the **`--ink` ramp**, not the accent.
- **Tints** (`*-dim`, ~11% alpha) are for fill beds behind accent/semantic
  elements (selected choice, hot loop step, badges) — never solid accent blocks
  of large area.
- `--good` / `--bad` are **functional only** (outcomes, deltas, verdicts), never
  decorative. `--user` distinguishes the player's turns from the agent's.
- Selection: `::selection { background: var(--accent); color: var(--accent-ink); }`

### Accent swap
If you need to retheme, change only `--accent`, `--accent-dim`, and
`--accent-ink`. Curated alternates that keep the same lightness/chroma:
`#6c8cff` (indigo), `#4cc4d6` (cyan). Don't introduce a second saturated hue.

### Base element styles

```css
*{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{
  background:var(--bg);color:var(--ink);
  font-family:var(--mono);font-size:13.5px;line-height:1.6;
  -webkit-font-smoothing:antialiased;
  /* subtle top vignette — the only permitted "gradient", and it's near-flat */
  background-image:radial-gradient(130% 70% at 50% -8%, #15171c 0%, var(--bg) 55%);
  min-height:100vh;
}
::selection{background:var(--accent);color:var(--accent-ink);}
a{color:inherit;text-decoration:none;}
::-webkit-scrollbar{width:11px;height:11px;}
::-webkit-scrollbar-thumb{background:var(--line-2);border-radius:6px;border:3px solid var(--bg);}

.container{max-width:var(--maxw);margin:0 auto;padding:0 28px;}
@media(max-width:720px){.container{padding:0 22px;}}
```

---

## 3. Shape, spacing, structure

| Token / value | Use |
|---------------|-----|
| `border-radius: 5–6px` | buttons, cards, inputs, controls |
| `border-radius: 4px` | nav links, small chips, badges |
| `1px solid var(--line)` | default border / divider |
| `1px solid var(--line-2)` | controls, stronger separation |
| `1px solid var(--hair)` | section-to-section hairlines |
| `1.5px dashed var(--accent)` | the "decision point" cut line (product) |

- **Sharp, not pill.** Corners stay tight (≤6px). No fully-rounded cards or buttons.
- **Hairline grid is the signature.** Use ruled borders to structure sections,
  number them (`01 / 02 / 03` in mono), and lean on `display:grid` + `gap`.
- Container max width: `--maxw: 1140px`; page gutter `28px` (mobile `22px`).
- Compose rows/groups with flex/grid + `gap`, never inline-block + margins.

---

## 4. Components

Reuse the class, don't restyle inline. Full CSS below — paste alongside the
token block.

### Nav (sticky app/site bar)
```css
.nav{position:sticky;top:0;z-index:50;display:flex;align-items:center;gap:28px;
  height:56px;padding:0 28px;border-bottom:1px solid var(--line);
  background:rgba(12,13,15,.82);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);}
.nav-brand{font-family:var(--display);font-weight:700;letter-spacing:.2em;font-size:15px;}
.nav-links{display:flex;gap:6px;}
.nav-links a{padding:6px 12px;border-radius:4px;color:var(--ink-2);font-size:12.5px;
  white-space:nowrap;transition:color .15s,background .15s;}
.nav-links a:hover{color:var(--ink);background:var(--bg-3);}
.nav-links a.active{color:var(--accent);}
.nav-right{margin-left:auto;display:flex;align-items:center;gap:16px;}
```
Active nav item is the only accent in the bar; the brand wordmark stays `--ink`.

### Buttons
```css
.btn{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;border-radius:5px;
  white-space:nowrap;font-family:var(--mono);font-size:13px;font-weight:500;cursor:pointer;
  border:1px solid transparent;transition:filter .15s,background .15s,border-color .15s,transform .1s;}
.btn:active{transform:translateY(1px);}
.btn-accent{background:var(--accent);color:var(--accent-ink);font-weight:700;}
.btn-accent:hover{filter:brightness(1.08);}
.btn-ghost{background:transparent;border-color:var(--line-2);color:var(--ink);}
.btn-ghost:hover{border-color:var(--ink-3);background:var(--bg-2);}
.btn-lg{padding:14px 26px;font-size:14px;}
```
- `.btn-accent` — primary CTA, **one per view**.
- `.btn-ghost` — secondary. `.btn-lg` for hero scale.

### Cards & labels
```css
.card{background:var(--bg-2);border:1px solid var(--line);border-radius:6px;}
.card-pad{padding:22px;}

.kicker{font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--accent);}
.eyebrow{font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-3);}
.sect-num{font-family:var(--mono);color:var(--ink-3);font-size:12px;}
```

### Footer
```css
.foot{border-top:1px solid var(--line);margin-top:90px;padding:36px 0;}
.foot-in{display:flex;align-items:center;justify-content:space-between;gap:20px;
  flex-wrap:wrap;color:var(--ink-3);font-size:12px;}
.foot-brand{font-family:var(--display);font-weight:700;letter-spacing:.2em;color:var(--ink-2);}
.foot-links{display:flex;gap:18px;}
.foot-links a:hover{color:var(--ink);}
```

### Session mock (the one terminal motif)
Renders the anonymised Claude Code session card. This is the **single**
intentional terminal nod — `--bg-tool` panel, traffic-light dots, a dashed
accent "cut" line at the decision point. The rest of any page should *not* read
as an IDE.
```css
.mini{background:var(--bg-tool);border:1px solid var(--line);border-radius:5px;
  overflow:hidden;font-size:12px;}
.mini-bar{display:flex;align-items:center;gap:8px;padding:9px 13px;
  border-bottom:1px solid var(--line);color:var(--ink-3);}
.mini-dot{width:9px;height:9px;border-radius:50%;background:var(--line-2);}
.mini-dot.r{background:#c5563f;}.mini-dot.y{background:#caa14a;}.mini-dot.g{background:#7a9a55;}
.mini-body{padding:14px 15px;display:flex;flex-direction:column;gap:9px;}
.mini-tag{font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3);}
.mini-badge{font-size:9.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;
  color:var(--accent);background:var(--accent-dim);padding:2px 7px;border-radius:4px;display:inline-block;}
.mini-cut{position:relative;text-align:center;border-top:1.5px dashed var(--accent);margin:6px 0;}
.mini-cut span{position:relative;top:-9px;background:var(--bg-tool);padding:0 10px;
  color:var(--accent);font-size:9px;letter-spacing:.18em;text-transform:uppercase;}
```

---

## 5. Motion

- Transitions: 120–180ms on `color`, `background`, `border-color`, `filter`,
  `transform`. Buttons nudge `translateY(1px)` on `:active`.
- Reveal/entrance animations are fine in-product but must degrade to the visible
  end-state for print / reduced-motion. No infinite decorative loops.

---

## 6. Do / Don't

**Do**
- Lead with Space Grotesk headlines; keep mono for labels, body, code.
- Ration the blue accent; everything else is the ink ramp on near-black.
- Structure with hairline rules, numbered sections, and a strict grid.
- Keep corners sharp (≤6px) and borders 1px.

**Don't**
- Don't make everything monospace (that's the old "terminal" look we moved off).
- Don't add a second saturated accent hue, gradients-as-decoration, or emoji.
- Don't use `--good`/`--bad` decoratively.
- Don't hand-pick hex values — always reference the tokens above.
