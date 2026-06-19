"use client";
import type { Article } from "@/data/news";

const visualGlyph: Record<Article["visual"], string> = {
  economy: "₹",
  policy: "⌂",
  tech: "01",
  sports: "IPL",
  world: "◎",
  education: "A+"
};

export function EditorialVisual({ type }: { type: Article["visual"] }) {
  return (
    <div className={`editorial-visual ${type}`}>
      <span className="orb one" />
      <span className="orb two" />
      <span className="line l1" />
      <span className="line l2" />
      <span className="line l3" />
      <span className="glyph">{visualGlyph[type]}</span>
    </div>
  );
}

export function TrustPill({ score }: { score: number }) {
  const label = score >= 90 ? "High Confidence" : "Verified";
  return <span className="trust-pill">{score}% {label}</span>;
}
