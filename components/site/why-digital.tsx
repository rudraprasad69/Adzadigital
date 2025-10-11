export default function WhyDigital() {
  return (
    <section id="why" className="section bg-gradient-brand/10 hover-zoom">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Why Digital Marketing?</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Measurable ROI with end-to-end attribution",
            "Reach high-intent customers locally",
            "Automate retention via CRM journeys",
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
