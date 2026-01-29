"use client";

import { BlurFade } from "@/components/magicui/animated-beam";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Powerlifter · 3 years",
    content:
      "Gym Track Pro completely changed how I train. The progressive overload tracking alone has helped me add 50lbs to my squat in 6 months.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Sarah Williams",
    role: "CrossFit Athlete",
    content:
      "The AI coach is incredible. It suggested a deload week right when I was starting to feel worn out. It's like having a personal trainer in my pocket.",
    rating: 5,
    avatar: "SW",
  },
  {
    name: "James Rodriguez",
    role: "Bodybuilder · Competitor",
    content:
      "I've tried every gym app out there. This is the only one that actually helps me track volume properly across muscle groups. The analytics are next level.",
    rating: 5,
    avatar: "JR",
  },
  {
    name: "Emma Thompson",
    role: "Fitness Coach",
    content:
      "I recommend Gym Track Pro to all my clients. The ability to share workout plans and track their progress remotely has been a game-changer for my coaching.",
    rating: 5,
    avatar: "ET",
  },
  {
    name: "David Park",
    role: "Olympic Weightlifter",
    content:
      "The exercise library with video demonstrations is fantastic. Plus, the rest timer and plate calculator save me so much time during sessions.",
    rating: 5,
    avatar: "DP",
  },
  {
    name: "Lisa Anderson",
    role: "Beginner · 6 months",
    content:
      "As someone new to the gym, this app made everything less intimidating. The guided workouts and progress photos keep me motivated every day.",
    rating: 5,
    avatar: "LA",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <BlurFade>
            <p className="text-sm font-medium text-violet-500 mb-3">
              Testimonials
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Loved by{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                50,000+ lifters
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              From beginners to competitive athletes, hear what our community
              has to say about their experience.
            </p>
          </BlurFade>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((testimonial, index) => (
            <BlurFade key={testimonial.name} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -2 }}
                className="break-inside-avoid rounded-2xl border border-border/50 bg-card p-6"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
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
