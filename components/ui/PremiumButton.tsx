'use client'

import Link     from 'next/link'
import { cn }   from '@/lib/utils'

interface PremiumButtonProps {
  href?:      string
  onClick?:   () => void
  variant?:   'primary' | 'gold' | 'secondary' | 'ghost'
  children:   React.ReactNode
  className?: string
  type?:      'button' | 'submit' | 'reset'
  disabled?:  boolean
  external?:  boolean
}

const BASE = [
  'inline-flex items-center gap-2',
  'text-[11px] tracking-[2px] uppercase font-body font-normal',
  'px-7 py-3.5',
  'border-none cursor-pointer transition-all duration-200',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
  'disabled:opacity-50 disabled:pointer-events-none',
].join(' ')

const VARIANTS = {
  primary:   'bg-red text-cream hover:bg-red-2',
  gold:      'bg-gold text-dark font-medium hover:bg-gold-3',
  secondary: 'bg-transparent text-cream/65 border border-cream/20 hover:border-cream hover:text-cream',
  ghost:     'bg-transparent text-gold hover:text-gold-3 underline-offset-4 hover:underline px-0',
}

export function PremiumButton({
  href,
  onClick,
  variant   = 'primary',
  children,
  className,
  type      = 'button',
  disabled,
  external,
}: PremiumButtonProps) {
  const classes = cn(BASE, VARIANTS[variant], className)

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
