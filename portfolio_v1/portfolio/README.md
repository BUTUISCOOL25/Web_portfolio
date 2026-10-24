# Portfolio

Static site (HTML, CSS, vanilla JS). No build step, no backend.

## Customize
1. Edit `js/config.js`: name, initials, role, GitHub username/URL, LinkedIn, email, CV path, featured repo names.
2. Put your CV at `assets/cv/resume.pdf`.
3. Replace placeholders in `assets/images/` (profile, about, p1-p4) and `assets/images/gallery/`. If you use JPG/WebP, update the file names and alt text in `index.html`.
4. Edit the About text, education, location, and skills in `index.html`.

## Preview
Open `index.html`, or run `python -m http.server` and visit http://localhost:8000.

## Deploy to GitHub Pages
1. Create a repo (e.g. `username.github.io`) and push these files to `main`.
2. Settings > Pages > Deploy from branch > `main` / root.
3. Visit `https://username.github.io`.

## Before launch
Name, role, bio, GitHub username/URL, LinkedIn, email, CV PDF, photos, project links and screenshots, skills.

## Next milestones
GSAP/ScrollTrigger motion (`js/animations.js`), optional contact form, optional Three.js hero.
