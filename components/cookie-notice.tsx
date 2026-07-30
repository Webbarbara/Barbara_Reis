"use client"

import { useEffect, useState } from "react"

const CONSENT_KEY = "areis-cookie-consent"

export function CookieNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background px-5 py-4"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Este site utiliza cookies para melhorar a experiência de navegação e
          medir o desempenho das páginas. Ao continuar, você concorda com a
          nossa política de privacidade.
        </p>
        <button
          type="button"
          onClick={() => {
            localStorage.setItem(CONSENT_KEY, "accepted")
            setVisible(false)
          }}
          className="shrink-0 bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
        >
          Entendi
        </button>
      </div>
    </div>
  )
}
