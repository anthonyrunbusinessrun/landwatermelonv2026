'use client'

import Image                from 'next/image'
import Link                 from 'next/link'
import { MotionWrapper, StaggerContainer, StaggerChild } from '@/components/ui/MotionWrapper'
import { SectionTag }       from '@/components/ui/SectionHeader'
import { siteConfig }       from '@/config/site'

const ABOUT_STATS = [
  { n: '90', sup: 'M+', supColor: 'mid',  label: 'Pounds annually' },
  { n: '6',  sup: '',   supColor: '',      label: 'Growing regions' },
  { n: '59', sup: '+',  supColor: 'gold2', label: 'Years in business' },
]

export function About() {
  return (
    <section
      id="about"
      className="section-cream section-pad"
      aria-labelledby="about-heading"
    >
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── LEFT: COPY ── */}
        <div>
          <MotionWrapper>
            <SectionTag label="About Us" />
          </MotionWrapper>

          <MotionWrapper delay={0.05}>
            <h2 id="about-heading" className="font-display font-light leading-[1.1] mb-5" style={{ fontSize: 'clamp(36px,4vw,56px)', color: 'var(--dark)' }}>
              We are —<br />
              <em style={{ color: 'var(--red)', fontStyle: 'italic' }}>Raymon J Land</em>
            </h2>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <p className="text-[15px] leading-[1.8] mb-7" style={{ color: '#5A6B4A' }}>
              Shipping watermelons isn&apos;t just a business — it&apos;s a way of life.
              Since 1966 Raymon Land and family have been feeding people across America
              the deliciously fresh watermelons they ship each season. Averaging 3,000
              semi-truck loads per year, Raymon J Land Watermelon Sales is a national
              leader in wholesome, fresh watermelons.
            </p>
            <p className="text-[15px] leading-[1.8] mb-7" style={{ color: '#5A6B4A' }}>
              From unique locations across North America, Land produces virtually every
              variety of seeded, seedless and specialty watermelons — highest quality
              melons in any box, any pallet to your specification.
            </p>
          </MotionWrapper>

          {/* Stats */}
          <StaggerContainer className="flex gap-10 flex-wrap mb-8" delay={0.15} stagger={0.08}>
            {ABOUT_STATS.map((s) => (
              <StaggerChild key={s.label}>
                <div>
                  <div className="font-display font-light text-[44px] leading-none" style={{ color: 'var(--dark)' }}>
                    {s.n}
                    {s.sup && (
                      <em
                        className="text-[22px] not-italic"
                        style={{ color: s.supColor === 'gold2' ? 'var(--gold2)' : 'var(--mid)' }}
                      >
                        {s.sup}
                      </em>
                    )}
                  </div>
                  <div className="text-[9px] tracking-[2px] uppercase mt-1.5" style={{ color: '#7A8A6A' }}>
                    {s.label}
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerContainer>

          {/* Family card */}
          <MotionWrapper delay={0.2}>
            <div
              className="mb-6 pl-5 py-4"
              style={{
                background:  'rgba(45,74,34,0.08)',
                borderLeft:  '3px solid var(--red)',
              }}
            >
              <h4
                className="font-display font-light text-[18px] mb-1"
                style={{ color: 'var(--dark)' }}
              >
                Family Owned & Operated
              </h4>
              <p className="text-[10px] tracking-[2px] uppercase" style={{ color: '#7A8A6A' }}>
                Since 1966 · Branford, Florida
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.25}>
            <Link
              href="#cta"
              className="inline-block text-[11px] tracking-[2px] uppercase px-7 py-3.5 transition-colors duration-200"
              style={{ background: 'var(--red)', color: 'var(--cream)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--red2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)')}
            >
              Get In Touch →
            </Link>
          </MotionWrapper>
        </div>

        {/* ── RIGHT: IMAGE ── */}
        <MotionWrapper delay={0.1} className="relative mt-6 lg:mt-0">
          {/* Gold tag */}
          <div
            className="absolute -top-3.5 right-5 z-10 text-[12px] font-medium tracking-[1px] px-[18px] py-[9px]"
            style={{ background: 'var(--gold)', color: 'var(--dark)' }}
          >
            🟡 Yellow Meat Specialist
          </div>

          {/* Image — full frame, scales without cropping */}
          <div className="rounded-[4px] overflow-hidden shadow-premium">
            <Image
              src={siteConfig.familyPhoto.src}
              alt={siteConfig.familyPhoto.alt}
              width={siteConfig.familyPhoto.width}
              height={siteConfig.familyPhoto.height}
              className="w-full h-auto block"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Red tag */}
          <div
            className="absolute -bottom-3.5 left-5 z-10 text-[12px] font-normal tracking-[1px] px-[18px] py-[9px]"
            style={{ background: 'var(--red)', color: 'var(--cream)' }}
          >
            Est. 1966 🍉
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
