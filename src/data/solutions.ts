export interface Solution {
  id: string
  title: string
  slug: string
  description: string
  detail: string
  features: string[]
  applications: string[]
  image?: string
  cta: string
  ctaHref: string
}

export const solutions: Solution[] = [
  {
    id: 'fachadas',
    title: 'Fachadas vidriadas',
    slug: 'fachadas-vidriadas',
    description: 'Sistemas de fachada para edificios comerciales, residenciales y corporativos.',
    detail:
      'Soluciones tipo curtain wall, silicone glazing, presilla y tapa, y sistemas adaptados a cada proyecto. Diseñamos e instalamos fachadas de alta performance que integran estética arquitectónica con eficiencia energética y seguridad estructural.',
    features: ['Curtain wall', 'Silicone glazing', 'Presilla y tapa', 'Fachada modular', 'Vidrio estructural'],
    applications: ['Edificios corporativos', 'Centros comerciales', 'Residencias premium', 'Hoteles', 'Instituciones'],
    cta: 'Consultar fachadas',
    ctaHref: '#contacto',
  },
  {
    id: 'aberturas',
    title: 'Aberturas de aluminio',
    slug: 'aberturas-aluminio',
    description: 'Puertas, ventanas y sistemas de cierre fabricados con precisión industrial.',
    detail:
      'Corredizas, batientes, proyectantes y paños fijos fabricados con criterios de precisión, estanqueidad, seguridad y eficiencia. Sistemas para proyectos residenciales, comerciales e institucionales de cualquier escala.',
    features: ['Corredizas', 'Batientes', 'Proyectantes', 'Paños fijos', 'Sistemas oscilo-batientes'],
    applications: ['Viviendas', 'Oficinas', 'Locales comerciales', 'Edificios residenciales', 'Industrias'],
    cta: 'Ver aberturas',
    ctaHref: '#contacto',
  },
  {
    id: 'vidrio-procesado',
    title: 'Vidrio procesado',
    slug: 'vidrio-procesado',
    description: 'Vidrios técnicos configurados según requerimientos de seguridad y desempeño.',
    detail:
      'Vidrios templados, laminados, DVH y composiciones técnicas configuradas según requerimientos de seguridad, aislación, estética y desempeño. Procesamiento industrial con control de calidad en cada etapa.',
    features: ['Vidrio templado', 'Laminado', 'DVH (doble vidriado)', 'Vidrio crudo', 'Composiciones especiales'],
    applications: ['Fachadas', 'Barandas', 'Pisos', 'Cielos', 'Divisiones internas'],
    cta: 'Consultar vidrios',
    ctaHref: '#contacto',
  },
  {
    id: 'barandas',
    title: 'Barandas y cerramientos',
    slug: 'barandas-cerramientos',
    description: 'Sistemas de vidrio para espacios residenciales, comerciales e institucionales.',
    detail:
      'Barandas, mamparas y divisiones en vidrio con perfiles de aluminio de alta precisión. Soluciones para balcones, escaleras, piscinas, baños, oficinas y espacios de alto tráfico. Diseño técnico y estética contemporánea.',
    features: ['Barandas de balcón', 'Mamparas de baño', 'Divisiones de oficina', 'Cerramientos de piscina', 'Escaleras'],
    applications: ['Residencias', 'Hoteles', 'Oficinas', 'Comercios', 'Instituciones'],
    cta: 'Ver barandas',
    ctaHref: '#contacto',
  },
  {
    id: 'modulares',
    title: 'Productos modulares',
    slug: 'productos-modulares',
    description: 'Línea estandarizada para acelerar tiempos de compra, fabricación e instalación.',
    detail:
      'Línea de productos en aluminio y vidrio con medidas optimizadas, pensada para simplificar presupuestos, reducir desperdicio y escalar producción. Disponible mediante VitraLink para cotización directa.',
    features: ['Ventanas estándar', 'Puertas estándar', 'Mamparas', 'Espejos', 'Cerramientos modulares'],
    applications: ['Constructoras en serie', 'Desarrollos inmobiliarios', 'Reposiciones', 'Proyectos de escala'],
    cta: 'Explorar modulares',
    ctaHref: '#modulares',
  },
]

export default solutions
