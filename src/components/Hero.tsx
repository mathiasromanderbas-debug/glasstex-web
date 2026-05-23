'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Upload, Wrench, Cog, Factory, HardHat } from 'lucide-react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595983471820'
const WHATSAPP_COTIZACION = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Glasstex%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20proyecto%20de%20aluminio%20y%20vidrio.`

const pillars = [
  {
    icon: Cog,
    title: 'Ingeniería',
    description: 'Relevamiento técnico, memoria descriptiva, planos y validación estructural para cada proyecto.',
    accent: 'from-glass-600/20 to-glass-600/5',
    border: 'border-glass-600/30',
    iconBg: 'bg-glass-600/20',
    iconColor: 'text-glass-400',
  },
  {
    icon: Factory,
    title: 'Fabricación',
    description: 'Producción propia de aberturas, perfiles de aluminio, vidrio templado, DVH y laminado.',
    accent: 'from-white/8 to-white/3',
    border: 'border-white/10',
    iconBg: 'bg-white/10',
    iconColor: 'text-graphite-300',
  },
  {
    icon: HardHat,
    title: 'Instalación',
    description: 'Equipos técnicos especializados en obra, con seguimiento, control de calidad y postventa.',
    accent: 'from-glass-600/15 to-glass-600/3',
    border: 'border-glass-600/20',
    iconBg: 'bg-glass-600/15',
    iconColor: 'text-glass-300',
  },
]

const stats = [
  { value: '+120.000', label: 'm²/año de vidrio' },
  { value: '+200 tn', label: 'de aluminio/mes' },
  { value: '15+', label: 'años en el rubro' },
  { value: 'PY → Región', label: 'alcance de proyectos' },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-graphite-950"
    >
      {/* Background architectural gradient */}
      <div className="absolute inset-0">
        {/* Deep background */}
        <div className="absolute inset-0 bg-gradient-to-br from-graphite-950 via-graphite-900 to-graphite-950" />

        {/* Blue accent gradient */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-glass-950/40 via-glass-900/20 to-transparent" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,85,204,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,85,204,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Technical lines decoration */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glass-600/20 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glass-600/10 to-transparent" />

        {/* Accent circles */}
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-glass-600/5 blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full bg-glass-400/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">

          {/* Left: Main content */}
          <div className={`flex flex-col gap-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-600/30 bg-glass-600/10 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-glass-400 animate-pulse" />
              <span className="text-glass-300 text-xs font-medium tracking-wide uppercase">
                Paraguay · Aluminio &amp; Vidrio Industrial
              </span>
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight">
                Soluciones en vidrio y aluminio{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-glass-300 to-glass-500">
                  para la arquitectura contemporánea.
                </span>
              </h1>
              <p className="text-graphite-300 text-lg sm:text-xl leading-relaxed max-w-xl">
                Ingeniería, fabricación e instalación en una misma cadena. Proyectos residenciales, comerciales
                y corporativos con producción industrial propia y tecnología digital integrada.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleScroll('#contacto')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-glass-600 text-white font-semibold hover:bg-glass-500 transition-all shadow-glass-md group"
              >
                Solicitar cotización
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleScroll('#contacto')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white font-medium hover:border-white/40 hover:bg-white/5 transition-all group"
              >
                <Upload size={16} />
                Subir proyecto
              </button>
              <button
                onClick={() => handleScroll('#glassoorderpro')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-glass-600/40 text-glass-300 font-medium hover:border-glass-500 hover:text-glass-200 hover:bg-glass-600/10 transition-all group"
              >
                <Wrench size={16} />
                Soy profesional del rubro
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="text-xl sm:text-2xl font-bold text-white leading-none">{stat.value}</span>
                  <span className="text-xs text-graphite-400 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3 Pillars */}
          <div
            className={`hidden lg:flex flex-col gap-4 transition-all duration-700 delay-200 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-graphite-500 text-xs font-medium uppercase tracking-widest">Cadena de valor</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Pillar cards */}
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`relative flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-br ${pillar.accent} backdrop-blur-md border ${pillar.border} transition-all duration-300 hover:border-glass-600/50 group`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Número de paso */}
                <div className="absolute top-4 right-5 text-graphite-700 text-xs font-mono">
                  0{i + 1}
                </div>

                <div className={`w-11 h-11 rounded-xl ${pillar.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <pillar.icon size={20} className={pillar.iconColor} />
                </div>
                <div className="flex flex-col gap-1.5 pr-6">
                  <h3 className="text-white font-semibold text-base">{pillar.title}</h3>
                  <p className="text-graphite-400 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}

            {/* Bottom tag */}
            <div className="flex items-center justify-end gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-graphite-500 text-xs">Producción 100% propia · Asunción, Paraguay</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-graphite-500 text-xs tracking-wider uppercase">Explorar</span>
        <button
          onClick={() => handleScroll('#segmentos')}
          className="w-8 h-12 rounded-full border border-white/20 flex items-start justify-center pt-2 hover:border-glass-500 transition-colors"
        >
          <div className="w-1 h-3 rounded-full bg-white/40 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
