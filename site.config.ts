/**
 * ClickDes — central site configuration.
 * Edit the values below to update contact details, social links,
 * the WhatsApp number, the contact form endpoint and the map embed
 * everywhere on the website at once.
 */
const githubPages = process.env.GITHUB_PAGES === 'true'

export const siteConfig = {
  name: 'ClickDes',
  tagline: 'Luxury Interior Design Studio',
  description:
    'ClickDes is a luxury interior design and interior architecture studio in Mukalla, Yemen, creating refined residential and commercial spaces with colour, craft and calm.',
  url: githubPages
    ? 'https://mohammedbagowabair.github.io/clickdes-website-design'
    : 'https://clickdes.com',

  contact: {
    phone: '+967 783 964 784',
    phoneHref: 'tel:+967783964784',
    email: 'mr.bagowabair@gmail.com',
    emailHref: 'mailto:mr.bagowabair@gmail.com',
    address: 'Al Mukalla, Hadramout, Yemen',
    hours: 'Sat – Thu, 9:00 – 18:00',
  },

  /** International format, digits only — no "+", spaces or dashes. */
  whatsappNumber: '967783964784',
  whatsappMessage: 'Hello ClickDes, I would like to discuss an interior project.',

  social: [
    { label: 'Instagram', href: 'https://instagram.com/clickdes' },
    { label: 'Behance', href: 'https://behance.net/clickdes' },
    { label: 'Pinterest', href: 'https://pinterest.com/clickdes' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/clickdes' },
  ],

  /**
   * Formspree endpoint, e.g. https://formspree.io/f/xxxxxx
   * Leave empty (or keep the placeholder) to send enquiries via email instead.
   */
  formEndpoint: '',

  /** Google Maps → Share → Embed a map → copy the src="" value. */
  mapEmbedUrl: 'https://www.google.com/maps?q=Mukalla,+Yemen&output=embed',
}

export function whatsappLink(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function hasFormEndpoint() {
  const endpoint = siteConfig.formEndpoint.trim()
  return Boolean(endpoint) && !endpoint.includes('your-form-id')
}
