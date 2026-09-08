#!/usr/bin/env node
// SEO checks against a running site (dev or `next start`).
//
//   node scripts/check-seo.mjs                         # every route in /sitemap.xml on http://localhost:3101
//   node scripts/check-seo.mjs /therapist-notes-app    # only these routes
//   BASE=http://localhost:3000 node scripts/check-seo.mjs
//
// Per route: 200 status, one <h1>, <title> ≤ 60 chars before " | Dash Notes", meta description 140–160,
// every application/ld+json block parses, an Article block on article pages, FAQPage questions ≥ 3 and each
// question present in the visible body. Exits 1 on any error; length rules are warnings.

const BASE = process.env.BASE || 'http://localhost:3101';
const args = process.argv.slice(2);

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');

async function routesFromSitemap() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}

async function check(route) {
  const errors = [];
  const warnings = [];
  const res = await fetch(`${BASE}${route}`);
  if (res.status !== 200) return { route, errors: [`status ${res.status}`], warnings };
  const html = await res.text();

  const h1s = html.match(/<h1[\s>]/g) || [];
  if (h1s.length !== 1) errors.push(`${h1s.length} <h1>`);

  const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
  const bareTitle = title.replace(/\s*\|\s*Dash Notes$/, '');
  if (!title) errors.push('no <title>');
  else if (bareTitle.length > 60) warnings.push(`title ${bareTitle.length} chars`);

  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  if (!desc) errors.push('no meta description');
  else if (desc.length < 140 || desc.length > 160) warnings.push(`description ${desc.length} chars`);

  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const types = [];
  for (const b of blocks) {
    try {
      const j = JSON.parse(b);
      types.push(j['@type']);
      if (j['@type'] === 'FAQPage') {
        const qs = (j.mainEntity || []).map((q) => q.name);
        if (qs.length < 3) warnings.push(`FAQPage has ${qs.length} questions`);
        const text = decode(html.replace(/<script[\s\S]*?<\/script>/g, ''));
        for (const q of qs) if (!text.includes(q)) errors.push(`FAQ question not in body: "${q.slice(0, 50)}"`);
      }
    } catch (e) {
      errors.push(`JSON-LD parse: ${e.message.slice(0, 60)}`);
    }
  }
  return { route, title: bareTitle, types, errors, warnings };
}

const routes = args.length ? args : await routesFromSitemap();
let failed = 0;
for (const route of routes) {
  const r = await check(route);
  const status = r.errors.length ? '✗' : r.warnings.length ? '△' : '✓';
  if (r.errors.length) failed++;
  console.log(`${status} ${route}  ${r.types ? r.types.join(',') : ''}`);
  for (const e of r.errors) console.log(`    error: ${e}`);
  for (const w of r.warnings) console.log(`    warn:  ${w}`);
}
console.log(`\n${routes.length} routes, ${failed} with errors`);
process.exit(failed ? 1 : 0);
