"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { Code2, Palette, Rocket, Coffee } from "lucide-react"

export function AboutSection() {
  const [ref, isVisible] = useIntersection({ threshold: 0.2 })

  const highlights = [
    { icon: Code2, label: "Líneas de código", value: "500K+" },
    { icon: Rocket, label: "Proyectos completados", value: "10+" },
    { icon: Coffee, label: "Tazas de café", value: "∞" },
    { icon: Palette, label: "Diseños creativos", value: "100+" },
  ]

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main Image */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30">
                <img src="/FotoCV.jpg" alt="Developer" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-xl blur-xl" />

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 z-20 px-4 py-3 bg-card border border-border rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Experiencia</p>
                    <p className="text-sm font-bold text-foreground">+3 años</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-sm font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
                Sobre mí
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Transformando ideas en
                <span className="text-primary"> experiencias digitales</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy un especialista en soluciones digitales enfocado en crear herramientas tecnológicas que optimizan procesos y mejoran la experiencia de las personas. Actualmente me desarrollo en el área de sistemas, participando en proyectos de automatización, aplicaciones y análisis de información.
              </p>
              <p>
                Mi enfoque combina tecnología, pensamiento estratégico y diseño centrado en el usuario para construir soluciones prácticas, eficientes y escalables, utilizando herramientas modernas y adaptándome a distintos entornos y necesidades del negocio.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, value }, index) => (
                <div
                  key={label}
                  className="p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl font-bold text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
