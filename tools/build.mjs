import {mkdir,cp,writeFile,rm,lstat} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const output=resolve(root,'dist');
if((await lstat(output).catch(()=>null))?.isSymbolicLink())throw new Error('Linked output is not allowed');
// Fixed repository/dist only; publication is an explicit allowlist.
await rm(output,{recursive:true,force:true});
for(const file of ['assets/community-navigation.js','assets/community-navigation.css','index.html','pokeworld/index.html','pokeworld/pokedex/index.html','assets/pokeworld-cover.jpg','assets/mark.svg','assets/favicon.svg','assets/wechat.jpg','assets/footer.css','assets/world.css','assets/sakura.css','assets/fonts.css','assets/world.js','assets/dex.css','assets/dex.js','assets/dex-data.js','assets/dex/atlas-00.webp','assets/dex/atlas-01.webp','assets/dex/atlas-02.webp','assets/dex/atlas-03.webp','assets/dex/atlas-04.webp','assets/dex/atlas-05.webp','assets/dex/atlas-06.webp','assets/dex/atlas-07.webp','assets/dex/atlas-08.webp','assets/dex/atlas-09.webp','assets/dex/atlas-10.webp','assets/dex/atlas-11.webp','assets/dex/atlas-12.webp','assets/dex/atlas-13.webp','assets/dex/atlas-14.webp','assets/dex/atlas-15.webp','assets/dex/atlas-16.webp','assets/dex/atlas-17.webp','assets/dex/atlas-18.webp','assets/dex/atlas-19.webp']){
 await mkdir(dirname(resolve(output,file)),{recursive:true});await cp(resolve(root,file),resolve(output,file));
}
await writeFile(resolve(output,'.nojekyll'),'');
console.log('Built allowlisted public presentation only.');
