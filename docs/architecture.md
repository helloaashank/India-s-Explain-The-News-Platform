# Architecture

The current app is a static Next.js prototype.

## Folder Structure

```text
app/
  article/[slug]/page.tsx
  globals.css
  ipl/page.tsx
  layout.tsx
  page.tsx
  schemes/page.tsx
  upsc/page.tsx

components/
  Platform.tsx

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
- Renders the top navigation.
- Renders the mobile bottom navigation.

`app/page.tsx`

- Renders the home page.
- Uses `Hero` and `HomeSections` from `components/Platform.tsx`.

`app/article/[slug]/page.tsx`

- Generates static article pages from `data/news.ts`.
- Uses `generateStaticParams`.
- Shows headline, summary, metadata, explainer blocks, timeline, sources, confidence, related explainers, and ads.

`app/schemes/page.tsx`

- Shows government scheme cards.

`app/upsc/page.tsx`

- Shows UPSC-focused feature cards.

`app/ipl/page.tsx`

- Shows IPL explainer feature cards.

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

## Component Layer

Most reusable UI lives in `components/Platform.tsx`.

Important components:

- `TopNav`
- `BottomNav`
- `Hero`
- `HomeSections`
- `ArticleCard`
- `TopStoryCard`
- `SpecialRails`
- `ExplainerBlock`
- `Timeline`
- `SourceTransparency`
- `Confidence`
- `RelatedExplainers`
- `PremiumAd`

## Styling

All styling currently lives in `app/globals.css`.

The app uses:

- CSS variables for theme colors.
- Responsive media queries.
- Custom card, nav, article, timeline, and source styles.
- Mobile bottom navigation.
- Subtle hover and fade animation.

## Current Rendering Model

The current app is fully static.

- Home page is static.
- Special pages are static.
- Article pages are statically generated from local data.

There are no API routes, server actions, database queries, or dynamic content requests yet.
