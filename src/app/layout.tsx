import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const siteUrl = "https://gymtrackpro.app";
const siteName = "GymTrack Pro";
const siteDescription =
  "GymTrack Pro is an iOS-native gym workout tracker built with SwiftUI. Log sets in under 3 seconds, follow structured splits (PPL, Upper/Lower, Bro Split), track progress with beautiful charts, and maintain workout streaks — all offline-first with zero data collection.";

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "GymTrack Pro — iOS Gym Workout Tracker | Log Sets, Track Progress, Build Streaks",
    template: "%s | GymTrack Pro",
  },
  description: siteDescription,
  keywords: [
    "gym tracker",
    "workout tracker",
    "iOS gym app",
    "workout logging",
    "gym workout tracker",
    "set logging",
    "rep tracker",
    "weight training app",
    "strength training tracker",
    "progressive overload",
    "workout splits",
    "PPL split",
    "push pull legs",
    "upper lower split",
    "bro split",
    "workout streaks",
    "personal records",
    "1RM calculator",
    "Epley formula",
    "gym progress charts",
    "SwiftUI gym app",
    "offline workout tracker",
    "barbell plate calculator",
    "BMI calculator",
    "rest timer",
    "workout history",
    "volume tracking",
    "GymTrack Pro",
  ],
  authors: [{ name: "GymTrack Pro" }],
  creator: "GymTrack Pro",
  publisher: "GymTrack Pro",
  applicationName: "GymTrack Pro",
  category: "Health & Fitness",
  classification: "Health & Fitness",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title:
      "GymTrack Pro — iOS Gym Workout Tracker | Log Sets, Track Progress, Build Streaks",
    description: siteDescription,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GymTrack Pro — iOS Gym Workout Tracker with structured splits, progress charts, and workout streaks",
        type: "image/png",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "GymTrack Pro — iOS Gym Workout Tracker",
    description:
      "Log sets in under 3 seconds. Follow structured splits, track progress with beautiful charts, and build workout streaks. Offline-first, privacy-focused, native iOS.",
    images: ["/images/og-image.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  // Manifest
  manifest: "/manifest.json",

  // Alternate
  alternates: {
    canonical: siteUrl,
  },

  // Apple-specific
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "black-translucent",
  },

  other: {
    "apple-itunes-app": "app-id=YOUR_APP_ID",
    "mobile-web-app-capable": "yes",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "GymTrack Pro",
  operatingSystem: "iOS 17+",
  applicationCategory: "HealthApplication",
  description: siteDescription,
  url: siteUrl,
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description:
        "Free tier with full workout logging, built-in splits, streaks, and PR detection",
    },
    {
      "@type": "Offer",
      price: "4.99",
      priceCurrency: "USD",
      description:
        "Pro tier with advanced analytics, custom splits, cloud sync, and Apple Watch support",
    },
  ],
  featureList: [
    "Log sets in under 3 seconds",
    "7 built-in workout split templates (PPL, Upper/Lower, Bro Split, Full Body, Arnold)",
    "Progress charts with estimated 1RM (Epley formula)",
    "Workout streaks and automatic PR detection",
    "Offline-first with SwiftData — no internet required",
    "Rest timer, BMI calculator, 1RM estimator, barbell plate loader",
    "Calendar heatmap workout history",
    "Privacy-first — zero data collection",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    ratingCount: "6",
    bestRating: "5",
    worstRating: "1",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is GymTrack Pro free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! The free tier includes full workout logging, 7 built-in split templates (PPL, Upper/Lower, Bro Split, Full Body, Arnold Split, and hybrids), rest timer with push notifications, basic progress charts, workout streaks, and automatic PR detection. No account required.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "100% offline-first. GymTrack Pro uses SwiftData for on-device storage — no internet connection is needed to log your workouts. Your data lives on your iPhone.",
      },
    },
    {
      "@type": "Question",
      name: "What workout splits are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The free tier includes 7 built-in templates: Push/Pull/Legs (PPL), Upper/Lower, Bro Split, Full Body, Arnold Split, UL-PPL hybrid, and PPL-UL hybrid. Pro subscribers can build unlimited custom splits.",
      },
    },
    {
      "@type": "Question",
      name: "How does the 1RM estimation work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GymTrack Pro uses the Epley formula: weight × (1 + reps / 30). Every time you log a set, the app calculates your estimated one-rep max and tracks it over time.",
      },
    },
    {
      "@type": "Question",
      name: "What devices does it support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GymTrack Pro is built 100% native for iOS 17+ using SwiftUI and SwiftData. It runs on iPhone. Apple Watch companion app is planned for a future release.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data private and secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your data stays on your device by default. No account is required. Zero external dependencies — no analytics, no tracking, no data collection. Optional CloudKit sync is encrypted and managed by Apple.",
      },
    },
    {
      "@type": "Question",
      name: "Can I switch between kg and lbs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Choose your preferred weight unit during onboarding, and change it anytime in Profile settings. All displays, suggestions, and charts update automatically.",
      },
    },
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GymTrack Pro",
  url: siteUrl,
  logo: `${siteUrl}/images/brand/splash.png`,
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
