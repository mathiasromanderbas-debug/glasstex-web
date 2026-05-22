export interface Capability {
  id: string
  title: string
  description: string
  application: string
  icon: string // Lucide icon name
}

export const capabilities: Capability[] = [
  {
    id: 'temple',
    title: 'Temple de vidrio',
    description: 'Proceso térmico controlado que aumenta la resistencia del vidrio hasta 5 veces.',
    application: 'Fachadas, pisos, barandas, puertas',
    icon: 'Flame',
  },
  {
    id: 'laminado',
    title: 'Laminado',
    description: 'Unión de láminas de vidrio con film PVB o EVA para seguridad y aislación acústica.',
    application: 'Techos, pisos, vidrio de seguridad',
    icon: 'Layers',
  },
  {
    id: 'dvh',
    title: 'DVH — Doble vidriado',
    description: 'Cámara de aire hermética entre dos vidrios para aislación térmica y acústica.',
    application: 'Ventanas, fachadas, cerramientos energéticamente eficientes',
    icon: 'Boxes',
  },
  {
    id: 'corte',
    title: 'Corte de precisión',
    description: 'Corte CNC y manual con tolerancias mínimas para cualquier geometría.',
    application: 'Vidrios a medida, formas especiales, series',
    icon: 'Scissors',
  },
  {
    id: 'pulido',
    title: 'Pulido y canteado',
    description: 'Terminación de bordes con precisión milimétrica, pulido brillante, mate o biselado.',
    application: 'Espejos, mesas, barandas, mamparas',
    icon: 'Sparkles',
  },
  {
    id: 'perforaciones',
    title: 'Perforaciones',
    description: 'Perforaciones y recortes especiales para herrajes, instalaciones y sistemas de fijación.',
    application: 'Fachadas punto fijo, herrajes de puertas, sistemas spider',
    icon: 'CircleDot',
  },
  {
    id: 'aberturas-fab',
    title: 'Fabricación de aberturas',
    description: 'Producción propia de ventanas y puertas en aluminio con control de calidad en planta.',
    application: 'Proyectos residenciales, comerciales, corporativos',
    icon: 'Building2',
  },
  {
    id: 'ensamblado',
    title: 'Ensamblado y montaje',
    description: 'Armado de sistemas completos: marcos, herrajes, vidrios y sellados.',
    application: 'Aberturas, fachadas, mamparas, cerramientos',
    icon: 'Settings2',
  },
  {
    id: 'instalacion',
    title: 'Instalación en obra',
    description: 'Equipo técnico propio para instalación con criterios de seguridad y acabado profesional.',
    application: 'Obras residenciales, comerciales y corporativas',
    icon: 'HardHat',
  },
  {
    id: 'perfiles',
    title: 'Perfiles de aluminio',
    description: 'Provisión de perfiles para sistemas de aberturas, fachadas y estructuras.',
    application: 'Carpinterías, constructoras, revendedores',
    icon: 'AlignJustify',
  },
  {
    id: 'logistica',
    title: 'Logística y despacho',
    description: 'Gestión de entrega con trazabilidad, embalaje técnico y control de piezas.',
    application: 'Pedidos mayoristas, obras en ejecución, despachos urgentes',
    icon: 'Truck',
  },
  {
    id: 'control',
    title: 'Control técnico',
    description: 'Verificación de medidas, tolerancias, sellados y acabados antes de cada despacho.',
    application: 'Todo el proceso productivo',
    icon: 'ClipboardCheck',
  },
]

export default capabilities
