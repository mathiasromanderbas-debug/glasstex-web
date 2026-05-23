'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, Lock, CheckCircle, Package, Layers, Flame, AlignJustify,
  BookOpen, History, Activity, FileCheck, UserCheck, Bell, RadioTower,
  Send, Loader2, AlertCircle, ChevronDown, ChevronUp, ArrowRight,
} from 'lucide-react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595983471820'
const WHATSAPP_GOP = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Glasstex%2C%20quiero%20solicitar%20acceso%20a%20GlassOrderPro%20como%20profesional%20del%20rubro.`

// ─── Features ───────────────────────────────────────────────────────────────
const features = [
  { icon: Package,      label: 'Pedido de vidrios por pieza',     desc: 'Configuración de medidas, espesor y tipo desde el catálogo técnico.' },
  { icon: Layers,       label: 'Configuración de DVH',            desc: 'Selección de cámara, relleno, gas y combinación de vidrios.' },
  { icon: Layers,       label: 'Laminados configurables',         desc: 'PVB, EVA, colores y espesores. Con o sin perforaciones.' },
  { icon: Flame,        label: 'Pedido de templados',             desc: 'Medidas, espesores, perforaciones y tratamientos superficiales.' },
  { icon: AlignJustify, label: 'Perfiles por barra',              desc: 'Catálogo técnico de perfiles de aluminio con referencia y longitud.' },
  { icon: BookOpen,     label: 'Catálogo técnico',                desc: 'Fichas de producto, especificaciones, normativas y descargas.' },
  { icon: History,      label: 'Historial de pedidos',            desc: 'Acceso completo a todos tus pedidos anteriores con detalle.' },
  { icon: Activity,     label: 'Seguimiento en tiempo real',      desc: 'Estado actualizado de cada pedido: recibido, en producción, listo.' },
  { icon: FileCheck,    label: 'Validación fiscal',               desc: 'Verificación de RUC, razón social y datos de obra para emisión.' },
  { icon: UserCheck,    label: 'Acceso revisado manualmente',     desc: 'El equipo comercial valida cada cuenta antes de habilitarla.' },
  { icon: Bell,         label: 'Notificaciones por correo',       desc: 'Alertas automáticas en cada cambio de estado del pedido.' },
  { icon: RadioTower,   label: 'Trazabilidad por componente',     desc: 'Próximamente: tracking individual de piezas en planta.' },
]

const audience = [
  { title: 'Vidrierías',             desc: 'Gestión de pedidos frecuentes con control de historial y precios negociados.' },
  { title: 'Carpinterías de aluminio', desc: 'Pedidos de vidrio y perfiles coordinados por obra o lote de producción.' },
  { title: 'Constructoras',          desc: 'Pedidos de gran volumen con validación de obra y fiscalización técnica.' },
  { title: 'Desarrolladoras',        desc: 'Especificaciones técnicas por proyecto con seguimiento por etapa de obra.' },
  { title: 'Arquitectos y estudios', desc: 'Especificación técnica con fichas descargables para memorias descriptivas.' },
  { title: 'Mayoristas del sector',  desc: 'Acceso a catálogo con precios configurables y pedidos en volumen.' },
]

const faqs = [
  {
    q: '¿Cómo es el proceso de solicitud de acceso?',
    a: 'Completás el formulario con tus datos profesionales y fiscales. El equipo comercial y técnico de Glasstex lo revisa manualmente y te contacta en menos de 48 horas hábiles para confirmar o solicitar información adicional.',
  },
  {
    q: '¿Cuánto cuesta el acceso a GlassOrderPro?',
    a: 'GlassOrderPro es gratuito para clientes habilitados del rubro. El acceso está condicionado a ser un profesional o empresa activa en el sector vidrio/aluminio.',
  },
  {
    q: '¿Puedo hacer pedidos sin visitar Glasstex?',
    a: 'Sí. Una vez habilitado el acceso podés configurar y enviar pedidos 100% online. El equipo procesa, produce y coordina el despacho o retiro según el acuerdo comercial.',
  },
  {
    q: '¿Los precios en GlassOrderPro son los mismos que en mostrador?',
    a: 'Los precios se configuran por perfil de cliente y volumen. En muchos casos los clientes habilitados acceden a condiciones preferenciales acordadas con el área comercial.',
  },
  {
    q: '¿Puedo cargar planos o especificaciones técnicas?',
    a: 'Sí. El sistema permite adjuntar documentación técnica por pedido. Para proyectos complejos también podés coordinar una visita técnica a través del mismo sistema.',
  },
  {
    q: '¿GlassOrderPro está disponible en el exterior?',
    a: 'Por ahora GlassOrderPro opera para proyectos en Paraguay. Estamos evaluando la expansión regional. Consultá con el equipo si tenés proyectos en otros países.',
  },
]

// ─── Form ────────────────────────────────────────────────────────────────────
const activityTypes = [
  'Vidriería', 'Carpintería de aluminio', 'Constructora', 'Desarrolladora',
  'Mayorista vidrio/aluminio', 'Arquitecto / Estudio', 'Ingeniero', 'Empresa industrial', 'Otro',
]

const productInterest = [
  'Vidrio templado', 'DVH', 'Vidrio laminado', 'Vidrio crudo', 'Perfiles de aluminio', 'Otro',
]

const volumeOptions = [
  'Menos de 50 m²/mes', '50–200 m²/mes', '200–500 m²/mes', 'Más de 500 m²/mes', 'Variable según obra',
]

interface FormState {
  name: string; company: string; ruc: string; phone: string; email: string
  city: string; activityType: string; products: string[]; volume: string
  referral: string; message: string
}

const emptyForm: FormState = {
  name: '', company: '', ruc: '', phone: '', email: '',
  city: '', activityType: '', products: [], volume: '', referral: '', message: '',
}

type Status = 'idle' | 'loading' | 'success' | 'error'

function AccessForm() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [status, setStatus] = useState<Status>('idle')

  const set = (field: keyof FormState, value: string | string[]) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const toggleProduct = (p: string) =>
    set('products', form.products.includes(p) ? form.products.filter((x) => x !== p) : [...form.products, p])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    // TODO: conectar a Supabase / CRM
    // await supabase.from('gop_requests').insert([form])
    await new Promise((r) => setTimeout(r, 1600))
    setStatus('success')
  }

  const inputClass = 'px-4 py-3 rounded-xl border border-graphite-700 bg-graphite-900 text-white text-sm placeholder:text-graphite-500 focus:outline-none focus:ring-2 focus:ring-glass-600/50 focus:border-glass-600 transition-all w-full'
  const labelClass = 'text-graphite-300 text-sm font-medium mb-1.5 block'

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
        <div className="w-20 h-20 rounded-2xl bg-glass-600/20 border border-glass-600/30 flex items-center justify-center">
          <CheckCircle className="text-glass-400" size={36} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">Solicitud recibida</h3>
          <p className="text-graphite-300 max-w-sm leading-relaxed">
            El equipo comercial de Glasstex revisará tu solicitud y se pondrá en contacto en menos de 48 horas hábiles.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <a
            href={WHATSAPP_GOP}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-glass-600 text-white font-semibold text-sm hover:bg-glass-500 transition-colors"
          >
            Confirmar por WhatsApp
          </a>
          <button
            onClick={() => setStatus('idle')}
            className="px-5 py-3 rounded-xl border border-graphite-600 text-graphite-300 text-sm font-medium hover:border-graphite-400 transition-colors"
          >
            Enviar otra solicitud
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

      {/* Personal / empresa */}
      <div>
        <div className="text-glass-400 text-xs font-semibold uppercase tracking-wider mb-4">Datos personales y empresa</div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Nombre completo <span className="text-glass-500">*</span></label>
            <input type="text" required placeholder="Tu nombre" value={form.name}
              onChange={e => set('name', e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Razón social / Empresa <span className="text-glass-500">*</span></label>
            <input type="text" required placeholder="Nombre de la empresa" value={form.company}
              onChange={e => set('company', e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>RUC</label>
            <input type="text" placeholder="80000000-0" value={form.ruc}
              onChange={e => set('ruc', e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Ciudad <span className="text-glass-500">*</span></label>
            <input type="text" required placeholder="Asunción, Luque..." value={form.city}
              onChange={e => set('city', e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Teléfono / WhatsApp <span className="text-glass-500">*</span></label>
            <input type="tel" required placeholder="+595 9__ ___-___" value={form.phone}
              onChange={e => set('phone', e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Email <span className="text-glass-500">*</span></label>
            <input type="email" required placeholder="tu@empresa.com" value={form.email}
              onChange={e => set('email', e.target.value)} className={inputClass} />
          </div>
        </div>
      </div>

      {/* Tipo de actividad */}
      <div>
        <div className="text-glass-400 text-xs font-semibold uppercase tracking-wider mb-4">Perfil profesional</div>
        <label className={labelClass}>Tipo de actividad <span className="text-glass-500">*</span></label>
        <select required value={form.activityType} onChange={e => set('activityType', e.target.value)}
          className={inputClass + ' appearance-none cursor-pointer'}>
          <option value="" disabled>Seleccioná tu actividad</option>
          {activityTypes.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>

      {/* Productos */}
      <div>
        <label className={labelClass}>Productos que más trabajás <span className="text-graphite-500 font-normal">(podés marcar varios)</span></label>
        <div className="flex flex-wrap gap-2 mt-2">
          {productInterest.map(p => (
            <button
              key={p} type="button"
              onClick={() => toggleProduct(p)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                form.products.includes(p)
                  ? 'bg-glass-600 border-glass-600 text-white'
                  : 'border-graphite-600 text-graphite-400 hover:border-glass-600 hover:text-glass-400'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Volumen */}
      <div>
        <label className={labelClass}>Volumen mensual estimado</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
          {volumeOptions.map(v => (
            <button
              key={v} type="button"
              onClick={() => set('volume', v)}
              className={`px-3 py-2.5 rounded-xl text-xs font-medium border text-left transition-all ${
                form.volume === v
                  ? 'bg-glass-600/20 border-glass-600 text-glass-300'
                  : 'border-graphite-700 text-graphite-400 hover:border-graphite-500'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Mensaje */}
      <div>
        <label className={labelClass}>Información adicional</label>
        <textarea rows={3} placeholder="Contanos brevemente tu actividad, los proyectos que manejás o cualquier detalle que nos ayude a configurar tu acceso..."
          value={form.message} onChange={e => set('message', e.target.value)}
          className={inputClass + ' resize-none'} />
      </div>

      {/* Cómo conociste */}
      <div>
        <label className={labelClass}>¿Cómo conociste GlassOrderPro?</label>
        <input type="text" placeholder="Referido, redes sociales, visita comercial..."
          value={form.referral} onChange={e => set('referral', e.target.value)} className={inputClass} />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-900/30 border border-red-700/50 text-red-400 text-sm">
          <AlertCircle size={16} />
          Error al enviar. Intentá nuevamente o escribinos por WhatsApp.
        </div>
      )}

      <button type="submit" disabled={status === 'loading'}
        className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-glass-600 text-white font-bold text-base hover:bg-glass-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-glass-md group">
        {status === 'loading' ? (
          <><Loader2 size={20} className="animate-spin" /> Enviando solicitud...</>
        ) : (
          <><Send size={18} className="group-hover:translate-x-1 transition-transform" /> Solicitar acceso a GlassOrderPro</>
        )}
      </button>

      <p className="text-graphite-500 text-xs text-center leading-relaxed">
        <Lock size={11} className="inline mr-1" />
        El acceso es revisado manualmente por el equipo comercial. Validamos RUC, razón social y tipo de actividad antes de habilitar cada cuenta.
      </p>
    </form>
  )
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border rounded-xl transition-all ${open ? 'border-glass-600/40 bg-glass-600/5' : 'border-graphite-800 hover:border-graphite-700'}`}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
        <span className="text-white font-medium text-sm leading-snug">{q}</span>
        {open ? <ChevronUp size={16} className="text-glass-400 flex-shrink-0" /> : <ChevronDown size={16} className="text-graphite-500 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-graphite-300 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function GlassOrderProPage() {
  return (
    <div className="min-h-screen bg-graphite-950">

      {/* ── Nav strip ── */}
      <div className="border-b border-white/5 bg-graphite-950/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <ArrowLeft size={16} className="text-graphite-400 group-hover:text-white transition-colors" />
            <img src="/logo-glasstex-white.png" alt="Glasstex" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-glass-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <rect x="1" y="1" width="7" height="7" rx="1" fill="white" fillOpacity="0.9"/>
                <rect x="10" y="1" width="7" height="7" rx="1" fill="white" fillOpacity="0.4"/>
                <rect x="1" y="10" width="7" height="7" rx="1" fill="white" fillOpacity="0.4"/>
                <rect x="10" y="10" width="7" height="7" rx="1" fill="white" fillOpacity="0.9"/>
              </svg>
            </div>
            <span className="font-bold text-white text-sm">GlassOrderPro</span>
            <span className="text-xs px-1.5 py-0.5 rounded bg-glass-600/30 text-glass-300 font-medium">PRO</span>
          </div>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-graphite-950 via-glass-950/30 to-graphite-950" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `linear-gradient(rgba(0,85,204,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,85,204,0.3) 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-glass-600/10 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-600/30 bg-glass-600/10 mb-6">
            <Lock size={12} className="text-glass-400" />
            <span className="text-glass-300 text-xs font-semibold tracking-wide uppercase">Plataforma privada para profesionales</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            Pedidos técnicos de vidrio y aluminio.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-glass-300 to-glass-500">
              Con más control.
            </span>
          </h1>
          <p className="text-graphite-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            GlassOrderPro es la plataforma B2B de Glasstex para clientes del rubro que necesitan cotizar, configurar y gestionar pedidos con mayor velocidad, trazabilidad y precisión.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#solicitar"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-glass-600 text-white font-bold text-base hover:bg-glass-500 transition-all shadow-glass-lg group">
              Solicitar acceso profesional
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={WHATSAPP_GOP} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/20 text-white font-semibold text-base hover:border-white/40 hover:bg-white/5 transition-all">
              Consultar por WhatsApp
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-10 border-t border-white/10">
            {['✓ Acceso gratuito para clientes habilitados', '✓ Revisión en menos de 48h', '✓ Soporte técnico Glasstex', '✓ Paraguay'].map(t => (
              <span key={t} className="text-graphite-400 text-xs">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── For whom ── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">¿Para quién es GlassOrderPro?</h2>
            <p className="text-graphite-400 max-w-xl mx-auto">
              Diseñado para profesionales y empresas del sector que necesitan un canal de compra más eficiente que el mostrador tradicional.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audience.map((a) => (
              <div key={a.title} className="flex flex-col gap-3 p-5 rounded-2xl border border-graphite-800 bg-graphite-900/50 hover:border-glass-600/40 hover:bg-graphite-900 transition-all">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-glass-400 flex-shrink-0" />
                  <h3 className="font-bold text-white text-base">{a.title}</h3>
                </div>
                <p className="text-graphite-400 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 border-t border-white/5 bg-graphite-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">Qué incluye la plataforma</h2>
            <p className="text-graphite-400 max-w-xl mx-auto">
              Todas las herramientas para gestionar tus pedidos de vidrio y aluminio en un solo lugar.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {features.map((f, i) => {
              const Icon = f.icon
              const isComingSoon = f.label.includes('Próximamente') || f.label.includes('tiempo real')
              return (
                <div key={i} className={`flex flex-col gap-3 p-4 rounded-xl border transition-all ${
                  isComingSoon ? 'border-glass-600/20 bg-glass-600/5 opacity-60' : 'border-graphite-700 bg-graphite-900/60 hover:border-glass-600/40 hover:bg-graphite-900'
                }`}>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-glass-600/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-glass-400" />
                    </div>
                    <span className="text-white text-xs font-semibold leading-tight">{f.label}</span>
                    {isComingSoon && <span className="ml-auto text-xs px-1.5 py-0.5 rounded bg-glass-600/20 text-glass-400 font-medium whitespace-nowrap">Pronto</span>}
                  </div>
                  <p className="text-graphite-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Form + FAQ ── */}
      <section id="solicitar" className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Form */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-600/30 bg-glass-600/10 mb-4">
                  <Lock size={12} className="text-glass-400" />
                  <span className="text-glass-300 text-xs font-semibold tracking-wide uppercase">Solicitud de acceso</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                  Solicitá tu acceso profesional
                </h2>
                <p className="text-graphite-400 leading-relaxed">
                  Completá el formulario con tus datos. El equipo de Glasstex lo revisa y se contacta para habilitarte en menos de 48 horas hábiles.
                </p>
              </div>
              <div className="bg-graphite-900 border border-graphite-700 rounded-2xl p-8">
                <AccessForm />
              </div>
            </div>

            {/* FAQ */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">Preguntas frecuentes</h2>
                <p className="text-graphite-400 leading-relaxed">
                  Todo lo que necesitás saber antes de solicitar el acceso.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-5 rounded-2xl bg-glass-600/10 border border-glass-600/30 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm mb-0.5">¿Tenés dudas antes de solicitar?</div>
                  <a href={WHATSAPP_GOP} target="_blank" rel="noopener noreferrer"
                    className="text-glass-400 text-xs hover:text-glass-300 transition-colors underline underline-offset-2">
                    Escribinos directamente por WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-graphite-400 hover:text-white transition-colors text-sm">
            <ArrowLeft size={14} />
            Volver al sitio principal
          </Link>
          <p className="text-graphite-600 text-xs">© {new Date().getFullYear()} Glasstex · GlassOrderPro · VitrAll GROUP</p>
        </div>
      </div>
    </div>
  )
}
