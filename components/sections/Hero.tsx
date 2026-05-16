'use client'

import { motion } from 'framer-motion'
import Image               from 'next/image'
import Link                from 'next/link'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ColorRule }       from '@/components/ui/SectionHeader'

export function Hero() {
  const reduced = useReducedMotion()

  const anim = (delay: number) => reduced ? {} : {
    initial:    { opacity: 0, y: 24 },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ padding: '120px 48px 80px' }}
      aria-label="Raymon J Land — Premium Watermelon Growers Since 1966"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(145deg, #0D1A0A 0%, #1A2216 15%, #2D4A22 40%, #4A7A35 68%, #EDE7D5 100%)' }}
        aria-hidden
      />

      {/* Radial highlight */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(74,122,53,0.08) 0%, transparent 60%)' }}
        aria-hidden
      />

      {/* Shell stripe texture */}
      <div className="absolute inset-0 texture-shell pointer-events-none" aria-hidden />

      {/* ── LEFT CONTENT ── */}
      <div className="relative z-10 flex-1 max-w-[580px]">

        {/* Eyebrow */}
        <motion.div {...anim(0.1)} className="flex items-center gap-2.5 mb-6">
          <span className="w-8 h-0.5 block" style={{ background: 'var(--red)' }} />
          <span
            className="text-[10px] tracking-[3px] uppercase"
            style={{ color: 'rgba(245,240,232,0.5)' }}
          >
            Growers · Shippers · Packers · Since 1966
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1 {...anim(0.2)} className="font-display font-light text-cream mb-6" style={{ fontSize: 'clamp(52px,5vw,76px)', lineHeight: 1.05 }}>
          Grown with{' '}
          <em style={{ color: 'var(--red2)', fontStyle: 'italic' }}>pride.</em>
          <br />
          Shipped with{' '}
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>care.</em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p {...anim(0.3)} className="text-[15px] leading-[1.7] mb-9 max-w-[480px]" style={{ color: 'rgba(245,240,232,0.65)' }}>
          Since 1966, Raymon Land and family have been feeding people across America.
          Averaging 3,000 semi-truck loads per year — seeded, seedless, yellow meat
          and specialty watermelons packed to your exact specification.
        </motion.p>

        {/* CTAs */}
        <motion.div {...anim(0.4)} className="flex flex-wrap gap-3 mb-12">
          <Link
            href="#cta"
            className="text-[11px] tracking-[2px] uppercase px-7 py-3.5 transition-colors duration-200 font-body"
            style={{ background: 'var(--red)', color: 'var(--cream)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--red2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)')}
          >
            Order Now →
          </Link>
          <Link
            href="#about"
            className="text-[11px] tracking-[2px] uppercase px-7 py-3.5 transition-all duration-200 font-body"
            style={{ background: 'transparent', color: 'rgba(245,240,232,0.65)', border: '1.5px solid rgba(245,240,232,0.2)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cream)'; e.currentTarget.style.color = 'var(--cream)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,232,0.2)'; e.currentTarget.style.color = 'rgba(245,240,232,0.65)' }}
          >
            Our Story
          </Link>
        </motion.div>

        {/* Color rule */}
        <motion.div {...anim(0.5)}>
          <ColorRule />
        </motion.div>
      </div>

      {/* ── RIGHT CARD ── */}
      <motion.div
        {...(reduced ? {} : {
          initial:    { opacity: 0, x: 24 },
          animate:    { opacity: 1, x: 0 },
          transition: { duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] },
        })}
        className="hidden lg:block flex-shrink-0 w-[380px] ml-15"
      >
        <div
          className="overflow-hidden"
          style={{
            background:  'rgba(237,231,213,0.09)',
            border:      '1px solid rgba(245,240,232,0.12)',
          }}
        >
          <div className="relative h-[260px] bg-green">
            <Image
              src="https://static1.1.sqspcdn.com/static/f/597137/7147686/1275334651843/Land+Family.jpg?token=maPi5Oxe9OsuujsSEYbE%2FZCMNLc%3D"
              alt="The Land Family — Branford, Florida"
              fill
              className="object-cover"
              style={{ filter: 'brightness(0.85)' }}
              sizes="380px"
              priority
            />
          </div>
          <div
            className="px-[22px] py-5"
            style={{ background: 'rgba(13,26,10,0.35)' }}
          >
            <h3
              className="font-display font-light text-[20px] mb-1.5"
              style={{ color: 'var(--cream)' }}
            >
              The Land Family · Since 1966
            </h3>
            <p className="text-[12px] tracking-[1px]" style={{ color: 'rgba(245,240,232,0.5)' }}>
              Branford, Florida — Family Owned & Operated
            </p>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      {!reduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden
        >
          <span className="text-[9px] tracking-[2px] uppercase" style={{ color: 'rgba(245,240,232,0.25)' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            className="w-px h-8"
            style={{ background: 'linear-gradient(to bottom, rgba(232,197,71,0.4), transparent)' }}
          />
        </motion.div>
      )}

      {/* Mobile padding fix */}
      <style>{`
        @media (max-width: 1024px) {
          #home { padding: 100px 24px 60px !important; }
        }
        @media (max-width: 640px) {
          #home { padding: 90px 20px 48px !important; }
        }
      `}</style>
    </section>
  )
}
