# Personal Portfolio / CV Website Plan

## Overview

Build a modern, cinematic personal portfolio website that works like an interactive CV.

The website will include:

- Personal introduction and photos
- Skills and education
- Featured projects
- Automatic GitHub project listing
- Photo gallery
- Contact links
- Smooth scroll-based transitions
- Optional 3D WebGL effects later

The main goal is to create a website where visitors can quickly understand who I am, see my technical skills, explore my projects, and visit my GitHub profile.

---

## Website Flow

```text
Loading Screen
    ↓
Hero / Introduction
    ↓
About Me
    ↓
Skills
    ↓
Featured Projects
    ↓
All GitHub Projects
    ↓
Photo Gallery
    ↓
Contact / Footer
```

---

## Sections

### 1. Loading Screen

A short loading animation before the main website appears.

Features:

- Name or logo animation
- Loading percentage or progress bar
- Smooth transition into the hero section

Example text:

```text
Loading Portfolio...
```

Transition:

- Fade out
- Scale transition
- Slide-up reveal

---

### 2. Hero / Introduction

The first screen visitors see.

Content:

- Large name
- Short role/title
- Short introduction
- Buttons for projects, CV, and GitHub

Example:

```text
Hi, I’m [Your Name]

I build C++ applications, work with databases,
and turn ideas into practical software.

[View Projects] [Download CV] [GitHub]
```

Visual ideas:

- Personal photo with subtle parallax
- Animated gradient background
- Optional 3D object using Three.js later

Transitions:

- Text appears word by word or letter by letter
- Photo fades and moves slightly with scroll
- Buttons animate in after the heading

---

### 3. About Me

A short section explaining who I am.

Content:

- Student / developer introduction
- Interests: C++, Python, databases, software projects
- Current learning focus
- Location, optional
- Personal photo

Example:

```text
I’m a computer science student who enjoys building
practical software, working with databases, and
learning how things work behind the scenes.
```

Transition:

- Photo and text move at different speeds while scrolling
- Text fades in from below

---

### 4. Skills

Display technical skills clearly.

Skills to include:

- C
- C++
- Python
- SQL
- MySQL
- SQLite
- Data Structures and Algorithms
- Git and GitHub
- VS Code
- CMake
- MSYS2 / MinGW
- Qt, if applicable
- DaVinci Resolve / video editing, optional

Presentation:

- Skill tags
- Cards
- Icons
- Animated progress bars, optional

Transition:

- Cards rise into view one by one
- Hover effect highlights each skill

---

### 5. Featured Projects

Show the best 3–5 projects manually.

Each project card should contain:

- Project title
- Short description
- Screenshot, GIF, or demo video
- Technologies used
- GitHub repository link
- Live demo link, if available

Example projects:

| Project | Description | Technologies |
|---|---|---|
| Student Management System | Manage student records with add, search, edit, delete, and report features | C++, SQLite |
| Fingerprint Access Management | Student data input, access logging, and file/database management | C++ |
| Calendar Application | Calendar display, leap-year logic, date calculations, and file storage | C |
| Two-Player Board Game | Console-based game with interactive logic and board handling | C |

Transition:

- Cards fade and scale in while scrolling
- Image zooms slightly on hover
- “View on GitHub” button appears on hover

---

### 6. All GitHub Projects

Automatically display repositories from GitHub using the GitHub REST API.

API endpoint:

```text
https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=100
```

Each repository card can show:

- Repository name
- Description
- Primary language
- Stars
- Last updated date
- Direct GitHub link

Features:

- Filter by language: All, C++, C, Python, SQL, JavaScript
- Exclude forks and archived repositories
- Show repositories with useful descriptions first
- Button to visit the full GitHub profile

Advantage:

- New public repositories appear automatically
- The portfolio stays updated without manually editing project cards

---

### 7. Photo Gallery

A personal section with selected photos.

Photo ideas:

- Project screenshots
- Coding setup
- College or event photos
- Video-editing or creative work
- Personal moments, optional

Layout options:

- Horizontal scrolling gallery
- Masonry grid
- Fullscreen image lightbox

Transition:

- Photos slide horizontally with scroll
- Clicking a photo opens it larger
- Subtle parallax movement

---

### 8. Contact / Footer

Make it easy for visitors to contact me.

