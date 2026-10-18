'use strict';
// Public, illustrative editorial content only. No gameplay data or resource catalog.
const partners = {
  pikachu: { dex:'0025', en:'PIKACHU', name:'皮卡丘', type:'电', element:'electric', symbol:'ϟ', role:'快一点，再快一点。', description:'灵活的步伐与迅捷的出手，是它最鲜明的特点。熟悉的电球、十万伏特，也会在仙境里有新的表现。', moves:['电球','十万伏特','高速移动'], detail:'速度型伙伴 · 电属性招式' },
  bulbasaur: { dex:'0001', en:'BULBASAUR', name:'妙蛙种子', type:'草 / 毒', element:'grass', symbol:'♧', role:'从一片森林开始。', description:'背上的种子，藏着成长的可能。草与毒的属性，让它擅长用植物的力量与状态招式，慢慢掌握战斗节奏。', moves:['超级吸取','睡眠粉'], detail:'草与毒的组合 · 森林中的初次相遇' },
  charizard: { dex:'0006', en:'CHARIZARD', name:'喷火龙', type:'火 / 飞行', element:'fire', symbol:'♨', role:'让热爱，化作火焰。', description:'从小小的火苗，到展翼的身影。火属性的压迫感与飞行的灵活性，让喷火龙的每一次登场都更有气势。', moves:['火花','喷射火焰','大字爆炎','起风'], detail:'火焰与飞行 · 进化后的强大伙伴' },
  blastoise: { dex:'0009', en:'BLASTOISE', name:'水箭龟', type:'水', element:'water', symbol:'≈', role:'稳稳地，迎接下一场。', description:'厚重的龟壳带来可靠的防护，水流则是它反击的力量。在冒险队伍里，它是一位沉稳的伙伴。', moves:['水枪','水流尾','暴风雪','守住'], detail:'水属性伙伴 · 攻守兼备的成长方向' }
};
const tabs = [...document.querySelectorAll('[data-partner]')];
function selectPartner(button, focus = false) {
  const p = partners[button.dataset.partner];
  tabs.forEach(tab => { const active = tab === button; tab.setAttribute('aria-selected',String(active)); tab.tabIndex = active ? 0 : -1; });
  const panel = document.getElementById('partner-panel');
  panel.setAttribute('aria-labelledby',button.id); panel.dataset.element = p.element;
  for (const [id,value] of Object.entries({dex:`全国图鉴 #${p.dex}`, en:p.en, name:p.name, type:p.type, symbol:p.symbol, role:p.role, description:p.description, detail:p.detail})) document.getElementById(`partner-${id}`).textContent = value;
  document.getElementById('partner-moves').replaceChildren(...p.moves.map(move => {const span=document.createElement('span');span.textContent=move;return span;}));
  if (focus) button.focus();
}
tabs.forEach((button,index) => {
  button.addEventListener('click',()=>selectPartner(button));
  button.addEventListener('keydown',event => {
    let next;
    if(event.key==='ArrowRight') next=(index+1)%tabs.length;
    if(event.key==='ArrowLeft') next=(index+tabs.length-1)%tabs.length;
    if(event.key==='Home') next=0;
    if(event.key==='End') next=tabs.length-1;
    if(next!==undefined){event.preventDefault();selectPartner(tabs[next],true);}
  });
});
