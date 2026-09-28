import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const BASE = '/clickdes-website-design'
const ROOT = new URL('../out/', import.meta.url)

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(path)
      continue
    }
    if (!/\.(html|js|css|txt|json|xml)$/.test(entry.name)) continue
    await rewrite(path)
  }
}

async function rewrite(file) {
  const original = await readFile(file, 'utf8')
  let next = original

  // Prefix root-absolute asset/page URLs that Next left unprefixed.
  next = next.replace(
    /((?:src|href|content|poster)=["'])(\/(?!\/|clickdes-website-design)[^"']*)/g,
    `$1${BASE}$2`,
  )
  next = next.replace(
    /(url\((["']?))(\/(?!\/|clickdes-website-design)[^"')]*\2\))/g,
    `$1${BASE}$3`,
  )
  next = next.replace(
    /("(?:src|href|url)":")(\/(?!\/|clickdes-website-design)[^"]*)/g,
    `$1${BASE}$2`,
  )

  if (next !== original) {
    await writeFile(file, next)
    console.log('rewrote', file.replace(process.cwd() + '/', ''))
  }
}

await walk(ROOT.pathname)
console.log('Pages path rewrite complete')
