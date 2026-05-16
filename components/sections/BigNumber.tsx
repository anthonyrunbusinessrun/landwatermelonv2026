'use client'

import { MotionWrapper } from '@/components/ui/MotionWrapper'

export function BigNumber() {
  return (
    <div
      className="relative overflow-hidden px-12 py-20 text-center"
      style={{ background: 'var(--red)' }}
      aria-label="3,000 Semi-truck loads per season"
    >
      {/* Watermelon emoji background */}
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
        style={{ fontSize: '280px', opacity: 0.08, lineHeight: 1 }}
        aria-hidden
      >
        🍉
      </span>

      {/* Number */}
      <MotionWrapper>
        <div
          className="font-display font-light relative"
          style={{
            fontSize:    'clamp(80px,13vw,148px)',
            lineHeight:  1,
            color:       'var(--cream)',
            marginBottom: '8px',
          }}
        >
          3,000
        </div>
      </MotionWrapper>

      {/* Label */}
      <MotionWrapper delay={0.08}>
        <div
          className="text-[11px] tracking-[4px] uppercase mb-7"
          style={{ color: 'rgba(245,240,232,0.65)' }}
        >
          Semi-truck loads per season
        </div>
      </MotionWrapper>

      {/* Divider */}
      <MotionWrapper delay={0.12}>
        <div
          className="w-12 h-[3px] mx-auto mb-6"
          style={{ background: 'linear-gradient(90deg, var(--cream), var(--gold))' }}
        />
      </MotionWrapper>

      {/* Body */}
      <MotionWrapper delay={0.16}>
        <p
          className="text-[15px] leading-[1.7] max-w-[520px] mx-auto relative"
          style={{ color: 'rgba(245,240,232,0.75)' }}
        >
          Buyers who source from Land Watermelon receive consistent quality,
          custom packing and on-time delivery — season after season since 1966.
        </p>
      </MotionWrapper>
    </div>
  )
}
