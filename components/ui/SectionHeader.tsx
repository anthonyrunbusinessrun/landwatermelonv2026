import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?:    string
  title:       React.ReactNode
  subtitle?:   string
  align?:      'left' | 'center'
  theme?:      'dark' | 'cream'
  className?:  string
  maxWidth?:   string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align    = 'left',
  theme    = 'cream',
  className,
  maxWidth = 'max-w-xl',
}: SectionHeaderProps) {
  const isDark = theme === 'dark'

  return (
    <div className={cn(
      align === 'center' && 'text-center mx-auto',
      maxWidth,
      className
    )}>
      {/* Section tag with dot */}
      {eyebrow && (
        <div className={cn(
          'inline-flex items-center gap-2 mb-4',
          align === 'center' && 'justify-center'
        )}>
          <span className={cn(
            'w-[5px] h-[5px] rounded-full flex-shrink-0',
            isDark ? 'bg-red' : 'bg-red'
          )} />
          <span className={cn(
            'text-[9px] tracking-[3px] uppercase',
            isDark ? 'text-cream/45' : 'text-mid'
          )}>
            {eyebrow}
          </span>
        </div>
      )}

      {/* Title */}
      <h2 className={cn(
        'font-display font-light leading-[1.1] mb-5',
        'text-[clamp(36px,4vw,56px)]',
        isDark ? 'text-cream' : 'text-dark'
      )}>
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={cn(
          'text-base leading-[1.75]',
          isDark ? 'text-cream/60' : 'text-[#5A6B4A]'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

/* Colored emphasis helpers used inside h2 */
export function GoldEm({ children }: { children: React.ReactNode }) {
  return <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>{children}</em>
}

export function RedEm({ children }: { children: React.ReactNode }) {
  return <em style={{ color: 'var(--red2)', fontStyle: 'italic' }}>{children}</em>
}

/* Horizontal rule — red → gold → sage */
export function ColorRule({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center', className)}>
      <span className="w-12 h-0.5 bg-red block" />
      <span className="w-8 h-0.5 bg-gold block ml-1" />
      <span className="flex-1 h-px bg-green/25 block ml-1" />
    </div>
  )
}

/* Section tag dot indicator */
export function SectionTag({
  label,
  dotColor = 'red',
  theme    = 'cream',
  center   = false,
}: {
  label:     string
  dotColor?: 'red' | 'gold' | 'sage'
  theme?:    'dark' | 'cream'
  center?:   boolean
}) {
  const dotColors = {
    red:  'bg-red',
    gold: 'bg-gold',
    sage: 'bg-sage',
  }

  return (
    <div className={cn('inline-flex items-center gap-2 mb-4', center && 'justify-center')}>
      <span className={cn('w-[5px] h-[5px] rounded-full flex-shrink-0', dotColors[dotColor])} />
      <span className={cn(
        'text-[9px] tracking-[3px] uppercase',
        theme === 'dark' ? 'text-cream/45' : 'text-mid'
      )}>
        {label}
      </span>
    </div>
  )
}
