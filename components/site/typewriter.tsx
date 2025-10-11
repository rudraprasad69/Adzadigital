"use client"

import { useEffect, useMemo, useRef, useState } from "react"

type TypewriterProps = {
  text: string
  speed?: number // ms per character when typing
  deleteSpeed?: number // ms per character when deleting
  pauseMs?: number // pause at full and empty
  className?: string
  "aria-label"?: string
}

export default function Typewriter({
  text,
  speed = 55,
  deleteSpeed = 35,
  pauseMs = 900,
  className,
  ...rest
}: TypewriterProps) {
  const [display, setDisplay] = useState("")
  const [deleting, setDeleting] = useState(false)
  const indexRef = useRef(0)

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      // Respect reduced motion: show full text, no animation.
      setDisplay(text)
      return
    }

    let timeout: number

    const step = () => {
      if (!deleting) {
        // typing
        if (indexRef.current < text.length) {
          indexRef.current += 1
          setDisplay(text.slice(0, indexRef.current))
          timeout = window.setTimeout(step, speed)
        } else {
          // full text typed → pause → start deleting
          timeout = window.setTimeout(() => {
            setDeleting(true)
            timeout = window.setTimeout(step, deleteSpeed)
          }, pauseMs)
        }
      } else {
        // deleting
        if (indexRef.current > 0) {
          indexRef.current -= 1
          setDisplay(text.slice(0, indexRef.current))
          timeout = window.setTimeout(step, deleteSpeed)
        } else {
          // empty → pause → start typing again
          setDeleting(false)
          timeout = window.setTimeout(step, pauseMs * 0.7)
        }
      }
    }

    timeout = window.setTimeout(step, 300)
    return () => window.clearTimeout(timeout)
  }, [text, speed, deleteSpeed, pauseMs, reducedMotion])

  return (
    <span className={className} aria-live="polite" {...rest}>
      <span className="typewriter-text" dangerouslySetInnerHTML={{ __html: display.replace("Digital Power", `<span class="text-black">Digital Power</span>`) }}></span>
      <span aria-hidden="true" className="type-caret" />
    </span>
  )
}
