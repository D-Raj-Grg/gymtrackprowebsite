"use client";

import { BlurFade } from "@/components/magicui/animated-beam";
import { Button } from "@/components/ui/button";
import { ArrowRight, Dumbbell } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-8 sm:p-16 text-center text-white">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative z-10">
            <BlurFade>
              <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Dumbbell className="h-8 w-8 text-white" />
              </div>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Start your fitness journey today
              </h2>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="mt-4 text-base sm:text-lg text-violet-100 max-w-xl mx-auto">
                Join 50,000+ athletes who are crushing their goals with Gym
                Track Pro. Download free and see the difference.
              </p>
            </BlurFade>

            <BlurFade delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-violet-700 hover:bg-white/90 shadow-lg gap-2"
                >
                  Download Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  View Demo
                </Button>
              </div>
            </BlurFade>

            <BlurFade delay={0.4}>
              <p className="mt-6 text-xs text-violet-200">
                Free forever · No credit card required · Available on iOS &
                Android
              </p>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
