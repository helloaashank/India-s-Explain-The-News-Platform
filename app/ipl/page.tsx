const items = ["Match Result", "Key Moments", "Points Table Impact", "Playoff Chances", "Player Performance Summary"];

export default function IplPage() {
  return (
    <main className="section subpage">
      <p className="eyebrow">Special page</p>
      <h1>IPL Explained</h1>
      <p>Cricket results converted into match context, table movement and simple playoff math.</p>
      <div className="feature-grid">
        {items.map((item) => (
          <article className="feature-card" key={item}>
            <span className="category">IPL</span>
            <h2>{item}</h2>
            <p>Fast, readable summary with the detail fans actually need after every match.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
