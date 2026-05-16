import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0D1A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        <div style={{ fontSize: 80, lineHeight: 1 }}>🍉</div>
        <div style={{ fontSize: 18, color: '#E8C547', fontFamily: 'serif', letterSpacing: 1 }}>
          Land
        </div>
      </div>
    ),
    { ...size }
  )
}
