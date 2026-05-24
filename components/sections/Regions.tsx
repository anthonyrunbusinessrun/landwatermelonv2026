'use client'

import Image              from 'next/image'
import Link               from 'next/link'
import { regions, allRegions } from '@/content/regions'
import { SectionTag }    from '@/components/ui/SectionHeader'
import { MotionWrapper, StaggerContainer, StaggerChild } from '@/components/ui/MotionWrapper'

const TAG_STYLES = {
  sage: { bg: 'var(--sage)', color: 'var(--dark)' },
  gold: { bg: 'var(--gold)', color: 'var(--dark)' },
  red:  { bg: 'var(--red)',  color: 'var(--cream)' },
}

export function Regions() {
  return (
    <section
      id="regions"
      className="section-cream section-pad"
      aria-labelledby="regions-heading"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Header row */}
        <div className="flex justify-between items-end mb-10 flex-wrap gap-6">
          <div>
            <MotionWrapper>
              <SectionTag label="Locations" dotColor="red" theme="cream" />
            </MotionWrapper>
            <MotionWrapper delay={0.05}>
              <h2
                id="regions-heading"
                className="font-display font-light leading-[1.1]"
                style={{ fontSize: 'clamp(36px,4vw,56px)', color: 'var(--dark)' }}
              >
                From field<br />
                to your dock.
              </h2>
            </MotionWrapper>
          </div>

          <MotionWrapper delay={0.1}>
            <Link
              href="#cta"
              className="text-[11px] tracking-[2px] uppercase px-7 py-3.5 transition-colors duration-200 font-body"
              style={{ background: 'var(--red)', color: 'var(--cream)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--red2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)')}
            >
              All Locations
            </Link>
          </MotionWrapper>
        </div>

        {/* Region list pill */}
        <MotionWrapper delay={0.08} className="flex flex-wrap gap-2 mb-8">
          {allRegions.map((r) => (
            <span
              key={r}
              className="text-[9px] tracking-[2px] uppercase px-3 py-1.5"
              style={{ background: 'rgba(45,74,34,0.1)', color: '#4A7A35' }}
            >
              {r}
            </span>
          ))}
        </MotionWrapper>

        {/* Image grid */}
        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-[3px]"
          delay={0.1}
          stagger={0.08}
        >
          {regions.map((r) => {
            const tag = TAG_STYLES[r.tagColor]
            return (
              <StaggerChild key={r.id}>
                <div className="group relative overflow-hidden cursor-pointer">
                  {/* Image */}
                  <div className="relative aspect-[3/4]" style={{ background: r.imageFallback }}>
                    <Image
                      src={r.imageUrl}
                      alt={`${r.city} — ${r.varieties}`}
                      fill
                      className="object-cover transition-all duration-500 brightness-[0.6] group-hover:brightness-[0.4] group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>

                  {/* Tag */}
                  <div
                    className="absolute top-3.5 left-3.5 text-[9px] tracking-[1px] uppercase font-medium px-2.5 py-1"
                    style={{ background: tag.bg, color: tag.color }}
                  >
                    {r.flag} {r.tagLabel}
                  </div>

                  {/* Info overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-[18px] py-5"
                    style={{ background: 'linear-gradient(0deg, rgba(13,26,10,0.9) 0%, transparent 100%)' }}
                  >
                    <h3
                      className="font-display font-light text-[18px] mb-1"
                      style={{ color: 'var(--cream)' }}
                    >
                      {r.city}
                    </h3>
                    <p className="text-[10px] tracking-[1.5px] uppercase" style={{ color: 'rgba(245,240,232,0.5)' }}>
                      {r.varieties} · {r.acres}
                    </p>
                  </div>
                </div>
              </StaggerChild>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
