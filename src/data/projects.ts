export interface Project {
  id: string
  name: string
  location: string
  year: number
  type: 'Corporativo' | 'Residencial' | 'Comercial' | 'Hotelero' | 'Industrial' | 'Institucional'
  solution: string
  system: string
  description: string
  image: string
  images?: string[]
  tags: string[]
  featured?: boolean
}

// Datos reales de obras Glasstex
// Las imágenes deben copiarse en: glasstex-web/public/projects/
export const projects: Project[] = [
  {
    id: 'torre-aviadores',
    name: 'Torre Aviadores',
    location: 'Asunción, Paraguay',
    year: 2024,
    type: 'Residencial',
    solution: 'Fachada vidriada + aberturas',
    system: 'Curtain wall · DVH · Corredizas aluminio',
    description:
      'Torre residencial de alto estándar con fachada vidriada integral y aberturas de aluminio en sistema corredizo. Vidrios DVH para eficiencia térmica y acústica en todos los niveles.',
    image: '/projects/torre-aviadores.jpg',
    images: ['/projects/torre-aviadores.jpg', '/projects/torre-aviadores-2.jpg', '/projects/torre-aviadores-3.jpg', '/projects/aviadores.jpeg'],
    tags: ['fachada', 'dvh', 'residencial', 'corredizas'],
    featured: true,
  },
  {
    id: 'banco-continental',
    name: 'Banco Continental — Edificio Corporativo',
    location: 'Asunción, Paraguay',
    year: 2023,
    type: 'Corporativo',
    solution: 'Fachada vidriada corporativa',
    system: 'Silicone glazing · Vidrio templado',
    description:
      'Fachada corporativa para edificio financiero con sistema de silicone glazing y vidrio templado de alta performance. Acabado premium con perfiles de aluminio de precisión.',
    image: '/projects/banco-continental.png',
    images: ['/projects/banco-continental.png', '/projects/banco-continental-2.jpg'],
    tags: ['fachada', 'corporativo', 'silicone-glazing', 'templado'],
    featured: true,
  },
  {
    id: 'hotel-bourbon-conmebol',
    name: 'Hotel Bourbon CONMEBOL',
    location: 'Luque, Paraguay',
    year: 2023,
    type: 'Hotelero',
    solution: 'Fachada + cerramientos interiores',
    system: 'Curtain wall · Mamparas · DVH',
    description:
      'Solución integral de aluminio y vidrio para hotel de cadena internacional. Fachada curtain wall, mamparas divisorias y aberturas de alta performance térmica y acústica.',
    image: '/projects/hotel-bourbon.jpg',
    images: ['/projects/hotel-bourbon.jpg', '/projects/hotel-bourbon-2.jpg'],
    tags: ['fachada', 'hotelero', 'curtain-wall', 'dvh'],
    featured: true,
  },
  {
    id: 'sun-palace-tower',
    name: 'Sun Palace Tower',
    location: 'Asunción, Paraguay',
    year: 2024,
    type: 'Residencial',
    solution: 'Aberturas y barandas',
    system: 'Corredizas aluminio · Barandas vidrio templado',
    description:
      'Provisión e instalación de aberturas corredizas de aluminio y barandas de vidrio templado en torre residencial de lujo.',
    image: '/projects/sun-palace-tower.png',
    images: ['/projects/sun-palace-tower.png', '/projects/home-palace-tower.jpg', '/projects/home-palace-2.jpg'],
    tags: ['residencial', 'aberturas', 'barandas', 'templado'],
    featured: false,
  },
  {
    id: 'ecovi',
    name: 'ECOVI',
    location: 'Paraguay',
    year: 2023,
    type: 'Residencial',
    solution: 'Aberturas y fachada',
    system: 'Corredizas · DVH · Aluminio natural',
    description:
      'Proyecto residencial de escala con provisión completa de aberturas de aluminio en sistema corredizo y DVH para eficiencia energética en conjunto habitacional.',
    image: '/projects/ecovi.jpg',
    images: ['/projects/ecovi.jpg', '/projects/ecovi-2.jpg', '/projects/ecovi-3.jpg'],
    tags: ['residencial', 'aberturas', 'dvh', 'conjunto'],
    featured: false,
  },
  {
    id: 'holiday-inn',
    name: 'Holiday Inn',
    location: 'Asunción, Paraguay',
    year: 2022,
    type: 'Hotelero',
    solution: 'Cerramientos y aberturas',
    system: 'Aluminio · Vidrio laminado · Proyectantes',
    description:
      'Aberturas y cerramientos para hotel de cadena internacional con vidrios laminados de seguridad y sistemas proyectantes de aluminio.',
    image: '/projects/holiday-inn.webp',
    tags: ['hotelero', 'aberturas', 'laminado', 'corporativo'],
    featured: false,
  },
  {
    id: 'lynch-center',
    name: 'Lynch Center',
    location: 'Asunción, Paraguay',
    year: 2023,
    type: 'Comercial',
    solution: 'Fachada y accesos',
    system: 'Presilla y tapa · Vidrio templado · Puertas automáticas',
    description:
      'Fachada comercial con sistema presilla y tapa, vidrios templados y puertas automáticas de aluminio para centro comercial.',
    image: '/projects/lynch-center.jpg',
    tags: ['comercial', 'fachada', 'templado'],
    featured: false,
  },
  {
    id: 'shopeste',
    name: 'Shopeste',
    location: 'Asunción, Paraguay',
    year: 2022,
    type: 'Comercial',
    solution: 'Fachada vidriada',
    system: 'Silicone glazing · Curtain wall',
    description:
      'Fachada vidriada para shopping center con sistema silicone glazing y curtain wall de alto estándar comercial.',
    image: '/projects/shopeste.jpg',
    images: ['/projects/shopeste.jpg', '/projects/shopeste-2.jpg'],
    tags: ['comercial', 'fachada', 'silicone-glazing', 'curtain-wall'],
    featured: false,
  },
  {
    id: 'gradil',
    name: 'Gradil',
    location: 'Paraguay',
    year: 2023,
    type: 'Corporativo',
    solution: 'Cerramientos corporativos',
    system: 'Mamparas · Vidrio templado · Aluminio',
    description:
      'Divisiones y cerramientos interiores con mamparas de aluminio y vidrio templado para instalaciones corporativas.',
    image: '/projects/gradil-2.jpg',
    images: ['/projects/gradil-2.jpg', '/projects/gradil.jpg'],
    tags: ['corporativo', 'mamparas', 'templado'],
    featured: false,
  },
  {
    id: 'palmanova',
    name: 'Palmanova',
    location: 'Paraguay',
    year: 2024,
    type: 'Residencial',
    solution: 'Aberturas premium',
    system: 'Corredizas · Batientes · DVH · Aluminio lacado',
    description:
      'Aberturas de aluminio lacado con vidrios DVH para emprendimiento residencial premium. Sistema corredizo y batiente con herrajes de acero inoxidable.',
    image: '/projects/palmanova.avif',
    images: ['/projects/palmanova.avif', '/projects/palmanova-2.webp'],
    tags: ['residencial', 'aberturas', 'dvh', 'batientes'],
    featured: false,
  },
  {
    id: 'automotor',
    name: 'Automotor',
    location: 'Paraguay',
    year: 2023,
    type: 'Comercial',
    solution: 'Showroom y cerramientos',
    system: 'Vidrio templado · Mamparas · Aluminio',
    description:
      'Cerramientos de vidrio templado y mamparas de aluminio para showroom automotriz con diseño abierto y luminoso.',
    image: '/projects/automotor.jpg',
    tags: ['comercial', 'templado', 'mamparas'],
    featured: false,
  },
  {
    id: 'hit',
    name: 'HIT',
    location: 'Paraguay',
    year: 2022,
    type: 'Comercial',
    solution: 'Fachada y aberturas',
    system: 'Aluminio · Vidrio templado',
    description:
      'Fachada y aberturas de aluminio con vidrio templado para instalaciones comerciales de gran escala.',
    image: '/projects/hit.webp',
    images: ['/projects/hit.webp', '/projects/hit-2.jpg'],
    tags: ['comercial', 'fachada', 'templado'],
    featured: false,
  },
  {
    id: 'inova',
    name: 'INOVA',
    location: 'Paraguay',
    year: 2023,
    type: 'Corporativo',
    solution: 'Oficinas y cerramientos',
    system: 'Mamparas · DVH · Aluminio natural',
    description:
      'Solución integral de cerramientos para edificio de oficinas con mamparas modulares y vidrios DVH de alta eficiencia.',
    image: '/projects/inova.jpg',
    tags: ['corporativo', 'mamparas', 'dvh'],
    featured: false,
  },
  {
    id: 'atc',
    name: 'ATC',
    location: 'Paraguay',
    year: 2022,
    type: 'Institucional',
    solution: 'Cerramientos institucionales',
    system: 'Aluminio · Vidrio laminado · Aberturas',
    description:
      'Provisión e instalación de aberturas y cerramientos para instalaciones institucionales con vidrios de seguridad laminados.',
    image: '/projects/atc.jpg',
    tags: ['institucional', 'aberturas', 'laminado'],
    featured: false,
  },
  {
    id: 'cop',
    name: 'COP',
    location: 'Paraguay',
    year: 2023,
    type: 'Institucional',
    solution: 'Fachada institucional',
    system: 'Curtain wall · Vidrio DVH',
    description:
      'Fachada curtain wall con vidrios DVH para edificio institucional de representación.',
    image: '/projects/cop.webp',
    tags: ['institucional', 'fachada', 'curtain-wall', 'dvh'],
    featured: false,
  },
  {
    id: 'itaipu',
    name: 'Fachada Itaipu',
    location: 'Paraguay',
    year: 2022,
    type: 'Industrial',
    solution: 'Fachada industrial',
    system: 'Aluminio · Vidrio templado · Presilla y tapa',
    description:
      'Fachada de aluminio y vidrio templado con sistema presilla y tapa para instalaciones de gran escala.',
    image: '/projects/itaipu.jpg',
    tags: ['industrial', 'fachada', 'templado'],
    featured: false,
  },
]

export default projects
