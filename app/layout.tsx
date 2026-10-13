import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://profilename.space"),
  title: {
    default: "Hariprasad | AR/VR/MR Developer & 3D Designer Portfolio",
    template: "%s | Hariprasad",
  },
  description:
    "Official portfolio of Hariprasad - AR/VR/MR Developer and 3D Designer specializing in immersive spatial computing, Unity AR/VR simulations, Blender 3D modeling, and interactive experiences.",
  applicationName: "Hariprasad Portfolio",
  authors: [{ name: "Hariprasad", url: "https://profilename.space" }],
  creator: "Hariprasad",
  publisher: "Hariprasad",
  keywords: [
    "Hariprasad",
    "Hariprasad AR VR Developer",
    "Hariprasad Portfolio",
    "Hariprasad P",
    "Hari Prasad",
    "profilename.space",
    "AR Developer",
    "VR Developer",
    "MR Developer",
    "Mixed Reality Developer",
    "Spatial Computing",
    "3D Designer",
    "Unity Developer",
    "Blender 3D",
    "ARKit",
    "ARCore",
    "EEE AR VR Developer",
  ],
  alternates: {
    canonical: "https://profilename.space",
  },
  openGraph: {
    title: "Hariprasad | AR/VR/MR Developer & 3D Designer",
    description:
      "Explore the portfolio of Hariprasad - AR/VR/MR developer crafting immersive spatial computing, Unity AR/VR simulations, 3D modeling, and interactive experiences.",
    url: "https://profilename.space",
    siteName: "Hariprasad Portfolio",
    images: [
      {
        url: "/hariprasad-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Hariprasad - AR/VR/MR Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hariprasad | AR/VR/MR Developer & 3D Designer",
    description:
      "Explore the portfolio of Hariprasad - AR/VR/MR developer crafting immersive spatial computing, Unity AR/VR simulations, and 3D experiences.",
    images: ["/hariprasad-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://profilename.space/#person",
      name: "Hariprasad",
      alternateName: ["Hariprasad P", "Hari Prasad", "ai3d-developer"],
      url: "https://profilename.space",
      image: "https://profilename.space/hariprasad-profile.jpg",
      jobTitle: "AR/VR/MR Developer & 3D Designer",
      description:
        "AR/VR/MR Developer specializing in immersive spatial computing, Unity, Blender 3D modeling, and interactive experiences.",
      email: "hariprasad.p5678@gmail.com",
      sameAs: [
        "https://www.linkedin.com/in/hariprasad-p-775989322",
        "https://github.com/ai3d-developer",
      ],
      knowsAbout: [
        "Augmented Reality (AR)",
        "Virtual Reality (VR)",
        "Mixed Reality (MR)",
        "Spatial Computing",
        "Unity 3D",
        "Blender",
        "ARKit",
        "ARCore",
        "WebXR",
        "Electrical and Electronics Engineering",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://profilename.space/#website",
      url: "https://profilename.space",
      name: "Hariprasad Portfolio",
      description: "Portfolio of Hariprasad, AR/VR/MR Developer and 3D Designer",
      publisher: {
        "@id": "https://profilename.space/#person",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://profilename.space/#webpage",
      url: "https://profilename.space",
      name: "Hariprasad - AR/VR/MR Developer Portfolio",
      isPartOf: {
        "@id": "https://profilename.space/#website",
      },
      about: {
        "@id": "https://profilename.space/#person",
      },
      mainEntity: {
        "@id": "https://profilename.space/#person",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased transition-colors duration-200`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}


