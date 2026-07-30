"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NAV_LINKS, whatsappLink } from "@/lib/site"
import { WhatsAppIcon } from "@/components/whatsapp-button"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" className="flex items-baseline gap-1.5">
          <span className="font-serif text-lg font-semibold tracking-tight">
            A Reis
          </span>
          <span className="font-serif text-lg italic text-primary">Business</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            <WhatsAppIcon className="size-3.5" />
            Falar no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex size-10 items-center justify-center text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          className="border-t border-border bg-background px-5 py-4 lg:hidden"
          aria-label="Navegação móvel"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-base text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                <WhatsAppIcon className="size-4" />
                Falar no WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
