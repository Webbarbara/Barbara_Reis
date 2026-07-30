import { Squiggle } from "@/components/doodles"

const PROBLEMS = [
  "Você publica sem saber qual resultado deseja alcançar",
  "Seu conteúdo não chega às pessoas da sua região",
  "O perfil do negócio não transmite profissionalismo",
  "Você não consegue manter uma rotina de divulgação",
  "As publicações recebem visualizações, mas não geram contatos",
  "Você sente que está sempre improvisando",
]

export function ProblemSection() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
              Seu negócio publica, mas não consegue transformar conteúdo em{" "}
              <span className="italic text-primary-foreground/90">clientes</span>?
              <Squiggle className="mt-2 h-3 w-32 text-primary" />
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-background/15">
              {PROBLEMS.map((item, i) => (
                <li key={item} className="flex items-baseline gap-5 py-4">
                  <span className="font-serif text-sm italic text-background/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-relaxed text-background/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 max-w-3xl font-serif text-xl italic leading-relaxed text-background/85 md:text-2xl text-pretty">
          O problema não é apenas a falta de publicações. É a falta de uma
          estratégia que conecte conteúdo, posicionamento, alcance e vendas.
        </p>
      </div>
    </section>
  )
}
