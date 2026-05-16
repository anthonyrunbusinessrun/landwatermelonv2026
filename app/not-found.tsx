import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: 'linear-gradient(145deg, #0D1A0A 0%, #1A2216 50%, #2D4A22 100%)' }}
    >
      {/* Shell texture */}
      <div className="absolute inset-0 texture-shell pointer-events-none" aria-hidden />

      <div className="relative z-10">
        <p
          className="text-[9px] tracking-[3px] uppercase mb-6"
          style={{ color: 'rgba(245,240,232,0.4)' }}
        >
          404 — Page Not Found
        </p>

        <h1
          className="font-display font-light mb-4"
          style={{
            fontSize:  'clamp(60px, 10vw, 120px)',
            color:     'var(--cream)',
            lineHeight: 1,
          }}
        >
          Lost in the <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>field.</em>
        </h1>

        <p
          className="text-base mb-10 max-w-sm mx-auto"
          style={{ color: 'rgba(245,240,232,0.55)', lineHeight: 1.75 }}
        >
          That page doesn&apos;t exist. Let&apos;s get you back to the harvest.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-block text-[11px] tracking-[2px] uppercase px-7 py-3.5 transition-colors duration-200"
            style={{ background: 'var(--red)', color: 'var(--cream)' }}
          >
            Back to Home
          </Link>
          <a
            href={`mailto:info@landwatermelon.com`}
            className="inline-block text-[11px] tracking-[2px] uppercase px-7 py-3.5 transition-all duration-200"
            style={{ background: 'transparent', color: 'rgba(245,240,232,0.65)', border: '1.5px solid rgba(245,240,232,0.2)' }}
          >
            Contact Us
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center">
          <span className="w-12 h-0.5 block" style={{ background: 'var(--red)' }} />
          <span className="w-8 h-0.5 block ml-1" style={{ background: 'var(--gold)' }} />
          <span className="w-24 h-px block ml-1" style={{ background: 'rgba(74,122,53,0.25)' }} />
        </div>
      </div>
    </div>
  )
}
