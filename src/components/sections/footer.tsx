import Link from "next/link";
import { Dumbbell } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Download", href: "#download" },
  ],
  App: [
    { label: "Workout Splits", href: "#features" },
    { label: "Progress Charts", href: "#how-it-works" },
    { label: "Exercise Library", href: "#features" },
    { label: "Rest Timer", href: "#features" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  Social: [
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer aria-label="Site footer" className="border-t border-gym-border/40 bg-gym-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 sm:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-gym-primary to-gym-accent">
                  <Dumbbell className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="font-bold text-gym-text">GymTrack Pro</span>
              </Link>
              <p className="text-sm text-gym-text-muted leading-relaxed">
                Train smarter, track effortlessly. The iOS-native gym companion
                built with SwiftUI.
              </p>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold mb-4 text-gym-text">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gym-text-muted hover:text-gym-text transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gym-border/40 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gym-text-muted">
            &copy; {new Date().getFullYear()} GymTrack Pro. All rights reserved.
          </p>
          <p className="text-xs text-gym-text-muted">
            Built with SwiftUI for iOS
          </p>
        </div>
      </div>
    </footer>
  );
}
