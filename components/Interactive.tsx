"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Article } from "@/data/news";
import { articles, languages } from "@/data/news";

// ── Mock auth ────────────────────────────────────────────────────────────────

type AuthUser = { name: string; email: string };

export function mockSignIn(user: AuthUser) {
  localStorage.setItem("auth-user", JSON.stringify(user));
}

export function mockSignOut() {
  localStorage.removeItem("auth-user");
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("auth-user");
      setUser(raw ? JSON.parse(raw) : null);
    } catch { setUser(null); }
  }, []);
  return { user, signOut: () => { mockSignOut(); setUser(null); } };
}

// ── Profile button (auth-aware) ───────────────────────────────────────────

export function ProfileButton() {
  const { user } = useAuth();
  const href = user ? "/profile" : "/signin";
  return (
    <Link href={href} className="icon-button" aria-label={user ? "Your profile" : "Sign in"}>
      {user ? (
        <span className="avatar-initials">{user.name.charAt(0).toUpperCase()}</span>
      ) : "◐"}
    </Link>
  );
}

// ── Dark mode ────────────────────────────────────────────────────────────────

export function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("dark-mode");
    const initial = stored === "true";
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    localStorage.setItem("dark-mode", String(next));
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <button className="icon-button" aria-label="Toggle dark mode" onClick={toggle}>
      {dark ? "☀" : "☾"}
    </button>
  );
}

// ── Search bar ───────────────────────────────────────────────────────────────

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Article[]>([]);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function search(q: string) {
    setQuery(q);
    if (!q.trim()) { setResults([]); setOpen(false); return; }
    const lq = q.toLowerCase();
    const hits = articles.filter(
      (a) =>
        a.headline.toLowerCase().includes(lq) ||
        a.summary.toLowerCase().includes(lq) ||
        a.category.toLowerCase().includes(lq)
    );
    setResults(hits);
    setOpen(true);
  }

  function expand() {
    setExpanded(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  function collapse() {
    setExpanded(false);
    setQuery("");
    setResults([]);
    setOpen(false);
  }

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        if (!query) setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [query]);

  return (
    <div ref={ref} className={`search-wrapper${expanded ? " expanded" : ""}`}>
      {/* Mobile: tap to expand */}
      <button className="search-icon-btn icon-button" onClick={expand} aria-label="Search">⌕</button>
      {/* Input row — always visible on desktop, only when expanded on mobile */}
      <label className="search">
        <span>⌕</span>
        <input
          ref={inputRef}
          placeholder="Search articles..."
          value={query}
          onChange={(e) => search(e.target.value)}
          onFocus={() => query && setOpen(true)}
          aria-label="Search articles"
        />
        {(query || expanded) && (
          <button className="search-clear" onClick={collapse} aria-label="Close search">✕</button>
        )}
      </label>
      {open && (
        <div className="search-dropdown">
          {results.length === 0 ? (
            <p className="search-empty">No results for &ldquo;{query}&rdquo;</p>
          ) : (
            results.map((a) => (
              <Link
                key={a.slug}
                href={`/article/${a.slug}`}
                className="search-result"
                onClick={() => { setQuery(""); setOpen(false); setExpanded(false); }}
              >
                <span className="category">{a.category}</span>
                <strong>{a.headline}</strong>
                <p>{a.summary}</p>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

// ── Bottom nav (active link highlighting) ────────────────────────────────────

const navItems = [
  { label: "Home",      href: "/",          icon: "⌂" },
  { label: "Explore",   href: "/explore",   icon: "⌕" },
  { label: "Saved",     href: "/saved",     icon: "♡" },
  { label: "Languages", href: "/languages", icon: "अ" },
  { label: "Profile",   href: "/profile",   icon: "◐" },
];

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="bottom-nav" aria-label="Primary">
      {navItems.map(({ label, href, icon }) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link key={label} href={href} className={active ? "active" : undefined}>
            <span>{icon}</span>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

// ── Save button ───────────────────────────────────────────────────────────────

export function SaveButton({ slug }: { slug: string }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const list: string[] = JSON.parse(localStorage.getItem("saved-articles") ?? "[]");
      setSaved(list.includes(slug));
    } catch { /* ignore */ }
  }, [slug]);

  function toggle() {
    try {
      const list: string[] = JSON.parse(localStorage.getItem("saved-articles") ?? "[]");
      const next = list.includes(slug)
        ? list.filter((s) => s !== slug)
        : [...list, slug];
      localStorage.setItem("saved-articles", JSON.stringify(next));
      setSaved(next.includes(slug));
    } catch { /* ignore */ }
  }

  return (
    <button onClick={toggle} aria-label={saved ? "Unsave article" : "Save article"} className={saved ? "saved" : ""}>
      {saved ? "♥ Saved" : "♡ Save"}
    </button>
  );
}

// ── Share button ──────────────────────────────────────────────────────────────

export function ShareButton({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = `${window.location.origin}/article/${slug}`;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch { /* user cancelled */ }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button onClick={share} aria-label="Share article">
      {copied ? "✓ Copied" : "↑ Share"}
    </button>
  );
}

// ── Article card (uses Save + Share) ─────────────────────────────────────────

import { EditorialVisual } from "@/components/Atoms";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="article-card">
      <EditorialVisual type={article.visual} />
      <div className="card-body">
        <span className="category">{article.category}</span>
        <h3>{article.headline}</h3>
        <p>{article.summary}</p>
        <div className="meta-grid">
          <span>{article.published}</span>
          <span>{article.readTime}</span>
          <span>{article.sourceCount} sources</span>
          <span>{article.language}</span>
        </div>
        <div className="card-actions">
          <Link href={`/article/${article.slug}`}>Read Article</Link>
          <SaveButton slug={article.slug} />
          <ShareButton title={article.headline} slug={article.slug} />
        </div>
      </div>
    </article>
  );
}
