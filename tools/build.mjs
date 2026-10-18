import {mkdir,cp,writeFile,rm,lstat} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const output=resolve(root,'dist');
if((await lstat(output).catch(()=>null))?.isSymbolicLink())throw new Error('Linked output is not allowed');
// Fixed repository/dist only; publication is an explicit allowlist.
await rm(output,{recursive:true,force:true});
for(const file of ['index.html','pokeworld/index.html','assets/mark.svg','assets/world.css','assets/sakura.css','assets/fonts.css','assets/world.js','assets/dex.css','assets/dex.js','assets/dex-data.js']){
 await mkdir(dirname(resolve(output,file)),{recursive:true});await cp(resolve(root,file),resolve(output,file));
}
await writeFile(resolve(output,'.nojekyll'),'');
console.log('Built allowlisted public presentation only.');
