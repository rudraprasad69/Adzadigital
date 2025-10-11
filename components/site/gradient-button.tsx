"use client"

import type * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Props = React.ComponentProps<typeof Button> & { glow?: boolean }

export default function GradientButton({ className, glow = true, ...props }: Props) {
  return (
    <Button
      {...props}
      className={cn(
        "bg-gradient-brand hover:opacity-95 hover-zoom text-white border-0 shadow-sm",
        glow && "shadow-[0_10px_30px_0_rgba(0,140,255,0.25)]",
        className,
      )}
    />
  )
}
