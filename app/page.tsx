"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { FloatingHero } from "@/components/floating-hero"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TypingText } from "@/components/typing-text"
import { ProjectModal } from "@/components/project-modal"
import { ARDemo } from "@/components/ar-demo"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      title: "AR Face Filter App",
      category: "AR Development",
      description: "Advanced face detection and augmentation system with real-time filters",
      fullDescription:
        "An advanced AR face filter application that uses real-time face detection and augmentation technology. The app features multiple animated filters, face tracking capabilities, and seamless integration with device cameras for instant filter application.",
      features: [
        "Real-time face detection and tracking",
        "Multiple animated face filters",
        "Smooth performance optimization",
        "Cross-platform compatibility",
      ],
      tags: ["ARKit", "Unity", "Blender"],
      image: "/ar-face-filter-app-with-animated-effects.jpg",
    },
    {
      title: "AR Cultural Heritage App",
      category: "AR Experience",
      description: "Interactive AR application bringing historical artifacts and monuments to life",
      fullDescription:
        "An interactive AR application designed to bring historical artifacts and monuments to life. Users can point their device at cultural heritage sites to see historical reconstructions, learn about the history, and interact with 3D models of artifacts.",
      features: [
        "Marker-based AR recognition",
        "Historical 3D reconstructions",
        "Interactive information overlays",
        "Audio narration support",
      ],
      tags: ["ARCore", "Marker-based", "3D Modeling"],
      image: "/ar-cultural-heritage-historical-monuments.jpg",
    },
    {
      title: "Markerless Furniture Placement",
      category: "AR Commerce",
      description: "Real-time furniture visualization in user spaces without markers",
      fullDescription:
        "A markerless AR furniture placement application that allows users to visualize furniture in their real environment without any physical markers. Features real-time plane detection, accurate scaling, and physics-based placement.",
      features: [
        "Markerless plane detection",
        "Real-time furniture visualization",
        "Accurate scaling and positioning",
        "Multiple furniture catalog support",
      ],
      tags: ["ARKit", "ARCore", "Physics Engine"],
      image: "/ar-furniture-placement-app-showing-virtual-sofa-in.jpg",
    },
    {
      title: "AR Dragon Fly Game",
      category: "AR Gaming",
      description: "Interactive AR game with animated dragonfly creatures in real environments",
      fullDescription:
        "An engaging AR game featuring animated dragonfly creatures that fly around in the user's real environment. Players can interact with the dragonflies, complete challenges, and enjoy immersive gameplay that blends digital creatures with reality.",
      features: [
        "Animated 3D dragonfly models",
        "Interactive gameplay mechanics",
        "Real environment integration",
        "Motor animations and physics",
      ],
      tags: ["Unity", "Animation", "ARKit"],
      image: "/ar-game-with-animated-dragonfly-flying-in-room.jpg",
    },
    {
      title: "Virtual Ohms Law Lab",
      category: "VR Education",
      description: "Immersive VR lab for conducting electrical experiments and learning physics",
      fullDescription:
        "An immersive VR laboratory designed for students to conduct electrical experiments and learn Ohm's Law through hands-on virtual interaction. Features realistic circuit components, measurements, and interactive experiments.",
      features: [
        "Interactive circuit building",
        "Real-time measurements and calculations",
        "Multiple experiment scenarios",
        "Educational feedback system",
      ],
      tags: ["VR Development", "Educational", "Physics Simulation"],
      image: "/vr-educational-lab-electricity-experiments.jpg",
    },
    {
      title: "VR Eye Tracking Car Showroom",
      category: "VR Analytics",
      description: "VR showroom with eye-tracking to capture customer attention patterns",
      fullDescription:
        "A VR car showroom integrated with eye-tracking technology to capture and analyze customer gaze patterns. This helps manufacturers understand which parts of vehicles attract the most attention for design and marketing insights.",
      features: [
        "Real-time eye tracking capture",
        "Gaze heatmap generation",
        "Customer attention analytics",
        "Multiple vehicle showcase",
      ],
      tags: ["Eye Tracking", "VR", "Data Analytics"],
      image: "/vr-car-showroom-eye-tracking-data.jpg",
    },
    {
      title: "VR Nuclear Power Plant Tour",
      category: "VR Simulation",
      description: "Interactive virtual tour of a nuclear power plant with working systems",
      fullDescription:
        "A comprehensive VR virtual tour of a nuclear power plant featuring fully working systems and realistic electricity generation processes. Users can explore every aspect of the plant and understand how nuclear power generation works.",
      features: [
        "Fully interactive plant systems",
        "Realistic electricity generation simulation",
        "Educational content and explanations",
        "Safety protocol demonstrations",
      ],
      tags: ["VR", "Simulation", "Educational"],
      image: "/vr-nuclear-power-plant-facility-tour.jpg",
    },
    {
      title: "VR Fire Safety Training",
      category: "VR Training",
      description: "Immersive fire safety training scenarios with realistic interactions",
      fullDescription:
        "An immersive VR fire safety training application that puts users in realistic emergency scenarios. Trainees learn proper evacuation procedures, fire extinguisher usage, and emergency response protocols in a safe virtual environment.",
      features: [
        "Realistic fire scenarios",
        "Interactive fire extinguisher training",
        "Evacuation procedure practice",
        "Performance evaluation system",
      ],
      tags: ["VR", "Training", "Safety"],
      image: "/vr-fire-safety-emergency-training.jpg",
    },
    {
      title: "Mixed Reality Fire Safety",
      category: "MR Application",
      description: "MR fire safety application blending digital overlays with real environments",
      fullDescription:
        "A Mixed Reality fire safety application that blends digital fire overlays with real physical environments. This allows for realistic training scenarios where virtual fire and safety elements interact with actual spaces.",
      features: [
        "Real environment integration",
        "Digital fire overlays",
        "Interactive safety equipment",
        "Real-time hazard identification",
      ],
      tags: ["Mixed Reality", "Safety", "Interaction Design"],
      image: "/mr-mixed-reality-fire-safety-overlay.jpg",
    },
  ]

  const openProjectModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const skills = {
    "AR/VR Development": ["ARKit", "ARCore", "Unity", "Unreal Engine", "Marker-based AR", "Markerless AR"],
    "3D Modeling & Design": ["Blender", "Cinema 4D", "Figma", "3D Animation", "Texture Design"],
    "Video & VFX": ["After Effects", "Video Editing", "Motion Graphics", "VFX Compositing", "Color Grading"],
    "Hardware & IoT": ["Motor Animations", "3D Printing", "Arduino Integration", "Sensor Integration"],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-sky-50/20 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/85 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 font-medium transition text-sm">
                About
              </a>
              <a href="#work" className="text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 font-medium transition text-sm">
                Work
              </a>
              <a href="#skills" className="text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 font-medium transition text-sm">
                Skills
              </a>
              <a href="#contact" className="text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 font-medium transition text-sm">
                Contact
              </a>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button & Toggle */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="text-slate-700 dark:text-slate-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-800 pt-4 space-y-1">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 py-2 font-medium"
              >
                About
              </a>
              <a
                href="#work"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 py-2 font-medium"
              >
                Work
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 py-2 font-medium"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 py-2 font-medium"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left side - Photo */}
          <ScrollReveal direction="left" delay={100}>
            <div className="flex justify-center md:justify-start">
              <FloatingHero />
            </div>
          </ScrollReveal>

          {/* Right side - Content */}
          <ScrollReveal direction="right" delay={200}>
            <div className="space-y-6">
              <div>
                <p className="text-slate-600 dark:text-slate-300 text-lg mb-2">Hey, it's me</p>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-4">Hariprasad</h1>
                <div className="text-2xl md:text-3xl font-semibold">
                  <TypingText
                    texts={["I am AR/VR Developer", "I am 3D Designer", "I am Video Editor"]}
                    speed={80}
                    delayBetween={2000}
                  />
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
                Creating immersive experiences through AR, VR, and Mixed Reality. Transforming ideas into interactive
                digital realities.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-100/70 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="left" delay={100}>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">About Me</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="right" delay={200}>
              <div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  I'm an EEE department student with a passion for building immersive spatial computing experiences. My
                  journey spans from AR applications that bring digital overlays to reality, to VR simulations that
                  transform education and training.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  Every project combines technical excellence with creative design, whether it's developing
                  motor-controlled AR animations, capturing eye-tracking data in VR environments, or crafting
                  photorealistic 3D models.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  I believe the future of interaction is spatial, and I'm building it one immersive experience at a
                  time.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              <ScrollReveal direction="left" delay={300}>
                <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow-sm hover:border-cyan-500 dark:hover:border-cyan-400/50 transition">
                  <h3 className="text-cyan-600 dark:text-cyan-400 font-semibold mb-3">AR Development</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Face filters, cultural heritage, furniture placement, marker-based and markerless solutions
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={400}>
                <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow-sm hover:border-cyan-500 dark:hover:border-cyan-400/50 transition">
                  <h3 className="text-cyan-600 dark:text-cyan-400 font-semibold mb-3">VR Experiences</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Educational simulations, eye-tracking analytics, industrial tours, safety training
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={500}>
                <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow-sm hover:border-cyan-500 dark:hover:border-cyan-400/50 transition">
                  <h3 className="text-cyan-600 dark:text-cyan-400 font-semibold mb-3">3D & Design</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Blender, Cinema 4D, Figma, animations, VFX, 3D printing, motion graphics
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="left" delay={100}>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">Featured Work</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={index} direction="up" delay={100 + index * 50}>
                <div
                  className="group bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 dark:hover:border-cyan-400 transition duration-300 cursor-pointer shadow-sm hover:shadow-md"
                  onClick={() => openProjectModal(project)}
                >
                  <div className="h-48 bg-slate-100 dark:bg-slate-700 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-cyan-600 dark:text-cyan-400 text-xs uppercase font-semibold mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 px-2 py-1 rounded border border-slate-200 dark:border-transparent font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-cyan-600 dark:text-cyan-400/70 text-xs mt-4 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition font-medium">
                      Click to view details →
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* AR Demo Section */}
          <div className="mt-16 p-8 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">Try AR Demo</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Experience AR in action - tap the button below to open your camera and see a 3D object placed on a
                detected plane
              </p>
            </div>
            <ARDemo />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-100/70 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="left" delay={100}>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">Skills & Technologies</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <ScrollReveal key={category} direction="up" delay={200 + categoryIndex * 100}>
                <div>
                  <h3 className="text-cyan-600 dark:text-cyan-400 font-semibold mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-white dark:bg-slate-700/50 text-slate-800 dark:text-slate-200 px-4 py-2 rounded-full text-sm border border-slate-200 dark:border-slate-600 hover:border-cyan-500 dark:hover:border-cyan-400 transition shadow-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal direction="up" delay={100}>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              I'm always interested in hearing about new AR/VR projects and immersive experiences. Feel free to reach
              out.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <Link href="mailto:hariprasad.p5678@gmail.com">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white gap-2 shadow-sm">
                  <Mail size={20} /> Email Me
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/hariprasad-p-775989322" target="_blank">
                <Button
                  variant="outline"
                  className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 gap-2 bg-transparent"
                >
                  <Linkedin size={20} /> LinkedIn
                </Button>
              </Link>
              <Link href="https://github.com" target="_blank">
                <Button
                  variant="outline"
                  className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 gap-2 bg-transparent"
                >
                  <Github size={20} /> GitHub
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <p className="text-slate-500 text-sm">Built with Next.js, React & Tailwind CSS</p>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeProjectModal} />
    </div>
  )
}
