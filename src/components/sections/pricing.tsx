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
    description: "Perfect for getting started with workout tracking.",
    features: [
      "Basic workout logging",
      "5 custom exercises",
      "Weekly summary",
      "Rest timer",
      "Exercise library",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "For serious athletes who want to optimize their training.",
    features: [
      "Everything in Free",
      "Unlimited custom exercises",
      "Advanced analytics & charts",
      "AI coach recommendations",
      "Apple Watch integration",
      "Cloud sync across devices",
      "Progress photos",
      "Export data (CSV/PDF)",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$19.99",
    period: "/month",
    description: "For coaches and gym owners managing multiple athletes.",
    features: [
      "Everything in Pro",
      "Up to 50 athletes",
      "Shared workout templates",
      "Client progress dashboard",
      "Team challenges",
      "Priority support",
      "Custom branding",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <BlurFade>
            <p className="text-sm font-medium text-violet-500 mb-3">Pricing</p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Simple,{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                transparent
              </span>{" "}
              pricing
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Start free and upgrade when you&apos;re ready. No hidden fees, no
              surprise charges. Cancel anytime.
            </p>
          </BlurFade>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <BlurFade key={plan.name} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -4 }}
                className={cn(
                  "relative rounded-2xl border p-8 h-full flex flex-col",
                  plan.popular
                    ? "border-violet-500/50 bg-card shadow-lg shadow-violet-500/10"
                    : "border-border/50 bg-card"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-3 py-1 text-xs font-medium text-white">
                      <Sparkles className="h-3 w-3" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <ul className="mb-8 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="h-4 w-4 text-violet-500 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={cn(
                    "w-full",
                    plan.popular
                      ? "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-violet-500/25"
                      : ""
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
