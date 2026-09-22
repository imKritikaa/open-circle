/* icons.js — helpers ($, $$, esc), the icon set, social icons and the tech-stack logo wall. */

/* =====================================================================
   ENGINE
   ===================================================================== */
const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
const esc = s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

const ICONS = {
  learn:'<path d="M3 9l9-4 9 4-9 4z"/><path d="M7 11v4c0 1.500 2.500 3 5 3s5-1.500 5-3v-4"/><path d="M21 9v5"/>',
  build:'<path d="M9 8l-4 4 4 4M15 8l4 4-4 4M13.500 6l-3 12"/>',
  contribute:'<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.400"/><path d="M3.500 19c.4-3 2.600-5 5.500-5s5.100 2 5.500 5M15.500 14.200c2.600-.3 4.600 1.200 5 3.800"/>',
  grow:'<path d="M12 3l1.800 5.200L19 10l-5.200 1.800L12 17l-1.800-5.200L5 10l5.200-1.800z"/><path d="M18.500 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
  leaf:'<path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14"/><path d="M5 19l8-8"/>',
  shield:'<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
  chat:'<path d="M5 5h14v10h-9l-5 4z"/><path d="M9 9h6M9 12h4"/>',
  git:'<circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 8v8M18 11c0 4-6 3-10 6"/>',
  bus:'<rect x="4" y="4" width="16" height="13" rx="3"/><path d="M4 11h16M8 20v-3M16 20v-3"/><circle cx="8" cy="14" r=".6"/><circle cx="16" cy="14" r=".6"/>',
  doc:'<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  ext:'<path d="M8 16L16 8M9 8h7v7"/>',
  chev:'<path d="M9 6l6 6-6 6"/>',
  clock:'<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
  pin:'<path d="M12 21s6-5.500 6-11a6 6 0 10-12 0c0 5.500 6 11 6 11z"/><circle cx="12" cy="10" r="2"/>',
  plus:'<path d="M12 5v14M5 12h14"/>'
};
const ic = (n,cls='')=>`<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;

const SOCIAL = {
  github:['GitHub','<path fill="currentColor" d="M12 .3a12 12 0 00-3.800 23.400c.6.100.8-.3.800-.6v-2c-3.300.7-4-1.600-4-1.600-.6-1.400-1.400-1.800-1.400-1.800-1-.7.100-.7.100-.7 1.200.1 1.800 1.200 1.800 1.200 1.100 1.800 2.800 1.300 3.500 1 .1-.8.400-1.300.8-1.600-2.700-.3-5.500-1.300-5.500-5.900 0-1.300.5-2.400 1.200-3.200-.1-.3-.5-1.500.1-3.200 0 0 1-.3 3.300 1.200a11.500 11.500 0 016 0c2.300-1.500 3.300-1.200 3.300-1.200.7 1.700.2 2.900.1 3.200.8.800 1.200 1.900 1.200 3.200 0 4.600-2.800 5.600-5.500 5.900.4.400.8 1.100.8 2.200v3.300c0 .3.200.7.800.6A12 12 0 0012 .3"/>'],
  linkedin:['LinkedIn','<rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor"/><path d="M7 10v7M7 7v.1M11 17v-7M11 13c0-2 1.200-3 2.800-3 1.600 0 2.200 1 2.200 2.800V17" stroke="var(--bg)" stroke-width="2" stroke-linecap="round" fill="none"/>'],
  instagram:['Instagram','<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.200" cy="6.800" r="1.200" fill="currentColor"/>'],
  discord:['Discord','<path fill="currentColor" d="M19.500 5.400A16 16 0 0015.500 4l-.5 1a15 15 0 00-6 0l-.5-1a16 16 0 00-4 1.400C2 9.300 1.300 13 1.700 16.700a16 16 0 004.900 2.500l1-1.700c-.6-.2-1.100-.5-1.600-.9l.4-.3a11 11 0 009.200 0l.4.300c-.5.400-1 .7-1.600.9l1 1.700a16 16 0 004.900-2.500c.5-4.300-.8-8-3.400-11.300zM8.700 14.500c-.9 0-1.600-.8-1.600-1.800s.7-1.800 1.600-1.800 1.600.8 1.600 1.800-.7 1.800-1.600 1.800zm6.600 0c-.9 0-1.600-.8-1.600-1.800s.7-1.800 1.600-1.800 1.600.8 1.600 1.800-.7 1.800-1.600 1.800z"/>']
};

const TECH = [
  ['GitHub','<svg viewBox="0 0 24 24">'+SOCIAL.github[1].replace('fill="currentColor"','fill="#fff"')+'</svg>'],
  ['React','<svg viewBox="0 0 32 32"><g fill="none" stroke="#61dafb" stroke-width="1.700"><ellipse cx="16" cy="16" rx="12" ry="4.600"/><ellipse cx="16" cy="16" rx="12" ry="4.600" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="12" ry="4.600" transform="rotate(120 16 16)"/></g><circle cx="16" cy="16" r="2.300" fill="#61dafb"/></svg>'],
  ['Python','<svg viewBox="0 0 32 32"><path d="M15 4c-4.500 0-5 1.600-5 3.500V11h5.500v1.500H7.500C5 12.500 4 14.500 4 17.500S5.300 22 7.500 22H10v-3.300c0-2 1.600-3.700 3.700-3.700h5.600c1.800 0 3.200-1.400 3.200-3.200V7.500C22.500 5 20 4 15 4z" fill="#4b8bbe"/><path d="M15 4c-4.500 0-5 1.600-5 3.500V11h5.500v1.500H7.500C5 12.500 4 14.500 4 17.500S5.300 22 7.500 22H10v-3.300c0-2 1.600-3.700 3.700-3.700h5.600c1.800 0 3.200-1.400 3.200-3.200V7.500C22.500 5 20 4 15 4z" fill="#ffd43b" transform="rotate(180 16 16)"/><circle cx="12.500" cy="7.500" r="1.100" fill="#fff"/><circle cx="19.500" cy="24.500" r="1.100" fill="#fff"/></svg>'],
  ['JavaScript','<svg viewBox="0 0 32 32"><rect x="3" y="3" width="26" height="26" rx="4" fill="#f7df1e"/><text x="26" y="26" text-anchor="end" font-family="DM Sans,sans-serif" font-weight="700" font-size="13" fill="#222">JS</text></svg>'],
  ['Docker','<svg viewBox="0 0 32 32"><g fill="#2496ed"><rect x="6" y="14" width="3.600" height="3.400"/><rect x="10.100" y="14" width="3.600" height="3.400"/><rect x="14.200" y="14" width="3.600" height="3.400"/><rect x="18.300" y="14" width="3.600" height="3.400"/><rect x="10.100" y="10.300" width="3.600" height="3.400"/><rect x="14.200" y="10.300" width="3.600" height="3.400"/><rect x="14.200" y="6.600" width="3.600" height="3.400"/><path d="M2.500 18.500h24c1.200 0 2.200-.6 2.800-1.800.7.400 1.500.5 1.900.4-.5 1.200-1.500 2-2.900 2.300C25.500 24.500 19.500 28 12.500 28 6.500 28 3 24 2.500 18.500z"/></g></svg>'],
  ['Linux','<svg viewBox="0 0 32 32"><ellipse cx="16" cy="19" rx="8.500" ry="9.500" fill="#1e1e2a"/><circle cx="16" cy="9.500" r="5.500" fill="#1e1e2a"/><ellipse cx="16" cy="20.500" rx="5.200" ry="7" fill="#f4f0e6"/><circle cx="14" cy="9" r="1.200" fill="#fff"/><circle cx="18" cy="9" r="1.200" fill="#fff"/><path d="M14 11.500l2 1.700 2-1.700z" fill="#f5a623"/><ellipse cx="12" cy="28" rx="3.500" ry="1.600" fill="#f5a623"/><ellipse cx="20" cy="28" rx="3.500" ry="1.600" fill="#f5a623"/></svg>'],
  ['VS Code','<svg viewBox="0 0 32 32"><path d="M22.500 3.500L12 13.300 6.800 9.400 5 10.300v11.400l1.800.9 5.200-3.900 10.500 9.800L28 26.400V5.600z" fill="#2aa1f0"/><path d="M22.500 9.600v12.800L14.800 16z" fill="#0c1a3d" opacity=".5"/></svg>'],
  ['Figma','<svg viewBox="0 0 32 32"><circle cx="20" cy="16" r="4" fill="#1abcfe"/><path d="M12 28 a4 4 0 0 0 4 -4 v-4 h-4 a4 4 0 0 0 0 8z" fill="#0acf83"/><path d="M8 16 a4 4 0 0 1 4 -4 h4 v8 h-4 a4 4 0 0 1 -4 -4z" fill="#a259ff"/><path d="M8 8 a4 4 0 0 1 4 -4 h4 v8 h-4 a4 4 0 0 1 -4 -4z" fill="#f24e1e"/><path d="M16 4 h4 a4 4 0 0 1 0 8 h-4z" fill="#ff7262"/></svg>'],
  ['Node.js','<svg viewBox="0 0 32 32"><path d="M16 3l11 6.300v13.400L16 29 5 22.700V9.300z" fill="#3c873a"/><text x="16" y="20.500" text-anchor="middle" font-family="DM Sans,sans-serif" font-weight="700" font-size="12" fill="#fff">N</text></svg>'],
  ['Git','<svg viewBox="0 0 32 32"><rect x="6.500" y="6.500" width="19" height="19" rx="3" transform="rotate(45 16 16)" fill="#f05133"/><g fill="#fff"><circle cx="13" cy="20.500" r="1.900"/><circle cx="13" cy="11.500" r="1.900"/><circle cx="20" cy="15.500" r="1.900"/></g><path d="M13 11.500v9M13 15.500h7" stroke="#fff" stroke-width="1.800" fill="none"/></svg>']
];
