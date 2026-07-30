import Image from "next/image"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SITE } from "@/lib/site"

export function AboutSection() {
  return (
    <section id="sobre" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative lg:col-span-5">
            <div className="absolute -left-3 -top-3 h-full w-full border border-primary/40" aria-hidden="true" />
            <Image
              src="/images/barbara-retrato.png"
              alt="Bárbara Reis, fundadora da A Reis Business, em seu espaço de trabalho"
              width={640}
              height={800}
              className="relative w-full object-cover"
            />
            <p className="relative mt-3 font-serif text-sm italic text-muted-foreground">
              Bárbara Reis — {SITE.location}
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
              Quem está por trás
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
              Estratégia e <span className="italic text-primary">criatividade</span>{" "}
              para fortalecer negócios locais
            </h2>

            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Sou Bárbara Reis, profissional responsável pela A Reis Business.
                Meu trabalho é ajudar negócios locais a organizarem sua presença
                digital e utilizarem seus canais de comunicação de maneira mais
                estratégica.
              </p>
              <p>
                Acredito que estar nas redes sociais não é suficiente. É preciso
                ter clareza sobre o que comunicar, para quem comunicar e qual
                próximo passo o potencial cliente deve realizar.
              </p>
              <p>
                Por isso, desenvolvo estratégias, conteúdos e soluções que
                respeitam a realidade de cada negócio e aproximam a empresa das
                pessoas da sua região.
              </p>
            </div>

            <div className="mt-8">
              <WhatsAppButton label="Falar com a Bárbara no WhatsApp" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
