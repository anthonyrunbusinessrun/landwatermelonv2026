import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Inquiries — Admin' }
export const dynamic   = 'force-dynamic'

export default async function InquiriesPage() {
  let inquiries: any[]   = []
  let dbError: string | null = null

  try {
    const { prisma } = await import('@/lib/prisma')
    inquiries = await prisma.contactInquiry.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    })
  } catch {
    dbError = 'Database not connected — run Railway migrations first.'
  }

  const newCount = inquiries.filter((inq: any) => inq.status === 'NEW').length

  const STATUS_COLORS: Record<string, string> = {
    NEW: '#E8C547', READ: '#7AAD5E', REPLIED: '#2D4A22', ARCHIVED: 'rgba(245,240,232,0.2)',
  }
  const TYPE_LABELS: Record<string, string> = {
    GENERAL: 'General', WHOLESALE: 'Wholesale', LOGISTICS: 'Logistics', MEDIA: 'Media',
  }

  return (
    <div style={{ padding: '32px 40px' }}>
      <div style={{ marginBottom: '32px' }}>
        <p style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#4A7A35', marginBottom: '6px' }}>Admin</p>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: '300', color: '#0D1A0A', margin: 0 }}>
          Contact Inquiries
        </h1>
        <p style={{ fontSize: '13px', color: '#7A8A6A', marginTop: '6px' }}>
          {newCount > 0 ? <span style={{ color: '#C0392B', fontWeight: 500 }}>{newCount} new</span> : 'All caught up'}
          {' · '}{inquiries.length} total
        </p>
      </div>

      {dbError && (
        <div style={{ background: 'rgba(192,57,43,0.08)', borderLeft: '3px solid #C0392B', padding: '16px 20px', marginBottom: '24px' }}>
          <p style={{ fontSize: '13px', color: '#C0392B', margin: 0 }}>{dbError}</p>
        </div>
      )}

      {!dbError && (
        <div style={{ background: '#fff', border: '1px solid rgba(45,74,34,0.12)', overflow: 'hidden' }}>
          {inquiries.length === 0 ? (
            <div style={{ padding: '48px', textAlign: 'center', color: '#7A8A6A', fontSize: '14px' }}>
              No inquiries yet — form submissions appear here.
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#F5F0E8', borderBottom: '2px solid rgba(45,74,34,0.12)' }}>
                  {['Date', 'Name', 'Company', 'Email', 'Type', 'Status', 'Message'].map((h: string) => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4A7A35', fontWeight: 500 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inq: any, i: number) => (
                  <tr key={inq.id} style={{ borderBottom: '1px solid rgba(45,74,34,0.06)', background: i % 2 === 0 ? '#fff' : 'rgba(245,240,232,0.3)' }}>
                    <td style={td}>{new Date(inq.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</td>
                    <td style={{ ...td, fontWeight: 400 }}>{inq.name}</td>
                    <td style={td}>{inq.company ?? '—'}</td>
                    <td style={td}><a href={`mailto:${inq.email}`} style={{ color: '#2D4A22', textDecoration: 'none' }}>{inq.email}</a></td>
                    <td style={td}>{TYPE_LABELS[inq.type] ?? inq.type}</td>
                    <td style={td}>
                      <span style={{ padding: '2px 8px', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', background: `${STATUS_COLORS[inq.status] ?? '#ccc'}22`, color: STATUS_COLORS[inq.status] ?? '#666', fontWeight: 500 }}>
                        {inq.status}
                      </span>
                    </td>
                    <td style={{ ...td, maxWidth: '280px' }}>
                      <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: '#5A6B4A' }}>
                        {inq.message}
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
