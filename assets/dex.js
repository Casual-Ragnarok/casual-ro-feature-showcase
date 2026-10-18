'use strict';
(() => {
 const grid=document.getElementById('dex-results');
 if(!grid)return;
 const search=document.getElementById('dex-search'),filter=document.getElementById('dex-filter'),status=document.getElementById('dex-status'),prev=document.getElementById('dex-prev'),next=document.getElementById('dex-next'),pageLabel=document.getElementById('dex-page');
 const categories={normal:'普通',shiny:'闪光',regional:'地区形态',special:'特殊形态',alternate:'外观差异'};
 let page=0,found=[];
 function update(reset=false){
  if(reset)page=0;
  const terms=search.value.trim().toLowerCase().replace(/^#/,'').split(/\s+/).filter(Boolean);
  found=POKEDEX.map((row,index)=>({row,index})).filter(({row})=>{
   const text=[String(row[0]),String(row[0]).padStart(4,'0'),...row.slice(1),categories[row[4]],row[3].includes('羁绊')?'忍者蛙 甲贺忍蛙':'',row[0]===384?'天空龙 烈空坐':''].join(' ').toLowerCase();
   return (!filter.value||row[4]===filter.value)&&terms.every(t=>text.includes(t));
  });
  const pages=Math.max(1,Math.ceil(found.length/36));page=Math.min(page,pages-1);
  const cards=found.slice(page*36,page*36+36).map(({row:r,index})=>{
   const card=document.createElement('article');card.className='dex-card';
   const art=document.createElement('div');art.className='dex-art';art.setAttribute('role','img');art.setAttribute('aria-label',r[1]+' · '+r[3]+'展示缩略图');
   art.style.backgroundImage=`url(../assets/dex/atlas-${String(Math.floor(index/100)).padStart(2,'0')}.webp)`;art.style.backgroundPosition=`-${index%10*96}px -${Math.floor(index%100/10)*96}px`;
   const number=document.createElement('small');number.textContent='#'+String(r[0]).padStart(4,'0');
   const title=document.createElement('h3');title.textContent=r[1];const english=document.createElement('span');english.className='dex-english';english.textContent=r[2];
   const form=document.createElement('p');form.textContent=r[3];const badge=document.createElement('span');badge.className='dex-badge';badge.textContent=categories[r[4]];
   card.append(art,number,title,english,form,badge);return card;
  });
  if(!cards.length){const empty=document.createElement('p');empty.className='dex-empty';empty.textContent='没有找到匹配的宝可梦，试试中文名称、英文名称或全国编号。';cards.push(empty);}
  grid.replaceChildren(...cards);status.textContent=`找到 ${new Set(found.map(x=>x.row[0])).size} 种宝可梦 · ${found.length} 条外观记录`;
  pageLabel.textContent=`第 ${page+1} / ${pages} 页`;prev.disabled=page===0;next.disabled=page>=pages-1;
 }
 search.addEventListener('input',()=>update(true));filter.addEventListener('change',()=>update(true));
 prev.addEventListener('click',()=>{page--;update();});next.addEventListener('click',()=>{page++;update();});
 update();
})();
