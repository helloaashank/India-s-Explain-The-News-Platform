"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { mockSignIn } from "@/components/Interactive";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) { setError("Please fill in all fields."); return; }
    mockSignIn({ name: email.split("@")[0], email });
    router.push("/profile");
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          <span className="brand-mark">BB</span>
          <span>Bharat Brief</span>
        </div>
        <h1>Sign in</h1>
        <p className="auth-sub">Welcome back. Stay informed.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <p className="auth-error">{error}</p>}
          <label>
            <span>Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </label>
          <button type="submit" className="auth-submit">Sign in</button>
        </form>

        <p className="auth-switch">
          Don&apos;t have an account? <Link href="/signup">Sign up</Link>
        </p>
        <p className="auth-note">Authentication is mocked — no data is sent to any server.</p>
      </div>
    </main>
  );
}
