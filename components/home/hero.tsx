import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink text-cream">
      <Image
        src="/images/hero/hero.webp"
        alt="Colourful living room with terracotta arched walls, a forest green sofa and saffron armchair"
        fill
        preload
        sizes="100vw"
        className="animate-in fade-in zoom-in-105 object-cover duration-[1800ms]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/10 to-ink/70" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-5 pb-8 pt-28 md:px-10 md:pb-12">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <p className="animate-in fade-in slide-in-from-bottom-4 text-sm leading-relaxed text-cream/85 duration-1000 md:col-span-4">
            Luxury interior design studio
            <br />
            Mukalla, Hadramout — since 2016
          </p>
          <p className="animate-in fade-in slide-in-from-bottom-4 max-w-sm text-pretty text-sm leading-relaxed text-cream/85 delay-150 duration-1000 md:col-span-5 md:col-start-8">
            We design homes and commercial spaces with colour, craft and calm — from the first sketch to the final handover.
          </p>
        </div>

        <h1
          id="hero-title"
          className="animate-in fade-in slide-in-from-bottom-8 mt-8 font-serif text-[22vw] leading-[0.8] tracking-tighter delay-300 duration-1000 md:text-[17vw]"
        >
          Click<em className="text-saffron">Des</em>
        </h1>

        <div className="mt-8 flex flex-col gap-4 border-t border-cream/25 pr-16 pt-6 sm:flex-row sm:items-center sm:justify-between sm:pr-20">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/portfolio/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm text-ink transition-colors hover:bg-saffron"
            >
              View Portfolio
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-sm text-cream transition-colors hover:bg-forest"
            >
              Book a Consultation
            </Link>
          </div>
          <a href="#intro" className="hidden items-center gap-2 text-sm text-cream/80 hover:text-cream sm:inline-flex">
            Scroll
            <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
