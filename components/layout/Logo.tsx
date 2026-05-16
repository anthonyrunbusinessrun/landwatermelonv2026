'use client'

import Image          from 'next/image'
import Link           from 'next/link'
import { siteConfig } from '@/config/site'

type LogoVariant = 'default' | 'onDark'
type LogoSize    = 'navbar' | 'footer' | 'default'

interface LogoProps {
  variant?:      LogoVariant
  size?:         LogoSize
  showTagline?:  boolean
  className?:    string
  href?:         string
}

const sizeClasses: Record<LogoSize, string> = {
  navbar:
    'h-[32px] w-auto sm:h-[36px] lg:h-[38px] max-w-[min(280px,calc(100vw-6.5rem))] sm:max-w-[320px] lg:max-w-[360px]',
  footer:
    'h-[34px] w-auto sm:h-[38px] max-w-[280px]',
  default:
    'h-auto w-auto max-h-10 max-w-[280px]',
}

export function Logo({
  variant     = 'default',
  size        = 'default',
  showTagline = false,
  className,
  href        = '#home',
}: LogoProps) {
  const { logo } = siteConfig
  const src =
    variant === 'onDark' && logo.srcOnDark ? logo.srcOnDark : logo.src

  return (
    <Link
      href={href}
      className={`shrink-0 ${className ?? 'group block'}`}
    >
      <Image
        src={src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        priority={size === 'navbar'}
        className={`object-contain object-left ${sizeClasses[size]}`}
      />
      {showTagline && (
        <div
          className="text-[9px] tracking-[2px] uppercase mt-0.5"
          style={{ color: 'rgba(26,34,22,0.45)' }}
        >
          {siteConfig.tagline}
        </div>
      )}
    </Link>
  )
}
