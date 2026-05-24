import { NextRequest, NextResponse } from 'next/server'

/**
 * Force HTTPS at the application edge.
 *
 * Railway terminates TLS at its proxy and forwards the original protocol in
 * the `x-forwarded-proto` header. If a visitor arrives over plain HTTP we
 * 308-redirect them to the same URL on HTTPS *before* any HTML is sent.
 *
 * Combined with the `Strict-Transport-Security` (HSTS) and
 * `Content-Security-Policy: upgrade-insecure-requests` headers configured in
 * `next.config.ts`, this gives three layers of defence against the
 * "Not Secure" badge:
 *
 *   1. Server-side redirect (this middleware) — every plain-HTTP request is
 *      rewritten to HTTPS before the browser ever renders the page.
 *   2. HSTS — after a single secure visit, browsers refuse to use HTTP for
 *      the next two years.
 *   3. CSP `upgrade-insecure-requests` — any stray `http://` asset reference
 *      in the rendered page is upgraded to `https://` by the browser
 *      automatically, preventing mixed-content warnings.
 *
 * The middleware is a no-op in development so `npm run dev` keeps working on
 * `http://localhost:3000`.
 */
export function middleware(req: NextRequest) {
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next()
  }

  const proto = req.headers.get('x-forwarded-proto')
  const host  = req.headers.get('host')

  if (proto === 'http' && host) {
    const url = `https://${host}${req.nextUrl.pathname}${req.nextUrl.search}`
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  // Run on every page request but skip Next.js internals, static files,
  // and the Railway healthcheck endpoint (which must stay reachable).
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|api/health|.*\\.[\\w]+$).*)',
  ],
}
