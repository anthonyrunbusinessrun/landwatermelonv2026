import type { Metadata } from 'next'
import { redirect }      from 'next/navigation'
import { cookies }       from 'next/headers'
import Link              from 'next/link'

export const metadata: Metadata = {
  title: 'Admin — Raymon J Land, Inc.',
  robots: { index: false, follow: false },
}

// Simple session check — in production replace with iron-session or next-auth
async function getAdminSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_session')?.value
  return token ?? null
}

const NAV = [
  { label: 'Inquiries',   href: '/admin/inquiries',   icon: '📋' },
  { label: 'Orders',      href: '/admin/orders',      icon: '📦' },
  { label: 'Subscribers', href: '/admin/subscribers', icon: '📮' },
]

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getAdminSession()

  // Protect admin routes — redirect to login if no session
  // (login page is excluded from this layout via route groups)
  if (!session && !process.env.ADMIN_BYPASS_AUTH) {
    redirect('/admin/login')
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F5F0E8' }}>
      {/* Sidebar */}
      <aside
        style={{
          width:      '220px',
          flexShrink: 0,
          background: '#0D1A0A',
          borderRight:'3px solid #2D4A22',
          display:    'flex',
          flexDirection: 'column',
        }}
      >
        {/* Logo */}
        <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(74,122,53,0.2)' }}>
          <div
            style={{
              fontFamily:   'Georgia, serif',
              fontSize:     '15px',
              fontWeight:   '300',
              color:        '#F5F0E8',
              lineHeight:   1.2,
            }}
          >
            Raymon <em style={{ color: '#7AAD5E' }}>J</em> Land
          </div>
          <div style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(245,240,232,0.35)', marginTop: '3px' }}>
            Admin Panel
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: '16px 0' }}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display:     'flex',
                alignItems:  'center',
                gap:         '10px',
                padding:     '12px 20px',
                fontSize:    '12px',
                letterSpacing: '1px',
                color:       'rgba(245,240,232,0.55)',
                textDecoration: 'none',
                transition:  'all 0.15s',
              }}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(74,122,53,0.15)' }}>
          <Link
            href="/"
            style={{ fontSize: '11px', color: 'rgba(245,240,232,0.3)', textDecoration: 'none' }}
          >
            ← Back to site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, overflow: 'auto' }}>
        {children}
      </main>
    </div>
  )
}
