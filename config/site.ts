// config/site.ts
// All data sourced from landwatermelon.com and the primary HTML reference

export const siteConfig = {
  name:        'Raymon J Land, Inc.',
  shortName:   'Land Watermelon',
  tagline:     'Growers, Shippers & Packers since 1966',

  logo: {
    src:       '/logo.svg',
    srcOnDark: '/logo-light.svg',
    alt:       'Raymon J Land, Inc.',
    width:     1770,
    height:    335,
  },
  description: 'Family-owned watermelon growers, shippers, and packers since 1966. Averaging 3,000 semi-truck loads per season across six US growing regions — seeded, seedless, yellow meat and specialty varieties to your exact specification.',
  url:         'https://landwatermelon.com',
  ogImage:     '/og/default.svg',

  // External staff portal — opens in a new tab from the Log In button
  loginUrl:    'https://melonbook2026-production.up.railway.app/',

  heroImage: {
    src:    '/images/hero-lands-pride.jpg',
    alt:    "Land's Pride — family farming in the field",
    width:  1024,
    height: 576,
  },

  /**
   * Gallery slideshow shown below the Hero section.
   * To add more photos: drop JPEG/PNG files in `public/images/gallery/`
   * and append entries here. Each entry needs a valid `width`/`height` for
   * next/image. Remote hosts must be whitelisted in `next.config.ts`.
   */
  gallery: [
    {
      src:    '/images/hero-lands-pride.jpg',
      alt:    "Land's Pride harvest in Branford, Florida",
      width:  1024,
      height: 576,
      tag:    'Harvest',
      title:  "Land's Pride · Branford, FL",
    },
    {
      src:    'https://static1.1.sqspcdn.com/static/f/597137/7147686/1275334651843/Land+Family.jpg?token=maPi5Oxe9OsuujsSEYbE%2FZCMNLc%3D',
      alt:    'The Land Family — Branford, Florida — Est. 1966',
      width:  700,
      height: 465,
      tag:    'Family',
      title:  'The Land Family · Est. 1966',
    },
    {
      src:    '/images/hero-lands-pride.jpg',
      alt:    'Loaded truck heading out of the packing shed',
      width:  1024,
      height: 576,
      tag:    'Shipping',
      title:  '3,000 truck loads every season',
    },
    {
      src:    'https://static1.1.sqspcdn.com/static/f/597137/7147686/1275334651843/Land+Family.jpg?token=maPi5Oxe9OsuujsSEYbE%2FZCMNLc%3D',
      alt:    'Three generations of growers',
      width:  700,
      height: 465,
      tag:    'Heritage',
      title:  'Three generations of growers',
    },
  ],


  familyPhoto: {
    src:    'https://static1.1.sqspcdn.com/static/f/597137/7147686/1275334651843/Land+Family.jpg?token=maPi5Oxe9OsuujsSEYbE%2FZCMNLc%3D',
    alt:    'The Land Family — Branford, Florida — Est. 1966',
    width:  700,
    height: 465,
  },
  established: 1966,

  contact: {
    phone:    '(386) 935-1865',
    email:    'info@landwatermelon.com',
    address:  'Branford, FL 32008',
    city:     'Branford',
    state:    'Florida',
  },

  stats: {
    pounds:  '90M+',
    trucks:  '3,000',
    regions: 6,
    years:   '59+',
  },

  certifications: [
    'PrimusGFS Certified',
    'GAP · GHP · GMP',
    'PTI Compliant',
  ],

  nav: [
    { label: 'Watermelons', href: '#varieties' },
    { label: 'Gallery',     href: '#gallery'    },
    { label: 'Regions',     href: '#regions'   },
    { label: 'About',       href: '#about'      },
    { label: 'FAQ',         href: '#faq'        },
  ],
} as const

export type SiteConfig = typeof siteConfig
