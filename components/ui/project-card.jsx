"use client"

import { useState } from "react"
import { ExternalLink, Github, Eye } from "lucide-react"

export function ProjectCard({ project, onClick, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer"
      style={{
        animationDelay: `${index * 100}ms`,
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            className="p-3 bg-primary/90 rounded-full text-primary-foreground hover:bg-primary transition-colors transform hover:scale-110"
            onClick={(e) => {
              e.stopPropagation()
              onClick()
            }}
          >
            <Eye className="w-5 h-5" />
          </button>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-accent/90 rounded-full text-accent-foreground hover:bg-accent transition-colors transform hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/80 transition-colors transform hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Glow effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 220, 220, 0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded-md border border-primary/20"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs font-mono text-muted-foreground">+{project.tags.length - 3}</span>
          )}
        </div>
      </div>

      {/* Border glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 30px rgba(0, 220, 220, 0.1)",
        }}
      />
    </div>
  )
}
