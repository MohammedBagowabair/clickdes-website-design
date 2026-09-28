import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { assetPath } from '@/lib/asset'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink text-cream"
    >
      <Image
        src={assetPath('/images/hero/hero.webp')}
        alt="Colourful living room with terracotta arched walls, a forest green sofa and saffron armchair"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center] sm:object-center"
      />
      {/* Stronger mobile overlay for readable type over busy photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25 sm:via-ink/25 sm:to-ink/40"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-4 pb-6 pt-24 sm:px-5 sm:pb-10 md:px-10 md:pb-12">
        <p className="eyebrow text-saffron">Mukalla · Hadramout · Since 2016</p>

        <h1
          id="hero-title"
          className="mt-4 max-w-[10ch] font-serif text-[clamp(3.25rem,14vw,9rem)] leading-[0.88] tracking-tight md:mt-6 md:max-w-none"
        >
          Click<em className="text-saffron">Des</em>
        </h1>

        <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-cream/90 sm:mt-5 sm:text-lg">
          Luxury interiors with colour, craft and calm — from first sketch to final handover.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:max-w-xl sm:flex-row sm:items-center">
          <Link
            href="/portfolio/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-saffron"
          >
            View Portfolio
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-forest"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
