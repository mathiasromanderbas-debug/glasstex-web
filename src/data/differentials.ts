export interface Differential {
  id: string
  title: string
  description: string
  icon: string
}

export const differentials: Differential[] = [
  {
    id: 'produccion-propia',
    title: 'Producción propia',
    description:
      'Fabricamos en planta propia con control total del proceso. Sin intermediarios, sin tiempos perdidos, con trazabilidad de cada pieza.',
    icon: 'Factory',
  },
  {
    id: 'cadena-integrada',
    title: 'Aluminio + vidrio integrados',
    description:
      'Una sola empresa cubre todo el proceso: vidrio procesado, perfiles de aluminio, fabricación de aberturas e instalación.',
    icon: 'Link',
  },
  {
    id: 'capacidad-tecnica',
    title: 'Capacidad técnica',
    description:
      'Equipo profesional con experiencia en obras de gran escala. Resolvemos proyectos complejos con especificaciones técnicas exigentes.',
    icon: 'Cpu',
  },
  {
    id: 'plataforma-digital',
    title: 'Ecosistema digital B2B',
    description:
      'GlassOrderPro permite a profesionales gestionar pedidos, hacer seguimiento y acceder a catálogo técnico desde cualquier dispositivo.',
    icon: 'Monitor',
  },
  {
    id: 'trazabilidad',
    title: 'Trazabilidad total',
    description:
      'Cada componente está codificado y documentado desde fabricación hasta instalación. Ficha técnica, control de calidad y registro fotográfico.',
    icon: 'QrCode',
  },
  {
    id: 'modulares-escalables',
    title: 'Soluciones a medida y modulares',
    description:
      'Fabricamos proyectos completamente personalizados y también contamos con línea modular VitraLink para compras estandarizadas y más ágiles.',
    icon: 'LayoutGrid',
  },
  {
    id: 'experiencia-obra',
    title: 'Experiencia en obra',
    description:
      'Instalación con equipo técnico propio. Conocemos los tiempos y exigencias de la obra y nos adaptamos al cronograma del proyecto.',
    icon: 'HardHat',
  },
  {
    id: 'proyectos-complejos',
    title: 'Proyectos complejos',
    description:
      'Desde una ventana residencial hasta una fachada vidriada de varios pisos. Capacidad para escalar según la demanda del proyecto.',
    icon: 'Building2',
  },
]

export default differentials
