"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { mockSignIn } from "@/components/Interactive";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !password) { setError("Please fill in all fields."); return; }
    if (password.length < 6) { setError("Password must be at least 6 characters."); return; }
    mockSignIn({ name, email });
    router.push("/profile");
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          <span className="brand-mark">BB</span>
          <span>Bharat Brief</span>
        </div>
        <h1>Create account</h1>
        <p className="auth-sub">Join Bharat Brief. Understand India better.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <p className="auth-error">{error}</p>}
          <label>
            <span>Name</span>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </label>
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
              placeholder="Min. 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </label>
          <button type="submit" className="auth-submit">Create account</button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link href="/signin">Sign in</Link>
        </p>
        <p className="auth-note">Authentication is mocked — no data is sent to any server.</p>
      </div>
    </main>
  );
}
