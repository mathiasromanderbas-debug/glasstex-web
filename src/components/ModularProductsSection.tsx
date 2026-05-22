'use client'

import { ArrowRight, Zap, Clock, BarChart3, Award, RefreshCw, TrendingUp } from 'lucide-react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595983471820'
const WHATSAPP_MODULAR = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Glasstex%2C%20quiero%20consultar%20por%20productos%20modulares%20de%20aluminio%20y%20vidrio.`

const categories = [
  { label: 'Ventanas corredizas', desc: 'Medidas estándar en aluminio', icon: '🪟' },
  { label: 'Puertas corredizas', desc: 'Accionamiento suave y seguro', icon: '🚪' },
  { label: 'Proyectantes', desc: 'Ventilación controlada', icon: '🔲' },
  { label: 'Paños fijos', desc: 'Máxima entrada de luz', icon: '◼️' },
  { label: 'Mamparas', desc: 'Divisiones de baño y oficina', icon: '🛁' },
  { label: 'Espejos', desc: 'Espejos cortados a medida', icon: '🪞' },
  { label: 'Cerramientos', desc: 'Cerramiento de balcones', icon: '🏠' },
  { label: 'Productos especiales', desc: 'Bajo pedido con medidas opt.', icon: '⭐' },
]

const benefits = [
  { icon: Zap, title: 'Reducir desperdicio', desc: 'Medidas optimizadas para aprovechar el material al máximo.' },
  { icon: Clock, title: 'Mejorar tiempos', desc: 'Fabricación más rápida por estandarización del proceso.' },
  { icon: BarChart3, title: 'Simplificar presupuestos', desc: 'Precios por catálogo, sin configuraciones complejas.' },
  { icon: Award, title: 'Mantener calidad', desc: 'Los mismos estándares Glasstex en cada producto modular.' },
  { icon: RefreshCw, title: 'Facilitar reposiciones', desc: 'Piezas compatibles para reposición rápida.' },
  { icon: TrendingUp, title: 'Escalar producción', desc: 'Pedidos repetibles para proyectos en serie.' },
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-200 bg-teal-50 mb-4">
            <span className="text-teal-700 text-xs font-semibold tracking-wide uppercase">VitraLink · Ecommerce Modular</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 mb-4 tracking-tight">
            Productos modulares listos para cotizar.
          </h2>
          <p className="text-graphite-500 text-lg max-w-2xl mx-auto">
            Una línea pensada para resolver compras frecuentes con medidas estandarizadas, fabricación optimizada y entrega más ágil.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Categories */}
          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-bold text-graphite-800">Categorías disponibles</h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat) => (
                <div
                  key={cat.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-graphite-200 hover:border-glass-600/40 hover:shadow-card transition-all group cursor-default"
                >
                  <span className="text-2xl flex-shrink-0" role="img" aria-label={cat.label}>{cat.icon}</span>
                  <div>
                    <div className="font-semibold text-graphite-900 text-sm">{cat.label}</div>
                    <div className="text-graphite-400 text-xs">{cat.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coming soon badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-teal-50 border border-teal-200">
              <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                <Zap size={16} className="text-teal-600" />
              </div>
              <div>
                <div className="font-semibold text-teal-800 text-sm">Tienda online próximamente</div>
                <div className="text-teal-600 text-xs">
                  VitraLink estará disponible como catálogo digital con cotización directa y seguimiento de pedido.
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-glass-600 text-white font-semibold text-sm hover:bg-glass-700 transition-colors shadow-glass group"
              >
                Ver productos estándar
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={WHATSAPP_MODULAR}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-graphite-200 text-graphite-700 font-semibold text-sm hover:border-glass-600 hover:text-glass-600 transition-colors"
              >
                Cotizar producto modular
              </a>
            </div>
          </div>

          {/* Right: Benefits */}
          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-bold text-graphite-800">¿Por qué elegir línea modular?</h3>
            <p className="text-graphite-500 text-sm leading-relaxed">
              La estandarización no significa resignar calidad: significa elegir la forma más eficiente de fabricar, entregar e instalar, con los mismos estándares de Glasstex.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((ben) => {
                const Icon = ben.icon
                return (
                  <div
                    key={ben.title}
                    className="flex flex-col gap-3 p-4 rounded-xl bg-white border border-graphite-200 hover:border-glass-600/20 transition-all"
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

            {/* Comparison note */}
            <div className="p-4 rounded-xl bg-graphite-900 text-graphite-200 text-sm leading-relaxed">
              <span className="text-white font-semibold">Productos modulares para construir más rápido.</span>{' '}
              Sin esperar configuraciones complejas, sin desperdicio de material, con tiempos de entrega predecibles.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
