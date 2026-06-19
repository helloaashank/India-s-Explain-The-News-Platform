import { articles, chips } from "@/data/news";
import { ArticleCard } from "@/components/Interactive";

export const metadata = { title: "Explore | Bharat Brief" };

export default function ExplorePage() {
  return (
    <main className="section subpage">
      <p className="eyebrow">Discover</p>
      <h1>Explore News</h1>
      <p>Browse topics and articles that matter to you.</p>
      <div className="chips" style={{ marginBottom: 28 }}>
        {chips.map((chip) => <span key={chip}>{chip}</span>)}
      </div>
      <div className="article-list">
        {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
      </div>
      <div style={{ height: 80 }} />
    </main>
  );
}
