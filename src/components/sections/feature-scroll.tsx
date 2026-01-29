"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlurFade } from "@/components/magicui/animated-beam";
import {
  Dumbbell,
  BarChart3,
  Calendar,
  Trophy,
  Flame,
  Timer,
} from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Structured Workout Splits",
    description:
      "Choose from PPL, Upper/Lower, Bro Split, Full Body, or Arnold Split. Follow proven training structures or build your own custom split.",
    bgColor: "bg-gym-primary/10",
    iconColor: "text-gym-primary",
  },
  {
    icon: Timer,
    title: "Frictionless Set Logging",
    description:
      "Log any set in under 3 seconds. Smart weight suggestions based on your last session with auto-increment. Just tap and lift.",
    bgColor: "bg-gym-accent/10",
    iconColor: "text-gym-accent",
  },
  {
    icon: BarChart3,
    title: "Progress Visualization",
    description:
      "Beautiful charts showing your estimated 1RM, total volume, and strength gains over time. Built with Swift Charts for buttery smooth performance.",
    bgColor: "bg-gym-success/10",
    iconColor: "text-gym-success",
  },
  {
    icon: Flame,
    title: "Workout Streaks",
    description:
      "Stay motivated with consecutive day tracking. Your streak counts every day you complete a workout. Don't break the chain.",
    bgColor: "bg-gym-streak-start/10",
    iconColor: "text-gym-streak-start",
  },
  {
    icon: Trophy,
    title: "Personal Records",
    description:
      "Automatic PR detection using the Epley formula for estimated 1RM. Get notified instantly when you hit a new personal best.",
    bgColor: "bg-gym-warning/10",
    iconColor: "text-gym-warning",
  },
  {
    icon: Calendar,
    title: "Workout History",
    description:
      "Calendar heatmap view of all your sessions. Tap any day to see the full workout detail — exercises, sets, reps, and weights logged.",
    bgColor: "bg-gym-primary-light/10",
    iconColor: "text-gym-primary-light",
  },
];

export function FeatureScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative py-16 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <BlurFade>
            <p className="text-sm font-medium text-gym-primary mb-3">
              Features
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gym-text">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-gym-primary to-gym-accent bg-clip-text text-transparent">
                train smarter
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-gym-text-muted max-w-2xl mx-auto">
              Powerful tools to follow structured programs, log effortlessly,
              and visualize your progress — all offline-first and native iOS.
            </p>
          </BlurFade>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <BlurFade key={feature.title} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl border border-gym-border/50 bg-gym-card/50 p-6 backdrop-blur-sm transition-colors hover:border-gym-border hover:bg-gym-card"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor}`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gym-text">
                  {feature.title}
                </h3>
                <p className="text-sm text-gym-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
