'use client'

import { MessageCircle, Upload } from 'lucide-react'
import ContactForm from './ContactForm'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595983471820'
const WHATSAPP_COTIZACION = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Glasstex%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20proyecto%20de%20aluminio%20y%20vidrio.`
const WHATSAPP_MODULAR = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Glasstex%2C%20quiero%20consultar%20por%20productos%20modulares%20de%20aluminio%20y%20vidrio.`
const WHATSAPP_GOP = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Glasstex%2C%20quiero%20solicitar%20acceso%20a%20GlassOrderPro%20como%20profesional%20del%20rubro.`

const whatsappShortcuts = [
  {
    label: 'Cotización de obra',
    icon: '🏛️',
    href: WHATSAPP_COTIZACION,
  },
  {
    label: 'Acceso GlassOrderPro',
    icon: '🔐',
    href: WHATSAPP_GOP,
  },
  {
    label: 'Productos modulares',
    icon: '📦',
    href: WHATSAPP_MODULAR,
  },
]

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-graphite-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-200 bg-glass-50 mb-4">
            <span className="text-glass-600 text-xs font-semibold tracking-wide uppercase">Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 mb-4 tracking-tight">
            Hablemos de tu proyecto.
          </h2>
          <p className="text-graphite-500 text-lg max-w-2xl mx-auto">
            Completá el formulario o escribinos directamente por WhatsApp. El equipo técnico-comercial responde en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* Left: Info + WhatsApp shortcuts */}
          <div className="flex flex-col gap-6">

            {/* WhatsApp shortcuts */}
            <div className="p-5 rounded-2xl bg-white border border-graphite-200">
              <div className="text-xs font-semibold text-graphite-500 uppercase tracking-wide mb-4">
                Acceso directo por WhatsApp
              </div>
              <div className="flex flex-col gap-2">
                {whatsappShortcuts.map((shortcut) => (
                  <a
                    key={shortcut.label}
                    href={shortcut.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-graphite-200 hover:border-[#25D366]/60 hover:bg-[#25D366]/5 transition-all group"
                  >
                    <span className="text-xl flex-shrink-0">{shortcut.icon}</span>
                    <span className="text-sm font-medium text-graphite-700 group-hover:text-graphite-900 transition-colors">
                      {shortcut.label}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 ml-auto text-[#25D366] flex-shrink-0"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Info card */}
            <div className="p-5 rounded-2xl bg-white border border-graphite-200">
              <div className="text-xs font-semibold text-graphite-500 uppercase tracking-wide mb-4">
                Podemos ayudarte con
              </div>
              <div className="flex flex-col gap-2.5">
                {[
                  'Presupuestos de obras y proyectos',
                  'Especificaciones técnicas',
                  'Pedidos de vidrio y aluminio',
                  'Acceso a GlassOrderPro',
                  'Consultas sobre productos modulares',
                  'Mantenimiento y reposición',
                  'Visitas técnicas a obra',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-graphite-600">
                    <span className="text-glass-600 font-bold mt-0.5">·</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-glass-50 border border-glass-200">
              <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
              <div>
                <div className="font-semibold text-graphite-900 text-sm">Respuesta en menos de 24h</div>
                <div className="text-graphite-500 text-xs">Equipo técnico-comercial activo</div>
              </div>
            </div>
          </div>

          {/* Right: Form (2 cols wide) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-graphite-200 p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-glass-50 border border-glass-100 flex items-center justify-center">
                <MessageCircle size={18} className="text-glass-600" />
              </div>
              <div>
                <div className="font-bold text-graphite-900">Solicitud de cotización</div>
                <div className="text-graphite-400 text-sm">Completá los datos para que el equipo se contacte</div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
