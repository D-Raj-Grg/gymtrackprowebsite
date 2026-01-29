"use client";

import { BlurFade } from "@/components/magicui/animated-beam";
import { PhoneMockup } from "@/components/magicui/phone-mockup";
import {
  Timer,
  BarChart3,
  CheckCircle2,
  Dumbbell,
  Check,
  Plus,
} from "lucide-react";

export function FeatureHighlight() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Feature 1 - Smart Workout Logging */}
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
              <div className="flex flex-col h-full bg-gym-background p-4 pt-10 text-gym-text">
                <div className="flex items-center gap-2 mb-4">
                  <Dumbbell className="h-4 w-4 text-gym-primary" />
                  <p className="text-sm font-semibold">Active Workout</p>
                  <span className="ml-auto text-[10px] text-gym-accent font-mono">
                    23:45
                  </span>
                </div>
                <p className="text-xs text-gym-text-muted mb-3">
                  Push Day · Chest, Shoulders, Triceps
                </p>

                {/* Exercise: Bench Press */}
                <div className="rounded-xl bg-gym-card border border-gym-border p-3 mb-3">
                  <p className="text-xs font-semibold mb-2">Bench Press</p>
                  {[
                    { set: 1, weight: "135", reps: "10", done: true },
                    { set: 2, weight: "155", reps: "8", done: true },
                    { set: 3, weight: "175", reps: "6", done: true },
                    { set: 4, weight: "180", reps: "5", done: false },
                  ].map((s) => (
                    <div
                      key={s.set}
                      className="flex items-center gap-2 text-[10px] py-1.5 border-b border-gym-border/30 last:border-0"
                    >
                      <span className="w-6 text-gym-text-muted">
                        S{s.set}
                      </span>
                      <span className="font-mono w-12">{s.weight} lbs</span>
                      <span className="font-mono w-8">×{s.reps}</span>
                      <span className="ml-auto">
                        {s.done ? (
                          <Check className="h-3 w-3 text-gym-success" />
                        ) : (
                          <div className="h-3 w-3 rounded-full border border-gym-border" />
                        )}
                      </span>
                    </div>
                  ))}
                  <button className="flex items-center gap-1 text-[10px] text-gym-primary mt-2">
                    <Plus className="h-3 w-3" /> Add Set
                  </button>
                </div>

                {/* Rest Timer */}
                <div className="rounded-xl bg-gym-primary/10 border border-gym-primary/30 p-3 mb-3 text-center">
                  <p className="text-[10px] text-gym-primary-light mb-1">
                    Rest Timer
                  </p>
                  <p className="text-xl font-bold font-mono text-gym-primary">
                    1:24
                  </p>
                  <p className="text-[10px] text-gym-text-muted">of 1:30</p>
                </div>

                {/* Next exercise */}
                <div className="rounded-xl bg-gym-card border border-gym-border p-3 mt-auto">
                  <p className="text-[10px] text-gym-text-muted mb-1">
                    Up Next
                  </p>
                  <p className="text-xs font-medium">
                    Incline Dumbbell Press
                  </p>
                  <p className="text-[10px] text-gym-text-muted">
                    3 × 10 · 50 lbs
                  </p>
                </div>
              </div>
            </PhoneMockup>
          </BlurFade>
        </div>

        {/* Feature 2 - Progress Analytics */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <BlurFade delay={0.2} className="flex justify-center">
            <PhoneMockup className="w-[240px] h-[500px]">
              <div className="flex flex-col h-full bg-gym-background p-4 pt-10 text-gym-text">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="h-4 w-4 text-gym-primary" />
                  <p className="text-sm font-semibold">Progress</p>
                </div>
                <div className="rounded-xl bg-gym-card border border-gym-border p-3 mb-3">
                  <p className="text-xs text-gym-text-muted mb-2">
                    Bench Press · Est. 1RM
                  </p>
                  <div className="flex items-end gap-1 h-24">
                    {[50, 55, 58, 60, 65, 62, 68, 72, 75, 80, 78, 85].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-gym-primary to-gym-accent"
                          style={{ height: `${h}%` }}
                        />
                      )
                    )}
                  </div>
                  <div className="flex justify-between mt-1 text-[9px] text-gym-text-muted">
                    <span>Jan</span>
                    <span>Dec</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-gym-card border border-gym-border p-2.5">
                    <p className="text-[10px] text-gym-text-muted">
                      Current 1RM
                    </p>
                    <p className="text-sm font-bold font-mono text-gym-primary">
                      225 lbs
                    </p>
                  </div>
                  <div className="rounded-lg bg-gym-card border border-gym-border p-2.5">
                    <p className="text-[10px] text-gym-text-muted">Progress</p>
                    <p className="text-sm font-bold font-mono text-gym-success">
                      +15%
                    </p>
                  </div>
                  <div className="rounded-lg bg-gym-card border border-gym-border p-2.5">
                    <p className="text-[10px] text-gym-text-muted">
                      Total Sets
                    </p>
                    <p className="text-sm font-bold font-mono text-gym-text">
                      1,248
                    </p>
                  </div>
                  <div className="rounded-lg bg-gym-card border border-gym-border p-2.5">
                    <p className="text-[10px] text-gym-text-muted">Volume</p>
                    <p className="text-sm font-bold font-mono text-gym-text">
                      340k lbs
                    </p>
                  </div>
                </div>
              </div>
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
