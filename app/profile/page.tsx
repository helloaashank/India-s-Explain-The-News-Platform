"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/Interactive";

const sections = [
  { label: "Saved Articles", href: "/saved", icon: "♡", available: true },
  { label: "Language Preferences", href: "/languages", icon: "अ", available: true },
  { label: "Reading History", href: "#", icon: "◷", available: false },
  { label: "Notifications", href: "#", icon: "◎", available: false },
];

export default function ProfilePage() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  function handleSignOut() {
    signOut();
    router.push("/");
  }

  if (!user) {
    return (
      <main className="auth-page">
        <div className="auth-card">
          <div className="auth-brand">
            <span className="brand-mark">BB</span>
            <span>Bharat Brief</span>
          </div>
          <h1>Your Profile</h1>
          <p className="auth-sub">Sign in to save articles and personalise your experience.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 28 }}>
            <Link href="/signin" className="auth-submit" style={{ textAlign: "center" }}>Sign in</Link>
            <Link href="/signup" className="auth-submit secondary" style={{ textAlign: "center" }}>Create account</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="section subpage">
      <div className="profile-header">
        <div className="profile-avatar">{user.name.charAt(0).toUpperCase()}</div>
        <div>
          <h1>{user.name}</h1>
          <p className="profile-email">{user.email}</p>
        </div>
        <button className="profile-signout" onClick={handleSignOut}>Sign out</button>
      </div>

      <div className="feature-grid" style={{ marginTop: 28 }}>
        {sections.map(({ label, href, icon, available }) => (
          <Link key={label} href={href} className="feature-card" style={{ display: "block", padding: 22 }}>
            <span style={{ fontSize: 32 }}>{icon}</span>
            <h2>{label}</h2>
            <p>{available ? "Available now." : "Coming soon."}</p>
          </Link>
        ))}
      </div>
      <div style={{ height: 80 }} />
    </main>
  );
}
