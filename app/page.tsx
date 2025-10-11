import type React from "react"
import { Button } from "@/components/ui/button"
import DashboardCharts from "@/components/site/dashboard-charts"
import Hero from "@/components/site/hero"

function Section({
  id,
  title,
  subtitle,
  children,
  bg = "brand",
}: {
  id: string
  title?: string
  subtitle?: string
  children?: React.ReactNode
  bg?: "brand" | "accent" | "surface"
}) {
  const bgClass = bg === "brand" ? "bg-gradient-brand" : bg === "accent" ? "bg-gradient-accent" : "bg-background"
  const textOnGradient = bg === "surface" ? "" : "text-white"
  return (
    <section id={id} className={`${bgClass} interactive-section`}>
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        {title ? (
          <div className="mb-8 text-center">
            <h2 className={`text-3xl font-semibold md:text-4xl ${textOnGradient} text-balance`}>{title}</h2>
            {subtitle ? (
              <p className={`mt-2 text-pretty ${textOnGradient ? "text-white/80" : "text-muted-foreground"}`}>
                {subtitle}
              </p>
            ) : null}
          </div>
        ) : null}
        <div className="grid place-items-center">{children}</div>
      </div>
    </section>
  )
}

const aboutItems = [
  {
    title: "Mission",
    description: "Grow customer base, boost online presence, and increase revenue with modern strategies.",
    icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle></svg>`
  },
  {
    title: "Vision",
    description: "Turning Glam into Growth.",
    icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></svg>`
  },
  {
    title: "Focus",
    description: "Niche expertise for beauty and salon brands.",
    icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line></svg>`
  }
];

const featuresItems = [
  {
    title: "Customized strategies for beauty industry",
    description: "Tailored marketing plans that resonate with your brand and audience.",
    icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"13.5\" cy=\"6.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"17.5\" cy=\"10.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"8.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"6.5\" cy=\"12.5\" r=\".5\" fill=\"currentColor\"/><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.47-1.125-.29-.289-.47-.682-.47-1.125s.18-.836.47-1.125c.29-.29.47-.686.47-1.125s-.18-.836-.47-1.125c-.29-.29-.47-.687-.47-1.125s.18-.835.47-1.125c.29-.29.47-.688.47-1.125 0-.942-.722-1.688-1.648-1.688z\"/></svg>`
  },
  {
    title: "Data-driven campaigns",
    description: "We use analytics to optimize campaigns for maximum impact.",
    icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 3v18h18\"/><path d=\"M18 17V9\"/><path d=\"M13 17V5\"/><path d=\"M8 17v-3\"/></svg>`
  },
  {
    title: "Social media growth with creative content",
    description: "Engaging posts and stories that build a loyal following.",
    icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 10v12\"/><path d=\"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a2 2 0 0 1 1.79 1.11L15 5.88z\"/></svg>`
  },
  {
    title: "Affordable packages for startups & established salons",
    description: "Plans to fit every budget, from new ventures to established brands.",
    icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 3h12l4 6-10 13L2 9z\"/><path d=\"M12 22V9\"/><path d=\"m3.5 8.5 17 0\"/></svg>`
  },
  {
    title: "Focus on ROI (Return on Investment)",
    description: "Our primary goal is to deliver measurable results and a positive ROI.",
    icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z\"/><path d=\"M12 12v-4\"/><path d=\"m16 16-4-4\"/></svg>`
  },
  {
    title: "Transparent reporting and insights",
    description: "Clear, concise reports that show you exactly how your marketing is performing.",
    icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"></path><path d=\"M22 12A10 10 0 0 0 12 2v10z\"></path></svg>`
  }
];

