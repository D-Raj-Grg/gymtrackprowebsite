"use client";

import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/magicui/phone-mockup";
import { BlurFade } from "@/components/magicui/animated-beam";
import { ArrowRight, Star, Dumbbell, TrendingUp, Timer, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-violet-500/20 via-purple-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <BlurFade delay={0}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                <span>Rated 4.9 on App Store</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Track Your{" "}
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Fitness Journey
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="mt-6 max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed">
                The ultimate gym companion app. Log workouts, track progress, and
                crush your fitness goals with smart analytics and personalized plans.
              </p>
            </BlurFade>

            <BlurFade delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-violet-500/25">
                  Download Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  View Demo
                </Button>
              </div>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-violet-400 to-purple-600"
                        style={{ zIndex: 5 - i }}
                      />
                    ))}
                  </div>
                  <span className="ml-2 font-medium text-foreground">50k+</span>
                  <span>active users</span>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right - Phone mockup */}
          <BlurFade delay={0.3} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 -z-10 scale-110">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-indigo-500/30 blur-3xl" />
              </div>

              <PhoneMockup>
                {/* Mock app screen */}
                <div className="flex flex-col h-full bg-gradient-to-b from-neutral-950 to-neutral-900 p-5 pt-10 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-xs text-neutral-400">Good morning</p>
                      <p className="text-sm font-semibold">Alex Johnson</p>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-xs font-bold">
                      AJ
                    </div>
                  </div>

                  {/* Today's workout card */}
                  <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 p-4 mb-4">
                    <p className="text-xs text-violet-200 mb-1">Today&apos;s Workout</p>
                    <p className="text-sm font-bold mb-3">Upper Body Strength</p>
                    <div className="flex items-center gap-3 text-xs text-violet-200">
                      <span className="flex items-center gap-1"><Timer className="h-3 w-3" /> 45 min</span>
                      <span className="flex items-center gap-1"><Dumbbell className="h-3 w-3" /> 8 exercises</span>
                    </div>
                    <div className="mt-3 h-1.5 rounded-full bg-violet-900/50">
                      <div className="h-full w-3/5 rounded-full bg-white/90" />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="rounded-xl bg-neutral-800/80 p-3">
                      <TrendingUp className="h-4 w-4 text-green-400 mb-1" />
                      <p className="text-lg font-bold">12.5k</p>
                      <p className="text-[10px] text-neutral-400">Total Weight (lbs)</p>
                    </div>
                    <div className="rounded-xl bg-neutral-800/80 p-3">
                      <Trophy className="h-4 w-4 text-yellow-400 mb-1" />
                      <p className="text-lg font-bold">28</p>
                      <p className="text-[10px] text-neutral-400">Day Streak</p>
                    </div>
                  </div>

                  {/* Recent exercises */}
                  <p className="text-xs text-neutral-400 mb-2">Recent Exercises</p>
                  {["Bench Press", "Shoulder Press", "Tricep Dips"].map(
                    (exercise, i) => (
                      <div
                        key={exercise}
                        className="flex items-center justify-between rounded-lg bg-neutral-800/50 px-3 py-2.5 mb-2"
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-lg bg-violet-600/20 flex items-center justify-center">
                            <Dumbbell className="h-3.5 w-3.5 text-violet-400" />
                          </div>
                          <div>
                            <p className="text-xs font-medium">{exercise}</p>
                            <p className="text-[10px] text-neutral-500">
                              {3 + i} sets · {8 + i * 2} reps
                            </p>
                          </div>
                        </div>
                        <p className="text-[10px] text-neutral-500">
                          {135 + i * 20} lbs
                        </p>
                      </div>
                    )
                  )}
                </div>
              </PhoneMockup>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-12 top-24 hidden lg:flex items-center gap-2 rounded-xl border border-border/60 bg-background/90 px-3 py-2 shadow-lg backdrop-blur-sm"
              >
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-xs font-medium">+23% strength</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-8 bottom-32 hidden lg:flex items-center gap-2 rounded-xl border border-border/60 bg-background/90 px-3 py-2 shadow-lg backdrop-blur-sm"
              >
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="text-xs font-medium">New PR!</span>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
