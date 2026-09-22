/* art.js — draws the hero castle illustration (towers, ivy, stairs, people) into the SVG in index.html. */

/* ---- Illustration builders ---- */
(function(){
  const rng=seed=>()=>((seed=(seed*16807)%2147483647)-1)/2147483646;
  const f=(n)=>n.toFixed(1);

  // towers
  const T=[ // x,w,top,roofTop,opacity
    [236,26,192,92,.92],[338,26,172,66,.92],[190,30,252,166,1],[386,30,242,146,1],[140,26,294,232,1],[436,26,284,220,1],[102,20,347,300,1],[478,20,338,290,1],[280,40,142,24,1]
  ];
  let s='';
  T.forEach(([x,w,top,rt,o])=>{
    const cx=x+w/2, eave=w*.6;
    s+=`<g opacity="${o}"><rect x="${x}" y="${top}" width="${w}" height="${430-top}" fill="url(#gTower)"/>`+
       `<rect x="${cx}" y="${top}" width="${w/2}" height="${430-top}" fill="#c9b3ea" opacity=".16"/>`+
       `<polygon points="${x-4},${top+6} ${x+w+4},${top+6} ${cx},${rt}" fill="url(#gRoof)"/>`+
       `<polygon points="${cx},${rt} ${x+w+4},${top+6} ${cx},${top+6}" fill="#a48bd8" opacity=".22"/>`+
       `<rect x="${cx-2.5}" y="${top+22}" width="5" height="12" rx="2.5" fill="#b8a4de" opacity=".75"/>`+
       (430-top>120?`<rect x="${cx-2.5}" y="${top+58}" width="5" height="12" rx="2.5" fill="#b8a4de" opacity=".6"/>`:'')+
       `<line x1="${cx}" y1="${rt}" x2="${cx}" y2="${rt-12}" stroke="#e2d0f2" stroke-width="1.6"/><circle cx="${cx}" cy="${rt-13}" r="2.300" fill="#ffd2a6"/></g>`;
  });
  $('#towers').innerHTML=s;

  // sparkles
  const r=rng(7); let sp='';
  for(let i=0;i<16;i++){const x=20+r()*560,y=20+r()*300,z=2+r()*4;
    sp+=`<path class="tw" style="animation-delay:${f(r()*3)}s" d="M${f(x)} ${f(y-z*2)}l${f(z*.5)} ${f(z*1.5)} ${f(z*1.5)} ${f(z*.5)}-${f(z*1.5)} ${f(z*.5)}-${f(z*.5)} ${f(z*1.5)}-${f(z*.5)}-${f(z*1.5)}-${f(z*1.5)}-${f(z*.5)} ${f(z*1.5)}-${f(z*.5)}z" fill="#fff"/>`}
  $('#sparks').innerHTML=sp;

  // portal rays
  let ry='';for(let i=0;i<14;i++){const a=i/14*Math.PI*2;ry+=`<line x1="${f(300+Math.cos(a)*40)}" y1="${f(320+Math.sin(a)*40)}" x2="${f(300+Math.cos(a)*98)}" y2="${f(320+Math.sin(a)*98)}"/>`}
  $('#rays').innerHTML=ry;
  // ring stone blocks
  let rb='';for(let i=0;i<28;i++){const a=i/28*Math.PI*2;rb+=`<line x1="${f(300+Math.cos(a)*115)}" y1="${f(320+Math.sin(a)*115)}" x2="${f(300+Math.cos(a)*139)}" y2="${f(320+Math.sin(a)*139)}"/>`}
  $('#ringBlocks').innerHTML=rb;

  // foliage
  const greens=['#4f9a63','#63ad6c','#86c47f','#3e8657','#a3d68a'], flowers=['#ff9bc2','#ffd27a','#ffffff','#ffb08a'];
  function cluster(cx,cy,n,sx,sy,seed){const q=rng(seed);let o='';
    for(let i=0;i<n;i++)o+=`<circle cx="${f(cx+(q()-.5)*sx)}" cy="${f(cy+(q()-.5)*sy)}" r="${f(3+q()*5.5)}" fill="${greens[i%5]}"/>`;
    for(let i=0;i<Math.ceil(n/3);i++)o+=`<circle cx="${f(cx+(q()-.5)*sx)}" cy="${f(cy+(q()-.5)*sy)}" r="${f(1.4+q()*1.4)}" fill="${flowers[i%4]}"/>`;
    return o}
  $('#foliageBack').innerHTML = cluster(108,392,26,64,22,3)+cluster(494,392,26,64,22,5)+cluster(150,384,14,50,14,9);
  let iv='';{const q=rng(11);for(let i=0;i<42;i++){const a=(200+i*2.6)*Math.PI/180,rad=127+(q()-.5)*14;
    iv+=`<circle cx="${f(300+Math.cos(a)*rad)}" cy="${f(320+Math.sin(a)*rad)}" r="${f(2.8+q()*3.8)}" fill="${greens[i%5]}"/>`;
    if(i%5===0)iv+=`<circle cx="${f(300+Math.cos(a)*rad)}" cy="${f(320+Math.sin(a)*rad)}" r="1.8" fill="${flowers[i%4]}"/>`}}
  $('#ivy').innerHTML=iv;
  $('#foliageFront').innerHTML = cluster(92,424,20,44,14,21)+cluster(508,424,20,44,14,23)+cluster(196,440,12,60,10,31)+cluster(404,440,12,60,10,33);
  let vn='';{const q=rng(41);[[120,438],[170,452],[236,464],[364,464],[430,452],[480,438]].forEach(([x,y],k)=>{
    const len=24+q()*40;vn+=`<path d="M${x} ${y} q${f((q()-.5)*10)} ${f(len/2)} ${f((q()-.5)*8)} ${f(len)}" stroke="#4f9a63" stroke-width="2" fill="none" stroke-linecap="round"/>`;
    for(let j=1;j<5;j++)vn+=`<circle cx="${f(x+(q()-.5)*6)}" cy="${f(y+len*j/5)}" r="${f(2+q()*2.4)}" fill="${greens[(k+j)%5]}"/>`})}
  $('#vines').innerHTML=vn;

  // stairs
  let st='';for(let i=0;i<6;i++){const w=76+i*28,y=440+i*14;
    st+=`<rect x="${300-w/2}" y="${y}" width="${w}" height="15" rx="3" fill="url(#gStone)"/><rect x="${300-w/2}" y="${y}" width="${w}" height="3.500" rx="1.700" fill="#fffaf2"/><rect x="${300-w/2}" y="${y+12}" width="${w}" height="3" rx="1.500" fill="#d3b8a6" opacity=".7"/>`}
  $('#stairs').innerHTML=st;

  // people
  const person=(x,y,o={})=>{const {skin='#e9b997',hair='#2b2233',top='#2c2f5a',bottom='#23244a',s=1.15,pack}=o;
    return `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-6.500" y="-17" width="5.500" height="17" rx="2.500" fill="${bottom}"/><rect x="1" y="-17" width="5.500" height="17" rx="2.500" fill="${bottom}"/><path d="M-8.500 -35 q8.500 -6 17 0 l2 20 h-21z" fill="${top}"/>${pack?`<rect x="-6" y="-34" width="12" height="15" rx="4" fill="${pack}"/>`:''}<circle cy="-41" r="5.800" fill="${hair}"/></g>`};
  $('#people').innerHTML =
    person(268,424,{top:'#f4efe8',bottom:'#2a2a48',hair:'#2a1d24'})+
    person(334,428,{top:'#2f4b8f',bottom:'#232848',pack:'#e8703f'})+
    person(300,470,{top:'#2c2f5a',bottom:'#1f2040',pack:'#3a2fb0',s:1.3})+
    person(262,494,{top:'#7a3f5a',bottom:'#2a2440',s:1.35})+
    person(340,500,{top:'#e9e4f4',bottom:'#2b2b4d',pack:'#6b4ce6',s:1.4});
  $('#miniPeople').innerHTML = `<g transform="translate(160 214)">${person(0,0,{top:'#2f4b8f',bottom:'#232848',s:.95})}</g>${person(126,214,{top:'#f4efe8',bottom:'#2a2a48',s:.9})}`;
  $('#miniFoliage').innerHTML = cluster(46,216,16,36,10,51)+cluster(274,216,16,36,10,53);
  const m=$('.mini').cloneNode(true);m.querySelectorAll('[id]').forEach(n=>n.removeAttribute('id'));$('#evart').appendChild(m);
})();
