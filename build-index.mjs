// Scans submissions/*/meta.json and writes submissions/index.json. Run: node scripts/build-index.mjs
import {readdir,readFile,writeFile,access,mkdir} from 'node:fs/promises';
import {join} from 'node:path';
const root='submissions';
const has=p=>access(p).then(()=>true,()=>false);
await mkdir(root,{recursive:true});
const out=[];
const candidates=(await readdir(root,{withFileTypes:true})).filter(e=>e.isDirectory()).map(e=>({name:e.name,dir:join(root,e.name),prefix:'submissions/'}));
for(const e of candidates){
  const dir=e.dir;
  try{
    const m=JSON.parse(await readFile(join(dir,'meta.json'),'utf8'));
    if(m.slug!==e.name)throw new Error(`slug "${m.slug}" does not match folder name`);
    const entry=m.entry||'index.html';
    if(!(await has(join(dir,entry))))throw new Error(`missing ${entry}`);
    out.push({
      slug:e.name,
      sourceDir:e.prefix+e.name,
      model:String(m.model||e.name),
      title:String(m.title||m.model||e.name),
      tagline:String(m.tagline||''),
      palette:Array.isArray(m.palette)?m.palette.slice(0,6).map(String):[],
      techniques:Array.isArray(m.techniques)?m.techniques.map(String):[],
      entry,
      thumb:m.thumb&&(await has(join(dir,m.thumb)))?m.thumb:null,
      hasAudit:await has(join(dir,'AUDIT.md')),
      submittedAt:String(m.submittedAt||'')
    });
  }catch(err){console.log(`::warning::${e.name}: ${err.message}`);process.exitCode=1;}
}
out.sort((a,b)=>a.submittedAt.localeCompare(b.submittedAt));
await writeFile(join(root,'index.json'),JSON.stringify({submissions:out},null,2)+'\n');
console.log(`Indexed ${out.length} submission(s).`);
