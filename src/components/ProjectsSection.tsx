'use client'

import { useState } from 'react'
import { MapPin, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects, type Project } from '@/data/projects'

// Color map for type gradients (fallback when no image)
const typeGradient: Record<string, string> = {
  Corporativo: 'from-glass-900 via-glass-800 to-graphite-900',
  Residencial: 'from-graphite-800 via-graphite-700 to-graphite-900',
  Comercial: 'from-graphite-900 via-glass-900 to-graphite-800',
  Hotelero: 'from-glass-800 via-graphite-800 to-glass-900',
  Industrial: 'from-graphite-900 via-graphite-800 to-glass-900',
  Institucional: 'from-glass-900 via-glass-800 to-graphite-900',
}

const tagColors: Record<string, string> = {
  'fachada': 'bg-blue-50 text-blue-700 border border-blue-100',
  'curtain-wall': 'bg-indigo-50 text-indigo-700 border border-indigo-100',
  'dvh': 'bg-teal-50 text-teal-700 border border-teal-100',
  'corporativo': 'bg-violet-50 text-violet-700 border border-violet-100',
  'residencial': 'bg-emerald-50 text-emerald-700 border border-emerald-100',
  'aberturas': 'bg-orange-50 text-orange-700 border border-orange-100',
  'corredizas': 'bg-amber-50 text-amber-700 border border-amber-100',
  'silicone-glazing': 'bg-cyan-50 text-cyan-700 border border-cyan-100',
  'comercial': 'bg-rose-50 text-rose-700 border border-rose-100',
  'barandas': 'bg-purple-50 text-purple-700 border border-purple-100',
  'templado': 'bg-red-50 text-red-700 border border-red-100',
  'mamparas': 'bg-lime-50 text-lime-700 border border-lime-100',
  'laminado': 'bg-sky-50 text-sky-700 border border-sky-100',
  'batientes': 'bg-yellow-50 text-yellow-700 border border-yellow-100',
  'conjunto': 'bg-pink-50 text-pink-700 border border-pink-100',
  'hotelero': 'bg-rose-50 text-rose-700 border border-rose-100',
  'institucional': 'bg-graphite-100 text-graphite-600 border border-graphite-200',
  'industrial': 'bg-graphite-100 text-graphite-700 border border-graphite-200',
}

// Image component with graceful fallback to gradient
function ProjectImage({
  src,
  alt,
  type,
  className = '',
}: {
  src: string
  alt: string
  type: Project['type']
  className?: string
}) {
  const [failed, setFailed] = useState(false)
  const gradient = typeGradient[type] || 'from-graphite-900 to-graphite-700'

  if (failed) {
    return (
      <div className={`bg-gradient-to-br ${gradient} ${className} flex items-center justify-center relative`}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  )
}

// Featured card
function FeaturedCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-graphite-200 hover:shadow-card-hover hover:border-glass-300 transition-all duration-300 bg-white">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <ProjectImage
          src={project.image}
          alt={project.name}
          type={project.type}
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/70 via-graphite-950/10 to-transparent" />

        {/* Type badge */}
        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-1 rounded-full bg-glass-600 text-white text-xs font-semibold">
            {project.type}
          </span>
        </div>

        {/* Year badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/10">
          <Calendar size={10} className="text-white/70" />
          <span className="text-white text-xs font-medium">{project.year}</span>
        </div>

        {/* System label at bottom */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white/70 text-xs font-mono tracking-wide">{project.system}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <h3 className="font-bold text-graphite-900 text-xl leading-tight group-hover:text-glass-700 transition-colors">
          {project.name}
        </h3>
        <div className="flex items-center gap-1.5 text-sm text-graphite-500">
          <MapPin size={13} className="text-glass-500" />
          <span>{project.location}</span>
        </div>
        <p className="text-graphite-600 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${tagColors[tag] || 'bg-graphite-100 text-graphite-600'}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// Small card
function SmallCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-xl overflow-hidden border border-graphite-200 hover:border-glass-600/40 hover:shadow-card transition-all duration-300 bg-white">
      {/* Image */}
      <div className="relative h-36 overflow-hidden">
        <ProjectImage
          src={project.image}
          alt={project.name}
          type={project.type}
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/60 to-transparent" />
        <div className="absolute bottom-2 left-3">
          <span className="text-white/80 text-xs font-mono">{project.year}</span>
        </div>
        <div className="absolute top-2 right-2">
          <span className="px-2 py-0.5 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium">
            {project.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="font-bold text-graphite-900 text-sm leading-tight mb-1 group-hover:text-glass-700 transition-colors">
          {project.name}
        </h4>
        <div className="flex items-center gap-1 text-xs text-graphite-400 mb-2">
          <MapPin size={10} className="text-glass-500" />
          <span>{project.location.split(',')[0]}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 rounded-full text-xs font-medium ${tagColors[tag] || 'bg-graphite-100 text-graphite-600'}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string | null>(null)

  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  const types = Array.from(new Set(projects.map((p) => p.type)))

  const filteredRest = filter ? rest.filter((p) => p.type === filter) : rest

  const scrollToContact = () => {
    const el = document.querySelector('#contacto')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="obras" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-200 bg-glass-50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-glass-500" />
              <span className="text-glass-600 text-xs font-semibold tracking-wide uppercase">Portfolio de obras</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 tracking-tight">
              Soluciones aplicadas en obra.
            </h2>
            <p className="text-graphite-500 text-base mt-3 max-w-lg leading-relaxed">
              Proyectos reales ejecutados en residencias, hoteles, edificios corporativos y centros comerciales de Paraguay y la región.
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 sm:gap-8 flex-shrink-0">
            <div className="text-center">
              <div className="text-2xl font-bold text-graphite-900">+200</div>
              <div className="text-xs text-graphite-500 mt-0.5">obras ejecutadas</div>
            </div>
            <div className="w-px h-10 bg-graphite-200" />
            <div className="text-center">
              <div className="text-2xl font-bold text-graphite-900">15+</div>
              <div className="text-xs text-graphite-500 mt-0.5">años en el rubro</div>
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
              filter === null
                ? 'bg-glass-600 text-white border-glass-600'
                : 'border-graphite-200 text-graphite-600 hover:border-glass-400 hover:text-glass-600'
            }`}
          >
            Todos
          </button>
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(filter === type ? null : type)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                filter === type
                  ? 'bg-glass-600 text-white border-glass-600'
                  : 'border-graphite-200 text-graphite-600 hover:border-glass-400 hover:text-glass-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Featured projects (2-col) — only when no filter or filter matches */}
        {(!filter || featured.some((p) => p.type === filter)) && (
          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {(filter ? featured.filter((p) => p.type === filter) : featured).map((proj) => (
              <FeaturedCard key={proj.id} project={proj} />
            ))}
          </div>
        )}

        {/* Other projects grid */}
        {filteredRest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {filteredRest.map((proj) => (
              <SmallCard key={proj.id} project={proj} />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 p-8 rounded-2xl bg-graphite-50 border border-graphite-200">
          <div>
            <h3 className="text-graphite-900 font-bold text-lg mb-1">¿Tenés un proyecto para Glasstex?</h3>
            <p className="text-graphite-500 text-sm">
              Envianos los detalles y nuestro equipo técnico-comercial te asesora sin cargo.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-glass-600 text-white font-semibold text-sm hover:bg-glass-700 transition-all group shadow-glass"
          >
            Enviar proyecto
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
