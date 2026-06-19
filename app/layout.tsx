import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { SearchBar, DarkModeToggle, BottomNav } from "@/components/Interactive";
import { languages } from "@/data/news";

export const metadata: Metadata = {
  title: "Bharat Brief | News Explained Simply",
  description: "AI-powered explainers that simplify important news for Indian users."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <Link className="brand" href="/" aria-label="Bharat Brief home">
            <span className="brand-mark">BB</span>
            <span>Bharat Brief</span>
          </Link>
          <SearchBar />
          <div className="nav-actions">
            <select aria-label="Select language" defaultValue="English">
              {languages.map((language) => (
                <option key={language}>{language}</option>
              ))}
            </select>
            <Link href="/profile" className="icon-button" aria-label="Profile">◐</Link>
            <DarkModeToggle />
          </div>
        </header>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
