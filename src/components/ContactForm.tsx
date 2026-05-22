'use client'

import { useState, useRef } from 'react'
import { Send, Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const clientTypes = [
  'Particular', 'Arquitecto', 'Ingeniero', 'Constructora',
  'Desarrolladora', 'Vidriería', 'Carpintería de aluminio',
  'Mayorista', 'Empresa', 'Otro',
]

const projectTypes = [
  'Aberturas', 'Fachada', 'Vidrio templado', 'DVH', 'Laminado',
  'Barandas', 'Mamparas', 'Espejos', 'Producto modular',
  'Pedido profesional', 'Mantenimiento', 'Otro',
]

interface FormData {
  name: string
  company: string
  phone: string
  email: string
  clientType: string
  projectType: string
  city: string
  message: string
  hasFiles: boolean
}

const initialData: FormData = {
  name: '', company: '', phone: '', email: '',
  clientType: '', projectType: '', city: '', message: '', hasFiles: false,
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialData)
  const [status, setStatus] = useState<Status>('idle')
  const [fileName, setFileName] = useState<string>('')
  const fileRef = useRef<HTMLInputElement>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      setForm((prev) => ({ ...prev, hasFiles: true }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // TODO: Conectar a Supabase, Resend o CRM
    // Estructura lista para:
    // const { error } = await supabase.from('leads').insert([{ ...form, file: uploadedFileUrl }])
    // await resend.emails.send({ from: '...', to: '...', subject: '...', html: '...' })

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulated delay
      console.log('Form data:', form)
      setStatus('success')
      setForm(initialData)
      setFileName('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center">
          <CheckCircle className="text-emerald-500" size={32} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-graphite-900 mb-2">Solicitud recibida</h3>
          <p className="text-graphite-500 max-w-sm">
            El equipo técnico-comercial de Glasstex se pondrá en contacto con vos a la brevedad.
          </p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 px-6 py-2.5 rounded-xl border border-graphite-200 text-graphite-700 text-sm font-medium hover:border-glass-600 hover:text-glass-600 transition-colors"
        >
          Enviar otra consulta
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Row 1: Name + Company */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-graphite-700">
            Nombre <span className="text-glass-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre completo"
            className="px-4 py-3 rounded-xl border border-graphite-200 bg-graphite-50 text-graphite-900 text-sm placeholder:text-graphite-400 focus:outline-none focus:ring-2 focus:ring-glass-600/30 focus:border-glass-600 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-graphite-700">Empresa / Organización</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Empresa o estudio"
            className="px-4 py-3 rounded-xl border border-graphite-200 bg-graphite-50 text-graphite-900 text-sm placeholder:text-graphite-400 focus:outline-none focus:ring-2 focus:ring-glass-600/30 focus:border-glass-600 transition-all"
          />
        </div>
      </div>

      {/* Row 2: Phone + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-graphite-700">
            Teléfono / WhatsApp <span className="text-glass-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+595 9__ ___-___"
            className="px-4 py-3 rounded-xl border border-graphite-200 bg-graphite-50 text-graphite-900 text-sm placeholder:text-graphite-400 focus:outline-none focus:ring-2 focus:ring-glass-600/30 focus:border-glass-600 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-graphite-700">
            Email <span className="text-glass-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
            className="px-4 py-3 rounded-xl border border-graphite-200 bg-graphite-50 text-graphite-900 text-sm placeholder:text-graphite-400 focus:outline-none focus:ring-2 focus:ring-glass-600/30 focus:border-glass-600 transition-all"
          />
        </div>
      </div>

      {/* Row 3: Client type + Project type */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-graphite-700">
            Tipo de cliente <span className="text-glass-600">*</span>
          </label>
          <select
            name="clientType"
            value={form.clientType}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-xl border border-graphite-200 bg-graphite-50 text-graphite-900 text-sm focus:outline-none focus:ring-2 focus:ring-glass-600/30 focus:border-glass-600 transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled>Seleccioná tu perfil</option>
            {clientTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-graphite-700">Tipo de proyecto</label>
          <select
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl border border-graphite-200 bg-graphite-50 text-graphite-900 text-sm focus:outline-none focus:ring-2 focus:ring-glass-600/30 focus:border-glass-600 transition-all appearance-none cursor-pointer"
          >
            <option value="">Tipo de proyecto</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* City */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-graphite-700">Ciudad</label>
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="Ciudad donde está la obra"
          className="px-4 py-3 rounded-xl border border-graphite-200 bg-graphite-50 text-graphite-900 text-sm placeholder:text-graphite-400 focus:outline-none focus:ring-2 focus:ring-glass-600/30 focus:border-glass-600 transition-all"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-graphite-700">
          Mensaje / Descripción del proyecto <span className="text-glass-600">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Describí tu proyecto, dimensiones aproximadas, tipo de solución que buscás, plazos..."
          className="px-4 py-3 rounded-xl border border-graphite-200 bg-graphite-50 text-graphite-900 text-sm placeholder:text-graphite-400 focus:outline-none focus:ring-2 focus:ring-glass-600/30 focus:border-glass-600 transition-all resize-none"
        />
      </div>

      {/* File upload */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-graphite-700">Archivos del proyecto</label>
        <input
          ref={fileRef}
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png,.zip"
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed border-graphite-200 hover:border-glass-600 hover:bg-glass-50 transition-all text-sm text-graphite-500 hover:text-glass-600 group"
        >
          <Upload size={16} className="group-hover:scale-110 transition-transform" />
          {fileName ? (
            <span className="text-graphite-800 font-medium">{fileName}</span>
          ) : (
            <span>Subir planos, renders o documentación técnica (PDF, DWG, JPG, ZIP)</span>
          )}
        </button>
        <p className="text-xs text-graphite-400">
          Si no tenés archivos disponibles, podés indicarlo en el mensaje.
        </p>
      </div>

      {/* Error state */}
      {status === 'error' && (
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
          <AlertCircle size={16} />
          Ocurrió un error al enviar. Intentá nuevamente o contactanos por WhatsApp.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-glass-600 text-white font-semibold hover:bg-glass-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-glass group"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Enviando solicitud...
          </>
        ) : (
          <>
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            Enviar solicitud
          </>
        )}
      </button>

      <p className="text-xs text-graphite-400 text-center">
        Tu información es confidencial y no se comparte con terceros.
      </p>
    </form>
  )
}
