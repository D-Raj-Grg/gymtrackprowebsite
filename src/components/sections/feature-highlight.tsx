"use client";

import { BlurFade } from "@/components/magicui/animated-beam";
import { PhoneMockup } from "@/components/magicui/phone-mockup";
import { motion } from "framer-motion";
import {
  Brain,
  LineChart,
  Sparkles,
  CheckCircle2,
  Dumbbell,
} from "lucide-react";

export function FeatureHighlight() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Feature 1 - AI Coach */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-32">
          <div className="order-2 lg:order-1">
            <BlurFade>
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-500 mb-4">
                <Brain className="h-3.5 w-3.5" />
                AI-Powered
              </div>
            </BlurFade>
            <BlurFade delay={0.1}>
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Your personal AI coach that{" "}
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  adapts to you
                </span>
              </h3>
            </BlurFade>
            <BlurFade delay={0.2}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our AI analyzes your workout history, recovery patterns, and
                goals to create the perfect training program. It adapts in
                real-time based on your performance.
              </p>
            </BlurFade>
            <BlurFade delay={0.3}>
              <ul className="mt-6 space-y-3">
                {[
                  "Personalized workout splits based on your goals",
                  "Smart rep and weight suggestions every session",
                  "Recovery insights to prevent overtraining",
                  "Progressive overload tracking built-in",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 text-violet-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </BlurFade>
          </div>
          <BlurFade delay={0.2} className="order-1 lg:order-2 flex justify-center">
            <PhoneMockup className="w-[240px] h-[500px]">
              <div className="flex flex-col h-full bg-gradient-to-b from-neutral-950 to-neutral-900 p-4 pt-10 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4 text-violet-400" />
                  <p className="text-sm font-semibold">AI Coach</p>
                </div>
                <div className="rounded-xl bg-violet-600/20 border border-violet-500/30 p-3 mb-3">
                  <p className="text-xs text-violet-300 mb-1">Recommendation</p>
                  <p className="text-[11px] text-violet-100">
                    Based on your last session, increase bench press to 155 lbs today. Your recovery score is optimal.
                  </p>
                </div>
                <p className="text-xs text-neutral-400 mb-2">Today&apos;s Plan</p>
                {["Bench Press", "Incline DB Press", "Cable Flyes", "Dips"].map(
                  (ex, i) => (
                    <div
                      key={ex}
                      className="flex items-center justify-between rounded-lg bg-neutral-800/60 px-3 py-2 mb-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <Dumbbell className="h-3 w-3 text-violet-400" />
                        <span className="text-[11px]">{ex}</span>
                      </div>
                      <span className="text-[10px] text-neutral-500">
                        {3 + Math.floor(i / 2)} × {8 + i}
                      </span>
                    </div>
                  )
                )}
                <div className="mt-auto rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 p-3 text-center">
                  <p className="text-xs font-medium">Start Workout</p>
                </div>
              </div>
            </PhoneMockup>
          </BlurFade>
        </div>

        {/* Feature 2 - Analytics */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <BlurFade delay={0.2} className="flex justify-center">
            <PhoneMockup className="w-[240px] h-[500px]">
              <div className="flex flex-col h-full bg-gradient-to-b from-neutral-950 to-neutral-900 p-4 pt-10 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <LineChart className="h-4 w-4 text-blue-400" />
                  <p className="text-sm font-semibold">Progress</p>
                </div>
                <div className="rounded-xl bg-neutral-800/60 p-3 mb-3">
                  <p className="text-xs text-neutral-400 mb-2">Bench Press 1RM</p>
                  <div className="flex items-end gap-1 h-24">
                    {[50, 55, 58, 60, 65, 62, 68, 72, 75, 80, 78, 85].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600 to-cyan-400"
                          style={{ height: `${h}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-neutral-800/60 p-2.5">
                    <p className="text-[10px] text-neutral-400">Current 1RM</p>
                    <p className="text-sm font-bold text-blue-400">225 lbs</p>
                  </div>
                  <div className="rounded-lg bg-neutral-800/60 p-2.5">
                    <p className="text-[10px] text-neutral-400">Progress</p>
                    <p className="text-sm font-bold text-emerald-400">+15%</p>
                  </div>
                  <div className="rounded-lg bg-neutral-800/60 p-2.5">
                    <p className="text-[10px] text-neutral-400">Total Sets</p>
                    <p className="text-sm font-bold">1,248</p>
                  </div>
                  <div className="rounded-lg bg-neutral-800/60 p-2.5">
                    <p className="text-[10px] text-neutral-400">Volume</p>
                    <p className="text-sm font-bold">340k lbs</p>
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </BlurFade>
          <div>
            <BlurFade>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500 mb-4">
                <LineChart className="h-3.5 w-3.5" />
                Deep Analytics
              </div>
            </BlurFade>
            <BlurFade delay={0.1}>
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Visualize your progress with{" "}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  detailed charts
                </span>
              </h3>
            </BlurFade>
            <BlurFade delay={0.2}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Track every metric that matters. From estimated 1RM to total
                volume, see exactly how your training translates to results.
              </p>
            </BlurFade>
            <BlurFade delay={0.3}>
              <ul className="mt-6 space-y-3">
                {[
                  "Estimated 1RM tracking for every exercise",
                  "Volume and intensity trend analysis",
                  "Muscle group balance heatmaps",
                  "Export your data anytime in CSV or PDF",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
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
