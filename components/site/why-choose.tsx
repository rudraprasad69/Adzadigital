export default function WhyChoose() {
  return (
    <section id="why-choose" className="section hover-zoom">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Why Choose Adza Digital?</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {["Salon-Vertical Expertise", "Creative That Converts", "Performance-First Mindset"].map((x) => (
            <div key={x} className="card hover-flash">
              {x}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
