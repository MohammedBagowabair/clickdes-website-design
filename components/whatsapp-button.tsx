import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/site.config'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ClickDes on WhatsApp"
      className="group fixed bottom-4 right-4 z-40 flex size-14 items-center justify-center rounded-full bg-forest text-cream shadow-lg shadow-ink/20 transition-transform duration-300 hover:-translate-y-1 hover:bg-terracotta md:bottom-8 md:right-8"
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <MessageCircle className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs text-cream opacity-0 transition-opacity group-hover:opacity-100 md:block">
        WhatsApp us
      </span>
    </a>
  )
}
