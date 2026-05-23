'use client'

import { useState } from 'react'
import { X, ArrowRight, ArrowLeft, CheckCircle2, Building2, Wrench, Package, Settings } from 'lucide-react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595983471820'

// ─── Types ─────────────────────────────────────────────────────────────────

interface StepOption { label: string }

interface Step {
  question: string
  key: string
  options: StepOption[]
  multiSelect?: boolean
}

interface Segment {
  id: string
  icon: React.ElementType
  title: string
  subtitle: string
  description: string
  gradientClass: string
  borderClass: string
  iconBgClass: string
  tag: string
  tagClass: string
  steps: Step[] | null
  directLink?: string
  buildMessage: (answers: Record<string, string[]>) => string
}

// ─── Segment data ───────────────────────────────────────────────────────────

const segments: Segment[] = [
  {
    id: 'proyecto',
    icon: Building2,
    title: 'Tengo un proyecto u obra',
    subtitle: 'Arquitectos · Ingenieros · Constructoras',
    description:
      'Presentá tu proyecto y un asesor técnico-comercial te guía desde el relevamiento hasta la instalación.',
    gradientClass: 'from-glass-50/80 to-white',
    borderClass: 'border-glass-200 hover:border-glass-500',
    iconBgClass: 'bg-glass-600',
    tag: 'Obras',
    tagClass: 'bg-glass-50 text-glass-700 border-glass-200',
    steps: [
      {
        question: '¿En qué etapa se encuentra el proyecto?',
        key: 'etapa',
        options: [
          { label: 'Diseño o anteproyecto' },
          { label: 'Proyecto ejecutivo' },
          { label: 'Obra en curso' },
          { label: 'Licitación o concurso' },
          { label: 'Aún no definido' },
        ],
      },
      {
        question: '¿Qué soluciones necesitás?',
        key: 'soluciones',
        multiSelect: true,
        options: [
          { label: 'Fachadas vidriadas' },
          { label: 'Aberturas de aluminio' },
          { label: 'Vidrio templado / DVH / laminado' },
          { label: 'Barandas de vidrio' },
          { label: 'Mamparas y cerramientos' },
          { label: 'Perfiles de aluminio' },
        ],
      },
      {
        question: '¿Cuál es el tipo de obra?',
        key: 'tipo',
        options: [
          { label: 'Vivienda unifamiliar' },
          { label: 'Edificio residencial' },
          { label: 'Local o centro comercial' },
          { label: 'Edificio corporativo / institucional' },
          { label: 'Industrial o logístico' },
        ],
      },
    ],
    buildMessage: (a) =>
      `Hola Glasstex, tengo un proyecto en etapa de "${a.etapa?.[0] || 'definición'}". Necesito: ${(a.soluciones || []).join(', ')}. Tipo de obra: ${a.tipo?.[0] || 'a definir'}. Quiero coordinar un relevamiento técnico.`,
  },
  {
    id: 'profesional',
    icon: Wrench,
    title: 'Soy profesional del rubro',
    subtitle: 'Vidrierías · Carpinterías · Mayoristas',
    description:
      'Accedé a GlassOrderPro para gestionar pedidos técnicos de vidrio y aluminio con trazabilidad y seguimiento.',
    gradientClass: 'from-purple-50/80 to-white',
    borderClass: 'border-purple-200 hover:border-purple-400',
    iconBgClass: 'bg-purple-600',
    tag: 'GlassOrderPro',
    tagClass: 'bg-purple-50 text-purple-700 border-purple-200',
    steps: [
      {
        question: '¿Cómo describís tu actividad?',
        key: 'actividad',
        options: [
          { label: 'Vidriería' },
          { label: 'Carpintería de aluminio' },
          { label: 'Distribuidor / Mayorista' },
          { label: 'Constructor o contratista' },
          { label: 'Otro profesional del rubro' },
        ],
      },
      {
        question: '¿Qué productos pedís habitualmente?',
        key: 'productos',
        multiSelect: true,
        options: [
          { label: 'Vidrio templado' },
          { label: 'DVH (doble vidriado hermético)' },
          { label: 'Vidrio laminado' },
          { label: 'Vidrio crudo / float' },
          { label: 'Perfiles de aluminio' },
          { label: 'Espejos' },
        ],
      },
      {
        question: '¿Con qué frecuencia realizás pedidos?',
        key: 'frecuencia',
        options: [
          { label: 'Varias veces por semana' },
          { label: 'Una o dos veces por mes' },
          { label: 'Pedidos eventuales' },
          { label: 'Es mi primer contacto con Glasstex' },
        ],
      },
    ],
    buildMessage: (a) =>
      `Hola Glasstex, soy ${a.actividad?.[0] || 'profesional del rubro'}. Trabajo principalmente con: ${(a.productos || []).join(', ')}. Frecuencia de pedidos: ${a.frecuencia?.[0] || 'variable'}. Quiero solicitar acceso a GlassOrderPro.`,
  },
  {
    id: 'modulares',
    icon: Package,
    title: 'Quiero productos modulares',
    subtitle: 'VitraLink · Compra estándar',
    description:
      'Ventanas, puertas, mamparas y espejos con medidas optimizadas, fabricación ágil y entrega directa.',
    gradientClass: 'from-teal-50/80 to-white',
    borderClass: 'border-teal-200 hover:border-teal-400',
    iconBgClass: 'bg-teal-600',
    tag: 'VitraLink',
    tagClass: 'bg-teal-50 text-teal-700 border-teal-200',
    steps: null,
    directLink: '/modulares',
    buildMessage: () => '',
  },
  {
    id: 'mantenimiento',
    icon: Settings,
    title: 'Necesito mantenimiento o reposición',
    subtitle: 'Servicio técnico · Reparación · Limpieza',
    description:
      'Reposición de vidrios, ajuste de aberturas, limpieza especializada o revisión técnica en obra residencial o comercial.',
    gradientClass: 'from-amber-50/80 to-white',
    borderClass: 'border-amber-200 hover:border-amber-400',
    iconBgClass: 'bg-amber-600',
    tag: 'Servicio',
    tagClass: 'bg-amber-50 text-amber-700 border-amber-200',
    steps: [
      {
        question: '¿La instalación original fue ejecutada por Glasstex?',
        key: 'origen',
        options: [
          { label: 'Sí, es obra de Glasstex' },
          { label: 'No, fue instalada por otro proveedor' },
          { label: 'No lo sé con certeza' },
        ],
      },
      {
        question: '¿Qué tipo de servicio necesitás?',
        key: 'servicio',
        multiSelect: true,
        options: [
          { label: 'Reposición de vidrio roto o dañado' },
          { label: 'Ajuste o reparación de abertura' },
          { label: 'Limpieza especializada de vidrio o aluminio' },
          { label: 'Revisión técnica preventiva' },
          { label: 'Cambio de herrajes o accesorios' },
        ],
      },
      {
        question: '¿Cuál es la urgencia?',
        key: 'urgencia',
        options: [
          { label: 'Urgente (menos de 48 hs)' },
          { label: 'Esta semana' },
          { label: 'Puedo coordinar una fecha' },
        ],
      },
    ],
    buildMessage: (a) =>
      `Hola Glasstex, necesito servicio técnico. La instalación original es: "${a.origen?.[0] || 'a confirmar'}". Servicio requerido: ${(a.servicio || []).join(', ')}. Urgencia: ${a.urgencia?.[0] || 'a coordinar'}.`,
  },
]

