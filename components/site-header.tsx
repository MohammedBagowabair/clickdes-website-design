'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'
import { siteConfig, whatsappLink } from '@/site.config'

const navItems = [
  { href: '/studio/', label: 'Studio' },
  { href: '/services/', label: 'Services' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/contact/', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const overHero = pathname === '/' || pathname.startsWith('/projects/')
  const transparent = overHero && !scrolled && !open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href.replace(/\/$/, ''))
  }

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
          transparent ? 'bg-transparent text-cream' : 'bg-cream text-ink',
          !transparent && 'border-b border-border/80 shadow-[0_1px_0_rgba(30,26,22,0.04)]',
        )}
      >
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-5 md:h-18 md:h-20 md:px-10">
          <Link href="/" aria-label="ClickDes — home" className="relative z-10 min-w-0 shrink">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className="group relative text-sm tracking-wide"
                  >
                    {item.label}
                    <span
                      className={cn(
                        'absolute -bottom-1 left-0 h-px w-full origin-left bg-current transition-transform duration-500',
                        isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact/"
              className={cn(
                'hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-colors sm:inline-flex',
                transparent ? 'bg-cream text-ink hover:bg-saffron' : 'bg-terracotta text-cream hover:bg-ink',
              )}
            >
              Start a Project
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className={cn(
                'relative z-10 inline-flex size-11 items-center justify-center rounded-full border md:hidden',
                transparent ? 'border-cream/35' : 'border-border',
              )}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Portal-like overlay outside blurred/header stacking so it always covers the viewport */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 z-[60] flex flex-col bg-ink text-cream transition-[opacity,visibility,transform] duration-300 md:hidden',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0 pointer-events-none',
        )}
      >
        <div className="flex h-14 items-center justify-between border-b border-cream/15 px-4">
          <Link href="/" onClick={() => setOpen(false)} aria-label="ClickDes — home">
            <Logo />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex size-11 items-center justify-center rounded-full border border-cream/25"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-8">
          <ul className="flex flex-col">
            {[{ href: '/', label: 'Home' }, ...navItems].map((item, i) => (
              <li key={item.href} className="border-b border-cream/12">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <span className="font-serif text-3xl leading-none tracking-tight sm:text-4xl">{item.label}</span>
                  <span className="font-sans text-[0.7rem] uppercase tracking-[0.18em] text-saffron">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-3 text-sm text-cream/75">
            <a href={siteConfig.contact.phoneHref} className="block hover:text-cream">
              {siteConfig.contact.phone}
            </a>
            <a href={siteConfig.contact.emailHref} className="block break-all hover:text-cream">
              {siteConfig.contact.email}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="block hover:text-cream">
              WhatsApp
            </a>
          </div>
        </nav>

        <div className="border-t border-cream/15 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Link
            href="/contact/"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-saffron px-6 py-4 text-ink"
          >
            Start a Project
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  )
}
