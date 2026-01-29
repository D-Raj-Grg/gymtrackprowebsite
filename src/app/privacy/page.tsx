import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "GymTrack Pro privacy policy. Your workout data stays on your device. No accounts, no tracking, no data collection. Privacy-first gym tracker for iOS.",
  alternates: {
    canonical: "https://gymtrackpro.app/privacy",
  },
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-gym-text-muted mb-10">
            Last updated: January 29, 2026
          </p>

          <div className="space-y-8 text-gym-text-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                1. Overview
              </h2>
              <p>
                GymTrack Pro (&quot;the App&quot;) is an iOS-native gym workout
                tracker built with SwiftUI and SwiftData. We are committed to
                protecting your privacy. This Privacy Policy explains how we
                handle your information when you use our App.
              </p>
              <p className="mt-3">
                <strong className="text-gym-text">
                  The short version: your data stays on your device. We do not
                  collect, store, or share any personal information.
                </strong>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                2. Data Collection
              </h2>
              <p>GymTrack Pro does <strong className="text-gym-text">not</strong> collect:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Personal information (name, email, phone number)</li>
                <li>Account credentials (no account is required)</li>
                <li>Location data</li>
                <li>Device identifiers or advertising IDs</li>
                <li>Usage analytics or telemetry</li>
                <li>Crash reports sent to third parties</li>
                <li>Any data transmitted over the internet</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                3. Data Storage
              </h2>
              <p>
                All workout data — including exercises, sets, reps, weights,
                workout history, personal records, streaks, and preferences — is
                stored locally on your device using Apple&apos;s SwiftData
                framework. No data is sent to external servers.
              </p>
              <p className="mt-3">
                The App operates 100% offline. No internet connection is
                required to use any feature in the free tier.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                4. CloudKit Sync (Pro Feature)
              </h2>
              <p>
                Pro subscribers may optionally enable CloudKit sync to keep
                their workout data synchronized across multiple Apple devices.
                When enabled:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Data is synced through Apple&apos;s CloudKit infrastructure
                </li>
                <li>
                  All data is encrypted in transit and at rest by Apple
                </li>
                <li>
                  We do not have access to your CloudKit data — it is managed
                  entirely by Apple under your Apple ID
                </li>
                <li>
                  You can disable CloudKit sync at any time in the App settings
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                5. HealthKit Integration (Pro Feature)
              </h2>
              <p>
                Pro subscribers may optionally connect GymTrack Pro to Apple
                HealthKit. When enabled:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Workout data may be written to HealthKit with your explicit
                  permission
                </li>
                <li>
                  We only write data you authorize — we do not read from
                  HealthKit
                </li>
                <li>
                  HealthKit data is governed by Apple&apos;s privacy policies
                </li>
                <li>
                  You can revoke HealthKit access at any time in iOS Settings
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                6. Third-Party Services
              </h2>
              <p>
                GymTrack Pro has <strong className="text-gym-text">zero</strong>{" "}
                third-party dependencies for data collection. We do not use:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Analytics SDKs (no Google Analytics, Firebase, Mixpanel, etc.)</li>
                <li>Advertising networks</li>
                <li>Crash reporting services</li>
                <li>Social media SDKs</li>
                <li>Any external APIs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                7. In-App Purchases
              </h2>
              <p>
                GymTrack Pro offers a Pro subscription through Apple&apos;s
                in-app purchase system. All payment processing is handled
                entirely by Apple. We do not receive or store your payment
                information, credit card details, or Apple ID.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                8. Children&apos;s Privacy
              </h2>
              <p>
                GymTrack Pro does not knowingly collect information from children
                under the age of 13. The App does not collect any personal
                information from any user, regardless of age.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                9. Data Deletion
              </h2>
              <p>
                Since all data is stored locally on your device, you can delete
                all GymTrack Pro data at any time by:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Deleting the App from your device</li>
                <li>Using the &quot;Clear All Data&quot; option in the App settings</li>
              </ul>
              <p className="mt-3">
                If you use CloudKit sync, you can also delete your synced data
                through iCloud settings on your Apple device.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                11. Contact Us
              </h2>
              <p>
                If you have questions or concerns about this Privacy Policy,
                please contact us at:{" "}
                <a
                  href="mailto:support@gymtrackpro.app"
                  className="text-gym-primary hover:text-gym-primary-light transition-colors underline"
                >
                  support@gymtrackpro.app
                </a>
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
