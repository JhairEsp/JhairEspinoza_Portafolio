"use client"

import { TypewriterText } from "@/components/ui/animated-text"
import { GlitchText } from "@/components/ui/glitch-text"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"

export function HeroSection() {
  const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver", "Tech Innovator"]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Greeting */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-mono text-primary">Disponible para proyectos</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-foreground">Hola, soy </span>
            <GlitchText text="Developer" className="text-primary text-glow" />
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light h-10">
            <TypewriterText texts={roles} className="text-accent" />
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          Creando experiencias digitales innovadoras con código limpio y diseño centrado en el usuario. Especializado en
          aplicaciones web modernas.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            <span className="relative z-10">Ver Proyectos</span>
            <ArrowDown className="w-5 h-5 relative z-10 transition-transform group-hover:translate-y-1" />
            <span className="absolute inset-0 bg-accent translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary/50 text-foreground font-semibold rounded-xl hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            Contáctame
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
