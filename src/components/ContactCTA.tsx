'use client'

import { ArrowRight, Upload, MessageCircle, Lock } from 'lucide-react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595983471820'
const WHATSAPP_COTIZACION = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Glasstex%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20proyecto%20de%20aluminio%20y%20vidrio.`
const WHATSAPP_GOP = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Glasstex%2C%20quiero%20solicitar%20acceso%20a%20GlassOrderPro%20como%20profesional%20del%20rubro.`

export default function ContactCTA() {
  const scrollToContact = () => {
    const el = document.querySelector('#contacto')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 bg-graphite-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-graphite-950 via-glass-950/30 to-graphite-950" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0,85,204,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,85,204,0.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-glass-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-600/30 bg-glass-600/10 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-glass-400 animate-pulse" />
          <span className="text-glass-300 text-xs font-medium tracking-wide uppercase">Equipo técnico-comercial disponible</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
          Construyamos tu próxima solución en aluminio y vidrio.
        </h2>

        <p className="text-graphite-300 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          Contanos qué necesitás y nuestro equipo técnico-comercial te orienta hacia la mejor solución: obra, pedido profesional, producto modular o mantenimiento.
        </p>

        {/* Main CTAs */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mb-8">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-glass-600 text-white font-bold text-base hover:bg-glass-500 transition-all shadow-glass-lg group"
          >
            Solicitar cotización
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/20 text-white font-semibold text-base hover:border-white/40 hover:bg-white/5 transition-all group"
          >
            <Upload size={18} />
            Subir proyecto
          </button>

          <a
            href={WHATSAPP_COTIZACION}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-base hover:bg-[#20bc5a] transition-colors shadow-md group"
          >
            <MessageCircle size={18} />
            Contactar por WhatsApp
          </a>

          <a
            href={WHATSAPP_GOP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-glass-600/40 text-glass-300 font-semibold text-base hover:border-glass-500 hover:text-glass-200 hover:bg-glass-600/10 transition-all group"
          >
            <Lock size={18} />
            Solicitar acceso a GlassOrderPro
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-graphite-400 text-sm">
          {[
            '✓ Sin costo de consulta',
            '✓ Respuesta en menos de 24h',
            '✓ Equipo técnico propio',
            '✓ Paraguay',
          ].map((item) => (
            <span key={item} className="text-graphite-500 text-xs">{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
