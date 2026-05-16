export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:text-sm"
      style={{ background: 'var(--gold)', color: 'var(--dark)', outline: 'none' }}
    >
      Skip to main content
    </a>
  )
}
