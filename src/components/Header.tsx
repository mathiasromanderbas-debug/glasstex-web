'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Obras', href: '#obras' },
  { label: 'GlassOrderPro', href: '#glassoorderpro' },
  { label: 'Productos modulares', href: '#modulares' },
  { label: 'Tecnología', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '595983471820'
const WHATSAPP_PROFESSIONAL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Glasstex%2C%20quiero%20solicitar%20acceso%20a%20GlassOrderPro%20como%20profesional%20del%20rubro.`

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-graphite-200/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center group"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            >
              {/* Logo: versión oscura sobre fondo claro (scrolled), blanca sobre fondo oscuro (hero) */}
              <img
                src={isScrolled ? '/logo-glasstex.png' : '/logo-glasstex-white.png'}
                alt="Glasstex"
                className="h-10 w-auto transition-opacity duration-300"
              />
            </a>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-glass-50 hover:text-glass-600 ${
                    isScrolled
                      ? 'text-graphite-600'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={WHATSAPP_PROFESSIONAL}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                  isScrolled
                    ? 'border-graphite-300 text-graphite-700 hover:border-glass-600 hover:text-glass-600'
                    : 'border-white/40 text-white hover:border-white hover:bg-white/10'
                }`}
              >
                Acceso profesionales
              </a>
              <button
                onClick={() => handleNavClick('#contacto')}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-glass-600 text-white hover:bg-glass-700 transition-colors shadow-glass"
              >
                Solicitar cotización
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-graphite-700' : 'text-white'
              }`}
              aria-label="Abrir menú"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-graphite-950/60 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 bg-white shadow-xl transform transition-transform duration-300 ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-graphite-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-glass-600 rounded-lg flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="1" width="7" height="7" rx="1" fill="white" fillOpacity="0.9"/>
                  <rect x="10" y="1" width="7" height="7" rx="1" fill="white" fillOpacity="0.5"/>
                  <rect x="1" y="10" width="7" height="7" rx="1" fill="white" fillOpacity="0.5"/>
                  <rect x="10" y="10" width="7" height="7" rx="1" fill="white" fillOpacity="0.9"/>
                </svg>
              </div>
              <span className="font-bold text-graphite-900">GLASSTEX</span>
            </div>
            <button onClick={() => setIsMobileOpen(false)} className="p-1 text-graphite-500">
              <X size={20} />
            </button>
          </div>

          <nav className="px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 rounded-xl text-graphite-700 font-medium hover:bg-glass-50 hover:text-glass-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="px-6 pb-6 flex flex-col gap-3 border-t border-graphite-100 pt-4">
            <a
              href={WHATSAPP_PROFESSIONAL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-3 rounded-xl text-sm font-medium border border-graphite-300 text-graphite-700 text-center hover:border-glass-600 hover:text-glass-600 transition-colors"
            >
              Acceso profesionales
            </a>
            <button
              onClick={() => handleNavClick('#contacto')}
              className="w-full px-4 py-3 rounded-xl text-sm font-semibold bg-glass-600 text-white hover:bg-glass-700 transition-colors"
            >
              Solicitar cotización
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
