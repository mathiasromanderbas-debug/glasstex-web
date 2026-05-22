'use client'

import { ArrowRight, CheckCircle } from 'lucide-react'
import { solutions } from '@/data/solutions'

const solutionIcons = ['🏛️', '🪟', '🔷', '🛡️', '📦']

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
        <div className="flex flex-col gap-8">
          {solutions.map((sol, i) => (
            <div
              key={sol.id}
              className={`flex flex-col lg:flex-row gap-8 items-start p-8 rounded-2xl border border-graphite-200 hover:border-glass-600/30 hover:shadow-card transition-all group ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Emoji/Visual block */}
              <div className="flex-shrink-0 w-full lg:w-1/3">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-graphite-50 to-graphite-100 border border-graphite-200 flex items-center justify-center relative overflow-hidden group-hover:border-glass-200 transition-colors">
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,85,204,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,85,204,0.1) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <span className="text-5xl" role="img" aria-label={sol.title}>{solutionIcons[i]}</span>
                    <span className="text-xs font-medium text-graphite-500 px-3 py-1.5 rounded-full bg-white border border-graphite-200">
                      {sol.features[0]}
                    </span>
                  </div>
                  {/* Blue accent corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-glass-600/10 rounded-bl-2xl" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-glass-600/5 rounded-tr-xl" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-5">
                <div>
                  <h3 className="text-2xl font-bold text-graphite-900 mb-3 leading-tight">{sol.title}</h3>
                  <p className="text-graphite-600 leading-relaxed">{sol.detail}</p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {sol.features.map((feat) => (
                    <span
                      key={feat}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-glass-50 border border-glass-100 text-glass-700 text-xs font-medium"
                    >
                      <CheckCircle size={12} />
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Applications */}
                <div className="p-4 rounded-xl bg-graphite-50 border border-graphite-100">
                  <span className="text-xs font-semibold text-graphite-500 uppercase tracking-wide">Aplicaciones</span>
                  <p className="text-sm text-graphite-700 mt-1">{sol.applications.join(' · ')}</p>
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
          ))}
        </div>
      </div>
    </section>
  )
}
