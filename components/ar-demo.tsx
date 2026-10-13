"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function ARDemo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isARActive, setIsARActive] = useState(false)
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const animationFrameRef = useRef<number>()

  const startAR = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
        setIsARActive(true)
        setHasPermission(true)
        startARRendering()
      }
    } catch (error) {
      console.error("Camera access denied:", error)
      setHasPermission(false)
    }
  }

  const stopAR = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
      tracks.forEach((track) => track.stop())
    }
    setIsARActive(false)
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
  }

  const drawChair = (ctx: CanvasRenderingContext2D, x: number, y: number, scale: number, rotation: number) => {
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate((rotation * Math.PI) / 180)

    // Chair seat (brown rectangle)
    ctx.fillStyle = "#8B4513"
    ctx.fillRect(-30 * scale, -5 * scale, 60 * scale, 15 * scale)
    ctx.strokeStyle = "#654321"
    ctx.lineWidth = 2
    ctx.strokeRect(-30 * scale, -5 * scale, 60 * scale, 15 * scale)

    // Chair backrest (tan rectangle)
    ctx.fillStyle = "#A0826D"
    ctx.fillRect(-28 * scale, -50 * scale, 56 * scale, 45 * scale)
    ctx.strokeStyle = "#654321"
    ctx.lineWidth = 2
    ctx.strokeRect(-28 * scale, -50 * scale, 56 * scale, 45 * scale)

    // Left front leg
    ctx.fillStyle = "#654321"
    ctx.fillRect(-25 * scale, 10 * scale, 8 * scale, 40 * scale)

    // Right front leg
    ctx.fillRect(17 * scale, 10 * scale, 8 * scale, 40 * scale)

    // Left back leg
    ctx.fillRect(-25 * scale, -5 * scale, 8 * scale, 50 * scale)

    // Right back leg
    ctx.fillRect(17 * scale, -5 * scale, 8 * scale, 50 * scale)

    // Armrest left
    ctx.fillStyle = "#A0826D"
    ctx.fillRect(-32 * scale, -30 * scale, 6 * scale, 35 * scale)
    ctx.strokeStyle = "#654321"
    ctx.lineWidth = 2
    ctx.strokeRect(-32 * scale, -30 * scale, 6 * scale, 35 * scale)

    // Armrest right
    ctx.fillRect(26 * scale, -30 * scale, 6 * scale, 35 * scale)
    ctx.strokeRect(26 * scale, -30 * scale, 6 * scale, 35 * scale)

    ctx.restore()
  }

  const startARRendering = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let rotation = 0
    const planeY = 150

    const render = () => {
      if (!videoRef.current || !isARActive) return

      // Draw video frame
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)

      // Add semi-transparent overlay
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw detected plane (cyan rectangle)
      ctx.strokeStyle = "#00ffff"
      ctx.lineWidth = 2
      ctx.setLineDash([5, 5])
      ctx.strokeRect(50, planeY, 300, 200)
      ctx.setLineDash([])

      drawChair(ctx, 200, planeY + 100, 1.5, rotation)

      // Draw plane detection text
      ctx.fillStyle = "#00ffff"
      ctx.font = "bold 14px Arial"
      ctx.fillText("Plane Detected - Chair Model", 60, planeY - 10)

      // Animate rotation
      rotation += 2

      animationFrameRef.current = requestAnimationFrame(render)
    }

    render()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div className="w-full">
      {!isARActive ? (
        <Button onClick={startAR} className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">
          Launch AR Demo
        </Button>
      ) : (
        <div className="relative w-full bg-black rounded-lg overflow-hidden">
          <video ref={videoRef} className="w-full h-auto hidden" playsInline />
          <canvas ref={canvasRef} className="w-full h-auto bg-black" />
          <button
            onClick={stopAR}
            className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition"
          >
            <X size={24} />
          </button>
          <div className="absolute bottom-4 left-4 bg-black/50 text-cyan-400 text-sm p-3 rounded">
            Point camera at a plane to see AR chair
          </div>
        </div>
      )}
    </div>
  )
}
