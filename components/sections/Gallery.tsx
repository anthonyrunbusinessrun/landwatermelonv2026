'use client'

import Image                          from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence }    from 'framer-motion'
import { useReducedMotion }           from '@/hooks/useReducedMotion'
import { MotionWrapper }              from '@/components/ui/MotionWrapper'
import { SectionTag }                 from '@/components/ui/SectionHeader'
import { siteConfig }                 from '@/config/site'

const AUTOPLAY_MS = 5000

export function Gallery() {
  const reduced = useReducedMotion()
  const slides  = siteConfig.gallery
  const count   = slides.length

  const [index,  setIndex]  = useState(0)
  const [paused, setPaused] = useState(false)

  const goPrev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count],
  )
  const goNext = useCallback(
    () => setIndex((i) => (i + 1) % count),
    [count],
  )

  // Autoplay — pauses on hover/focus or when reduced motion is on
  useEffect(() => {
    if (reduced || paused || count <= 1) return
    const id = setInterval(goNext, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [reduced, paused, count, goNext])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goPrev, goNext])

  const slide = slides[index]

  return (
    <section
      id="gallery"
      className="section-dark section-pad"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* ── HEADER ── */}
        <div className="flex flex-col items-center text-center mb-10">
          <MotionWrapper>
            <SectionTag label="Gallery" theme="dark" dotColor="gold" center />
          </MotionWrapper>

          <MotionWrapper delay={0.05}>
            <h2
              id="gallery-heading"
              className="font-display font-light leading-[1.1] mb-3"
              style={{ fontSize: 'clamp(36px,4vw,56px)', color: 'var(--cream)' }}
            >
              Moments from the{' '}
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>field.</em>
            </h2>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <p
              className="text-[15px] leading-[1.7] max-w-[560px]"
              style={{ color: 'rgba(245,240,232,0.6)' }}
            >
              A glimpse into our farms, harvests, and the hardworking families
              behind every melon we ship.
            </p>
          </MotionWrapper>
        </div>

        {/* ── SLIDESHOW ── */}
        <MotionWrapper delay={0.15}>
          <div
            className="relative mx-auto overflow-hidden"
            style={{
              maxWidth:    1100,
              aspectRatio: '16 / 9',
              background:  'rgba(245,240,232,0.05)',
              border:      '1px solid rgba(245,240,232,0.12)',
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Land Watermelon gallery"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={reduced ? false : { opacity: 0, scale: 1.04 }}
                animate={reduced ? {} : { opacity: 1, scale: 1 }}
                exit={reduced ? {} : { opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}: ${slide.title}`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                  sizes="(max-width: 1100px) 100vw, 1100px"
                  className="w-full h-full object-cover"
                  priority={index === 0}
                />

                {/* Bottom gradient + caption */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(13,26,10,0.78) 0%, rgba(13,26,10,0.0) 55%)',
                  }}
                  aria-hidden
                />
                <div className="absolute left-0 right-0 bottom-0 px-7 py-6">
                  <div
                    className="text-[10px] tracking-[2px] uppercase mb-1.5"
                    style={{ color: 'var(--gold)' }}
                  >
                    {slide.tag}
                  </div>
                  <h3
                    className="font-display font-light"
                    style={{ fontSize: 'clamp(20px,2.2vw,28px)', color: 'var(--cream)' }}
                  >
                    {slide.title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next controls */}
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous slide"
                  className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  style={{
                    background: 'rgba(13,26,10,0.45)',
                    color:      'var(--cream)',
                    border:     '1px solid rgba(245,240,232,0.18)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(192,57,43,0.9)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(13,26,10,0.45)')}
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next slide"
                  className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  style={{
                    background: 'rgba(13,26,10,0.45)',
                    color:      'var(--cream)',
                    border:     '1px solid rgba(245,240,232,0.18)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(192,57,43,0.9)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(13,26,10,0.45)')}
                >
                  →
                </button>
              </>
            )}
          </div>
        </MotionWrapper>

        {/* ── DOTS ── */}
        {count > 1 && (
          <div
            className="flex items-center justify-center gap-2 mt-6"
            role="tablist"
            aria-label="Select slide"
          >
            {slides.map((s, i) => {
              const active = i === index
              return (
                <button
                  key={`${s.src}-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className="transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  style={{
                    width:      active ? 32 : 8,
                    height:     4,
                    background: active ? 'var(--gold)' : 'rgba(245,240,232,0.25)',
                  }}
                />
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
