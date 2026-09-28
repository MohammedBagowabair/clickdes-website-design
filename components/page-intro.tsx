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
    <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-44">
      <Reveal>
        <p className="eyebrow text-terracotta">{eyebrow}</p>
        <h1 className="mt-6 text-balance font-serif text-6xl leading-[0.9] tracking-tight md:text-[9rem]">
          {title}
        </h1>
      </Reveal>
      {lead && (
        <Reveal delay={150} className="mt-10 md:ml-auto md:mt-14 md:max-w-md">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{lead}</p>
        </Reveal>
      )}
    </section>
  )
}