Include:

- Email button
- GitHub profile link
- LinkedIn profile link
- Download CV button
- Optional contact form

Contact form options:

- Formspree
- Web3Forms
- Google Forms link

Transition:

- Contact links fade in
- Footer has a smooth final animation

---

## Technology Stack

### Phase 1: Basic Website

Use simple and reliable technologies first.

- HTML
- CSS
- JavaScript
- GitHub Pages for hosting

### Phase 2: Animations

Add animation libraries after the basic website works.

- GSAP
- GSAP ScrollTrigger
- Lenis for smooth scrolling

Animation effects:

- Text reveals
- Image parallax
- Scroll-based section transitions
- Card hover effects
- Horizontal photo gallery
- Pinned sections

### Phase 3: 3D Effects

Add 3D only after the normal website is complete.

- Three.js
- WebGL
- Blender models exported as `.glb`, optional

Possible 3D ideas:

- Rotating cube or sphere in the hero
- Abstract wireframe background
- Camera movement tied to scroll
- 3D project showcase

---

## GitHub Integration Plan

Use both curated and automatic project sections.

### Curated Featured Projects

Manually select the best repositories.

Benefits:

- Better descriptions
- Better visuals
- More professional presentation
- Easier to highlight important work

### Automatic GitHub Repositories

Fetch public repositories using the GitHub API.

Benefits:

- Always updated
- Shows active development
- Displays all public work
- Requires less manual maintenance

Recommended structure:

```text
Featured Projects
    ↓
All GitHub Repositories
```

---

## Design System

| Element | Recommendation |
|---|---|
| Theme | Dark background with light text |
| Accent color | Electric blue, cyan, violet, or green |
| Main font | Inter, Space Grotesk, or Satoshi |
| Code font | JetBrains Mono |
| Layout | Large headings, clean spacing, project cards |
| Images | Compressed WebP or JPG |
| Motion | Smooth, subtle, professional |

---

## Folder Structure

```text
portfolio/
├── index.html
├── about.html            # Optional if using multiple pages
├── css/
│   ├── style.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── github.js
│   ├── animations.js
│   └── gallery.js
├── assets/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── project-1.png
│   │   ├── project-2.png
│   │   └── gallery/
│   └── cv/
│       └── resume.pdf
└── README.md
```

---

## Development Roadmap

### Week 1: Website Structure

- Create GitHub repository
- Set up HTML, CSS, and JavaScript files
- Build hero, about, skills, projects, gallery, and contact sections
- Add personal photo and CV download button
- Add basic responsive design

### Week 2: GitHub Integration

- Add GitHub API fetching
- Display repositories dynamically
- Add language filters
- Add repository links
- Handle missing descriptions and images

### Week 3: Animations

- Add GSAP and ScrollTrigger
- Add smooth scrolling
- Add text reveal animations
- Add parallax image effects
- Add project-card animations
- Add photo gallery transitions

### Week 4: Polish and Launch

- Optimize images
- Add loading screen
- Test on mobile and desktop
- Fix responsive issues
- Deploy website
- Add portfolio link to GitHub profile and CV

---

## Deployment

Start with GitHub Pages.

Example URL:

```text
https://yourusername.github.io
```

Other hosting options:

- Vercel
- Netlify
- Cloudflare Pages

GitHub Pages is recommended first because it integrates naturally with GitHub repositories.

---

## Performance Checklist

- Compress all images
- Use WebP images where possible
- Lazy-load gallery images
- Avoid oversized videos
- Limit heavy 3D effects on mobile
- Test website speed using Lighthouse
- Keep JavaScript modular

---

## Final Feature Checklist

- [ ] Loading screen
- [ ] Hero section with name and role
- [ ] Personal photo
- [ ] About section
- [ ] Skills section
- [ ] Featured projects
- [ ] Project screenshots or GIFs
- [ ] GitHub repository links
- [ ] Automatic GitHub project listing
- [ ] Project filters
- [ ] Photo gallery
- [ ] Download CV button
- [ ] GitHub profile link
- [ ] LinkedIn profile link
- [ ] Email contact link
- [ ] Mobile-friendly layout
- [ ] Smooth scrolling
- [ ] GSAP scroll animations
- [ ] Optional Three.js 3D hero
- [ ] Deployed website
