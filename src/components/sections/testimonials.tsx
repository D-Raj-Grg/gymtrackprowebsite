"use client";

import { BlurFade } from "@/components/magicui/animated-beam";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ben T.",
    role: "Beginner · 3 months",
    content:
      "I had no idea what workout split to follow when I started. The onboarding let me pick PPL and it set everything up for me. I just show up and follow the plan.",
    rating: 5,
    avatar: "BT",
    gradient: "from-gym-primary to-gym-accent",
  },
  {
    name: "Irene K.",
    role: "Intermediate · 2 years",
    content:
      "The progress charts are addictive. Watching my bench 1RM trend upward week by week keeps me showing up. PR notifications make my day every time.",
    rating: 5,
    avatar: "IK",
    gradient: "from-gym-success to-gym-accent",
  },
  {
    name: "Alex M.",
    role: "Advanced · 5 years",
    content:
      "Finally an app that doesn't try to do everything. No bloat, no social feed, no AI gimmicks. Just clean logging, volume analytics, and a custom split builder. Exactly what I needed.",
    rating: 5,
    avatar: "AM",
    gradient: "from-gym-primary-light to-gym-primary",
  },
  {
    name: "Rachel S.",
    role: "Returning Lifter",
    content:
      "I took a year off and was dreading starting over. The app made it easy to rebuild my routine. Seeing my old PRs as targets to chase again is incredibly motivating.",
    rating: 5,
    avatar: "RS",
    gradient: "from-gym-streak-start to-gym-streak-end",
  },
  {
    name: "Marcus D.",
    role: "Powerlifter · 3 years",
    content:
      "The Epley 1RM estimation is spot-on for my training. Progressive overload tracking with auto-suggestions means I never have to think about what weight to put on next.",
    rating: 5,
    avatar: "MD",
    gradient: "from-gym-warning to-gym-streak-start",
  },
  {
    name: "Priya N.",
    role: "CrossFit · 1 year",
    content:
      "Offline-first is a game changer — my gym has terrible WiFi. I log supersets back-to-back in seconds. The rest timer with haptic feedback is perfect between rounds.",
    rating: 5,
    avatar: "PN",
    gradient: "from-gym-accent to-gym-success",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <BlurFade>
            <p className="text-sm font-medium text-gym-primary mb-3">
              Testimonials
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gym-text">
              Trusted by lifters at{" "}
              <span className="bg-gradient-to-r from-gym-primary to-gym-accent bg-clip-text text-transparent">
                every level
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-gym-text-muted max-w-2xl mx-auto">
              From first-time gym goers to competitive powerlifters — hear what
              our community has to say.
            </p>
          </BlurFade>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((testimonial, index) => (
            <BlurFade key={testimonial.name} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -2 }}
                className="break-inside-avoid rounded-2xl border border-gym-border/50 bg-gym-card p-6"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gym-warning text-gym-warning"
                    />
                  ))}
                </div>
                <p className="text-sm text-gym-text-muted leading-relaxed mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`h-10 w-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-xs font-bold text-white`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gym-text">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gym-text-muted">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
