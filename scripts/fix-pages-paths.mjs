import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const BASE = '/clickdes-website-design'
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'out')

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(path)
      continue
    }
    if (!/\.(html|js|css|txt|json|xml|map)$/.test(entry.name)) continue
    await rewrite(path)
  }
}

function prefixPath(path) {
  if (!path.startsWith('/')) return path
  if (path.startsWith('//')) return path
  if (path === BASE || path.startsWith(`${BASE}/`)) return path
  return `${BASE}${path}`
}

async function rewrite(file) {
  const original = await readFile(file, 'utf8')
  let next = original

  // HTML attributes: src="/...", href="/..."
  next = next.replace(
    /((?:src|href|content|poster|srcSet)=["'])(\/(?!\/|clickdes-website-design)[^"']*)/g,
    (_, attr, path) => `${attr}${prefixPath(path)}`,
  )

  // CSS url(/...)
  next = next.replace(/(url\((["']?))(\/(?!\/|clickdes-website-design)[^"')]+)(\2\))/g, (_, a, q, path, b) => {
    return `${a}${prefixPath(path)}${b}`
  })

  // Minified JS object fields: src:"/images/..."
  next = next.replace(
    /(\b(?:src|href|url|image|coverImage)\s*:\s*")(\/(?!\/|clickdes-website-design)[^"]*)(")/g,
    (_, a, path, b) => `${a}${prefixPath(path)}${b}`,
  )

  // JSON-style "src":"/..."
  next = next.replace(
    /("(?:src|href|url)"\s*:\s*")(\/(?!\/|clickdes-website-design)[^"]*)(")/g,
    (_, a, path, b) => `${a}${prefixPath(path)}${b}`,
  )

  // Bare public asset string literals left in bundles
  next = next.replace(
    /(["'])(\/(?:images|icon|apple-icon|favicon|_next)\/(?!\/)[^"']*)\1/g,
    (_, q, path) => `${q}${prefixPath(path)}${q}`,
  )

  // Escaped RSC sequences — only when not already base-prefixed
  next = next.replace(
    /(?<!\\\/clickdes-website-design)\\\/images\\\//g,
    `\\${BASE}\\/images\\/`,
  )
  next = next.replace(
    /(?<!\\\/clickdes-website-design)\\\/icon\.svg/g,
    `\\${BASE}\\/icon.svg`,
  )
  next = next.replace(
    /(?<!\\\/clickdes-website-design)\\\/icon-light/g,
    `\\${BASE}\\/icon-light`,
  )
  next = next.replace(
    /(?<!\\\/clickdes-website-design)\\\/apple-icon/g,
    `\\${BASE}\\/apple-icon`,
  )

  if (next !== original) {
    await writeFile(file, next)
    console.log('rewrote', file.replace(process.cwd() + '/', ''))
  }
}

await walk(ROOT)
console.log('Pages path rewrite complete')
