/**
 * SectionDivider — Separador visual entre secciones usando el isotipo Glasstex.
 * Usa el slash diagonal con gradiente azul→verde como elemento de marca.
 */

interface Props {
  /** 'light' = fondo blanco/claro | 'dark' = fondo oscuro */
  variant?: 'light' | 'dark'
}

export default function SectionDivider({ variant = 'light' }: Props) {
  const lineColor = variant === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'

  return (
    <div className="flex items-center justify-center py-2" aria-hidden="true">
      {/* Línea izquierda */}
      <div
        className="flex-1 max-w-[120px] h-px"
        style={{ background: lineColor }}
      />

      {/* Isotipo — slash diagonal con gradiente */}
      <div className="mx-4 flex-shrink-0">
        <svg
          width="16"
          height="28"
          viewBox="0 0 16 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="divGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0055CC" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>
          </defs>
          <polygon
            points="3,1 9,1 13,27 7,27"
            fill="url(#divGrad)"
          />
        </svg>
      </div>

      {/* Línea derecha */}
      <div
        className="flex-1 max-w-[120px] h-px"
        style={{ background: lineColor }}
      />
    </div>
  )
}
