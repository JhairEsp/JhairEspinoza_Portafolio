"use client"

import { useIntersection } from "@/hooks/use-intersection"

export function SkillBar({ name, level, delay = 0 }) {
  const [ref, isVisible] = useIntersection({ threshold: 0.5 })

  return (
    <div ref={ref} className="space-y-2" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm font-mono text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : "0%",
            boxShadow: isVisible ? "0 0 20px var(--primary)" : "none",
          }}
        />
      </div>
    </div>
  )
}
