const DIFFERENTIALS = [
  {
    title: "Estratégias personalizadas",
    text: "Nada de fórmula pronta: cada plano parte da realidade do seu negócio.",
  },
  {
    title: "Conhecimento sobre negócios locais",
    text: "Quem atende em Araruama e região sabe como o cliente local decide.",
  },
  {
    title: "Comunicação clara e acessível",
    text: "Você entende cada etapa do trabalho, sem jargão técnico desnecessário.",
  },
  {
    title: "Atendimento próximo",
    text: "Conversa direta com quem faz, presencialmente ou online.",
  },
  {
    title: "Soluções criativas e profissionais",
    text: "Conteúdo com identidade, não repetição do que todo mundo já publica.",
  },
  {
    title: "Planejamento focado em objetivos",
    text: "Cada ação existe para aproximar seu negócio de uma meta concreta.",
  },
  {
    title: "Integração entre Instagram, Google e WhatsApp",
    text: "Os canais trabalham juntos para transformar alcance em conversa.",
  },
  {
    title: "Serviços adaptados à realidade do cliente",
    text: "Do pontual ao recorrente, o formato se ajusta ao seu momento.",
  },
]

export function DifferentialsSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
              Diferenciais
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
              Por que trabalhar com a{" "}
              <span className="italic text-primary">A Reis Business</span>?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
              Mais do que entregar publicações, o trabalho é construir uma
              presença digital que faz sentido para o seu negócio e para as
              pessoas da sua região.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {DIFFERENTIALS.map((item) => (
                <div key={item.title}>
                  <dt className="flex items-baseline gap-2 font-medium">
                    <span className="text-primary" aria-hidden="true">
                      —
                    </span>
                    {item.title}
                  </dt>
                  <dd className="mt-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
