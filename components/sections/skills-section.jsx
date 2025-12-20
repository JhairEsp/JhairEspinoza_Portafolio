"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { SkillBar } from "@/components/ui/skill-bar"
import { skills } from "@/data/projects"
import { Layers, Database, Cloud, Cpu } from "lucide-react"

export function SkillsSection() {
  const [ref, isVisible] = useIntersection({ threshold: 0.2 })

  const techStack = [
    { icon: Layers, label: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind"] },
    { icon: Database, label: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { icon: Cloud, label: "Cloud", items: ["AWS", "Vercel", "Docker", "CI/CD"] },
    { icon: Cpu, label: "Tools", items: ["Git", "Figma", "VS Code", "Linux"] },
  ]

  return (
    <section id="skills" ref={ref} className="relative py-24 md:py-32 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center space-y-4 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-3 py-1 text-sm font-mono text-primary bg-primary/10 rounded-full border border-primary/20">
            Habilidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Stack <span className="text-primary">tecnológico</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Skill Bars */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Nivel de dominio</h3>
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 100} />
            ))}
          </div>

          {/* Tech Stack Cards */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {techStack.map(({ icon: Icon, label, items }, index) => (
              <div
                key={label}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-foreground mb-3">{label}</h4>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
