import Link from 'next/link'

export const dynamic   = 'force-dynamic'
export const revalidate = 0

interface StatCard {
  label: string
  value: string | number
  sub:   string
  color: string
  href:  string
}

export default async function AdminPage() {
  let stats = { inquiries: 0, newInquiries: 0, orders: 0, subscribers: 0 }
  let dbConnected = false

  try {
    const { prisma } = await import('@/lib/prisma')
    const [inquiries, orders, subscribers, newInquiries] = await Promise.all([
      prisma.contactInquiry.count(),
      prisma.orderRequest.count(),
      prisma.newsletterSubscriber.count({ where: { active: true } }),
      prisma.contactInquiry.count({ where: { status: 'NEW' } }),
    ])
    stats = { inquiries, newInquiries, orders, subscribers }
    dbConnected = true
  } catch { /* DB not connected yet — shows graceful fallback */ }

  const cards: StatCard[] = [
    { label: 'Contact Inquiries', value: stats.inquiries,   sub: `${stats.newInquiries} new`, color: '#C0392B', href: '/admin/inquiries'   },
    { label: 'Order Requests',    value: stats.orders,      sub: 'pending review',             color: '#E8C547', href: '/admin/orders'      },
    { label: 'Subscribers',       value: stats.subscribers, sub: 'active',                     color: '#7AAD5E', href: '/admin/subscribers' },
  ]

  return (
    <div style={{ padding: '32px 40px' }}>
      <div style={{ marginBottom: '40px' }}>
        <div style={{ height: '3px', background: 'linear-gradient(90deg, #C0392B, #E8C547, transparent)', marginBottom: '24px', width: '200px' }} />
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '40px', fontWeight: '300', color: '#0D1A0A', margin: '0 0 6px' }}>
          Dashboard
        </h1>
        <p style={{ fontSize: '13px', color: '#7A8A6A', margin: 0 }}>
          Raymon J Land, Inc. — Admin Panel
          {!dbConnected && <span style={{ marginLeft: '12px', color: '#C0392B' }}>⚠ Database not connected</span>}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '48px' }}>
        {cards.map((card: StatCard) => (
          <Link key={card.href} href={card.href} style={{ textDecoration: 'none' }}>
            <div style={{ background: '#fff', border: '1px solid rgba(45,74,34,0.12)', padding: '24px', borderLeft: `3px solid ${card.color}` }}>
              <p style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#7A8A6A', margin: '0 0 10px' }}>{card.label}</p>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '48px', fontWeight: '300', color: '#0D1A0A', margin: '0 0 4px', lineHeight: 1 }}>
                {dbConnected ? card.value : '—'}
              </p>
              <p style={{ fontSize: '11px', color: card.color, margin: 0 }}>{card.sub}</p>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: '300', color: '#0D1A0A', marginBottom: '16px' }}>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="mailto:info@landwatermelon.com" style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', padding: '10px 20px', background: '#2D4A22', color: '#F5F0E8', textDecoration: 'none' }}>
            Open Email
          </a>
          <Link href="/admin/inquiries" style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', padding: '10px 20px', background: 'transparent', color: '#0D1A0A', border: '1px solid rgba(45,74,34,0.3)', textDecoration: 'none' }}>
            View Inquiries →
          </Link>
          <Link href="/" style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', padding: '10px 20px', background: 'transparent', color: '#7A8A6A', border: '1px solid rgba(45,74,34,0.15)', textDecoration: 'none' }}>
            View Site →
          </Link>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(45,74,34,0.12)', paddingTop: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        <div>
          <p style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#7AAD5E', marginBottom: '12px', opacity: 0.7 }}>Contact</p>
          <p style={{ fontSize: '13px', color: '#5A6B4A', lineHeight: 1.7 }}>
            (386) 935-1865<br />info@landwatermelon.com<br />Branford, FL 32008
          </p>
        </div>
        <div>
          <p style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#7AAD5E', marginBottom: '12px', opacity: 0.7 }}>System</p>
          <p style={{ fontSize: '13px', color: '#5A6B4A', lineHeight: 1.7 }}>
            Next.js 15 · PostgreSQL · Prisma<br />
            DB: {dbConnected ? '✓ Connected' : '✗ Not connected'}<br />
            Env: {process.env.NODE_ENV ?? 'unknown'}
          </p>
        </div>
      </div>
    </div>
  )
}
