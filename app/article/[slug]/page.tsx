import { notFound } from "next/navigation";
import {
  Confidence,
  EditorialVisual,
  ExplainerBlock,
  PremiumAd,
  RelatedExplainers,
  SourceTransparency,
  Timeline
} from "@/components/Platform";
import { articles, languages } from "@/data/news";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <main className="article-page">
      <section className="article-hero section">
        <div>
          <span className="category">{article.category}</span>
          <h1>{article.headline}</h1>
          <p>{article.summary}</p>
          <div className="article-meta">
            <span>{article.publishedDate}</span>
            <span>{article.language}</span>
            <span>AI News Analyst</span>
          </div>
        </div>
        <EditorialVisual type={article.visual} />
      </section>

      <section className="language-switch section">
        {languages.map((language) => <button key={language}>{language}</button>)}
      </section>

      <section className="section">
        <ExplainerBlock article={article} />
      </section>

      <PremiumAd placement="middle" />
      <Timeline events={article.timeline} />
      <SourceTransparency sources={article.sources} />
      <Confidence score={article.trustScore} />
      <RelatedExplainers />
      <PremiumAd placement="end" />
    </main>
  );
}
