import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[80svh] max-w-[1440px] flex-col justify-center px-5 pt-32 md:px-10">
      <p className="eyebrow text-terracotta">Error 404</p>
      <h1 className="mt-6 font-serif text-7xl leading-[0.9] md:text-[10rem]">
        Room <em className="text-saffron">not</em> found
      </h1>
      <p className="mt-6 max-w-md text-muted-foreground">
        The page you&apos;re looking for has moved or no longer exists.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex w-fit rounded-full bg-ink px-6 py-3.5 text-sm text-cream transition-colors hover:bg-terracotta"
      >
        Back to home
      </Link>
    </section>
  )
}
