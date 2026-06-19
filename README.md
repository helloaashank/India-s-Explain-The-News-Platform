# Bharat Brief

Bharat Brief is a modern, mobile-first news explainer platform for Indian users.

It is not designed like a traditional newspaper website. The product focuses on helping users quickly understand important news through simple, structured explanations.

Every article is built around four questions:

1. What happened?
2. Why does it matter?
3. Who is affected?
4. What happens next?

The intended experience is: "I finally understand the news."

## Product Direction

Bharat Brief should feel:

- Trustworthy
- Intelligent
- Premium
- Minimal
- Easy to read on mobile

Design references from the original brief:

- Apple level cleanliness
- Notion simplicity
- Perplexity AI intelligence
- Ground News credibility
- Inshorts readability

The platform avoids clickbait, newspaper clutter, banner spam, intrusive ads, and flashy animation.

## Current App

The current implementation is an interactive Next.js prototype using the App Router.

Built pages:

- `/` - Home page with hero, search, top stories, latest briefings, special rails, and premium ad placement.
- `/article/[slug]` - Article explainer pages with save, share, SEO metadata, and per-article OpenGraph tags.
- `/explore` - Browse all articles with category chips.
- `/saved` - Locally saved articles (localStorage).
- `/languages` - Supported languages with native script labels.
- `/profile` - Account hub (authentication not yet implemented).
- `/schemes` - Government schemes explained.
- `/upsc` - UPSC simplified current affairs.
- `/ipl` - IPL explained.

Main source files:

- `app/page.tsx` - Home route.
- `app/layout.tsx` - Global layout, top navigation, bottom navigation.
- `app/article/[slug]/page.tsx` - Article detail route with `generateMetadata`.
- `components/Platform.tsx` - Server components (Hero, HomeSections, article sections).
- `components/Interactive.tsx` - Client components (SearchBar, DarkModeToggle, BottomNav, SaveButton, ShareButton, ArticleCard).
- `components/Atoms.tsx` - Shared primitives (EditorialVisual, TrustPill).
- `data/news.ts` - Static article, language, chip, source, and scheme data.
- `app/globals.css` - Global styling, dark mode, responsive design.

## Working Features

- Live article search — filters by headline, summary, and category.
- Dark mode — toggles `html.dark` class, persists across sessions via localStorage.
- Save articles — stored in localStorage, visible on the Saved page.
- Share articles — uses the Web Share API on mobile, clipboard copy fallback on desktop.
- Active navigation — bottom nav highlights the current page.
- Per-article SEO — title, description, OpenGraph, and Twitter card metadata.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Custom CSS
- Static data for the current prototype

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Documentation

Project explanation files are in `docs/`:

- [Project Brief](docs/project-brief.md)
- [Feature Checklist](docs/feature-checklist.md)
- [Architecture](docs/architecture.md)
- [Roadmap](docs/roadmap.md)

## Current Status

Phase 1 is complete. The prototype is interactive: search works, dark mode works, save and share work, and all navigation pages are live.

The next phase is improving content quality — real source URLs, editorial images, more articles, and replacing placeholder special page content.

After that: language switching, backend infrastructure, AI pipeline, and production readiness.
