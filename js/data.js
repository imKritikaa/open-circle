/* data.js — YOUR CONTENT. Edit names, links, projects, events, team and FAQ here. Loaded first. */

/* =====================================================================
   EDIT ME — your content lives here
   ===================================================================== */
const SITE = {
  email: 'vs0411007@gmail.com',                      // where the "Send note" form goes
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
  {name:'Unfold', icon:'leaf', c:['#34c38f','#1f9d6b'], desc:'A mindful companion for self-growth and everyday well-being.', tags:['Mental Wellness', 'Journaling'], cats:['Wellness'], level:'Intermediate', maintainer:'Vanshika Sharma', repo:'https://github.com/vanshika114/unfolddd'},
  {name:'Secure Auth', icon:'shield', c:['#7b6cf6','#4d3fd1'], desc:'A full-stack authentication system with secure login, JWT, OTP verification, and password recovery.', tags:['Web App','GovTech'], cats:['Web'], level:'Intermediate', maintainer:'Anhinav Dixit', repo:'https://github.com/Abhinavjs903/Secure_auth'},
  {name:'Library Management System', icon:'git', c:['#f7a23b','#e8703f'], desc:'A gamified way to learn Git and GitHub through small, safe challenges.', tags:['Web App','Education'], cats:['Web'], level:'Beginner friendly', maintainer:'Vanshika Sharma', repo:'https://github.com/vanshika114/LMS'},
  {name:'ReadMe Forge', icon:'doc', c:['#9b7cf6','#6b4ce6'], desc:'AI-powered platform for smarter access to government services and citizen support.', tags:['AI','GovTech','Web App'], cats:['Web'], level:'Intermediate', maintainer:'Rishabh Jamdagni', repo:'https://github.com/rishabhjamdagni09-web/PramaanGov/tree/main'},
  {name:'OpenCampus OS', icon:'git', c:['#3ba7f7','#2f6fe0'], desc:'An open-source operating system designed to support college students.', tags:['Open Source','Education','Web App'], cats:['Web'], level:'Intermediate', maintainer:'Hriday Arora', repo:'https://github.com/The-Tech-Guy005/OpenCampus-OS'},
  {name:'SkillSwap AI', icon:'chat', c:['#7b6cf6','#4d3fd1'], desc:'An AI-powered resume analyzer that generates ATS scores, identifies skill gaps, and suggests personalized learning roadmaps and projects.', tags:['AI','Resume Analysis','Career'], cats:['AI'], level:'Intermediate', maintainer:'Hriday Arora', repo:'https://github.com/The-Tech-Guy005/skill-swap-ai'},
  {name:'Space Shooter Game', icon:'git', c:['#3ba7f7','#2f6fe0'], desc:'A classic arcade-style space shooter with enemy waves, shooting mechanics, explosion effects, pause controls, and high scores.', tags:['Python','Pygame','Game Development'], cats:['Games'], level:'Beginner friendly', maintainer:'Hriday Arora', repo:'https://github.com/The-Tech-Guy005/Space-Shooter-Game'},
  {name:'StadiumVerse AI', icon:'chat', c:['#ff8a5c','#f0559b'], desc:'An AI-powered stadium operations platform featuring digital twins, real-time monitoring, emergency simulations, and predictive insights.', tags:['AI','Digital Twin','Smart Infrastructure'], cats:['AI'], level:'Advanced', maintainer:'Hriday Arora', repo:'https://github.com/The-Tech-Guy005/stadiumverse-ai'},
  {name:'OpenEarth AI', icon:'leaf', c:['#34c38f','#1f9d6b'], desc:'An environmental intelligence platform using AI, satellite imagery, weather data, and citizen reports to monitor ecosystems and environmental changes.', tags:['AI','Climate Tech','Satellite Imagery'], cats:['AI'], level:'Advanced', maintainer:'Hriday Arora', repo:'https://github.com/The-Tech-Guy005/OpenEarth-AI'},
  {name:'TempleRun C Project', icon:'git', c:['#f7a23b','#e8703f'], desc:'A Temple Run-inspired game project built in C. Explore the repository to learn about its implementation and gameplay.', tags:['C','Game Development','Programming'], cats:['Games'], level:'Intermediate', maintainer:'Hriday Arora', repo:'https://github.com/The-Tech-Guy005/TempleRun-C-Project'},

 
];
function SITE_LINK(k){return SITE.links[k]}

const EVENTS = [
  {d:'2026-08-23', t:'Linux Install Fest', s:'Bring a laptop, leave with a fresh Linux setup.', type:'Workshop', mode:'Campus', time:'11:00 AM'},
  {d:'2026-09-12', t:'Workshop: Git & GitHub', s:'Version control made simple.', type:'Workshop', mode:'Campus', time:'11:00 AM'},
  {d:'2026-09-20', t:'Open Source Sprint', s:'Build. Collaborate. Contribute.', type:'Sprint', mode:'Hybrid', time:'10:00 AM'},
  {d:'2026-10-05', t:'Tech Talk', s:'Real stories. Real builders.', type:'Talk', mode:'Campus', time:'2:00 PM'},
  {d:'2026-10-09', t:'Community Meetup', s:'Meet. Share. Grow.', type:'Meetup', mode:'Campus', time:'3:00 PM'},
  {d:'2026-11-03', t:'Winter Hack Day', s:'A full day to ship something small and real.', type:'Hackathon', mode:'Campus', time:'9:30 AM'}
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
  {n:'Vanshika Sharma', r:'President', c:['#ff8a3d', '#f0559b']},
{n:'Lavanya', r:'Vice President', c:['#6b4ce6', '#3a2fb0']},
{n:'Piyush', r:'Secretary', c:['#34c38f', '#3ba7f7']},
{n:'Kritika', r:'Tech Head', c:['#f0559b', '#8b5cf6']},
{n:'Agrima', r:'Tech Co-Head', c:['#3ba7f7', '#6b4ce6']},
{n:'Dhairya', r:'Creative Head', c:['#ff8a3d', '#f0559b']},
{n:'Himank', r:'Creative Co-Head', c:['#34c38f', '#3ba7f7']},
{n:'Kshitiz', r:'Drive Head', c:['#6b4ce6', '#8b5cf6']},
{n:'Kailash', r:'Event Co-Head', c:['#f0559b', '#ff8a3d']},
{n:'Sunny', r:'Event Head', c:['#3ba7f7', '#34c38f']}
];

const FAQ = [
  ['Do I need to know how to code?','No. Many of our members started with zero experience. We have sessions for complete beginners, and projects that need design, writing and testing too.'],
  ['How much time does it take?','As much as you have. Some members come to one event a month, others work on a project every week.'],
  ['Who can join?','Any MAIT student. If you’re from outside, come to our open events and say hello!'],
  ['Can I start my own project?','Yes. Pitch it at a meetup or send us a note, and we’ll help you find teammates and a first small step.'],
  ['What is a pull request?','It’s how you propose a change to someone else’s project. We’ll walk you through your first one.']
];
