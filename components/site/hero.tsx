import Image from "next/image"
import Typewriter from "./typewriter"

export default function Hero() {
  return (
    <section className="section bg-gradient-brand/10 relative overflow-hidden pt-0 md:pt-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-1 gap-10 items-center">
        <div className="space-y-4 text-center">
          <img src="/images/logo.png" alt="Adza Digital logo" className="h-24 w-auto mx-auto" />
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">Adza Digital</h2>
          {/* Heading with continuous left-to-right typing and deleting loop */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-balance">
            <Typewriter
              text="Transforming Beauty Businesses through Digital Power"
              className="text-gradient-golden"
              aria-label="Transforming Beauty Businesses through Digital Power"
            />
          </h1>
          <p className="text-muted-foreground leading-relaxed card-translucent p-4">
            We drive real bookings and retention with data-driven campaigns, premium creative, and a fully transparent
            marketing dashboard.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#pricing"
              className="btn-gradient px-5 py-3 rounded-xl font-semibold shadow-lg hover-zoom hover-flash"
            >
              View Pricing
            </a>
            <a href="#dashboard" className="btn-outline px-5 py-3 rounded-xl font-semibold hover-zoom">
              See Live Dashboard
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
