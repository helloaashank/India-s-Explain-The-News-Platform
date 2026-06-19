import Link from "next/link";

export const metadata = { title: "Profile | Bharat Brief" };

const sections = [
  { label: "Saved Articles", href: "/saved", icon: "♡" },
  { label: "Language Preferences", href: "/languages", icon: "अ" },
  { label: "Reading History", href: "#", icon: "◷" },
  { label: "Notifications", href: "#", icon: "◎" },
];

export default function ProfilePage() {
  return (
    <main className="section subpage">
      <p className="eyebrow">Account</p>
      <h1>Profile</h1>
      <p>Sign-in and personalisation are coming in a future update. Your saved articles are stored locally on this device for now.</p>
      <div className="feature-grid" style={{ marginTop: 28 }}>
        {sections.map(({ label, href, icon }) => (
          <Link key={label} href={href} className="feature-card" style={{ display: "block", padding: 22 }}>
            <span style={{ fontSize: 36 }}>{icon}</span>
            <h2>{label}</h2>
            <p>{href === "#" ? "Coming soon." : "Available now."}</p>
          </Link>
        ))}
      </div>
      <div style={{ height: 80 }} />
    </main>
  );
}
