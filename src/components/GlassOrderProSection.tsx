'use client'

import {
  Package, Layers, Flame, AlignJustify, BookOpen,
  History, Activity, FileCheck, UserCheck, Bell, RadioTower, Lock, ArrowRight, CheckCircle,
} from 'lucide-react'


const features = [
  { icon: Package, label: 'Pedido de vidrios por pieza', desc: 'Configuración de medidas, espesor y tipo.' },
  { icon: Layers, label: 'Configuración de DVH', desc: 'Selección de cámara, relleno y vidrios.' },
  { icon: Layers, label: 'Configuración de laminados', desc: 'PVB, EVA, colores y espesores.' },
  { icon: Flame, label: 'Pedido de templados', desc: 'Medidas, espesores y perforaciones.' },
  { icon: AlignJustify, label: 'Perfiles por barra', desc: 'Catálogo técnico de perfiles de aluminio.' },
  { icon: BookOpen, label: 'Catálogo técnico', desc: 'Fichas, especificaciones y normativas.' },
  { icon: History, label: 'Historial de pedidos', desc: 'Acceso a todos tus pedidos anteriores.' },
  { icon: Activity, label: 'Seguimiento de estados', desc: 'Estado en tiempo real de cada pedido.' },
  { icon: FileCheck, label: 'Validación fiscal', desc: 'Verificación de RUC y datos de obra.' },
  { icon: UserCheck, label: 'Acceso manual', desc: 'Revisado por el equipo comercial.' },
  { icon: Bell, label: 'Notificaciones por correo', desc: 'Alertas automáticas por cambios de estado.' },
  { icon: RadioTower, label: 'Seguimiento en tiempo real', desc: 'Próximamente: tracking en vivo.' },
]

const audienceList = [
  'Vidrierías y distribuidores',
  'Carpinterías de aluminio',
  'Constructoras y desarrolladoras',
  'Arquitectos con proyectos recurrentes',
  'Empresas mayoristas del sector',
]

export default function GlassOrderProSection() {
  return (
    <section id="glassoorderpro" className="py-24 bg-graphite-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-graphite-950 via-graphite-900/95 to-graphite-950" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0,85,204,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,85,204,0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-glass-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-glass-400/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-600/30 bg-glass-600/10 w-fit">
              <Lock size={12} className="text-glass-400" />
              <span className="text-glass-300 text-xs font-semibold tracking-wide uppercase">Plataforma profesional</span>
            </div>

            {/* Heading */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-glass-600 flex items-center justify-center shadow-glass">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="1" y="1" width="9" height="9" rx="1.5" fill="white" fillOpacity="0.9"/>
                    <rect x="12" y="1" width="9" height="9" rx="1.5" fill="white" fillOpacity="0.4"/>
                    <rect x="1" y="12" width="9" height="9" rx="1.5" fill="white" fillOpacity="0.4"/>
                    <rect x="12" y="12" width="9" height="9" rx="1.5" fill="white" fillOpacity="0.9"/>
                  </svg>
                </div>
                <div>
                  <span className="text-white font-bold text-xl">GlassOrderPro</span>
                  <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-glass-600/30 text-glass-300 font-medium">PRO</span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4 tracking-tight">
                Pedidos técnicos de vidrio y aluminio para profesionales.
              </h2>
              <p className="text-graphite-300 text-lg leading-relaxed">
                Una plataforma privada para clientes del rubro que necesitan cotizar, configurar y gestionar pedidos con mayor velocidad, trazabilidad y precisión.
              </p>
            </div>

            {/* Audience */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-graphite-400 text-xs font-semibold uppercase tracking-wide mb-3">Para quién está diseñado</div>
              <div className="flex flex-col gap-2">
                {audienceList.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-graphite-300 text-sm">
                    <CheckCircle size={14} className="text-glass-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/glassoorderpro"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-glass-600 text-white font-semibold hover:bg-glass-500 transition-all shadow-glass-md group"
              >
                Solicitar acceso profesional
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Fine print */}
            <p className="text-graphite-500 text-xs leading-relaxed border-t border-white/10 pt-4">
              <Lock size={11} className="inline mr-1" />
              El acceso a GlassOrderPro es revisado manualmente por el equipo comercial y técnico de Glasstex. Se valida RUC, razón social y tipo de actividad.
            </p>
          </div>

          {/* Right: Features grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {features.map((feat, i) => {
              const Icon = feat.icon
              const isComingSoon = feat.label.includes('tiempo real')
              return (
                <div
                  key={i}
                  className={`flex flex-col gap-3 p-4 rounded-xl border transition-all ${
                    isComingSoon
                      ? 'border-glass-600/20 bg-glass-600/5 opacity-70'
                      : 'border-white/10 bg-white/5 hover:border-glass-600/40 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-glass-600/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-glass-400" />
                    </div>
                    <span className="text-white text-xs font-semibold leading-tight">{feat.label}</span>
                    {isComingSoon && (
                      <span className="ml-auto text-xs px-1.5 py-0.5 rounded bg-glass-600/20 text-glass-400 font-medium whitespace-nowrap">
                        Pronto
                      </span>
                    )}
                  </div>
                  <p className="text-graphite-400 text-xs leading-relaxed">{feat.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
