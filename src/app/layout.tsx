import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Glasstex | Aluminio y vidrio para obras, fachadas y soluciones arquitectónicas',
  description:
    'Soluciones integrales en aluminio y vidrio para obras residenciales, comerciales y corporativas. Fachadas, aberturas, DVH, templados, laminados, productos modulares y plataforma B2B GlassOrderPro.',
  keywords: [
    'aluminio y vidrio Paraguay',
    'aberturas de aluminio',
    'fachadas vidriadas',
    'vidrio templado',
    'DVH',
    'vidrio laminado',
    'barandas de vidrio',
    'mamparas',
    'perfiles de aluminio',
    'GlassOrderPro',
    'Glasstex Paraguay',
    'curtain wall Paraguay',
    'carpintería de aluminio',
  ],
  authors: [{ name: 'Glasstex' }],
  creator: 'Glasstex',
  publisher: 'Glasstex',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_PY',
    url: 'https://glasstex.com.py',
    siteName: 'Glasstex',
    title: 'Glasstex | Aluminio y vidrio para obras, fachadas y soluciones arquitectónicas',
    description:
      'Soluciones integrales en aluminio y vidrio para obras residenciales, comerciales y corporativas en Paraguay. Fachadas, DVH, templados, laminados, productos modulares y plataforma B2B GlassOrderPro.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Glasstex — Aluminio y vidrio para obras de precisión',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glasstex | Aluminio y vidrio para obras, fachadas y soluciones arquitectónicas',
    description: 'Soluciones integrales en aluminio y vidrio. Fachadas, aberturas, DVH, templados, laminados y GlassOrderPro.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://glasstex.com.py',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0055CC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Glasstex',
              url: 'https://glasstex.com.py',
              logo: 'https://glasstex.com.py/logo.png',
              description:
                'Soluciones integrales en aluminio y vidrio para obras residenciales, comerciales y corporativas en Paraguay.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Asunción',
                addressCountry: 'PY',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: 'Spanish',
              },
              sameAs: [
                'https://instagram.com/glasstex',
                'https://linkedin.com/company/glasstex',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
