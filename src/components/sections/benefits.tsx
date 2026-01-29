"use client";

import { BlurFade } from "@/components/magicui/animated-beam";
import { motion } from "framer-motion";
import {
  Smartphone,
  Wifi,
  Shield,
  Clock,
  RefreshCw,
  Download,
} from "lucide-react";

const benefits = [
  {
    icon: Smartphone,
    title: "Works Offline",
    description:
      "Log your workouts even without internet. Everything syncs automatically when you're back online.",
  },
  {
    icon: Clock,
    title: "Quick Log",
    description:
      "Log a full workout in under 30 seconds with smart defaults and one-tap logging.",
  },
  {
    icon: RefreshCw,
    title: "Apple Watch & Wearables",
    description:
      "Seamless integration with Apple Watch, Wear OS, and popular fitness wearables.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data is encrypted and stays yours. We never sell or share your personal fitness data.",
  },
  {
    icon: Wifi,
    title: "Cloud Sync",
    description:
      "Switch between devices seamlessly. Your workouts are always available on any device.",
  },
  {
    icon: Download,
    title: "Data Export",
    description:
      "Export your entire workout history in CSV, JSON, or PDF format anytime you want.",
  },
];

export function Benefits() {
  return (
    <section className="relative py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <BlurFade>
            <p className="text-sm font-medium text-violet-500 mb-3">
              Benefits
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built for{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                serious lifters
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Every feature is designed with one goal in mind: helping you focus
              on your training while we handle the rest.
            </p>
          </BlurFade>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BlurFade key={benefit.title} delay={0.1 * index}>
              <div className="flex gap-4">
                <div className="shrink-0 h-10 w-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <benefit.icon className="h-5 w-5 text-violet-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
