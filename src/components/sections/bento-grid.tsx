"use client";

import { BlurFade } from "@/components/magicui/animated-beam";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Target,
  Clock,
  Flame,
  Activity,
} from "lucide-react";

export function BentoGrid() {
  return (
    <section className="relative py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <BlurFade>
            <p className="text-sm font-medium text-violet-500 mb-3">
              Analytics
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Data-driven{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                results
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Beautiful dashboards that give you clear insights into your
              training performance and progress.
            </p>
          </BlurFade>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[180px] sm:auto-rows-[200px]">
          {/* Large card - Progress chart */}
          <BlurFade delay={0.1} className="sm:col-span-2 row-span-2">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="h-full rounded-2xl border border-border/50 bg-card p-6 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-5 w-5 text-violet-500" />
                <span className="text-sm font-medium">Strength Progress</span>
              </div>
              <div className="flex-1 flex items-end gap-2 px-2">
                {[40, 55, 45, 65, 50, 75, 60, 80, 70, 85, 78, 92].map(
                  (h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-violet-600 to-purple-500 opacity-80 hover:opacity-100 transition-opacity"
                    />
                  )
                )}
              </div>
              <div className="flex justify-between mt-3 text-xs text-muted-foreground">
                <span>Jan</span>
                <span>Jun</span>
                <span>Dec</span>
              </div>
            </motion.div>
          </BlurFade>

          {/* Streak card */}
          <BlurFade delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full rounded-2xl border border-border/50 bg-card p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium">Current Streak</span>
              </div>
              <div>
                <p className="text-4xl font-bold">28</p>
                <p className="text-xs text-muted-foreground mt-1">
                  consecutive days
                </p>
              </div>
            </motion.div>
          </BlurFade>

          {/* Weekly goal card */}
          <BlurFade delay={0.3}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full rounded-2xl border border-border/50 bg-card p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-medium">Weekly Goal</span>
              </div>
              <div>
                <div className="flex items-end gap-1">
                  <p className="text-4xl font-bold">4</p>
                  <p className="text-lg text-muted-foreground mb-1">/5</p>
                </div>
                <div className="mt-2 h-2 rounded-full bg-muted">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />
                </div>
              </div>
            </motion.div>
          </BlurFade>

          {/* Volume card */}
          <BlurFade delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full rounded-2xl border border-border/50 bg-card p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Monthly Volume</span>
              </div>
              <div>
                <p className="text-4xl font-bold">142k</p>
                <p className="text-xs text-emerald-500 mt-1">
                  +18% vs last month
                </p>
              </div>
            </motion.div>
          </BlurFade>

          {/* Time card */}
          <BlurFade delay={0.5}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full rounded-2xl border border-border/50 bg-card p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-500" />
                <span className="text-sm font-medium">Avg. Session</span>
              </div>
              <div>
                <p className="text-4xl font-bold">52m</p>
                <p className="text-xs text-muted-foreground mt-1">
                  this week average
                </p>
              </div>
            </motion.div>
          </BlurFade>

          {/* Heart rate card */}
          <BlurFade delay={0.6}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full rounded-2xl border border-border/50 bg-card p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-red-500" />
                <span className="text-sm font-medium">Avg. Heart Rate</span>
              </div>
              <div>
                <p className="text-4xl font-bold">145</p>
                <p className="text-xs text-muted-foreground mt-1">
                  bpm during workout
                </p>
              </div>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
