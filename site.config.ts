/**
 * ClickDes — central site configuration.
 * Edit the values below to update contact details, social links,
 * the WhatsApp number, the contact form endpoint and the map embed
 * everywhere on the website at once.
 */
export const siteConfig = {
  name: 'ClickDes',
  tagline: 'Luxury Interior Design Studio',
  description:
    'ClickDes is a luxury interior design and interior architecture studio in Mukalla, Yemen, creating refined residential and commercial spaces with colour, craft and calm.',
  url: 'https://clickdes.com',

  contact: {
    phone: '+967 783 964 784',
    phoneHref: 'tel:+967783964784',
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

  /** Create a free form at https://formspree.io and paste its endpoint here. */
  formEndpoint: 'https://formspree.io/f/your-form-id',

  /** Google Maps → Share → Embed a map → copy the src="" value. */
  mapEmbedUrl:
    'https://www.google.com/maps?q=Mukalla,+Yemen&output=embed',
}

export function whatsappLink(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}
