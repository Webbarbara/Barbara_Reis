import { WhatsAppButton } from "@/components/whatsapp-button"
import { Squiggle } from "@/components/doodles"

export function FinalCta() {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-20 text-center md:py-28 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
          Está na hora de transformar sua presença digital em uma{" "}
          <span className="italic">estratégia de crescimento</span>
        </h2>
        <Squiggle className="mt-4 h-3 w-40 text-primary-foreground/60" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 text-pretty">
          Converse com a A Reis Business e descubra quais ações podem ajudar
          seu negócio a se posicionar melhor, alcançar pessoas da sua região e
          gerar novas oportunidades.
        </p>
        <div className="mt-9">
          <WhatsAppButton
            label="Começar uma conversa no WhatsApp"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          />
        </div>
      </div>
    </section>
  )
}
