export default function Services() {
  return (
    <section id="services" className="section hover-zoom">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Paid Ads Management",
            "Social Media Content",
            "Landing Page Design",
            "Email & SMS Automation",
            "Local SEO",
            "Reputation & Reviews",
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
