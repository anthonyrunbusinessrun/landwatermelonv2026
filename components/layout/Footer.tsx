'use client'

import Link           from 'next/link'
import { siteConfig } from '@/config/site'
import { Logo }       from './Logo'

const NAV_LINKS = [
  { label: 'Home',        href: '#home'      },
  { label: 'Watermelons', href: '#varieties' },
  { label: 'Locations',   href: '#regions'   },
  { label: 'About',       href: '#about'     },
  { label: 'FAQ',         href: '#faq'       },
]

const CERTIFICATIONS = [
  '✅ PrimusGFS Certified',
  '🌱 GAP · GHP · GMP',
  '📋 PTI Compliant',
  '⭐ Est. 1966',
]

const VARIETY_CHIPS = [
  { label: 'Seeded 🍉',      bg: 'rgba(192,57,43,0.15)',  color: 'var(--red2)'  },
  { label: 'Yellow Meat 🟡', bg: 'rgba(232,197,71,0.15)', color: 'var(--gold)'  },
  { label: 'Seedless 🌿',    bg: 'rgba(122,173,94,0.15)', color: 'var(--sage)'  },
]

export function Footer() {
  return (
    <footer
      style={{ background: 'var(--dark)', borderTop: '3px solid var(--green)' }}
    >
      {/* Top grid — outer wrapper handles horizontal padding so the inner
          grid can stay capped + centered via container-wide on big screens */}
      <div
        className="px-12 3xl:px-20 pt-16 pb-12"
        style={{ borderBottom: '1px solid rgba(74,122,53,0.12)' }}
      >
      <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1fr] gap-12">
        {/* Brand column */}
        <div>
          <Logo variant="onDark" size="footer" className="mb-2" />
          <p
            className="text-[11px] leading-[1.7] max-w-[240px] mt-1"
            style={{ color: 'rgba(245,240,232,0.35)' }}
          >
            Growers, Shippers & Packers of Watermelons since 1966.
            Family owned and operated in Branford, Florida.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4
            className="text-[9px] tracking-[3px] uppercase font-medium mb-4"
            style={{ color: 'var(--sage)', opacity: 0.7 }}
          >
            Navigate
          </h4>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-[13px] mb-2.5 transition-colors duration-200"
              style={{ color: 'rgba(245,240,232,0.45)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.45)')}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-[9px] tracking-[3px] uppercase font-medium mb-4"
            style={{ color: 'var(--sage)', opacity: 0.7 }}
          >
            Contact
          </h4>
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
            className="block text-[13px] mb-2.5 transition-colors duration-200"
            style={{ color: 'rgba(245,240,232,0.45)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.45)')}
          >
            {siteConfig.contact.phone}
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="block text-[13px] mb-2.5 transition-colors duration-200"
            style={{ color: 'rgba(245,240,232,0.45)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.45)')}
          >
            {siteConfig.contact.email}
          </a>
          <a
            href={siteConfig.url}
            className="block text-[13px] mb-2.5 transition-colors duration-200"
            style={{ color: 'rgba(245,240,232,0.45)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.45)')}
          >
            landwatermelon.com
          </a>
          <p className="text-[13px] mb-2.5" style={{ color: 'rgba(245,240,232,0.45)' }}>
            {siteConfig.contact.address}
          </p>
        </div>

        {/* Certifications */}
        <div>
          <h4
            className="text-[9px] tracking-[3px] uppercase font-medium mb-4"
            style={{ color: 'var(--sage)', opacity: 0.7 }}
          >
            Certifications
          </h4>
          {CERTIFICATIONS.map((c) => (
            <p
              key={c}
              className="text-[13px] mb-2.5"
              style={{ color: 'rgba(245,240,232,0.45)' }}
            >
              {c}
            </p>
          ))}
        </div>
      </div>
      </div>

      {/* Bottom bar */}
      <div className="px-12 3xl:px-20 py-6">
        <div className="container-wide flex justify-between items-center flex-wrap gap-3">
          <p className="text-[11px]" style={{ color: 'rgba(245,240,232,0.2)' }}>
            © {new Date().getFullYear()} Raymon J Land Watermelon Sales & Land Truck Brokers, Inc.
          </p>
          <div className="flex gap-2">
            {VARIETY_CHIPS.map((c) => (
              <span
                key={c.label}
                className="text-[10px] px-3 py-1"
                style={{ background: c.bg, color: c.color }}
              >
                {c.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
