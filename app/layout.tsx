import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Link from "next/link"
import { Suspense } from "react"
import "./globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Adza Digital",
  description: "Transforming Beauty Businesses through Digital Power",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${poppins.variable} ${GeistMono.variable}`} suppressHydrationWarning>
        <Suspense fallback={<div>Loading...</div>}>
          <header className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/55 animate-in fade-in slide-in-from-top-2">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
              <Link href="/" className="flex items-center gap-2 interactive" aria-label="Adza Digital home">
                <img
                  src="/images/logo.png"
                  alt="Adza Digital logo"
                  className="h-9 w-auto zoom-on-hover"
                  loading="eager"
                  fetchPriority="high"
                />
              </Link>

              <nav aria-label="Primary" className="hidden gap-6 md:flex">
                {[
                  ["About", "#about"],
                  ["Challenges", "#challenges"],
                  ["Why Digital", "#why"],
                  ["Features", "#features"],
                  ["Services", "#services"],
                  ["Pricing", "#pricing"],
                  ["Why Us", "#why-us"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="relative text-sm text-foreground/80 hover:text-foreground interactive flash-on-hover after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-brand after:transition-transform hover:after:scale-x-100"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="h-[3px] bg-gradient-brand" />
          </header>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
