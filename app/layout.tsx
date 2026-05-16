import type { Metadata, Viewport } from 'next'
import { siteConfig }              from '@/config/site'
import '@/app/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:  `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'watermelon grower','watermelon shipper','watermelon packer',
    'wholesale watermelon','seedless watermelon','yellow meat watermelon',
    'Branford Florida','produce distributor','fresh produce',
    'PrimusGFS certified','Raymon J Land','Land Watermelon',
    'watermelon varieties','agricultural supplier',
  ],
  authors:  [{ name: siteConfig.name, url: siteConfig.url }],
  creator:  siteConfig.name,
  category: 'Agriculture',
  classification: 'Wholesale Food Supplier',
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         siteConfig.url,
    title:       `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName:    siteConfig.name,
    images: [{
      url:    `${siteConfig.url}${siteConfig.ogImage}`,
      width:  1200,
      height: 630,
      alt:    `${siteConfig.name} — Premium Watermelon Growers, Shippers & Packers Since 1966`,
    }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images:      [`${siteConfig.url}${siteConfig.ogImage}`],
  },
  robots: {
    index:      true,
    follow:     true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)',  color: '#0D1A0A' },
    { media: '(prefers-color-scheme: light)', color: '#F5F0E8' },
  ],
  width:        'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  logo: `${siteConfig.url}/og/default.svg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Branford',
    addressLocality: siteConfig.contact.city,
    addressRegion: 'FL',
    postalCode: '32008',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.9565,
    longitude: -82.9293,
  },
  foundingDate: String(siteConfig.established),
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  sameAs: [siteConfig.url],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
    opens: '07:00',
    closes: '17:00',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Watermelon Varieties',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Seedless Watermelons', description: 'Troubadour, Rio Grande, Cracker Jack' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Seeded Watermelons', description: 'Delta and Jamboree varieties' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Yellow Meat Watermelons', description: 'Premium specialty varieties' } },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body style={{ background: 'var(--cream)', color: 'var(--dark)', margin: 0 }}>
        {children}
      </body>
    </html>
  )
}
