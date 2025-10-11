export default function Benefits() {
  return (
    <section id="benefits" className="section bg-gradient-brand/10 hover-zoom">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Benefits of Partnering with Us</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {["More Bookings, Lower CAC", "Higher LTV with CRM & Retention", "Transparent Performance Reporting"].map(
            (x) => (
              <div key={x} className="card hover-flash">
                {x}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
