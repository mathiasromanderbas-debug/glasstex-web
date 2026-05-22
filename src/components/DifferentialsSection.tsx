'use client'

import {
  Factory, Link, Cpu, Monitor, QrCode, LayoutGrid, HardHat, Building2,
} from 'lucide-react'
import { differentials } from '@/data/differentials'

const iconMap: Record<string, React.ElementType> = {
  Factory, Link, Cpu, Monitor, QrCode, LayoutGrid, HardHat, Building2,
}

export default function DifferentialsSection() {
  return (
    <section id="diferencial" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-200 bg-glass-50 mb-4">
            <span className="text-glass-600 text-xs font-semibold tracking-wide uppercase">Por qué Glasstex</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 mb-4 tracking-tight">
            No es una vidriería.<br className="hidden sm:block" /> Es una plataforma industrial.
          </h2>
          <p className="text-graphite-500 text-lg max-w-2xl mx-auto">
            Glasstex integra producción, ingeniería, tecnología y servicio en un ecosistema diseñado para obras profesionales.
          </p>
        </div>

        {/* Brand concept banner */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-graphite-950 to-graphite-900 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-glass-600/10 blur-3xl" />
          <div className="relative z-10 text-center">
            <blockquote className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
              "La belleza de la resistencia."
            </blockquote>
            <p className="text-graphite-400 text-base">
              Concepto de marca Glasstex — Precisión técnica para obras reales.
            </p>
          </div>
        </div>

        {/* Differentials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {differentials.map((diff) => {
            const Icon = iconMap[diff.icon] || Factory
            return (
              <div
                key={diff.id}
                className="group flex flex-col gap-4 p-6 rounded-2xl border border-graphite-200 hover:border-glass-600/40 hover:shadow-card-hover transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-glass-50 border border-glass-100 flex items-center justify-center group-hover:bg-glass-600 group-hover:border-glass-600 transition-all duration-300">
                  <Icon size={18} className="text-glass-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-graphite-900 text-base mb-2 leading-tight">{diff.title}</h3>
                  <p className="text-graphite-500 text-sm leading-relaxed">{diff.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Comparison row */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-graphite-50 border border-graphite-200">
            <div className="text-graphite-400 text-xs font-semibold uppercase tracking-wide mb-4">Vidriería tradicional</div>
            <div className="flex flex-col gap-3">
              {[
                'Intermediarios entre fabricación y obra',
                'Sin trazabilidad ni documentación técnica',
                'Sin plataforma digital para pedidos',
                'Capacidad limitada para proyectos complejos',
                'Solo vidrio, sin integración de aluminio',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-graphite-500">
                  <span className="text-graphite-300">✕</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-glass-50 border border-glass-200">
            <div className="text-glass-700 text-xs font-semibold uppercase tracking-wide mb-4">Glasstex</div>
            <div className="flex flex-col gap-3">
              {[
                'Producción propia sin intermediarios',
                'Trazabilidad y codificación en cada pieza',
                'GlassOrderPro: plataforma digital B2B',
                'Capacidad para obras de gran escala',
                'Aluminio + vidrio integrados en un proceso',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-glass-800 font-medium">
                  <span className="text-glass-600">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
