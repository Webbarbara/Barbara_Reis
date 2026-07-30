import { WhatsAppButton } from "@/components/whatsapp-button"

/**
 * HERO TEMPORÁRIA — estrutura simples de marcação de espaço.
 * Este componente será substituído pelo código de Hero definitivo.
 * Para trocar: remova este arquivo e ajuste o import em app/page.tsx.
 */
export function HeroPlaceholder() {
  return (
    <section id="inicio" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Marketing e presença digital para negócios locais
          </p>

          {/* Espaço para o título principal */}
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
            Transforme sua presença digital em uma estratégia que atrai clientes locais
          </h1>

          {/* Espaço para o subtítulo */}
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Estratégia, conteúdo e posicionamento para negócios que desejam parar de
            apenas publicar e começar a usar o digital para crescer.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <WhatsAppButton label="Falar com a Bárbara no WhatsApp" />
            <a
              href="#servicos"
              className="inline-flex items-center border border-foreground/30 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
            >
              Conhecer os serviços
            </a>
          </div>
        </div>

        {/* Espaço reservado para imagem ou composição visual */}
        <div
          className="flex aspect-[4/3] items-center justify-center border border-dashed border-border bg-muted"
          aria-hidden="true"
        >
          <span className="px-6 text-center text-sm text-muted-foreground">
            Espaço reservado para imagem ou composição visual
          </span>
        </div>
      </div>
    </section>
  )
}
