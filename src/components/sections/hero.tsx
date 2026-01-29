"use client";

import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/magicui/phone-mockup";
import { BlurFade } from "@/components/magicui/animated-beam";
import {
  ArrowRight,
  Star,
  Dumbbell,
  TrendingUp,
  Timer,
  Trophy,
  Flame,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Background gradient - Indigo to Cyan like app */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-gym-primary/20 via-gym-accent/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-t from-gym-accent/10 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <BlurFade delay={0}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gym-border/60 bg-gym-card/50 px-4 py-1.5 text-sm text-gym-text-muted backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 fill-gym-warning text-gym-warning" />
                <span>iOS Native App · SwiftUI</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gym-text">
                Train Smarter,{" "}
                <span className="bg-gradient-to-r from-gym-primary via-gym-primary-light to-gym-accent bg-clip-text text-transparent">
                  Track Effortlessly
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="mt-6 max-w-lg text-base sm:text-lg text-gym-text-muted leading-relaxed">
                Follow structured workout splits, log sets and reps in under 3
                seconds, track progress with beautiful charts, and maintain
                workout streaks. Built 100% native for iOS.
              </p>
            </BlurFade>

            <BlurFade delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-gym-primary to-gym-primary-light hover:opacity-90 text-white border-0 shadow-lg shadow-gym-primary/25"
                >
                  Download Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-gym-border text-gym-text hover:bg-gym-card"
                >
                  See How It Works
                </Button>
              </div>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gym-text-muted">
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 text-gym-primary" />
                  <span>PPL · Upper/Lower · Bro Split</span>
                </div>
                <div className="flex items-center gap-2">
                  <Timer className="h-4 w-4 text-gym-accent" />
                  <span>&lt;3s set logging</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="h-4 w-4 text-gym-streak-start" />
                  <span>Streaks &amp; PRs</span>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right - Phone mockup with real app UI */}
          <BlurFade delay={0.3} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 -z-10 scale-110">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gym-primary/30 via-gym-primary-light/20 to-gym-accent/30 blur-3xl" />
              </div>

              <PhoneMockup>
                {/* Mock Dashboard screen - matching real app */}
                <div className="flex flex-col h-full bg-gym-background p-5 pt-10 text-gym-text">
                  {/* Greeting */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs text-gym-text-muted">
                        Good morning
                      </p>
                      <p className="text-sm font-semibold">Welcome back!</p>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-gym-primary to-gym-accent flex items-center justify-center text-xs font-bold">
                      GT
                    </div>
                  </div>

                  {/* Streak card */}
                  <div className="rounded-2xl bg-gradient-to-r from-gym-streak-start to-gym-streak-end p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-orange-100 mb-1">
                          Current Streak
                        </p>
                        <p className="text-2xl font-bold">14 Days</p>
                      </div>
                      <Flame className="h-8 w-8 text-orange-100" />
                    </div>
                  </div>

                  {/* Today&apos;s workout card */}
                  <div className="rounded-2xl bg-gym-card border border-gym-border p-4 mb-4">
                    <p className="text-xs text-gym-text-muted mb-1">
                      Today&apos;s Workout
                    </p>
                    <p className="text-sm font-bold mb-2">Push Day (Chest, Shoulders, Triceps)</p>
                    <div className="flex items-center gap-3 text-xs text-gym-text-muted">
                      <span className="flex items-center gap-1">
                        <Dumbbell className="h-3 w-3 text-gym-primary" /> 6
                        exercises
                      </span>
                      <span className="flex items-center gap-1">
                        <Timer className="h-3 w-3 text-gym-accent" /> ~45 min
                      </span>
                    </div>
                    <div className="mt-3 rounded-lg bg-gradient-to-r from-gym-primary to-gym-primary-light py-2 text-center text-xs font-medium">
                      Start Workout
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-gym-card border border-gym-border p-3">
                      <TrendingUp className="h-4 w-4 text-gym-success mb-1" />
                      <p className="text-lg font-bold font-mono">12.5k</p>
                      <p className="text-[10px] text-gym-text-muted">
                        Volume (lbs)
                      </p>
                    </div>
                    <div className="rounded-xl bg-gym-card border border-gym-border p-3">
                      <Trophy className="h-4 w-4 text-gym-warning mb-1" />
                      <p className="text-lg font-bold font-mono">3</p>
                      <p className="text-[10px] text-gym-text-muted">
                        New PRs This Week
                      </p>
                    </div>
                  </div>
                </div>
              </PhoneMockup>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-12 top-24 hidden lg:flex items-center gap-2 rounded-xl border border-gym-border bg-gym-card/90 px-3 py-2 shadow-lg backdrop-blur-sm"
              >
                <TrendingUp className="h-4 w-4 text-gym-success" />
                <span className="text-xs font-medium text-gym-text">
                  +23% volume
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-8 bottom-32 hidden lg:flex items-center gap-2 rounded-xl border border-gym-border bg-gym-card/90 px-3 py-2 shadow-lg backdrop-blur-sm"
              >
                <Trophy className="h-4 w-4 text-gym-warning" />
                <span className="text-xs font-medium text-gym-text">
                  New PR! 225 lbs
                </span>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
