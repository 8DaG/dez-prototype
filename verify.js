// Dež content QA gate. Run: node verify.js
// Exits non-zero on any failure. Contrast findings are WARN only (human judges).
global.window = {};
require('./dez-data.js');
const { ICONS, NUMBER_FORMS, TOPICS, POOL } = window.DEZ_DATA;

const errors = [];
const warnings = [];

// every POOL key has an ICONS entry, and vice versa (no orphan icons)
const poolKeys = new Set(POOL.map(p => p.key));
const iconKeys = new Set(Object.keys(ICONS));
for (const k of poolKeys) if (!iconKeys.has(k)) errors.push(`POOL entry "${k}" has no ICONS entry`);
for (const k of iconKeys) if (!poolKeys.has(k)) errors.push(`Orphan icon "${k}" has no POOL entry`);

// every NUMBER_FORMS key exists in POOL
for (const k of Object.keys(NUMBER_FORMS)) {
  if (!poolKeys.has(k)) errors.push(`NUMBER_FORMS entry "${k}" has no POOL entry`);
}

// no duplicate POOL keys
const seen = new Set();
for (const p of POOL) {
  if (seen.has(p.key)) errors.push(`Duplicate POOL key "${p.key}"`);
  seen.add(p.key);
}

// every POOL entry has key/sl/en/cls/topic and its topic exists in TOPICS
for (const p of POOL) {
  for (const field of ['key', 'sl', 'en', 'cls', 'topic']) {
    if (!p[field]) errors.push(`POOL entry "${p.key || '?'}" missing field "${field}"`);
  }
  if (p.topic && !TOPICS[p.topic]) errors.push(`POOL entry "${p.key}" references unknown topic "${p.topic}"`);
}

// contrast scan: dark navy family only legal as detail on light fills, never structural
const DARK_NAVY = ['#2c3350', '#1a2138', '#111726', '#1c2540', '#123', '#2c1c0e', '#3a2a1a', '#333', '#2b4370'];
for (const [key, svg] of Object.entries(ICONS)) {
  const hits = DARK_NAVY.filter(c => svg.includes(c));
  if (hits.length) warnings.push(`WARN contrast: icon "${key}" uses ${hits.join(', ')} — verify detail-on-light-fill only, never structural against the sky`);
}

console.log(`POOL: ${POOL.length}  ICONS: ${Object.keys(ICONS).length}  NUMBER_FORMS: ${Object.keys(NUMBER_FORMS).length}`);

if (warnings.length) {
  console.log(`\n${warnings.length} contrast warning(s):`);
  warnings.forEach(w => console.log(`  ${w}`));
}

if (errors.length) {
  console.log(`\n${errors.length} error(s):`);
  errors.forEach(e => console.log(`  ${e}`));
  process.exit(1);
}

console.log('\nverify.js: PASS');
