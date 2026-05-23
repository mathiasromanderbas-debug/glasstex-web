'use client'

import { useState } from 'react'
import { Factory, HardHat, ArrowRight } from 'lucide-react'

const facilityPhotos = [
  { src: '/fabrica/fabrica-1.jpg', label: 'Planta de producción', category: 'Fábrica' },
  { src: '/fabrica/fabrica-2.jpg', label: 'Procesamiento de vidrio', category: 'Fábrica' },
  { src: '/fabrica/fabrica-3.jpg', label: 'Línea de producción', category: 'Fábrica' },
  { src: '/fabrica/instalacion-1.jpg', label: 'Instalación en obra', category: 'Instalación' },
  { src: '/fabrica/instalacion-2.jpg', label: 'Equipo técnico en obra', category: 'Instalación' },
  { src: '/fabrica/instalacion-3.jpg', label: 'Montaje de sistema', category: 'Instalación' },
]

function Photo({ src, label, category }: { src: string; label: string; category: string }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative flex-shrink-0 w-72 sm:w-80 h-52 rounded-2xl overflow-hidden border border-white/10 group">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src} alt={label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-graphite-800 to-graphite-900 flex items-center justify-center">
          {category === 'Fábrica' ? <Factory size={32} className="text-graphite-600" /> : <HardHat size={32} className="text-graphite-600" />}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/80 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="text-xs font-medium text-glass-400 block mb-0.5">{category}</span>
        <span className="text-white text-sm font-semibold">{label}</span>
      </div>
    </div>
  )
}

export default function FacilityStrip() {
  const scrollToContact = () => {
    const el = document.querySelector('#contacto')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-graphite-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-600/30 bg-glass-600/10 mb-4">
              <Factory size={12} className="text-glass-400" />
              <span className="text-glass-300 text-xs font-semibold tracking-wide uppercase">Nuestra planta</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Producción 100% propia.<br className="hidden sm:block" />
              <span className="text-graphite-400"> Desde Asunción, Paraguay.</span>
            </h2>
          </div>
          <button
            onClick={scrollToContact}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-glass-600/40 text-glass-300 text-sm font-semibold hover:bg-glass-600/10 hover:border-glass-500 transition-all group"
          >
            Solicitar visita técnica
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-4 pl-4 sm:pl-6 lg:pl-8 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}>
        {facilityPhotos.map((photo) => (
          <div key={photo.src} style={{ scrollSnapAlign: 'start' }}>
            <Photo {...photo} />
          </div>
        ))}
        {/* End spacer */}
        <div className="flex-shrink-0 w-4" />
      </div>

      {/* Stats row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: '+120.000 m²', label: 'de vidrio procesado por año' },
            { value: '+200 tn', label: 'de aluminio por mes' },
            { value: 'Propia', label: 'línea de temple y laminado' },
            { value: '15+ años', label: 'de producción nacional' },
          ].map((stat) => (
            <div key={stat.label} className="p-5 rounded-xl border border-white/8 bg-white/4 flex flex-col gap-1">
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-graphite-400 text-xs leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
