# Zahra Elair — Portfolio

Personal portfolio of Zahra Elair, AI Software Engineer.

Live site: https://zahra-elair-portfolio.vercel.app

## Stack

- React 18 and TypeScript, built with Vite
- Tailwind CSS, with light and dark themes
- React Router for the project case-study pages
- Deployed on Vercel

## Run locally

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Editing content

All text content lives in `src/components/personal/data.ts`: personal info, experience, education, and projects.

- A project with `featured: true` gets a large card on the home page.
- A project with a `slug` and `details` also gets its own page at `/projects/<slug>`.
- Skills are listed in `src/components/Skills.tsx`.
