'use client'

import { useState, useRef } from 'react'
import {
  X, ArrowRight, ArrowLeft, CheckCircle2, Building2, Wrench,
  Package, Settings, Upload, MapPin, Calendar, Video, Users, FileText,
} from 'lucide-react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595983471820'

// ─── Types ─────────────────────────────────────────────────────────────────

interface StepOption { label: string }
interface Step { question: string; key: string; options: StepOption[]; multiSelect?: boolean }

interface Segment {
  id: string
  icon: React.ElementType
  title: string
  subtitle: string
  description: string
  photo: string
  photoAlt: string
  accentColor: string
  borderClass: string
  iconBgClass: string
  tag: string
  tagClass: string
  ctaLabel: string
  hasDetailForm?: boolean
  steps: Step[] | null
  directLink?: string
  buildMessage: (answers: Record<string, string[]>) => string
}

interface ProjectForm {
  nombre: string
  empresa: string
  nombreProyecto: string
  telefono: string
  email: string
  ubicacion: string
  descripcion: string
  tipoReunion: string
  fechaPreferencia: string
  files: File[]
}

// ─── Segment data ──────────────────────────────────────────────────────────

const segments: Segment[] = [
  {
    id: 'proyecto',
    icon: Building2,
    title: 'Tengo un proyecto u obra',
    subtitle: 'Arquitectos · Ingenieros · Constructoras',
    description: 'Presentá tu proyecto y un asesor técnico-comercial te guía desde el relevamiento hasta la instalación.',
    photo: '/projects/torre-aviadores.jpg',
    photoAlt: 'Fachada vidriada Torre Aviadores',
    accentColor: 'from-glass-900/70 via-glass-900/40 to-transparent',
    borderClass: 'border-glass-200 hover:border-glass-500',
    iconBgClass: 'bg-glass-600',
    tag: 'Obras',
    tagClass: 'bg-glass-600 text-white',
    ctaLabel: 'Iniciar consulta',
    hasDetailForm: true,
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
    buildMessage: () => '',
  },
  {
    id: 'profesional',
    icon: Wrench,
    title: 'Soy profesional del rubro',
    subtitle: 'Vidrierías · Carpinterías · Instaladores',
    description: 'Accedé a GlassOrderPro para pedidos técnicos, y a nuestra tienda de herramientas especializadas: ventosas, cortadores, pulidoras, caballetes y más.',
    photo: '/fabrica/fabrica-1.jpg',
    photoAlt: 'Planta de producción Glasstex',
    accentColor: 'from-purple-900/70 via-purple-900/40 to-transparent',
    borderClass: 'border-purple-200 hover:border-purple-400',
    iconBgClass: 'bg-purple-600',
    tag: 'GlassOrderPro · Herramientas',
    tagClass: 'bg-purple-600 text-white',
    ctaLabel: 'Ver zona profesional',
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
    description: 'Ventanas, puertas, mamparas y espejos con medidas optimizadas, fabricación ágil y entrega directa.',
    photo: '/projects/ecovi.jpg',
    photoAlt: 'Aberturas modulares instaladas',
    accentColor: 'from-teal-900/70 via-teal-900/40 to-transparent',
    borderClass: 'border-teal-200 hover:border-teal-400',
    iconBgClass: 'bg-teal-600',
    tag: 'VitraLink',
    tagClass: 'bg-teal-600 text-white',
    ctaLabel: 'Ver productos',
    steps: null,
    directLink: '/#modulares',
    buildMessage: () => '',
  },
  {
    id: 'mantenimiento',
    icon: Settings,
    title: 'Necesito mantenimiento o reposición',
    subtitle: 'Servicio técnico · Reparación · Reposición',
    description: 'Reposición de vidrios, ajuste de aberturas, limpieza especializada o revisión técnica en obra residencial o comercial.',
    photo: '/fabrica/instalacion-2.jpg',
    photoAlt: 'Equipo técnico Glasstex en instalación',
    accentColor: 'from-amber-900/70 via-amber-900/40 to-transparent',
    borderClass: 'border-amber-200 hover:border-amber-400',
    iconBgClass: 'bg-amber-600',
    tag: 'Servicio',
    tagClass: 'bg-amber-600 text-white',
    ctaLabel: 'Consultar servicio',
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

// ─── Meeting options ────────────────────────────────────────────────────────

const meetingOptions = [
  { id: 'obra', label: 'Visita en obra', desc: 'Nuestro equipo se desplaza a la ubicación del proyecto', icon: MapPin },
  { id: 'oficina_cliente', label: 'En tus oficinas', desc: 'Reunión presencial en tu empresa o estudio', icon: Users },
  { id: 'glasstex', label: 'En Glasstex', desc: 'Reunión en nuestras oficinas o sala técnica en Asunción', icon: Building2 },
  { id: 'video', label: 'Videollamada', desc: 'Reunión remota por Meet, Zoom o Teams', icon: Video },
]

// ─── Segment photo ──────────────────────────────────────────────────────────

function SegmentPhoto({ src, alt, accentColor, icon: Icon, iconBgClass, tag, tagClass }: {
  src: string; alt: string; accentColor: string
  icon: React.ElementType; iconBgClass: string; tag: string; tagClass: string
}) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-t-2xl">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className={`w-full h-full flex items-center justify-center ${iconBgClass} opacity-20`}>
          <Icon size={48} className="text-white" />
        </div>
      )}
      <div className={`absolute inset-0 bg-gradient-to-t ${accentColor}`} />
      <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold ${tagClass} shadow-sm`}>
        {tag}
      </span>
    </div>
  )
}

// ─── Project detail form (step 4) ──────────────────────────────────────────

function ProjectDetailForm({
  bubbleAnswers,
  onDone,
  onBack,
}: {
  bubbleAnswers: Record<string, string[]>
  onDone: (form: ProjectForm) => void
  onBack: () => void
}) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [form, setForm] = useState<ProjectForm>({
    nombre: '', empresa: '', nombreProyecto: '', telefono: '',
    email: '', ubicacion: '', descripcion: '', tipoReunion: '', fechaPreferencia: '', files: [],
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ProjectForm, string>>>({})

  const set = (k: keyof ProjectForm, v: string) => {
    setForm((f) => ({ ...f, [k]: v }))
    setErrors((e) => ({ ...e, [k]: '' }))
  }

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setForm((f) => ({ ...f, files: Array.from(e.target.files!) }))
  }

  const validate = () => {
    const errs: Partial<Record<keyof ProjectForm, string>> = {}
    if (!form.nombre.trim()) errs.nombre = 'Requerido'
    if (!form.telefono.trim()) errs.telefono = 'Requerido'
    if (!form.ubicacion.trim()) errs.ubicacion = 'Requerido'
    if (!form.tipoReunion) errs.tipoReunion = 'Seleccioná una opción'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = () => {
    if (validate()) onDone(form)
  }

  const inputCls = (k: keyof ProjectForm) =>
    `w-full px-3.5 py-2.5 rounded-xl border text-sm text-graphite-900 placeholder:text-graphite-400 outline-none transition-all ${
      errors[k]
        ? 'border-red-300 bg-red-50 focus:border-red-400'
        : 'border-graphite-200 bg-white focus:border-glass-500 focus:ring-2 focus:ring-glass-100'
    }`

  return (
    <div className="flex flex-col" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
      {/* Step indicator */}
      <div className="px-6 pt-5 pb-3 sticky top-0 bg-white z-10 border-b border-graphite-100">
        <div className="flex items-center gap-2 mb-1">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all ${i <= 4 ? 'bg-glass-600 flex-1' : 'bg-graphite-200 flex-1'}`} />
          ))}
          <span className="ml-2 text-xs text-graphite-400 whitespace-nowrap">4 / 4</span>
        </div>
        <h3 className="text-base font-bold text-graphite-900 leading-snug">
          Completá los datos del proyecto
        </h3>
        <p className="text-xs text-graphite-400 mt-0.5">Los campos con * son obligatorios</p>
      </div>

      <div className="px-6 py-5 flex flex-col gap-4">
        {/* Row: nombre + empresa */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-graphite-600 mb-1.5 block">Nombre *</label>
            <input className={inputCls('nombre')} placeholder="Tu nombre" value={form.nombre}
              onChange={(e) => set('nombre', e.target.value)} />
            {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
          </div>
          <div>
            <label className="text-xs font-semibold text-graphite-600 mb-1.5 block">Empresa</label>
            <input className={inputCls('empresa')} placeholder="Empresa / Estudio" value={form.empresa}
              onChange={(e) => set('empresa', e.target.value)} />
          </div>
        </div>

        {/* Row: telefono + email */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-graphite-600 mb-1.5 block">WhatsApp *</label>
            <input className={inputCls('telefono')} placeholder="+595 9XX XXXXXX" value={form.telefono}
              onChange={(e) => set('telefono', e.target.value)} />
            {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>}
          </div>
          <div>
            <label className="text-xs font-semibold text-graphite-600 mb-1.5 block">Email</label>
            <input className={inputCls('email')} placeholder="tu@email.com" type="email" value={form.email}
              onChange={(e) => set('email', e.target.value)} />
          </div>
        </div>

        {/* Nombre proyecto */}
        <div>
          <label className="text-xs font-semibold text-graphite-600 mb-1.5 block">Nombre del proyecto</label>
          <input className={inputCls('nombreProyecto')} placeholder="Ej: Torre Residencial Asunción Norte"
            value={form.nombreProyecto} onChange={(e) => set('nombreProyecto', e.target.value)} />
        </div>

        {/* Ubicacion */}
        <div>
          <label className="text-xs font-semibold text-graphite-600 mb-1.5 flex items-center gap-1.5">
            <MapPin size={11} className="text-glass-500" /> Ubicación del proyecto *
          </label>
          <input className={inputCls('ubicacion')} placeholder="Ciudad, barrio o dirección aproximada"
            value={form.ubicacion} onChange={(e) => set('ubicacion', e.target.value)} />
          {errors.ubicacion && <p className="text-red-500 text-xs mt-1">{errors.ubicacion}</p>}
        </div>

        {/* Descripcion */}
        <div>
          <label className="text-xs font-semibold text-graphite-600 mb-1.5 flex items-center gap-1.5">
            <FileText size={11} className="text-glass-500" /> Descripción breve
          </label>
          <textarea
            className={`${inputCls('descripcion')} resize-none`}
            rows={3}
            placeholder="Contanos más sobre el proyecto: superficies aproximadas, materiales preferidos, plazos, etc."
            value={form.descripcion}
            onChange={(e) => set('descripcion', e.target.value)}
          />
        </div>

        {/* Archivos */}
        <div>
          <label className="text-xs font-semibold text-graphite-600 mb-1.5 flex items-center gap-1.5">
            <Upload size={11} className="text-glass-500" /> Adjuntar fotos, planos o bosquejos
          </label>
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="w-full flex flex-col items-center justify-center gap-2 py-4 rounded-xl border-2 border-dashed border-graphite-200 hover:border-glass-400 hover:bg-glass-50/30 transition-all text-graphite-400 hover:text-glass-600"
          >
            <Upload size={20} />
            <span className="text-xs font-medium">
              {form.files.length > 0
                ? `${form.files.length} archivo${form.files.length > 1 ? 's' : ''} seleccionado${form.files.length > 1 ? 's' : ''}`
                : 'Hacer click o arrastrar archivos aquí'}
            </span>
            <span className="text-xs text-graphite-300">JPG, PNG, PDF, DWG — hasta 20 MB c/u</span>
          </button>
          <input ref={fileRef} type="file" multiple accept="image/*,.pdf,.dwg,.dxf" className="hidden"
            onChange={handleFiles} />
          {form.files.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {form.files.map((f) => (
                <span key={f.name} className="text-xs px-2.5 py-1 bg-glass-50 border border-glass-200 text-glass-700 rounded-full truncate max-w-[160px]">
                  {f.name}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Tipo de reunión */}
        <div>
          <label className="text-xs font-semibold text-graphite-600 mb-2 flex items-center gap-1.5">
            <Calendar size={11} className="text-glass-500" /> ¿Cómo preferís reunirte? *
          </label>
          <div className="grid grid-cols-2 gap-2">
            {meetingOptions.map((opt) => {
              const Icon = opt.icon
              const selected = form.tipoReunion === opt.id
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => { set('tipoReunion', opt.id); setErrors((e) => ({ ...e, tipoReunion: '' })) }}
                  className={`flex flex-col items-start gap-1.5 p-3 rounded-xl border text-left transition-all ${
                    selected
                      ? 'border-glass-500 bg-glass-50 ring-1 ring-glass-300'
                      : 'border-graphite-200 hover:border-glass-300 hover:bg-graphite-50'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${selected ? 'bg-glass-600' : 'bg-graphite-100'}`}>
                    <Icon size={12} className={selected ? 'text-white' : 'text-graphite-500'} />
                  </div>
                  <span className={`text-xs font-semibold leading-tight ${selected ? 'text-glass-700' : 'text-graphite-700'}`}>
                    {opt.label}
                  </span>
                  <span className="text-graphite-400 text-xs leading-snug">{opt.desc}</span>
                </button>
              )
            })}
          </div>
          {errors.tipoReunion && <p className="text-red-500 text-xs mt-1">{errors.tipoReunion}</p>}
        </div>

        {/* Fecha preferencia */}
        <div>
          <label className="text-xs font-semibold text-graphite-600 mb-1.5 block">
            Preferencia de fecha / horario
          </label>
          <input className={inputCls('fechaPreferencia')}
            placeholder="Ej: Próxima semana por la mañana, miércoles tarde..."
            value={form.fechaPreferencia}
            onChange={(e) => set('fechaPreferencia', e.target.value)}
          />
        </div>
      </div>

      {/* Footer nav */}
      <div className="sticky bottom-0 bg-white border-t border-graphite-100 px-6 py-4 flex items-center justify-between gap-3">
        <button onClick={onBack}
          className="flex items-center gap-1.5 text-sm text-graphite-400 hover:text-graphite-700 transition-colors">
          <ArrowLeft size={14} /> Anterior
        </button>
        <button onClick={handleSubmit}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-glass-600 text-white hover:bg-glass-700 transition-colors shadow-glass">
          Ver mi consulta
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}

// ─── Done screen for proyecto ───────────────────────────────────────────────

function ProyectoDoneScreen({
  bubbleAnswers,
  form,
  onClose,
}: {
  bubbleAnswers: Record<string, string[]>
  form: ProjectForm
  onClose: () => void
}) {
  const meetingLabel = meetingOptions.find((m) => m.id === form.tipoReunion)?.label || form.tipoReunion
  const filesNote = form.files.length > 0
    ? `\n📎 Archivos adjuntos (${form.files.length}): ${form.files.map((f) => f.name).join(', ')} — los enviaré directamente por el chat.`
    : ''

  const msg = [
    `Hola Glasstex, quiero presentar un proyecto para cotización.`,
    ``,
    `👤 *Contacto:* ${form.nombre}${form.empresa ? ` — ${form.empresa}` : ''}`,
    `📱 *WhatsApp:* ${form.telefono}`,
    form.email ? `📧 *Email:* ${form.email}` : '',
    ``,
    `🏗️ *Proyecto:* ${form.nombreProyecto || '(sin nombre definido)'}`,
    `📍 *Ubicación:* ${form.ubicacion}`,
    `⚙️ *Etapa:* ${bubbleAnswers.etapa?.[0] || 'a definir'}`,
    `🏢 *Tipo de obra:* ${bubbleAnswers.tipo?.[0] || 'a definir'}`,
    `🔧 *Soluciones requeridas:* ${(bubbleAnswers.soluciones || []).join(', ')}`,
    form.descripcion ? `\n📝 *Detalle:* ${form.descripcion}` : '',
    ``,
    `📅 *Reunión preferida:* ${meetingLabel}`,
    form.fechaPreferencia ? `🕐 *Disponibilidad:* ${form.fechaPreferencia}` : '',
    filesNote,
  ].filter(Boolean).join('\n')

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`

  return (
    <div className="px-6 py-6 flex flex-col gap-5" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
      {/* Checkmark */}
      <div className="flex flex-col items-center text-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-glass-50 border border-glass-200 flex items-center justify-center">
          <CheckCircle2 size={28} className="text-glass-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-graphite-900">Consulta lista para enviar</h3>
          <p className="text-graphite-500 text-sm mt-1 leading-relaxed">
            Armamos el mensaje completo con todos los datos del proyecto.
            {form.files.length > 0 && ' Adjuntá los archivos directamente desde WhatsApp.'}
          </p>
        </div>
      </div>

      {/* Message preview */}
      <div className="bg-graphite-50 rounded-xl p-4 border border-graphite-100 max-h-40 overflow-y-auto">
        <p className="text-graphite-600 text-xs leading-relaxed whitespace-pre-line">{msg}</p>
      </div>

      {/* Files reminder */}
      {form.files.length > 0 && (
        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-glass-50 border border-glass-200">
          <Upload size={14} className="text-glass-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-glass-700 text-xs font-semibold">Recordá adjuntar tus archivos</p>
            <p className="text-graphite-500 text-xs mt-0.5 leading-snug">
              Una vez abierto WhatsApp, adjuntá los {form.files.length} archivo{form.files.length > 1 ? 's' : ''} seleccionado{form.files.length > 1 ? 's' : ''} directamente en el chat.
            </p>
          </div>
        </div>
      )}

      {/* Meeting summary */}
      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-graphite-50 border border-graphite-100">
        <Calendar size={14} className="text-graphite-400 flex-shrink-0" />
        <div>
          <p className="text-graphite-700 text-xs font-semibold">
            {meetingLabel} {form.fechaPreferencia && `· ${form.fechaPreferencia}`}
          </p>
          <p className="text-graphite-400 text-xs">Nuestro equipo confirmará fecha y hora por WhatsApp.</p>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-2.5">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1da950] transition-colors shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Enviar consulta por WhatsApp
        </a>
        <button onClick={onClose}
          className="px-5 py-2.5 rounded-xl border border-graphite-200 text-graphite-500 text-sm font-medium hover:border-graphite-300 transition-colors">
          Cerrar
        </button>
      </div>
    </div>
  )
}

// ─── Questionnaire modal ────────────────────────────────────────────────────

function QuestionnaireModal({ segment, onClose }: { segment: Segment; onClose: () => void }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [phase, setPhase] = useState<'bubbles' | 'form' | 'done'>('bubbles')
  const [projectForm, setProjectForm] = useState<ProjectForm | null>(null)

  const steps = segment.steps!
  const currentStep = steps[step]
  const currentAnswers = answers[currentStep?.key] || []
  const isLast = step === steps.length - 1

  const toggle = (label: string) => {
    const key = currentStep.key
    const prev = answers[key] || []
    const updated = currentStep.multiSelect
      ? prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
      : [label]
    setAnswers((a) => ({ ...a, [key]: updated }))
  }

  const handleNext = () => {
    if (isLast) {
      if (segment.hasDetailForm) setPhase('form')
      else setPhase('done')
    } else {
      setStep((s) => s + 1)
    }
  }

  const whatsappMsg = segment.buildMessage(answers)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-graphite-950/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full sm:max-w-lg bg-white sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-graphite-100">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl ${segment.iconBgClass} flex items-center justify-center`}>
              <segment.icon size={17} className="text-white" />
            </div>
            <span className="font-semibold text-graphite-900 text-sm">{segment.title}</span>
          </div>
          <button onClick={onClose}
            className="p-1.5 rounded-lg text-graphite-400 hover:text-graphite-700 hover:bg-graphite-100 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* ── Bubble steps ── */}
        {phase === 'bubbles' && (
          <>
            {/* Progress */}
            <div className="flex items-center gap-2 px-6 pt-5">
              {[...steps, ...(segment.hasDetailForm ? [{ key: '__form' }] : [])].map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-300 flex-1 ${
                  i === step ? 'bg-glass-600' : i < step ? 'bg-glass-300' : 'bg-graphite-200'
                }`} />
              ))}
              <span className="ml-2 text-xs text-graphite-400 whitespace-nowrap">
                {step + 1} / {steps.length + (segment.hasDetailForm ? 1 : 0)}
              </span>
            </div>

            <div className="px-6 pt-5 pb-2">
              <h3 className="text-lg font-bold text-graphite-900 leading-snug">{currentStep.question}</h3>
              {currentStep.multiSelect && (
                <p className="text-xs text-graphite-400 mt-1">Podés seleccionar más de una opción</p>
              )}
            </div>

            <div className="px-6 pb-6 flex flex-wrap gap-2 mt-3">
              {currentStep.options.map((opt) => {
                const selected = currentAnswers.includes(opt.label)
                return (
                  <button key={opt.label} onClick={() => toggle(opt.label)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                      selected
                        ? 'bg-glass-600 border-glass-600 text-white shadow-sm'
                        : 'bg-white border-graphite-200 text-graphite-700 hover:border-glass-400 hover:text-glass-600'
                    }`}>
                    {opt.label}
                  </button>
                )
              })}
            </div>

            <div className="px-6 pb-6 flex items-center justify-between border-t border-graphite-100 pt-4">
              <button onClick={() => (step > 0 ? setStep((s) => s - 1) : onClose())}
                className="flex items-center gap-1.5 text-sm text-graphite-400 hover:text-graphite-700 transition-colors">
                <ArrowLeft size={14} />
                {step > 0 ? 'Anterior' : 'Cancelar'}
              </button>
              <button onClick={handleNext} disabled={currentAnswers.length === 0}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  currentAnswers.length > 0
                    ? 'bg-glass-600 text-white hover:bg-glass-700 shadow-glass'
                    : 'bg-graphite-100 text-graphite-400 cursor-not-allowed'
                }`}>
                {isLast && segment.hasDetailForm ? 'Completar datos' : isLast ? 'Ver resultado' : 'Siguiente'}
                <ArrowRight size={14} />
              </button>
            </div>
          </>
        )}

        {/* ── Detail form (proyecto only) ── */}
        {phase === 'form' && (
          <ProjectDetailForm
            bubbleAnswers={answers}
            onDone={(f) => { setProjectForm(f); setPhase('done') }}
            onBack={() => { setPhase('bubbles'); setStep(steps.length - 1) }}
          />
        )}

        {/* ── Done: proyecto with form ── */}
        {phase === 'done' && segment.hasDetailForm && projectForm && (
          <ProyectoDoneScreen
            bubbleAnswers={answers}
            form={projectForm}
            onClose={onClose}
          />
        )}

        {/* ── Done: standard segments ── */}
        {phase === 'done' && !segment.hasDetailForm && (
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
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1da950] transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar por WhatsApp
              </a>
              <button onClick={onClose}
                className="px-5 py-3 rounded-xl border border-graphite-200 text-graphite-600 text-sm font-medium hover:border-graphite-400 transition-colors">
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── WhatsApp icon ──────────────────────────────────────────────────────────

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
      const target = seg.directLink.startsWith('/#') ? seg.directLink.slice(1) : seg.directLink
      const el = document.querySelector(target)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      else window.location.href = seg.directLink
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
        <div className="reveal text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-glass-200 bg-glass-50 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-glass-500 animate-pulse" />
            <span className="text-glass-600 text-xs font-semibold tracking-wide uppercase">¿Por dónde empezamos?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-graphite-900 mb-5 tracking-tight leading-tight">
            Cada proyecto tiene<br className="hidden sm:block" />
            <span className="text-glass-600"> su propio camino.</span>
          </h2>
          <p className="text-graphite-500 text-lg max-w-xl mx-auto leading-relaxed">
            Elegí el caso que mejor te representa. En dos pasos tenés una consulta armada y lista para nuestro equipo técnico-comercial.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {segments.map((seg) => (
            <button key={seg.id} onClick={() => handleClick(seg)}
              className={`group relative text-left flex flex-col rounded-2xl border bg-white overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 ${seg.borderClass}`}>
              <SegmentPhoto src={seg.photo} alt={seg.photoAlt} accentColor={seg.accentColor}
                icon={seg.icon} iconBgClass={seg.iconBgClass} tag={seg.tag} tagClass={seg.tagClass} />
              <div className="flex flex-col gap-3 p-6">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl ${seg.iconBgClass} flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5`}>
                    <seg.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-graphite-900 text-base leading-tight">{seg.title}</h3>
                    <p className="text-xs font-semibold text-graphite-400 uppercase tracking-wide mt-0.5">{seg.subtitle}</p>
                  </div>
                </div>
                <p className="text-graphite-500 text-sm leading-relaxed">{seg.description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-glass-600 group-hover:text-glass-700 pt-1">
                  {seg.ctaLabel}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${seg.iconBgClass} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </button>
          ))}
        </div>

        {/* Asesor strip */}
        <div className="mt-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-graphite-50 border border-graphite-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0">
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            </div>
            <div>
              <p className="text-graphite-700 text-sm font-semibold">¿No sabés por dónde empezar?</p>
              <p className="text-graphite-400 text-xs">Hablá directo con un asesor técnico-comercial de Glasstex.</p>
            </div>
          </div>
          <a href={waAdvisorUrl} target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1da950] transition-colors shadow-sm">
            Hablar con un asesor <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {active && active.steps && (
        <QuestionnaireModal segment={active} onClose={() => setActive(null)} />
      )}
    </section>
  )
}
