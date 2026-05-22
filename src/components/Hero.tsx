'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Upload, Wrench, ChevronDown, Shield, Layers, Building2, AlignJustify, Monitor } from 'lucide-react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595983471820'
const WHATSAPP_COTIZACION = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Glasstex%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20proyecto%20de%20aluminio%20y%20vidrio.`

const floatingCards = [
  { icon: Shield, label: 'Vidrio templado', sublabel: 'Seguridad estructural', color: 'bg-glass-50 border-glass-200' },
  { icon: Layers, label: 'DVH', sublabel: 'Aislación premium', color: 'bg-graphite-50 border-graphite-200' },
  { icon: Building2, label: 'Fachadas', sublabel: 'Curtain wall', color: 'bg-glass-50 border-glass-200' },
  { icon: AlignJustify, label: 'Perfiles Al.', sublabel: 'Producción propia', color: 'bg-graphite-50 border-graphite-200' },
  { icon: Monitor, label: 'Pedidos digitales', sublabel: 'GlassOrderPro', color: 'bg-glass-50 border-glass-200' },
]

const stats = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '500+', label: 'Proyectos instalados' },
  { value: '100%', label: 'Producción nacional' },
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
                Aluminio y vidrio{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-glass-300 to-glass-500">
                  para obras
                </span>{' '}
                que exigen precisión.
              </h1>
              <p className="text-graphite-300 text-lg sm:text-xl leading-relaxed max-w-xl">
                Diseñamos, fabricamos e instalamos soluciones arquitectónicas en aluminio y vidrio para proyectos
                residenciales, comerciales y corporativos, integrando producción industrial, ingeniería técnica
                y tecnología digital.
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
            <div className="flex items-center gap-6 pt-2">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-graphite-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating cards grid */}
          <div
            className={`hidden lg:flex flex-col gap-4 items-end transition-all duration-700 delay-200 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Main visual card */}
            <div className="w-full max-w-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-glass-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-glass-600 flex items-center justify-center">
                  <Building2 size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Fachada vidriada</div>
                  <div className="text-graphite-400 text-xs">Curtain wall · DVH · Aluminio</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { label: 'Temple', pct: '100%', c: 'bg-glass-600' },
                  { label: 'Aislación', pct: '95%', c: 'bg-glass-500' },
                  { label: 'Precisión', pct: '99%', c: 'bg-glass-400' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1.5">
                    <div className="text-graphite-400 text-xs">{item.label}</div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full ${item.c} rounded-full`} style={{ width: item.pct }} />
                    </div>
                    <div className="text-white text-xs font-medium">{item.pct}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-graphite-300 text-xs">Producción en planta · Paraguay</span>
              </div>
            </div>

            {/* Mini floating capability cards */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {floatingCards.map((card, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-glass-600/40 transition-all cursor-default ${
                    i === 4 ? 'col-span-2' : ''
                  }`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-glass-600/20 flex items-center justify-center flex-shrink-0">
                    <card.icon size={15} className="text-glass-400" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">{card.label}</div>
                    <div className="text-graphite-500 text-xs">{card.sublabel}</div>
                  </div>
                </div>
              ))}
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
