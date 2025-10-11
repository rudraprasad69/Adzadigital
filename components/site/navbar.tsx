"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#about", label: "About" },
  { href: "#challenges", label: "Challenges" },
  { href: "#why-digital", label: "Why Digital" },
  { href: "#features", label: "Features" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b",
        scrolled && "shadow-sm",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="#" className="flex items-center gap-3 hover-flash">
            <Image src="/images/logo.png" alt="Adza Digital logo" width={36} height={36} priority />
            <span className="font-semibold tracking-wide text-lg">Adza Digital</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-sm font-medium text-gray-700 hover:text-gray-900">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden text-sm">Menu</div>
        </div>
      </div>
      {/* Gradient bar under navbar like reference */}
      <div className="h-[3px] bg-gradient-brand" />
    </header>
  )
}
