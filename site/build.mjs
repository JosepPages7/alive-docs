// Builds the landing page: site/template.html x site/i18n/<lang>.json -> index.html (English, the site root)
// and <lang>/index.html for every other language. Run: node site/build.mjs (fails on a missing or extra text).
// A new language = a new site/i18n/<lang>.json with every key of en.json.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const site = dirname(fileURLToPath(import.meta.url));
const out = join(site, '..');
const BASE = 'https://joseppages7.github.io/alive-docs/'; // shortcut: the GitHub Pages address, change it when the custom domain exists
const DEFAULT = 'en';
const HERO = 'ceo-dashboard';
// widest CSS width each screenshot is shown at on desktop (landing.css: .duo halves, .wide 880px); the rest sit in a 1.15fr column, ~560px
const SHOT_WIDTH = { 'pivot-drilldown': 540, 'open-in-context': 540, studio: 880 };

const template = readFileSync(join(site, 'template.html'), 'utf8');
const css = readFileSync(join(site, 'landing.css'), 'utf8');
const langs = readdirSync(join(site, 'i18n')).filter(f => f.endsWith('.json')).map(f => f.slice(0, -5))
  .sort((a, b) => (a === DEFAULT ? -1 : b === DEFAULT ? 1 : a.localeCompare(b)));
const texts = Object.fromEntries(langs.map(l => [l, JSON.parse(readFileSync(join(site, 'i18n', `${l}.json`), 'utf8'))]));

// Every language has exactly the default's keys, none empty, and the same number of items in every | list.
const errors = [];
for (const l of langs) {
  for (const [k, v] of Object.entries(texts[DEFAULT])) {
    const t = texts[l][k];
    if (typeof t !== 'string' || !t.trim()) errors.push(`${l}.json: missing "${k}"`);
    else if (t.split('|').length !== v.split('|').length) errors.push(`${l}.json: "${k}" has ${t.split('|').length} items, en has ${v.split('|').length}`);
  }
  for (const k of Object.keys(texts[l])) if (!(k in texts[DEFAULT])) errors.push(`${l}.json: unknown "${k}"`);
}

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pathOf = l => (l === DEFAULT ? '' : `${l}/`);
const check = '<svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>';

function shot(name, captionKey, t, root) {
  const cap = esc(t[captionKey]);
  const img = `assets/landing/${name}`;
  let body;
  if (existsSync(join(out, `${img}-1600.webp`))) {
    // the hero is the LCP image: high priority, never lazy; the rest load as they near the viewport
    const load = name === HERO ? 'fetchpriority="high"' : 'loading="lazy"';
    const sizes = `(max-width: 53.75em) calc(100vw - 32px), ${SHOT_WIDTH[name] ?? 560}px`;
    body = `<img src="${root}${img}-1600.webp" srcset="${root}${img}-800.webp 800w, ${root}${img}-1600.webp 1600w" sizes="${sizes}" width="1600" height="900" alt="${cap}" ${load}>`;
  } else {
    // shortcut: a placeholder until the owner's screenshot exists; nothing goes public with one (decision 2026-11-22)
    const ph = join(site, 'placeholders', `${name}.html`);
    body = existsSync(ph) ? readFileSync(ph, 'utf8') : `<div class="shot-ph" role="img" aria-label="${cap}">${esc(t['shot.pending'])}</div>`;
  }
  return `<figure class="shot-fig">${body}<figcaption>${cap}</figcaption></figure>`;
}

// Template gallery: the 800 px image, a link to the 1600 px one (a plain link: the browser shows the full image).
function thumb(name, captionKey, t, root) {
  const cap = esc(t[captionKey]);
  const img = `assets/landing/${name}`;
  const body = existsSync(join(out, `${img}-1600.webp`))
    ? `<a href="${root}${img}-1600.webp"><img src="${root}${img}-800.webp" width="800" height="450" alt="${cap}" loading="lazy"></a>`
    : `<div class="shot-ph" role="img" aria-label="${cap}">${esc(t['shot.pending'])}</div>`;
  return `<figure class="shot-fig thumb">${body}<figcaption>${cap}</figcaption></figure>`;
}

// Short muted clips (the owner's screen recordings, edited with HyperFrames): assets/landing/video/<name>.mp4 + <name>.webp poster.
function video(name, captionKey, t, root) {
  const cap = esc(t[captionKey]);
  const file = `assets/landing/video/${name}`;
  const body = existsSync(join(out, `${file}.mp4`))
    ? `<video src="${root}${file}.mp4" poster="${root}${file}.webp" width="1600" height="900" muted loop playsinline controls preload="none" data-auto></video>`
    // shortcut: a placeholder until the owner's recording exists; nothing goes public with one
    : `<div class="shot-ph" role="img" aria-label="${cap}">${esc(t['video.pending'])}</div>`;
  return `<figure class="shot-fig vid">${body}<figcaption>${cap}</figcaption></figure>`;
}

const pages = [];
for (const l of langs) {
  const t = texts[l];
  const root = l === DEFAULT ? './' : '../';
  const canonical = BASE + pathOf(l);
  const alternates = langs.map(m => `<link rel="alternate" hreflang="${m}" href="${BASE}${pathOf(m)}">`)
    .concat(`<link rel="alternate" hreflang="x-default" href="${BASE}">`).join('\n');
  const langswitch = langs.map(m => (m === l ? `<b>${esc(texts[m]['lang.name'])}</b>`
    : `<a href="${root}${pathOf(m)}" hreflang="${m}" lang="${m}">${esc(texts[m]['lang.name'])}</a>`)).join(' · ');
  const special = { lang: l, root, canonical, alternates, langswitch, css };
  const html = template.replace(/\{\{([^}]+)\}\}/g, (whole, tag) => {
    if (tag in special) return special[tag];
    const [kind, arg] = tag.includes(':') ? tag.split(/:(.*)/s) : ['text', tag];
    const media = { shot, video, thumb }[kind];
    if (media) {
      const [name, cap] = arg.split('|');
      if (!(cap in t)) { errors.push(`template: unknown text "${cap}"`); return whole; }
      return media(name, cap, t, root);
    }
    if (!(arg in t)) { errors.push(`template: unknown text "${arg}"`); return whole; }
    if (kind === 'text') return esc(t[arg]);
    if (kind === 'list') return t[arg].split('|').map(i => `<li>${esc(i)}</li>`).join('');
    // a leading * marks the one item to stress (bold)
    if (kind === 'checks') return t[arg].split('|').map(i => `<li>${check}<span>${i.startsWith('*') ? `<strong>${esc(i.slice(1))}</strong>` : esc(i)}</span></li>`).join('');
    errors.push(`template: unknown tag "${tag}"`);
    return whole;
  });
  pages.push([pathOf(l), html]);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
for (const [dir, html] of pages) {
  mkdirSync(join(out, dir || '.'), { recursive: true });
  writeFileSync(join(out, dir, 'index.html'), html);
  console.log(`wrote ${dir}index.html`);
}
