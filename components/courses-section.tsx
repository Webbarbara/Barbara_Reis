import { WhatsAppButton } from "@/components/whatsapp-button"
import { Star } from "@/components/doodles"

const PRODUCTS = [
  "Cursos online",
  "Mentorias",
  "E-books",
  "Modelos editáveis",
  "Planilhas",
  "Materiais de planejamento",
]

export function CoursesSection() {
  return (
    <section id="cursos" className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
              Cursos e produtos digitais
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
              Aprenda a divulgar seu negócio com mais{" "}
              <span className="italic text-primary">estratégia</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
              Além dos serviços personalizados, a A Reis Business desenvolve
              cursos e materiais para empreendedores que desejam aprender a
              organizar e aplicar sua própria estratégia de presença digital.
            </p>
            <div className="mt-8">
              <WhatsAppButton
                label="Quero acompanhar os lançamentos"
                message="Olá, Bárbara! Gostaria de ser avisado(a) sobre os próximos cursos e materiais da A Reis Business."
                variant="outline"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              {PRODUCTS.map((product) => (
                <li
                  key={product}
                  className="flex flex-col gap-3 border border-foreground/15 bg-background p-5"
                >
                  <Star className="size-3.5 text-primary" />
                  <span className="font-medium">{product}</span>
                  <span className="text-xs text-muted-foreground">Em breve</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm italic leading-relaxed text-muted-foreground">
              Novidades em breve. Cadastre-se ou entre em contato para
              acompanhar os próximos lançamentos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
