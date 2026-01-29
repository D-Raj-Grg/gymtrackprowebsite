"use client";

import { useState } from "react";
import { BlurFade } from "@/components/magicui/animated-beam";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is GymTrack Pro free to use?",
    answer:
      "Yes! The free tier includes full workout logging, 7 built-in split templates (PPL, Upper/Lower, Bro Split, Full Body, Arnold Split, and hybrids), rest timer with push notifications, basic progress charts, workout streaks, and automatic PR detection. No account required. Upgrade to Pro only if you want advanced analytics, custom splits, cloud sync, and Apple Watch support.",
  },
  {
    question: "Does it work offline?",
    answer:
      "100% offline-first. GymTrack Pro uses SwiftData for on-device storage — no internet connection is needed to log your workouts. Your data lives on your iPhone. Pro subscribers get optional CloudKit sync to keep data across devices.",
  },
  {
    question: "What workout splits are available?",
    answer:
      "The free tier includes 7 built-in templates: Push/Pull/Legs (PPL), Upper/Lower, Bro Split, Full Body, Arnold Split, UL-PPL hybrid, and PPL-UL hybrid. Pro subscribers can build unlimited custom splits with the split builder, assigning any exercises to any day.",
  },
  {
    question: "How does the 1RM estimation work?",
    answer:
      "GymTrack Pro uses the Epley formula: weight × (1 + reps / 30). Every time you log a set, the app calculates your estimated one-rep max for that exercise and tracks it over time. You get an instant notification when you hit a new personal record.",
  },
  {
    question: "What devices does it support?",
    answer:
      "GymTrack Pro is built 100% native for iOS 17+ using SwiftUI and SwiftData. It runs on iPhone. Apple Watch companion app is planned for a future release (Phase 3). There are no plans for Android at this time.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Your data stays on your device by default. No account is required to use the app. Phase 1 has zero external dependencies — no analytics, no tracking, no data collection. Phase 3 will add optional CloudKit sync, which is encrypted and managed by Apple.",
  },
  {
    question: "Can I switch between kg and lbs?",
    answer:
      "Yes. You choose your preferred weight unit (kg or lbs) during onboarding, and you can change it anytime in Profile settings. All weight displays, suggestions, and charts update automatically when you switch.",
  },
];

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <BlurFade delay={0.05 * index}>
      <div className="border-b border-gym-border/50">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between py-5 text-left"
        >
          <span className="text-sm font-medium pr-4 text-gym-text">
            {question}
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-gym-text-muted transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-sm text-gym-text-muted leading-relaxed">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BlurFade>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <BlurFade>
            <p className="text-sm font-medium text-gym-primary mb-3">FAQ</p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gym-text">
              Frequently asked{" "}
              <span className="bg-gradient-to-r from-gym-primary to-gym-accent bg-clip-text text-transparent">
                questions
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-gym-text-muted">
              Everything you need to know about GymTrack Pro.
            </p>
          </BlurFade>
        </div>

        <div className="rounded-2xl border border-gym-border/50 bg-gym-card px-6">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
