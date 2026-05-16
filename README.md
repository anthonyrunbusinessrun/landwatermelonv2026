# Raymon J Land, Inc. — Production Platform

> Enterprise-grade luxury agricultural web platform.
> Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · PostgreSQL · Prisma · Railway

---

## Architecture

```
app/                    # Next.js App Router
  layout.tsx            # Root layout — fonts, metadata, structured data
  page.tsx              # Home page — section assembly
  globals.css           # Tailwind + design tokens + textures
  sitemap.ts
  robots.ts
  api/health/route.ts   # Railway health check

components/
  layout/
    Navbar.tsx          # Fixed nav — warm cream, red/gold rule
    MobileNav.tsx       # Animated mobile drawer
    Footer.tsx          # Dark footer with cert columns
  sections/
    Hero.tsx            # Dark gradient hero — cinematic entrance
    StatsBar.tsx        # Stats + trust bars (dark)
    About.tsx           # Cream — family story + image
    Varieties.tsx       # Dark — 4 product cards
    Regions.tsx         # Cream — 4-column photo grid
    BigNumber.tsx       # Red — 3,000 stat hero
    Testimonial.tsx     # Cream — editorial quote
    FAQ.tsx             # Cream — animated accordion
    CTA.tsx             # Dark — contact form (Server Action)
  ui/
    MotionWrapper.tsx   # Framer Motion reveal system
    SectionHeader.tsx   # Section tags, h2, color accents
    PremiumButton.tsx   # 4-variant button system

actions/
  contact.ts            # Server Action — form submission + spam prevention

content/
  varieties.ts          # Product data
  regions.ts            # Growing regions data
  faq.ts                # FAQ data

config/
  site.ts               # All business info — single source of truth

lib/
  prisma.ts             # Singleton client
  utils.ts              # cn() helper
  validations.ts        # Zod schemas

hooks/
  useReducedMotion.ts   # Accessibility

prisma/
  schema.prisma         # 3 models: ContactInquiry, OrderRequest, NewsletterSubscriber

types/
  index.ts
```

---

## Quick Start

```bash
# 1. Clone
git clone https://github.com/anthonyrunbusinessrun/landwatermelonv2026
cd landwatermelonv2026

# 2. Install
npm install

# 3. Environment
cp .env.example .env.local
# Fill in DATABASE_URL from Railway PostgreSQL

# 4. Database
npx prisma generate
npx prisma db push        # dev
# or: npx prisma migrate deploy  # production

# 5. Dev server
npm run dev
```

---

## Railway Setup

### PostgreSQL

1. Railway Dashboard → New Service → PostgreSQL
2. Copy `DATABASE_URL` from the Variables tab
3. Add to Railway service environment variables:

```
DATABASE_URL=postgresql://...
NODE_ENV=production
NEXTAUTH_SECRET=<openssl rand -base64 32>
NEXT_PUBLIC_SITE_URL=https://landwatermelon.com
```

### Deploy settings

Railway reads `railway.toml`:
- Build: `npm ci && npx prisma generate && npm run build`
- Start: `npx prisma migrate deploy && npm start`
- Health: `/api/health`

---

## GitHub Secrets Required

In your repository Settings → Secrets → Actions:

| Secret | Value |
|--------|-------|
| `RAILWAY_TOKEN` | From Railway Account → Tokens |
| `DATABASE_URL`  | Railway PostgreSQL URL (for build) |

---

## Design System

### Color Palette

| Variable     | Hex       | Usage |
|---|---|---|
| `--dark`     | `#0D1A0A` | Hero/CTA/Footer BG |
| `--forest`   | `#1A2216` | Dark sections |
| `--green`    | `#2D4A22` | Mid-tone green |
| `--mid`      | `#4A7A35` | Tag text on cream |
| `--sage`     | `#7AAD5E` | Accent / logo |
| `--cream`    | `#F5F0E8` | Cream sections |
| `--nude`     | `#EDE7D5` | Mid cream |
| `--red`      | `#C0392B` | Primary CTA |
| `--red2`     | `#E8503A` | Hover red |
| `--gold`     | `#E8C547` | Gold accent |

### Typography

- **Display**: Cormorant Garamond — weights 300/400, italic
- **Body**: DM Sans — weights 300/400/500
- H1: `clamp(52px, 5vw, 76px)` weight 300
- H2: `clamp(36px, 4vw, 56px)` weight 300
- Tags: 9–10px, tracking 2–3px, uppercase

### Texture System

- **Shell stripes** — SVG wavy lines on dark sections (outside of watermelon)
- **Seeds** — SVG scattered ellipses on cream sections (inside the watermelon)

---

## Content Updates

All content lives in `/content/*.ts` — update without touching components.

- `content/varieties.ts` — product cards
- `content/regions.ts`   — photo grid
- `content/faq.ts`       — accordion
- `config/site.ts`       — all business info (phone, email, stats)

---

## Production Checklist

- [ ] `DATABASE_URL` set in Railway
- [ ] `RAILWAY_TOKEN` set in GitHub Secrets
- [ ] `NEXTAUTH_SECRET` generated and set
- [ ] `prisma migrate deploy` runs on first deploy (via `railway.toml`)
- [ ] Replace watermark images with licensed photography
- [ ] Add `/public/og/default.jpg` (1200×630)
- [ ] Custom domain configured in Railway
- [ ] DNS pointing to Railway

---

## Prisma Migrations

```bash
# Create a new migration
npx prisma migrate dev --name init

# Deploy in production
npx prisma migrate deploy

# Open Studio (local)
npm run db:studio
```
