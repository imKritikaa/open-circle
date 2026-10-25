# Open Circle Website

A multi-page website (Home, About, Projects, Events, Community) in plain HTML, CSS and JavaScript.
No build step, no npm, no framework.

Live Demo: https://open-circle-five.vercel.app/

## Folder structure

```
open-circle/
├── index.html        Page markup: nav, all five pages, footer, Join dialog, shared SVG defs
├── README.md         This file
├── css/
│   └── style.css     All styles: colour tokens (light + dark), layout, cards, animations, responsive rules
└── js/               Loaded in this order by index.html
    ├── data.js       YOUR CONTENT: site links, projects, events, team, FAQ, join steps
    ├── icons.js      Helpers ($, $$, esc), icon set, social icons, tech-stack logos
    ├── render.js     Builds cards, timeline, logo wall, FAQ; Projects filter; Events tabs
    ├── art.js        Draws the hero castle illustration into the SVG in index.html
    └── main.js       Theme switch, nav, particles, spotlight cards, glow cursor, router, Join dialog
```

## Run it in VS Code

Easiest: open the `open-circle` folder in VS Code, install the **Live Server** extension,
right-click `index.html` and choose **Open with Live Server**.

You can also just double-click `index.html`; it works straight from the file system.
An internet connection is needed for the Google Fonts (Fraunces, DM Sans, Caveat).

## What to edit

| I want to change...                          | Edit this                                              |
|----------------------------------------------|--------------------------------------------------------|
| Email, GitHub / Discord / LinkedIn / Instagram links | `SITE` at the top of `js/data.js`              |
| Projects (name, text, tags, level, repo link)| `PROJECTS` in `js/data.js`                             |
| Events (date, title, time, mode)             | `EVENTS` in `js/data.js` (dates are `YYYY-MM-DD`; past events move to the Past tab automatically) |
| Team names and roles                         | `TEAM` in `js/data.js`                                 |
| FAQ                                          | `FAQ` in `js/data.js`                                  |
| The four Learn / Build / Contribute / Grow cards | `PILLARS` in `js/data.js`                          |
| Headings and paragraphs on each page         | the matching `<div data-page="...">` in `index.html`   |
| Member / project counts (100+, 20+)          | search for `100+` in `index.html` (Home and Community) |
| Footer text, "MAIT | Rohini, Delhi"          | the `<footer>` in `index.html`                         |
| Colours, fonts, spacing                      | the `:root` tokens at the top of `css/style.css`       |
| Tech-stack logos                             | `TECH` in `js/icons.js`                                |

Colour tokens for dark mode are defined twice in `css/style.css` (once for the system setting,
once for the manual toggle). Change both if you change a dark colour.

## The Join form

The "Send note" form has no server behind it. It opens the visitor's email app with the message
filled in, addressed to `SITE.email`. To use a Google Form or a Discord invite instead, change the
Join buttons or the form handler at the bottom of `js/main.js`.

## Put it online (GitHub Pages)

1. Create a GitHub repository and upload everything inside `open-circle/` to its root.
2. In the repository go to **Settings, Pages**, choose **Deploy from a branch**, pick `main` and `/ (root)`.
3. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

Netlify and Vercel also work: drag the folder onto their dashboard.

Deployment test