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
      src:    '/images/gallery/babies-2012-joseph-big-melon.jpg',
      alt:    'Joseph Land with a prize watermelon — 2012 harvest, Branford, Florida',
      width:  1800,
      height: 1373,
      tag:    'Heritage',
      title:  'Three generations · Branford, FL',
    },
    {
      src:    '/images/gallery/2.jpg',
      alt:    'Watermelons ripening in the field',
      width:  700,
      height: 525,
      tag:    'Field',
      title:  'In the field',
    },
    {
      src:    '/images/gallery/5.jpg',
      alt:    'Land Pride watermelons on the vine',
      width:  700,
      height: 525,
      tag:    'Field',
      title:  'Sun on the vines',
    },
    {
      src:    '/images/gallery/6.jpg',
      alt:    'Acres of watermelons under Florida skies',
      width:  700,
      height: 525,
      tag:    'Field',
      title:  'Acres of Land Pride',
    },
    {
      src:    '/images/gallery/7.jpg',
      alt:    'Harvest morning in a Branford watermelon field',
      width:  700,
      height: 525,
      tag:    'Harvest',
      title:  'Harvest morning',
    },
    {
      src:    '/images/gallery/8.jpg',
      alt:    'Hand-picking ripe watermelons',
      width:  700,
      height: 525,
      tag:    'Harvest',
      title:  'Picked by hand',
    },
    {
      src:    '/images/gallery/1-1.jpg',
      alt:    'Watermelons being brought in from the field',
      width:  700,
      height: 525,
      tag:    'Harvest',
      title:  'Bringing them in',
    },
    {
      src:    '/images/gallery/183.jpg',
      alt:    'Premium Land Pride watermelons after harvest',
      width:  500,
      height: 375,
      tag:    'Crop',
      title:  "Land's Pride crop",
    },
    {
      src:    '/images/gallery/190.jpg',
      alt:    'Ready-to-ship watermelons',
      width:  500,
      height: 372,
      tag:    'Crop',
      title:  'Ready for market',
    },
    {
      src:    '/images/gallery/192.jpg',
      alt:    'Hand-selected premium watermelons',
      width:  500,
      height: 375,
      tag:    'Crop',
      title:  'Hand-selected, every one',
    },
    {
      src:    '/images/gallery/200.jpg',
      alt:    'Seedless, seeded and yellow-meat varieties from Land',
      width:  500,
      height: 375,
      tag:    'Variety',
      title:  'Seeded, seedless & yellow meat',
    },
    {
      src:    '/images/gallery/binned-melons-packing-house.jpg',
      alt:    'Binned watermelons inside the Branford packing house',
      width:  1800,
      height: 1350,
      tag:    'Packing',
      title:  'Packing house, Branford',
    },
    {
      src:    '/images/gallery/watching-close.jpg',
      alt:    'Quality check on every melon before it ships',
      width:  1006,
      height: 1212,
      tag:    'Quality',
      title:  'Eye on every melon',
    },
    {
      src:    '/images/gallery/waiting-to-load.jpg',
      alt:    'Trucks waiting at the dock to load Land watermelons',
      width:  1800,
      height: 1055,
      tag:    'Shipping',
      title:  '3,000 loads every season',
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

  // Order mirrors scroll position on the home page:
  // Hero → Gallery → StatsBar → TrustBar → About → Varieties → Regions → BigNumber → Testimonial → FAQ → CTA
  nav: [
    { label: 'Gallery',     href: '#gallery'   },
    { label: 'About',       href: '#about'     },
    { label: 'Watermelons', href: '#varieties' },
    { label: 'Regions',     href: '#regions'   },
    { label: 'FAQ',         href: '#faq'       },
  ],
} as const

export type SiteConfig = typeof siteConfig
