# Feature Checklist

This checklist compares the original product prompt with the current implementation.

## Done

- [x] Next.js app created.
- [x] Modern `Bharat Brief` branding added.
- [x] Mobile-first responsive layout added.
- [x] Sticky top navigation added.
- [x] Logo added.
- [x] Search bar with live article filtering by headline, summary, and category.
- [x] Language selector UI added.
- [x] Profile button links to Profile page.
- [x] Dark mode toggle — applies dark theme, persists via localStorage.
- [x] Hero headline added: `Understand Today's News in 2 Minutes`.
- [x] Hero subheadline added.
- [x] Hero buttons added: `Explore News` and `Trending Topics`.
- [x] Trending chips added.
- [x] Top stories section added.
- [x] Article card layout added.
- [x] Article metadata added.
- [x] Article detail pages added.
- [x] Article framework added: what happened, why it matters, who is affected, what happens next.
- [x] Timeline section added.
- [x] Source transparency section added.
- [x] Expandable source cards added.
- [x] AI confidence section added.
- [x] Related explainers section added.
- [x] Government schemes page added.
- [x] UPSC simplified page added.
- [x] IPL explained page added.
- [x] Premium ad component added.
- [x] Ad after every six articles added in the feed.
- [x] Article middle ad added.
- [x] Article end ad added.
- [x] Sticky mobile bottom navigation added with active link highlighting.
- [x] Subtle hover and fade animation added.
- [x] Skeleton loading preview styles added.
- [x] Explore page added (`/explore`).
- [x] Saved page added (`/saved`) — shows locally saved articles.
- [x] Languages page added (`/languages`) — all 8 languages with native script.
- [x] Profile page added (`/profile`).
- [x] Save button persists saved articles in localStorage.
- [x] Share button uses Web Share API with clipboard fallback.
- [x] SEO metadata per article (`generateMetadata` with OpenGraph and Twitter card).
- [x] Production build passes.

## Partially Done

- [ ] Language selector exists visually, but it does not translate or switch content yet.
- [ ] Article language buttons exist visually, but they do not change article text yet.
- [ ] Profile page exists but there is no account system or authentication yet.
- [ ] Source cards show source names, but not real links, logos, or citations yet.
- [ ] Confidence meter is shown, but confidence is manually stored in static data.
- [ ] Ads are visually premium, but there is no ad provider integration yet.
- [ ] Special pages (schemes, UPSC, IPL) exist, but their content is placeholder-level.

## Remaining

- [ ] Implement one-tap language switching.
- [ ] Add translated article content for Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali, and English.
- [ ] Add real source URLs and source reference details.
- [ ] Add source logos or initials with stronger visual treatment.
- [ ] Add actual article thumbnails or generated editorial images.
- [ ] Add CMS or admin workflow for creating articles.
- [ ] Add backend or database.
- [ ] Add live news ingestion or editorial import workflow.
- [ ] Add AI explainer generation pipeline.
- [ ] Add confidence scoring rules.
- [ ] Add fact-checking workflow.
- [ ] Add authentication.
- [ ] Store saved articles per user (currently device-local only).
- [ ] Add proper loading states connected to data fetching.
- [ ] Add error states.
- [ ] Add social preview images.
- [ ] Add analytics.
- [ ] Add accessibility audit.
- [ ] Add test coverage.
- [ ] Add deployment configuration.

## Known Prototype Limits

- All current content is static mock data.
- Current article dates and topics are sample content.
- No real AI is connected yet.
- No real-time news updates exist yet.
- User data is stored locally on-device only, not server-side.
- No monetization provider is connected.
