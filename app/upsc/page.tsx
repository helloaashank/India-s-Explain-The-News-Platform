const topics = ["Current Affairs", "Daily Brief", "Important Developments", "Exam Relevance Score"];

export default function UpscPage() {
  return (
    <main className="section subpage">
      <p className="eyebrow">Special page</p>
      <h1>UPSC Simplified</h1>
      <p>Daily current affairs translated into exam relevance, context and likely question areas.</p>
      <div className="feature-grid">
        {topics.map((topic, index) => (
          <article className="feature-card" key={topic}>
            <span className="score">{86 + index}</span>
            <h2>{topic}</h2>
            <p>Explained with syllabus links, simple context and concise revision notes.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
