import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "GymTrack Pro terms and conditions. Read the terms of service for using the GymTrack Pro iOS gym workout tracker app.",
  alternates: {
    canonical: "https://gymtrackpro.app/terms",
  },
};

export default function TermsAndConditions() {
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
            Terms and Conditions
          </h1>
          <p className="text-sm text-gym-text-muted mb-10">
            Last updated: January 29, 2026
          </p>

          <div className="space-y-8 text-gym-text-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By downloading, installing, or using GymTrack Pro (&quot;the
                App&quot;), you agree to be bound by these Terms and Conditions
                (&quot;Terms&quot;). If you do not agree to these Terms, do not
                use the App.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                2. Description of Service
              </h2>
              <p>
                GymTrack Pro is an iOS-native gym workout tracker that allows
                users to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Follow structured workout splits (PPL, Upper/Lower, Bro Split,
                  Full Body, Arnold Split, and custom splits)
                </li>
                <li>Log sets, reps, and weights during workouts</li>
                <li>
                  Track progress with charts showing estimated 1RM, volume
                  trends, and personal records
                </li>
                <li>Maintain workout streaks and view workout history</li>
                <li>
                  Use built-in tools including rest timer, BMI calculator, 1RM
                  estimator, barbell plate loader, and unit converter
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                3. Eligibility
              </h2>
              <p>
                You must be at least 13 years of age to use GymTrack Pro. By
                using the App, you represent that you meet this age requirement.
                If you are under 18, you should review these Terms with a parent
                or guardian.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                4. Free and Pro Tiers
              </h2>
              <p>
                GymTrack Pro offers two tiers of service:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  <strong className="text-gym-text">Free Tier:</strong> Includes
                  full workout logging, 7 built-in split templates, rest timer,
                  basic progress charts, workout streaks, PR detection, and
                  offline-first operation. No account required.
                </li>
                <li>
                  <strong className="text-gym-text">Pro Tier ($4.99/month):</strong>{" "}
                  Includes everything in Free plus advanced analytics with Swift
                  Charts, unlimited custom split builder, CloudKit sync, HealthKit
                  integration, Apple Watch companion, data export (CSV/PDF), and
                  priority support.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                5. Subscriptions and Payments
              </h2>
              <p>
                Pro subscriptions are processed through Apple&apos;s in-app
                purchase system and are subject to Apple&apos;s terms and
                conditions.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Subscriptions automatically renew unless cancelled at least 24
                  hours before the end of the current billing period
                </li>
                <li>
                  Your Apple ID account will be charged for renewal within 24
                  hours prior to the end of the current period
                </li>
                <li>
                  You can manage and cancel subscriptions in your Apple ID
                  Account Settings
                </li>
                <li>
                  No refunds will be provided for partial subscription periods,
                  unless required by applicable law
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                6. User Responsibilities
              </h2>
              <p>
                You are responsible for:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Using the App in compliance with all applicable laws and
                  regulations
                </li>
                <li>
                  Maintaining the security of your device and any data stored on
                  it
                </li>
                <li>
                  Backing up your workout data (the App stores data locally on
                  your device)
                </li>
                <li>
                  Consulting a healthcare professional before beginning any
                  exercise program
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                7. Health and Fitness Disclaimer
              </h2>
              <p>
                <strong className="text-gym-text">
                  GymTrack Pro is not a medical device and does not provide
                  medical advice.
                </strong>{" "}
                The App is designed as a workout logging and progress tracking
                tool. Features such as estimated 1RM calculations (using the
                Epley formula), BMI calculator, and progress charts are provided
                for informational purposes only.
              </p>
              <p className="mt-3">
                Always consult a qualified healthcare professional or certified
                personal trainer before starting any new exercise program,
                especially if you have pre-existing health conditions. You use
                the App and perform exercises at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                8. Intellectual Property
              </h2>
              <p>
                All content, features, and functionality of GymTrack Pro —
                including but not limited to the design, code, graphics, logos,
                icons, and user interface — are the exclusive property of
                GymTrack Pro and are protected by copyright, trademark, and
                other intellectual property laws.
              </p>
              <p className="mt-3">
                You may not copy, modify, distribute, sell, or lease any part of
                the App, nor may you reverse-engineer or attempt to extract the
                source code.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                9. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, GymTrack Pro
                and its developers shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages,
                including but not limited to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Loss of data stored on your device</li>
                <li>
                  Injury or harm resulting from exercises performed while using
                  the App
                </li>
                <li>
                  Inaccuracies in calculated values (1RM estimates, BMI, etc.)
                </li>
                <li>Interruption or unavailability of the App</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                10. Disclaimer of Warranties
              </h2>
              <p>
                The App is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, either express or
                implied, including but not limited to implied warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                11. Termination
              </h2>
              <p>
                You may stop using the App at any time by deleting it from your
                device. We reserve the right to modify or discontinue the App
                (or any part of it) at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                12. Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. Any changes will be
                posted on this page with an updated revision date. Continued use
                of the App after changes constitutes acceptance of the revised
                Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                13. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with applicable laws, without regard to conflict of law
                principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gym-text mb-3">
                14. Contact Us
              </h2>
              <p>
                If you have questions about these Terms, please contact us at:{" "}
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
