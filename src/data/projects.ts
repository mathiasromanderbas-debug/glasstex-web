export interface Project {
  id: string
  name: string
  location: string
  year: number
  type: string
  solution: string
  system: string
  description: string
  image?: string
  tags: string[]
  featured?: boolean
}

// Estructura lista para conectar a CMS o Supabase
// Reemplazar los placeholders con datos reales de obra
export const projects: Project[] = [
  {
    id: 'p1',
    name: 'Edificio Corporativo Centro',
    location: 'Asunción, Paraguay',
    year: 2024,
    type: 'Comercial / Corporativo',
    solution: 'Fachada vidriada',
    system: 'Curtain wall con vidrio DVH',
    description:
      'Fachada vidriada de 12 pisos con sistema curtain wall y vidrios DVH de alta performance energética. Proyecto de referencia en el área corporativa de la capital.',
    tags: ['fachada', 'curtain-wall', 'dvh', 'corporativo'],
    featured: true,
  },
  {
    id: 'p2',
    name: 'Residencia Premium San Lorenzo',
    location: 'San Lorenzo, Paraguay',
    year: 2024,
    type: 'Residencial',
    solution: 'Aberturas de aluminio',
    system: 'Corredizas y proyectantes',
    description:
      'Aberturas de aluminio en sistema corredizo y proyectante para residencia de alto estándar. Vidrios templados y DVH para eficiencia térmica y seguridad.',
    tags: ['residencial', 'aberturas', 'corredizas', 'dvh'],
    featured: true,
  },
  {
    id: 'p3',
    name: 'Centro Comercial Luque',
    location: 'Luque, Paraguay',
    year: 2023,
    type: 'Comercial',
    solution: 'Fachada y aberturas',
    system: 'Silicone glazing + puertas automáticas',
    description:
      'Cerramiento total con fachada de silicone glazing y puertas automáticas de aluminio para centro comercial de 3 plantas.',
    tags: ['comercial', 'fachada', 'silicone-glazing'],
    featured: false,
  },
  {
    id: 'p4',
    name: 'Torre Residencial Mariano Roque',
    location: 'Mariano Roque Alonso, Paraguay',
    year: 2023,
    type: 'Residencial',
    solution: 'Barandas y mamparas',
    system: 'Barandas de vidrio templado',
    description:
      'Barandas de balcón con vidrio templado de 10mm y perfiles de aluminio anodizado para torre residencial de 8 pisos.',
    tags: ['residencial', 'barandas', 'templado'],
    featured: false,
  },
  {
    id: 'p5',
    name: 'Oficinas Corporativas Fernando de la Mora',
    location: 'Fernando de la Mora, Paraguay',
    year: 2023,
    type: 'Corporativo',
    solution: 'Divisiones internas y mamparas',
    system: 'Mamparas de aluminio y vidrio',
    description:
      'Planta libre convertida en espacios de trabajo con mamparas modulares de aluminio y vidrio laminado. Diseño acústico y visual para ambiente corporativo.',
    tags: ['corporativo', 'mamparas', 'laminado'],
    featured: false,
  },
  {
    id: 'p6',
    name: 'Proyecto Residencial Encarnación',
    location: 'Encarnación, Paraguay',
    year: 2022,
    type: 'Residencial',
    solution: 'Aberturas completas',
    system: 'Batientes y corredizas aluminio',
    description:
      'Provisión e instalación de aberturas completas para conjunto de 24 viviendas. Ventanas batientes y corredizas en aluminio blanco con vidrios de cámara.',
    tags: ['residencial', 'aberturas', 'conjunto', 'batientes'],
    featured: false,
  },
]

export default projects
