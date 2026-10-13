"use client"

import { PhotoDesign } from "./photo-designs"

export function FloatingHero({
  design = "circular",
}: { design?: "circular" | "square-with-border" | "hexagon" | "rounded-rectangle" | "artistic" }) {
  return <PhotoDesign imageUrl="/hariprasad-profile.jpg" design={design} />
}
