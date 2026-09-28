import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { PageIntro } from '@/components/page-intro'
import { Reveal } from '@/components/reveal'
import { CtaSection } from '@/components/cta-section'
import { accentClasses } from '@/lib/projects'
import { services } from '@/lib/services'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Residential interior design, commercial interior design and interior architecture by ClickDes — a luxury design studio in Mukalla, Yemen.',
  alternates: { canonical: '/services/' },
}

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title={
          <>
            Spaces, <em className="text-forest">considered</em>
          </>
        }
        lead="Whether it is a family villa, a café or a complete renovation, we guide you through every decision with care and clarity."
      />

      <div className="mx-auto max-w-[1440px] space-y-24 px-5 pb-24 md:space-y-40 md:px-10 md:pb-40">
        {services.map((service, i) => {
          const reversed = i % 2 === 1
          const accent = accentClasses[service.accent]
          return (
            <section
              key={service.id}
              id={service.id}
              aria-labelledby={`${service.id}-title`}
              className="grid scroll-mt-28 gap-10 md:grid-cols-12 md:gap-6"
            >
              <Reveal className={cn('md:col-span-6', reversed && 'md:order-2 md:col-start-7')}>
                <div className="img-reveal relative overflow-hidden rounded-sm bg-sand">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={service.image.width}
                    height={service.image.height}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-[4/5] h-auto w-full object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className={cn('absolute bottom-0 left-0 h-3 w-1/3', accent.bg)}
                  />
                </div>
              </Reveal>
              <div className={cn('flex flex-col justify-center md:col-span-5', reversed ? 'md:order-1' : 'md:col-start-8')}>
                <Reveal>
                  <span
                    className={cn('inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em]', accent.bg, accent.text)}
                  >
                    {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                  </span>
                  <h2 id={`${service.id}-title`} className="mt-6 text-balance font-serif text-5xl leading-[0.95] md:text-7xl">
                    {service.title}
                  </h2>
                  <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
                  <h3 className="eyebrow mt-10 text-ink">What&apos;s included</h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-terracotta" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact/"
                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm text-cream transition-colors hover:bg-terracotta"
                  >
                    Discuss your project
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </Reveal>
              </div>
            </section>
          )
        })}
      </div>

      <CtaSection title="Not sure where to begin? Let’s talk it through." />
    </>
  )
}
