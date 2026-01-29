"use client";

import { useState } from "react";
import { BlurFade } from "@/components/magicui/animated-beam";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is Gym Track Pro really free to use?",
    answer:
      "Yes! The free plan includes basic workout logging, a rest timer, exercise library access, and weekly summaries. You can track your workouts without ever paying a dime. Upgrade to Pro only if you want advanced analytics, AI coaching, and cloud sync.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Absolutely. You can log your entire workout offline. All data syncs automatically when you reconnect to the internet. Your workout is never interrupted by poor gym Wi-Fi.",
  },
  {
    question: "What devices are supported?",
    answer:
      "Gym Track Pro is available on iOS and Android. Pro subscribers also get Apple Watch and Wear OS support, plus a web dashboard for reviewing your stats on a larger screen.",
  },
  {
    question: "How does the AI coach work?",
    answer:
      "Our AI analyzes your workout history, recovery patterns, and goals to generate personalized workout plans. It suggests optimal weights, reps, and rest periods for each session. The more you use it, the smarter it gets.",
  },
  {
    question: "Can I import data from other apps?",
    answer:
      "Yes! We support importing workout data from Strong, JEFIT, Hevy, and several other popular fitness apps. You can also import CSV files. Your fitness history is never lost.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Your privacy is our top priority. All data is encrypted in transit and at rest. We never sell or share your personal fitness data with third parties. You can export or delete your data at any time.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your Pro or Team subscription at any time. You'll continue to have access until the end of your billing period, and you'll never be charged again after cancellation.",
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
      <div className="border-b border-border/50">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between py-5 text-left"
        >
          <span className="text-sm font-medium pr-4">{question}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
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
              <p className="pb-5 text-sm text-muted-foreground leading-relaxed">
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
            <p className="text-sm font-medium text-violet-500 mb-3">FAQ</p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Frequently asked{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                questions
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Everything you need to know about Gym Track Pro.
            </p>
          </BlurFade>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card px-6">
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
