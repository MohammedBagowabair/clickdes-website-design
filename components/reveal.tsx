'use client'

import { useEffect, useRef, type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
}

export function Reveal({ children, as: Tag = 'div', delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const show = () => el.classList.add('is-visible')

    // Prefer-reduced-motion: show immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      show()
      return
    }

    // Always reveal eventually — prevents invisible sections if IO never fires
    const fallback = window.setTimeout(show, 900 + delay)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        show()
        observer.disconnect()
        window.clearTimeout(fallback)
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [delay])

  return (
    <Tag
      ref={ref}
      className={cn('reveal', className)}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  )
}
