import { schemes } from "@/data/news";

const fields = ["Benefits", "Eligibility", "Application Process", "Deadlines", "Documents Required"];

export default function SchemesPage() {
  return (
    <main className="section subpage">
      <p className="eyebrow">Special page</p>
      <h1>Government Schemes Explained</h1>
      <p>Plain-language cards for benefits, eligibility, application steps, deadlines and documents.</p>
      <div className="scheme-grid">
        {schemes.map((scheme) => (
          <article className="scheme-card" key={scheme}>
            <span className="category">{scheme}</span>
            {fields.map((field) => <p key={field}><strong>{field}</strong><span>Clear checklist for Indian users.</span></p>)}
          </article>
        ))}
      </div>
    </main>
  );
}
