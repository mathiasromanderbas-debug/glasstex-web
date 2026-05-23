import type { Metadata } from 'next'
import GlassOrderProPage from './GlassOrderProPage'

export const metadata: Metadata = {
  title: 'GlassOrderPro | Plataforma B2B de pedidos técnicos — Glasstex',
  description:
    'Plataforma privada para profesionales del rubro. Pedidos de vidrio templado, DVH, laminados, perfiles de aluminio con trazabilidad, historial y seguimiento de estados. Solicitá tu acceso.',
  openGraph: {
    title: 'GlassOrderPro | Pedidos técnicos de vidrio y aluminio',
    description: 'Plataforma B2B para vidrierías, carpinterías, constructoras y profesionales del rubro. Acceso manual revisado por el equipo Glasstex.',
    url: 'https://glasstex.com.py/glassoorderpro',
  },
}

export default function Page() {
  return <GlassOrderProPage />
}
