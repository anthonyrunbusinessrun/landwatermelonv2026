import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Orders — Admin' }
export const dynamic = 'force-dynamic'
export const revalidate = 0

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  PENDING:   { bg: 'rgba(232,197,71,0.15)',  color: '#D4A820' },
  REVIEWING: { bg: 'rgba(74,122,53,0.15)',   color: '#4A7A35' },
  QUOTED:    { bg: 'rgba(122,173,94,0.15)',  color: '#2D4A22' },
  CONFIRMED: { bg: 'rgba(45,74,34,0.15)',    color: '#1A2216' },
  DECLINED:  { bg: 'rgba(192,57,43,0.1)',    color: '#C0392B' },
}

export default async function OrdersPage() {
  let orders: any[] = []
  let dbError: string | null = null

  try {
      const { prisma } = await import('@/lib/prisma')
    orders = await prisma.orderRequest.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    })
  } catch {
    dbError = 'Database not connected.'
  }

  return (
    <div style={{ padding: '32px 40px' }}>
      <div style={{ marginBottom: '32px' }}>
        <p style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#4A7A35', marginBottom: '6px' }}>Admin</p>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: '300', color: '#0D1A0A', margin: 0 }}>
          Order Requests
        </h1>
        <p style={{ fontSize: '13px', color: '#7A8A6A', marginTop: '6px' }}>
          {orders.length} total · {orders.filter(o => o.status === 'PENDING').length} pending
        </p>
      </div>

      {dbError && (
        <div style={{ background: 'rgba(192,57,43,0.08)', borderLeft: '3px solid #C0392B', padding: '16px 20px' }}>
          <p style={{ fontSize: '13px', color: '#C0392B', margin: 0 }}>{dbError}</p>
        </div>
      )}

      {!dbError && (
        <div style={{ background: '#fff', border: '1px solid rgba(45,74,34,0.12)' }}>
          {orders.length === 0 ? (
            <div style={{ padding: '48px', textAlign: 'center', color: '#7A8A6A', fontSize: '14px' }}>
              No order requests yet.
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#F5F0E8', borderBottom: '2px solid rgba(45,74,34,0.12)' }}>
                  {['Date', 'Company', 'Contact', 'Email', 'Varieties', 'Qty', 'Status'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4A7A35', fontWeight: 500 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orders.map((order, i: number) => {
                  const s = STATUS_STYLES[order.status] ?? { bg: '#eee', color: '#666' }
                  return (
                    <tr key={order.id} style={{ borderBottom: '1px solid rgba(45,74,34,0.06)', background: i % 2 === 0 ? '#fff' : 'rgba(245,240,232,0.3)' }}>
                      <td style={td}>{order.createdAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</td>
                      <td style={{ ...td, fontWeight: 400 }}>{order.companyName}</td>
                      <td style={td}>{order.contactName}</td>
                      <td style={td}>
                        <a href={`mailto:${order.email}`} style={{ color: '#2D4A22', textDecoration: 'none' }}>{order.email}</a>
                      </td>
                      <td style={td}>{order.varietyIds.join(', ') || '—'}</td>
                      <td style={td}>{order.estimatedQty}</td>
                      <td style={td}>
                        <span style={{ padding: '2px 8px', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', background: s.bg, color: s.color, fontWeight: 500 }}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  )
}

const td: React.CSSProperties = { padding: '12px 16px', fontSize: '13px', color: '#0D1A0A', verticalAlign: 'top' }
