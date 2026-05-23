'use client'

import { ArrowRight, CheckCircle, Building2, Square, LayoutGrid, Shield, Package, Layers } from 'lucide-react'
import { solutions } from '@/data/solutions'

// Visual icon for each solution category
const solutionVisuals: { icon: React.ElementType; accent: string; bg: string; line: string }[] = [
  {
    icon: Building2,
    accent: 'from-glass-600/20 to-glass-600/5',
    bg: 'bg-glass-600',
    line: 'border-glass-600/20',
  },
  {
    icon: Square,
    accent: 'from-graphite-200/60 to-graphite-100/30',
    bg: 'bg-graphite-700',
    line: 'border-graphite-300/30',
  },
  {
    icon: Layers,
    accent: 'from-glass-600/15 to-glass-400/5',
    bg: 'bg-glass-700',
    line: 'border-glass-600/15',
  },
  {
    icon: Shield,
    accent: 'from-graphite-200/50 to-graphite-100/20',
    bg: 'bg-graphite-800',
    line: 'border-graphite-300/20',
  },
  {
    icon: Package,
    accent: 'from-teal-600/15 to-teal-400/5',
    bg: 'bg-teal-700',
    line: 'border-teal-600/20',
  },
]

export default function SolutionsSection() {
  const scrollToContact = () => {
    const el = document.querySelector('#contacto')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="soluciones" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-200 bg-glass-50 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-glass-500" />
            <span className="text-glass-600 text-xs font-semibold tracking-wide uppercase">Soluciones por categoría</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 mb-4 tracking-tight">
            Soluciones técnicas para cada obra.
          </h2>
          <p className="text-graphite-500 text-lg max-w-2xl mx-auto">
            Cada proyecto tiene sus requerimientos. Glasstex cubre todas las etapas y categorías con criterios industriales y de ingeniería.
          </p>
        </div>

        {/* Solutions list */}
        <div className="flex flex-col gap-6">
          {solutions.map((sol, i) => {
            const visual = solutionVisuals[i] || solutionVisuals[0]
            const Icon = visual.icon
            const isReversed = i % 2 !== 0

            return (
              <div
                key={sol.id}
                className={`flex flex-col lg:flex-row gap-0 rounded-2xl border border-graphite-200 overflow-hidden hover:border-glass-600/30 hover:shadow-card-hover transition-all group ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual block */}
                <div className={`flex-shrink-0 lg:w-72 xl:w-80 bg-gradient-to-br ${visual.accent} border-b lg:border-b-0 ${isReversed ? 'lg:border-l' : 'lg:border-r'} ${visual.line} flex flex-col items-center justify-center p-8 gap-4 relative overflow-hidden`}>
                  {/* Grid decoration */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,85,204,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,85,204,0.08) 1px, transparent 1px)`,
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Icon circle */}
                  <div className={`relative z-10 w-20 h-20 rounded-2xl ${visual.bg} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <Icon size={36} className="text-white" strokeWidth={1.5} />
                  </div>

                  {/* Step number */}
                  <div className="relative z-10 text-graphite-400/60 text-xs font-mono tracking-widest">
                    0{i + 1} / {String(solutions.length).padStart(2, '0')}
                  </div>

                  {/* First feature badge */}
                  <div className="relative z-10">
                    <span className="px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-graphite-200/60 text-graphite-700 text-xs font-medium">
                      {sol.features[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-5 p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-graphite-900 mb-3 leading-tight group-hover:text-glass-700 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-graphite-600 leading-relaxed">{sol.detail}</p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {sol.features.map((feat) => (
                      <span
                        key={feat}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-glass-50 border border-glass-100 text-glass-700 text-xs font-medium"
                      >
                        <CheckCircle size={11} className="flex-shrink-0" />
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Applications */}
                  <div className="p-4 rounded-xl bg-graphite-50 border border-graphite-100">
                    <span className="text-xs font-semibold text-graphite-400 uppercase tracking-wide">Aplicaciones</span>
                    <p className="text-sm text-graphite-700 mt-1.5 leading-relaxed">{sol.applications.join(' · ')}</p>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => {
                      if (sol.ctaHref === '#modulares') {
                        const el = document.querySelector('#modulares')
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      } else {
                        scrollToContact()
                      }
                    }}
                    className="flex items-center gap-2 text-sm font-semibold text-glass-600 hover:text-glass-700 group/btn w-fit"
                  >
                    {sol.cta}
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
