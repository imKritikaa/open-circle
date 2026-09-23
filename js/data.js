/* data.js — YOUR CONTENT. Edit names, links, projects, events, team and FAQ here. Loaded first. */

/* =====================================================================
   EDIT ME — your content lives here
   ===================================================================== */
const SITE = {
  email: 'hello@example.com',                      // where the "Send note" form goes
  links: {                                         // replace # with your real links
    github:'https://github.com/imKritikaa/open-circle', discord:'#', linkedin:'https://www.linkedin.com/company/open-circlecst/', instagram:'https://www.instagram.com/opencircle.cst?stkn=ZnB1OGFiYnUzdjN6'
  }
};

const PILLARS = [
  ['learn','Learn','Build your skills with hands-on workshops and mentorship.'],
  ['build','Build','Work on real projects and turn ideas into impact.'],
  ['contribute','Contribute','Give back to the open source community.'],
  ['grow','Grow','Make meaningful connections and explore new opportunities.']
];

const PROJECTS = [
  {name:'WasteWise', icon:'leaf', c:['#34c38f','#1f9d6b'], desc:'AI-powered waste scanner for a cleaner and greener tomorrow.', tags:['AI/ML','Mobile App'], cats:['AI','Mobile'], level:'Intermediate', repo:SITE_LINK('github')},
  {name:'LegalMetro', icon:'shield', c:['#7b6cf6','#4d3fd1'], desc:'Compliance check for packaged commodities under Legal Metrology.', tags:['Web App','GovTech'], cats:['Web'], level:'Intermediate', repo:SITE_LINK('github')},
  {name:'BIS Assistant', icon:'chat', c:['#ff8a5c','#f0559b'], desc:'AI assistant for Indian Standards and BIS services for industry and consumers.', tags:['AI','LLM','RAG'], cats:['AI'], level:'Advanced', repo:SITE_LINK('github')},
  {name:'Commit Quest', icon:'git', c:['#f7a23b','#e8703f'], desc:'A gamified way to learn Git and GitHub through small, safe challenges.', tags:['Web App','Education'], cats:['Web'], level:'Beginner friendly', repo:SITE_LINK('github')},
  {name:'Campus Transit', icon:'bus', c:['#3ba7f7','#2f6fe0'], desc:'Live shuttle and bus timings for students, built on a simple open API.', tags:['Mobile App','Civic tech'], cats:['Mobile'], level:'Beginner friendly', repo:SITE_LINK('github')},
  {name:'ReadMe Forge', icon:'doc', c:['#9b7cf6','#6b4ce6'], desc:'A command-line tool that drafts a clear README from your project folder.', tags:['CLI','Developer tools'], cats:['Tools'], level:'Intermediate', repo:SITE_LINK('github')}
];
function SITE_LINK(k){return SITE.links[k]}

const EVENTS = [
  {d:'2026-08-23', t:'Linux Install Fest', s:'Bring a laptop, leave with a fresh Linux setup.', type:'Workshop', mode:'Campus', time:'11:00 AM'},
  {d:'2026-09-12', t:'Workshop: Git & GitHub', s:'Version control made simple.', type:'Workshop', mode:'Campus', time:'11:00 AM'},
  {d:'2026-09-20', t:'Open Source Sprint', s:'Build. Collaborate. Contribute.', type:'Sprint', mode:'Hybrid', time:'10:00 AM'},
  {d:'2026-10-05', t:'Tech Talk', s:'Real stories. Real builders.', type:'Talk', mode:'Campus', time:'2:00 PM'},
  {d:'2026-10-18', t:'Community Meetup', s:'Meet. Share. Grow.', type:'Meetup', mode:'Campus', time:'3:00 PM'},
  {d:'2026-11-08', t:'Winter Hack Day', s:'A full day to ship something small and real.', type:'Hackathon', mode:'Campus', time:'9:30 AM'}
];

const PATH = [
  ['Say hello','Join the community, introduce yourself and tell us what you’re curious about.'],
  ['Learn the basics','Come to a workshop on Git, Linux or the web. Nobody expects you to know it already.'],
  ['Pick a project','Choose one that looks interesting and find an issue marked “good first issue”.'],
  ['Make your first contribution','Open a pull request. A mentor will review it with you, line by line.'],
  ['Pass it on','Help the next newcomer, lead a session, or start a project of your own.']
];
const JOIN_STEPS = [
  ['Say hello','Join our chat and introduce yourself. Tell us what you’re curious about.'],
  ['Pick something small','Choose a beginner-friendly project and an issue marked “good first issue”.'],
  ['Open your first pull request','A mentor will review it with you. Merge it, and you’re an open source contributor.']
];

const TEAM = [
  {n:'Aanya Verma', r:'President', c:['#ff8a3d','#f0559b']},
  {n:'Kabir Malhotra', r:'Tech Lead', c:['#6b4ce6','#3a2fb0']},
  {n:'Ishita Rao', r:'Events Lead', c:['#34c38f','#3ba7f7']},
  {n:'Rohan Mehta', r:'Design Lead', c:['#f0559b','#8b5cf6']}
];

const FAQ = [
  ['Do I need to know how to code?','No. Many of our members started with zero experience. We have sessions for complete beginners, and projects that need design, writing and testing too.'],
  ['How much time does it take?','As much as you have. Some members come to one event a month, others work on a project every week.'],
  ['Who can join?','Any MAIT student. If you’re from outside, come to our open events and say hello.'],
  ['Can I start my own project?','Yes. Pitch it at a meetup or send us a note, and we’ll help you find teammates and a first small step.'],
  ['What is a pull request?','It’s how you propose a change to someone else’s project. We’ll walk you through your first one.']
];
