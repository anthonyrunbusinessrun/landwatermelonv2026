'use client'

import Link             from 'next/link'
import { useState }     from 'react'
import { siteConfig }   from '@/config/site'
import { Logo }         from './Logo'
import { MobileNav }    from './MobileNav'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top rule — red to gold gradient */}
      <div
        className="fixed top-0 left-0 right-0 z-[101] h-[3px]"
        style={{ background: 'linear-gradient(90deg, #C0392B 0%, #E8503A 30%, #E8C547 65%, #F5D96B 85%, transparent 100%)' }}
        aria-hidden
      />

      <nav
        className="fixed left-0 right-0 z-[100] flex justify-between items-center gap-4 px-5 sm:px-8 lg:px-12 h-16"
        style={{
          top:            '3px',
          background:     'rgba(237,231,213,0.92)',
          backdropFilter: 'blur(14px)',
          borderBottom:   '2px solid rgba(45,74,34,0.12)',
        }}
        aria-label="Main navigation"
      >
        <Logo size="navbar" />

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] tracking-[2px] uppercase transition-colors duration-200"
              style={{ color: 'rgba(26,34,22,0.55)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--green)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(26,34,22,0.55)')}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#cta"
            className="text-[10px] tracking-[2px] uppercase px-5 py-2.5 transition-all duration-200 font-body"
            style={{ background: 'var(--green)', color: 'var(--cream)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--red)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--green)')}
          >
            Order Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
        >
          <span className="w-5 h-0.5 block" style={{ background: 'var(--dark)' }} />
          <span className="w-5 h-0.5 block" style={{ background: 'var(--dark)' }} />
          <span className="w-3 h-0.5 block" style={{ background: 'var(--dark)' }} />
        </button>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
