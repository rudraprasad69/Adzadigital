export default function Challenges() {
  const items = [
    "Low repeat bookings and high churn",
    "Ineffective ad spend with little attribution",
    "Inconsistent brand experience across channels",
    "No centralized analytics to guide decisions",
  ]
  return (
    <section id="challenges" className="section hover-zoom">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Current Challenges</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {items.map((it) => (
            <li key={it} className="card hover-flash">
              {it}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
