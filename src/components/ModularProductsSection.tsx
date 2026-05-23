'use client'

import { ArrowRight, Zap, Clock, BarChart3, Award, RefreshCw, TrendingUp, ExternalLink, Square, DoorOpen, LayoutTemplate, Layers, Droplets, Frame, Home, Star } from 'lucide-react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595983471820'
const WHATSAPP_MODULAR = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Glasstex%2C%20quiero%20consultar%20por%20productos%20modulares%20de%20aluminio%20y%20vidrio.`

const categories = [
  { label: 'Ventanas corredizas', desc: 'Medidas estándar en aluminio', icon: Square },
  { label: 'Puertas corredizas', desc: 'Accionamiento suave y seguro', icon: DoorOpen },
  { label: 'Proyectantes', desc: 'Ventilación controlada', icon: LayoutTemplate },
  { label: 'Paños fijos', desc: 'Máxima entrada de luz', icon: Layers },
  { label: 'Mamparas', desc: 'Divisiones de baño y oficina', icon: Droplets },
  { label: 'Espejos', desc: 'Cortados a medida estándar', icon: Frame },
  { label: 'Cerramientos', desc: 'Cerramiento de balcones', icon: Home },
  { label: 'Bajo pedido', desc: 'Medidas optimizadas especiales', icon: Star },
]

const benefits = [
  { icon: Zap, title: 'Menos desperdicio', desc: 'Medidas optimizadas para aprovechar el material al máximo.' },
  { icon: Clock, title: 'Tiempos predecibles', desc: 'Fabricación estandarizada con entregas más ágiles.' },
  { icon: BarChart3, title: 'Precios por catálogo', desc: 'Sin configuraciones complejas, cotización directa.' },
  { icon: Award, title: 'Calidad Glasstex', desc: 'Los mismos estándares industriales en cada producto modular.' },
  { icon: RefreshCw, title: 'Reposición fácil', desc: 'Piezas compatibles disponibles para reposición rápida.' },
  { icon: TrendingUp, title: 'Escala en serie', desc: 'Pedidos repetibles para conjuntos y proyectos en serie.' },
]

export default function ModularProductsSection() {
  const scrollToContact = () => {
    const el = document.querySelector('#contacto')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="modulares" className="py-24 bg-graphite-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          {/* VitraLink badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-200 bg-teal-50 mb-4">
            <div className="w-4 h-4 rounded flex items-center justify-center bg-teal-600">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <rect x="0.5" y="0.5" width="4.5" height="4.5" rx="0.5" fill="white" fillOpacity="0.9"/>
                <rect x="7" y="0.5" width="4.5" height="4.5" rx="0.5" fill="white" fillOpacity="0.4"/>
                <rect x="0.5" y="7" width="4.5" height="4.5" rx="0.5" fill="white" fillOpacity="0.4"/>
                <rect x="7" y="7" width="4.5" height="4.5" rx="0.5" fill="white" fillOpacity="0.9"/>
              </svg>
            </div>
            <span className="text-teal-700 text-xs font-semibold tracking-wide uppercase">VitraLink · Canal de productos modulares</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 mb-4 tracking-tight">
            Productos modulares listos para cotizar.
          </h2>
          <p className="text-graphite-500 text-lg max-w-2xl mx-auto">
            VitraLink es la plataforma digital de aberturas y productos modulares de aluminio y vidrio. Medidas estandarizadas, fabricación optimizada, entrega ágil.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Categories */}
          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-bold text-graphite-800">Categorías disponibles</h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon
                return (
                  <div
                    key={cat.label}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-graphite-200 hover:border-glass-600/40 hover:shadow-card transition-all group cursor-default"
                  >
                    <div className="w-9 h-9 rounded-xl bg-glass-50 border border-glass-100 flex items-center justify-center flex-shrink-0 group-hover:bg-glass-600 group-hover:border-glass-600 transition-all duration-300">
                      <Icon size={16} className="text-glass-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="font-semibold text-graphite-900 text-sm leading-tight">{cat.label}</div>
                      <div className="text-graphite-400 text-xs mt-0.5">{cat.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* VitraLink platform card */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-teal-50 border border-teal-200">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                  <rect x="1" y="1" width="9" height="9" rx="1.5" fill="white" fillOpacity="0.9"/>
                  <rect x="12" y="1" width="9" height="9" rx="1.5" fill="white" fillOpacity="0.4"/>
                  <rect x="1" y="12" width="9" height="9" rx="1.5" fill="white" fillOpacity="0.4"/>
                  <rect x="12" y="12" width="9" height="9" rx="1.5" fill="white" fillOpacity="0.9"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="font-bold text-teal-900 text-sm">VitraLink</div>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-teal-200 text-teal-700 font-medium">Próximamente</span>
                </div>
                <p className="text-teal-700 text-xs leading-relaxed">
                  La plataforma de ecommerce modular de VitrAll GROUP. Catálogo digital con cotización directa, seguimiento de pedido y despacho optimizado. Desarrollada por VitraLink, empresa hermana de Glasstex.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-glass-600 text-white font-semibold text-sm hover:bg-glass-700 transition-colors shadow-glass group"
              >
                Cotizar producto modular
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={WHATSAPP_MODULAR}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-graphite-200 text-graphite-700 font-semibold text-sm hover:border-glass-600 hover:text-glass-600 transition-colors"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Benefits */}
          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-bold text-graphite-800">¿Por qué elegir la línea modular?</h3>
            <p className="text-graphite-500 text-sm leading-relaxed">
              La estandarización no es resignar calidad: es elegir la forma más eficiente de fabricar, entregar e instalar. Con los mismos materiales y procesos Glasstex.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((ben) => {
                const Icon = ben.icon
                return (
                  <div
                    key={ben.title}
                    className="flex flex-col gap-3 p-4 rounded-xl bg-white border border-graphite-200 hover:border-glass-600/20 hover:shadow-card transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-glass-50 border border-glass-100 flex items-center justify-center">
                      <Icon size={16} className="text-glass-600" />
                    </div>
                    <div>
                      <div className="font-bold text-graphite-900 text-sm mb-1">{ben.title}</div>
                      <div className="text-graphite-500 text-xs leading-relaxed">{ben.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Callout */}
            <div className="p-5 rounded-xl bg-graphite-900 flex flex-col gap-2">
              <div className="text-white font-semibold text-sm">Productos modulares para construir más rápido.</div>
              <div className="text-graphite-300 text-xs leading-relaxed">
                Sin esperar configuraciones complejas. Sin desperdicio de material. Con tiempos de entrega predecibles para conjuntos de vivienda, locales comerciales y proyectos en serie.
              </div>
            </div>

            {/* VitrAll GROUP note */}
            <div className="flex items-center gap-2 p-3 rounded-xl border border-graphite-200 bg-white">
              <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-glass-600 to-teal-600 flex-shrink-0" />
              <p className="text-graphite-500 text-xs leading-relaxed">
                <span className="font-semibold text-graphite-700">VitrAll GROUP</span> — Glasstex y VitraLink operan como empresas del mismo grupo, garantizando estándares compartidos de calidad y servicio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
