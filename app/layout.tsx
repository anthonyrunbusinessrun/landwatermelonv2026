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
    'Branford Florida','produce distributor','PrimusGFS certified',
    'Raymon J Land','Land Watermelon',
  ],
  authors:  [{ name: siteConfig.name, url: siteConfig.url }],
  openGraph: {
    type:      'website',
    locale:    'en_US',
    url:       siteConfig.url,
    title:     `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName:  siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images:      [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0D1A0A',
  width: 'device-width',
  initialScale: 1,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.contact.city,
    addressRegion: 'FL',
    postalCode: '32008',
    addressCountry: 'US',
  },
  foundingDate: String(siteConfig.established),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
