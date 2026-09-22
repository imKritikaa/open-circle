/* main.js — behaviour: theme switch, nav, particles, spotlight cards, glow cursor, scroll reveal, router, Join dialog. */

/* =====================================================================
   BEHAVIOUR
   ===================================================================== */
/* theme */
const root=document.documentElement;
try{const t=localStorage.getItem('oc-theme');if(t)root.dataset.theme=t}catch(e){}
$('#theme').addEventListener('click',()=>{
  const dark=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
  const t=dark?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('oc-theme',t)}catch(e){}
});

/* nav */
const nav=$('#nav');
const onScroll=()=>nav.classList.toggle('solid',scrollY>24);
addEventListener('scroll',onScroll,{passive:true});onScroll();
const burger=$('#burger'),links=$('#links');
burger.addEventListener('click',()=>{const o=links.classList.toggle('open');burger.setAttribute('aria-expanded',o)});

/* soft wave under each page header */
$$('.phead').forEach(p=>p.insertAdjacentHTML('beforeend','<svg class="mist" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 70 C 220 10, 430 110, 720 62 S 1180 0, 1440 58 V120 H0Z"/></svg>'));

/* dark sections: waves + particles */
const WAVE='<path d="M0 64V34C160 0 330 62 560 38S1000 -8 1220 30S1400 48 1440 26V64Z"/>';
$$('.dark').forEach(sec=>{
  sec.insertAdjacentHTML('afterbegin',`<svg class="wave top" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">${WAVE}</svg><svg class="wave bot" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">${WAVE}</svg>`);
  const field=document.createElement('div');field.className='pfield';field.setAttribute('aria-hidden','true');
  const c=document.createElement('canvas');field.appendChild(c);sec.prepend(field);
  const ctx=c.getContext('2d');let w=0,h=0,ps=[],raf=0,vis=false;
  function size(){const d=Math.min(devicePixelRatio||1,2);w=sec.clientWidth;h=sec.clientHeight;if(!w||!h)return;c.width=w*d;c.height=h*d;ctx.setTransform(d,0,0,d,0,0);
    ps=Array.from({length:Math.round(Math.min(70,w*h/15000))},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,r:Math.random()*1.5+.6}));draw()}
  function draw(){ctx.clearRect(0,0,w,h);
    for(let i=0;i<ps.length;i++){const a=ps[i];ctx.fillStyle='rgba(255,255,255,.75)';ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,7);ctx.fill();
      for(let j=i+1;j<ps.length;j++){const b=ps[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<125){ctx.strokeStyle='rgba(200,180,255,'+(.24*(1-d/125))+')';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}}}
  function tick(){for(const p of ps){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1}draw();raf=vis?requestAnimationFrame(tick):0}
  new ResizeObserver(size).observe(sec);
  new IntersectionObserver(([e])=>{vis=e.isIntersecting;if(vis&&!raf&&!reduce)raf=requestAnimationFrame(tick)}).observe(sec);
});

/* card spotlight */
document.addEventListener('pointermove',e=>{
  const c=e.target.closest&&e.target.closest('.card');
  if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')}
});

/* soft glow cursor */
if(matchMedia('(pointer:fine)').matches&&!reduce){
  const g=$('#glow');let x=innerWidth/2,y=innerHeight/2,tx=x,ty=y;
  addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;g.style.opacity=1});
  document.addEventListener('pointerleave',()=>g.style.opacity=0);
  (function loop(){x+=(tx-x)*.15;y+=(ty-y)*.15;g.style.transform='translate('+x+'px,'+y+'px)';requestAnimationFrame(loop)})();
}

/* reveal on scroll */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.18,rootMargin:'0px 0px -6% 0px'});
function watch(){$$('.rv:not(.in), .tls:not(.in), .path:not(.in)').forEach(el=>{if(el.offsetParent!==null)io.observe(el)})}

/* router */
const pages=$$('[data-page]');
function route(){
  const h=(location.hash.replace(/^#\/?/,'')||'home').split('?')[0];
  const name=pages.some(p=>p.dataset.page===h)?h:'home';
  pages.forEach(p=>p.hidden=p.dataset.page!==name);
  $$('.links a').forEach(a=>a.classList.toggle('on',a.dataset.route===name));
  document.title=pages.find(p=>p.dataset.page===name).dataset.title;
  links.classList.remove('open');burger.setAttribute('aria-expanded','false');
  scrollTo({top:0,behavior:'instant'});
  requestAnimationFrame(watch);
}
addEventListener('hashchange',route);route();

/* join dialog */
const dlg=$('#join'),form=$('#joinform');let ctx='';
document.addEventListener('click',e=>{
  const j=e.target.closest('[data-join]');
  if(j){e.preventDefault();ctx=j.dataset.join||'';links.classList.remove('open');dlg.showModal()}
});
$('#join-x').addEventListener('click',()=>dlg.close());
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
form.addEventListener('submit',e=>{
  e.preventDefault();
  const n=$('#jn').value.trim(),m=$('#je').value.trim(),i=$('#ji').value;
  const sub=encodeURIComponent('Hello from '+n+(ctx?' — '+ctx:''));
  const body=encodeURIComponent('Hi Open Circle,\n\nMy name is '+n+' ('+m+').\nI’m curious about: '+i+'.\n'+(ctx?'Context: '+ctx+'\n':'')+'\nThanks!');
  $('#jnote').textContent='Opening your email app…';
  location.href='mailto:'+SITE.email+'?subject='+sub+'&body='+body;
});