export default function Page() {
  return (
    <main className="mx-auto max-w-[100vw] overflow-x-hidden">
      <Hero />

      {/* Trusted Logos strip */}
      <section id="trusted" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="mb-6 text-center text-sm text-muted-foreground">Trusted by leading salons and beauty brands</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            <img src="/salon-brand-logo.jpg" alt="Salon Brand logo" className="h-8 w-auto interactive" />
            <img src="/beauty-co-logo.jpg" alt="Beauty Co logo" className="h-8 w-auto interactive" />
            <img src="/cosmetics-logo.jpg" alt="Cosmetics logo" className="h-8 w-auto interactive" />
            <img src="/spa-brand-logo.jpg" alt="Spa Brand logo" className="h-8 w-auto interactive" />
          </div>
        </div>
      </section>

      {/* Live Dashboard */}
      <Section id="dashboard" bg="accent" title="Live Dashboard" subtitle="Real-time insights that drive action">
        <div className="w-full">
          <DashboardCharts />
        </div>
      </Section>

      {/* About */}
      <Section
        id="about"
        bg="surface"
        title="About Us"
        subtitle="A specialized digital marketing agency for salons and beauty businesses."
      >
        <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {aboutItems.map((item) => (
            <li key={item.title} className="card-surface interactive p-6">
              <div className="flex items-center gap-4">
                <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Current Challenges */}
      <Section id="challenges" bg="accent" title="Current Challenges" subtitle="What holds many salons back?">
        <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {[ 
            "Dependence only on walk‑in clients",
            "Lack of online presence",
            "Low customer retention",
            "Difficulty showcasing services & offers",
            "Competing with tech‑savvy salons",
          ].map((item) => (
            <li key={item} className="card-translucent interactive p-5 text-white">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Why Digital */}
      <Section id="why" bg="brand" title="Why Digital Marketing?">
        <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {[ 
            "80%+ customers search online before choosing a salon",
            "Build trust and brand identity",
            "Reach targeted local audiences effectively",
            "Engage customers with offers, trends, and tips",
            "Increase appointments via online booking systems",
          ].map((item) => (
            <li key={item} className="enhanced-card interactive p-5 text-white">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Features */}
      <Section id="features" bg="surface" title="Our Features" subtitle="Built for real-world salon growth">
        <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 text-foreground">
          {featuresItems.map((item) => (
            <li key={item.title} className="card-surface interactive p-5">
              <div className="flex items-center gap-4">
                <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Benefits */}
      <Section id="benefits" bg="accent" title="Benefits of Partnering with Us">
        <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {[ 
            "Increased customer footfall",
            "Improved brand recognition",
            "Better engagement with clients",
            "Growth in repeat customers",
            "More online reviews & higher ratings",
            "Efficient ad spend and measurable ROI",
          ].map((item) => (
            <li key={item} className="card-translucent interactive p-5 text-white">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Pricing */}
      <Section id="pricing" bg="brand" title="Pricing Packages" subtitle="Simple plans that scale with you">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {[ 
            ["Basic", "Social Media Posts + Local SEO", "₹", "Best for new salons", `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"></path></svg>`],
            ["Standard", "Posts + Ads + Engagement Campaigns", "₹₹", "Balanced growth", `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path></svg>`],
            ["Premium", "Complete Marketing + Website + Ads", "₹₹₹", "Aggressive growth", `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12s2.545-8 7-8 7 8 7 8-2.545 8-7 8-7-8-7-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></svg>`],
          ].map(([name, desc, symbol, note, icon]) => (
            <div key={name as string} className="pricing-card interactive p-6">
              <div className="flex items-center gap-4">
                <div dangerouslySetInnerHTML={{ __html: icon as string }} />
                <h3 className="text-xl font-semibold">{name}</h3>
              </div>
              <p className="mt-2 text-muted-foreground">{desc}</p>
              <p className="mt-4 text-4xl text-gradient-brand">{symbol}</p>
              <p className="text-sm text-muted-foreground">{note}</p>
              <div className="mt-6">
                <Button variant="gradient" className="w-full interactive">
                  Choose {name}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-white/80">
          Yearly plans: get 2 months free. Tailor‑made solutions for salon chains.
        </p>
      </Section>

      {/* Why Us */}
      <Section id="why-us" bg="surface" title="Why Choose Adza Digital?">
        <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 text-foreground">
          {[
            { title: "100% focus on Salon & Beauty industry", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>` },
            { title: "Proven success strategies", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>` },
            { title: "Dedicated account manager", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/></svg>` },
            { title: "Transparent reporting & analytics", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 12v5h12V8l-5 5-4-4-3 3"/></svg>` },
          ].map((item) => (
            <li key={item.title} className="card-surface interactive p-5 flex items-center gap-4">
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* CTA / Contact */}
      <Section id="contact" bg="accent" title="Your Salon’s Growth Starts Here">
        <div className="w-full max-w-2xl space-y-4 text-center text-white">
          <p>Contact us: info@adzadigital.com • +91-926556510</p>
          <div className="flex items-center justify-center gap-3">
            <Button variant="gradient" asChild className="interactive">
              <a href="mailto:info@adzadigital.com">Email Us</a>
            </Button>
            <Button variant="outline" asChild className="interactive bg-transparent">
              <a href="https://adzadigital.com" target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  )
}
