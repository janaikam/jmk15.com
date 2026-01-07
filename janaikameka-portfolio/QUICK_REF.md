# ⚡ Quick Reference Card

## Commands

```bash
npm run dev      # Start dev server (http://localhost:5173+)
npm run build    # Build for production
npm run preview  # Preview built site locally
npm run lint     # Check for TypeScript errors
```

## Edit These Files (Only!)

| File | What it controls |
|------|------------------|
| `src/data/profile.ts` | Name, email, links, interests |
| `src/data/experience.ts` | Internships & leadership roles |
| `src/data/projects.ts` | Portfolio projects (up to 4) |
| `src/data/skills.ts` | Skills by category |

## File Structure

```
src/
├── components/        # React components (don't edit)
├── data/             # Content files (EDIT THESE)
├── App.tsx           # Main app (don't edit)
├── App.css           # Theme colors (can edit)
└── main.tsx          # Entry point (don't edit)
```

## Key Features

- ✅ Sticky navigation with dark/light toggle
- ✅ Hero with role toggle (Engineer ↔ PM)
- ✅ 8 main sections + footer
- ✅ Responsive mobile-first design
- ✅ Accessibility (keyboard nav, focus states)
- ✅ GitHub Pages deploy ready

## Deployment Checklist

- [ ] Content edited in `src/data/*.ts`
- [ ] Resume PDFs added to `public/`
- [ ] Build succeeds: `npm run build`
- [ ] Pushed to GitHub: `git push origin main`
- [ ] GitHub Pages enabled: Settings → Pages
- [ ] Custom domain configured (optional)

## Theme Colors (in `src/App.css`)

Light mode:
- `--accent-color: #2563eb` (blue)
- `--text-primary: #1a1a1a` (dark)
- `--bg-primary: #ffffff` (white)

Dark mode:
- `--accent-color: #3b82f6` (lighter blue)
- `--text-primary: #ffffff` (white)
- `--bg-primary: #0f0f0f` (near black)

## Section Navigation Anchors

```
Home → #home
About → #about
Projects → #projects
Experience → #experience
Skills → #skills
Agile Delivery → #agile
Hobbies → #hobbies
Contact → #contact
```

## Support

- **Content guide**: See `CONTENT_GUIDE.md`
- **Type definitions**: See `TYPES_REFERENCE.md`
- **Full docs**: See `README.md`
- **Build info**: See `BUILD_SUMMARY.md`

---

**You're all set! Edit content → test locally → push to GitHub → auto-deploys! 🚀**
