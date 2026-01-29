# GymTrack Pro — Website

Marketing landing page for **GymTrack Pro**, an iOS-native gym workout tracker built with SwiftUI.

Live site: [gymtrackpro.app](https://gymtrackpro.app)

## About GymTrack Pro

GymTrack Pro helps lifters train smarter and track effortlessly:

- **Structured Splits** — PPL, Upper/Lower, Bro Split, Full Body, Arnold Split, and custom splits
- **Fast Logging** — Log any set in under 3 seconds with smart weight suggestions and progressive overload
- **Progress Charts** — Estimated 1RM (Epley formula), volume trends, and top lifts built with Swift Charts
- **Workout Streaks** — Consecutive day tracking to keep you consistent
- **Personal Records** — Automatic PR detection with instant notifications
- **Workout History** — Calendar heatmap with full session details
- **Built-In Tools** — Rest timer, stopwatch, BMI calculator, 1RM estimator, barbell plate loader, unit converter
- **Offline-First** — 100% on-device storage with SwiftData. No account required. Zero data collection.

**Free tier** includes full workout logging, 7 split templates, streaks, and PR detection.
**Pro tier** ($4.99/mo) adds advanced analytics, custom splits, CloudKit sync, HealthKit, Apple Watch, and CSV/PDF export.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, TypeScript) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Components | [shadcn/ui](https://ui.shadcn.com) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev) |
| Font | Geist Sans & Geist Mono (local) |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with full SEO metadata & JSON-LD
│   ├── page.tsx            # Landing page (12 sections)
│   ├── privacy/page.tsx    # Privacy Policy
│   ├── terms/page.tsx      # Terms and Conditions
│   ├── robots.ts           # robots.txt generation
│   ├── sitemap.ts          # sitemap.xml generation
│   └── globals.css         # Tailwind config with gym-* color tokens
├── components/
│   ├── sections/
│   │   ├── header.tsx      # Sticky header with mobile menu
│   │   ├── hero.tsx        # Hero with phone mockup & floating badges
│   │   ├── feature-scroll.tsx  # 6 feature cards grid
│   │   ├── bento-grid.tsx  # Analytics dashboard bento layout
│   │   ├── feature-highlight.tsx  # 4 alternating phone+text rows
│   │   ├── app-showcase.tsx    # Horizontal scroll of 5 app screens
│   │   ├── benefits.tsx    # 6 benefit cards
│   │   ├── testimonials.tsx    # Masonry testimonial cards
│   │   ├── pricing.tsx     # Free & Pro tier comparison
│   │   ├── faq.tsx         # 7 expandable FAQ items
│   │   ├── cta.tsx         # Download call-to-action
│   │   └── footer.tsx      # Footer with nav links
│   ├── magicui/
│   │   ├── iphone-15-pro.tsx   # Realistic iPhone 15 Pro SVG mockup
│   │   ├── phone-mockup.tsx    # Simple CSS phone frame
│   │   └── animated-beam.tsx   # BlurFade animation component
│   └── ui/                 # shadcn/ui primitives
public/
├── images/
│   ├── screens/            # App screenshots (dashboard, workout, history, etc.)
│   ├── onboarding/         # Onboarding flow screenshots
│   ├── tools/              # Tool screens (1RM, BMI, timer, plates, etc.)
│   └── brand/              # Splash screen & branding assets
└── manifest.json           # Web app manifest
```

## SEO

The site includes comprehensive SEO optimization:

- **Metadata** — Title template, 28 keywords, Open Graph, Twitter cards, canonical URLs
- **Structured Data** — JSON-LD schemas for MobileApplication, FAQPage, and Organization
- **Technical** — robots.txt, sitemap.xml, web app manifest, viewport config
- **Accessibility** — Semantic HTML with `aria-label` on all sections and nav landmarks
- **Performance** — `font-display: swap`, Next.js Image optimization with priority/lazy loading

## Color Palette

Custom Tailwind tokens matching the iOS app's dark theme:

| Token | Hex | Usage |
|-------|-----|-------|
| `gym-background` | `#0F172A` | Page background |
| `gym-card` | `#1E293B` | Card backgrounds |
| `gym-primary` | `#6366F1` | Primary (Indigo) |
| `gym-primary-light` | `#818CF8` | Primary light |
| `gym-accent` | `#22D3EE` | Accent (Cyan) |
| `gym-success` | `#10B981` | Success (Emerald) |
| `gym-warning` | `#F59E0B` | Warning (Amber) |
| `gym-error` | `#EF4444` | Error (Red) |
| `gym-text` | `#F1F5F9` | Primary text |
| `gym-text-muted` | `#94A3B8` | Muted text |

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

Deploy to [Vercel](https://vercel.com) for automatic builds from the `main` branch:

```bash
# Install Vercel CLI
pnpm i -g vercel

# Deploy
vercel
```

## Legal Pages

Required for App Store submission:

- `/privacy` — Privacy Policy (11 sections covering data handling, CloudKit, HealthKit, third parties)
- `/terms` — Terms and Conditions (14 sections covering service, subscriptions, health disclaimer, liability)

## License

All rights reserved. This is a proprietary project for GymTrack Pro.
