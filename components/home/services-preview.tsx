import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { accentClasses } from '@/lib/projects'
import { services } from '@/lib/services'
import { cn } from '@/lib/utils'

export function ServicesPreview() {
  return (
    <section
      aria-labelledby="services-title"
      className="mx-auto max-w-[1440px] px-4 py-16 sm:px-5 sm:py-24 md:px-10 md:py-32"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-4">
          <p className="eyebrow text-terracotta">What we offer</p>
          <h2
            id="services-title"
            className="mt-3 text-balance font-serif text-[clamp(2.25rem,8vw,4.5rem)] leading-[0.98]"
          >
            Design with <em className="text-terracotta">purpose</em>
          </h2>
          <p className="mt-5 max-w-sm text-pretty text-base leading-relaxed text-muted-foreground">
            Three disciplines, one studio — every service is led personally from concept to completion.
          </p>
        </Reveal>

        <ul className="md:col-span-7 md:col-start-6">
          {services.map((service, i) => (
            <Reveal as="li" key={service.id} delay={i * 80} className="border-t border-border last:border-b">
              <Link
                href={`/services/#${service.id}`}
                className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 py-6 sm:gap-6 sm:py-8 md:py-10"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'mt-1 flex size-9 items-center justify-center text-[0.7rem] transition-transform duration-500 group-hover:scale-105 sm:size-11',
                    accentClasses[service.accent].bg,
                    accentClasses[service.accent].text,
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0">
                  <span className="block font-serif text-[clamp(1.5rem,5vw,2.75rem)] leading-tight transition-colors group-hover:text-terracotta">
                    {service.title}
                  </span>
                  <span className="mt-2 block max-w-md text-sm leading-relaxed text-muted-foreground">
                    {service.short}
                  </span>
                </span>
                <ArrowUpRight
                  className="mt-1 size-5 shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 sm:mt-2 sm:size-6"
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
