import { cn } from '@/lib/utils'

/** Replace this component's contents with the official ClickDes logo (e.g. an <img src="/images/logo/logo.svg" />). */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <span aria-hidden="true" className="flex gap-0.5">
        <span className="h-5 w-1.5 rounded-t-full bg-terracotta" />
        <span className="mt-1.5 h-3.5 w-1.5 rounded-t-full bg-saffron" />
        <span className="mt-0.5 h-4.5 w-1.5 rounded-t-full bg-forest ring-1 ring-cream/40" />
      </span>
      <span className="font-serif text-2xl leading-none tracking-tight">ClickDes</span>
    </span>
  )
}
