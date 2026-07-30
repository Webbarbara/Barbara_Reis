import { WhatsAppButton } from "@/components/whatsapp-button"
import { Star } from "@/components/doodles"

const SERVICES = [
  {
    title: "Gestão de redes sociais",
    text: "Planejamento, criação, organização e acompanhamento da presença digital da sua empresa, do começo ao fim.",
    featured: true,
  },
  {
    title: "Planejamento estratégico",
    text: "Definição de objetivos, público, posicionamento, diferenciais, mensagens e ações de divulgação.",
    featured: true,
  },
  {
    title: "Criação de conteúdo",
    text: "Conteúdos estratégicos para informar, gerar conexão, construir autoridade e apresentar ofertas.",
  },
  {
    title: "Produção de artes",
    text: "Peças visuais profissionais e alinhadas à identidade do seu negócio.",
  },
  {
    title: "Edição de vídeos",
    text: "Vídeos curtos e dinâmicos para redes sociais, campanhas e divulgação de serviços.",
  },
  {
    title: "Consultoria de Instagram",
    text: "Orientação personalizada para melhorar perfil, comunicação, conteúdo e estratégia.",
  },
  {
    title: "Auditoria de perfil",
    text: "Análise completa do perfil, identificando erros, oportunidades e melhorias prioritárias.",
  },
  {
    title: "Planejamento editorial",
    text: "Organização de temas, formatos, objetivos e calendário de conteúdos.",
  },
  {
    title: "Gestão de tráfego pago",
    text: "Planejamento e acompanhamento de campanhas para ampliar alcance e atrair potenciais clientes.",
  },
  {
    title: "Mentoria",
    text: "Acompanhamento estratégico para quem quer aprender a executar a própria presença digital.",
  },
  {
    title: "Criação de identidade visual",
    text: "Comunicação visual profissional, coerente e reconhecível para a sua marca.",
  },
  {
    title: "Perfil da Empresa no Google",
    text: "Configuração e otimização para aumentar a visibilidade do seu negócio nas buscas locais.",
  },
]

const SERVICE_MESSAGE =
  "Olá, Bárbara! Conheci a A Reis Business pelo site e gostaria de saber qual serviço é mais indicado para o meu negócio."

export function ServicesSection() {
  const featured = SERVICES.filter((s) => s.featured)
  const rest = SERVICES.filter((s) => !s.featured)

  return (
    <section id="servicos" className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
              Serviços
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
              Tudo o que seu negócio precisa para se posicionar{" "}
              <span className="italic text-primary">de verdade</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Serviços contratados de forma pontual ou recorrente, de acordo com o
            momento de cada negócio.
          </p>
        </div>

        {/* Dois serviços em destaque, com layout maior */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {featured.map((service) => (
            <article
              key={service.title}
              className="relative border border-foreground/15 bg-background p-8"
            >
              <Star className="absolute right-6 top-6 size-4 text-primary" />
              <h3 className="font-serif text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                {service.text}
              </p>
            </article>
          ))}
        </div>

        {/* Demais serviços em lista compacta */}
        <ul className="mt-5 grid border-t border-foreground/15 sm:grid-cols-2">
          {rest.map((service) => (
            <li
              key={service.title}
              className="border-b border-foreground/15 py-5 sm:odd:pr-8 sm:even:pl-8"
            >
              <h3 className="font-medium">{service.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {service.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <WhatsAppButton
            label="Quero encontrar o serviço ideal para meu negócio"
            message={SERVICE_MESSAGE}
          />
        </div>
      </div>
    </section>
  )
}
