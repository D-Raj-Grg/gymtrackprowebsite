"use client";

import { BlurFade } from "@/components/magicui/animated-beam";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to start tracking workouts.",
    features: [
      "Full workout logging",
      "7 built-in split templates (PPL, Upper/Lower, etc.)",
      "Rest timer with push notifications",
      "Basic progress charts",
      "Workout streaks & PR detection",
      "Exercise library",
      "Offline-first — no account needed",
    ],
    cta: "Download Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "/month",
    description: "Advanced analytics, custom splits, and cloud sync.",
    features: [
      "Everything in Free",
      "Advanced analytics & Swift Charts",
      "Custom split builder (unlimited)",
      "CloudKit sync across devices",
      "HealthKit integration",
      "Apple Watch companion",
      "Export data (CSV / PDF)",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-16 sm:py-24 lg:py-32 bg-gym-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <BlurFade>
            <p className="text-sm font-medium text-gym-primary mb-3">
              Pricing
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gym-text">
              Simple,{" "}
              <span className="bg-gradient-to-r from-gym-primary to-gym-accent bg-clip-text text-transparent">
                transparent
              </span>{" "}
              pricing
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-gym-text-muted max-w-2xl mx-auto">
              Start free and upgrade when you&apos;re ready. No hidden fees, no
              surprise charges. Cancel anytime.
            </p>
          </BlurFade>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <BlurFade key={plan.name} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -4 }}
                className={cn(
                  "relative rounded-2xl border p-8 h-full flex flex-col",
                  plan.popular
                    ? "border-gym-primary/50 bg-gym-card shadow-lg shadow-gym-primary/10"
                    : "border-gym-border/50 bg-gym-card"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gym-primary to-gym-primary-light px-3 py-1 text-xs font-medium text-white">
                      <Sparkles className="h-3 w-3" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gym-text">
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gym-text">
                      {plan.price}
                    </span>
                    <span className="text-sm text-gym-text-muted">
                      {plan.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gym-text-muted">
                    {plan.description}
                  </p>
                </div>
                <ul className="mb-8 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="h-4 w-4 text-gym-primary mt-0.5 shrink-0" />
                      <span className="text-gym-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={cn(
                    "w-full",
                    plan.popular
                      ? "bg-gradient-to-r from-gym-primary to-gym-primary-light hover:opacity-90 text-white border-0 shadow-lg shadow-gym-primary/25"
                      : "border-gym-border text-gym-text hover:bg-gym-card-hover bg-transparent"
                  )}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
