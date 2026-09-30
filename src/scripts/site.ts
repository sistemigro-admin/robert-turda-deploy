import { dict } from '../data/content';

type Lang = keyof typeof dict;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Word-by-word split (hero headline, quote) ----------
function splitWords(root: HTMLElement) {
  let i = 0;
  const walk = (node: Node) => {
    for (const child of [...node.childNodes]) {
      if (child.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        for (const part of child.textContent!.split(/(\s+)/)) {
          if (!part) continue;
          if (/^\s+$/.test(part)) { frag.append(part); continue; }
          const w = document.createElement('span');
          w.className = 'w';
          w.style.setProperty('--i', String(i++));
          w.textContent = part;
          frag.append(w);
        }
        child.replaceWith(frag);
      } else walk(child);
    }
  };
  walk(root);
}

function splitAll(replay = false) {
  if (reduced) return;
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    splitWords(el);
    if (el.dataset.split === 'hero') {
      el.classList.remove('go');
      if (replay) el.style.setProperty('--base', '0ms');
      void el.offsetWidth; // commit the hidden state so the transition runs
      el.classList.add('go');
    }
  });
}

const STORAGE_KEY = 'rt-lang';

// ---------- Language toggle ----------
function applyLang(lang: Lang) {
  const d = dict[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const v = d[el.dataset.i18n!];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((el) => {
    const v = d[el.dataset.i18nHtml!];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-label]').forEach((el) => {
    const v = d[el.dataset.i18nLabel!];
    if (v !== undefined) el.setAttribute('aria-label', v);
  });
  document.title = d['meta.title'];
  document.querySelector('meta[name="description"]')?.setAttribute('content', d['meta.description']);
  splitAll(true);
  document.querySelectorAll<HTMLElement>('[data-lang-opt]').forEach((el) => {
    el.classList.toggle('text-chalk', el.dataset.langOpt === lang);
    el.classList.toggle('text-ash', el.dataset.langOpt !== lang);
  });
}

function storedLang(): Lang | null {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ro') return q;
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === 'en' || s === 'ro') return s;
  } catch {}
  return null;
}

let current: Lang = storedLang() ?? 'ro';
if (current !== 'ro') applyLang(current);
else splitAll();

document.querySelectorAll('[data-lang-toggle]').forEach((btn) =>
  btn.addEventListener('click', () => {
    current = current === 'ro' ? 'en' : 'ro';
    applyLang(current);
    try { localStorage.setItem(STORAGE_KEY, current); } catch {}
  }),
);

// ---------- Scroll reveal + stat count-up ----------
function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix ?? '';
  if (reduced) { el.textContent = target + suffix; return; }
  const start = performance.now();
  const dur = 800;
  const tick = (now: number) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

if (!reduced) {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => { el.textContent = '0' + (el.dataset.suffix ?? ''); });
}

const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const el = e.target as HTMLElement;
      el.classList.add('is-in');
      el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
      io.unobserve(el);
    }
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll('.reveal, .reveal-left, .reveal-scale, .reveal-zoom, .reveal-line, .draw, [data-counters]')
  .forEach((el) => io.observe(el));

// ---------- Header: scrolled state, progress bar, active section ----------
const header = document.getElementById('site-header');
let ticking = false;
function onScroll() {
  ticking = false;
  const max = document.documentElement.scrollHeight - innerHeight;
  header?.classList.toggle('is-scrolled', scrollY > 24);
  header?.style.setProperty('--progress', String(max > 0 ? Math.min(scrollY / max, 1) : 0));
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();

const spyLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-spy]')];
const spy = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      spyLinks.forEach((a) => a.classList.toggle('is-active', a.hash === '#' + e.target.id));
    }
  },
  { rootMargin: '-45% 0px -50% 0px' },
);
spyLinks.forEach((a) => { const t = document.querySelector(a.hash); if (t) spy.observe(t); });
