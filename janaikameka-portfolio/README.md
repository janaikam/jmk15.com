# Janai Kameka Portfolio

A fast, accessible, and responsive single-page portfolio site built with **React**, **TypeScript**, and **Vite**.

## Features

✨ **Single-page layout** with smooth section anchors  
🎨 **Light/Dark mode toggle** with system preference detection  
📱 **Mobile-first responsive design** with semantic HTML  
♿ **Accessible** with focus states, keyboard navigation, and good contrast  
⚡ **Performance optimized** with minimal dependencies and CSS modules  
📊 **Data-driven content** via typed TypeScript data files  
🎯 **Hero section with role toggle** (Software Engineer vs. Scrum Master / PM)  
📄 **Resume download buttons** for both roles

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (HMR enabled)
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port shown in terminal).

### Production Build

```bash
npm run build
```

Output is in the `dist/` folder.

### Preview Built Site

```bash
npm run preview
```

## Project Structure

```
src/
├── components/           # React components (one per section)
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── AgileDelivery.tsx
│   ├── Hobbies.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── *.module.css     # Component-scoped styles
├── data/                # Content data files (edit these!)
│   ├── profile.ts       # Name, headline, location, links
│   ├── experience.ts    # Internships and leadership roles
│   ├── projects.ts      # Portfolio projects
│   └── skills.ts        # Skill groups and lists
├── App.tsx              # Main app with theme management
├── App.css              # Global styles and CSS variables
├── index.css            # Base styles
└── main.tsx             # Entry point
```

## Editing Content

All content is data-driven and stored in **`src/data/`** as TypeScript files. Edit these files to update your portfolio:

### Profile (`src/data/profile.ts`)

```typescript
export const profile: Profile = {
  name: 'Your Name',
  headline: 'Your headline',
  tagline: 'Your short tagline',
  location: 'Your location',
  email: 'your@email.com',
  links: {
    github: 'https://github.com/...',
    linkedin: 'https://linkedin.com/in/...',
    articles: 'https://...',
  },
  interests: ['Interest 1', 'Interest 2'],
};
```

### Experience (`src/data/experience.ts`)

Add internships and leadership roles with bullets:

```typescript
export const experience: Experience[] = [
  {
    id: 'unique-id',
    title: 'Role Title',
    company: 'Company Name',
    period: 'Month Year - Month Year',
    type: 'internship' | 'fulltime' | 'leadership',
    bullets: ['Achievement 1', 'Achievement 2'],
  },
  // ...
];
```

### Projects (`src/data/projects.ts`)

```typescript
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project Title',
    description: 'One-liner description',
    tags: ['React', 'TypeScript'],
    repoUrl: 'https://github.com/...',
    liveUrl: 'https://...',  // optional
  },
  // ...
];
```

### Skills (`src/data/skills.ts`)

```typescript
export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Python', 'TypeScript', 'Java'],
  },
  // ...
];
```

## Styling

Styles use **CSS Modules** for component scoping and **CSS custom properties** for theming:

### Theme Variables

Light mode (default) and dark mode automatically switch based on system preference or user toggle:

```css
--bg-primary, --bg-secondary, --bg-nav
--text-primary, --text-secondary
--border-color, --accent-color
```

Edit `src/App.css` to customize colors, fonts, or spacing.

## Deployment to GitHub Pages

### 1. Repository Setup

Ensure your repo is public and contains this code.

### 2. GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Push this file to trigger the workflow.

### 3. GitHub Pages Settings

1. Go to your repo **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose branch **gh-pages** and folder **/ (root)**
4. Click **Save**

Your site will be live at `https://<username>.github.io/<repo>/`

### 4. Custom Domain (janaikameka.com)

1. Add a **`CNAME`** file in the `public/` folder:
   ```
   janaikameka.com
   ```

2. In your DNS provider, add a **CNAME record**:
   ```
   janaikameka.com  CNAME  <username>.github.io
   ```

3. In **GitHub Settings → Pages**, enter your custom domain
4. GitHub will automatically create an HTTPS certificate

## Resume Files

Place your resume PDFs in the `public/` folder:

- `public/resume-software.pdf` – Downloaded when "Software Engineer" role is active
- `public/resume-scrum.pdf` – Downloaded when "Scrum Master / PM" role is active

The Hero section will link to the correct resume based on the user's role selection.

## Accessibility Features

- ✅ Semantic HTML (`<nav>`, `<section>`, `<main>`)
- ✅ Focus states on all interactive elements
- ✅ Keyboard navigation (Tab, Enter)
- ✅ ARIA labels where needed
- ✅ High contrast in light and dark modes
- ✅ Respects `prefers-reduced-motion`

## Performance Tips

- Images: Optimize before adding (use WebP if possible)
- Bundle: Only ~100KB gzipped (React, ReactDOM, CSS)
- Fonts: Using system font stack (no external font files)
- Caching: GitHub Pages caches aggressively; use cache-busting if needed

## Technologies

- **React 19** – UI library
- **TypeScript** – Type safety
- **Vite** – Fast build tool
- **CSS Modules** – Scoped styling
- **GitHub Pages** – Free hosting

## License

This project is open source and available under the MIT License.
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
