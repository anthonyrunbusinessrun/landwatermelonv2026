
/* ── STATS BAR ── */
const STATS = [
  { num: '90', unit: 'M+',   unitColor: 'gold', label: 'Pounds Annually' },
  { num: '3,000', unit: '',  unitColor: 'red',  label: 'Truck Loads / Year', numStyle: 'red' },
  { num: '6',  unit: '',     unitColor: 'sage', label: 'Growing Regions', numStyle: 'sage' },
  { num: '59', unit: '+',    unitColor: 'gold', label: 'Years Family Tradition' },
]

const ACCENT = {
  gold: '#E8C547',
  red:  '#E8503A',
  sage: '#7AAD5E',
}

export function StatsBar() {
  return (
    <div
      style={{
        background:   'rgba(13,26,10,0.8)',
        borderTop:    '1px solid rgba(74,122,53,0.2)',
        borderBottom: '1px solid rgba(74,122,53,0.2)',
      }}
      aria-label="Key statistics"
    >
      <div className="container-wide flex flex-wrap">
      {STATS.map((s, i) => (
        <div
          key={i}
          className="flex-1 basis-1/2 md:basis-auto px-8 py-5"
          style={{
            borderRight: i < STATS.length - 1 ? '1px solid rgba(74,122,53,0.15)' : 'none',
          }}
        >
          <div
            className="font-display font-light text-[32px] leading-none"
            style={{ color: s.numStyle ? ACCENT[s.numStyle as keyof typeof ACCENT] : 'var(--cream)' }}
          >
            {s.numStyle ? s.num : (
              <>
                {s.num}
                <em style={{ fontSize: '18px', color: ACCENT[s.unitColor as keyof typeof ACCENT], fontStyle: 'normal' }}>
                  {s.unit}
                </em>
              </>
            )}
          </div>
          <div
            className="text-[9px] tracking-[2px] uppercase mt-1"
            style={{ color: 'rgba(245,240,232,0.4)' }}
          >
            {s.label}
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

/* ── TRUST BAR ── */
const TRUST_ITEMS = [
  { label: 'PrimusGFS Certified', dot: 'red'  },
  { label: 'GAP · GHP · GMP',     dot: 'gold' },
  { label: 'Est. 1966',            dot: 'sage' },
  { label: '6 Growing Regions',   dot: 'red'  },
  { label: 'Yellow Meat Specialist', dot: 'gold' },
  { label: 'PTI Compliant',        dot: 'sage' },
]

export function TrustBar() {
  return (
    <div
      className="px-12 3xl:px-20 py-4"
      style={{
        background:   'rgba(13,26,10,0.65)',
        borderBottom: '1px solid rgba(74,122,53,0.08)',
      }}
      aria-label="Certifications and credentials"
    >
      <div className="container-wide flex flex-wrap items-center gap-6">
      {TRUST_ITEMS.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <span
            className="w-[5px] h-[5px] rounded-full flex-shrink-0"
            style={{ background: ACCENT[item.dot as keyof typeof ACCENT] }}
            aria-hidden
          />
          <span
            className="text-[9px] tracking-[2px] uppercase"
            style={{ color: 'rgba(245,240,232,0.4)' }}
          >
            {item.label}
          </span>
        </div>
      ))}
      </div>
    </div>
  )
}
