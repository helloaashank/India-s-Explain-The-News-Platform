"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { articles } from "@/data/news";
import { ArticleCard } from "@/components/Interactive";

export default function SavedPage() {
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("saved-articles") ?? "[]");
      setSaved(Array.isArray(data) ? data : []);
    } catch {
      setSaved([]);
    }
  }, []);

  const savedArticles = articles.filter((a) => saved.includes(a.slug));

  return (
    <main className="section subpage">
      <p className="eyebrow">Your list</p>
      <h1>Saved Articles</h1>
      {savedArticles.length === 0 ? (
        <div className="empty-state">
          <p>No saved articles yet.</p>
          <p>Tap <strong>Save</strong> on any article to read it later.</p>
          <Link className="button primary" href="/" style={{ marginTop: 18, display: "inline-flex" }}>Browse News</Link>
        </div>
      ) : (
        <div className="article-list" style={{ marginTop: 24 }}>
          {savedArticles.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      )}
      <div style={{ height: 80 }} />
    </main>
  );
}
