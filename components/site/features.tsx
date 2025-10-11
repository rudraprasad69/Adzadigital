export default function Features() {
  return (
    <section id="features" className="section hover-zoom">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Omni-channel Ads: Meta, Google, TikTok",
            "Conversion Landing Pages",
            "Analytics Dashboard & Reporting",
            "Offers & Loyalty Journeys",
            "Reputation Management",
            "SEO for Local Search",
          ].map((x) => (
            <div key={x} className="card hover-flash">
              {x}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
