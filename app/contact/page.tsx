import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { PageIntro } from '@/components/page-intro'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { siteConfig, whatsappLink } from '@/site.config'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a consultation with ClickDes, luxury interior design studio in Mukalla. Call, WhatsApp or send us your project details.',
  alternates: { canonical: '/contact/' },
}

const channels = [
  { label: 'Phone', value: siteConfig.contact.phone, href: siteConfig.contact.phoneHref, accent: 'text-terracotta' },
  { label: 'Email', value: siteConfig.contact.email, href: siteConfig.contact.emailHref, accent: 'text-saffron' },
  {
    label: 'WhatsApp',
    value: siteConfig.contact.phone,
    href: whatsappLink(),
    accent: 'text-forest',
    external: true,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <em className="text-terracotta">talk</em>
          </>
        }
        lead="Tell us about your space. We reply to every enquiry within one working day."
      />

      <section
        aria-label="Contact details and form"
        className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-5 sm:pb-24 md:px-10 md:pb-28"
      >
        {/* Mobile: bold contact ribbon — no boxes */}
        <div className="md:hidden">
          <ul className="border-y border-ink">
            {channels.map((c) => (
              <li key={c.label} className="border-b border-ink/15 last:border-b-0">
                <a
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex min-h-20 items-end justify-between gap-3 py-5"
                >
                  <span className="min-w-0">
                    <span className={cnLabel(c.accent)}>{c.label}</span>
                    <span className="mt-1 block break-words font-serif text-[clamp(1.35rem,6vw,1.85rem)] leading-tight">
                      {c.value}
                    </span>
                  </span>
                  <ArrowUpRight className="mb-1 size-5 shrink-0" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <h2 className="font-serif text-3xl leading-tight">
              Start a <em className="text-forest">project</em>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Fields marked * are required.</p>
            <ContactForm />
          </div>

          <address className="mt-12 not-italic text-sm leading-relaxed text-muted-foreground">
            <p className="eyebrow text-ink/70">Studio</p>
            <p className="mt-2 text-foreground">{siteConfig.contact.address}</p>
            <p className="mt-1">{siteConfig.contact.hours}</p>
          </address>
        </div>

        {/* Desktop */}
        <div className="hidden gap-10 md:grid md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Reveal>
              <ul className="divide-y divide-border border-y border-border">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex min-h-16 items-center justify-between gap-3 py-5"
                    >
                      <span className="min-w-0">
                        <span className={cnLabel(c.accent)}>{c.label}</span>
                        <span className="mt-1.5 block break-words font-serif text-2xl leading-snug transition-colors group-hover:text-terracotta md:text-3xl">
                          {c.value}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80} className="mt-8">
              <address className="not-italic">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">Studio</p>
                <p className="mt-2 leading-relaxed">{siteConfig.contact.address}</p>
                <p className="mt-1 text-sm text-muted-foreground">{siteConfig.contact.hours}</p>
              </address>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <h2 className="font-serif text-5xl leading-tight">
              Start a <em className="text-forest">project</em>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">All fields marked * are required.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section aria-labelledby="map-title" className="md:px-5 md:pb-5">
        <h2 id="map-title" className="sr-only">
          Studio location map
        </h2>
        <div className="overflow-hidden bg-sand md:rounded-md">
          <iframe
            src={siteConfig.mapEmbedUrl}
            title={`Map showing ${siteConfig.name} studio in ${siteConfig.contact.address}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block aspect-[4/3] w-full border-0 grayscale-[40%] sepia-[15%] md:aspect-[21/8]"
          />
        </div>
      </section>
    </>
  )
}

function cnLabel(accent: string) {
  return `text-[0.7rem] uppercase tracking-[0.18em] ${accent}`
}
