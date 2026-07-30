const FAQS = [
  {
    q: "A A Reis Business atende apenas empresas de Araruama?",
    a: "Não. O atendimento pode ser presencial em Araruama e região ou online para clientes de outras localidades.",
  },
  {
    q: "Como sei qual serviço é mais indicado para meu negócio?",
    a: "Durante a conversa inicial, serão analisados o momento, os objetivos e as necessidades da empresa. A partir disso, indico o caminho que faz mais sentido.",
  },
  {
    q: "Os serviços são mensais ou pontuais?",
    a: "Existem serviços recorrentes e serviços pontuais. A indicação depende da necessidade de cada cliente.",
  },
  {
    q: "É possível contratar somente uma consultoria?",
    a: "Sim. A consultoria é indicada para quem deseja receber direcionamento e executar as ações por conta própria.",
  },
  {
    q: "A A Reis Business também cria artes e vídeos?",
    a: "Sim. A criação de artes e a edição de vídeos estão entre os serviços oferecidos.",
  },
  {
    q: "Como solicitar um orçamento?",
    a: "Basta clicar em um dos botões de WhatsApp disponíveis no site e enviar as informações sobre o negócio, ou preencher o formulário na seção de contato.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
              Perguntas frequentes
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
              O que costumam me perguntar antes de{" "}
              <span className="italic text-primary">começar</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="divide-y divide-border border-y border-border">
              {FAQS.map((faq) => (
                <details key={faq.q} className="group py-1">
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-4 font-serif text-lg font-medium [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span
                      className="shrink-0 text-primary transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-5 pr-8 leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
