'use client'

import {
  Flame, Layers, Boxes, Scissors, Sparkles, CircleDot,
  Building2, Settings2, HardHat, AlignJustify, Truck, ClipboardCheck,
} from 'lucide-react'
import { capabilities } from '@/data/capabilities'

const iconMap: Record<string, React.ElementType> = {
  Flame, Layers, Boxes, Scissors, Sparkles, CircleDot,
  Building2, Settings2, HardHat, AlignJustify, Truck, ClipboardCheck,
}

export default function CapabilitiesGrid() {
  return (
    <section id="capacidades" className="py-24 bg-graphite-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-200 bg-glass-50 mb-4">
              <span className="text-glass-600 text-xs font-semibold tracking-wide uppercase">Capacidades industriales</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 tracking-tight">
              Una cadena completa de<br className="hidden sm:block" /> aluminio y vidrio.
            </h2>
          </div>
          <p className="text-graphite-500 text-base max-w-md lg:text-right leading-relaxed">
            Desde el procesamiento de vidrio hasta la instalación en obra: cada etapa bajo control propio, con trazabilidad y criterios industriales.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {capabilities.map((cap) => {
            const Icon = iconMap[cap.icon] || Boxes
            return (
              <div
                key={cap.id}
                className="group flex flex-col gap-4 p-5 rounded-2xl bg-white border border-graphite-200 hover:border-glass-600/30 hover:shadow-card transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-glass-50 border border-glass-100 flex items-center justify-center flex-shrink-0 group-hover:bg-glass-600 group-hover:border-glass-600 transition-all duration-300">
                    <Icon size={17} className="text-glass-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-graphite-900 text-sm leading-tight">{cap.title}</h3>
                </div>

                {/* Description */}
                <p className="text-graphite-500 text-sm leading-relaxed">{cap.description}</p>

                {/* Application tag */}
                <div className="mt-auto pt-2 border-t border-graphite-100">
                  <span className="text-xs text-graphite-400 leading-relaxed">
                    <span className="font-medium text-graphite-600">Aplica a:</span> {cap.application}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-glass-600 to-glass-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white text-center sm:text-left">
            <div className="font-bold text-lg mb-1">Ingeniería, fabricación e instalación en una misma cadena.</div>
            <div className="text-glass-200 text-sm">Sin intermediarios. Control total desde planta hasta obra.</div>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector('#contacto')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-white text-glass-700 font-semibold text-sm hover:bg-glass-50 transition-colors shadow-sm"
          >
            Solicitar capacidad técnica
          </button>
        </div>
      </div>
    </section>
  )
}
