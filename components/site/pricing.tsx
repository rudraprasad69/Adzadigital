export default function Pricing() {
  const plans = [
    { name: "Starter", price: "$499/mo", features: ["Meta + Google Ads", "Landing Page", "Monthly Report"] },
    { name: "Growth", price: "$999/mo", features: ["All Starter", "TikTok Ads", "CRM Journeys", "Bi-weekly Report"] },
    {
      name: "Scale",
      price: "$1,999/mo",
      features: ["All Growth", "Creative Studio", "Attribution Modeling", "Weekly Report"],
    },
  ]
  return (
    <section id="pricing" className="section bg-gradient-brand/10 hover-zoom">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Pricing Packages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="card hover-flash">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-3xl font-extrabold bg-gradient-accent bg-clip-text text-transparent">{p.price}</p>
              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="text-sm">
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className="btn-gradient mt-6 inline-block w-full text-center py-3 rounded-lg font-semibold hover-zoom"
              >
                Choose {p.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
