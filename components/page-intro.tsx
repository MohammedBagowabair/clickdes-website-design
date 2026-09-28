import { Reveal } from '@/components/reveal'

export function PageIntro({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string
  title: React.ReactNode
  lead?: string
}) {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pb-10 pt-24 sm:px-5 sm:pb-14 sm:pt-28 md:px-10 md:pb-20 md:pt-40">
      <Reveal>
        <p className="eyebrow text-terracotta">{eyebrow}</p>
        <h1 className="mt-4 text-balance font-serif text-[clamp(2.75rem,12vw,8rem)] leading-[0.92] tracking-tight md:mt-6">
          {title}
        </h1>
      </Reveal>
      {lead && (
        <Reveal delay={100} className="mt-6 max-w-xl md:ml-auto md:mt-10 md:max-w-md">
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{lead}</p>
        </Reveal>
      )}
    </section>
  )
}
