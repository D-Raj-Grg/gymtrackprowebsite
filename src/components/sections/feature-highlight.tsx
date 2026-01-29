"use client";

import { BlurFade } from "@/components/magicui/animated-beam";
import { Iphone15Pro } from "@/components/magicui/iphone-15-pro";
import { Button } from "@/components/ui/button";
import {
  Timer,
  BarChart3,
  Calendar,
  Wrench,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Timer,
    badge: "Lightning Fast",
    badgeColor: "text-gym-accent bg-gym-accent/10",
    title: "Log any set in",
    titleAccent: "under 3 seconds",
    accentGradient: "from-gym-accent to-cyan-400",
    description:
      "Smart suggestions from your previous sessions auto-populate weight and reps. Just confirm and move on. Progressive overload is built right into the suggestion engine.",
    src: "/images/screens/workout.png",
    alt: "GymTrack Pro Workout screen showing structured splits",
    cta: "Start Workout",
  },
  {
    icon: BarChart3,
    badge: "Deep Insights",
    badgeColor: "text-gym-primary bg-gym-primary/10",
    title: "See your strength gains in",
    titleAccent: "beautiful charts",
    accentGradient: "from-gym-primary to-gym-accent",
    description:
      "Built with Swift Charts for buttery-smooth performance. Track your estimated 1RM using the Epley formula, volume trends, and top lifts across all exercises.",
    src: "/images/screens/progress.png",
    alt: "GymTrack Pro Progress screen with volume trend chart and stats",
    cta: "Track Progress",
  },
  {
    icon: Calendar,
    badge: "Full History",
    badgeColor: "text-gym-primary-light bg-gym-primary-light/10",
    title: "Your workout history,",
    titleAccent: "always accessible",
    accentGradient: "from-gym-primary-light to-gym-accent",
    description:
      "Calendar view with highlighted workout days. Tap any date to see the full session — exercises, sets, reps, weights, duration, and total volume.",
    src: "/images/screens/history.png",
    alt: "GymTrack Pro History screen with calendar and recent workouts",
    cta: "View History",
  },
  {
    icon: Wrench,
    badge: "Built-In Tools",
    badgeColor: "text-gym-warning bg-gym-warning/10",
    title: "Every gym tool,",
    titleAccent: "in your pocket",
    accentGradient: "from-gym-warning to-gym-streak-start",
    description:
      "Countdown timer, stopwatch, BMI calculator, 1RM estimator, barbell plate loader, and a lbs/kg unit converter. All built natively — no internet required.",
    src: "/images/screens/tools.png",
    alt: "GymTrack Pro Tools screen with Timer, Stopwatch, BMI, 1RM, Plates, and Converter",
    cta: "Explore Tools",
  },
];

export function FeatureHighlight() {
  return (
    <section aria-label="Feature highlights" className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <BlurFade>
            <p className="text-sm font-medium uppercase tracking-wider text-gym-primary mb-3">
              Features
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gym-text">
              powerful features
            </h2>
          </BlurFade>
        </div>

        {/* Feature rows */}
        <div className="space-y-32 sm:space-y-40">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={feature.title}
                className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                  isReversed ? "" : ""
                }`}
              >
                {/* Phone */}
                <BlurFade
                  delay={0.2}
                  className={`flex justify-center ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative">
                    {/* Subtle glow */}
                    <div className="absolute inset-0 -z-10 scale-90 opacity-30">
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${feature.accentGradient} blur-3xl`}
                      />
                    </div>
                    <Iphone15Pro
                      className="w-[260px] sm:w-[300px] lg:w-[340px] h-auto"
                      src={feature.src}
                    />
                  </div>
                </BlurFade>

                {/* Text */}
                <div
                  className={`flex flex-col items-center text-center lg:items-start lg:text-left ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <BlurFade>
                    <div
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-5 ${feature.badgeColor}`}
                    >
                      <feature.icon className="h-3.5 w-3.5" />
                      {feature.badge}
                    </div>
                  </BlurFade>
                  <BlurFade delay={0.1}>
                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-gym-text leading-tight">
                      {feature.title}{" "}
                      <span
                        className={`bg-gradient-to-r ${feature.accentGradient} bg-clip-text text-transparent`}
                      >
                        {feature.titleAccent}
                      </span>
                    </h3>
                  </BlurFade>
                  <BlurFade delay={0.2}>
                    <p className="mt-5 text-base sm:text-lg text-gym-text-muted leading-relaxed max-w-lg">
                      {feature.description}
                    </p>
                  </BlurFade>
                  <BlurFade delay={0.3}>
                    <Button
                      size="lg"
                      className="mt-8 gap-2 bg-gradient-to-r from-gym-primary to-gym-primary-light hover:opacity-90 text-white border-0 shadow-lg shadow-gym-primary/25"
                    >
                      {feature.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </BlurFade>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
