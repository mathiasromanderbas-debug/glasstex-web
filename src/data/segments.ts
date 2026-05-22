export interface Segment {
  id: string
  title: string
  description: string
  details: string
  cta: string
  ctaHref: string
  whatsappMessage: string
  icon: string
  badge?: string
}

export const segments: Segment[] = [
  {
    id: 'obra',
    title: 'Tengo una obra o proyecto',
    description: 'Necesito aluminio, vidrio o fachadas para una construcción en curso o próxima.',
    details:
      'Presentá tu proyecto al equipo técnico-comercial de Glasstex. Te acompañamos desde el relevamiento hasta la instalación.',
    cta: 'Subir proyecto',
    ctaHref: '#contacto',
    whatsappMessage: 'Hola Glasstex, tengo una obra en curso y necesito asesoramiento en aluminio y vidrio.',
    icon: 'Building',
    badge: 'Obras y construcción',
  },
  {
    id: 'profesional',
    title: 'Soy arquitecto / ingeniero / constructora',
    description: 'Trabajo en proyectos de arquitectura o construcción y necesito un proveedor técnico.',
    details:
      'Glasstex trabaja con estudios de arquitectura, ingeniería y constructoras que requieren precisión, cumplimiento de especificaciones y capacidad para grandes volúmenes.',
    cta: 'Solicitar presupuesto técnico',
    ctaHref: '#contacto',
    whatsappMessage: 'Hola Glasstex, soy arquitecto/ingeniero y quiero consultar por soluciones para un proyecto.',
    icon: 'Ruler',
    badge: 'Profesionales',
  },
  {
    id: 'rubro',
    title: 'Soy vidriero o profesional del rubro',
    description: 'Soy carpintero de aluminio, vidriería o mayorista y necesito pedidos técnicos con trazabilidad.',
    details:
      'Accedé a GlassOrderPro para cotizar y gestionar pedidos de vidrio, DVH, laminados, templados y perfiles con mayor control, historial y seguimiento.',
    cta: 'Solicitar acceso a GlassOrderPro',
    ctaHref: '#glassoorderpro',
    whatsappMessage: 'Hola Glasstex, quiero solicitar acceso a GlassOrderPro como profesional del rubro.',
    icon: 'Wrench',
    badge: 'GlassOrderPro',
  },
  {
    id: 'estandar',
    title: 'Quiero comprar productos estándar',
    description: 'Busco ventanas, puertas, mamparas u otros productos con medidas optimizadas y entrega ágil.',
    details:
      'VitraLink es la línea modular de Glasstex: productos de aluminio y vidrio estandarizados para comprar o cotizar de forma rápida, con fabricación optimizada.',
    cta: 'Ver productos modulares',
    ctaHref: '#modulares',
    whatsappMessage: 'Hola Glasstex, quiero consultar por productos modulares de aluminio y vidrio.',
    icon: 'Package',
    badge: 'VitraLink',
  },
  {
    id: 'mantenimiento',
    title: 'Necesito mantenimiento o reposición',
    description: 'Tengo vidrios rotos, herrajes defectuosos o cerramientos que requieren reparación o sustitución.',
    details:
      'El equipo técnico de Glasstex asiste en reparaciones, reposiciones de vidrios y mantenimiento de sistemas de aluminio instalados.',
    cta: 'Consultar mantenimiento',
    ctaHref: '#contacto',
    whatsappMessage: 'Hola Glasstex, necesito mantenimiento o reposición de vidrios y aluminio.',
    icon: 'Hammer',
  },
  {
    id: 'asesor',
    title: 'Quiero hablar con un asesor',
    description: 'No sé exactamente qué necesito, quiero orientación técnica o comercial.',
    details:
      'Nuestro equipo técnico-comercial te ayuda a definir la solución más adecuada según tu proyecto, presupuesto y plazos.',
    cta: 'Contactar por WhatsApp',
    ctaHref: 'whatsapp',
    whatsappMessage: 'Hola Glasstex, quiero hablar con un asesor sobre soluciones en aluminio y vidrio.',
    icon: 'MessageCircle',
  },
]

export default segments
