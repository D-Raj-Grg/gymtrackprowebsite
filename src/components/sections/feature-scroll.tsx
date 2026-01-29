"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlurFade } from "@/components/magicui/animated-beam";
import {
  Dumbbell,
  BarChart3,
  Calendar,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Smart Workout Logging",
    description:
      "Log exercises with auto-suggestions. Track sets, reps, and weight with a single tap. Our AI learns your routine.",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-500/10",
    iconColor: "text-violet-500",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description:
      "Beautiful charts and insights. Track your PRs, volume, and strength gains over time with detailed analytics.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Calendar,
    title: "Workout Planner",
    description:
      "Plan your week with customizable workout templates. Drag and drop exercises to build the perfect routine.",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: Trophy,
    title: "Achievements & Goals",
    description:
      "Set goals and unlock achievements as you progress. Stay motivated with streaks, badges, and milestones.",
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-500",
  },
  {
    icon: Users,
    title: "Community Challenges",
    description:
      "Join fitness challenges with friends. Compare stats, share workouts, and push each other to new limits.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    iconColor: "text-pink-500",
  },
  {
    icon: Zap,
    title: "AI Coach",
    description:
      "Get personalized workout recommendations powered by AI. Adaptive plans that evolve with your performance.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-500",
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
      className="relative py-24 sm:py-32"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <BlurFade>
            <p className="text-sm font-medium text-violet-500 mb-3">Features</p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                level up
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed to help you track, analyze, and optimize
              every aspect of your fitness journey.
            </p>
          </BlurFade>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <BlurFade key={feature.title} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-border hover:bg-card"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor}`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
