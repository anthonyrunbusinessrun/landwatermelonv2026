'use client'

import { useEffect, useRef } from 'react'
import { motion }            from 'framer-motion'
import { useReducedMotion }  from '@/hooks/useReducedMotion'

/**
 * Promo film banner that plays right after the Hero.
 *
 * Source is 5070x2160 (cinematic ~2.35:1). We re-encoded to 1920x816 H.264 +
 * AAC for cross-browser compatibility and apply `aspect-ratio: 1920 / 816`
 * so the frame keeps the same shape on every screen size — no letterboxing,
 * no cropping.
 *
 * Browsers refuse to autoplay videos with sound, so the spec requires
 * `muted` + `playsInline` for the autoplay to actually start. We honour
 * `prefers-reduced-motion` by pausing the video when the OS asks us to.
 */
export function PromoVideo() {
  const reduced = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)

  // Some browsers (notably mobile Safari) refuse the initial autoplay
  // attempt; calling .play() again after the element mounts forces a retry.
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (reduced) {
      el.pause()
      return
    }
    const tryPlay = el.play()
    if (tryPlay && typeof tryPlay.catch === 'function') {
      // Swallow the AbortError that fires if the user navigates away mid-load.
      tryPlay.catch(() => {})
    }
  }, [reduced])

  return (
    <section
      id="promo-video"
      aria-label="Raymon J Land — short film"
      className="section-dark px-6 md:px-12 3xl:px-20 py-10 md:py-12"
    >
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 24 }}
        whileInView={reduced ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-12%' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative container-wide overflow-hidden"
        style={{
          aspectRatio: '1920 / 816',
          background:  '#000',
          border:      '1px solid rgba(245,240,232,0.12)',
        }}
      >
        <video
          ref={videoRef}
          className="block w-full h-full"
          style={{ objectFit: 'cover' }}
          src="/videos/raymonjland.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          aria-hidden
        />
      </motion.div>
    </section>
  )
}
