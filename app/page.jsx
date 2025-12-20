import { Navbar } from "@/components/ui/navbar"
import { ParticleBackground } from "@/components/ui/particle-background"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Heart, Code2 } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground grid-bg">
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-accent fill-accent" /> y
            <Code2 className="w-4 h-4 text-primary" /> por Developer
          </p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  )
}
