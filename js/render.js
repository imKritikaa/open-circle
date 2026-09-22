/* render.js — builds the cards, timeline, wall, FAQ, Projects page filter and Events page tabs from data.js. */

/* ---- renderers ---- */
function renderPillars(el,big){
  el.innerHTML = PILLARS.map(p=>`<div class="card pillar ${big?'rv':''}">${ic(p[0])}<h3>${p[1]}</h3><p>${p[2]}</p></div>`).join('');
}
function projectCard(p,dark){
  return `<article class="card proj">
    <div class="top"><span class="tile" style="--t1:${p.c[0]};--t2:${p.c[1]}">${ic(p.icon)}</span>${ic('ext','go')}</div>
    <h3>${esc(p.name)}</h3>
    <p>${esc(p.desc)}</p>
    <div class="tags">${p.tags.map(t=>`<span class="chip">${esc(t)}</span>`).join('')}</div>
    ${dark?'':`<div style="display:flex;justify-content:space-between;align-items:center"><span class="lvl">${esc(p.level)}</span><a class="link" href="${esc(p.repo)}" target="_blank" rel="noopener">View on GitHub ${ic('ext')}</a></div>`}
  </article>`;
}
function dateParts(iso){
  const D=new Date(iso+'T00:00:00');
  return {D, day:String(D.getDate()).padStart(2,'0'), mon:D.toLocaleString('en',{month:'short'}).toUpperCase(), wk:D.toLocaleDateString('en',{weekday:'long'})};
}
const upcoming = ()=>EVENTS.filter(e=>new Date(e.d+'T23:59:59')>=new Date()).sort((a,b)=>a.d.localeCompare(b.d));
const past = ()=>EVENTS.filter(e=>new Date(e.d+'T23:59:59')<new Date()).sort((a,b)=>b.d.localeCompare(a.d));

function renderTimeline(el){
  const list=upcoming().slice(0,4);
  el.innerHTML = list.map((e,i)=>{const p=dateParts(e.d);return `<a class="tl" href="#/events" style="--i:${i}"><div class="dt"><b>${p.day}</b><small>${p.mon}</small></div><div class="card"><div><h4>${esc(e.t)}</h4><p>${esc(e.s)}</p></div>${ic('chev')}</div></a>`}).join('')
    || `<p class="lead">New events are on the way. Check back soon.</p>`;
}
function renderAvatars(el){
  const cs=[['#ff8a3d','#f0559b','A'],['#6b4ce6','#3ba7f7','K'],['#34c38f','#3ba7f7','I'],['#f0559b','#8b5cf6','R'],['#f7a23b','#e8703f','S'],['#8b5cf6','#3a2fb0','M']];
  el.innerHTML = cs.map(c=>`<span class="av" style="--c1:${c[0]};--c2:${c[1]}" aria-hidden="true">${c[2]}</span>`).join('');
}
function renderWall(el){
  el.innerHTML = TECH.map(t=>`<button class="logo" data-tip="${t[0]}" aria-label="${t[0]}" type="button">${t[1]}</button>`).join('');
}
function renderPath(el,items){
  el.innerHTML = items.map((s,i)=>`<div class="step" style="--i:${i}"><span class="n">${i+1}</span><div><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p></div></div>`).join('');
}
function renderTeam(el){
  el.innerHTML = TEAM.map(t=>`<div class="card"><span class="av" style="--c1:${t.c[0]};--c2:${t.c[1]}" aria-hidden="true">${t.n[0]}</span><h3>${esc(t.n)}</h3><p>${esc(t.r)}</p></div>`).join('');
}
function renderFaq(el){
  el.innerHTML = FAQ.map(f=>`<details class="card"><summary>${esc(f[0])}${ic('plus')}</summary><p>${esc(f[1])}</p></details>`).join('');
}
function renderSocials(el){
  el.innerHTML = Object.entries(SOCIAL).map(([k,v])=>`<a href="${esc(SITE.links[k])}" target="_blank" rel="noopener" aria-label="${v[0]}"><svg viewBox="0 0 24 24">${v[1]}</svg></a>`).join('');
}
function renderChannels(el){
  el.innerHTML = Object.entries(SOCIAL).map(([k,v])=>`<a href="${esc(SITE.links[k])}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24">${v[1]}</svg>${v[0]}</a>`).join('');
}
const R = {
  pillars:el=>renderPillars(el,false), pillars2:el=>renderPillars(el,true),
  featured:el=>{el.innerHTML=PROJECTS.slice(0,3).map(p=>projectCard(p,true)).join('')},
  timeline:renderTimeline, avatars:renderAvatars, wall:renderWall, path:el=>renderPath(el,PATH), joinpath:el=>renderPath(el,JOIN_STEPS),
  team:renderTeam, faq:renderFaq, socials:renderSocials, channels:renderChannels
};
$$('[data-render]').forEach(el=>R[el.dataset.render]&&R[el.dataset.render](el));
$('#yr').textContent=new Date().getFullYear();

/* ---- Projects page ---- */
(function(){
  const cats=['All','Beginner friendly','AI','Web','Mobile','Tools'];
  let cur='All', q='';
  const chips=$('#pchips'), grid=$('#pgrid'), input=$('#psearch');
  chips.innerHTML=cats.map(c=>`<button class="chipbtn" aria-pressed="${c==='All'}" data-c="${c}">${c==='AI'?'AI & ML':c==='Tools'?'Developer tools':c}</button>`).join('');
  function draw(){
    const list=PROJECTS.filter(p=>{
      const okC = cur==='All' || (cur==='Beginner friendly' ? p.level==='Beginner friendly' : p.cats.includes(cur));
      const hay=(p.name+' '+p.desc+' '+p.tags.join(' ')).toLowerCase();
      return okC && hay.includes(q);
    });
    grid.innerHTML = list.map(p=>projectCard(p,false)).join('') || `<p class="empty">No projects match that yet. Try another filter, or pitch your own idea.</p>`;
  }
  chips.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;cur=b.dataset.c;$$('button',chips).forEach(x=>x.setAttribute('aria-pressed',x===b));draw()});
  input.addEventListener('input',()=>{q=input.value.trim().toLowerCase();draw()});
  draw();
})();

/* ---- Events page ---- */
(function(){
  const list=$('#evlist'), tu=$('#tab-up'), tp=$('#tab-past');
  function draw(which){
    const arr = which==='up'?upcoming():past();
    tu.setAttribute('aria-selected',which==='up'); tp.setAttribute('aria-selected',which!=='up');
    list.innerHTML = arr.map(e=>{const p=dateParts(e.d);return `<article class="card evc">
      <div class="dt"><b>${p.day}</b><small>${p.mon}</small></div>
      <div><h3>${esc(e.t)}</h3><p>${esc(e.s)}</p><div class="meta"><span class="chip">${esc(e.type)}</span><span class="chip">${ic('clock')}${p.wk}, ${esc(e.time)}</span><span class="chip">${ic('pin')}${esc(e.mode)}</span></div></div>
      ${which==='up'?`<button class="btn sm solid" data-join="RSVP: ${esc(e.t)}">RSVP</button>`:''}
    </article>`}).join('') || `<p class="lead">${which==='up'?'No events are scheduled right now. Join the community to hear about the next one.':'Nothing here yet.'}</p>`;
  }
  tu.onclick=()=>draw('up'); tp.onclick=()=>draw('past'); draw('up');
})();
