'use client'

import { Mail, MapPin, Instagram, Linkedin, ExternalLink } from 'lucide-react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595983471820'
const WHATSAPP_DEFAULT = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Glasstex%2C%20quiero%20obtener%20m%C3%A1s%20informaci%C3%B3n.`
const WHATSAPP_GOP = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Glasstex%2C%20quiero%20solicitar%20acceso%20a%20GlassOrderPro%20como%20profesional%20del%20rubro.`

const navLinks = [
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Obras', href: '#obras' },
  { label: 'GlassOrderPro', href: '#glassoorderpro' },
  { label: 'Productos modulares', href: '#modulares' },
  { label: 'Contacto', href: '#contacto' },
]

const handleNavClick = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-graphite-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="/logo-glasstex-white.png"
                alt="Glasstex"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-graphite-400 text-sm leading-relaxed mb-6">
              Soluciones integrales en aluminio y vidrio para obras residenciales, comerciales y corporativas. Paraguay.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/glasstex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-graphite-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://linkedin.com/company/glasstex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-graphite-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <div className="text-graphite-400 text-xs font-semibold uppercase tracking-wide mb-4">Navegación</div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-graphite-400 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Ecosystem */}
          <div>
            <div className="text-graphite-400 text-xs font-semibold uppercase tracking-wide mb-4">Ecosistema</div>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_GOP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-graphite-400 text-sm hover:text-white transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                    <rect x="1" y="1" width="7" height="7" rx="1" fill="currentColor" fillOpacity="0.8"/>
                    <rect x="10" y="1" width="7" height="7" rx="1" fill="currentColor" fillOpacity="0.4"/>
                    <rect x="1" y="10" width="7" height="7" rx="1" fill="currentColor" fillOpacity="0.4"/>
                    <rect x="10" y="10" width="7" height="7" rx="1" fill="currentColor" fillOpacity="0.8"/>
                  </svg>
                  GlassOrderPro
                </span>
                <ExternalLink size={11} className="opacity-0 group-hover:opacity-60 transition-opacity" />
              </a>
              <button
                onClick={() => handleNavClick('#modulares')}
                className="text-left flex items-center gap-2 text-graphite-400 text-sm hover:text-white transition-colors"
              >
                VitraLink · Productos modulares
              </button>
              <div className="pt-2 border-t border-white/5">
                <div className="text-graphite-500 text-xs mb-2">Solicitud de acceso profesional</div>
                <a
                  href={WHATSAPP_GOP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-glass-600/20 border border-glass-600/30 text-glass-400 text-xs font-medium hover:bg-glass-600/30 transition-colors"
                >
                  Solicitar acceso GlassOrderPro
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <div className="text-graphite-400 text-xs font-semibold uppercase tracking-wide mb-4">Contacto</div>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-graphite-400 text-sm hover:text-white transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +595 9__ ___-___ · WhatsApp
              </a>
              <a
                href="mailto:contacto@glasstex.com.py"
                className="flex items-start gap-2.5 text-graphite-400 text-sm hover:text-white transition-colors"
              >
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                contacto@glasstex.com.py
              </a>
              <div className="flex items-start gap-2.5 text-graphite-400 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                Asunción, Paraguay
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-graphite-600 text-xs">
            © {year} Glasstex · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-4">
            <button className="text-graphite-600 text-xs hover:text-graphite-400 transition-colors">
              Política de privacidad
            </button>
            <button className="text-graphite-600 text-xs hover:text-graphite-400 transition-colors">
              Términos de uso
            </button>
            <a
              href={WHATSAPP_GOP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite-600 text-xs hover:text-glass-400 transition-colors"
            >
              Solicitud acceso profesional
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
