'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Loader2 } from 'lucide-react'
import { hasFormEndpoint, siteConfig } from '@/site.config'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const projectTypes = [
  'Residential interior design',
  'Commercial interior design',
  'Interior architecture',
  'Furniture & styling',
  'Other',
]

const fieldClass =
  'mt-2 w-full appearance-none rounded-none border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-terracotta'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const useFormspree = hasFormEndpoint()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (!useFormspree) {
      const name = String(data.get('name') || '').trim()
      const email = String(data.get('email') || '').trim()
      const phone = String(data.get('phone') || '').trim()
      const projectType = String(data.get('projectType') || '').trim()
      const message = String(data.get('message') || '').trim()
      const subject = encodeURIComponent(`ClickDes enquiry — ${projectType} — ${name}`)
      const body = encodeURIComponent(
        [
          `Name: ${name}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : null,
          `Project type: ${projectType}`,
          '',
          message,
        ]
          .filter(Boolean)
          .join('\n'),
      )
      window.location.href = `${siteConfig.contact.emailHref}?subject=${subject}&body=${body}`
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(siteConfig.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      action={useFormspree ? siteConfig.formEndpoint : undefined}
      method={useFormspree ? 'POST' : undefined}
      onSubmit={handleSubmit}
      className="mt-10 grid gap-8 sm:grid-cols-2"
    >
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <label className="block text-sm">
        Name *
        <input name="name" required autoComplete="name" placeholder="Your full name" className={fieldClass} />
      </label>
      <label className="block text-sm">
        Email *
        <input type="email" name="email" required autoComplete="email" placeholder="you@example.com" className={fieldClass} />
      </label>
      <label className="block text-sm">
        Phone
        <input type="tel" name="phone" autoComplete="tel" placeholder="+967 …" className={fieldClass} />
      </label>
      <label className="block text-sm">
        Project type *
        <select name="projectType" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a type
          </option>
          {projectTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm sm:col-span-2">
        Message *
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your space, timing and budget…"
          className={`${fieldClass} resize-y`}
        />
      </label>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-ink px-7 py-4 text-sm text-cream transition-colors hover:bg-terracotta disabled:opacity-60 sm:w-auto"
        >
          {status === 'sending' ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send enquiry
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </>
          )}
        </button>
        <p role="status" aria-live="polite" className="text-sm">
          {status === 'sent' && !useFormspree && (
            <span className="text-forest">Your email app should open with the enquiry ready to send.</span>
          )}
          {status === 'sent' && useFormspree && <span className="text-forest">Thank you — we&apos;ll be in touch shortly.</span>}
          {status === 'error' && (
            <span className="text-terracotta">Something went wrong. Please call or message us on WhatsApp instead.</span>
          )}
        </p>
      </div>
    </form>
  )
}
