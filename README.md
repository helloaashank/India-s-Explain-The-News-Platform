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

The current implementation is a static Next.js app using the App Router.

Built pages:

- `/` - Home page with hero, search, top stories, latest briefings, special rails, and premium ad placement.
- `/article/[slug]` - Static article explainer pages generated from local article data.
- `/schemes` - Government schemes explained.
- `/upsc` - UPSC simplified current affairs page.
- `/ipl` - IPL explained page.

Main source files:

- `app/page.tsx` - Home route.
- `app/layout.tsx` - Global layout, top navigation, and bottom navigation.
- `app/article/[slug]/page.tsx` - Article detail route.
- `components/Platform.tsx` - Shared UI components.
- `data/news.ts` - Static article, language, chip, source, and scheme data.
- `app/globals.css` - Global styling and responsive design.

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

This is a polished static prototype. It communicates the core product idea well, but it is not yet a full news platform.

The next major work is to add real content workflows, working search, saved articles, language switching, source references, and a backend or CMS.
