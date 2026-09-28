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

      <div className="space-y-0 pb-16 md:mx-auto md:max-w-[1440px] md:space-y-32 md:px-10 md:pb-32">
        {services.map((service, i) => {
          const reversed = i % 2 === 1
          const accent = accentClasses[service.accent]
          return (
            <section
              key={service.id}
              id={service.id}
              aria-labelledby={`${service.id}-title`}
              className="scroll-mt-24 md:grid md:grid-cols-12 md:gap-6"
            >
              {/* Mobile: edge-to-edge photo band */}
              <div className="relative aspect-[5/4] overflow-hidden bg-sand md:hidden">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <span aria-hidden="true" className={cn('absolute bottom-0 left-0 h-1.5 w-1/3', accent.bg)} />
              </div>

              <Reveal className={cn('hidden md:col-span-6 md:block', reversed && 'md:order-2 md:col-start-7')}>
                <div className="img-reveal relative overflow-hidden bg-sand">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={service.image.width}
                    height={service.image.height}
                    sizes="50vw"
                    className="aspect-[4/5] h-auto w-full object-cover"
                  />
                  <span aria-hidden="true" className={cn('absolute bottom-0 left-0 h-3 w-1/3', accent.bg)} />
                </div>
              </Reveal>

              <div
                className={cn(
                  'flex flex-col justify-center px-4 py-10 sm:px-5 md:col-span-5 md:px-0 md:py-0',
                  reversed ? 'md:order-1' : 'md:col-start-8',
                )}
              >
                <Reveal>
                  <span className={cn('eyebrow', accent.text.replace('text-', 'text-') || 'text-terracotta')}>
                    {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                  </span>
                  <h2
                    id={`${service.id}-title`}
                    className="mt-4 text-balance font-serif text-[clamp(2.25rem,9vw,4.5rem)] leading-[0.95] md:mt-6 md:text-7xl"
                  >
                    {service.title}
                  </h2>
                  <p className="mt-5 text-pretty leading-relaxed text-muted-foreground md:mt-6">
                    {service.description}
                  </p>
                  <h3 className="eyebrow mt-8 text-ink md:mt-10">What&apos;s included</h3>
                  <ul className="mt-4 grid gap-3 border-t border-border pt-4">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 border-b border-border/70 py-3 text-sm last:border-0">
                        <Check className="mt-0.5 size-4 shrink-0 text-terracotta" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact/"
                    className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-6 py-3.5 text-sm text-cream transition-colors hover:bg-terracotta md:mt-10 md:justify-start"
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
