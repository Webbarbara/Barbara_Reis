import { whatsappLink } from "@/lib/site"
import { WhatsAppIcon } from "@/components/whatsapp-button"

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(
        "Olá, Bárbara! Vim pelo site da A Reis Business e gostaria de conversar.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      aria-label="Falar com a Bárbara no WhatsApp"
    >
      <WhatsAppIcon className="size-6" />
    </a>
  )
}
