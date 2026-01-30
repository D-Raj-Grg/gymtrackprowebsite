import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle, Bug, Lightbulb, Shield, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with GymTrack Pro. Contact us for bug reports, feature requests, or general questions about the iOS gym workout tracker.",
  alternates: {
    canonical: "https://gymtrackpro.app/support",
  },
};

const faqs = [
  {
    question: "Is my data backed up?",
    answer:
      "GymTrack Pro stores all data locally on your device using SwiftData. Your workouts, exercises, and progress are saved automatically. We recommend keeping regular iCloud backups of your device to protect your data.",
  },
  {
    question: "Can I sync data across multiple devices?",
    answer:
      "Currently, GymTrack Pro stores data locally on a single device. Cross-device sync is being considered for a future update.",
  },
  {
    question: "How do I restore my data after reinstalling?",
    answer:
      "If you have an iCloud backup of your device, restoring from that backup will bring back your GymTrack Pro data. Without a backup, local data cannot be recovered after uninstalling.",
  },
  {
    question: "Is GymTrack Pro free?",
    answer:
      "GymTrack Pro is free to download with core features available at no cost. A Pro subscription unlocks advanced analytics, unlimited workout splits, and additional tools.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      'Subscriptions are managed through the App Store. Go to Settings → Apple ID → Subscriptions on your iPhone, find GymTrack Pro, and tap "Cancel Subscription."',
  },
  {
    question: "Does the app collect my personal data?",
    answer:
      "No. GymTrack Pro is built with privacy at its core. All your data stays on your device. We do not collect, track, or share any personal information. See our Privacy Policy for full details.",
  },
];

export default function Support() {
  return (
    <div className="relative min-h-screen bg-gym-background">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gym-text-muted hover:text-gym-text transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-gym-text mb-2">
            Support
          </h1>
          <p className="text-base text-gym-text-muted mb-12">
            Need help with GymTrack Pro? We&apos;re here for you.
          </p>

          {/* Contact options */}
          <div className="grid gap-4 sm:grid-cols-2 mb-16">
            <a
              href="mailto:support@gymtrackpro.app"
              className="group flex items-start gap-4 rounded-xl border border-gym-border/40 bg-gym-card/50 p-5 transition-colors hover:border-gym-primary/40 hover:bg-gym-card"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gym-primary/10">
                <Mail className="h-5 w-5 text-gym-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gym-text group-hover:text-gym-primary transition-colors">
                  Email Us
                </p>
                <p className="text-xs text-gym-text-muted mt-1">
                  support@gymtrackpro.app
                </p>
              </div>
            </a>

            <a
              href="mailto:support@gymtrackpro.app?subject=Bug Report"
              className="group flex items-start gap-4 rounded-xl border border-gym-border/40 bg-gym-card/50 p-5 transition-colors hover:border-gym-primary/40 hover:bg-gym-card"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
                <Bug className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gym-text group-hover:text-red-400 transition-colors">
                  Report a Bug
                </p>
                <p className="text-xs text-gym-text-muted mt-1">
                  Help us squash issues
                </p>
              </div>
            </a>

            <a
              href="mailto:support@gymtrackpro.app?subject=Feature Request"
              className="group flex items-start gap-4 rounded-xl border border-gym-border/40 bg-gym-card/50 p-5 transition-colors hover:border-gym-primary/40 hover:bg-gym-card"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                <Lightbulb className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gym-text group-hover:text-amber-400 transition-colors">
                  Request a Feature
                </p>
                <p className="text-xs text-gym-text-muted mt-1">
                  Share your ideas with us
                </p>
              </div>
            </a>

            <a
              href="mailto:support@gymtrackpro.app?subject=General Feedback"
              className="group flex items-start gap-4 rounded-xl border border-gym-border/40 bg-gym-card/50 p-5 transition-colors hover:border-gym-primary/40 hover:bg-gym-card"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gym-accent/10">
                <MessageCircle className="h-5 w-5 text-gym-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gym-text group-hover:text-gym-accent transition-colors">
                  General Feedback
                </p>
                <p className="text-xs text-gym-text-muted mt-1">
                  We&apos;d love to hear from you
                </p>
              </div>
            </a>
          </div>

          {/* FAQ section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="h-6 w-6 text-gym-primary" />
              <h2 className="text-xl font-semibold text-gym-text">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-gym-border/40 bg-gym-card/30 p-5"
                >
                  <h3 className="text-sm font-semibold text-gym-text mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-gym-text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy & response time note */}
          <div className="space-y-8 text-gym-text-muted leading-relaxed">
            <section className="flex items-start gap-4 rounded-xl border border-gym-border/40 bg-gym-card/30 p-5">
              <Shield className="h-5 w-5 text-gym-primary shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-semibold text-gym-text mb-2">
                  Your Privacy Matters
                </h2>
                <p className="text-sm">
                  GymTrack Pro does not collect any personal data or analytics.
                  All your workout data is stored locally on your device. For
                  full details, see our{" "}
                  <Link
                    href="/privacy"
                    className="text-gym-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                Response Time
              </h2>
              <p>
                We aim to respond to all support requests within 48 hours.
                Bug reports and critical issues are prioritized. Please include
                your iOS version and device model when reporting issues to help
                us resolve them faster.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
