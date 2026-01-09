# Copilot Instructions, janaikameka.com portfolio

Goal
- Build a fast, professional personal website for Janai Kameka.
- Audience: recruiters, hiring managers, and engineering leaders.
- Positioning: Software Engineer AND Scrum Master / Project Manager.
- Hosting: GitHub Pages with a custom domain, janaikameka.com.

Tech stack
- React + TypeScript + Vite
- Single-page layout preferred (section anchors) to avoid router complexity on Pages.
- If routing is used, prefer HashRouter and keep routes minimal.

Content model (data-driven)
- Do not hardcode content in components.
- Put content in typed files under src/data/:
  - profile.ts (name, headline, location, contact, links)
  - experience.ts (roles, bullets, dates)
  - projects.ts (2–4 projects, links, tech tags)
  - skills.ts (grouped skills)
- Components render from these data files.

Required site sections
1) Home (hero)
   - Headline and short summary
   - Primary CTA: Download Resume
   - Secondary CTA: View Projects, Contact
   - Role toggle or tabs: "Software Engineer" vs "Scrum Master / PM"
2) About
   - Short, confident, human, include interests (crochet, fantasy books, anime, sewing)
3) Projects
   - 2–4 projects from src/data/projects.ts, each with:
     - title, one-liner, tech tags, repo link, live link (optional)
4) Experience
   - Render internships and leadership experience as timeline cards
5) Skills
   - Grouped, skimmable
6) Agile Delivery (Scrum Master / PM)
   - Concrete bullets: sprint tracking, intake automation, stakeholder comms, risk tracking, delivery outcomes
7) Hobbies
   - Present as professional personality, concise blurbs
8) Contact
   - Email button, optional form (no backend required)
   - Links to LinkedIn and GitHub

Resume and links
- Include two downloadable resume links:
  - /resume-software.pdf
  - /resume-scrum.pdf
- Include external links in the header and footer:
  - LinkedIn profile
  - GitHub profile
  - GitHub Pages writing hub (github.io) link for future articles
  - LinkedIn articles link (or profile section link)

Design and UX
- Clean, modern, mobile-first, readable typography
- Add light/dark mode toggle
- Accessibility basics:
  - semantic HTML, focus states, keyboard navigation, good contrast
- Performance:
  - no heavy UI frameworks, minimal dependencies
  - optimize images, avoid huge hero images

Deployment requirements (GitHub Pages + custom domain)
- This site will be deployed on a custom domain (janaikameka.com), so Vite base should be '/' (or omitted, default '/').
- Provide a GitHub Actions workflow that builds Vite and deploys dist/ to GitHub Pages.
- Document DNS and GitHub Pages settings steps in README.

Deliverables
- Working local dev (npm run dev)
- Production build (npm run build)
- GitHub Pages deploy workflow
- README with:
  - run instructions
  - where to edit content (src/data)
  - how to set custom domain and HTTPS
