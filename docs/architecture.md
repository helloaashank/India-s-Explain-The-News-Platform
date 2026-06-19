# Architecture

The current app is an interactive Next.js prototype using the App Router.

## Folder Structure

```text
app/
  article/[slug]/page.tsx
  explore/page.tsx
  globals.css
  ipl/page.tsx
  languages/page.tsx
  layout.tsx
  page.tsx
  profile/page.tsx
  saved/page.tsx
  schemes/page.tsx
  upsc/page.tsx

components/
  Atoms.tsx        — shared server-safe primitives (EditorialVisual, TrustPill)
  Interactive.tsx  — client components (DarkModeToggle, SearchBar, BottomNav,
                     SaveButton, ShareButton, ArticleCard)
  Platform.tsx     — server components (Hero, HomeSections, ExplainerBlock,
                     Timeline, SourceTransparency, Confidence, RelatedExplainers,
                     PremiumAd, SpecialRails, TopStoryCard)

data/
  news.ts

docs/
  architecture.md
  feature-checklist.md
  project-brief.md
  roadmap.md
```

## Route Responsibilities

`app/layout.tsx`

- Sets global metadata.
- Imports global CSS.
- Renders the top navigation bar with `SearchBar` and `DarkModeToggle`.
- Renders `BottomNav` (client component with active-link highlighting).

`app/page.tsx`

- Renders the home page using `Hero` and `HomeSections` from `Platform.tsx`.

`app/article/[slug]/page.tsx`

- Generates static article pages from `data/news.ts`.
- Uses `generateStaticParams` and `generateMetadata` (OpenGraph + Twitter card).
- Shows headline, summary, metadata, Save/Share buttons, explainer blocks, timeline, sources, confidence, related explainers, and ads.

`app/explore/page.tsx`

- Browse page with category chips and full article list.

`app/saved/page.tsx`

- Client component. Reads `saved-articles` from localStorage and renders matching articles. Shows empty state if nothing is saved.

`app/languages/page.tsx`

- Shows all 8 supported languages with native script and availability status.

`app/profile/page.tsx`

- Account hub linking to Saved and Languages. Authentication and personalisation are not yet implemented.

`app/schemes/page.tsx`

- Shows government scheme cards.

`app/upsc/page.tsx`

- Shows UPSC-focused feature cards.

`app/ipl/page.tsx`

- Shows IPL explainer feature cards.

## Component Layer

### `components/Atoms.tsx` (server-safe)

Small primitives shared between server and client components. Kept separate to avoid circular dependencies.

- `EditorialVisual` — category-themed decorative visual
- `TrustPill` — confidence score badge

### `components/Interactive.tsx` (`"use client"`)

All components that use browser APIs or React state.

- `DarkModeToggle` — toggles `html.dark` class, persists via localStorage
- `SearchBar` — live search dropdown filtering articles by headline/summary/category
- `BottomNav` — mobile navigation with `usePathname` active-link highlighting
- `SaveButton` — toggles article save state in localStorage
- `ShareButton` — Web Share API with clipboard fallback
- `ArticleCard` — article feed card using SaveButton and ShareButton

### `components/Platform.tsx` (server)

Server components for page sections. Imports `ArticleCard` from `Interactive.tsx` (Next.js App Router allows server components to render client components).

- `Hero`, `HomeSections`, `SpecialRails`, `SkeletonPreview`
- `TopStoryCard`, `PremiumAd`
- `ExplainerBlock`, `Timeline`, `SourceTransparency`, `Confidence`, `RelatedExplainers`

Re-exports `EditorialVisual` and `TrustPill` from `Atoms.tsx` for backward compatibility.

## Data Model

The main content model is `Article` in `data/news.ts`.

Each article currently includes:

- `slug`
- `category`
- `headline`
- `summary`
- `published`
- `publishedDate`
- `readTime`
- `trustScore`
- `sourceCount`
- `language`
- `visual`
- `explainer`
- `timeline`
- `sources`

The `explainer` object contains:

- `happened`
- `matters`
- `affected`
- `next`

## Styling

All styling lives in `app/globals.css`.

The app uses:

- CSS variables for theme colors (light and dark).
- `html.dark` class for dark mode overrides.
- Responsive media queries.
- Custom card, nav, article, timeline, source, and search dropdown styles.
- Mobile bottom navigation (hidden on desktop).
- Subtle hover and fade animations.

## Rendering Model

The app is fully statically generated.

- Home, Explore, Languages, Profile pages are static.
- Saved page is a client component (reads localStorage at runtime).
- Special pages are static.
- Article pages are statically generated from local data using `generateStaticParams`.
- `generateMetadata` produces per-article OpenGraph and Twitter metadata.

There are no API routes, server actions, database queries, or dynamic server-side requests yet.
