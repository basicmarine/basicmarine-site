Basic Marine - Static Site

This folder contains a static copy of the Basic Marine Engineering site.

Quick start (serve locally):

1) Using Python 3 (recommended):

   python -m http.server 8000

   Then open http://localhost:8000 in your browser.

2) Using Node (if installed):

   npx serve .

Files:
- index.html — main HTML (references Tailwind CDN, FontAwesome, external CSS/JS)
- assets/css/styles.css — extracted custom CSS
- assets/js/app.js — JavaScript logic (video gallery, cart, modals)

Notes:
- The site relies on CDN resources (Tailwind, FontAwesome). For offline use, download those assets and update links.
- You can update the video database inside `assets/js/app.js`.

Want me to:
- run a local server now (I can start one if you want), or
- deploy this to GitHub Pages and create a repo for you?
