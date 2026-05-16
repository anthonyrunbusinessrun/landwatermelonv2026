import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Subscribers — Admin' }
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function SubscribersPage() {
  let subs: any[] = []
  let dbError: string | null = null

  try {
      const { prisma } = await import('@/lib/prisma')
    subs = await prisma.newsletterSubscriber.findMany({
      orderBy: { createdAt: 'desc' },
    })
  } catch {
    dbError = 'Database not connected.'
  }

  const active   = subs.filter(s => s.active).length
  const csvData  = subs.filter(s => s.active).map(s => s.email).join('\n')

  return (
    <div style={{ padding: '32px 40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
        <div>
          <p style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#4A7A35', marginBottom: '6px' }}>Admin</p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: '300', color: '#0D1A0A', margin: 0 }}>
            Newsletter Subscribers
          </h1>
          <p style={{ fontSize: '13px', color: '#7A8A6A', marginTop: '6px' }}>
            {active} active · {subs.length} total
          </p>
        </div>
        {!dbError && subs.length > 0 && (
          <a
            href={`data:text/csv;charset=utf-8,Email\n${encodeURIComponent(csvData)}`}
            download="subscribers.csv"
            style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', padding: '10px 20px', background: '#2D4A22', color: '#F5F0E8', textDecoration: 'none' }}
          >
            Export CSV
          </a>
        )}
      </div>

      {dbError && (
        <div style={{ background: 'rgba(192,57,43,0.08)', borderLeft: '3px solid #C0392B', padding: '16px 20px' }}>
          <p style={{ fontSize: '13px', color: '#C0392B', margin: 0 }}>{dbError}</p>
        </div>
      )}

      {!dbError && (
        <div style={{ background: '#fff', border: '1px solid rgba(45,74,34,0.12)' }}>
          {subs.length === 0 ? (
            <div style={{ padding: '48px', textAlign: 'center', color: '#7A8A6A', fontSize: '14px' }}>
              No subscribers yet.
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#F5F0E8', borderBottom: '2px solid rgba(45,74,34,0.12)' }}>
                  {['Date', 'Email', 'Source', 'Status'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4A7A35', fontWeight: 500 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {subs.map((sub, i: number) => (
                  <tr key={sub.id} style={{ borderBottom: '1px solid rgba(45,74,34,0.06)', background: i % 2 === 0 ? '#fff' : 'rgba(245,240,232,0.3)' }}>
                    <td style={td}>{sub.createdAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                    <td style={{ ...td, fontWeight: 400 }}>
                      <a href={`mailto:${sub.email}`} style={{ color: '#2D4A22', textDecoration: 'none' }}>{sub.email}</a>
                    </td>
                    <td style={td}>{sub.source ?? '—'}</td>
                    <td style={td}>
                      <span style={{
                        padding: '2px 8px', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 500,
                        background: sub.active ? 'rgba(122,173,94,0.15)' : 'rgba(192,57,43,0.1)',
                        color:      sub.active ? '#2D4A22' : '#C0392B',
                      }}>
                        {sub.active ? 'Active' : 'Unsubscribed'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  )
}

const td: React.CSSProperties = { padding: '12px 16px', fontSize: '13px', color: '#0D1A0A', verticalAlign: 'top' }
