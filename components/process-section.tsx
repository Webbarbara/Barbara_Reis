import { WhatsAppButton } from "@/components/whatsapp-button"

const STEPS = [
  {
    title: "Conversa inicial",
    text: "Entendimento do negócio, dos desafios e dos objetivos. Uma conversa franca, sem compromisso.",
  },
  {
    title: "Diagnóstico",
    text: "Análise da presença digital atual e identificação das principais oportunidades.",
  },
  {
    title: "Planejamento",
    text: "Definição da estratégia, das ações e das prioridades para o seu momento.",
  },
  {
    title: "Desenvolvimento",
    text: "Criação e execução das soluções contratadas, com você acompanhando de perto.",
  },
  {
    title: "Acompanhamento",
    text: "Avaliação do trabalho e realização de melhorias contínuas.",
  },
]

export function ProcessSection() {
  return (
    <section id="processo" className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary-foreground/70">
            Processo
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
            Como funciona o trabalho
          </h2>
          <p className="mt-5 text-base leading-relaxed text-background/70 text-pretty">
            Um caminho simples e transparente, do primeiro contato ao
            acompanhamento dos resultados.
          </p>
        </div>

        <ol className="mt-14 grid gap-px bg-background/15 md:grid-cols-5">
          {STEPS.map((step, i) => (
            <li key={step.title} className="bg-foreground p-6 md:min-h-56">
              <span className="font-serif text-3xl italic text-background/40">
                {i + 1}
              </span>
              <h3 className="mt-4 font-medium text-background">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/65">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <WhatsAppButton
            label="Quero conversar sobre meu negócio"
            message="Olá, Bárbara! Cheguei pelo site da A Reis Business e gostaria de conversar sobre a presença digital do meu negócio."
          />
        </div>
      </div>
    </section>
  )
}
