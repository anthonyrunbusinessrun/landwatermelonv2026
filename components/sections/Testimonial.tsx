'use client'

import { MotionWrapper } from '@/components/ui/MotionWrapper'
import { SectionTag }    from '@/components/ui/SectionHeader'

export function Testimonial() {
  return (
    <section
      className="section-cream section-pad"
      aria-label="Buyer testimonial"
    >
      <div className="max-w-[720px] mx-auto text-center relative z-10">

        <MotionWrapper>
          <SectionTag label="What Buyers Say" dotColor="red" center />
        </MotionWrapper>

        {/* Opening quote mark */}
        <MotionWrapper delay={0.05}>
          <div
            className="font-display font-light select-none leading-[0.6] mb-5"
            style={{ fontSize: '96px', color: 'rgba(45,74,34,0.15)' }}
            aria-hidden
          >
            &ldquo;
          </div>
        </MotionWrapper>

        {/* Quote */}
        <MotionWrapper delay={0.1}>
          <blockquote
            className="font-display font-light italic leading-[1.5] mb-8"
            style={{
              fontSize: 'clamp(22px,3vw,30px)',
              color:    'var(--dark)',
            }}
          >
            Quality and consistency season after season. Land watermelons arrive
            fresh, packed right, on time — every single load.
          </blockquote>
        </MotionWrapper>

        {/* Divider */}
        <MotionWrapper delay={0.14}>
          <div
            className="w-12 h-[3px] mx-auto mb-5"
            style={{ background: 'linear-gradient(90deg, var(--red), var(--gold))' }}
          />
        </MotionWrapper>

        {/* Attribution */}
        <MotionWrapper delay={0.17}>
          <cite className="not-italic">
            <div
              className="text-[11px] font-medium tracking-[3px] uppercase mb-1"
              style={{ color: 'var(--green)' }}
            >
              Distribution Partner
            </div>
            <div
              className="text-[10px] tracking-[2px] uppercase"
              style={{ color: '#7A8A6A' }}
            >
              Southeast US Retail Buyer
            </div>
          </cite>
        </MotionWrapper>
      </div>
    </section>
  )
}
