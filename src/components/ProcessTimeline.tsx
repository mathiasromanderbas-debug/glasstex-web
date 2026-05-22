'use client'

import { MapPin, Search, FileText, PenTool, Factory, ClipboardCheck, Truck, HardHat, HeartHandshake } from 'lucide-react'
import { processSteps } from '@/data/processSteps'

const iconMap: Record<string, React.ElementType> = {
  MapPin, Search, FileText, Drafting: PenTool, Factory, ClipboardCheck, Truck, HardHat, HeartHandshake,
}

export default function ProcessTimeline() {
  return (
    <section id="proceso" className="py-24 bg-graphite-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-200 bg-glass-50 mb-4">
            <span className="text-glass-600 text-xs font-semibold tracking-wide uppercase">Proceso y trazabilidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 mb-4 tracking-tight">
            Del presupuesto a la instalación,<br className="hidden sm:block" /> con más control.
          </h2>
          <p className="text-graphite-500 text-lg max-w-2xl mx-auto">
            Cada proyecto sigue un proceso documentado con codificación de componentes, control de calidad y trazabilidad en cada etapa.
          </p>
        </div>

        {/* Timeline — desktop horizontal / mobile vertical */}
        <div className="hidden lg:block mb-16">
          {/* Steps row */}
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-6 left-[4%] right-[4%] h-px bg-gradient-to-r from-glass-200 via-glass-600 to-glass-200" />

            <div className="grid grid-cols-9 gap-2">
              {processSteps.map((step, i) => {
                const Icon = iconMap[step.icon] || MapPin
                return (
                  <div key={step.id} className="flex flex-col items-center gap-3">
                    {/* Step indicator */}
                    <div className="relative z-10 w-12 h-12 rounded-2xl bg-white border-2 border-glass-600 flex items-center justify-center shadow-glass flex-shrink-0 hover:bg-glass-600 group transition-all cursor-default">
                      <Icon size={18} className="text-glass-600 group-hover:text-white transition-colors" />
                      {/* Step number */}
                      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-glass-600 text-white text-xs font-bold flex items-center justify-center">
                        {step.id}
                      </div>
                    </div>
                    {/* Label */}
                    <div className="text-center">
                      <div className="font-bold text-graphite-900 text-xs leading-tight">{step.title}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Details row */}
          <div className="grid grid-cols-9 gap-2 mt-8">
            {processSteps.map((step) => (
              <div key={step.id} className="p-3 rounded-xl bg-white border border-graphite-200 hover:border-glass-600/30 hover:shadow-card transition-all">
                <div className="text-graphite-500 text-xs leading-relaxed mb-2">{step.description}</div>
                <div className="flex flex-col gap-1">
                  {step.highlights.map((h) => (
                    <div key={h} className="text-graphite-400 text-xs leading-tight">· {h}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden flex flex-col gap-0 mb-12">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || MapPin
            const isLast = i === processSteps.length - 1
            return (
              <div key={step.id} className="flex gap-4">
                {/* Left: indicator + line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-white border-2 border-glass-600 flex items-center justify-center shadow-glass flex-shrink-0 relative">
                    <Icon size={16} className="text-glass-600" />
                    <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-glass-600 text-white text-xs font-bold flex items-center justify-center">
                      {step.id}
                    </div>
                  </div>
                  {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-glass-600/60 to-glass-200/20 mt-2 mb-0 min-h-[24px]" />}
                </div>

                {/* Right: content */}
                <div className={`flex-1 pb-6 ${isLast ? '' : ''}`}>
                  <h3 className="font-bold text-graphite-900 text-base mb-1">{step.title}</h3>
                  <p className="text-graphite-500 text-sm leading-relaxed mb-2">{step.description}</p>
                  <div className="flex flex-col gap-1">
                    {step.highlights.map((h) => (
                      <div key={h} className="text-graphite-400 text-xs">· {h}</div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Highlights strip */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Codificación de componentes', desc: 'Cada pieza tiene su código de trazabilidad.' },
            { label: 'Fichas técnicas', desc: 'Documentación técnica por proyecto.' },
            { label: 'Control por proceso', desc: 'Verificación en planta y en obra.' },
            { label: 'Fiscalización de obra', desc: 'Supervisión técnica durante la instalación.' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-2 p-5 rounded-xl bg-white border border-graphite-200 hover:border-glass-600/30 transition-all">
              <div className="w-2 h-2 rounded-full bg-glass-600" />
              <div className="font-bold text-graphite-900 text-sm">{item.label}</div>
              <div className="text-graphite-500 text-xs leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
