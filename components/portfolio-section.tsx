const PLACEHOLDER_LABELS = [
  "Artes e identidades visuais",
  "Perfis organizados",
  "Vídeos e campanhas",
  "Depoimentos e resultados",
]

export function PortfolioSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
              Portfólio
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
              Projetos e resultados
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Este espaço reunirá artes, perfis, planejamentos, antes e depois,
            métricas e depoimentos de clientes.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {PLACEHOLDER_LABELS.map((label, i) => (
            <div
              key={label}
              className={
                i === 0
                  ? "flex aspect-[4/3] flex-col justify-between border border-dashed border-border bg-secondary/40 p-6 lg:col-span-6 lg:aspect-auto"
                  : "flex aspect-[4/3] flex-col justify-between border border-dashed border-border bg-secondary/40 p-6 lg:col-span-3 lg:aspect-[3/4]"
              }
            >
              <span className="font-serif text-sm italic text-muted-foreground">
                {label}
              </span>
              <span className="text-sm text-muted-foreground">
                Novos projetos serão apresentados em breve.
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
