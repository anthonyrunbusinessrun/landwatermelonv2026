'use client'

import Image                                 from 'next/image'
import Link                                  from 'next/link'
import { useState }                          from 'react'
import { motion }                            from 'framer-motion'
import { varieties }                         from '@/content/varieties'
import { SectionTag }                        from '@/components/ui/SectionHeader'
import {
  MotionWrapper,
  StaggerContainer,
  StaggerChild,
} from '@/components/ui/MotionWrapper'

const DOT_COLOR = {
  gold: 'var(--gold)',
  red:  'var(--red)',
  sage: 'var(--sage)',
} as const

// Category label is intentionally a single shared color across every card
// so the text reads as one consistent "kicker". The colored dot on the left
// is what carries the per-card accent (sage / red / gold).
const LABEL_COLOR = 'var(--gold)'

export function Varieties() {
  // Tracks the currently "tapped open" card so the reveal works on touch
  // devices where :hover is unreliable. `null` = nothing toggled open.
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section
      id="varieties"
      className="section-dark section-pad"
      aria-labelledby="varieties-heading"
    >
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* ── LEFT: INTRO ── */}
        <div>
          <MotionWrapper>
            <SectionTag label="What We Grow" theme="dark" />
          </MotionWrapper>

          <MotionWrapper delay={0.05}>
            <h2
              id="varieties-heading"
              className="font-display font-light leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(36px,4vw,56px)', color: 'var(--cream)' }}
            >
              Land watermelons<br />
              grown with{' '}
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>pride.</em>
            </h2>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <p
              className="text-[16px] leading-[1.75] mb-6 max-w-[560px]"
              style={{ color: 'rgba(245,240,232,0.6)' }}
            >
              From unique locations across North America, Land produces virtually every
              variety of seeded, seedless and specialty watermelons — highest quality
              melons in any box, any pallet to your specification.
            </p>
          </MotionWrapper>

          <MotionWrapper delay={0.12}>
            <p
              className="text-[12px] leading-[1.6] mb-8 max-w-[480px]"
              style={{ color: 'rgba(232,197,71,0.7)' }}
            >
              Hover or tap any variety to see a photo from our fields and packing houses.
            </p>
          </MotionWrapper>

          <MotionWrapper delay={0.15}>
            <Link
              href="#cta"
              className="inline-block text-[11px] tracking-[2px] uppercase px-7 py-3.5 transition-colors duration-200"
              style={{ background: 'var(--red)', color: 'var(--cream)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--red2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)')}
            >
              Order Now →
            </Link>
          </MotionWrapper>
        </div>

        {/* ── RIGHT: CARDS ── */}
        <StaggerContainer className="flex flex-col gap-0.5" delay={0.1} stagger={0.07}>
          {varieties.map((v) => {
            const isOpen   = openId === v.id
            const dotColor = DOT_COLOR[v.tagColor]
            return (
              <StaggerChild key={v.id}>
                <motion.button
                  type="button"
                  onClick={() => setOpenId(prev => (prev === v.id ? null : v.id))}
                  initial="rest"
                  animate={isOpen ? 'active' : 'rest'}
                  whileHover="active"
                  whileFocus="active"
                  aria-expanded={isOpen}
                  aria-label={`${isOpen ? 'Hide' : 'Show'} photo for ${v.name}`}
                  className="group relative overflow-hidden w-full text-left px-7 py-7 cursor-pointer focus-visible:outline-none"
                  variants={{
                    rest: {
                      backgroundColor: 'rgba(237,231,213,0.06)',
                      borderLeftColor: 'rgba(0,0,0,0)',
                    },
                    active: {
                      backgroundColor: 'rgba(237,231,213,0.10)',
                      borderLeftColor: '#E8C547',
                    },
                  }}
                  style={{ borderLeftWidth: 2, borderLeftStyle: 'solid' }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Image background — fades in on hover / tap */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    variants={{
                      rest:   { opacity: 0 },
                      active: { opacity: 1 },
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden
                  >
                    <Image
                      src={v.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover"
                    />
                    {/* Dark gradient overlay keeps text readable */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(13,26,10,0.92) 0%, rgba(13,26,10,0.78) 55%, rgba(13,26,10,0.55) 100%)',
                      }}
                    />
                  </motion.div>

                  {/* Card content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                        style={{ background: dotColor }}
                        aria-hidden
                      />
                      <span
                        className="text-[10px] tracking-[2px] uppercase"
                        style={{ color: LABEL_COLOR }}
                      >
                        {v.categoryLabel}
                      </span>
                    </div>

                    <h3
                      className="font-display font-light text-[22px] mb-2"
                      style={{ color: 'var(--cream)' }}
                    >
                      {v.name}
                    </h3>

                    <p
                      className="text-[13px] leading-[1.6]"
                      style={{ color: 'rgba(245,240,232,0.7)' }}
                    >
                      {v.body}
                    </p>

                    {/* Extra detail slides in on hover / tap */}
                    {v.detail && (
                      <motion.p
                        variants={{
                          rest:   { opacity: 0, height: 0, marginTop: 0 },
                          active: { opacity: 1, height: 'auto', marginTop: 12 },
                        }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[12px] leading-[1.55] italic overflow-hidden"
                        style={{ color: 'rgba(232,197,71,0.9)' }}
                      >
                        — {v.detail}
                      </motion.p>
                    )}
                  </div>
                </motion.button>
              </StaggerChild>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
