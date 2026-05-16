// content/regions.ts
// Actual growing regions extracted from landwatermelon.com

export interface Region {
  id:       string
  state:    string
  city:     string
  flag:     string
  tagLabel: string
  tagColor: 'sage' | 'gold' | 'red'
  varieties: string
  acres:    string
  season:   string
  imageUrl: string
  imageFallback: string
}

export const regions: Region[] = [
  {
    id:       'branford-fl',
    state:    'Florida',
    city:     'Branford, FL',
    flag:     '🌿',
    tagLabel: 'Florida',
    tagColor: 'sage',
    varieties: 'Seedless & Yellow Meat',
    acres:    '850 Acres',
    season:   'May – June',
    imageUrl:  'http://landwatermelon.com/wp-content/uploads/2012/02/gallery1.jpg',
    imageFallback: '#2D4A22',
  },
  {
    id:       'cordele-ga',
    state:    'Georgia',
    city:     'Cordele, GA',
    flag:     '🍑',
    tagLabel: 'Georgia',
    tagColor: 'gold',
    varieties: 'Yellow Meat & Seedless',
    acres:    '600 Acres',
    season:   'June – July',
    imageUrl:  'http://landwatermelon.com/wp-content/uploads/2012/02/gallery5.jpg',
    imageFallback: '#3A5C2A',
  },
  {
    id:       'packing',
    state:    'Packing',
    city:     'Packing Facility',
    flag:     '📦',
    tagLabel: 'Packing',
    tagColor: 'red',
    varieties: 'Custom Spec. Any Box, Any Pallet',
    acres:    'Farm-Direct',
    season:   'Full Season',
    imageUrl:  'http://landwatermelon.com/wp-content/uploads/2012/02/gallery7.jpg',
    imageFallback: '#1A2216',
  },
  {
    id:       'fleet',
    state:    'Logistics',
    city:     'Truck Fleet',
    flag:     '🚛',
    tagLabel: 'Fleet',
    tagColor: 'sage',
    varieties: '3,000 Loads Per Season',
    acres:    'Coast to Coast',
    season:   'Full Season',
    imageUrl:  'http://landwatermelon.com/wp-content/uploads/2012/02/gallery11.jpg',
    imageFallback: '#0D1A0A',
  },
]

export const allRegions = [
  'Florida',
  'Georgia',
  'North Carolina',
  'Indiana',
  'Michigan',
  'Mexico',
] as const
