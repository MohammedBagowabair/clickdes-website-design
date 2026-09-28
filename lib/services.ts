import type { Accent } from '@/lib/projects'

export type Service = {
  id: string
  title: string
  short: string
  description: string
  accent: Accent
  image: { src: string; width: number; height: number; alt: string }
  includes: string[]
}

export const services: Service[] = [
  {
    id: 'residential',
    title: 'Residential Interior Design',
    short: 'Villas, apartments and private homes designed around the way you live.',
    description:
      'From a single room to a complete villa, we create homes that feel personal, generous and quietly luxurious — balancing colour, natural materials and light with the rhythms of family life.',
    accent: 'saffron',
    image: {
      src: '/images/projects/saffron-villa/cover.webp',
      width: 768,
      height: 1376,
      alt: 'Warm villa interior with saffron accents and lime plaster walls',
    },
    includes: [
      'Space planning & layouts',
      'Concept & mood development',
      'Material, colour & finish selection',
      'Furniture, lighting & styling',
      '3D visualisation',
      'Site supervision to handover',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Interior Design',
    short: 'Cafés, boutiques and workplaces that express a brand in space.',
    description:
      'We design hospitality, retail and workplace interiors that attract, welcome and endure — translating your brand into memorable spaces that work hard every day.',
    accent: 'terracotta',
    image: {
      src: '/images/projects/terra-cafe/cover.webp',
      width: 768,
      height: 1376,
      alt: 'Terracotta café interior with a curved green-tiled bar',
    },
    includes: [
      'Brand-led spatial concepts',
      'Customer journey & flow planning',
      'Custom joinery & fixtures',
      'Lighting design',
      'Contractor coordination',
      'Opening-ready styling',
    ],
  },
  {
    id: 'architecture',
    title: 'Interior Architecture',
    short: 'Structural and spatial change — walls, volumes, light and flow.',
    description:
      'When a space needs more than furnishing, we reshape it. We rework volumes, openings and details so the architecture and the interior speak as one.',
    accent: 'forest',
    image: {
      src: '/images/projects/details/detail-03.webp',
      width: 1376,
      height: 768,
      alt: 'Sequence of arched doorways washed in afternoon light',
    },
    includes: [
      'Measured surveys',
      'Reconfiguration & renovation plans',
      'Ceiling, wall & floor detailing',
      'Technical drawings',
      'Specification packages',
      'Construction administration',
    ],
  },
]
