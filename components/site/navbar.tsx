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
        <div className="flex h-20 items-center justify-between">
          <Link href="#" className="flex items-center gap-3 group interactive">
            <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/images/logo.png" 
                alt="Adza Digital logo icon" 
                width={64} 
                height={64} 
                priority 
                className="object-contain mix-blend-darken" 
              />
            </div>
            <span className="font-extrabold tracking-tight text-2xl text-gradient-brand">Adza Digital</span>
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
