import { NextResponse } from 'next/server'

export async function GET() {
  const checks: Record<string, string> = {
    status: 'ok',
    ts:     new Date().toISOString(),
    env:    process.env.NODE_ENV ?? 'unknown',
  }

  // DB connectivity check (non-fatal — Railway restarts if DB unreachable)
  try {
    const { prisma } = await import('@/lib/prisma')
    await prisma.$queryRaw`SELECT 1`
    checks.db = 'connected'
  } catch {
    checks.db = 'unavailable'
    // Still return 200 — let Railway health check pass
    // DB may be temporarily unavailable during startup
  }

  return NextResponse.json(checks, {
    headers: { 'Cache-Control': 'no-store' },
  })
}
