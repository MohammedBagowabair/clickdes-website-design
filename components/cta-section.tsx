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
    <section aria-labelledby="cta-title" className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="relative overflow-hidden rounded-md bg-terracotta px-5 py-20 text-cream md:px-16 md:py-32">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 size-72 rounded-full bg-saffron/90 md:-right-10 md:-top-10 md:size-96"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-40 right-1/4 h-80 w-56 rounded-t-full bg-blush/40 md:w-72"
        />
        <Reveal className="relative max-w-4xl">
          <p className="eyebrow text-blush">Start a project</p>
          <h2 id="cta-title" className="mt-6 text-balance font-serif text-5xl leading-[0.95] md:text-8xl">
            {title}
          </h2>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-4 text-ink transition-colors hover:bg-saffron"
            >
              Book a consultation
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/60 px-7 py-4 transition-colors hover:bg-cream hover:text-ink"
            >
              Message on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
