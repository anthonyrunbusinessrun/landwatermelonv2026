'use client'

import { motion, type Variants } from 'framer-motion'
import { useReducedMotion }       from '@/hooks/useReducedMotion'
import { cn }                     from '@/lib/utils'

const DEFAULT_VARIANTS: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

interface MotionWrapperProps {
  children:  React.ReactNode
  className?: string
  delay?:    number
  duration?: number
  variants?: Variants
  margin?:   string
  once?:     boolean
}

export function MotionWrapper({
  children,
  className,
  delay    = 0,
  duration = 0.65,
  variants = DEFAULT_VARIANTS,
  margin   = '-8%',
  once     = true,
}: MotionWrapperProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

/* Stagger container — wraps multiple animated children */
export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delay   = 0,
}: {
  children:  React.ReactNode
  className?: string
  stagger?:  number
  delay?:    number
}) {
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8%' }}
      variants={{
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

/* Individual stagger child */
export function StaggerChild({
  children,
  className,
}: {
  children:  React.ReactNode
  className?: string
}) {
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      variants={{
        hidden:  { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}
