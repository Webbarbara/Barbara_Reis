import { HandArrow } from "@/components/doodles"

const CONSIDERATIONS = [
  { label: "Segmento", text: "O segmento e a realidade do seu negócio" },
  { label: "Público", text: "As pessoas que você deseja atrair" },
  { label: "Região", text: "A área onde seus clientes realmente estão" },
  { label: "Objetivos", text: "As metas comerciais que importam para você" },
  { label: "Canais", text: "Os canais digitais que fazem sentido usar" },
  { label: "Execução", text: "Sua capacidade real de manter a estratégia" },
]

export function SolutionSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
            A solução
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
            Uma presença digital pensada para o seu negócio ser{" "}
            <span className="italic">encontrado</span>,{" "}
            <span className="italic">lembrado</span> e{" "}
            <span className="italic text-primary">escolhido</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Na A Reis Business, nenhuma estratégia sai pronta da gaveta. Cada
            plano é construído a partir do que o seu negócio é hoje e de onde
            ele quer chegar — para que a comunicação digital deixe de ser uma
            obrigação e vire uma ferramenta de crescimento.
          </p>
        </div>

        <div className="relative mt-14">
          <HandArrow className="absolute -top-10 right-8 hidden h-10 w-20 text-primary lg:block" />
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {CONSIDERATIONS.map((item) => (
              <div key={item.label} className="border-l-2 border-primary/40 pl-5">
                <dt className="font-serif text-base italic text-primary">
                  {item.label}
                </dt>
                <dd className="mt-1 leading-relaxed text-foreground">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
