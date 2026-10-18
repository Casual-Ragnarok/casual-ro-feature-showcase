import assert from 'node:assert/strict';
import {readFile,access,readdir} from 'node:fs/promises';
import {resolve,dirname,extname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const prohibited=/AegisName|SourceArchive|petskillattack|CaptureRate|pokemon_(?:mob|pet|item)_db|[DR]:[\\/]|\.(?:grf|spr|act|yml|ya?ml|csv|sql|zip)(?:["'\s?]|$)/i;
for(const name of ['index.html','pokeworld/index.html']){
 const text=await readFile(resolve(root,name),'utf8');assert(!prohibited.test(text),`Non-public content in ${name}`);
 for(const [label,url] of [['首页', 'https://casualro.top/'], ['NPC 索引', 'https://npc.casualro.top/'], ['脚本商城', 'https://store.casualro.top/'], ['文档资料', 'https://docs.casualro.top/'], ['补丁下载', 'https://grf.casualro.top/'], ['特色介绍', 'https://casual-ragnarok.github.io/casual-ro-feature-showcase/']])assert(text.includes('href="'+url+'"')&&text.includes('>'+label+'</a>'),`Missing navigation: ${name} / ${label}`);
 assert(text.includes('assets/sakura.css')&&text.includes('assets/fonts.css'),'Shared theme missing');
 assert(/href="https:\/\/casual-ragnarok.github.io\/casual-ro-feature-showcase\/" aria-current="page"/.test(text),'Feature navigation must be active');
 assert(text.includes('开发')&&text.includes('概念插画'));
 for(const [,url] of text.matchAll(/(?:src|href)="([^"#]+)"/g))if(!/^(https?:|mailto:)/.test(url))await access(resolve(dirname(resolve(root,name)),url.split('#')[0]));
}
const script=await readFile(resolve(root,'assets/world.js'),'utf8');assert(!prohibited.test(script));assert(!/fetch\(|localStorage|innerHTML|https?:/.test(script),'No external data or script injection');
for(const entry of await readdir(resolve(root,'assets')))assert(['.webp','.svg','.css','.js'].includes(extname(entry)),'Unexpected public asset');
assert((await readFile(resolve(root,'index.html'),'utf8')).includes('href="pokeworld/"'));
console.log('PASS: links/assets, public content, no private game files or resource catalog.');
