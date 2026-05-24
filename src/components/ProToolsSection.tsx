'use client'

import { ArrowRight, ShoppingCart, Wrench, CheckCircle } from 'lucide-react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595983471820'
const WHATSAPP_TOOLS = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Glasstex%2C%20quiero%20consultar%20por%20herramientas%20profesionales%20para%20el%20rubro%20del%20vidrio%20y%20aluminio.`

// ─── Tool categories ─────────────────────────────────────────────────────────

const toolCategories = [
  {
    name: 'Ventosas',
    desc: 'Ventosas simples, dobles y eléctricas para manipulación segura de vidrios pesados y de gran formato.',
    icon: '🔵',
    tags: ['Manual', 'Doble', 'Eléctrica', 'Gran formato'],
    available: true,
  },
  {
    name: 'Cortadores de vidrio',
    desc: 'Cortadores de punta de carburo, trillos y guías de corte para piezas estándar y medidas especiales.',
    icon: '✂️',
    tags: ['Carburo', 'Aceite', 'Automático', 'Guías'],
    available: true,
  },
  {
    name: 'Separadores y calces',
    desc: 'Separadores de PVC, calces de neoprene y separadores de espuma para instalación y almacenamiento.',
    icon: '🟦',
    tags: ['PVC', 'Neoprene', 'Almacenaje', 'Instalación'],
    available: true,
  },
  {
    name: 'Pulidoras y lijadoras',
    desc: 'Pulidoras de canto para vidrio, lijadoras de borde y accesorios para terminación profesional.',
    icon: '⚙️',
    tags: ['Canto', 'Borde', 'Biseles', 'Mojado'],
    available: true,
  },
  {
    name: 'Máquinas de procesado',
    desc: 'Cortadoras CNC, taladros para vidrio, mesas de corte y equipos de procesamiento industrial.',
    icon: '🏭',
    tags: ['CNC', 'Taladro', 'Mesa de corte', 'Industrial'],
    available: false,
  },
  {
    name: 'Caballetes y transporte',
    desc: 'Caballetes plegables, carros de transporte, soportes inclinados y racks de almacenamiento de vidrio.',
    icon: '🅰️',
    tags: ['Plegable', 'Transporte', 'Rack', 'Inclinado'],
    available: true,
  },
  {
    name: 'Guinches y elevadores',
    desc: 'Guinches de succión, elevadores de vidrio y equipos de montaje para fachadas y trabajos en altura.',
    icon: '🔧',
    tags: ['Succión', 'Altura', 'Fachadas', 'Montaje'],
    available: false,
  },
  {
    name: 'Siliconas y selladores',
    desc: 'Siliconas estructurales, selladores neutros, pistolas de calafateo y accesorios de aplicación.',
    icon: '🧴',
    tags: ['Estructural', 'Neutro', 'UV', 'Pistolas'],
    available: true,
  },
]

// ─── Benefits ────────────────────────────────────────────────────────────────

const benefits = [
  'Productos seleccionados para el trabajo diario del vidriería',
  'Marcas reconocidas y alternativas de precio accesible',
  'Entrega junto con tu pedido de vidrio o aluminio',
  'Asesoramiento técnico de nuestro equipo especializado',
  'Catálogo ampliable según demanda del sector',
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function ProToolsSection() {
  return (
    <section id="herramientas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ───────────────────────────────────────── */}
        <div className="reveal flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50 mb-5">
              <Wrench size={12} className="text-purple-600" />
              <span className="text-purple-700 text-xs font-semibold tracking-wide uppercase">
                Zona profesional
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 tracking-tight mb-4 leading-tight">
              Herramientas para el rubro.<br />
              <span className="text-purple-600">Todo lo que usás, en un solo lugar.</span>
            </h2>

            <p className="text-graphite-500 text-lg leading-relaxed">
              Además de vidrio y aluminio, Glasstex provee herramientas especializadas para vidrierías, carpinteros y instaladores: desde ventosas y cortadores hasta caballetes, guinches y siliconas.
            </p>
          </div>

          {/* Benefits list */}
          <div className="flex flex-col gap-2.5 lg:max-w-xs">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <CheckCircle size={15} className="text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-graphite-600 text-sm leading-snug">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tool grid ────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {toolCategories.map((tool) => (
            <div
              key={tool.name}
              className={`relative flex flex-col gap-3 p-5 rounded-2xl border transition-all ${
                tool.available
                  ? 'border-graphite-200 bg-white hover:border-purple-300 hover:shadow-sm'
                  : 'border-dashed border-graphite-200 bg-graphite-50/50 opacity-70'
              }`}
            >
              {/* Coming soon badge */}
              {!tool.available && (
                <span className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full bg-graphite-100 text-graphite-500 font-medium">
                  Próximamente
                </span>
              )}

              {/* Icon placeholder — uses emoji as visual cue until real photos */}
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                <Wrench size={20} className="text-purple-600" />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-bold text-graphite-900 text-sm mb-1">{tool.name}</h3>
                <p className="text-graphite-500 text-xs leading-relaxed">{tool.desc}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-auto pt-1">
                {tool.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full bg-graphite-100 text-graphite-500 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA strip ────────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-2xl bg-graphite-950 p-8 sm:p-10">
          {/* Subtle grid bg */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(147,51,234,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.4) 1px, transparent 1px)`,
              backgroundSize: '32px 32px',
            }}
          />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ShoppingCart size={16} className="text-purple-400" />
                <span className="text-purple-300 text-xs font-semibold uppercase tracking-wide">
                  Catálogo en construcción
                </span>
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 tracking-tight">
                ¿Buscás algo que no está en la lista?
              </h3>
              <p className="text-graphite-400 text-sm leading-relaxed max-w-lg">
                El catálogo de herramientas está en desarrollo. Si tenés una necesidad específica, consultá directamente — incorporamos productos por demanda del sector.
              </p>
            </div>

            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href={WHATSAPP_TOOLS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors group"
              >
                Consultar herramientas
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/glassoorderpro"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/40 transition-all group text-sm"
              >
                Ir a GlassOrderPro
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
