"use client"

import { useRef, useEffect } from "react"

interface PhotoDesignProps {
  imageUrl: string
  design: "circular" | "square-with-border" | "hexagon" | "rounded-rectangle" | "artistic"
}

export function PhotoDesign({ imageUrl, design }: PhotoDesignProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01
      const floatValue = Math.sin(time) * 20
      container.style.transform = `translateY(${floatValue}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  // Design 1: Circular with rotating ring
  if (design === "circular") {
    return (
      <div ref={containerRef} className="relative w-48 h-48 md:w-72 md:h-72">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="relative w-full h-full rounded-full border-2 border-cyan-400/50 overflow-hidden shadow-2xl shadow-cyan-500/50">
          <img src={imageUrl || "/placeholder.svg"} alt="Hariprasad" className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute inset-0 rounded-full border border-cyan-400/30 animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>
      </div>
    )
  }

  // Design 2: Square with animated borders
  if (design === "square-with-border") {
    return (
      <div ref={containerRef} className="relative w-48 h-48 md:w-72 md:h-72">
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-40 animate-pulse"></div>
        <div className="relative w-full h-full rounded-2xl border-2 border-cyan-400 overflow-hidden shadow-2xl shadow-cyan-500/50">
          <img src={imageUrl || "/placeholder.svg"} alt="Hariprasad" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-2xl"></div>
      </div>
    )
  }

  // Design 3: Hexagon shape
  if (design === "hexagon") {
    return (
      <div ref={containerRef} className="relative w-48 h-48 md:w-72 md:h-72 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        ></div>
        <div
          className="relative w-full h-full overflow-hidden border-3 border-cyan-400 shadow-2xl shadow-cyan-500/50"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        >
          <img src={imageUrl || "/placeholder.svg"} alt="Hariprasad" className="w-full h-full object-cover" />
        </div>
      </div>
    )
  }

  // Design 4: Rounded rectangle with split colors
  if (design === "rounded-rectangle") {
    return (
      <div ref={containerRef} className="relative w-48 h-56 md:w-72 md:h-96">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
        <div className="relative w-full h-full rounded-3xl border-2 border-cyan-400/60 overflow-hidden shadow-2xl shadow-cyan-500/40 flex">
          <img src={imageUrl || "/placeholder.svg"} alt="Hariprasad" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>
      </div>
    )
  }

  // Design 5: Artistic with gradient overlay
  if (design === "artistic") {
    return (
      <div ref={containerRef} className="relative w-48 h-56 md:w-72 md:h-96">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-2xl blur-3xl"></div>
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/30">
          <img src={imageUrl || "/placeholder.svg"} alt="Hariprasad" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-600/20"></div>
          <div className="absolute inset-0 border-2 border-cyan-400/40 rounded-2xl"></div>
        </div>
      </div>
    )
  }

  return null
}
