import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { SearchBar, DarkModeToggle, BottomNav, ProfileButton, LangSelect } from "@/components/Interactive";
import { LangProvider } from "@/components/LangContext";

export const metadata: Metadata = {
  title: "Bharat Brief | News Explained Simply",
  description: "AI-powered explainers that simplify important news for Indian users."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          <header className="topbar">
            <Link className="brand" href="/" aria-label="Bharat Brief home">
              <span className="brand-mark">BB</span>
              <span className="brand-name">Bharat Brief</span>
            </Link>
            <SearchBar />
            <div className="nav-actions">
              <LangSelect />
              <ProfileButton />
              <DarkModeToggle />
            </div>
          </header>
          {children}
          <BottomNav />
        </LangProvider>
      </body>
    </html>
  );
}
