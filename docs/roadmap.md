# Roadmap

This roadmap groups the remaining work by product maturity.

## ✅ Phase 1: Make The Prototype Interactive — Complete

- [x] Implement article search (live dropdown, filters by headline/summary/category).
- [x] Make bottom navigation links point to real pages with active highlighting.
- [x] Add Explore page.
- [x] Add Saved page.
- [x] Add Languages page.
- [x] Add Profile page.
- [x] Implement Save button using localStorage.
- [x] Implement Share button using the Web Share API with clipboard fallback.
- [x] Implement dark mode (CSS class toggle, persists via localStorage).
- [x] Add article-level SEO metadata (title, description, OpenGraph, Twitter card).

## Phase 2: Improve Content Quality

- Replace placeholder special page content with real structured data.
- Add real source URLs.
- Add source reference summaries.
- Add source logo assets or a stronger source identity system.
- Add editorial image assets for each article.
- Add more articles across politics, business, technology, sports, world affairs, education, jobs, and schemes.
- Add related explainer links that point to real article pages.

## Phase 3: Add Language Experience

- Expand the article data model for translations.
- Add translated fields for all supported languages.
- Make language selector update content.
- Make article language buttons update content.
- Preserve identical layout across languages.
- Audit text wrapping for Indian language scripts.

## Phase 4: Add Real Platform Infrastructure

- Add a database.
- Add a CMS or admin panel.
- Add authentication.
- Store saved articles per user (currently device-local only).
- Add article publishing workflow.
- Add editorial review states.
- Add image upload and management.

## Phase 5: Add AI News Explainer Pipeline

- Ingest news from trusted sources.
- Normalize source data.
- Generate explainer drafts.
- Generate timeline drafts.
- Generate affected-user summaries.
- Generate "what next" sections.
- Score confidence based on source agreement and source quality.
- Add human review before publishing.

## Phase 6: Monetization And Trust

- Integrate premium ad provider or direct-sold placements.
- Keep ad density low.
- Add sponsorship labels.
- Add source transparency rules.
- Add correction policy.
- Add editorial policy page.
- Add privacy policy and terms.

## Phase 7: Production Readiness

- Add tests.
- Add accessibility audit.
- Add performance audit.
- Add analytics.
- Add error monitoring.
- Add deployment pipeline.
- Add environment variable documentation.
