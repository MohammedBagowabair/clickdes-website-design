import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const stats = [
  { value: '10', suffix: '+', label: 'Years in design', color: 'text-terracotta' },
  { value: '120', suffix: '+', label: 'Completed projects', color: 'text-forest' },
  { value: '98', suffix: '%', label: 'Returning clients', color: 'text-saffron' },
]

export function Intro() {
  return (
    <section id="intro" aria-labelledby="intro-title" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-40">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-2">
          <p className="eyebrow text-terracotta">Intro</p>
        </Reveal>
        <Reveal delay={100} className="md:col-span-9">
          <h2 id="intro-title" className="text-balance font-serif text-4xl leading-[1.05] md:text-7xl">
            We create refined residential and commercial environments where{' '}
            <em className="text-terracotta">colour</em>, <em className="text-forest">craft</em> and{' '}
            <em className="text-saffron">light</em> live in balance.
          </h2>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-5">
          <div className="img-reveal overflow-hidden rounded-sm">
            <Image
              src="/images/studio/atelier.webp"
              alt="Material samples in terracotta, green marble, saffron and blush on the studio table"
              width={1376}
              height={768}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </Reveal>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
              Based in Mukalla, ClickDes is a studio of interior designers and architects. Every project begins with listening — and ends with spaces that feel effortless, personal and made to last.
            </p>
            <Link
              href="/studio/"
              className="group mt-6 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm"
            >
              About the studio
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </Reveal>
          <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-serif text-5xl leading-none md:text-7xl">
                  {s.value}
                  <span className={s.color}>{s.suffix}</span>
                </dd>
                <dd aria-hidden="true" className="mt-3 text-xs text-muted-foreground md:text-sm">
                  {s.label}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
