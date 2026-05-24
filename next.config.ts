import type { NextConfig } from 'next'

const config: NextConfig = {
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Image optimization — HTTPS only to avoid mixed-content warnings
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'landwatermelon.com',    pathname: '/wp-content/uploads/**' },
      { protocol: 'https', hostname: 'static1.1.sqspcdn.com', pathname: '/static/**' },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [64, 128, 256, 380, 512],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control',     value: 'on' },
          { key: 'X-Frame-Options',            value: 'DENY' },
          { key: 'X-Content-Type-Options',     value: 'nosniff' },
          { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',         value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-XSS-Protection',           value: '1; mode=block' },
          // Force HTTPS for 2 years (incl. subdomains); browsers refuse plain HTTP after first secure visit
          { key: 'Strict-Transport-Security',  value: 'max-age=63072000; includeSubDomains; preload' },
          // Auto-upgrade any stray http:// asset references to https:// at request time
          { key: 'Content-Security-Policy',    value: 'upgrade-insecure-requests' },
        ],
      },
      // Cache static assets aggressively
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },

}

export default config
