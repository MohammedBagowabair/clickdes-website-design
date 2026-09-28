import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { accentClasses } from '@/lib/projects'
import { services } from '@/lib/services'
import { cn } from '@/lib/utils'

export function ServicesPreview() {
  return (
    <section aria-labelledby="services-title" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-40">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="eyebrow text-terracotta">What we offer</p>
          <h2 id="services-title" className="mt-4 text-balance font-serif text-5xl leading-none md:text-7xl">
            Design with <em className="text-terracotta">purpose</em>
          </h2>
          <p className="mt-6 max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Three disciplines, one studio — every service is led personally from concept to completion.
          </p>
        </Reveal>

        <ul className="md:col-span-7 md:col-start-6">
          {services.map((service, i) => (
            <Reveal as="li" key={service.id} delay={i * 100} className="border-t border-border last:border-b">
              <Link
                href={`/services/#${service.id}`}
                className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 py-8 md:gap-8 md:py-10"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'mt-1 flex size-10 items-center justify-center rounded-full text-xs transition-transform duration-500 group-hover:scale-110 md:size-12',
                    accentClasses[service.accent].bg,
                    accentClasses[service.accent].text,
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="block font-serif text-3xl leading-tight transition-colors group-hover:text-terracotta md:text-5xl">
                    {service.title}
                  </span>
                  <span className="mt-2 block max-w-md text-sm leading-relaxed text-muted-foreground">
                    {service.short}
                  </span>
                </span>
                <ArrowUpRight
                  className="mt-2 size-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
