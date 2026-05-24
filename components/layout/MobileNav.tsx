'use client'

import Link              from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig }    from '@/config/site'

interface MobileNavProps {
  open:    boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200]"
            style={{ background: 'rgba(13,26,10,0.6)', backdropFilter: 'blur(4px)' }}
            onClick={onClose}
            aria-hidden
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 bottom-0 z-[201] w-72 flex flex-col"
            style={{ background: 'var(--dark)' }}
            role="dialog"
            aria-label="Mobile navigation"
            aria-modal="true"
          >
            {/* Header */}
            <div
              className="flex justify-between items-center px-7 h-16 border-b"
              style={{ borderColor: 'rgba(74,122,53,0.15)' }}
            >
              <span className="font-display font-light text-base" style={{ color: 'var(--cream)' }}>
                Navigation
              </span>
              <button
                onClick={onClose}
                className="text-cream/50 hover:text-cream transition-colors text-xl leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Close navigation"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-0.5 p-5 flex-1">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="text-[11px] tracking-[2.5px] uppercase py-4 px-2 border-b transition-colors"
                  style={{
                    color:       'rgba(245,240,232,0.55)',
                    borderColor: 'rgba(74,122,53,0.1)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.55)')}
                >
                  {item.label}
                </Link>
              ))}

              <a
                href={siteConfig.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                aria-label="Log in to the MelonOps staff portal (opens in a new tab)"
                className="mt-6 text-center text-[11px] tracking-[2px] uppercase py-3.5 transition-colors"
                style={{ background: 'var(--red)', color: 'var(--cream)' }}
              >
                Log In →
              </a>
            </nav>

            {/* Footer contact */}
            <div className="p-7 border-t" style={{ borderColor: 'rgba(74,122,53,0.15)' }}>
              <p className="text-[9px] tracking-[2px] uppercase mb-1" style={{ color: 'var(--sage)' }}>
                Contact
              </p>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                className="text-sm font-light block mb-1"
                style={{ color: 'rgba(245,240,232,0.65)' }}
              >
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[11px] block"
                style={{ color: 'var(--gold)' }}
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
