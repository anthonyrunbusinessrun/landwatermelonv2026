// content/varieties.ts
// Varieties sourced from landwatermelon.com HTML reference.
// `image` is revealed on hover / tap in the Varieties section cards.

export interface Variety {
  id:       string
  category: 'seedless' | 'seeded' | 'specialty'
  name:     string
  tagColor: 'gold' | 'red' | 'sage'
  body:     string
  detail?:  string
  image:    string
  imageW:   number
  imageH:   number
}

export const varieties: Variety[] = [
  {
    id:       'seedless',
    category: 'seedless',
    tagColor: 'sage',
    name:     'Seedless Varieties',
    body:     'Troubadour, Rio Grande, Cracker Jack — premium seedless melons from six US growing regions. Consistent quality, season after season.',
    detail:   'Available in 45 lb bins, 60-count and custom pallet configurations.',
    image:    '/images/gallery/192.jpg',
    imageW:   500,
    imageH:   375,
  },
  {
    id:       'seeded',
    category: 'seeded',
    tagColor: 'red',
    name:     'Seeded Varieties',
    body:     'Delta and Jamboree — classic full-flavored seeded melons, farm-direct to your dock. The taste your customers remember.',
    detail:   'Traditional farm-grown seeded melons for buyers who demand heritage flavor.',
    image:    '/images/gallery/183.jpg',
    imageW:   500,
    imageH:   375,
  },
  {
    id:       'yellow',
    category: 'specialty',
    tagColor: 'gold',
    name:     'Yellow Meat & Specialty',
    body:     'Our yellow meat varieties are a customer favorite — sweet, distinctive, the best value in any produce department. Mini varieties also available.',
    detail:   'Yellow meat is our signature specialty. Grown in Branford FL and Cordele GA.',
    image:    '/images/gallery/190.jpg',
    imageW:   500,
    imageH:   372,
  },
  {
    id:       'logistics',
    category: 'specialty',
    tagColor: 'red',
    name:     'Truck Brokerage',
    body:     '100+ independent owner-operators and 4 major carriers with hubs across the US — farm to distribution center, coast to coast.',
    detail:   'Land Truck Brokers, Inc. manages 3,000 semi loads per season with precision logistics.',
    image:    '/images/gallery/waiting-to-load.jpg',
    imageW:   1800,
    imageH:   1055,
  },
]
