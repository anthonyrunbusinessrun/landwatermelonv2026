import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark:   '#0D1A0A',
        forest: '#1A2216',
        green:  '#2D4A22',
        mid:    '#4A7A35',
        sage:   '#7AAD5E',
        cream:  '#F5F0E8',
        nude:   '#EDE7D5',
        warm:   '#E8E0CC',
        red:    { DEFAULT: '#C0392B', 2: '#E8503A' },
        gold:   { DEFAULT: '#E8C547', 2: '#D4A820', 3: '#F5D96B' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(52px,5vw,76px)', { lineHeight: '1.05', fontWeight: '300' }],
        'h2':   ['clamp(36px,4vw,56px)', { lineHeight: '1.1',  fontWeight: '300' }],
        'stat': ['clamp(80px,13vw,148px)', { lineHeight: '1', fontWeight: '300' }],
        'tag':  ['9px',  { letterSpacing: '3px' }],
        'cta':  ['11px', { letterSpacing: '2px' }],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.3em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        'section': '96px',
        'section-sm': '64px',
        'nav': '64px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        content: '560px',
      },
      backgroundImage: {
        'grad-hero':  'linear-gradient(145deg, #0D1A0A 0%, #1A2216 15%, #2D4A22 40%, #4A7A35 68%, #EDE7D5 100%)',
        'grad-dark':  'linear-gradient(160deg, #1A2216 0%, #2D4A22 60%, #3A5C2A 100%)',
        'grad-cream': 'linear-gradient(160deg, #F5F0E8 0%, #EDE7D5 50%, #E0D8C4 100%)',
        'grad-cta':   'linear-gradient(145deg, #0D1A0A 0%, #1A2216 50%, #2D4A22 100%)',
        'grad-rule':  'linear-gradient(90deg, #C0392B 0%, #E8503A 30%, #E8C547 65%, #F5D96B 85%, transparent 100%)',
        'grad-divider': 'linear-gradient(90deg, #C0392B, #E8C547)',
      },
      boxShadow: {
        'premium': '0 24px 60px rgba(45, 74, 34, 0.15)',
        'card':    '0 8px 32px rgba(13, 26, 10, 0.12)',
        'gold':    '0 8px 32px rgba(232, 197, 71, 0.2)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.65s ease forwards',
        'float':   'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
