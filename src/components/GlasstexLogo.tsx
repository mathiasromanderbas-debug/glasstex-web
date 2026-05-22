'use client'

import { useId } from 'react'

interface Props {
  /** 'light' = texto oscuro (para fondos blancos) | 'dark' = texto blanco (para fondos oscuros) */
  variant?: 'light' | 'dark'
  className?: string
  height?: number
}

export default function GlasstexLogo({ variant = 'light', className = '', height = 32 }: Props) {
  const id = useId().replace(/:/g, '')
  const textColor = variant === 'dark' ? '#ffffff' : '#111111'
  const fontSize = height * 0.72

  return (
    <div
      className={`flex items-center ${className}`}
      style={{ height: `${height}px`, lineHeight: 1 }}
    >
      {/* Wordmark */}
      <span
        style={{
          fontFamily: "'Poppins', 'Inter', system-ui, sans-serif",
          fontWeight: 800,
          fontSize: `${fontSize}px`,
          color: textColor,
          letterSpacing: '-0.03em',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        Glasstex
      </span>

      {/* Slash mark con gradiente azul → verde */}
      <svg
        width={Math.round(height * 0.44)}
        height={height}
        viewBox="0 0 14 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginLeft: '2px', flexShrink: 0 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`sg-${id}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0055CC" />
            <stop offset="100%" stopColor="#22C55E" />
          </linearGradient>
        </defs>
        <polygon
          points="3,1 9,1 11,31 5,31"
          fill={`url(#sg-${id})`}
          rx="1"
        />
      </svg>
    </div>
  )
}
