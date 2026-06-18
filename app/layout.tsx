import type { Metadata } from "next";
import "./globals.css";
import { BottomNav, TopNav } from "@/components/Platform";

export const metadata: Metadata = {
  title: "Bharat Brief | News Explained Simply",
  description: "AI-powered explainers that simplify important news for Indian users."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
