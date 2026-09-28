import type { Metadata } from 'next'
import Image from 'next/image'
import { PageIntro } from '@/components/page-intro'
import { Reveal } from '@/components/reveal'
import { CtaSection } from '@/components/cta-section'
import { assetPath } from '@/lib/asset'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Studio',
  description:
    'Meet ClickDes — a luxury interior design studio in Mukalla led by designers who believe in colour, craft and calm. Discover our philosophy and design process.',
  alternates: { canonical: '/studio/' },
}

const philosophy = [
  { title: 'Colour as architecture', text: 'We use colour to shape space — to warm, to calm, to guide the eye through a room.', tone: 'bg-terracotta text-cream' },
  { title: 'Rooted in place', text: 'Clay, stone and arches of Hadramout inform a contemporary, timeless language.', tone: 'bg-forest text-cream' },
  { title: 'Crafted by hand', text: 'Custom joinery, local artisans and honest materials that age beautifully.', tone: 'bg-saffron text-ink' },
  { title: 'Light first', text: 'Every layout begins with how daylight moves through the home across the day.', tone: 'bg-blush text-ink' },
]

const process = [
  { step: 'Discovery', text: 'A first conversation and site visit to understand how you live, work and dream.' },
  { step: 'Concept', text: 'Mood, palette and spatial ideas presented as a clear, inspiring direction.' },
  { step: 'Design development', text: 'Detailed layouts, 3D visualisation, materials and bespoke furniture.' },
  { step: 'Technical drawings', text: 'Precise documentation so every contractor builds exactly what was designed.' },
  { step: 'Execution', text: 'On-site supervision, procurement and coordination with trusted craftsmen.' },
  { step: 'Handover & styling', text: 'Final styling and a calm handover of a space that is ready to live in.' },
]

export default function StudioPage() {
  return (
    <>
      <PageIntro
        eyebrow="The studio"
        title={
          <>
            Designing with <em className="text-terracotta">heart</em>
          </>
        }
        lead="ClickDes was founded in Mukalla with a simple belief: a beautiful space can change the way you feel every single day."
      />

      <section aria-labelledby="founder-title" className="mx-auto max-w-[1440px] px-5 pb-24 md:px-10 md:pb-40">
        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-5">
            <div className="img-reveal overflow-hidden rounded-sm bg-sand">
              <Image
                src={assetPath('/images/studio/founder.webp')}
                alt="Portrait of the ClickDes founder in a sand linen blazer against a terracotta wall"
                width={768}
                height={1376}
                sizes="(min-width: 768px) 40vw, 100vw"
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="flex flex-col justify-end md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="eyebrow text-terracotta">01 — Founder & creative director</p>
              <h2 id="founder-title" className="mt-4 font-serif text-6xl leading-[0.9] md:text-8xl">
                Omar
                <br />
                Ba&apos;alawi
              </h2>
              <div className="mt-8 max-w-md space-y-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  Trained in interior architecture and shaped by a decade of residential and hospitality work, Omar leads every ClickDes project personally.
                </p>
                <p>
                  His approach blends the warmth of Hadramout&apos;s heritage — clay, arches, courtyards — with the clarity of contemporary design.
                </p>
              </div>
              <blockquote className="mt-10 border-l-2 border-saffron pl-5 font-serif text-2xl italic leading-snug md:text-3xl">
                “A home should hold you like the late afternoon light.”
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="philosophy-title" className="bg-ink py-24 text-cream md:py-36">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <Reveal>
            <p className="eyebrow text-saffron">Philosophy</p>
            <h2 id="philosophy-title" className="mt-4 max-w-3xl text-balance font-serif text-5xl leading-none md:text-7xl">
              What guides every <em className="text-blush">space</em> we shape
            </h2>
          </Reveal>
          <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 100}>
                <div className={cn('flex h-full min-h-72 flex-col justify-between rounded-md p-7', item.tone)}>
                  <span className="font-serif text-5xl leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-serif text-3xl leading-tight">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed opacity-85">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="process-title" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-40">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <p className="eyebrow text-terracotta">Design process</p>
              <h2 id="process-title" className="mt-4 text-balance font-serif text-5xl leading-none md:text-7xl">
                Six steps, <em className="text-forest">one</em> vision
              </h2>
              <p className="mt-6 max-w-sm text-pretty leading-relaxed text-muted-foreground">
                A clear, transparent process — so you always know what happens next.
              </p>
            </div>
          </Reveal>
          <ol className="md:col-span-7 md:col-start-6">
            {process.map((item, i) => (
              <Reveal as="li" key={item.step} className="grid grid-cols-[4rem_1fr] gap-4 border-t border-border py-8 md:grid-cols-[6rem_1fr] md:py-10">
                <span className="font-serif text-4xl leading-none text-terracotta md:text-5xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-3xl leading-tight md:text-4xl">{item.step}</h3>
                  <p className="mt-2 max-w-md text-pretty leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
