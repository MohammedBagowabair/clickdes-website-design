import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { whatsappLink } from '@/site.config'

export function CtaSection({
  title = 'Let’s shape a space that feels like yours.',
}: {
  title?: string
}) {
  return (
    <section aria-labelledby="cta-title" className="md:px-5 md:pb-5">
      {/* Full-bleed band on mobile — not a floating card */}
      <div className="relative overflow-hidden bg-terracotta px-4 py-14 text-cream sm:px-8 sm:py-20 md:rounded-md md:px-16 md:py-28">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 size-48 rounded-full bg-saffron/80 sm:size-72 md:-right-10 md:-top-10 md:size-96"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-28 right-[15%] h-56 w-40 rounded-t-full bg-blush/30 md:h-80 md:w-72"
        />
        <Reveal className="relative max-w-4xl">
          <p className="eyebrow text-blush">Start a project</p>
          <h2
            id="cta-title"
            className="mt-4 text-balance font-serif text-[clamp(2rem,8vw,5.5rem)] leading-[0.98]"
          >
            {title}
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <Link
              href="/contact/"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-cream px-7 py-4 text-ink transition-colors hover:bg-saffron"
            >
              Book a consultation
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-cream/60 px-7 py-4 transition-colors hover:bg-cream hover:text-ink"
            >
              Message on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
