'use client'

import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'

const tagColors: Record<string, string> = {
  'fachada': 'bg-blue-50 text-blue-700',
  'curtain-wall': 'bg-indigo-50 text-indigo-700',
  'dvh': 'bg-teal-50 text-teal-700',
  'corporativo': 'bg-violet-50 text-violet-700',
  'residencial': 'bg-emerald-50 text-emerald-700',
  'aberturas': 'bg-orange-50 text-orange-700',
  'corredizas': 'bg-amber-50 text-amber-700',
  'silicone-glazing': 'bg-cyan-50 text-cyan-700',
  'comercial': 'bg-rose-50 text-rose-700',
  'barandas': 'bg-purple-50 text-purple-700',
  'templado': 'bg-red-50 text-red-700',
  'mamparas': 'bg-lime-50 text-lime-700',
  'laminado': 'bg-sky-50 text-sky-700',
  'batientes': 'bg-yellow-50 text-yellow-700',
  'conjunto': 'bg-pink-50 text-pink-700',
}

const projectTypeColors: Record<string, string> = {
  'Comercial / Corporativo': 'from-glass-900 to-glass-800',
  'Residencial': 'from-graphite-800 to-graphite-700',
  'Comercial': 'from-graphite-900 to-graphite-700',
  'Corporativo': 'from-glass-900 to-glass-700',
}

export default function ProjectsSection() {
  const scrollToContact = () => {
    const el = document.querySelector('#contacto')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="obras" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-200 bg-glass-50 mb-4">
              <span className="text-glass-600 text-xs font-semibold tracking-wide uppercase">Portfolio de obras</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 tracking-tight">
              Soluciones aplicadas en obra.
            </h2>
          </div>
          <p className="text-graphite-500 text-sm max-w-xs sm:text-right leading-relaxed">
            Proyectos reales en residencias, comercios y edificios corporativos de Paraguay.
          </p>
        </div>

        {/* Featured projects (2-col) */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {projects.filter((p) => p.featured).map((proj) => (
            <div
              key={proj.id}
              className="group relative rounded-2xl overflow-hidden border border-graphite-200 hover:shadow-card-hover transition-all"
            >
              {/* Visual placeholder */}
              <div className={`h-56 bg-gradient-to-br ${projectTypeColors[proj.type] || 'from-graphite-900 to-graphite-700'} relative`}>
                {/* Grid decoration */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                  }}
                />
                {/* CMS placeholder label */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium">
                  {proj.solution}
                </div>
                {/* Year badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 border border-white/20">
                  <Calendar size={10} className="text-white/70" />
                  <span className="text-white text-xs font-medium">{proj.year}</span>
                </div>
                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-graphite-950/80 to-transparent" />
                {/* CMS ready label */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white/60 text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    📸 Imagen — conectar a CMS
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-graphite-900 text-lg leading-tight">{proj.name}</h3>
                </div>
                <div className="flex items-center gap-3 text-sm text-graphite-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} />
                    {proj.location}
                  </span>
                  <span className="text-graphite-300">·</span>
                  <span>{proj.type}</span>
                </div>
                <p className="text-graphite-600 text-sm leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${tagColors[tag] || 'bg-graphite-100 text-graphite-600'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {projects.filter((p) => !p.featured).map((proj) => (
            <div
              key={proj.id}
              className="group rounded-xl overflow-hidden border border-graphite-200 hover:border-glass-600/30 hover:shadow-card transition-all"
            >
              {/* Mini visual */}
              <div className={`h-32 bg-gradient-to-br ${projectTypeColors[proj.type] || 'from-graphite-800 to-graphite-600'} relative`}>
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white/50 text-xs">📸 CMS</span>
                </div>
                <div className="absolute bottom-2 left-3 text-white text-xs font-medium opacity-80">
                  {proj.year}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-graphite-900 text-sm leading-tight mb-1">{proj.name}</h4>
                <div className="flex items-center gap-1 text-xs text-graphite-400">
                  <MapPin size={10} />
                  {proj.location.split(',')[0]}
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {proj.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className={`px-2 py-0.5 rounded-full text-xs font-medium ${tagColors[tag] || 'bg-graphite-100 text-graphite-600'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-graphite-500 text-sm mb-4">
            ¿Querés sumar tu proyecto al portfolio de Glasstex?
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-glass-600 text-glass-600 font-semibold text-sm hover:bg-glass-600 hover:text-white transition-all group"
          >
            Enviar proyecto para cotización
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
