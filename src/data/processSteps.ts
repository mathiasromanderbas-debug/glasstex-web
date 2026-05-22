export interface ProcessStep {
  id: number
  title: string
  description: string
  detail: string
  icon: string
  highlights: string[]
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Relevamiento',
    description: 'Visita técnica y medición en obra.',
    detail:
      'El equipo técnico de Glasstex realiza el relevamiento dimensional y funcional del proyecto para garantizar precisión desde el inicio.',
    icon: 'MapPin',
    highlights: ['Medición en obra', 'Evaluación estructural', 'Documentación fotográfica'],
  },
  {
    id: 2,
    title: 'Análisis técnico',
    description: 'Evaluación de sistemas y materiales.',
    detail:
      'Selección del sistema más adecuado según requerimientos de carga, aislación, estética y normativa vigente.',
    icon: 'Search',
    highlights: ['Selección de sistema', 'Análisis normativo', 'Compatibilidad de materiales'],
  },
  {
    id: 3,
    title: 'Presupuesto',
    description: 'Propuesta técnico-comercial detallada.',
    detail:
      'Presupuesto por ítem con especificaciones técnicas, tiempos de fabricación y condiciones de entrega.',
    icon: 'FileText',
    highlights: ['Desglose por ítem', 'Plazos de fabricación', 'Condiciones comerciales'],
  },
  {
    id: 4,
    title: 'Ingeniería',
    description: 'Planos de detalle y memoria descriptiva.',
    detail:
      'Elaboración de documentación técnica completa: planos de fabricación, detalles constructivos y especificaciones de materiales.',
    icon: 'Drafting',
    highlights: ['Planos de fabricación', 'Detalles constructivos', 'Memoria descriptiva'],
  },
  {
    id: 5,
    title: 'Fabricación',
    description: 'Producción en planta con control de calidad.',
    detail:
      'Fabricación en planta propia con codificación de componentes, control de medidas y trazabilidad de cada pieza.',
    icon: 'Factory',
    highlights: ['Codificación de piezas', 'Control dimensional', 'Trazabilidad de producción'],
  },
  {
    id: 6,
    title: 'Control de calidad',
    description: 'Verificación previa al despacho.',
    detail:
      'Inspección de medidas, sellados, herrajes y acabados. Registro fotográfico de cada lote antes de salir de planta.',
    icon: 'ClipboardCheck',
    highlights: ['Verificación de tolerancias', 'Control de sellados', 'Registro de lote'],
  },
  {
    id: 7,
    title: 'Logística',
    description: 'Embalaje técnico y gestión de entrega.',
    detail:
      'Embalaje especializado para transporte seguro. Coordinación de entrega según cronograma de obra.',
    icon: 'Truck',
    highlights: ['Embalaje técnico', 'Cronograma de entrega', 'Trazabilidad de envío'],
  },
  {
    id: 8,
    title: 'Instalación',
    description: 'Montaje por equipo técnico propio.',
    detail:
      'Instalación con personal técnico capacitado, criterios de seguridad en altura y acabados de obra.',
    icon: 'HardHat',
    highlights: ['Equipo propio', 'Seguridad en obra', 'Acabado profesional'],
  },
  {
    id: 9,
    title: 'Postventa',
    description: 'Soporte técnico y garantía.',
    detail:
      'Atención postventa, ajustes de herrajes, reposiciones y mantenimiento preventivo de sistemas instalados.',
    icon: 'HeartHandshake',
    highlights: ['Ajustes y regulaciones', 'Garantía de materiales', 'Soporte técnico'],
  },
]

export default processSteps
