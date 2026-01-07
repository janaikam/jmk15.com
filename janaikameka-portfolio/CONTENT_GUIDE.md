# Content Editing Guide

This is a quick reference for editing your portfolio content without touching code.

## Edit These Files Only

All content is stored in the `src/data/` folder. These are the ONLY files you need to edit:

### 1. Profile (`src/data/profile.ts`)
**What it controls:** Your name, headline, location, contact info, and social links

```typescript
export const profile: Profile = {
  name: 'Janai Kameka',           // Your full name
  headline: 'Software Engineer & Scrum Master',  // Main title
  tagline: 'Building scalable solutions...',     // One-liner tagline
  location: 'Atlanta, GA',        // Your location
  email: 'janai@example.com',     // Email for contact button
  links: {
    github: 'https://github.com/yourname',      // GitHub URL
    linkedin: 'https://linkedin.com/in/yourname', // LinkedIn URL
    articles: 'https://github.com/yourname.io', // Blog/articles URL
  },
  interests: [
    'Crochet', 'Fantasy Books', 'Anime', 'Sewing'  // Your hobbies
  ],
};
```

**Where it appears:**
- Navigation bar (name)
- Hero section (headline)
- Contact section (email, links)
- About section (interests)
- Hobbies section (mentioned)

---

### 2. Experience (`src/data/experience.ts`)
**What it controls:** Your internships and leadership roles

```typescript
export const experience: Experience[] = [
  {
    id: 'delta',                    // Unique ID (any name)
    title: 'IT Intern',             // Job title
    company: 'Delta Airlines',      // Company name
    period: 'Summer 2022',          // Time period
    type: 'internship',             // Type: 'internship' | 'fulltime' | 'leadership'
    bullets: [
      'Improved sprint tracking by 30%',  // Key achievement
      'Automated intake workflows',        // Another achievement
      'Collaborated with teams',          // And another...
    ],
  },
  // Add more roles here...
];
```

**Where it appears:**
- Experience section (timeline cards)
- Each role shows title, company, period, and bullet points

**Tips:**
- Use `type: 'internship'` for internships
- Use `type: 'leadership'` for team lead / PM roles
- Use `type: 'fulltime'` for other full-time positions
- Add as many bullets as you want (use 2-4 for clarity)

---

### 3. Projects (`src/data/projects.ts`)
**What it controls:** Your portfolio projects

```typescript
export const projects: Project[] = [
  {
    id: 'event-locator',            // Unique ID
    title: 'Event Locator App',     // Project name
    description: 'Real-time event discovery platform...',  // One-liner
    tags: ['React', 'TypeScript'],  // Tech stack (shown as badges)
    repoUrl: 'https://github.com/yourname/project',      // GitHub link
    liveUrl: 'https://project-demo.com',  // Live demo (optional)
  },
  // Add up to 4 projects for best visual balance
];
```

**Where it appears:**
- Projects section (grid of cards)
- Each card shows title, description, tags, and links

**Tips:**
- Keep description to 1-2 sentences
- Tags appear as colored badges
- `liveUrl` is optional (omit if no live demo)
- 2-4 projects looks best

---

### 4. Skills (`src/data/skills.ts`)
**What it controls:** Your skills organized by category

```typescript
export const skills: SkillGroup[] = [
  {
    category: 'Languages',          // Category name
    skills: [
      'Python',
      'Java',
      'TypeScript',
      'JavaScript',
      'SQL'
    ],
  },
  {
    category: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'CSS',
      'HTML5',
      'Responsive Design'
    ],
  },
  // Add more categories as needed
];
```

**Where it appears:**
- Skills section (grouped grid)
- Each group shows a category with a list of skills

**Tips:**
- Organize skills by category for clarity
- 4-5 categories work well
- 4-6 skills per category is readable
- Order skills by relevance (most important first)

---

## Editing Workflow

### Quick Update Example

1. **Open** `src/data/profile.ts` in VS Code
2. **Change** your email and LinkedIn URL
3. **Save** (Ctrl+S)
4. **Refresh** browser — it auto-updates! (HMR)

### Add a New Project

1. **Open** `src/data/projects.ts`
2. **Copy** an existing project block
3. **Paste** it and update the values
4. **Save** and refresh — done!

### Update Experience

1. **Open** `src/data/experience.ts`
2. **Find** the role you want to edit
3. **Update** bullets, period, or company name
4. **Save** and refresh

---

## DO NOT Edit

❌ Don't edit component files (`src/components/*.tsx`)  
❌ Don't edit styling files (`*.module.css`)  
❌ Don't edit `App.tsx` or `main.tsx`  
❌ Don't edit `vite.config.ts` or TypeScript configs  

All changes go in `src/data/` files only!

---

## Resume Files

Place PDF files in `public/` folder:

- `resume-software.pdf` — Downloaded when "Software Engineer" is selected
- `resume-scrum.pdf` — Downloaded when "Scrum Master / PM" is selected

If you want just one resume, create both with the same file.

---

## Need More Help?

- **Colors/fonts?** Edit `src/App.css` (look for CSS variables)
- **Section order?** Check `src/App.tsx` (reorder components)
- **Component removed?** Check `.github/workflows/deploy.yml` for deployment

---

## Quick Checklist Before Deploy

- [ ] Updated name and headline in `profile.ts`
- [ ] Added your email in `profile.ts`
- [ ] Updated GitHub and LinkedIn URLs
- [ ] Added your projects (2-4 recommended)
- [ ] Updated experience (internships + roles)
- [ ] Updated skills
- [ ] Updated hobbies/interests
- [ ] Added resume PDFs to `public/`
- [ ] Tested locally: `npm run dev`
- [ ] Built successfully: `npm run build`

---

That's it! Your portfolio is now fully editable. 🎉
