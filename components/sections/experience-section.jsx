"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    id: 1,
    company: "Clinica SANNA",
    logo: "/LogoSanna2.jpg",
    position: "Analista de Sistemas",
    location: "Lima, Perú",
    type: "Presencial",
    startDate: "Jun 2025",
    endDate: "Presente",
    description:
      "Gestioné y resolví incidencias críticas en sistemas del área de Medicina, asegurando la continuidad operativa y reduciendo tiempos de atención en un 35%. Implementé mejoras en procesos tecnológicos y brindé soporte en pases a producción, coordinando con equipos técnicos y usuarios finales para validar funcionalidades y optimizar resultados.",
    technologies: ["SQL", , "JavaScript", "PostMan"],
    achievements: [
      "Resolución de incidencias críticas garantizando continuidad operativa.",
      "Optimización de procesos tecnológicos.",
      "Soporte en pases a producción y validaciones.",
    ],
  },
  {
    id: 2,
    company: "Ferremas",
    logo: "/LogoFerremas.jpg",
    position: "Asistente de Sistemas",
    location: "Lima, Perú",
    type: "Presencial",
    startDate: "Ene 2025",
    endDate: "Jun 2025",
    description:
      "Asistente de Sistemas enfocado en soporte funcional y técnico en SAP, mejora de procesos administrativos y análisis de datos con Power BI, generando reportes claros y oportunos que respaldan la toma de decisiones operativas y estratégicas.",
    technologies: ["SAP", "Node.js", "PostgreSQL", "Docker", "JavaScript","HTML","CSS","Pyhton","React","Power BI"],
    achievements: [
        "Brindé soporte funcional y técnico en SAP, optimizando la gestión de datos maestros, reportes y layouts.",
        "Mejoré flujos administrativos, reduciendo tiempos operativos y errores en los procesos.", 
        "Analicé y visualicé información clave en Power BI para un mejor seguimiento de indicadores.",
        "Elaboré reportes ejecutivos que facilitaron la toma de decisiones estratégicas."],
  },
  {
    id: 3,
    company: "Valere Universe",
    logo: "/LogoValere.jpg",
    position: "Mobile Developer",
    location: "Lima, Perú",
    type: "Remoto",
    startDate: "Feb 2023",
    endDate: "Ago 2023",
    description:
      "Desarrollador de aplicación multiplataforma responsable del desarrollo en Flutter, diseño UX/UI, implementación de lógica de negocio y gestión de datos, creando una solución orientada al seguimiento de desempeño y mejora continua del usuario.",
    technologies: ["JavaScript", "Flutter", "ReactNative", "Dart", "PostMan"],
    achievements: [
        "Desarrollé una aplicación multiplataforma con Flutter, logrando compatibilidad en Android e iOS desde una sola base de código.",
        "Implementé módulos de seguimiento de progreso, desafíos y análisis de desempeño, aumentando la interacción de los usuarios.",
        "Diseñé interfaces UX/UI intuitivas, mejorando la experiencia del usuario y la usabilidad de la aplicación.",
        "Integré la lógica de negocio y el almacenamiento de datos, asegurando consistencia y correcto funcionamiento de la app."],
  },
  {
    id: 4,
    company: "Velcco | Target Outsourcing",
    logo: "/LogoValere.jpg",
    position: "Mobile Developer",
    location: "Lima, Perú",
    type: "Remoto",
    startDate: "Feb 2023",
    endDate: "Ago 2023",
    description:
      "Soporte de Sistemas orientado a la resolución de incidencias técnicas, mantenimiento de equipos, monitoreo de sistemas y atención a usuarios finales, asegurando la disponibilidad operativa y la continuidad de los servicios tecnológicos.",
    technologies: ["JavaScript", "Flutter", "ReactNative", "Dart", "PostMan"],
    achievements: [
        "Resolví incidencias de hardware, software, redes y telefonía, garantizando la continuidad operativa.",
        "Realicé mantenimiento preventivo y correctivo de equipos, reduciendo fallas y tiempos de inactividad.",
        "Monitoreé sistemas para asegurar la disponibilidad y estabilidad de los servicios.",
        "Brindé atención y soporte oportuno a usuarios finales, mejorando la satisfacción y tiempos de respuesta."],
  },
]

function ExperienceCard({ experience, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 })
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex flex-col lg:flex-row gap-6 lg:gap-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline line and dot */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow z-10" />
        <div className="w-0.5 h-full bg-gradient-to-b from-primary to-transparent absolute top-4" />
      </div>

      {/* Date - Left side on desktop */}
      <div className={`lg:w-1/2 ${isEven ? "lg:text-right lg:pr-12" : "lg:order-2 lg:pl-12"}`}>
        <div className={`hidden lg:block ${isEven ? "" : "lg:hidden"}`}>
          <span className="inline-flex items-center gap-2 text-primary font-mono text-sm bg-primary/10 px-3 py-1 rounded-full">
            <Calendar className="w-4 h-4" />
            {experience.startDate} - {experience.endDate}
          </span>
        </div>

        {/* Mobile date */}
        <div className="lg:hidden mb-4">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-sm bg-primary/10 px-3 py-1 rounded-full">
            <Calendar className="w-4 h-4" />
            {experience.startDate} - {experience.endDate}
          </span>
        </div>
      </div>

      {/* Card - Right side on desktop */}
      <div className={`lg:w-1/2 ${isEven ? "lg:order-2 lg:pl-12" : "lg:pr-12"}`}>
        <div className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-lg bg-background border border-border overflow-hidden flex-shrink-0 group-hover:border-primary/50 transition-colors">
                <img
                  src={experience.logo || "/placeholder.svg"}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {experience.position}
                </h3>
                <p className="text-primary font-semibold">{experience.company}</p>
                <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {experience.location}
                  </span>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium">
                    {experience.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop date for odd items */}
            <div className={`hidden ${!isEven ? "lg:block" : ""} mb-4`}>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-sm bg-primary/10 px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4" />
                {experience.startDate} - {experience.endDate}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

            {/* Achievements */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-2">Logros destacados:</h4>
              <ul className="space-y-1">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-background border border-border rounded-full text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ExperienceSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="experiencia" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-primary font-mono text-sm">Trayectoria Profesional</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiencia <span className="text-primary">Laboral</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mi recorrido profesional construyendo productos digitales y liderando equipos de desarrollo.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-12 lg:space-y-16">
          {/* Center line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
