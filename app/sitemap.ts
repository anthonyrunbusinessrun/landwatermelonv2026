import type { MetadataRoute } from 'next'
import { siteConfig }         from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const now  = new Date()

  return [
    {
      url:             base,
      lastModified:    now,
      changeFrequency: 'monthly',
      priority:        1,
    },
    {
      url:             `${base}/#varieties`,
      lastModified:    now,
      changeFrequency: 'monthly',
      priority:        0.9,
    },
    {
      url:             `${base}/#regions`,
      lastModified:    now,
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${base}/#about`,
      lastModified:    now,
      changeFrequency: 'yearly',
      priority:        0.7,
    },
    {
      url:             `${base}/#faq`,
      lastModified:    now,
      changeFrequency: 'monthly',
      priority:        0.6,
    },
  ]
}
