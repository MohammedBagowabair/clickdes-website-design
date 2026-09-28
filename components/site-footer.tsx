import Link from 'next/link'
import { siteConfig, whatsappLink } from '@/site.config'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-cream pb-[4.5rem] md:pb-0">
      <div className="mx-auto max-w-[1440px] px-4 pb-10 pt-14 sm:px-5 sm:pt-20 md:px-10 md:pt-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-6">
            <p className="eyebrow text-saffron">Mukalla · Hadramout</p>
            <p className="mt-4 max-w-lg text-balance font-serif text-[clamp(1.75rem,6vw,3rem)] leading-tight">
              Spaces with <em className="text-blush">character</em>, composed with calm.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-10 md:col-span-6 md:grid-cols-3">
            <div>
              <h2 className="eyebrow text-cream/60">Explore</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link className="hover:text-saffron" href="/studio/">
                    Studio
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-saffron" href="/services/">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-saffron" href="/portfolio/">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-saffron" href="/contact/">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="eyebrow text-cream/60">Follow</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {siteConfig.social.map((s) => (
                  <li key={s.label}>
                    <a className="hover:text-saffron" href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h2 className="eyebrow text-cream/60">Contact</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a className="hover:text-saffron" href={siteConfig.contact.phoneHref}>
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <a className="break-all hover:text-saffron" href={siteConfig.contact.emailHref}>
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <a className="hover:text-saffron" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-12 select-none font-serif text-[18vw] leading-[0.8] tracking-tighter text-cream/[0.06] sm:mt-16 md:text-[14vw]"
        >
          ClickDes
        </p>

        <div className="mt-4 flex flex-col gap-2 border-t border-cream/15 pt-5 text-xs text-cream/60 sm:flex-row sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.contact.address}</p>
        </div>
      </div>
    </footer>
  )
}
