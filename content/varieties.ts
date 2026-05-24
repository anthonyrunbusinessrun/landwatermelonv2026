// content/varieties.ts
// Varieties sourced from landwatermelon.com HTML reference.
// `image` is revealed on hover / tap in the Varieties section cards.

export interface Variety {
  id:            string
  category:      'seedless' | 'seeded' | 'specialty'
  /** Short label shown above the card title (e.g. "Seedless", "Yellow Meat"). */
  categoryLabel: string
  name:          string
  tagColor:      'gold' | 'red' | 'sage'
  body:          string
  detail?:       string
  image:         string
  imageW:        number
  imageH:        number
}

export const varieties: Variety[] = [
  {
    id:            'seedless',
    category:      'seedless',
    categoryLabel: 'Seedless',
    tagColor:      'sage',
    name:          'Seedless Varieties',
    body:          'Troubadour, Rio Grande, Cracker Jack — premium seedless melons from six US growing regions. Consistent quality, season after season.',
    detail:        'Available in 45 lb bins, 60-count and custom pallet configurations.',
    image:         '/images/varieties/seedless-watermelon-slice.jpg',
    imageW:        933,
    imageH:        1400,
  },
  {
    id:            'seeded',
    category:      'seeded',
    categoryLabel: 'Seeded',
    tagColor:      'red',
    name:          'Seeded Varieties',
    body:          'Delta and Jamboree — classic full-flavored seeded melons, farm-direct to your dock. The taste your customers remember.',
    detail:        'Traditional farm-grown seeded melons for buyers who demand heritage flavor.',
    image:         '/images/varieties/seeded-watermelon-closeup.jpg',
    imageW:        933,
    imageH:        1400,
  },
  {
    id:            'yellow',
    category:      'specialty',
    categoryLabel: 'Yellow Meat',
    tagColor:      'gold',
    name:          'Yellow Meat',
    body:          'Our yellow meat varieties are a customer favorite — sweet, distinctive, the best value in any produce department. Mini varieties also available.',
    detail:        'Yellow meat is our signature specialty. Grown in Branford FL and Cordele GA.',
    image:         '/images/varieties/yellow-watermelon-field.jpg',
    imageW:        1400,
    imageH:        933,
  },
  {
    id:            'logistics',
    category:      'specialty',
    categoryLabel: 'Logistics',
    tagColor:      'red',
    name:          'Truck Brokerage',
    body:          '100+ independent owner-operators and 4 major carriers with hubs across the US — farm to distribution center, coast to coast.',
    detail:        'Land Truck Brokers, Inc. manages 3,000 semi loads per season with precision logistics.',
    image:         '/images/gallery/trucks-loaded-buses.png',
    imageW:        768,
    imageH:        1024,
  },
]
