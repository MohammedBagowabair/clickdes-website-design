'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'

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
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isActive = (href: string) => pathname.startsWith(href.replace(/\/$/, ''))

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        transparent ? 'bg-transparent text-cream' : 'bg-cream/90 text-ink backdrop-blur-md',
        !transparent && !open && 'border-b border-border/70',
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10">
        <Link href="/" aria-label="ClickDes — home" className="relative z-10">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-9">
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

        <div className="flex items-center gap-3">
          <Link
            href="/contact/"
            className={cn(
              'hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-colors sm:inline-flex',
              transparent
                ? 'bg-cream text-ink hover:bg-saffron'
                : 'bg-terracotta text-cream hover:bg-ink',
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
            className="relative z-10 inline-flex size-11 items-center justify-center rounded-full md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 top-16 flex flex-col justify-between bg-forest px-5 pb-10 pt-8 text-cream transition-[opacity,visibility] duration-500 md:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-2">
            {[{ href: '/', label: 'Home' }, ...navItems].map((item, i) => (
              <li
                key={item.href}
                className={cn('transition-all duration-700', open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0')}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
              >
                <Link href={item.href} className="flex items-baseline gap-4 py-2 font-serif text-5xl">
                  <span className="font-sans text-xs text-saffron">{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/contact/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-6 py-4 text-ink"
        >
          Start a Project
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </header>
  )
}
