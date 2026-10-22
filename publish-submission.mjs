#!/usr/bin/env node
/**
 * Organizer-only importer. Contestant agents must never run this file or see
 * the destination repository. Usage:
 *   node publish-submission.mjs --check /path/to/model-slug
 *   node publish-submission.mjs /path/to/model-slug
 *
 * This validates and stages an isolated artifact in submissions/<slug>.
 * The organizer then commits and pushes ONLY the new submission folder.
 */
import { lstat, readdir, readFile, mkdir, copyFile, rm } from 'node:fs/promises';
import { join, resolve, dirname, basename, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(fileURLToPath(import.meta.url));
const submissionsRoot = join(repoRoot, 'submissions');
const allowed = new Set(['index.html', 'meta.json', 'AUDIT.md', 'thumb.png']);
const required = ['index.html', 'meta.json', 'AUDIT.md'];
const args = process.argv.slice(2);
const checkOnly = args.includes('--check');
const positional = args.filter(x => x !== '--check');

function fail(message) { throw new Error(message); }
function assert(ok, message) { if (!ok) fail(message); }
function isNonemptyString(x) { return typeof x === 'string' && x.trim().length > 0; }

try {
  assert(positional.length === 1, 'Usage: node publish-submission.mjs [--check] /absolute/path/to/model-slug');
  const source = resolve(positional[0]);
  assert(!(source === submissionsRoot || source.startsWith(submissionsRoot + sep)),
    'Source must be an external handoff folder, not an existing submission');
  const sourceStat = await lstat(source);
  assert(sourceStat.isDirectory() && !sourceStat.isSymbolicLink(), 'Source must be a real directory');

  const entries = await readdir(source, { withFileTypes: true });
  const names = entries.map(e => e.name);
  for (const e of entries) {
    assert(allowed.has(e.name), 'Unexpected file in handoff: ' + e.name);
    assert(e.isFile() && !e.isSymbolicLink(), 'Only regular, non-symlink files are allowed: ' + e.name);
  }
  for (const name of required) assert(names.includes(name), 'Missing ' + name);

  const meta = JSON.parse(await readFile(join(source, 'meta.json'), 'utf8'));
  const slug = meta.slug;
  assert(typeof slug === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug),
    'Invalid slug (use lowercase letters, digits and single hyphens)');
  assert(basename(source) === slug, 'Handoff folder name must match meta.json slug');
  assert(meta.entry === 'index.html', 'meta.json entry must be index.html');
  assert(isNonemptyString(meta.model) && isNonemptyString(meta.title) && isNonemptyString(meta.tagline),
    'meta.json must contain nonempty model, title and tagline');
  assert(Array.isArray(meta.palette) && meta.palette.length === 4 &&
    meta.palette.every(c => typeof c === 'string' && /^#[0-9a-f]{6}$/i.test(c)),
    'meta.json palette must contain four six-digit hex colors');
  assert(Array.isArray(meta.techniques) && meta.techniques.length >= 3 &&
    meta.techniques.every(isNonemptyString), 'meta.json must list at least three techniques');
  assert(typeof meta.submittedAt === 'string' &&
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(meta.submittedAt) &&
    !Number.isNaN(Date.parse(meta.submittedAt)),
    'submittedAt must be an actual timezone-aware ISO 8601 timestamp');
  const hasThumb = names.includes('thumb.png');
  assert((meta.thumb === 'thumb.png' && hasThumb) || (meta.thumb === null && !hasThumb),
    'thumb must be null without thumb.png, or "thumb.png" when the file exists');

  const html = await readFile(join(source, 'index.html'), 'utf8');
  const audit = await readFile(join(source, 'AUDIT.md'), 'utf8');
  assert(html.length >= 500 && /<!doctype html/i.test(html), 'index.html is missing or too small');
  assert(audit.includes('# Audit: ' + slug), 'AUDIT.md has the wrong slug');
  assert(!/\b(TODO|PLACEHOLDER)\b/i.test(html), 'index.html contains an unfinished TODO or PLACEHOLDER');
  if (hasThumb) {
    const png = await readFile(join(source, 'thumb.png'));
    assert(png.length >= 24 && png.subarray(0, 8).equals(Buffer.from('89504e470d0a1a0a', 'hex')),
      'thumb.png is not a valid PNG header');
  }
  for (const e of entries) {
    const s = await lstat(join(source, e.name));
    assert(s.size <= (e.name === 'thumb.png' ? 10 : 5) * 1024 * 1024,
      e.name + ' exceeds the submission size limit');
  }

  const destination = join(submissionsRoot, slug);
  try {
    await lstat(destination);
    fail('Submission already exists; refusing to overwrite: ' + slug);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  if (checkOnly) {
    console.log('VALID: ' + slug + ' (' + entries.length + ' files), no repository changes made.');
    process.exit(0);
  }

  await mkdir(submissionsRoot, { recursive: true });
  await mkdir(destination); // exclusive: does not overwrite existing submissions
  try {
    for (const name of names) await copyFile(join(source, name), join(destination, name));
  } catch (error) {
    await rm(destination, { recursive: true, force: true });
    throw error;
  }
  console.log('IMPORTED: submissions/' + slug + '/');
  console.log('Organizer: review the files, then run from the repository root:');
  console.log('  git add -- submissions/' + slug + '/');
  console.log('  git commit -m "submission: ' + slug + '"');
  console.log('  git push origin main');
  console.log('The index workflow will register this submission after the push.');
} catch (error) {
  console.error('Submission rejected:', error.message);
  process.exitCode = 1;
}
