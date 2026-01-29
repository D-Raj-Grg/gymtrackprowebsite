"use client";

import { BlurFade } from "@/components/magicui/animated-beam";
import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Target,
  Clock,
  Flame,
  Trophy,
} from "lucide-react";

export function BentoGrid() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-gym-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <BlurFade>
            <p className="text-sm font-medium text-gym-primary mb-3">
              Analytics
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gym-text">
              Your training,{" "}
              <span className="bg-gradient-to-r from-gym-primary to-gym-accent bg-clip-text text-transparent">
                visualized
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-gym-text-muted max-w-2xl mx-auto">
              Beautiful dashboards powered by Swift Charts give you clear
              insights into every aspect of your training performance.
            </p>
          </BlurFade>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[180px] sm:auto-rows-[200px]">
          {/* Large card - Volume Progress chart */}
          <BlurFade delay={0.1} className="sm:col-span-2 row-span-2">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="h-full rounded-2xl border border-gym-border/50 bg-gym-card p-6 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-5 w-5 text-gym-primary" />
                <span className="text-sm font-medium text-gym-text">
                  Volume Progress
                </span>
                <span className="ml-auto text-xs text-gym-success font-medium">
                  +18% this month
                </span>
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
                      className="flex-1 rounded-t-md bg-gradient-to-t from-gym-primary to-gym-primary-light opacity-80 hover:opacity-100 transition-opacity"
                    />
                  )
                )}
              </div>
              <div className="flex justify-between mt-3 text-xs text-gym-text-muted">
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
              className="h-full rounded-2xl border border-gym-border/50 bg-gym-card p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-gym-streak-start" />
                <span className="text-sm font-medium text-gym-text">
                  Current Streak
                </span>
              </div>
              <div>
                <p className="text-4xl font-bold font-mono text-gym-text">
                  14
                </p>
                <p className="text-xs text-gym-text-muted mt-1">
                  consecutive days
                </p>
              </div>
            </motion.div>
          </BlurFade>

          {/* Weekly goal card */}
          <BlurFade delay={0.3}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full rounded-2xl border border-gym-border/50 bg-gym-card p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-gym-success" />
                <span className="text-sm font-medium text-gym-text">
                  Weekly Goal
                </span>
              </div>
              <div>
                <div className="flex items-end gap-1">
                  <p className="text-4xl font-bold font-mono text-gym-text">
                    4
                  </p>
                  <p className="text-lg text-gym-text-muted mb-1">/5</p>
                </div>
                <div className="mt-2 h-2 rounded-full bg-gym-card-hover">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-gym-success to-emerald-400" />
                </div>
              </div>
            </motion.div>
          </BlurFade>

          {/* Monthly Volume card */}
          <BlurFade delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full rounded-2xl border border-gym-border/50 bg-gym-card p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-gym-accent" />
                <span className="text-sm font-medium text-gym-text">
                  Monthly Volume
                </span>
              </div>
              <div>
                <p className="text-4xl font-bold font-mono text-gym-text">
                  142k
                </p>
                <p className="text-xs text-gym-success mt-1">
                  +18% vs last month
                </p>
              </div>
            </motion.div>
          </BlurFade>

          {/* Avg Session card */}
          <BlurFade delay={0.5}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full rounded-2xl border border-gym-border/50 bg-gym-card p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gym-warning" />
                <span className="text-sm font-medium text-gym-text">
                  Avg. Session
                </span>
              </div>
              <div>
                <p className="text-4xl font-bold font-mono text-gym-text">
                  52m
                </p>
                <p className="text-xs text-gym-text-muted mt-1">
                  this week average
                </p>
              </div>
            </motion.div>
          </BlurFade>

          {/* PRs card */}
          <BlurFade delay={0.6}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full rounded-2xl border border-gym-border/50 bg-gym-card p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-gym-warning" />
                <span className="text-sm font-medium text-gym-text">
                  PRs This Month
                </span>
              </div>
              <div>
                <p className="text-4xl font-bold font-mono text-gym-text">7</p>
                <p className="text-xs text-gym-text-muted mt-1">
                  new personal records
                </p>
              </div>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
