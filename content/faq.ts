// content/faq.ts

export interface FAQ {
  id:       string
  question: string
  answer:   string
}

export const faqs: FAQ[] = [
  {
    id:       'varieties',
    question: 'What varieties do you carry?',
    answer:   'Seedless, seeded, mini, and yellow meat varieties — sourced from Florida, Georgia, North Carolina, Indiana, Michigan, and Mexico. Named varieties include Troubadour, Rio Grande, Cracker Jack (seedless), Delta and Jamboree (seeded).',
  },
  {
    id:       'shipping',
    question: 'Where do you ship?',
    answer:   'We ship to distribution centers across the US, averaging 3,000 semi-truck loads per season. Land Truck Brokers, Inc. operates 100+ independent owner-operators and 4 major carriers with national hub coverage.',
  },
  {
    id:       'certifications',
    question: 'Are you food safety certified?',
    answer:   'Yes — GAP, GHP, and GMP certified with full PrimusGFS and PTI compliance. Food safety is non-negotiable at every step of our operation, from field to freight.',
  },
  {
    id:       'custom-packing',
    question: 'Can you custom pack?',
    answer:   'Any box, any pallet, any configuration to your exact specification. We work with retail chains, distribution centers, and wholesale buyers to meet custom labeling and packing requirements.',
  },
  {
    id:       'ordering',
    question: 'How do I place an order?',
    answer:   'Call (386) 935-1865 or email info@landwatermelon.com — we will connect you with our sales team same day. We prefer direct relationships with buyers and distributors.',
  },
  {
    id:       'regions',
    question: 'What regions do you grow in?',
    answer:   'Florida, Georgia, North Carolina, Indiana, Michigan, and Mexico — strategic geographic placement that gives us maximum season coverage and consistent supply throughout the watermelon season.',
  },
]
