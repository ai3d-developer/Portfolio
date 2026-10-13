"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface Project {
  title: string
  category: string
  description: string
  tags: string[]
  image: string
  fullDescription?: string
  features?: string[]
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-slate-700 dark:text-white" />
        </button>

        {/* Image */}
        <div className="h-64 md:h-80 overflow-hidden rounded-t-xl bg-slate-100 dark:bg-slate-800">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <p className="text-cyan-600 dark:text-cyan-400 text-sm uppercase font-semibold mb-2">{project.category}</p>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h2>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">{project.fullDescription || project.description}</p>

          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                    <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full text-sm border border-slate-200 dark:border-slate-600 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
