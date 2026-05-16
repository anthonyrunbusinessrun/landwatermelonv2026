'use client'

import Link                 from 'next/link'
import { motion } from 'framer-motion'
import { varieties }        from '@/content/varieties'
import { SectionTag }       from '@/components/ui/SectionHeader'
import { StaggerContainer, StaggerChild } from '@/components/ui/MotionWrapper'
import { MotionWrapper }    from '@/components/ui/MotionWrapper'



export function Varieties() {
  return (
    <section
      id="varieties"
      className="section-dark section-pad"
      aria-labelledby="varieties-heading"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

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
            <p className="text-[16px] leading-[1.75] mb-8 max-w-[560px]" style={{ color: 'rgba(245,240,232,0.6)' }}>
              From unique locations across North America, Land produces virtually every
              variety of seeded, seedless and specialty watermelons — highest quality
              melons in any box, any pallet to your specification.
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
          {varieties.map((v) => (
            <StaggerChild key={v.id}>
              <motion.div
                className="group px-7 py-7 transition-all duration-200"
                style={{
                  background:  'rgba(237,231,213,0.06)',
                  borderLeft:  '2px solid transparent',
                }}
                whileHover={{
                  backgroundColor: 'rgba(237,231,213,0.10)',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderLeftColor = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.borderLeftColor = 'transparent')}
              >
                <div
                  className="text-[10px] tracking-[2px] uppercase mb-3"
                  style={{ color: v.tagColor === 'gold' ? 'var(--gold)' : 'var(--red)' }}
                >
                  {v.num}
                </div>
                <h3
                  className="font-display font-light text-[22px] mb-2"
                  style={{ color: 'var(--cream)' }}
                >
                  {v.name}
                </h3>
                <p className="text-[13px] leading-[1.6]" style={{ color: 'rgba(245,240,232,0.55)' }}>
                  {v.body}
                </p>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
