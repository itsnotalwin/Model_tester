// Reads changed file paths (one per line) on stdin. Fails if a PR strays outside one submission folder.
import {readFile} from 'node:fs/promises';
import {readFileSync} from 'node:fs';
const files=readFileSync(0,'utf8').split('\n').map(s=>s.trim()).filter(Boolean);
const allowed=/^submissions\/([a-z0-9-]+)\/(index\.html|meta\.json|AUDIT\.md|thumb\.png)$/;
const errs=[],slugs=new Set();
for(const f of files){const m=f.match(allowed);m?slugs.add(m[1]):errs.push('Outside allowed paths: '+f)}
if(slugs.size>1)errs.push('Touches more than one submission folder: '+[...slugs].join(', '));
if(slugs.size===1){
  const slug=[...slugs][0];
  try{
    const meta=JSON.parse(await readFile(`submissions/${slug}/meta.json`,'utf8'));
    if(meta.slug!==slug)errs.push('meta.json slug does not match folder');
  }catch{errs.push('meta.json is missing or invalid JSON')}
  try{
    const html=await readFile(`submissions/${slug}/index.html`,'utf8');
    const bad=[/(src|href)\s*=\s*["']\s*(https?:)?\/\/(?!www\.w3\.org)/i,/url\(\s*["']?\s*(https?:)?\/\//i,/@import/i,/\bfetch\s*\(/,/XMLHttpRequest/,/window\.(parent|top)\b/];
    for(const b of bad)if(b.test(html))errs.push('index.html matches forbidden pattern '+b);
  }catch{errs.push('index.html is missing')}
}
if(!files.length)errs.push('No changed files');
if(errs.length){errs.forEach(e=>console.log('::error::'+e));process.exit(1)}
console.log('Scope OK:',[...slugs].join(','));
