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
  heroImage: {
    src:    '/images/hero-lands-pride.jpg',
    alt:    "Land's Pride — family farming in the field",
    width:  1024,
    height: 576,
  },
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
    { label: 'Regions',     href: '#regions'   },
    { label: 'About',       href: '#about'      },
    { label: 'FAQ',         href: '#faq'        },
  ],
} as const

export type SiteConfig = typeof siteConfig
