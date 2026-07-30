"use client"

import { useState } from "react"
import { SITE, whatsappLink } from "@/lib/site"
import { WhatsAppButton } from "@/components/whatsapp-button"

const SERVICES_OPTIONS = [
  "Gestão de redes sociais",
  "Planejamento estratégico",
  "Criação de conteúdo",
  "Produção de artes",
  "Edição de vídeos",
  "Consultoria de Instagram",
  "Auditoria de perfil",
  "Planejamento editorial",
  "Gestão de tráfego pago",
  "Mentoria",
  "Criação de identidade visual",
  "Perfil da Empresa no Google",
  "Ainda não sei",
]

const inputClass =
  "w-full border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/60"

const labelClass = "mb-1.5 block text-sm font-medium"

interface FormData {
  nome: string
  empresa: string
  cidade: string
  whatsapp: string
  instagram: string
  segmento: string
  servico: string
  dificuldade: string
  objetivo: string
  mensagem: string
}

const EMPTY: FormData = {
  nome: "",
  empresa: "",
  cidade: "",
  whatsapp: "",
  instagram: "",
  segmento: "",
  servico: "",
  dificuldade: "",
  objetivo: "",
  mensagem: "",
}

export function ContactSection() {
  const [data, setData] = useState<FormData>(EMPTY)
  const [sent, setSent] = useState(false)

  const update =
    (field: keyof FormData) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) =>
      setData((d) => ({ ...d, [field]: e.target.value }))

  function buildWhatsAppMessage() {
    const lines = [
      "Olá, Bárbara! Enviei um pedido de orçamento pelo site.",
      `Nome: ${data.nome}`,
      data.empresa && `Empresa: ${data.empresa}`,
      data.cidade && `Cidade: ${data.cidade}`,
      data.instagram && `Instagram: ${data.instagram}`,
      data.segmento && `Segmento: ${data.segmento}`,
      data.servico && `Serviço de interesse: ${data.servico}`,
      data.dificuldade && `Principal dificuldade: ${data.dificuldade}`,
      data.objetivo && `Objetivo: ${data.objetivo}`,
      data.mensagem && `Mensagem: ${data.mensagem}`,
    ].filter(Boolean)
    return lines.join("\n")
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contato">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
              Contato
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
              Solicite um <span className="italic text-primary">orçamento</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
              Conte um pouco sobre o seu negócio. Quanto mais detalhes você
              compartilhar, mais direcionada será a nossa conversa.
            </p>

            <dl className="mt-8 flex flex-col gap-3 text-sm">
              <div>
                <dt className="font-medium">WhatsApp</dt>
                <dd className="text-muted-foreground">{SITE.phoneDisplay}</dd>
              </div>
              <div>
                <dt className="font-medium">E-mail</dt>
                <dd className="text-muted-foreground">{SITE.email}</dd>
              </div>
              <div>
                <dt className="font-medium">Instagram</dt>
                <dd>
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {SITE.instagram}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium">Localização</dt>
                <dd className="text-muted-foreground">
                  {SITE.location} — {SITE.attendance.toLowerCase()}
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {sent ? (
              <div className="flex flex-col items-start gap-5 border border-primary/40 bg-secondary/50 p-8">
                <h3 className="font-serif text-2xl font-semibold">
                  Recebido! Obrigada pelo contato.
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Para agilizar o atendimento, você pode continuar a conversa
                  agora mesmo pelo WhatsApp com as informações que preencheu.
                </p>
                <WhatsAppButton
                  label="Continuar pelo WhatsApp"
                  message={buildWhatsAppMessage()}
                />
                <button
                  type="button"
                  onClick={() => {
                    setData(EMPTY)
                    setSent(false)
                  }}
                  className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                >
                  Enviar outra solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className={labelClass}>
                    Nome*
                  </label>
                  <input
                    id="nome"
                    required
                    value={data.nome}
                    onChange={update("nome")}
                    className={inputClass}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className={labelClass}>
                    Nome da empresa
                  </label>
                  <input
                    id="empresa"
                    value={data.empresa}
                    onChange={update("empresa")}
                    className={inputClass}
                    autoComplete="organization"
                  />
                </div>
                <div>
                  <label htmlFor="cidade" className={labelClass}>
                    Cidade
                  </label>
                  <input
                    id="cidade"
                    value={data.cidade}
                    onChange={update("cidade")}
                    className={inputClass}
                    autoComplete="address-level2"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className={labelClass}>
                    WhatsApp*
                  </label>
                  <input
                    id="whatsapp"
                    required
                    type="tel"
                    value={data.whatsapp}
                    onChange={update("whatsapp")}
                    className={inputClass}
                    placeholder="(21) 90000-0000"
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label htmlFor="instagram" className={labelClass}>
                    Instagram
                  </label>
                  <input
                    id="instagram"
                    value={data.instagram}
                    onChange={update("instagram")}
                    className={inputClass}
                    placeholder="@seunegocio"
                  />
                </div>
                <div>
                  <label htmlFor="segmento" className={labelClass}>
                    Segmento do negócio
                  </label>
                  <input
                    id="segmento"
                    value={data.segmento}
                    onChange={update("segmento")}
                    className={inputClass}
                    placeholder="Ex.: restaurante, clínica, loja"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="servico" className={labelClass}>
                    Serviço de interesse
                  </label>
                  <select
                    id="servico"
                    value={data.servico}
                    onChange={update("servico")}
                    className={inputClass}
                  >
                    <option value="">Selecione uma opção</option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="dificuldade" className={labelClass}>
                    Principal dificuldade atual
                  </label>
                  <input
                    id="dificuldade"
                    value={data.dificuldade}
                    onChange={update("dificuldade")}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="objetivo" className={labelClass}>
                    Objetivo com a presença digital
                  </label>
                  <input
                    id="objetivo"
                    value={data.objetivo}
                    onChange={update("objetivo")}
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="mensagem" className={labelClass}>
                    Mensagem adicional
                  </label>
                  <textarea
                    id="mensagem"
                    rows={4}
                    value={data.mensagem}
                    onChange={update("mensagem")}
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    Enviar solicitação
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
