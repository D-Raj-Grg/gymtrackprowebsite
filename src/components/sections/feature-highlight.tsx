"use client";

import Image from "next/image";
import { BlurFade } from "@/components/magicui/animated-beam";
import { PhoneMockup } from "@/components/magicui/phone-mockup";
import {
  Timer,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

export function FeatureHighlight() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Feature 1 - Workout Logging */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <BlurFade>
              <div className="inline-flex items-center gap-2 rounded-full bg-gym-accent/10 px-3 py-1 text-xs font-medium text-gym-accent mb-4">
                <Timer className="h-3.5 w-3.5" />
                Lightning Fast
              </div>
            </BlurFade>
            <BlurFade delay={0.1}>
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl text-gym-text">
                Log any set in{" "}
                <span className="bg-gradient-to-r from-gym-accent to-cyan-400 bg-clip-text text-transparent">
                  under 3 seconds
                </span>
              </h3>
            </BlurFade>
            <BlurFade delay={0.2}>
              <p className="mt-4 text-gym-text-muted leading-relaxed">
                Smart suggestions from your previous sessions auto-populate
                weight and reps. Just confirm and move on. Progressive overload
                is built right into the suggestion engine.
              </p>
            </BlurFade>
            <BlurFade delay={0.3}>
              <ul className="mt-6 space-y-3">
                {[
                  "Smart weight suggestions from last session",
                  "Auto-increment for progressive overload",
                  "Rest timer with push notifications (90s default)",
                  "Exercise history at your fingertips",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gym-text-muted"
                  >
                    <CheckCircle2 className="h-4 w-4 text-gym-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </BlurFade>
          </div>
          <BlurFade
            delay={0.2}
            className="order-1 lg:order-2 flex justify-center"
          >
            <PhoneMockup className="w-[240px] h-[500px]">
              <Image
                src="/images/screens/workout.png"
                alt="GymTrack Pro Workout screen - structured splits with exercises, sets, and Start Workout button"
                width={240}
                height={500}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </PhoneMockup>
          </BlurFade>
        </div>

        {/* Feature 2 - Progress Analytics */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <BlurFade delay={0.2} className="flex justify-center">
            <PhoneMockup className="w-[240px] h-[500px]">
              <Image
                src="/images/screens/progress.png"
                alt="GymTrack Pro Progress screen - volume trend chart, stats, and top lifts by Est. 1RM"
                width={240}
                height={500}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </PhoneMockup>
          </BlurFade>
          <div>
            <BlurFade>
              <div className="inline-flex items-center gap-2 rounded-full bg-gym-primary/10 px-3 py-1 text-xs font-medium text-gym-primary mb-4">
                <BarChart3 className="h-3.5 w-3.5" />
                Deep Insights
              </div>
            </BlurFade>
            <BlurFade delay={0.1}>
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl text-gym-text">
                See your strength gains in{" "}
                <span className="bg-gradient-to-r from-gym-primary to-gym-accent bg-clip-text text-transparent">
                  beautiful charts
                </span>
              </h3>
            </BlurFade>
            <BlurFade delay={0.2}>
              <p className="mt-4 text-gym-text-muted leading-relaxed">
                Built with Swift Charts for buttery-smooth performance. Track
                your estimated 1RM using the Epley formula, volume trends, and
                muscle group balance across all exercises.
              </p>
            </BlurFade>
            <BlurFade delay={0.3}>
              <ul className="mt-6 space-y-3">
                {[
                  "Estimated 1RM tracking (Epley formula)",
                  "Volume and intensity trends over time",
                  "Personal record history and timeline",
                  "Export your data in CSV or PDF format",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gym-text-muted"
                  >
                    <CheckCircle2 className="h-4 w-4 text-gym-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
