import { languages } from "@/data/news";

export const metadata = { title: "Languages | Bharat Brief" };

const langDetail: Record<string, { native: string; note: string }> = {
  Hindi:     { native: "हिन्दी",  note: "Full translations coming soon" },
  English:   { native: "English", note: "Available now" },
  Tamil:     { native: "தமிழ்",  note: "Full translations coming soon" },
  Telugu:    { native: "తెలుగు", note: "Full translations coming soon" },
  Kannada:   { native: "ಕನ್ನಡ",  note: "Full translations coming soon" },
  Malayalam: { native: "മലയാളം", note: "Full translations coming soon" },
  Bengali:   { native: "বাংলা",  note: "Full translations coming soon" },
  Marathi:   { native: "मराठी",  note: "Full translations coming soon" },
};

export default function LanguagesPage() {
  return (
    <main className="section subpage">
      <p className="eyebrow">Language</p>
      <h1>Choose Your Language</h1>
      <p>Bharat Brief is being translated into India&apos;s major languages. English is fully available today.</p>
      <div className="scheme-grid" style={{ marginTop: 26 }}>
        {languages.map((lang) => {
          const detail = langDetail[lang] ?? { native: lang, note: "Coming soon" };
          return (
            <article className="scheme-card" key={lang} style={{ padding: 22 }}>
              <span className="category">{lang}</span>
              <p style={{ marginTop: 10, marginBottom: 0 }}>
                <strong style={{ fontSize: 28, display: "block" }}>{detail.native}</strong>
                <span>{detail.note}</span>
              </p>
            </article>
          );
        })}
      </div>
      <div style={{ height: 80 }} />
    </main>
  );
}
