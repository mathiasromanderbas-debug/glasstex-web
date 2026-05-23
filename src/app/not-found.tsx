import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-graphite-950 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0,85,204,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,85,204,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Blue glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-glass-600/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-glasstex-white.png" alt="Glasstex" className="h-10 w-auto opacity-90" />
        </div>

        {/* 404 number */}
        <div className="text-[120px] sm:text-[160px] font-bold leading-none text-white/10 select-none mb-2 tracking-tight">
          404
        </div>

        {/* Glass pane SVG illustration */}
        <div className="flex justify-center -mt-8 mb-8">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="60" height="60" rx="4" stroke="rgba(0,85,204,0.4)" strokeWidth="2" fill="rgba(0,85,204,0.05)" />
            <line x1="10" y1="40" x2="70" y2="40" stroke="rgba(0,85,204,0.25)" strokeWidth="1.5" />
            <line x1="40" y1="10" x2="40" y2="70" stroke="rgba(0,85,204,0.25)" strokeWidth="1.5" />
            {/* crack lines */}
            <path d="M40 40 L52 28 L58 34 L48 44 L54 52" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="40" cy="40" r="2" fill="rgba(0,85,204,0.5)" />
          </svg>
        </div>

        {/* Message */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
          Página no encontrada.
        </h1>
        <p className="text-graphite-400 text-base leading-relaxed mb-10 max-w-sm mx-auto">
          El panel que buscás no existe o fue movido. Desde el inicio podés encontrar todo lo que necesitás.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-glass-600 text-white font-semibold hover:bg-glass-500 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M8 3L3 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver al inicio
          </Link>
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/40 transition-all"
          >
            Contactar a Glasstex
          </Link>
        </div>

        {/* Footer strip */}
        <div className="mt-16 pt-6 border-t border-white/10">
          <p className="text-graphite-600 text-xs">
            © {new Date().getFullYear()} Glasstex — VitrAll GROUP · Asunción, Paraguay
          </p>
        </div>
      </div>
    </main>
  )
}
