"use client";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Article, articles, chips, relatedExplainers, schemes } from "@/data/news";
import { ArticleCard } from "@/components/Interactive";
import { TrustPill } from "@/components/Atoms";
import { useT } from "@/components/LangContext";

// Re-export atoms so existing imports like article/[slug]/page.tsx still work
export { EditorialVisual, TrustPill } from "@/components/Atoms";

export function Hero() {
  const { T } = useT();
  return (
    <section className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">{T.heroEyebrow}</p>
        <h1>{T.heroHeadline}</h1>
        <p className="hero-subtitle">{T.heroSubtitle}</p>
        <div className="hero-actions">
          <Link className="button primary" href="#top-stories">{T.exploreNews}</Link>
          <Link className="button secondary" href="#trending">{T.trendingTopics}</Link>
        </div>
        <div className="chips" id="trending">
          {chips.map((chip) => <span key={chip}>{chip}</span>)}
        </div>
      </div>
      <div className="hero-visual" aria-label="Bharat Brief explainer preview">
        <div className="phone-frame">
          <div className="phone-top"><span>Today</span><strong>92%</strong></div>
          <div className="signal-card">
            <span className="mini-badge">Policy</span>
            <h2>{T.whatHappened}</h2>
            <p>{T.heroSubtitle}</p>
          </div>
          <div className="answer-stack">
            {[T.whatHappened, T.whyItMatters, T.whoAffected, T.whatNext].map((line, index) => (
              <div key={line} style={{ "--i": index } as CSSProperties}>
                <span />{line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TopStoryCard({ article }: { article: Article }) {
  const { T } = useT();
  return (
    <Link className="top-story" href={`/article/${article.slug}`}>
      <span className="category">{article.category}</span>
      <h3>{article.headline}</h3>
      <p>{article.summary}</p>
      <div className="story-meta">
        <span>{article.published}</span>
        <span>{article.readTime}</span>
      </div>
      <div className="story-proof">
        <TrustPill score={article.trustScore} />
        <span>{article.sourceCount} {T.sourcesVerified}</span>
      </div>
    </Link>
  );
}

export function PremiumAd({ placement }: { placement: "feed" | "middle" | "end" }) {
  return (
    <aside className={`premium-ad ${placement}`}>
      <span>Sponsored insight</span>
      <strong>{placement === "feed" ? "Understand markets with context, not noise." : "Premium placement reserved for trusted partners."}</strong>
      <p>No popups. No autoplay. Just relevant, clearly marked advertising.</p>
    </aside>
  );
}

export function HomeSections() {
  const { T } = useT();
  return (
    <>
      <section className="section" id="top-stories">
        <div className="section-heading">
          <p className="eyebrow">{T.topStoriesEyebrow}</p>
          <h2>{T.topStoriesHeading}</h2>
        </div>
        <div className="top-story-grid">
          {articles.slice(0, 3).map((article) => <TopStoryCard key={article.slug} article={article} />)}
        </div>
      </section>
      <section className="section">
        <div className="section-heading row">
          <div>
            <p className="eyebrow">{T.latestEyebrow}</p>
            <h2>{T.latestHeading}</h2>
          </div>
          <TrustPill score={92} />
        </div>
        <div className="article-list">
          {articles.map((article, index) => (
            <div key={article.slug}>
              <ArticleCard article={article} />
              {index === 5 && <PremiumAd placement="feed" />}
            </div>
          ))}
        </div>
      </section>
      <SpecialRails />
      <SkeletonPreview />
    </>
  );
}

export function SpecialRails() {
  const { T } = useT();
  return (
    <section className="section special-grid">
      <Link className="special-panel" href="/schemes">
        <span className="category">{T.schemesLabel}</span>
        <h2>Benefits, eligibility, process, deadlines and documents.</h2>
        <div className="mini-list">{schemes.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div>
      </Link>
      <Link className="special-panel" href="/upsc">
        <span className="category">{T.upscLabel}</span>
        <h2>Current affairs with exam relevance scores.</h2>
        <div className="score-ring">87</div>
      </Link>
      <Link className="special-panel" href="/ipl">
        <span className="category">{T.iplLabel}</span>
        <h2>Match results, playoff chances and key moments.</h2>
        <div className="points-strip"><span /><span /><span /></div>
      </Link>
    </section>
  );
}

export function SkeletonPreview() {
  return (
    <section className="section skeleton-section" aria-label="Loading state preview">
      <div className="skeleton-card"><span /><span /><span /><span /></div>
      <div className="skeleton-card compact"><span /><span /><span /></div>
    </section>
  );
}

export function ExplainerBlock({ article }: { article: Article }) {
  const { T } = useT();
  const blocks = [
    [T.whatHappened, article.explainer.happened],
    [T.whyItMatters, article.explainer.matters],
    [T.whoAffected, article.explainer.affected],
    [T.whatNext, article.explainer.next],
  ];
  return (
    <section className="explainer-card">
      {blocks.map(([title, copy]) => (
        <div key={title}><h2>{title}</h2><p>{copy}</p></div>
      ))}
    </section>
  );
}

export function Timeline({ events }: { events: string[] }) {
  const { T } = useT();
  return (
    <section className="section article-section">
      <h2>{T.timeline}</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={event} className="timeline-item">
            <span>{index + 1}</span>
            <p>{event}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SourceTransparency({ sources }: { sources: string[] }) {
  const { T } = useT();
  return (
    <section className="section article-section">
      <h2>{T.sourceTransparency}</h2>
      <div className="source-grid">
        {sources.map((source) => (
          <details key={source} className="source-card">
            <summary><span>{source.slice(0, 2).toUpperCase()}</span>{source}</summary>
            <p>Used to cross-check facts, chronology and public claims for this explainer.</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Confidence({ score }: { score: number }) {
  const { T } = useT();
  return (
    <section className="confidence">
      <div className="meter" style={{ "--score": `${score}%` } as CSSProperties}>
        <span>{score}%</span>
      </div>
      <div>
        <h2>{T.highConfidence}</h2>
        <p>{T.confidenceBody}</p>
      </div>
    </section>
  );
}

export function RelatedExplainers() {
  const { T } = useT();
  return (
    <section className="section article-section">
      <h2>{T.relatedExplainers}</h2>
      <div className="related-row">
        {relatedExplainers.map((item) => <article key={item}>{item}</article>)}
      </div>
    </section>
  );
}
