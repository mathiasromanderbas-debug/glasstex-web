# Glasstex Web — Landing principal

Landing page institucional y funnel de captación para **Glasstex**, empresa paraguaya de soluciones integrales en aluminio y vidrio.

---

## Stack tecnológico

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS 3** — paleta Glasstex personalizada
- **Lucide React** — iconografía lineal
- **Google Fonts** — Inter + Poppins

---

## Cómo correr el proyecto

### 1. Instalar dependencias

```bash
cd glasstex-web
npm install
```

### 2. Configurar variables de entorno

```bash
cp .env.example .env.local
```

Editar `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=595991000000   # Número real de WhatsApp Glasstex
```

### 3. Iniciar en desarrollo

```bash
npm run dev
```

Abrir: [http://localhost:3000](http://localhost:3000)

### 4. Build para producción

```bash
npm run build
npm start
```

---

## Estructura de archivos

```
glasstex-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Layout raíz, metadata SEO, Open Graph
│   │   ├── page.tsx           # Página principal — composición de secciones
│   │   └── globals.css        # Estilos globales + variables CSS
│   │
│   ├── components/
│   │   ├── Header.tsx         # Navegación fija con blur, responsive
│   │   ├── Hero.tsx           # Hero premium con cards flotantes
│   │   ├── SegmentSelector.tsx    # Segmentación por tipo de cliente
│   │   ├── CapabilitiesGrid.tsx   # Grid de capacidades industriales
│   │   ├── SolutionsSection.tsx   # Soluciones por categoría
│   │   ├── GlassOrderProSection.tsx  # Plataforma B2B profesional
│   │   ├── ModularProductsSection.tsx # VitraLink — línea modular
│   │   ├── ProjectsSection.tsx    # Portfolio de obras
│   │   ├── ProcessTimeline.tsx    # Timeline de proceso (9 pasos)
│   │   ├── DifferentialsSection.tsx   # Por qué Glasstex
│   │   ├── ContactCTA.tsx         # CTA final antes del footer
│   │   ├── ContactSection.tsx     # Sección de contacto con formulario
│   │   ├── ContactForm.tsx        # Formulario principal (listo para Supabase)
│   │   ├── Footer.tsx             # Footer completo
│   │   └── WhatsAppButton.tsx     # Botón flotante WhatsApp
│   │
│   └── data/
│       ├── solutions.ts       # Soluciones por categoría
│       ├── capabilities.ts    # Capacidades industriales
│       ├── segments.ts        # Segmentos de cliente
│       ├── projects.ts        # Portfolio de obras
│       ├── processSteps.ts    # Pasos del proceso
│       └── differentials.ts   # Diferenciales Glasstex
│
├── public/                    # Assets estáticos
├── .env.example               # Template de variables de entorno
├── tailwind.config.js         # Paleta y configuración Glasstex
├── next.config.js
└── tsconfig.json
```

---

## Secciones de la landing

| Sección | ID | Descripción |
|---|---|---|
| Hero | `#inicio` | Hero principal con CTAs y cards flotantes |
| Segmentación | `#segmentos` | 6 tarjetas por perfil de cliente |
| Capacidades | `#capacidades` | 12 capacidades industriales en grid |
| Soluciones | `#soluciones` | 5 categorías de soluciones |
| GlassOrderPro | `#glassoorderpro` | Plataforma B2B para profesionales |
| Modulares | `#modulares` | VitraLink — productos estandarizados |
| Obras | `#obras` | Portfolio de proyectos |
| Proceso | `#proceso` | Timeline de 9 pasos |
| Diferencial | `#diferencial` | Por qué Glasstex |
| Contacto | `#contacto` | Formulario + accesos rápidos WhatsApp |

---

## Variables de entorno

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número WhatsApp sin `+` ni espacios |
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto Supabase (futuro) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key de Supabase (futuro) |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (solo servidor) |
| `RESEND_API_KEY` | API key de Resend para emails (futuro) |
| `CRM_WEBHOOK_URL` | Webhook del CRM (futuro) |

---

## Próximos pasos recomendados

### Prioridad alta

- [ ] Reemplazar número de WhatsApp en `.env.local`
- [ ] Agregar logo SVG real en `/public/logo.svg` y actualizar Header/Footer
- [ ] Agregar imagen Open Graph en `/public/og-image.jpg` (1200×630px)
- [ ] Conectar formulario a Supabase (tabla `leads`) + Resend (notificación al equipo)
- [ ] Subir a Vercel o servidor de producción

### Contenido

- [ ] Reemplazar fotos de proyectos (actualmente placeholders con gradientes)
- [ ] Actualizar datos reales en `src/data/projects.ts`
- [ ] Actualizar estadísticas reales en `Hero.tsx` (línea con años, proyectos)
- [ ] Completar información de contacto (email, dirección, WhatsApp) en Footer
- [ ] Actualizar links de Instagram y LinkedIn

### Funcionalidades futuras

- [ ] **Supabase**: tabla `leads` para almacenar formularios + tabla `projects` para CMS
- [ ] **Resend**: emails automáticos al equipo y confirmación al cliente
- [ ] **VitraLink ecommerce**: página `/modulares` con catálogo y cotización directa
- [ ] **GlassOrderPro**: app separada en `/app.glasstex.com.py` o subdominio
- [ ] **CMS headless**: Sanity, Contentful o Supabase para editar proyectos sin código
- [ ] **Framer Motion**: animaciones scroll reveal más elaboradas
- [ ] **Analytics**: Google Analytics 4 o Plausible
- [ ] **Vercel Analytics**: métricas de performance integradas

---

## Personalización de la paleta

El color azul Glasstex se define en `tailwind.config.js`:

```js
glass: {
  600: '#0055CC',  // Color principal — modificar aquí
  700: '#0047ad',  // Hover
  ...
}
```

---

## Pendientes para conectar backend

### Formulario → Supabase

```ts
// En ContactForm.tsx, reemplazar el timeout simulado:
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

const { error } = await supabase.from('leads').insert([{
  name: form.name,
  company: form.company,
  phone: form.phone,
  email: form.email,
  client_type: form.clientType,
  project_type: form.projectType,
  city: form.city,
  message: form.message,
  has_files: form.hasFiles,
  created_at: new Date().toISOString(),
}])
```

### Email → Resend

```ts
// API route: src/app/api/contact/route.ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'noreply@glasstex.com.py',
  to: 'contacto@glasstex.com.py',
  subject: `Nueva consulta — ${form.name}`,
  html: `<p>...</p>`,
})
```

---

Glasstex · Paraguay · 2025
