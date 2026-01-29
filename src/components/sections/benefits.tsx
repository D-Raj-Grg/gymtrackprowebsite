"use client";

import { BlurFade } from "@/components/magicui/animated-beam";
import {
  WifiOff,
  Zap,
  Calendar,
  Shield,
  Brain,
  Smartphone,
} from "lucide-react";

const benefits = [
  {
    icon: WifiOff,
    title: "Offline-First",
    description:
      "Log workouts without internet. Your data lives on-device using SwiftData. No cloud account required — ever.",
    iconColor: "text-gym-accent",
    bgColor: "bg-gym-accent/10",
  },
  {
    icon: Zap,
    title: "Lightning Fast Logging",
    description:
      "Log a set in under 3 seconds. Smart defaults and one-tap confirmation so you spend more time lifting, less time tapping.",
    iconColor: "text-gym-warning",
    bgColor: "bg-gym-warning/10",
  },
  {
    icon: Calendar,
    title: "Structured Training",
    description:
      "Choose from 7 built-in workout splits — PPL, Upper/Lower, Bro Split, Full Body, Arnold, and hybrids. Or build custom splits.",
    iconColor: "text-gym-primary",
    bgColor: "bg-gym-primary/10",
  },
  {
    icon: Shield,
    title: "Privacy by Default",
    description:
      "Your data stays on your device. No account required. Zero external dependencies. Zero data collection. Your workouts are yours.",
    iconColor: "text-gym-success",
    bgColor: "bg-gym-success/10",
  },
  {
    icon: Brain,
    title: "Smart Suggestions",
    description:
      "Previous session weights auto-populate. Progressive overload is built into the suggestion engine — always pushing you forward.",
    iconColor: "text-gym-primary-light",
    bgColor: "bg-gym-primary-light/10",
  },
  {
    icon: Smartphone,
    title: "Native iOS Experience",
    description:
      "Built with SwiftUI for 60fps performance, haptic feedback on every interaction, and sub-1-second app launch. Feels like it belongs.",
    iconColor: "text-gym-streak-start",
    bgColor: "bg-gym-streak-start/10",
  },
];

export function Benefits() {
  return (
    <section className="relative py-24 sm:py-32 bg-gym-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <BlurFade>
            <p className="text-sm font-medium text-gym-primary mb-3">
              Why GymTrack Pro
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gym-text">
              Built for the{" "}
              <span className="bg-gradient-to-r from-gym-primary to-gym-accent bg-clip-text text-transparent">
                gym floor
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-gym-text-muted max-w-2xl mx-auto">
              Every feature is designed with one goal: helping you focus on your
              training while the app handles the rest.
            </p>
          </BlurFade>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BlurFade key={benefit.title} delay={0.1 * index}>
              <div className="flex gap-4">
                <div
                  className={`shrink-0 h-10 w-10 rounded-lg ${benefit.bgColor} flex items-center justify-center`}
                >
                  <benefit.icon
                    className={`h-5 w-5 ${benefit.iconColor}`}
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gym-text">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gym-text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
