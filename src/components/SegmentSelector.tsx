'use client'

import { Building, Ruler, Wrench, Package, Hammer, MessageCircle, ArrowRight } from 'lucide-react'
import { segments } from '@/data/segments'

const iconMap: Record<string, React.ElementType> = {
  Building, Ruler, Wrench, Package, Hammer, MessageCircle,
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595983471820'

const badgeColors: Record<string, string> = {
  'Obras y construcción': 'bg-glass-100 text-glass-700',
  'Profesionales': 'bg-purple-100 text-purple-700',
  'GlassOrderPro': 'bg-amber-100 text-amber-700',
  'VitraLink': 'bg-teal-100 text-teal-700',
}

export default function SegmentSelector() {
  const handleCta = (seg: typeof segments[0]) => {
    if (seg.ctaHref === 'whatsapp') {
      const msg = encodeURIComponent(seg.whatsappMessage)
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
      return
    }
    const el = document.querySelector(seg.ctaHref)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="segmentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-200 bg-glass-50 mb-4">
            <span className="text-glass-600 text-xs font-semibold tracking-wide uppercase">Encontrá tu ruta</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 mb-4 tracking-tight">
            ¿Qué necesitás resolver?
          </h2>
          <p className="text-graphite-500 text-lg max-w-2xl mx-auto">
            Glasstex atiende distintos perfiles con soluciones específicas. Elegí el que mejor te representa.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {segments.map((seg) => {
            const Icon = iconMap[seg.icon] || Building
            return (
              <div
                key={seg.id}
                className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-graphite-200 bg-white hover:border-glass-600/40 hover:shadow-card-hover transition-all duration-300 cursor-default"
              >
                {/* Badge */}
                {seg.badge && (
                  <span className={`absolute top-5 right-5 px-2.5 py-1 rounded-full text-xs font-semibold ${badgeColors[seg.badge] || 'bg-graphite-100 text-graphite-600'}`}>
                    {seg.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-glass-50 border border-glass-100 flex items-center justify-center group-hover:bg-glass-600 group-hover:border-glass-600 transition-all duration-300">
                  <Icon size={20} className="text-glass-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-bold text-graphite-900 text-base leading-tight">{seg.title}</h3>
                  <p className="text-graphite-500 text-sm leading-relaxed">{seg.description}</p>
                  <p className="text-graphite-600 text-sm leading-relaxed mt-1 border-t border-graphite-100 pt-3">
                    {seg.details}
                  </p>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleCta(seg)}
                  className="flex items-center gap-2 text-sm font-semibold text-glass-600 hover:text-glass-700 group/btn mt-auto pt-2"
                >
                  {seg.cta}
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-graphite-500 text-sm">
            ¿No encontrás tu caso?
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Glasstex, quiero obtener más información sobre sus soluciones.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#1a9e4d] text-sm font-semibold hover:bg-[#25D366]/20 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
