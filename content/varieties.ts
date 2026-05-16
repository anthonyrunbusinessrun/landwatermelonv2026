// content/varieties.ts
// Actual varieties sourced from landwatermelon.com HTML reference

export interface Variety {
  id:       string
  num:      string
  category: 'seedless' | 'seeded' | 'specialty'
  name:     string
  tagColor: 'gold' | 'red' | 'sage'
  body:     string
  detail?:  string
}

export const varieties: Variety[] = [
  {
    id:       'seedless',
    num:      '01',
    category: 'seedless',
    tagColor: 'sage',
    name:     'Seedless Varieties',
    body:     'Troubadour, Rio Grande, Cracker Jack — premium seedless melons from six US growing regions. Consistent quality, season after season.',
    detail:   'Available in 45 lb bins, 60-count and custom pallet configurations.',
  },
  {
    id:       'seeded',
    num:      '02',
    category: 'seeded',
    tagColor: 'red',
    name:     'Seeded Varieties',
    body:     'Delta and Jamboree — classic full-flavored seeded melons, farm-direct to your dock. The taste your customers remember.',
    detail:   'Traditional farm-grown seeded melons for buyers who demand heritage flavor.',
  },
  {
    id:       'yellow',
    num:      '03',
    category: 'specialty',
    tagColor: 'gold',
    name:     'Yellow Meat & Specialty',
    body:     'Our yellow meat varieties are a customer favorite — sweet, distinctive, the best value in any produce department. Mini varieties also available.',
    detail:   'Yellow meat is our signature specialty. Grown in Branford FL and Cordele GA.',
  },
  {
    id:       'logistics',
    num:      '04',
    category: 'specialty',
    tagColor: 'red',
    name:     'Truck Brokerage',
    body:     '100+ independent owner-operators and 4 major carriers with hubs across the US — farm to distribution center, coast to coast.',
    detail:   'Land Truck Brokers, Inc. manages 3,000 semi loads per season with precision logistics.',
  },
]