// ─── Questionnaire Modal ────────────────────────────────────────────────────

function QuestionnaireModal({
  segment,
  onClose,
}: {
  segment: Segment
  onClose: () => void
}) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [done, setDone] = useState(false)

  const steps = segment.steps!
  const currentStep = steps[step]
  const currentAnswers = answers[currentStep?.key] || []

  const toggle = (label: string) => {
    const key = currentStep.key
    const prev = answers[key] || []
    const updated = currentStep.multiSelect
      ? prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
      : [label]
    setAnswers((a) => ({ ...a, [key]: updated }))
  }

  const canNext = currentAnswers.length > 0
  const isLast = step === steps.length - 1

  const handleNext = () => {
    if (isLast) setDone(true)
    else setStep((s) => s + 1)
  }

  const whatsappMsg = segment.buildMessage(answers)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-graphite-950/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <div className="relative w-full sm:max-w-lg bg-white sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-graphite-100">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl ${segment.iconBgClass} flex items-center justify-center`}>
              <segment.icon size={17} className="text-white" />
            </div>
            <span className="font-semibold text-graphite-900 text-sm">{segment.title}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-graphite-400 hover:text-graphite-700 hover:bg-graphite-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {!done ? (
          <>
            {/* Progress */}
            <div className="flex items-center gap-2 px-6 pt-5">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === step
                      ? 'bg-glass-600 w-8'
                      : i < step
                      ? 'bg-glass-300 w-4'
                      : 'bg-graphite-200 w-4'
                  }`}
                />
              ))}
              <span className="ml-auto text-xs text-graphite-400">
                {step + 1} / {steps.length}
              </span>
            </div>

            {/* Question */}
            <div className="px-6 pt-5 pb-2">
              <h3 className="text-lg font-bold text-graphite-900 leading-snug">
                {currentStep.question}
              </h3>
              {currentStep.multiSelect && (
                <p className="text-xs text-graphite-400 mt-1">
                  Podés seleccionar más de una opción
                </p>
              )}
            </div>

            {/* Bubble options */}
            <div className="px-6 pb-6 flex flex-wrap gap-2 mt-3">
              {currentStep.options.map((opt) => {
                const selected = currentAnswers.includes(opt.label)
                return (
                  <button
                    key={opt.label}
                    onClick={() => toggle(opt.label)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-150 ${
                      selected
                        ? 'bg-glass-600 border-glass-600 text-white shadow-sm'
                        : 'bg-white border-graphite-200 text-graphite-700 hover:border-glass-400 hover:text-glass-600'
                    }`}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>

            {/* Nav footer */}
            <div className="px-6 pb-6 flex items-center justify-between border-t border-graphite-100 pt-4">
              <button
                onClick={() => (step > 0 ? setStep((s) => s - 1) : onClose())}
                className="flex items-center gap-1.5 text-sm text-graphite-400 hover:text-graphite-700 transition-colors"
              >
                <ArrowLeft size={14} />
                {step > 0 ? 'Anterior' : 'Cancelar'}
              </button>
              <button
                onClick={handleNext}
                disabled={!canNext}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  canNext
                    ? 'bg-glass-600 text-white hover:bg-glass-700 shadow-glass'
                    : 'bg-graphite-100 text-graphite-400 cursor-not-allowed'
                }`}
              >
                {isLast ? 'Ver resultado' : 'Siguiente'}
                <ArrowRight size={14} />
              </button>
            </div>
          </>
        ) : (
          /* Result screen */
          <div className="px-6 py-8 flex flex-col items-center text-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-glass-50 border border-glass-200 flex items-center justify-center">
              <CheckCircle2 size={28} className="text-glass-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-graphite-900 mb-2">Tu consulta está lista</h3>
              <p className="text-graphite-500 text-sm leading-relaxed">
                Armamos un mensaje con tu información para que un asesor te responda lo antes posible.
              </p>
            </div>
            <div className="w-full bg-graphite-50 rounded-xl p-4 text-left border border-graphite-100">
              <p className="text-graphite-600 text-xs leading-relaxed">{whatsappMsg}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1da950] transition-colors shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar por WhatsApp
              </a>
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl border border-graphite-200 text-graphite-600 text-sm font-medium hover:border-graphite-400 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── WhatsApp icon (reusable) ───────────────────────────────────────────────

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// ─── Main component ─────────────────────────────────────────────────────────

export default function SegmentSelector() {
  const [active, setActive] = useState<Segment | null>(null)

  const handleClick = (seg: Segment) => {
    if (seg.directLink) {
      window.location.href = seg.directLink
      return
    }
    setActive(seg)
  }

  const waAdvisorUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hola Glasstex, quiero hablar con un asesor. Necesito orientación sobre sus soluciones.'
  )}`

  return (
    <section id="segmentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-200 bg-glass-50 mb-4">
            <span className="text-glass-600 text-xs font-semibold tracking-wide uppercase">
              Tu punto de entrada
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-graphite-900 mb-4 tracking-tight">
            ¿Cuál es tu situación?
          </h2>
          <p className="text-graphite-500 text-lg max-w-2xl mx-auto">
            Cada caso tiene su propia ruta. Seleccioná el que mejor te representa y te orientamos desde el primer paso.
          </p>
        </div>

        {/* 2×2 segment cards */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {segments.map((seg) => (
            <button
              key={seg.id}
              onClick={() => handleClick(seg)}
              className={`group relative text-left flex flex-col gap-5 p-7 rounded-2xl border bg-gradient-to-br ${seg.gradientClass} transition-all duration-300 hover:shadow-card-hover ${seg.borderClass}`}
            >
              {/* Category tag */}
              <span
                className={`absolute top-5 right-5 px-2.5 py-1 rounded-full text-xs font-semibold border ${seg.tagClass}`}
              >
                {seg.tag}
              </span>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${seg.iconBgClass} flex items-center justify-center shadow-sm`}
              >
                <seg.icon size={22} className="text-white" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 pr-4">
                <h3 className="font-bold text-graphite-900 text-lg leading-tight">
                  {seg.title}
                </h3>
                <p className="text-xs font-semibold text-graphite-400 uppercase tracking-wide">
                  {seg.subtitle}
                </p>
                <p className="text-graphite-500 text-sm leading-relaxed mt-1">
                  {seg.description}
                </p>
              </div>

              {/* CTA label */}
              <div className="flex items-center gap-2 text-sm font-semibold text-glass-600 group-hover:text-glass-700 mt-auto">
                {seg.directLink ? 'Ver productos' : 'Iniciar consulta'}
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>

              {/* Hover accent bottom line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-glass-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
            </button>
          ))}
        </div>

        {/* "Hablar con un asesor" strip */}
        <div className="mt-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-graphite-50 border border-graphite-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0">
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            </div>
            <div>
              <p className="text-graphite-700 text-sm font-semibold">
                ¿No sabés por dónde empezar?
              </p>
              <p className="text-graphite-400 text-xs">
                Hablá directo con un asesor técnico-comercial de Glasstex.
              </p>
            </div>
          </div>
          <a
            href={waAdvisorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1da950] transition-colors shadow-sm"
          >
            Hablar con un asesor
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Modal */}
      {active && active.steps && (
        <QuestionnaireModal segment={active} onClose={() => setActive(null)} />
      )}
    </section>
  )
}
