import { SITE, whatsappLink } from "@/lib/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-semibold">
              A Reis <span className="italic">Business</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-background/70">
              {SITE.owner}
              <br />
              {SITE.location}
              <br />
              {SITE.attendance}
            </p>
          </div>

          <div className="text-sm">
            <p className="font-medium">Contato</p>
            <ul className="mt-3 flex flex-col gap-2 text-background/70">
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background"
                >
                  Instagram {SITE.instagram}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background"
                >
                  WhatsApp {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-background">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="font-medium">Informações</p>
            <ul className="mt-3 flex flex-col gap-2 text-background/70">
              <li>
                <a href="#" className="hover:text-background">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-background/15 pt-6 text-xs text-background/50">
          © {year} A Reis Business. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
