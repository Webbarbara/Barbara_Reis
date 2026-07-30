/* Pequenos detalhes gráficos desenhados à mão, usados com moderação ao longo do site. */

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 12"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M2 8.5C14 3.5 22 9.5 34 6.5C46 3.5 54 10 66 7C78 4 86 9.5 98 6.5C106 4.5 112 7 118 5.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function HandArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 8C22 26 44 32 70 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M62 18L71 26L60 31"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2C12.8 7.2 13.5 10 22 12C13.5 14 12.8 16.8 12 22C11.2 16.8 10.5 14 2 12C10.5 10 11.2 7.2 12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}
