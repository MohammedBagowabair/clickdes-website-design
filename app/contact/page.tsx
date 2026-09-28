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
  { label: 'Phone', value: siteConfig.contact.phone, href: siteConfig.contact.phoneHref, dot: 'bg-terracotta' },
  { label: 'Email', value: siteConfig.contact.email, href: siteConfig.contact.emailHref, dot: 'bg-saffron' },
  { label: 'WhatsApp', value: siteConfig.contact.phone, href: whatsappLink(), dot: 'bg-forest', external: true },
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

      <section aria-label="Contact details and form" className="mx-auto max-w-[1440px] px-5 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-16 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-4">
            <Reveal>
              <ul className="divide-y divide-border border-y border-border">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-center justify-between gap-4 py-6"
                    >
                      <span>
                        <span className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          <span aria-hidden="true" className={`size-2 rounded-full ${c.dot}`} />
                          {c.label}
                        </span>
                        <span className="mt-2 block font-serif text-2xl transition-colors group-hover:text-terracotta md:text-3xl">
                          {c.value}
                        </span>
                      </span>
                      <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100} className="mt-10 space-y-8">
              <address className="not-italic">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Studio</p>
                <p className="mt-2 leading-relaxed">{siteConfig.contact.address}</p>
                <p className="mt-1 text-sm text-muted-foreground">{siteConfig.contact.hours}</p>
              </address>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Follow</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {siteConfig.social.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-ink hover:bg-ink hover:text-cream"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="md:col-span-7 md:col-start-6">
            <div className="rounded-md bg-sand/70 p-6 md:p-12">
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Start a <em className="text-forest">project</em>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">All fields marked * are required.</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="map-title" className="px-3 pb-3 md:px-5 md:pb-5">
        <h2 id="map-title" className="sr-only">
          Studio location map
        </h2>
        <div className="overflow-hidden rounded-md bg-sand">
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
